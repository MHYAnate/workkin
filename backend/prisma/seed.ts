import { PrismaClient, SubscriptionTier, UserRole, UserStatus, VerificationLevel } from '@prisma/client';

const prisma = new PrismaClient();

// ===========================================
// SEED DATA FOR WORKKIN PLATFORM
// ===========================================

async function main() {
  console.log('🌱 Starting database seed...');

  // ===========================================
  // SERVICE CATEGORIES
  // ===========================================

  console.log('📁 Creating service categories...');

  const autoTransportCategory = await prisma.serviceCategory.upsert({
    where: { slug: 'auto-transport' },
    update: {},
    create: {
      name: 'Auto & Transport Services',
      slug: 'auto-transport',
      description: 'Vehicle repair, maintenance, and transport services',
      icon: 'car',
      order: 1,
    },
  });

  const homePropertyCategory = await prisma.serviceCategory.upsert({
    where: { slug: 'home-property' },
    update: {},
    create: {
      name: 'Home & Property Services',
      slug: 'home-property',
      description: 'Home maintenance, construction, and property services',
      icon: 'home',
      order: 2,
    },
  });

  const lifestyleProfessionalCategory = await prisma.serviceCategory.upsert({
    where: { slug: 'lifestyle-professional' },
    update: {},
    create: {
      name: 'Lifestyle & Professional Services',
      slug: 'lifestyle-professional',
      description: 'Personal care, professional services, and events',
      icon: 'briefcase',
      order: 3,
    },
  });

  // ===========================================
  // SERVICE TYPES - AUTO & TRANSPORT (27 Services)
  // ===========================================

  console.log('🚗 Creating Auto & Transport service types...');

  const autoTransportServices = [
    { serviceId: 1, name: 'Auto Spray Painting', slug: 'auto-spray-painting' },
    { serviceId: 2, name: 'Car AC Repair & Maintenance', slug: 'car-ac-repair' },
    { serviceId: 3, name: 'Mechanical Repairs', slug: 'mechanical-repairs' },
    { serviceId: 4, name: 'Panel Beating & Bodywork', slug: 'panel-beating' },
    { serviceId: 5, name: 'Electrical Rewiring', slug: 'electrical-rewiring' },
    { serviceId: 6, name: 'Towing Services', slug: 'towing-services' },
    { serviceId: 7, name: 'Tire Repair & Vulcanization', slug: 'tire-repair' },
    { serviceId: 8, name: 'Wheel Balancing & Alignment', slug: 'wheel-balancing' },
    { serviceId: 33, name: 'Car Washing & Detailing', slug: 'car-washing' },
    { serviceId: 47, name: 'Motorcycle (Okada) Repairs', slug: 'motorcycle-repairs' },
    { serviceId: 48, name: 'Tricycle (Keke/Tuk-tuk) Repairs', slug: 'tricycle-repairs' },
    { serviceId: 49, name: 'Car Upholstery & Interior Repair', slug: 'car-upholstery' },
    { serviceId: 50, name: 'Windscreen & Auto Glass Repair', slug: 'windscreen-repair' },
    { serviceId: 51, name: 'Car Battery Services', slug: 'car-battery' },
    { serviceId: 52, name: 'Vehicle Tracking & GPS Installation', slug: 'vehicle-tracking' },
    { serviceId: 53, name: 'Car Key Cutting & Programming', slug: 'car-key-cutting' },
    { serviceId: 54, name: 'Driving School & Lessons', slug: 'driving-school' },
    { serviceId: 55, name: 'Vehicle Inspection Services', slug: 'vehicle-inspection' },
    { serviceId: 56, name: 'Car Rental Services', slug: 'car-rental' },
    { serviceId: 57, name: 'Chauffeur & Driver Services', slug: 'chauffeur-services' },
    { serviceId: 58, name: 'Dispatch Rider Services', slug: 'dispatch-rider' },
    { serviceId: 59, name: 'Diesel Delivery', slug: 'diesel-delivery' },
    { serviceId: 60, name: 'Moving & Relocation', slug: 'moving-relocation' },
    { serviceId: 61, name: 'Errand Services', slug: 'errand-services' },
    { serviceId: 62, name: 'Water Delivery Services', slug: 'water-delivery' },
    { serviceId: 133, name: 'Vehicle Dealer', slug: 'vehicle-dealer', hasVehicleMarketAccess: true },
    { serviceId: 134, name: 'Individual Vehicle Seller', slug: 'individual-vehicle-seller', hasVehicleMarketAccess: true },
  ];

  for (const service of autoTransportServices) {
    await prisma.serviceType.upsert({
      where: { serviceId: service.serviceId },
      update: {},
      create: {
        categoryId: autoTransportCategory.id,
        serviceId: service.serviceId,
        name: service.name,
        slug: service.slug,
        hasVehicleMarketAccess: service.hasVehicleMarketAccess || false,
      },
    });
  }

  // ===========================================
  // SERVICE TYPES - HOME & PROPERTY (45 Services)
  // ===========================================

  console.log('🏠 Creating Home & Property service types...');

  const homePropertyServices = [
    { serviceId: 9, name: 'AC, Fridge & Cooker Repair', slug: 'appliance-repair' },
    { serviceId: 10, name: 'Carpentry Services', slug: 'carpentry' },
    { serviceId: 12, name: 'Dish Installation & Repair', slug: 'dish-installation' },
    { serviceId: 13, name: 'Electrical Services', slug: 'electrical-services' },
    { serviceId: 14, name: 'Fumigation & Pest Control', slug: 'fumigation' },
    { serviceId: 15, name: 'Gardening & Landscaping', slug: 'gardening' },
    { serviceId: 16, name: 'Generator Servicing & Repair', slug: 'generator-repair' },
    { serviceId: 17, name: 'InterLocking Floors', slug: 'interlocking-floors' },
    { serviceId: 18, name: 'Masonry & Construction', slug: 'masonry' },
    { serviceId: 19, name: 'Painting', slug: 'painting' },
    { serviceId: 21, name: 'Plumbing Services', slug: 'plumbing' },
    { serviceId: 22, name: 'P.O.P', slug: 'pop' },
    { serviceId: 25, name: 'Solar Panel Installation & Maintenance', slug: 'solar-panel' },
    { serviceId: 26, name: 'Tiling & Flooring', slug: 'tiling' },
    { serviceId: 27, name: 'Welding & Fabrication', slug: 'welding' },
    { serviceId: 28, name: 'Architectural Design & Consulting', slug: 'architectural-design' },
    { serviceId: 38, name: 'Gas Delivery & Refill', slug: 'gas-delivery' },
    { serviceId: 43, name: 'Domestic Help & Cleaning', slug: 'domestic-help' },
    { serviceId: 45, name: 'Security Services', slug: 'security-services' },
    { serviceId: 63, name: 'Roofing Services', slug: 'roofing' },
    { serviceId: 64, name: 'Borehole Drilling & Maintenance', slug: 'borehole-drilling' },
    { serviceId: 65, name: 'Water Tank Installation & Cleaning', slug: 'water-tank' },
    { serviceId: 66, name: 'Inverter Installation & Repair', slug: 'inverter' },
    { serviceId: 67, name: 'CCTV & Surveillance Installation', slug: 'cctv-installation' },
    { serviceId: 68, name: 'Aluminum Windows & Doors', slug: 'aluminum-windows' },
    { serviceId: 69, name: 'Septic Tank & Soakaway Services', slug: 'septic-tank' },
    { serviceId: 70, name: 'Burglar Proof Installation', slug: 'burglar-proof' },
    { serviceId: 71, name: 'Mosquito Net & Screen Installation', slug: 'mosquito-net' },
    { serviceId: 72, name: 'Swimming Pool Maintenance', slug: 'swimming-pool' },
    { serviceId: 73, name: 'Gate Automation & Intercom', slug: 'gate-automation' },
    { serviceId: 74, name: 'Waterproofing Services', slug: 'waterproofing' },
    { serviceId: 75, name: 'Ceiling Installation', slug: 'ceiling-installation' },
    { serviceId: 76, name: 'Wall Screeding Services', slug: 'wall-screeding' },
    { serviceId: 77, name: 'Locksmith Services', slug: 'locksmith' },
    { serviceId: 78, name: 'Water Purification & Filter Installation', slug: 'water-purification' },
    { serviceId: 79, name: 'Curtain & Blinds Installation', slug: 'curtain-blinds' },
    { serviceId: 80, name: 'Interior Decoration', slug: 'interior-decoration' },
    { serviceId: 81, name: 'Furniture Making & Upholstery', slug: 'furniture-making' },
    { serviceId: 82, name: 'Real Estate Agent', slug: 'real-estate-agent', hasPropertyMarketAccess: true },
    { serviceId: 83, name: 'DSTV/GOTV Subscription & Repair', slug: 'dstv-repair' },
    { serviceId: 131, name: 'Landlords & Property Owners', slug: 'landlords-property-owners', hasPropertyMarketAccess: true },
    { serviceId: 132, name: 'Property Management Services', slug: 'property-management', hasPropertyMarketAccess: true },
    { serviceId: 137, name: 'Property Insurance Provider', slug: 'property-insurance', isFinancialService: true },
    { serviceId: 139, name: 'Property Financing Provider', slug: 'property-financing', isFinancialService: true },
  ];

  for (const service of homePropertyServices) {
    await prisma.serviceType.upsert({
      where: { serviceId: service.serviceId },
      update: {},
      create: {
        categoryId: homePropertyCategory.id,
        serviceId: service.serviceId,
        name: service.name,
        slug: service.slug,
        hasPropertyMarketAccess: service.hasPropertyMarketAccess || false,
        isFinancialService: service.isFinancialService || false,
      },
    });
  }

  // ===========================================
  // SERVICE TYPES - LIFESTYLE & PROFESSIONAL (57 Services)
  // ===========================================

  console.log('💼 Creating Lifestyle & Professional service types...');

  const lifestyleServices = [
    { serviceId: 11, name: 'Computer Repair & Maintenance', slug: 'computer-repair' },
    { serviceId: 20, name: 'Phone Repair & Maintenance', slug: 'phone-repair' },
    { serviceId: 23, name: 'Recycling (Trash for Cash)', slug: 'recycling' },
    { serviceId: 24, name: 'Shoe Repair & Maintenance', slug: 'shoe-repair' },
    { serviceId: 29, name: 'Barbing', slug: 'barbing' },
    { serviceId: 30, name: 'BBQ Services', slug: 'bbq-services' },
    { serviceId: 31, name: 'Camera & Photography Services', slug: 'photography' },
    { serviceId: 32, name: 'Cap Wash and Maintenance', slug: 'cap-wash' },
    { serviceId: 34, name: 'Catering & Event Services', slug: 'catering' },
    { serviceId: 35, name: 'Delivery & Logistics', slug: 'delivery-logistics' },
    { serviceId: 36, name: 'Event Planning & Rentals', slug: 'event-planning' },
    { serviceId: 37, name: 'FMCG Procurement & Logistics', slug: 'fmcg-procurement' },
    { serviceId: 39, name: 'Islamiya & Quranic Studies', slug: 'islamiya' },
    { serviceId: 40, name: 'Home Tuition & Lessons', slug: 'home-tuition' },
    { serviceId: 41, name: 'Laundry & Dry Cleaning', slug: 'laundry' },
    { serviceId: 42, name: 'Medical & Healthcare', slug: 'medical-healthcare' },
    { serviceId: 44, name: 'Manicure & Pedicure', slug: 'manicure-pedicure' },
    { serviceId: 46, name: 'Tailoring Services', slug: 'tailoring' },
    { serviceId: 85, name: 'Makeup Artistry', slug: 'makeup-artistry' },
    { serviceId: 86, name: 'Spa & Massage Services', slug: 'spa-massage' },
    { serviceId: 88, name: 'Henna/Lalle Application', slug: 'henna-lalle' },
    { serviceId: 89, name: 'Skincare Services', slug: 'skincare' },
    { serviceId: 91, name: 'Legal Services', slug: 'legal-services' },
    { serviceId: 95, name: 'Translation Services', slug: 'translation' },
    { serviceId: 96, name: 'Travel Agency Services', slug: 'travel-agency' },
    { serviceId: 98, name: 'Website & App Development', slug: 'web-development' },
    { serviceId: 99, name: 'Graphic Design Services', slug: 'graphic-design' },
    { serviceId: 100, name: 'Video Production & Editing', slug: 'video-production' },
    { serviceId: 101, name: 'Social Media Management', slug: 'social-media' },
    { serviceId: 102, name: 'Digital Marketing', slug: 'digital-marketing' },
    { serviceId: 103, name: 'Printing Services', slug: 'printing' },
    { serviceId: 104, name: 'DJ Services', slug: 'dj-services' },
    { serviceId: 105, name: 'MC & Event Hosting', slug: 'mc-hosting' },
    { serviceId: 107, name: 'Decoration Services', slug: 'decoration' },
    { serviceId: 108, name: 'Cake Baking & Decoration', slug: 'cake-baking' },
    { serviceId: 109, name: 'Small Chops & Snacks', slug: 'small-chops' },
    { serviceId: 110, name: 'Bouncy Castle & Kids Entertainment', slug: 'bouncy-castle' },
    { serviceId: 111, name: 'Poultry Farming Services', slug: 'poultry-farming' },
    { serviceId: 112, name: 'Fish Farming (Aquaculture)', slug: 'fish-farming' },
    { serviceId: 113, name: 'Veterinary Services', slug: 'veterinary' },
    { serviceId: 114, name: 'Crop Farming & Agro Services', slug: 'crop-farming' },
    { serviceId: 115, name: 'Tractor & Equipment Hire', slug: 'tractor-hire' },
    { serviceId: 116, name: 'Music Lessons & Instruments', slug: 'music-lessons' },
    { serviceId: 117, name: 'Language Lessons', slug: 'language-lessons' },
    { serviceId: 118, name: 'Vocational Training', slug: 'vocational-training' },
    { serviceId: 119, name: 'Fitness & Personal Training', slug: 'fitness-training' },
    { serviceId: 122, name: 'Nanny & Childcare Services', slug: 'nanny-childcare' },
    { serviceId: 123, name: 'Elderly Care Services', slug: 'elderly-care' },
    { serviceId: 124, name: 'Home Nursing Services', slug: 'home-nursing' },
    { serviceId: 125, name: 'Pet Grooming', slug: 'pet-grooming' },
    { serviceId: 126, name: 'Pet Sitting & Walking', slug: 'pet-sitting' },
    { serviceId: 127, name: 'Pet Training', slug: 'pet-training' },
    { serviceId: 128, name: 'Watch Repair', slug: 'watch-repair' },
    { serviceId: 129, name: 'Bag Repair & Restoration', slug: 'bag-repair' },
    { serviceId: 130, name: 'Key Cutting & Duplication', slug: 'key-cutting' },
    { serviceId: 135, name: 'General Insurance Provider', slug: 'general-insurance', isFinancialService: true },
    { serviceId: 136, name: 'Vehicle Financing Provider', slug: 'vehicle-financing', isFinancialService: true },
    { serviceId: 138, name: 'Vehicle Insurance Provider', slug: 'vehicle-insurance', isFinancialService: true },
    { serviceId: 140, name: 'General Financing Provider', slug: 'general-financing', isFinancialService: true },
  ];

  for (const service of lifestyleServices) {
    await prisma.serviceType.upsert({
      where: { serviceId: service.serviceId },
      update: {},
      create: {
        categoryId: lifestyleProfessionalCategory.id,
        serviceId: service.serviceId,
        name: service.name,
        slug: service.slug,
        isFinancialService: service.isFinancialService || false,
      },
    });
  }

  // ===========================================
  // SYSTEM SETTINGS
  // ===========================================

  console.log('⚙️ Creating system settings...');

  const systemSettings = [
    {
      key: 'subscription_tiers',
      value: {
        FREE: {
          name: 'Free',
          price: 0,
          freeServiceListings: 1,
          freeVehicleSlots: 1,
          freePropertySlots: 1,
          freeProductSlots: 1,
          freeFeaturedPerMonth: 0,
        },
        BASE: {
          name: 'Base',
          priceMonthly: 5000,
          priceYearly: 50000,
          freeServiceListings: 2,
          freeVehicleSlots: 3,
          freePropertySlots: 3,
          freeProductSlots: 2,
          freeFeaturedPerMonth: 1,
        },
        MID: {
          name: 'Mid',
          priceMonthly: 15000,
          priceYearly: 150000,
          freeServiceListings: 3,
          freeVehicleSlots: 7,
          freePropertySlots: 7,
          freeProductSlots: 3,
          freeFeaturedPerMonth: 3,
        },
        TOP: {
          name: 'Top',
          priceMonthly: 50000,
          priceYearly: 500000,
          freeServiceListings: 7,
          freeVehicleSlots: 20,
          freePropertySlots: 20,
          freeProductSlots: 13,
          freeFeaturedPerMonth: -1, // unlimited
        },
      },
      description: 'Subscription tier configuration',
    },
    {
      key: 'platform_fees',
      value: {
        featuredListingFee: 2000,
        jobPostingFee: 5000,
        additionalServiceListingFee: 1500,
        additionalVehicleSlotFee: 3000,
        additionalPropertySlotFee: 3000,
        additionalProductSlotFee: 1000,
      },
      description: 'Platform fee configuration',
    },
    {
      key: 'rating_settings',
      value: {
        ratingWindowHours: 48,
        minRatingForFeatured: 4.0,
        reviewMaxLength: 500,
      },
      description: 'Rating system configuration',
    },
    {
      key: 'verification_settings',
      value: {
        levels: ['UNVERIFIED', 'BASIC_VERIFIED', 'DOCUMENT_VERIFIED', 'FULLY_VERIFIED'],
        requiredDocuments: {
          BASIC_VERIFIED: ['id_card'],
          DOCUMENT_VERIFIED: ['id_card', 'business_registration'],
          FULLY_VERIFIED: ['id_card', 'business_registration', 'physical_verification'],
        },
      },
      description: 'Verification level configuration',
    },
    {
      key: 'nigeria_states',
      value: [
        'Abia', 'Adamawa', 'Akwa Ibom', 'Anambra', 'Bauchi', 'Bayelsa', 'Benue', 'Borno',
        'Cross River', 'Delta', 'Ebonyi', 'Edo', 'Ekiti', 'Enugu', 'FCT', 'Gombe',
        'Imo', 'Jigawa', 'Kaduna', 'Kano', 'Katsina', 'Kebbi', 'Kogi', 'Kwara',
        'Lagos', 'Nasarawa', 'Niger', 'Ogun', 'Ondo', 'Osun', 'Oyo', 'Plateau',
        'Rivers', 'Sokoto', 'Taraba', 'Yobe', 'Zamfara',
      ],
      description: 'Nigerian states for location selection',
    },
  ];

  for (const setting of systemSettings) {
    await prisma.systemSetting.upsert({
      where: { key: setting.key },
      update: { value: setting.value },
      create: setting,
    });
  }

  console.log('✅ Database seed completed successfully!');
}

main()
  .catch((e) => {
    console.error('❌ Seed failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
