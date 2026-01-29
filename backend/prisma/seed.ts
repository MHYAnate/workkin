/**
 * Workkin Database Seed File
 * 
 * Compatible with current Prisma schema
 * 
 * Usage: 
 * 1. First run: npx prisma generate
 * 2. Then run: npm run prisma:seed
 */

import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import { readFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

// ES Module compatibility
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const prisma = new PrismaClient({
  log: ['warn', 'error'],
});

// ============================================
// Types
// ============================================

interface ServiceCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
  image: string;
  order: number;
  isActive: boolean;
  parentId: string | null;
}

interface ServiceData {
  serviceId: number;
  name: string;
  slug: string;
  description: string;
  categorySlug: string;
  workflowCategory: string;
  permissions: string[];
  allowedMarketModules: string[];
  hasVehicleMarketAccess: boolean;
  hasPropertyMarketAccess: boolean;
  isFinancialService: boolean;
}

// ============================================
// Data Loading Functions
// ============================================

function loadJsonFile<T>(filename: string): T {
  const possiblePaths = [
    join(__dirname, '..', 'src', 'data', filename),
    join(__dirname, '../src/data', filename),
    join(process.cwd(), 'src', 'data', filename),
  ];

  for (const filePath of possiblePaths) {
    if (existsSync(filePath)) {
      console.log(`📂 Loading data from: ${filePath}`);
      const rawData = readFileSync(filePath, 'utf-8');
      return JSON.parse(rawData) as T;
    }
  }

  throw new Error(`Could not find file: ${filename}. Tried paths: ${possiblePaths.join(', ')}`);
}

// ============================================
// Seed Functions
// ============================================

async function seedServiceCategories(categories: ServiceCategory[]) {
  console.log('\n📁 Seeding service categories...');
  
  let created = 0;
  let updated = 0;

  for (const category of categories) {
    try {
      const existing = await prisma.serviceCategory.findUnique({
        where: { slug: category.slug },
      });

      if (existing) {
        await prisma.serviceCategory.update({
          where: { slug: category.slug },
          data: {
            name: category.name,
            description: category.description,
            icon: category.icon,
            image: category.image,
            order: category.order,
            isActive: category.isActive,
          },
        });
        updated++;
      } else {
        await prisma.serviceCategory.create({
          data: {
            id: category.id,
            name: category.name,
            slug: category.slug,
            description: category.description,
            icon: category.icon,
            image: category.image,
            order: category.order,
            isActive: category.isActive,
            parentId: category.parentId,
          },
        });
        created++;
      }
    } catch (error) {
      console.error(`Error seeding category ${category.name}:`, error);
    }
  }

  console.log(`✅ Service categories: ${created} created, ${updated} updated`);
  return categories;
}

async function seedServiceTypes(services: ServiceData[]) {
  console.log('\n🔧 Seeding service types...');

  const categoryMap = new Map<string, string>();
  const dbCategories = await prisma.serviceCategory.findMany();
  dbCategories.forEach(cat => categoryMap.set(cat.slug, cat.id));

  let created = 0;
  let updated = 0;
  let skipped = 0;

  for (const service of services) {
    const categoryId = categoryMap.get(service.categorySlug);
    
    if (!categoryId) {
      console.warn(`⚠️  Category not found for service ${service.name}: ${service.categorySlug}`);
      skipped++;
      continue;
    }

    try {
      const existing = await prisma.serviceType.findUnique({
        where: { serviceId: service.serviceId },
      });

      if (existing) {
        await prisma.serviceType.update({
          where: { serviceId: service.serviceId },
          data: {
            name: service.name,
            slug: service.slug,
            description: service.description,
            categoryId: categoryId,
            allowedMarketModules: service.allowedMarketModules,
            hasVehicleMarketAccess: service.hasVehicleMarketAccess,
            hasPropertyMarketAccess: service.hasPropertyMarketAccess,
            isFinancialService: service.isFinancialService,
            isActive: true,
            order: service.serviceId,
          },
        });
        updated++;
      } else {
        await prisma.serviceType.create({
          data: {
            serviceId: service.serviceId,
            name: service.name,
            slug: service.slug,
            description: service.description,
            categoryId: categoryId,
            workflowCategory: service.workflowCategory,
            allowedMarketModules: service.allowedMarketModules,
            hasVehicleMarketAccess: service.hasVehicleMarketAccess,
            hasPropertyMarketAccess: service.hasPropertyMarketAccess,
            isFinancialService: service.isFinancialService,
            isActive: true,
            order: service.serviceId,
          },
        });
        created++;
      }
    } catch (error) {
      console.error(`Error seeding service type ${service.name}:`, error);
      skipped++;
    }
  }

  console.log(`✅ Service types: ${created} created, ${updated} updated, ${skipped} skipped`);
}

async function seedSystemSettings() {
  console.log('\n⚙️  Seeding system settings...');

  const settings = [
    {
      key: 'subscription_tiers',
      value: {
        FREE: { price: 0, freeServiceListings: 1, freeVehicleSlots: 1, freePropertySlots: 1, freeProductSlots: 1 },
        BASE: { price: 2500, freeServiceListings: 5, freeVehicleSlots: 5, freePropertySlots: 5, freeProductSlots: 10 },
        MID: { price: 5000, freeServiceListings: 15, freeVehicleSlots: 15, freePropertySlots: 15, freeProductSlots: 30 },
        TOP: { price: 10000, freeServiceListings: -1, freeVehicleSlots: -1, freePropertySlots: -1, freeProductSlots: -1 },
      },
      description: 'Subscription tier configurations with pricing and limits',
    },
    {
      key: 'platform_fees',
      value: {
        featuredListingFee: 500,
        squadVerificationFee: 2000,
        jobPostingFee: 1000,
        premiumProfileFee: 3000,
      },
      description: 'Platform fees for various premium features',
    },
    {
      key: 'rating_settings',
      value: {
        ratingWindowHours: 48,
        minimumRatingForBadge: 4.5,
        minimumRatingsForBadge: 10,
        reminderIntervalHours: 24,
      },
      description: 'Rating and review system settings',
    },
    {
      key: 'listing_limits',
      value: {
        maxImagesPerListing: 20,
        maxVideosPerListing: 3,
        maxDescriptionLength: 5000,
        featuredDurationDays: 7,
      },
      description: 'Limits for marketplace listings',
    },
    {
      key: 'verification_settings',
      value: {
        photoVerificationEnabled: true,
        documentVerificationEnabled: true,
        physicalVerificationEnabled: true,
        autoApproveBasicVerification: false,
      },
      description: 'User verification system settings',
    },
    {
      key: 'payment_gateways',
      value: {
        zainpay: { enabled: true, isPrimary: true },
        paystack: { enabled: true, isPrimary: false },
        flutterwave: { enabled: true, isPrimary: false },
      },
      description: 'Payment gateway configurations',
    },
    {
      key: 'notification_settings',
      value: {
        emailNotifications: true,
        smsNotifications: true,
        pushNotifications: true,
        inAppNotifications: true,
      },
      description: 'Notification channel settings',
    },
  ];

  let created = 0;
  let updated = 0;

  for (const setting of settings) {
    try {
      const existing = await prisma.systemSetting.findUnique({
        where: { key: setting.key },
      });

      if (existing) {
        await prisma.systemSetting.update({
          where: { key: setting.key },
          data: {
            value: setting.value,
            description: setting.description,
          },
        });
        updated++;
      } else {
        await prisma.systemSetting.create({
          data: {
            key: setting.key,
            value: setting.value,
            description: setting.description,
          },
        });
        created++;
      }
    } catch (error) {
      console.error(`Error seeding setting ${setting.key}:`, error);
    }
  }

  console.log(`✅ System settings: ${created} created, ${updated} updated`);
}

async function seedAdminUser() {
  console.log('\n👤 Seeding admin user...');

  const adminPassword = await bcrypt.hash('Admin123!', 12);
  const adminEmail = 'admin@workkin.ng';
  const adminPhone = '+2348000000001';

  try {
    const existing = await prisma.user.findFirst({
      where: {
        OR: [
          { email: adminEmail },
          { phone: adminPhone },
        ],
      },
    });

    let admin;

    if (existing) {
      admin = await prisma.user.update({
        where: { id: existing.id },
        data: {
          email: adminEmail,
          password: adminPassword,
          firstName: 'Workkin',
          lastName: 'Admin',
          role: 'SUPER_ADMIN',
          status: 'ACTIVE',
          emailVerified: true,
          phoneVerified: true,
          verificationLevel: 'FULLY_VERIFIED',
        },
      });
    } else {
      admin = await prisma.user.create({
        data: {
          email: adminEmail,
          phone: adminPhone,
          password: adminPassword,
          firstName: 'Workkin',
          lastName: 'Admin',
          displayName: 'Workkin Admin',
          role: 'SUPER_ADMIN',
          status: 'ACTIVE',
          isProvider: false,
          isClient: false,
          emailVerified: true,
          emailVerifiedAt: new Date(),
          phoneVerified: true,
          phoneVerifiedAt: new Date(),
          verificationLevel: 'FULLY_VERIFIED',
          country: 'Nigeria',
          countryCode: 'NG',
          state: 'Federal Capital Territory',
          city: 'Abuja',
        },
      });
    }

    // Create or update admin profile
    await prisma.profile.upsert({
      where: { userId: admin.id },
      update: {
        businessName: 'Workkin Platform',
        businessDescription: 'Platform Administration',
      },
      create: {
        userId: admin.id,
        businessName: 'Workkin Platform',
        businessDescription: 'Platform Administration',
        averageRating: 5.0,
        totalRatings: 0,
      },
    });

    console.log(`✅ Admin user created/updated: ${admin.email}`);
    return admin;
  } catch (error) {
    console.error('Error seeding admin user:', error);
    throw error;
  }
}

async function seedTestProvider() {
  console.log('\n👷 Seeding test provider user...');

  const providerPassword = await bcrypt.hash('Provider123!', 12);
  const providerEmail = 'provider@test.workkin.ng';
  const providerPhone = '+2348100000001';

  try {
    const existing = await prisma.user.findFirst({
      where: {
        OR: [
          { email: providerEmail },
          { phone: providerPhone },
        ],
      },
    });

    let provider;

    if (existing) {
      provider = await prisma.user.update({
        where: { id: existing.id },
        data: {
          email: providerEmail,
          password: providerPassword,
          firstName: 'Chidi',
          lastName: 'Okonkwo',
          role: 'PROVIDER',
          status: 'ACTIVE',
          isProvider: true,
        },
      });
    } else {
      provider = await prisma.user.create({
        data: {
          email: providerEmail,
          phone: providerPhone,
          password: providerPassword,
          firstName: 'Chidi',
          lastName: 'Okonkwo',
          displayName: 'Chidi Auto Services',
          role: 'PROVIDER',
          status: 'ACTIVE',
          isProvider: true,
          isClient: true,
          isOpenToWork: true,
          emailVerified: true,
          emailVerifiedAt: new Date(),
          phoneVerified: true,
          phoneVerifiedAt: new Date(),
          verificationLevel: 'BASIC_VERIFIED',
          country: 'Nigeria',
          countryCode: 'NG',
          state: 'Lagos',
          city: 'Ikeja',
          contactPreference: 'ALL',
        },
      });
    }

    // Create provider profile
    await prisma.profile.upsert({
      where: { userId: provider.id },
      update: {
        businessName: 'Chidi Auto Services',
        businessDescription: 'Professional auto mechanic with 10 years of experience.',
        yearsOfExperience: 10,
      },
      create: {
        userId: provider.id,
        businessName: 'Chidi Auto Services',
        businessDescription: 'Professional auto mechanic with 10 years of experience. Specializing in Toyota, Honda, and Mercedes-Benz repairs.',
        yearsOfExperience: 10,
        qualifications: ['ASE Certified', 'Toyota Certified Technician'],
        certifications: ['Engine Diagnostics', 'Electrical Systems'],
        serviceAreas: ['Ikeja', 'Victoria Island', 'Lekki', 'Surulere'],
        serviceRadius: 25,
        averageRating: 4.8,
        totalRatings: 127,
        providerRating: 4.8,
        totalServicesCompleted: 450,
        responseRate: 95.5,
        responseTime: 15,
      },
    });

    // Create subscription
    const subscriptionEndDate = new Date();
    subscriptionEndDate.setMonth(subscriptionEndDate.getMonth() + 1);

    await prisma.subscription.upsert({
      where: { userId: provider.id },
      update: {
        tier: 'BASE',
        status: 'ACTIVE',
        endDate: subscriptionEndDate,
      },
      create: {
        userId: provider.id,
        tier: 'BASE',
        status: 'ACTIVE',
        freeServiceListings: 5,
        freeVehicleSlots: 5,
        freePropertySlots: 5,
        freeProductSlots: 10,
        freeFeaturedPerMonth: 1,
        price: 2500,
        currency: 'NGN',
        billingCycle: 'monthly',
        startDate: new Date(),
        endDate: subscriptionEndDate,
      },
    });

    // Create wallet
    await prisma.wallet.upsert({
      where: { userId: provider.id },
      update: { balance: 15000 },
      create: {
        userId: provider.id,
        balance: 15000,
        currency: 'NGN',
      },
    });

    console.log(`✅ Test provider created/updated: ${provider.email}`);
    return provider;
  } catch (error) {
    console.error('Error seeding test provider:', error);
    throw error;
  }
}

async function seedTestClient() {
  console.log('\n🙋 Seeding test client user...');

  const clientPassword = await bcrypt.hash('Client123!', 12);
  const clientEmail = 'client@test.workkin.ng';
  const clientPhone = '+2348100000002';

  try {
    const existing = await prisma.user.findFirst({
      where: {
        OR: [
          { email: clientEmail },
          { phone: clientPhone },
        ],
      },
    });

    let client;

    if (existing) {
      client = await prisma.user.update({
        where: { id: existing.id },
        data: {
          email: clientEmail,
          password: clientPassword,
          firstName: 'Amina',
          lastName: 'Bello',
          role: 'USER',
          status: 'ACTIVE',
        },
      });
    } else {
      client = await prisma.user.create({
        data: {
          email: clientEmail,
          phone: clientPhone,
          password: clientPassword,
          firstName: 'Amina',
          lastName: 'Bello',
          displayName: 'Amina Bello',
          role: 'USER',
          status: 'ACTIVE',
          isProvider: false,
          isClient: true,
          isCurrentlyHiring: true,
          emailVerified: true,
          emailVerifiedAt: new Date(),
          phoneVerified: true,
          phoneVerifiedAt: new Date(),
          verificationLevel: 'BASIC_VERIFIED',
          country: 'Nigeria',
          countryCode: 'NG',
          state: 'Lagos',
          city: 'Lekki',
          contactPreference: 'WHATSAPP',
        },
      });
    }

    // Create client profile
    await prisma.profile.upsert({
      where: { userId: client.id },
      update: {},
      create: {
        userId: client.id,
        averageRating: 4.9,
        totalRatings: 23,
        clientRating: 4.9,
      },
    });

    // Create FREE subscription
    await prisma.subscription.upsert({
      where: { userId: client.id },
      update: {
        tier: 'FREE',
        status: 'ACTIVE',
      },
      create: {
        userId: client.id,
        tier: 'FREE',
        status: 'ACTIVE',
        freeServiceListings: 1,
        freeVehicleSlots: 1,
        freePropertySlots: 1,
        freeProductSlots: 1,
        freeFeaturedPerMonth: 0,
        price: 0,
        currency: 'NGN',
        startDate: new Date(),
      },
    });

    // Create wallet
    await prisma.wallet.upsert({
      where: { userId: client.id },
      update: {},
      create: {
        userId: client.id,
        balance: 0,
        currency: 'NGN',
      },
    });

    console.log(`✅ Test client created/updated: ${client.email}`);
    return client;
  } catch (error) {
    console.error('Error seeding test client:', error);
    throw error;
  }
}

async function seedVehicleDealer() {
  console.log('\n🚗 Seeding test vehicle dealer...');

  const dealerPassword = await bcrypt.hash('Dealer123!', 12);
  const dealerEmail = 'dealer@test.workkin.ng';
  const dealerPhone = '+2348100000003';

  try {
    const existing = await prisma.user.findFirst({
      where: {
        OR: [
          { email: dealerEmail },
          { phone: dealerPhone },
        ],
      },
    });

    let dealer;

    if (existing) {
      dealer = await prisma.user.update({
        where: { id: existing.id },
        data: {
          email: dealerEmail,
          password: dealerPassword,
          firstName: 'Emeka',
          lastName: 'Nwachukwu',
          role: 'PROVIDER',
          status: 'ACTIVE',
          isProvider: true,
        },
      });
    } else {
      dealer = await prisma.user.create({
        data: {
          email: dealerEmail,
          phone: dealerPhone,
          password: dealerPassword,
          firstName: 'Emeka',
          lastName: 'Nwachukwu',
          displayName: 'Emeka Motors',
          role: 'PROVIDER',
          status: 'ACTIVE',
          isProvider: true,
          isClient: true,
          emailVerified: true,
          emailVerifiedAt: new Date(),
          phoneVerified: true,
          phoneVerifiedAt: new Date(),
          verificationLevel: 'DOCUMENT_VERIFIED',
          country: 'Nigeria',
          countryCode: 'NG',
          state: 'Lagos',
          city: 'Lekki',
          contactPreference: 'ALL',
          bankName: 'Guaranty Trust Bank',
          bankAccountNumber: '0123456789',
          bankAccountName: 'Emeka Motors Limited',
          bankCode: '058',
        },
      });
    }

    // Create dealer profile
    await prisma.profile.upsert({
      where: { userId: dealer.id },
      update: {
        businessName: 'Emeka Motors',
      },
      create: {
        userId: dealer.id,
        businessName: 'Emeka Motors',
        businessDescription: 'Premium vehicle dealership specializing in foreign used and brand new vehicles.',
        yearsOfExperience: 15,
        qualifications: ['Licensed Vehicle Dealer'],
        certifications: ['CAC Registered', 'SON Certified'],
        serviceAreas: ['Lagos', 'Abuja', 'Port Harcourt'],
        averageRating: 4.7,
        totalRatings: 89,
        providerRating: 4.7,
        totalVehiclesSold: 320,
        responseRate: 98.0,
        responseTime: 10,
        website: 'https://emekamotors.ng',
        instagram: '@emekamotors',
        facebook: 'EmekamotorsNg',
      },
    });

    // Create MID subscription
    const subscriptionEndDate = new Date();
    subscriptionEndDate.setMonth(subscriptionEndDate.getMonth() + 1);

    await prisma.subscription.upsert({
      where: { userId: dealer.id },
      update: {
        tier: 'MID',
        status: 'ACTIVE',
      },
      create: {
        userId: dealer.id,
        tier: 'MID',
        status: 'ACTIVE',
        freeServiceListings: 15,
        freeVehicleSlots: 15,
        freePropertySlots: 15,
        freeProductSlots: 30,
        freeFeaturedPerMonth: 3,
        price: 5000,
        currency: 'NGN',
        billingCycle: 'monthly',
        startDate: new Date(),
        endDate: subscriptionEndDate,
      },
    });

    // Create wallet
    await prisma.wallet.upsert({
      where: { userId: dealer.id },
      update: { balance: 50000 },
      create: {
        userId: dealer.id,
        balance: 50000,
        currency: 'NGN',
      },
    });

    console.log(`✅ Test vehicle dealer created/updated: ${dealer.email}`);
    return dealer;
  } catch (error) {
    console.error('Error seeding vehicle dealer:', error);
    throw error;
  }
}

async function seedRealEstateAgent() {
  console.log('\n🏠 Seeding test real estate agent...');

  const agentPassword = await bcrypt.hash('Agent123!', 12);
  const agentEmail = 'agent@test.workkin.ng';
  const agentPhone = '+2348100000004';

  try {
    const existing = await prisma.user.findFirst({
      where: {
        OR: [
          { email: agentEmail },
          { phone: agentPhone },
        ],
      },
    });

    let agent;

    if (existing) {
      agent = await prisma.user.update({
        where: { id: existing.id },
        data: {
          email: agentEmail,
          password: agentPassword,
          firstName: 'Funke',
          lastName: 'Adeyemi',
          role: 'PROVIDER',
          status: 'ACTIVE',
          isProvider: true,
        },
      });
    } else {
      agent = await prisma.user.create({
        data: {
          email: agentEmail,
          phone: agentPhone,
          password: agentPassword,
          firstName: 'Funke',
          lastName: 'Adeyemi',
          displayName: 'Funke Properties',
          role: 'PROVIDER',
          status: 'ACTIVE',
          isProvider: true,
          isClient: true,
          emailVerified: true,
          emailVerifiedAt: new Date(),
          phoneVerified: true,
          phoneVerifiedAt: new Date(),
          verificationLevel: 'FULLY_VERIFIED',
          country: 'Nigeria',
          countryCode: 'NG',
          state: 'Lagos',
          city: 'Victoria Island',
          contactPreference: 'ALL',
          bankName: 'First Bank of Nigeria',
          bankAccountNumber: '3012345678',
          bankAccountName: 'Funke Adeyemi Properties Ltd',
          bankCode: '011',
        },
      });
    }

    // Create agent profile
    await prisma.profile.upsert({
      where: { userId: agent.id },
      update: {
        businessName: 'Funke Properties',
      },
      create: {
        userId: agent.id,
        businessName: 'Funke Properties',
        businessDescription: 'Premier real estate agency in Lagos. We specialize in luxury apartments, commercial properties, and land.',
        yearsOfExperience: 12,
        qualifications: ['Licensed Real Estate Agent', 'NIESV Member'],
        certifications: ['CAC Registered', 'Lagos State Licensed'],
        serviceAreas: ['Victoria Island', 'Lekki', 'Ikoyi', 'Banana Island', 'Abuja'],
        averageRating: 4.9,
        totalRatings: 156,
        providerRating: 4.9,
        totalPropertiesSold: 78,
        responseRate: 99.0,
        responseTime: 5,
        website: 'https://funkeproperties.com',
        instagram: '@funkeproperties',
        linkedin: 'funke-adeyemi-properties',
      },
    });

    // Create TOP subscription
    const subscriptionEndDate = new Date();
    subscriptionEndDate.setMonth(subscriptionEndDate.getMonth() + 1);

    await prisma.subscription.upsert({
      where: { userId: agent.id },
      update: {
        tier: 'TOP',
        status: 'ACTIVE',
      },
      create: {
        userId: agent.id,
        tier: 'TOP',
        status: 'ACTIVE',
        freeServiceListings: -1,
        freeVehicleSlots: -1,
        freePropertySlots: -1,
        freeProductSlots: -1,
        freeFeaturedPerMonth: 10,
        price: 10000,
        currency: 'NGN',
        billingCycle: 'monthly',
        startDate: new Date(),
        endDate: subscriptionEndDate,
      },
    });

    // Create wallet
    await prisma.wallet.upsert({
      where: { userId: agent.id },
      update: { balance: 100000 },
      create: {
        userId: agent.id,
        balance: 100000,
        currency: 'NGN',
      },
    });

    console.log(`✅ Test real estate agent created/updated: ${agent.email}`);
    return agent;
  } catch (error) {
    console.error('Error seeding real estate agent:', error);
    throw error;
  }
}

async function seedFinancialServiceProvider() {
  console.log('\n💰 Seeding test financial service provider...');

  const financePassword = await bcrypt.hash('Finance123!', 12);
  const financeEmail = 'finance@test.workkin.ng';
  const financePhone = '+2348100000005';

  try {
    const existing = await prisma.user.findFirst({
      where: {
        OR: [
          { email: financeEmail },
          { phone: financePhone },
        ],
      },
    });

    let financeProvider;

    if (existing) {
      financeProvider = await prisma.user.update({
        where: { id: existing.id },
        data: {
          email: financeEmail,
          password: financePassword,
          firstName: 'Oluwaseun',
          lastName: 'Akinwale',
          role: 'PROVIDER',
          status: 'ACTIVE',
          isProvider: true,
        },
      });
    } else {
      financeProvider = await prisma.user.create({
        data: {
          email: financeEmail,
          phone: financePhone,
          password: financePassword,
          firstName: 'Oluwaseun',
          lastName: 'Akinwale',
          displayName: 'SafeGuard Insurance',
          role: 'PROVIDER',
          status: 'ACTIVE',
          isProvider: true,
          isClient: false,
          emailVerified: true,
          emailVerifiedAt: new Date(),
          phoneVerified: true,
          phoneVerifiedAt: new Date(),
          verificationLevel: 'FULLY_VERIFIED',
          country: 'Nigeria',
          countryCode: 'NG',
          state: 'Lagos',
          city: 'Lagos Island',
          contactPreference: 'CALL',
        },
      });
    }

    // Create finance provider profile
    await prisma.profile.upsert({
      where: { userId: financeProvider.id },
      update: {
        businessName: 'SafeGuard Insurance Services',
      },
      create: {
        userId: financeProvider.id,
        businessName: 'SafeGuard Insurance Services',
        businessDescription: 'Licensed insurance brokerage providing comprehensive coverage for vehicles, properties, health, and more.',
        yearsOfExperience: 20,
        qualifications: ['NAICOM Licensed', 'Chartered Insurance Institute'],
        certifications: ['NAICOM Registered', 'CAC Registered'],
        serviceAreas: ['Lagos', 'Abuja', 'Port Harcourt', 'Kano', 'Ibadan'],
        averageRating: 4.6,
        totalRatings: 234,
        providerRating: 4.6,
        responseRate: 97.0,
        responseTime: 30,
        website: 'https://safeguardinsurance.ng',
      },
    });

    // Create MID subscription
    const subscriptionEndDate = new Date();
    subscriptionEndDate.setMonth(subscriptionEndDate.getMonth() + 1);

    await prisma.subscription.upsert({
      where: { userId: financeProvider.id },
      update: {
        tier: 'MID',
        status: 'ACTIVE',
      },
      create: {
        userId: financeProvider.id,
        tier: 'MID',
        status: 'ACTIVE',
        freeServiceListings: 15,
        freeVehicleSlots: 15,
        freePropertySlots: 15,
        freeProductSlots: 30,
        freeFeaturedPerMonth: 3,
        price: 5000,
        currency: 'NGN',
        billingCycle: 'monthly',
        startDate: new Date(),
        endDate: subscriptionEndDate,
      },
    });

    // Create wallet
    await prisma.wallet.upsert({
      where: { userId: financeProvider.id },
      update: {},
      create: {
        userId: financeProvider.id,
        balance: 0,
        currency: 'NGN',
      },
    });

    console.log(`✅ Test financial service provider created/updated: ${financeProvider.email}`);
    return financeProvider;
  } catch (error) {
    console.error('Error seeding financial service provider:', error);
    throw error;
  }
}

async function seedSampleService(providerId: string) {
  console.log('\n🔧 Seeding sample service listing...');

  try {
    const serviceType = await prisma.serviceType.findUnique({
      where: { serviceId: 3 },
    });

    if (!serviceType) {
      console.warn('⚠️  Service type not found, skipping sample service');
      return;
    }

    const existingService = await prisma.service.findFirst({
      where: {
        userId: providerId,
        title: 'Complete Auto Mechanical Repairs',
      },
    });

    if (existingService) {
      console.log('✅ Sample service already exists, skipping');
      return existingService;
    }

    const service = await prisma.service.create({
      data: {
        userId: providerId,
        serviceTypeId: serviceType.id,
        title: 'Complete Auto Mechanical Repairs',
        slug: 'complete-auto-mechanical-repairs-' + Date.now(),
        description: `Professional mechanical repair services for all vehicle makes and models. 

Services include:
• Engine diagnostics and repairs
• Transmission service and repairs
• Brake system maintenance
• Suspension and steering repairs
• General maintenance

We specialize in Toyota, Honda, and Mercedes-Benz vehicles.
Home service available within Lagos.`,
        price: 15000,
        priceType: 'starting_from',
        currency: 'NGN',
        country: 'Nigeria',
        state: 'Lagos',
        city: 'Ikeja',
        address: 'Allen Avenue, Ikeja',
        latitude: 6.6018,
        longitude: 3.3515,
        serviceRadius: 25,
        images: [],
        videos: [],
        isAvailable: true,
        availabilitySchedule: {
          monday: { open: '08:00', close: '18:00' },
          tuesday: { open: '08:00', close: '18:00' },
          wednesday: { open: '08:00', close: '18:00' },
          thursday: { open: '08:00', close: '18:00' },
          friday: { open: '08:00', close: '18:00' },
          saturday: { open: '09:00', close: '15:00' },
          sunday: null,
        },
        status: 'ACTIVE',
        isFeatured: false,
        viewCount: 0,
        inquiryCount: 0,
        bookingCount: 0,
        publishedAt: new Date(),
      },
    });

    console.log(`✅ Sample service created: ${service.title}`);
    return service;
  } catch (error) {
    console.error('Error seeding sample service:', error);
  }
}

// ============================================
// Main Seed Function
// ============================================

async function main() {
  console.log('🌱 Starting Workkin database seed...\n');
  console.log('='.repeat(50));

  const startTime = Date.now();

  try {
    // Load JSON data files
    console.log('\n📂 Loading data files...');
    
    let serviceCategories: ServiceCategory[];
    let services: ServiceData[];
    
    try {
      serviceCategories = loadJsonFile<ServiceCategory[]>('serviceCategories.json');
      services = loadJsonFile<ServiceData[]>('services.json');
      
      console.log(`   ✓ Loaded ${serviceCategories.length} service categories`);
      console.log(`   ✓ Loaded ${services.length} services`);
    } catch (error) {
      console.error('❌ Error loading JSON files:', error);
      console.log('\n⚠️  Make sure the data files exist in src/data/ directory');
      throw error;
    }

    // Seed data
    await seedServiceCategories(serviceCategories);
    await seedServiceTypes(services);
    await seedSystemSettings();

    // Seed users
    await seedAdminUser();
    const provider = await seedTestProvider();
    await seedTestClient();
    await seedVehicleDealer();
    await seedRealEstateAgent();
    await seedFinancialServiceProvider();

    // Seed sample listings
    if (provider) {
      await seedSampleService(provider.id);
    }

    const endTime = Date.now();
    const duration = ((endTime - startTime) / 1000).toFixed(2);

    console.log('\n' + '='.repeat(50));
    console.log(`\n✅ Database seeding completed successfully!`);
    console.log(`⏱️  Total time: ${duration} seconds`);
    
    console.log('\n📋 Summary:');
    console.log(`   • Service categories: ${serviceCategories.length}`);
    console.log(`   • Service types: ${services.length}`);
    console.log('   • System settings: 7');
    console.log('   • Users created: 6 (admin, provider, client, dealer, agent, finance)');
    
    console.log('\n🔐 Test Credentials:');
    console.log('   Admin:    admin@workkin.ng / Admin123!');
    console.log('   Provider: provider@test.workkin.ng / Provider123!');
    console.log('   Client:   client@test.workkin.ng / Client123!');
    console.log('   Dealer:   dealer@test.workkin.ng / Dealer123!');
    console.log('   Agent:    agent@test.workkin.ng / Agent123!');
    console.log('   Finance:  finance@test.workkin.ng / Finance123!');

  } catch (error) {
    console.error('\n❌ Seeding failed:', error);
    throw error;
  }
}

// ============================================
// Execute
// ============================================

main()
  .catch((e) => {
    console.error('Fatal error during seeding:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    console.log('\n👋 Database connection closed.');
  });