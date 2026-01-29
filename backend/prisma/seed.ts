/**
 * Workkin Database Seed Script
 * 
 * This script populates the database with:
 * - All 140 service types with correct permissions
 * - Service categories
 * - Nigerian states and cities
 * - Sample admin and test users
 * - Subscription tiers with pricing
 * - Service permission mappings
 * 
 * Run with: npx prisma db seed
 */

import { PrismaClient, SubscriptionTier, SubscriptionStatus, UserRole, UserStatus, VerificationLevel, ServicePermission } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import * as fs from 'fs';
import * as path from 'path';

const prisma = new PrismaClient();

// ============================================
// LOGGING UTILITIES
// ============================================

const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  red: '\x1b[31m',
  cyan: '\x1b[36m',
  magenta: '\x1b[35m',
};

function log(message: string, type: 'info' | 'success' | 'warning' | 'error' = 'info'): void {
  const color = {
    info: colors.blue,
    success: colors.green,
    warning: colors.yellow,
    error: colors.red,
  }[type];
  console.log(`${color}[${type.toUpperCase()}]${colors.reset} ${message}`);
}

function logSection(title: string): void {
  console.log(`\n${colors.cyan}${'='.repeat(60)}${colors.reset}`);
  console.log(`${colors.magenta}${title}${colors.reset}`);
  console.log(`${colors.cyan}${'='.repeat(60)}${colors.reset}\n`);
}

// ============================================
// DATA LOADING UTILITIES
// ============================================

function loadJsonFile<T>(filename: string): T {
  const filePath = path.join(__dirname, '../src/data', filename);
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    log(`Loaded ${filename}`, 'success');
    return JSON.parse(data) as T;
  } catch (error) {
    log(`Failed to load ${filename}: ${error}`, 'error');
    throw error;
  }
}

// ============================================
// TYPE DEFINITIONS
// ============================================

interface ServiceCategoryData {
  categories: Array<{
    name: string;
    slug: string;
    description: string;
    icon: string;
    order: number;
  }>;
}

interface ServiceData {
  services: Array<{
    serviceId: number;
    name: string;
    slug: string;
    description: string;
    categorySlug: string;
    workflowCategory: string;
    permissions: string[];
    hasVehicleMarketAccess: boolean;
    hasPropertyMarketAccess: boolean;
    isFinancialService: boolean;
    icon?: string;
  }>;
}

interface NigerianStatesData {
  states: Array<{
    name: string;
    slug: string;
    capital: string;
    region: string;
    cities: string[];
  }>;
}

interface NigerianBanksData {
  banks: Array<{
    name: string;
    code: string;
    slug: string;
    nipCode: string;
    type: string;
    isActive: boolean;
  }>;
}

interface VehicleMakesData {
  makes: Array<{
    name: string;
    slug: string;
    country: string;
    models: string[];
    isPopular: boolean;
  }>;
}

interface PropertyTypesData {
  propertyTypes: Array<{
    type: string;
    name: string;
    slug: string;
    description: string;
    subtypes: Array<{
      subtype: string;
      name: string;
      slug: string;
      description: string;
    }>;
  }>;
}

// ============================================
// SUBSCRIPTION TIER CONFIGURATION
// ============================================

const subscriptionTiers = [
  {
    tier: SubscriptionTier.FREE,
    name: 'Free',
    price: 0,
    currency: 'NGN',
    billingCycle: null,
    freeServiceListings: 1,
    freeVehicleSlots: 1,
    freePropertySlots: 1,
    freeProductSlots: 1,
    freeFeaturedPerMonth: 0,
    isContactInfoVisible: false,
    isPaymentInfoVisible: false,
    canViewExternalLinks: false,
  },
  {
    tier: SubscriptionTier.BASE,
    name: 'Base',
    price: 2500,
    currency: 'NGN',
    billingCycle: 'monthly',
    freeServiceListings: 3,
    freeVehicleSlots: 3,
    freePropertySlots: 3,
    freeProductSlots: 5,
    freeFeaturedPerMonth: 1,
    isContactInfoVisible: true,
    isPaymentInfoVisible: true,
    canViewExternalLinks: true,
  },
  {
    tier: SubscriptionTier.MID,
    name: 'Mid',
    price: 5000,
    currency: 'NGN',
    billingCycle: 'monthly',
    freeServiceListings: 10,
    freeVehicleSlots: 10,
    freePropertySlots: 10,
    freeProductSlots: 15,
    freeFeaturedPerMonth: 3,
    isContactInfoVisible: true,
    isPaymentInfoVisible: true,
    canViewExternalLinks: true,
  },
  {
    tier: SubscriptionTier.TOP,
    name: 'Top',
    price: 10000,
    currency: 'NGN',
    billingCycle: 'monthly',
    freeServiceListings: 50,
    freeVehicleSlots: 50,
    freePropertySlots: 50,
    freeProductSlots: 100,
    freeFeaturedPerMonth: 10,
    isContactInfoVisible: true,
    isPaymentInfoVisible: true,
    canViewExternalLinks: true,
  },
];

// ============================================
// SERVICE CATEGORIES DATA (Inline as backup)
// ============================================

const defaultServiceCategories = [
  {
    name: 'Mechanics & Auto Repair',
    slug: 'mechanics-auto-repair',
    description: 'Vehicle repair, maintenance, and mechanical services',
    icon: 'wrench',
    order: 1,
  },
  {
    name: 'Vehicle Sales',
    slug: 'vehicle-sales',
    description: 'Vehicle dealers and individual sellers',
    icon: 'car',
    order: 2,
  },
  {
    name: 'Transportation Services',
    slug: 'transportation-services',
    description: 'Driving, delivery, and logistics services',
    icon: 'truck',
    order: 3,
  },
  {
    name: 'Construction & Building',
    slug: 'construction-building',
    description: 'Building construction and renovation services',
    icon: 'building',
    order: 4,
  },
  {
    name: 'Home Maintenance',
    slug: 'home-maintenance',
    description: 'Home repair and maintenance services',
    icon: 'home',
    order: 5,
  },
  {
    name: 'Real Estate Services',
    slug: 'real-estate-services',
    description: 'Property sales, rentals, and management',
    icon: 'real-estate',
    order: 6,
  },
  {
    name: 'Personal Services',
    slug: 'personal-services',
    description: 'Beauty, wellness, and personal care services',
    icon: 'user',
    order: 7,
  },
  {
    name: 'Professional Services',
    slug: 'professional-services',
    description: 'Business and professional services',
    icon: 'briefcase',
    order: 8,
  },
  {
    name: 'Financial Services',
    slug: 'financial-services',
    description: 'Insurance and financing services',
    icon: 'dollar-sign',
    order: 9,
  },
];

// ============================================
// ALL 140 SERVICES DATA (Based on workflow document)
// ============================================

const allServices = [
  // Category 1: Auto & Transport Services
  { serviceId: 1, name: 'Auto Spray Painting', slug: 'auto-spray-painting', description: 'Professional vehicle spray painting and refinishing services', categorySlug: 'mechanics-auto-repair', workflowCategory: 'Auto & Transport', permissions: ['SERVICE_PROVIDER'], hasVehicleMarketAccess: false, hasPropertyMarketAccess: false, isFinancialService: false },
  { serviceId: 2, name: 'Car AC Repair & Maintenance', slug: 'car-ac-repair-maintenance', description: 'Vehicle air conditioning repair, maintenance, and gas refilling', categorySlug: 'mechanics-auto-repair', workflowCategory: 'Auto & Transport', permissions: ['SERVICE_PROVIDER'], hasVehicleMarketAccess: false, hasPropertyMarketAccess: false, isFinancialService: false },
  { serviceId: 3, name: 'Mechanical Repairs', slug: 'mechanical-repairs', description: 'General vehicle mechanical repairs and engine servicing', categorySlug: 'mechanics-auto-repair', workflowCategory: 'Auto & Transport', permissions: ['SERVICE_PROVIDER'], hasVehicleMarketAccess: false, hasPropertyMarketAccess: false, isFinancialService: false },
  { serviceId: 4, name: 'Panel Beating & Bodywork', slug: 'panel-beating-bodywork', description: 'Vehicle body repair, dent removal, and panel restoration', categorySlug: 'mechanics-auto-repair', workflowCategory: 'Auto & Transport', permissions: ['SERVICE_PROVIDER'], hasVehicleMarketAccess: false, hasPropertyMarketAccess: false, isFinancialService: false },
  { serviceId: 5, name: 'Electrical Rewiring', slug: 'electrical-rewiring', description: 'Vehicle electrical systems repair and rewiring services', categorySlug: 'mechanics-auto-repair', workflowCategory: 'Auto & Transport', permissions: ['SERVICE_PROVIDER'], hasVehicleMarketAccess: false, hasPropertyMarketAccess: false, isFinancialService: false },
  { serviceId: 6, name: 'Towing Services', slug: 'towing-services', description: 'Vehicle towing and roadside assistance services', categorySlug: 'transportation-services', workflowCategory: 'Auto & Transport', permissions: ['SERVICE_PROVIDER'], hasVehicleMarketAccess: false, hasPropertyMarketAccess: false, isFinancialService: false },
  { serviceId: 7, name: 'Tire Repair & Vulcanization', slug: 'tire-repair-vulcanization', description: 'Tire repair, vulcanizing, and replacement services', categorySlug: 'mechanics-auto-repair', workflowCategory: 'Auto & Transport', permissions: ['SERVICE_PROVIDER'], hasVehicleMarketAccess: false, hasPropertyMarketAccess: false, isFinancialService: false },
  { serviceId: 8, name: 'Wheel Balancing & Alignment', slug: 'wheel-balancing-alignment', description: 'Professional wheel balancing and alignment services', categorySlug: 'mechanics-auto-repair', workflowCategory: 'Auto & Transport', permissions: ['SERVICE_PROVIDER'], hasVehicleMarketAccess: false, hasPropertyMarketAccess: false, isFinancialService: false },
  { serviceId: 33, name: 'Car Washing & Detailing', slug: 'car-washing-detailing', description: 'Complete car wash, cleaning, and detailing services', categorySlug: 'mechanics-auto-repair', workflowCategory: 'Auto & Transport', permissions: ['SERVICE_PROVIDER'], hasVehicleMarketAccess: false, hasPropertyMarketAccess: false, isFinancialService: false },
  { serviceId: 47, name: 'Motorcycle (Okada) Repairs', slug: 'motorcycle-okada-repairs', description: 'Motorcycle and okada repair and maintenance services', categorySlug: 'mechanics-auto-repair', workflowCategory: 'Auto & Transport', permissions: ['SERVICE_PROVIDER'], hasVehicleMarketAccess: false, hasPropertyMarketAccess: false, isFinancialService: false },
  { serviceId: 48, name: 'Tricycle (Keke/Tuk-tuk) Repairs', slug: 'tricycle-keke-repairs', description: 'Keke napep and tricycle repair services', categorySlug: 'mechanics-auto-repair', workflowCategory: 'Auto & Transport', permissions: ['SERVICE_PROVIDER'], hasVehicleMarketAccess: false, hasPropertyMarketAccess: false, isFinancialService: false },
  { serviceId: 49, name: 'Car Upholstery & Interior Repair', slug: 'car-upholstery-interior-repair', description: 'Vehicle seat covers, interior trim, and upholstery services', categorySlug: 'mechanics-auto-repair', workflowCategory: 'Auto & Transport', permissions: ['SERVICE_PROVIDER'], hasVehicleMarketAccess: false, hasPropertyMarketAccess: false, isFinancialService: false },
  { serviceId: 50, name: 'Windscreen & Auto Glass Repair', slug: 'windscreen-auto-glass-repair', description: 'Windscreen replacement and auto glass repair services', categorySlug: 'mechanics-auto-repair', workflowCategory: 'Auto & Transport', permissions: ['SERVICE_PROVIDER'], hasVehicleMarketAccess: false, hasPropertyMarketAccess: false, isFinancialService: false },
  { serviceId: 51, name: 'Car Battery Services', slug: 'car-battery-services', description: 'Battery sales, installation, and charging services', categorySlug: 'mechanics-auto-repair', workflowCategory: 'Auto & Transport', permissions: ['SERVICE_PROVIDER'], hasVehicleMarketAccess: false, hasPropertyMarketAccess: false, isFinancialService: false },
  { serviceId: 52, name: 'Vehicle Tracking & GPS Installation', slug: 'vehicle-tracking-gps-installation', description: 'GPS tracker installation and vehicle security systems', categorySlug: 'mechanics-auto-repair', workflowCategory: 'Auto & Transport', permissions: ['SERVICE_PROVIDER'], hasVehicleMarketAccess: false, hasPropertyMarketAccess: false, isFinancialService: false },
  { serviceId: 53, name: 'Car Key Cutting & Programming', slug: 'car-key-cutting-programming', description: 'Spare key cutting and key fob programming', categorySlug: 'mechanics-auto-repair', workflowCategory: 'Auto & Transport', permissions: ['SERVICE_PROVIDER'], hasVehicleMarketAccess: false, hasPropertyMarketAccess: false, isFinancialService: false },
  { serviceId: 54, name: 'Driving School & Lessons', slug: 'driving-school-lessons', description: 'Professional driving lessons and licensing assistance', categorySlug: 'transportation-services', workflowCategory: 'Auto & Transport', permissions: ['SERVICE_PROVIDER'], hasVehicleMarketAccess: false, hasPropertyMarketAccess: false, isFinancialService: false },
  { serviceId: 55, name: 'Vehicle Inspection Services', slug: 'vehicle-inspection-services', description: 'Pre-purchase inspection and vehicle assessment', categorySlug: 'mechanics-auto-repair', workflowCategory: 'Auto & Transport', permissions: ['SERVICE_PROVIDER'], hasVehicleMarketAccess: false, hasPropertyMarketAccess: false, isFinancialService: false },
  { serviceId: 56, name: 'Car Rental Services', slug: 'car-rental-services', description: 'Vehicle rental and hire services', categorySlug: 'transportation-services', workflowCategory: 'Auto & Transport', permissions: ['SERVICE_PROVIDER'], hasVehicleMarketAccess: false, hasPropertyMarketAccess: false, isFinancialService: false },
  { serviceId: 57, name: 'Chauffeur & Driver Services', slug: 'chauffeur-driver-services', description: 'Professional chauffeur and personal driver services', categorySlug: 'transportation-services', workflowCategory: 'Auto & Transport', permissions: ['SERVICE_PROVIDER'], hasVehicleMarketAccess: false, hasPropertyMarketAccess: false, isFinancialService: false },
  { serviceId: 58, name: 'Dispatch Rider Services', slug: 'dispatch-rider-services', description: 'Motorcycle delivery and dispatch rider services', categorySlug: 'transportation-services', workflowCategory: 'Auto & Transport', permissions: ['SERVICE_PROVIDER'], hasVehicleMarketAccess: false, hasPropertyMarketAccess: false, isFinancialService: false },
  { serviceId: 59, name: 'Diesel Delivery', slug: 'diesel-delivery', description: 'Diesel fuel delivery to homes and businesses', categorySlug: 'transportation-services', workflowCategory: 'Auto & Transport', permissions: ['SERVICE_PROVIDER'], hasVehicleMarketAccess: false, hasPropertyMarketAccess: false, isFinancialService: false },
  { serviceId: 60, name: 'Moving & Relocation', slug: 'moving-relocation', description: 'Home and office moving and relocation services', categorySlug: 'transportation-services', workflowCategory: 'Auto & Transport', permissions: ['SERVICE_PROVIDER'], hasVehicleMarketAccess: false, hasPropertyMarketAccess: false, isFinancialService: false },
  { serviceId: 61, name: 'Errand Services', slug: 'errand-services', description: 'Personal and business errand running services', categorySlug: 'transportation-services', workflowCategory: 'Auto & Transport', permissions: ['SERVICE_PROVIDER'], hasVehicleMarketAccess: false, hasPropertyMarketAccess: false, isFinancialService: false },
  { serviceId: 62, name: 'Water Delivery Services', slug: 'water-delivery-services', description: 'Clean water delivery to homes and businesses', categorySlug: 'transportation-services', workflowCategory: 'Auto & Transport', permissions: ['SERVICE_PROVIDER'], hasVehicleMarketAccess: false, hasPropertyMarketAccess: false, isFinancialService: false },
  { serviceId: 133, name: 'Vehicle Dealer', slug: 'vehicle-dealer', description: 'Licensed vehicle dealership with multiple vehicles for sale', categorySlug: 'vehicle-sales', workflowCategory: 'Auto & Transport', permissions: ['VEHICLE_MARKET_ACCESS', 'SERVICE_PROVIDER'], hasVehicleMarketAccess: true, hasPropertyMarketAccess: false, isFinancialService: false },
  { serviceId: 134, name: 'Individual Vehicle Seller', slug: 'individual-vehicle-seller', description: 'Individual selling personal vehicles', categorySlug: 'vehicle-sales', workflowCategory: 'Auto & Transport', permissions: ['VEHICLE_MARKET_ACCESS'], hasVehicleMarketAccess: true, hasPropertyMarketAccess: false, isFinancialService: false },

  // Category 2: Home & Property Services
  { serviceId: 9, name: 'AC, Fridge & Cooker Repair', slug: 'ac-fridge-cooker-repair', description: 'Repair and maintenance of AC, refrigerators, and cookers', categorySlug: 'home-maintenance', workflowCategory: 'Home & Property', permissions: ['SERVICE_PROVIDER'], hasVehicleMarketAccess: false, hasPropertyMarketAccess: false, isFinancialService: false },
  { serviceId: 10, name: 'Carpentry Services', slug: 'carpentry-services', description: 'Wood work, furniture making, and carpentry repairs', categorySlug: 'construction-building', workflowCategory: 'Home & Property', permissions: ['SERVICE_PROVIDER'], hasVehicleMarketAccess: false, hasPropertyMarketAccess: false, isFinancialService: false },
  { serviceId: 12, name: 'Dish Installation & Repair', slug: 'dish-installation-repair', description: 'Satellite dish installation, alignment, and repair', categorySlug: 'home-maintenance', workflowCategory: 'Home & Property', permissions: ['SERVICE_PROVIDER'], hasVehicleMarketAccess: false, hasPropertyMarketAccess: false, isFinancialService: false },
  { serviceId: 13, name: 'Electrical Services', slug: 'electrical-services', description: 'Electrical wiring, repairs, and installations', categorySlug: 'home-maintenance', workflowCategory: 'Home & Property', permissions: ['SERVICE_PROVIDER'], hasVehicleMarketAccess: false, hasPropertyMarketAccess: false, isFinancialService: false },
  { serviceId: 14, name: 'Fumigation & Pest Control', slug: 'fumigation-pest-control', description: 'Pest control and fumigation services for homes and offices', categorySlug: 'home-maintenance', workflowCategory: 'Home & Property', permissions: ['SERVICE_PROVIDER'], hasVehicleMarketAccess: false, hasPropertyMarketAccess: false, isFinancialService: false },
  { serviceId: 15, name: 'Gardening & Landscaping', slug: 'gardening-landscaping', description: 'Garden maintenance, landscaping, and lawn care', categorySlug: 'home-maintenance', workflowCategory: 'Home & Property', permissions: ['SERVICE_PROVIDER'], hasVehicleMarketAccess: false, hasPropertyMarketAccess: false, isFinancialService: false },
  { serviceId: 16, name: 'Generator Servicing & Repair', slug: 'generator-servicing-repair', description: 'Generator maintenance, repair, and servicing', categorySlug: 'home-maintenance', workflowCategory: 'Home & Property', permissions: ['SERVICE_PROVIDER'], hasVehicleMarketAccess: false, hasPropertyMarketAccess: false, isFinancialService: false },
  { serviceId: 17, name: 'Interlocking Floors', slug: 'interlocking-floors', description: 'Interlocking paving stones installation', categorySlug: 'construction-building', workflowCategory: 'Home & Property', permissions: ['SERVICE_PROVIDER'], hasVehicleMarketAccess: false, hasPropertyMarketAccess: false, isFinancialService: false },
  { serviceId: 18, name: 'Masonry & Construction', slug: 'masonry-construction', description: 'Building construction, bricklaying, and masonry work', categorySlug: 'construction-building', workflowCategory: 'Home & Property', permissions: ['SERVICE_PROVIDER'], hasVehicleMarketAccess: false, hasPropertyMarketAccess: false, isFinancialService: false },
  { serviceId: 19, name: 'Painting', slug: 'painting', description: 'Interior and exterior painting services', categorySlug: 'construction-building', workflowCategory: 'Home & Property', permissions: ['SERVICE_PROVIDER'], hasVehicleMarketAccess: false, hasPropertyMarketAccess: false, isFinancialService: false },
  { serviceId: 21, name: 'Plumbing Services', slug: 'plumbing-services', description: 'Plumbing installation, repairs, and maintenance', categorySlug: 'home-maintenance', workflowCategory: 'Home & Property', permissions: ['SERVICE_PROVIDER'], hasVehicleMarketAccess: false, hasPropertyMarketAccess: false, isFinancialService: false },
  { serviceId: 22, name: 'P.O.P', slug: 'pop', description: 'Plaster of Paris ceiling and wall finishing', categorySlug: 'construction-building', workflowCategory: 'Home & Property', permissions: ['SERVICE_PROVIDER'], hasVehicleMarketAccess: false, hasPropertyMarketAccess: false, isFinancialService: false },
  { serviceId: 25, name: 'Solar Panel Installation & Maintenance', slug: 'solar-panel-installation-maintenance', description: 'Solar power system installation and maintenance', categorySlug: 'home-maintenance', workflowCategory: 'Home & Property', permissions: ['SERVICE_PROVIDER'], hasVehicleMarketAccess: false, hasPropertyMarketAccess: false, isFinancialService: false },
  { serviceId: 26, name: 'Tiling & Flooring', slug: 'tiling-flooring', description: 'Floor and wall tiling installation services', categorySlug: 'construction-building', workflowCategory: 'Home & Property', permissions: ['SERVICE_PROVIDER'], hasVehicleMarketAccess: false, hasPropertyMarketAccess: false, isFinancialService: false },
  { serviceId: 27, name: 'Welding & Fabrication', slug: 'welding-fabrication', description: 'Metal welding, gates, and fabrication work', categorySlug: 'construction-building', workflowCategory: 'Home & Property', permissions: ['SERVICE_PROVIDER'], hasVehicleMarketAccess: false, hasPropertyMarketAccess: false, isFinancialService: false },
  { serviceId: 28, name: 'Architectural Design & Consulting', slug: 'architectural-design-consulting', description: 'Building design, architectural plans, and consulting', categorySlug: 'construction-building', workflowCategory: 'Home & Property', permissions: ['SERVICE_PROVIDER'], hasVehicleMarketAccess: false, hasPropertyMarketAccess: false, isFinancialService: false },
  { serviceId: 38, name: 'Gas Delivery & Refill', slug: 'gas-delivery-refill', description: 'Cooking gas delivery and cylinder refilling', categorySlug: 'home-maintenance', workflowCategory: 'Home & Property', permissions: ['SERVICE_PROVIDER'], hasVehicleMarketAccess: false, hasPropertyMarketAccess: false, isFinancialService: false },
  { serviceId: 43, name: 'Domestic Help & Cleaning', slug: 'domestic-help-cleaning', description: 'House cleaning and domestic help services', categorySlug: 'home-maintenance', workflowCategory: 'Home & Property', permissions: ['SERVICE_PROVIDER'], hasVehicleMarketAccess: false, hasPropertyMarketAccess: false, isFinancialService: false },
  { serviceId: 45, name: 'Security Services', slug: 'security-services', description: 'Security guard and property protection services', categorySlug: 'home-maintenance', workflowCategory: 'Home & Property', permissions: ['SERVICE_PROVIDER'], hasVehicleMarketAccess: false, hasPropertyMarketAccess: false, isFinancialService: false },
  { serviceId: 63, name: 'Roofing Services', slug: 'roofing-services', description: 'Roof installation, repair, and waterproofing', categorySlug: 'construction-building', workflowCategory: 'Home & Property', permissions: ['SERVICE_PROVIDER'], hasVehicleMarketAccess: false, hasPropertyMarketAccess: false, isFinancialService: false },
  { serviceId: 64, name: 'Borehole Drilling & Maintenance', slug: 'borehole-drilling-maintenance', description: 'Borehole drilling and water pump maintenance', categorySlug: 'construction-building', workflowCategory: 'Home & Property', permissions: ['SERVICE_PROVIDER'], hasVehicleMarketAccess: false, hasPropertyMarketAccess: false, isFinancialService: false },
  { serviceId: 65, name: 'Water Tank Installation & Cleaning', slug: 'water-tank-installation-cleaning', description: 'Water tank installation and cleaning services', categorySlug: 'home-maintenance', workflowCategory: 'Home & Property', permissions: ['SERVICE_PROVIDER'], hasVehicleMarketAccess: false, hasPropertyMarketAccess: false, isFinancialService: false },
  { serviceId: 66, name: 'Inverter Installation & Repair', slug: 'inverter-installation-repair', description: 'Power inverter installation and repair services', categorySlug: 'home-maintenance', workflowCategory: 'Home & Property', permissions: ['SERVICE_PROVIDER'], hasVehicleMarketAccess: false, hasPropertyMarketAccess: false, isFinancialService: false },
  { serviceId: 67, name: 'CCTV & Surveillance Installation', slug: 'cctv-surveillance-installation', description: 'Security camera and surveillance system installation', categorySlug: 'home-maintenance', workflowCategory: 'Home & Property', permissions: ['SERVICE_PROVIDER'], hasVehicleMarketAccess: false, hasPropertyMarketAccess: false, isFinancialService: false },
  { serviceId: 68, name: 'Aluminum Windows & Doors', slug: 'aluminum-windows-doors', description: 'Aluminum window and door fabrication and installation', categorySlug: 'construction-building', workflowCategory: 'Home & Property', permissions: ['SERVICE_PROVIDER'], hasVehicleMarketAccess: false, hasPropertyMarketAccess: false, isFinancialService: false },
  { serviceId: 69, name: 'Septic Tank & Soakaway Services', slug: 'septic-tank-soakaway-services', description: 'Septic tank construction, cleaning, and maintenance', categorySlug: 'construction-building', workflowCategory: 'Home & Property', permissions: ['SERVICE_PROVIDER'], hasVehicleMarketAccess: false, hasPropertyMarketAccess: false, isFinancialService: false },
  { serviceId: 70, name: 'Burglar Proof Installation', slug: 'burglar-proof-installation', description: 'Burglar proof doors and window protection', categorySlug: 'home-maintenance', workflowCategory: 'Home & Property', permissions: ['SERVICE_PROVIDER'], hasVehicleMarketAccess: false, hasPropertyMarketAccess: false, isFinancialService: false },
  { serviceId: 71, name: 'Mosquito Net & Screen Installation', slug: 'mosquito-net-screen-installation', description: 'Window net and mosquito screen installation', categorySlug: 'home-maintenance', workflowCategory: 'Home & Property', permissions: ['SERVICE_PROVIDER'], hasVehicleMarketAccess: false, hasPropertyMarketAccess: false, isFinancialService: false },
  { serviceId: 72, name: 'Swimming Pool Maintenance', slug: 'swimming-pool-maintenance', description: 'Pool cleaning, treatment, and maintenance', categorySlug: 'home-maintenance', workflowCategory: 'Home & Property', permissions: ['SERVICE_PROVIDER'], hasVehicleMarketAccess: false, hasPropertyMarketAccess: false, isFinancialService: false },
  { serviceId: 73, name: 'Gate Automation & Intercom', slug: 'gate-automation-intercom', description: 'Automated gate and intercom system installation', categorySlug: 'home-maintenance', workflowCategory: 'Home & Property', permissions: ['SERVICE_PROVIDER'], hasVehicleMarketAccess: false, hasPropertyMarketAccess: false, isFinancialService: false },
  { serviceId: 74, name: 'Waterproofing Services', slug: 'waterproofing-services', description: 'Building waterproofing and damp proofing', categorySlug: 'construction-building', workflowCategory: 'Home & Property', permissions: ['SERVICE_PROVIDER'], hasVehicleMarketAccess: false, hasPropertyMarketAccess: false, isFinancialService: false },
  { serviceId: 75, name: 'Ceiling Installation', slug: 'ceiling-installation', description: 'Suspended ceiling and false ceiling installation', categorySlug: 'construction-building', workflowCategory: 'Home & Property', permissions: ['SERVICE_PROVIDER'], hasVehicleMarketAccess: false, hasPropertyMarketAccess: false, isFinancialService: false },
  { serviceId: 76, name: 'Wall Screeding Services', slug: 'wall-screeding-services', description: 'Wall plastering and screeding services', categorySlug: 'construction-building', workflowCategory: 'Home & Property', permissions: ['SERVICE_PROVIDER'], hasVehicleMarketAccess: false, hasPropertyMarketAccess: false, isFinancialService: false },
  { serviceId: 77, name: 'Locksmith Services', slug: 'locksmith-services', description: 'Lock installation, repair, and key making', categorySlug: 'home-maintenance', workflowCategory: 'Home & Property', permissions: ['SERVICE_PROVIDER'], hasVehicleMarketAccess: false, hasPropertyMarketAccess: false, isFinancialService: false },
  { serviceId: 78, name: 'Water Purification & Filter Installation', slug: 'water-purification-filter-installation', description: 'Water filter and purification system installation', categorySlug: 'home-maintenance', workflowCategory: 'Home & Property', permissions: ['SERVICE_PROVIDER'], hasVehicleMarketAccess: false, hasPropertyMarketAccess: false, isFinancialService: false },
  { serviceId: 79, name: 'Curtain & Blinds Installation', slug: 'curtain-blinds-installation', description: 'Window curtain and blind fitting services', categorySlug: 'home-maintenance', workflowCategory: 'Home & Property', permissions: ['SERVICE_PROVIDER'], hasVehicleMarketAccess: false, hasPropertyMarketAccess: false, isFinancialService: false },
  { serviceId: 80, name: 'Interior Decoration', slug: 'interior-decoration', description: 'Home and office interior design and decoration', categorySlug: 'home-maintenance', workflowCategory: 'Home & Property', permissions: ['SERVICE_PROVIDER'], hasVehicleMarketAccess: false, hasPropertyMarketAccess: false, isFinancialService: false },
  { serviceId: 81, name: 'Furniture Making & Upholstery', slug: 'furniture-making-upholstery', description: 'Custom furniture making and upholstery services', categorySlug: 'construction-building', workflowCategory: 'Home & Property', permissions: ['SERVICE_PROVIDER'], hasVehicleMarketAccess: false, hasPropertyMarketAccess: false, isFinancialService: false },
  { serviceId: 82, name: 'Real Estate Agent', slug: 'real-estate-agent', description: 'Licensed real estate agent for property sales and rentals', categorySlug: 'real-estate-services', workflowCategory: 'Home & Property', permissions: ['REAL_ESTATE_MARKET_ACCESS', 'SERVICE_PROVIDER'], hasVehicleMarketAccess: false, hasPropertyMarketAccess: true, isFinancialService: false },
  { serviceId: 83, name: 'DSTV/GOTV Subscription & Repair', slug: 'dstv-gotv-subscription-repair', description: 'DSTV and GOTV installation, subscription, and repairs', categorySlug: 'home-maintenance', workflowCategory: 'Home & Property', permissions: ['SERVICE_PROVIDER'], hasVehicleMarketAccess: false, hasPropertyMarketAccess: false, isFinancialService: false },
  { serviceId: 131, name: 'Landlords & Property Owners', slug: 'landlords-property-owners', description: 'Property owners listing properties for sale or rent', categorySlug: 'real-estate-services', workflowCategory: 'Home & Property', permissions: ['REAL_ESTATE_MARKET_ACCESS'], hasVehicleMarketAccess: false, hasPropertyMarketAccess: true, isFinancialService: false },
  { serviceId: 132, name: 'Property Management Services', slug: 'property-management-services', description: 'Professional property management and facility services', categorySlug: 'real-estate-services', workflowCategory: 'Home & Property', permissions: ['REAL_ESTATE_MARKET_ACCESS', 'SERVICE_PROVIDER'], hasVehicleMarketAccess: false, hasPropertyMarketAccess: true, isFinancialService: false },
  { serviceId: 137, name: 'Property Insurance Provider', slug: 'property-insurance-provider', description: 'Insurance services for property and real estate', categorySlug: 'financial-services', workflowCategory: 'Home & Property', permissions: ['FINANCIAL_SERVICES', 'SERVICE_PROVIDER'], hasVehicleMarketAccess: false, hasPropertyMarketAccess: false, isFinancialService: true },
  { serviceId: 139, name: 'Property Financing Provider', slug: 'property-financing-provider', description: 'Mortgage and property financing services', categorySlug: 'financial-services', workflowCategory: 'Home & Property', permissions: ['FINANCIAL_SERVICES', 'SERVICE_PROVIDER'], hasVehicleMarketAccess: false, hasPropertyMarketAccess: false, isFinancialService: true },

  // Category 3: Lifestyle & Professional Services
  { serviceId: 11, name: 'Computer Repair & Maintenance', slug: 'computer-repair-maintenance', description: 'Computer and laptop repair services', categorySlug: 'professional-services', workflowCategory: 'Lifestyle & Professional', permissions: ['SERVICE_PROVIDER'], hasVehicleMarketAccess: false, hasPropertyMarketAccess: false, isFinancialService: false },
  { serviceId: 20, name: 'Phone Repair & Maintenance', slug: 'phone-repair-maintenance', description: 'Mobile phone and tablet repair services', categorySlug: 'professional-services', workflowCategory: 'Lifestyle & Professional', permissions: ['SERVICE_PROVIDER'], hasVehicleMarketAccess: false, hasPropertyMarketAccess: false, isFinancialService: false },
  { serviceId: 23, name: 'Recycling (Trash for Cash)', slug: 'recycling-trash-for-cash', description: 'Waste recycling and trash collection for cash', categorySlug: 'professional-services', workflowCategory: 'Lifestyle & Professional', permissions: ['SERVICE_PROVIDER'], hasVehicleMarketAccess: false, hasPropertyMarketAccess: false, isFinancialService: false },
  { serviceId: 24, name: 'Shoe Repair & Maintenance', slug: 'shoe-repair-maintenance', description: 'Shoe repair, polishing, and restoration services', categorySlug: 'personal-services', workflowCategory: 'Lifestyle & Professional', permissions: ['SERVICE_PROVIDER'], hasVehicleMarketAccess: false, hasPropertyMarketAccess: false, isFinancialService: false },
  { serviceId: 29, name: 'Barbing', slug: 'barbing', description: 'Professional barbing and men\'s grooming services', categorySlug: 'personal-services', workflowCategory: 'Lifestyle & Professional', permissions: ['SERVICE_PROVIDER'], hasVehicleMarketAccess: false, hasPropertyMarketAccess: false, isFinancialService: false },
  { serviceId: 30, name: 'BBQ Services', slug: 'bbq-services', description: 'Outdoor BBQ and suya grilling services', categorySlug: 'personal-services', workflowCategory: 'Lifestyle & Professional', permissions: ['SERVICE_PROVIDER'], hasVehicleMarketAccess: false, hasPropertyMarketAccess: false, isFinancialService: false },
  { serviceId: 31, name: 'Camera & Photography Services', slug: 'camera-photography-services', description: 'Professional photography and videography services', categorySlug: 'professional-services', workflowCategory: 'Lifestyle & Professional', permissions: ['SERVICE_PROVIDER'], hasVehicleMarketAccess: false, hasPropertyMarketAccess: false, isFinancialService: false },
  { serviceId: 32, name: 'Cap Wash and Maintenance', slug: 'cap-wash-maintenance', description: 'Traditional cap (bariga, fila) washing and maintenance', categorySlug: 'personal-services', workflowCategory: 'Lifestyle & Professional', permissions: ['SERVICE_PROVIDER'], hasVehicleMarketAccess: false, hasPropertyMarketAccess: false, isFinancialService: false },
  { serviceId: 34, name: 'Catering & Event Services', slug: 'catering-event-services', description: 'Food catering for events and occasions', categorySlug: 'professional-services', workflowCategory: 'Lifestyle & Professional', permissions: ['SERVICE_PROVIDER'], hasVehicleMarketAccess: false, hasPropertyMarketAccess: false, isFinancialService: false },
  { serviceId: 35, name: 'Delivery & Logistics', slug: 'delivery-logistics', description: 'Package delivery and logistics services', categorySlug: 'professional-services', workflowCategory: 'Lifestyle & Professional', permissions: ['SERVICE_PROVIDER'], hasVehicleMarketAccess: false, hasPropertyMarketAccess: false, isFinancialService: false },
  { serviceId: 36, name: 'Event Planning & Rentals', slug: 'event-planning-rentals', description: 'Event planning and equipment rental services', categorySlug: 'professional-services', workflowCategory: 'Lifestyle & Professional', permissions: ['SERVICE_PROVIDER'], hasVehicleMarketAccess: false, hasPropertyMarketAccess: false, isFinancialService: false },
  { serviceId: 37, name: 'FMCG Procurement & Logistics', slug: 'fmcg-procurement-logistics', description: 'Fast-moving consumer goods procurement', categorySlug: 'professional-services', workflowCategory: 'Lifestyle & Professional', permissions: ['SERVICE_PROVIDER'], hasVehicleMarketAccess: false, hasPropertyMarketAccess: false, isFinancialService: false },
  { serviceId: 39, name: 'Islamiya & Quranic Studies', slug: 'islamiya-quranic-studies', description: 'Islamic education and Quran teaching', categorySlug: 'professional-services', workflowCategory: 'Lifestyle & Professional', permissions: ['SERVICE_PROVIDER'], hasVehicleMarketAccess: false, hasPropertyMarketAccess: false, isFinancialService: false },
  { serviceId: 40, name: 'Home Tuition & Lessons', slug: 'home-tuition-lessons', description: 'Private tutoring and home lessons', categorySlug: 'professional-services', workflowCategory: 'Lifestyle & Professional', permissions: ['SERVICE_PROVIDER'], hasVehicleMarketAccess: false, hasPropertyMarketAccess: false, isFinancialService: false },
  { serviceId: 41, name: 'Laundry & Dry Cleaning', slug: 'laundry-dry-cleaning', description: 'Laundry, dry cleaning, and ironing services', categorySlug: 'personal-services', workflowCategory: 'Lifestyle & Professional', permissions: ['SERVICE_PROVIDER'], hasVehicleMarketAccess: false, hasPropertyMarketAccess: false, isFinancialService: false },
  { serviceId: 42, name: 'Medical & Healthcare', slug: 'medical-healthcare', description: 'Home healthcare and medical services', categorySlug: 'professional-services', workflowCategory: 'Lifestyle & Professional', permissions: ['SERVICE_PROVIDER'], hasVehicleMarketAccess: false, hasPropertyMarketAccess: false, isFinancialService: false },
  { serviceId: 44, name: 'Manicure & Pedicure', slug: 'manicure-pedicure', description: 'Nail care and beauty services', categorySlug: 'personal-services', workflowCategory: 'Lifestyle & Professional', permissions: ['SERVICE_PROVIDER'], hasVehicleMarketAccess: false, hasPropertyMarketAccess: false, isFinancialService: false },
  { serviceId: 46, name: 'Tailoring Services', slug: 'tailoring-services', description: 'Custom clothing and alterations', categorySlug: 'personal-services', workflowCategory: 'Lifestyle & Professional', permissions: ['SERVICE_PROVIDER'], hasVehicleMarketAccess: false, hasPropertyMarketAccess: false, isFinancialService: false },
  { serviceId: 85, name: 'Makeup Artistry', slug: 'makeup-artistry', description: 'Professional makeup services for events', categorySlug: 'personal-services', workflowCategory: 'Lifestyle & Professional', permissions: ['SERVICE_PROVIDER'], hasVehicleMarketAccess: false, hasPropertyMarketAccess: false, isFinancialService: false },
  { serviceId: 86, name: 'Spa & Massage Services', slug: 'spa-massage-services', description: 'Spa treatments and massage therapy', categorySlug: 'personal-services', workflowCategory: 'Lifestyle & Professional', permissions: ['SERVICE_PROVIDER'], hasVehicleMarketAccess: false, hasPropertyMarketAccess: false, isFinancialService: false },
  { serviceId: 88, name: 'Henna/Lalle Application', slug: 'henna-lalle-application', description: 'Traditional henna and lalle designs', categorySlug: 'personal-services', workflowCategory: 'Lifestyle & Professional', permissions: ['SERVICE_PROVIDER'], hasVehicleMarketAccess: false, hasPropertyMarketAccess: false, isFinancialService: false },
  { serviceId: 89, name: 'Skincare Services', slug: 'skincare-services', description: 'Professional skincare and facial treatments', categorySlug: 'personal-services', workflowCategory: 'Lifestyle & Professional', permissions: ['SERVICE_PROVIDER'], hasVehicleMarketAccess: false, hasPropertyMarketAccess: false, isFinancialService: false },
  { serviceId: 91, name: 'Legal Services', slug: 'legal-services', description: 'Legal consultation and representation', categorySlug: 'professional-services', workflowCategory: 'Lifestyle & Professional', permissions: ['SERVICE_PROVIDER'], hasVehicleMarketAccess: false, hasPropertyMarketAccess: false, isFinancialService: false },
  { serviceId: 95, name: 'Translation Services', slug: 'translation-services', description: 'Language translation and interpretation', categorySlug: 'professional-services', workflowCategory: 'Lifestyle & Professional', permissions: ['SERVICE_PROVIDER'], hasVehicleMarketAccess: false, hasPropertyMarketAccess: false, isFinancialService: false },
  { serviceId: 96, name: 'Travel Agency Services', slug: 'travel-agency-services', description: 'Travel booking and tour services', categorySlug: 'professional-services', workflowCategory: 'Lifestyle & Professional', permissions: ['SERVICE_PROVIDER'], hasVehicleMarketAccess: false, hasPropertyMarketAccess: false, isFinancialService: false },
  { serviceId: 98, name: 'Website & App Development', slug: 'website-app-development', description: 'Web and mobile app development', categorySlug: 'professional-services', workflowCategory: 'Lifestyle & Professional', permissions: ['SERVICE_PROVIDER'], hasVehicleMarketAccess: false, hasPropertyMarketAccess: false, isFinancialService: false },
  { serviceId: 99, name: 'Graphic Design Services', slug: 'graphic-design-services', description: 'Graphic design and branding services', categorySlug: 'professional-services', workflowCategory: 'Lifestyle & Professional', permissions: ['SERVICE_PROVIDER'], hasVehicleMarketAccess: false, hasPropertyMarketAccess: false, isFinancialService: false },
  { serviceId: 100, name: 'Video Production & Editing', slug: 'video-production-editing', description: 'Video production and editing services', categorySlug: 'professional-services', workflowCategory: 'Lifestyle & Professional', permissions: ['SERVICE_PROVIDER'], hasVehicleMarketAccess: false, hasPropertyMarketAccess: false, isFinancialService: false },
  { serviceId: 101, name: 'Social Media Management', slug: 'social-media-management', description: 'Social media marketing and management', categorySlug: 'professional-services', workflowCategory: 'Lifestyle & Professional', permissions: ['SERVICE_PROVIDER'], hasVehicleMarketAccess: false, hasPropertyMarketAccess: false, isFinancialService: false },
  { serviceId: 102, name: 'Digital Marketing', slug: 'digital-marketing', description: 'Online marketing and advertising services', categorySlug: 'professional-services', workflowCategory: 'Lifestyle & Professional', permissions: ['SERVICE_PROVIDER'], hasVehicleMarketAccess: false, hasPropertyMarketAccess: false, isFinancialService: false },
  { serviceId: 103, name: 'Printing Services', slug: 'printing-services', description: 'Printing and publishing services', categorySlug: 'professional-services', workflowCategory: 'Lifestyle & Professional', permissions: ['SERVICE_PROVIDER'], hasVehicleMarketAccess: false, hasPropertyMarketAccess: false, isFinancialService: false },
  { serviceId: 104, name: 'DJ Services', slug: 'dj-services', description: 'Professional DJ and music services', categorySlug: 'professional-services', workflowCategory: 'Lifestyle & Professional', permissions: ['SERVICE_PROVIDER'], hasVehicleMarketAccess: false, hasPropertyMarketAccess: false, isFinancialService: false },
  { serviceId: 105, name: 'MC & Event Hosting', slug: 'mc-event-hosting', description: 'Master of ceremony and event hosting', categorySlug: 'professional-services', workflowCategory: 'Lifestyle & Professional', permissions: ['SERVICE_PROVIDER'], hasVehicleMarketAccess: false, hasPropertyMarketAccess: false, isFinancialService: false },
  { serviceId: 107, name: 'Decoration Services', slug: 'decoration-services', description: 'Event and venue decoration services', categorySlug: 'professional-services', workflowCategory: 'Lifestyle & Professional', permissions: ['SERVICE_PROVIDER'], hasVehicleMarketAccess: false, hasPropertyMarketAccess: false, isFinancialService: false },
  { serviceId: 108, name: 'Cake Baking & Decoration', slug: 'cake-baking-decoration', description: 'Custom cake baking and decoration', categorySlug: 'professional-services', workflowCategory: 'Lifestyle & Professional', permissions: ['SERVICE_PROVIDER'], hasVehicleMarketAccess: false, hasPropertyMarketAccess: false, isFinancialService: false },
  { serviceId: 109, name: 'Small Chops & Snacks', slug: 'small-chops-snacks', description: 'Small chops and party snacks catering', categorySlug: 'professional-services', workflowCategory: 'Lifestyle & Professional', permissions: ['SERVICE_PROVIDER'], hasVehicleMarketAccess: false, hasPropertyMarketAccess: false, isFinancialService: false },
  { serviceId: 110, name: 'Bouncy Castle & Kids Entertainment', slug: 'bouncy-castle-kids-entertainment', description: 'Children\'s entertainment and party rentals', categorySlug: 'professional-services', workflowCategory: 'Lifestyle & Professional', permissions: ['SERVICE_PROVIDER'], hasVehicleMarketAccess: false, hasPropertyMarketAccess: false, isFinancialService: false },
  { serviceId: 111, name: 'Poultry Farming Services', slug: 'poultry-farming-services', description: 'Poultry farming and chicken supply', categorySlug: 'professional-services', workflowCategory: 'Lifestyle & Professional', permissions: ['SERVICE_PROVIDER'], hasVehicleMarketAccess: false, hasPropertyMarketAccess: false, isFinancialService: false },
  { serviceId: 112, name: 'Fish Farming (Aquaculture)', slug: 'fish-farming-aquaculture', description: 'Fish farming and aquaculture services', categorySlug: 'professional-services', workflowCategory: 'Lifestyle & Professional', permissions: ['SERVICE_PROVIDER'], hasVehicleMarketAccess: false, hasPropertyMarketAccess: false, isFinancialService: false },
  { serviceId: 113, name: 'Veterinary Services', slug: 'veterinary-services', description: 'Animal healthcare and veterinary services', categorySlug: 'professional-services', workflowCategory: 'Lifestyle & Professional', permissions: ['SERVICE_PROVIDER'], hasVehicleMarketAccess: false, hasPropertyMarketAccess: false, isFinancialService: false },
  { serviceId: 114, name: 'Crop Farming & Agro Services', slug: 'crop-farming-agro-services', description: 'Agricultural farming and agro services', categorySlug: 'professional-services', workflowCategory: 'Lifestyle & Professional', permissions: ['SERVICE_PROVIDER'], hasVehicleMarketAccess: false, hasPropertyMarketAccess: false, isFinancialService: false },
  { serviceId: 115, name: 'Tractor & Equipment Hire', slug: 'tractor-equipment-hire', description: 'Farm equipment and tractor rental', categorySlug: 'professional-services', workflowCategory: 'Lifestyle & Professional', permissions: ['SERVICE_PROVIDER'], hasVehicleMarketAccess: false, hasPropertyMarketAccess: false, isFinancialService: false },
  { serviceId: 116, name: 'Music Lessons & Instruments', slug: 'music-lessons-instruments', description: 'Music education and instrument sales', categorySlug: 'professional-services', workflowCategory: 'Lifestyle & Professional', permissions: ['SERVICE_PROVIDER'], hasVehicleMarketAccess: false, hasPropertyMarketAccess: false, isFinancialService: false },
  { serviceId: 117, name: 'Language Lessons', slug: 'language-lessons', description: 'Language tutoring and classes', categorySlug: 'professional-services', workflowCategory: 'Lifestyle & Professional', permissions: ['SERVICE_PROVIDER'], hasVehicleMarketAccess: false, hasPropertyMarketAccess: false, isFinancialService: false },
  { serviceId: 118, name: 'Vocational Training', slug: 'vocational-training', description: 'Skills training and vocational education', categorySlug: 'professional-services', workflowCategory: 'Lifestyle & Professional', permissions: ['SERVICE_PROVIDER'], hasVehicleMarketAccess: false, hasPropertyMarketAccess: false, isFinancialService: false },
  { serviceId: 119, name: 'Fitness & Personal Training', slug: 'fitness-personal-training', description: 'Fitness coaching and personal training', categorySlug: 'personal-services', workflowCategory: 'Lifestyle & Professional', permissions: ['SERVICE_PROVIDER'], hasVehicleMarketAccess: false, hasPropertyMarketAccess: false, isFinancialService: false },
  { serviceId: 122, name: 'Nanny & Childcare Services', slug: 'nanny-childcare-services', description: 'Childcare and nanny services', categorySlug: 'personal-services', workflowCategory: 'Lifestyle & Professional', permissions: ['SERVICE_PROVIDER'], hasVehicleMarketAccess: false, hasPropertyMarketAccess: false, isFinancialService: false },
  { serviceId: 123, name: 'Elderly Care Services', slug: 'elderly-care-services', description: 'Care services for elderly individuals', categorySlug: 'personal-services', workflowCategory: 'Lifestyle & Professional', permissions: ['SERVICE_PROVIDER'], hasVehicleMarketAccess: false, hasPropertyMarketAccess: false, isFinancialService: false },
  { serviceId: 124, name: 'Home Nursing Services', slug: 'home-nursing-services', description: 'Home nursing and medical care', categorySlug: 'professional-services', workflowCategory: 'Lifestyle & Professional', permissions: ['SERVICE_PROVIDER'], hasVehicleMarketAccess: false, hasPropertyMarketAccess: false, isFinancialService: false },
  { serviceId: 125, name: 'Pet Grooming', slug: 'pet-grooming', description: 'Pet grooming and cleaning services', categorySlug: 'personal-services', workflowCategory: 'Lifestyle & Professional', permissions: ['SERVICE_PROVIDER'], hasVehicleMarketAccess: false, hasPropertyMarketAccess: false, isFinancialService: false },
  { serviceId: 126, name: 'Pet Sitting & Walking', slug: 'pet-sitting-walking', description: 'Pet sitting and dog walking services', categorySlug: 'personal-services', workflowCategory: 'Lifestyle & Professional', permissions: ['SERVICE_PROVIDER'], hasVehicleMarketAccess: false, hasPropertyMarketAccess: false, isFinancialService: false },
  { serviceId: 127, name: 'Pet Training', slug: 'pet-training', description: 'Pet training and behavior services', categorySlug: 'personal-services', workflowCategory: 'Lifestyle & Professional', permissions: ['SERVICE_PROVIDER'], hasVehicleMarketAccess: false, hasPropertyMarketAccess: false, isFinancialService: false },
  { serviceId: 128, name: 'Watch Repair', slug: 'watch-repair', description: 'Watch repair and servicing', categorySlug: 'personal-services', workflowCategory: 'Lifestyle & Professional', permissions: ['SERVICE_PROVIDER'], hasVehicleMarketAccess: false, hasPropertyMarketAccess: false, isFinancialService: false },
  { serviceId: 129, name: 'Bag Repair & Restoration', slug: 'bag-repair-restoration', description: 'Bag and leather goods repair', categorySlug: 'personal-services', workflowCategory: 'Lifestyle & Professional', permissions: ['SERVICE_PROVIDER'], hasVehicleMarketAccess: false, hasPropertyMarketAccess: false, isFinancialService: false },
  { serviceId: 130, name: 'Key Cutting & Duplication', slug: 'key-cutting-duplication', description: 'Key cutting and duplication services', categorySlug: 'personal-services', workflowCategory: 'Lifestyle & Professional', permissions: ['SERVICE_PROVIDER'], hasVehicleMarketAccess: false, hasPropertyMarketAccess: false, isFinancialService: false },
  { serviceId: 135, name: 'General Insurance Provider', slug: 'general-insurance-provider', description: 'General insurance and coverage services', categorySlug: 'financial-services', workflowCategory: 'Lifestyle & Professional', permissions: ['FINANCIAL_SERVICES', 'SERVICE_PROVIDER'], hasVehicleMarketAccess: false, hasPropertyMarketAccess: false, isFinancialService: true },
  { serviceId: 136, name: 'Vehicle Financing Provider', slug: 'vehicle-financing-provider', description: 'Vehicle financing and auto loans', categorySlug: 'financial-services', workflowCategory: 'Lifestyle & Professional', permissions: ['FINANCIAL_SERVICES', 'SERVICE_PROVIDER'], hasVehicleMarketAccess: false, hasPropertyMarketAccess: false, isFinancialService: true },
  { serviceId: 138, name: 'Vehicle Insurance Provider', slug: 'vehicle-insurance-provider', description: 'Vehicle insurance and coverage services', categorySlug: 'financial-services', workflowCategory: 'Lifestyle & Professional', permissions: ['FINANCIAL_SERVICES', 'SERVICE_PROVIDER'], hasVehicleMarketAccess: false, hasPropertyMarketAccess: false, isFinancialService: true },
  { serviceId: 140, name: 'General Financing Provider', slug: 'general-financing-provider', description: 'General loans and financing services', categorySlug: 'financial-services', workflowCategory: 'Lifestyle & Professional', permissions: ['FINANCIAL_SERVICES', 'SERVICE_PROVIDER'], hasVehicleMarketAccess: false, hasPropertyMarketAccess: false, isFinancialService: true },
];

// ============================================
// SEED FUNCTIONS
// ============================================

async function seedServiceCategories(): Promise<void> {
  logSection('Seeding Service Categories');
  
  let categories = defaultServiceCategories;
  
  // Try to load from file
  try {
    const data = loadJsonFile<ServiceCategoryData>('serviceCategories.json');
    if (data.categories && data.categories.length > 0) {
      categories = data.categories;
    }
  } catch (error) {
    log('Using default service categories', 'warning');
  }

  for (const category of categories) {
    await prisma.serviceCategory.upsert({
      where: { slug: category.slug },
      update: {
        name: category.name,
        description: category.description,
        icon: category.icon,
        order: category.order,
      },
      create: {
        name: category.name,
        slug: category.slug,
        description: category.description,
        icon: category.icon,
        order: category.order,
        isActive: true,
      },
    });
    log(`Upserted category: ${category.name}`, 'success');
  }

  log(`Completed seeding ${categories.length} service categories`, 'success');
}

async function seedServiceTypes(): Promise<void> {
  logSection('Seeding Service Types (All 140 Services)');

  // Get all categories for reference
  const categories = await prisma.serviceCategory.findMany();
  const categoryMap = new Map(categories.map(c => [c.slug, c.id]));

  let services = allServices;
  
  // Try to load from file
  try {
    const data = loadJsonFile<ServiceData>('services.json');
    if (data.services && data.services.length > 0) {
      services = data.services;
    }
  } catch (error) {
    log('Using default services data', 'warning');
  }

  for (const service of services) {
    const categoryId = categoryMap.get(service.categorySlug);
    
    if (!categoryId) {
      log(`Category not found for service: ${service.name} (${service.categorySlug})`, 'warning');
      continue;
    }

    // Map string permissions to enum
    const permissionEnums: ServicePermission[] = service.permissions.map(p => {
      switch (p) {
        case 'VEHICLE_MARKET_ACCESS':
          return ServicePermission.VEHICLE_MARKET_ACCESS;
        case 'REAL_ESTATE_MARKET_ACCESS':
          return ServicePermission.REAL_ESTATE_MARKET_ACCESS;
        case 'FINANCIAL_SERVICES':
          return ServicePermission.FINANCIAL_SERVICES;
        case 'SERVICE_PROVIDER':
          return ServicePermission.SERVICE_PROVIDER;
        default:
          return ServicePermission.SERVICE_PROVIDER;
      }
    });

    // Determine allowed market modules
    const allowedMarketModules: string[] = [];
    if (service.hasVehicleMarketAccess) allowedMarketModules.push('vehicle');
    if (service.hasPropertyMarketAccess) allowedMarketModules.push('property');
    if (service.isFinancialService) allowedMarketModules.push('financial');
    if (allowedMarketModules.length === 0) allowedMarketModules.push('general');

    await prisma.serviceType.upsert({
      where: { serviceId: service.serviceId },
      update: {
        name: service.name,
        slug: service.slug,
        description: service.description,
        categoryId: categoryId,
        workflowCategory: service.workflowCategory,
        permissions: permissionEnums,
        allowedMarketModules: allowedMarketModules,
        hasVehicleMarketAccess: service.hasVehicleMarketAccess,
        hasPropertyMarketAccess: service.hasPropertyMarketAccess,
        isFinancialService: service.isFinancialService,
        isActive: true,
      },
      create: {
        serviceId: service.serviceId,
        name: service.name,
        slug: service.slug,
        description: service.description,
        categoryId: categoryId,
        workflowCategory: service.workflowCategory,
        permissions: permissionEnums,
        allowedMarketModules: allowedMarketModules,
        hasVehicleMarketAccess: service.hasVehicleMarketAccess,
        hasPropertyMarketAccess: service.hasPropertyMarketAccess,
        isFinancialService: service.isFinancialService,
        isActive: true,
        order: service.serviceId,
      },
    });
  }

  log(`Completed seeding ${services.length} service types`, 'success');
  
  // Summary by category
  const summary = {
    autoTransport: services.filter(s => s.workflowCategory === 'Auto & Transport').length,
    homeProperty: services.filter(s => s.workflowCategory === 'Home & Property').length,
    lifestyleProfessional: services.filter(s => s.workflowCategory === 'Lifestyle & Professional').length,
    vehicleMarketAccess: services.filter(s => s.hasVehicleMarketAccess).length,
    propertyMarketAccess: services.filter(s => s.hasPropertyMarketAccess).length,
    financialServices: services.filter(s => s.isFinancialService).length,
  };
  
  log(`Summary:`, 'info');
  log(`  - Auto & Transport: ${summary.autoTransport} services`, 'info');
  log(`  - Home & Property: ${summary.homeProperty} services`, 'info');
  log(`  - Lifestyle & Professional: ${summary.lifestyleProfessional} services`, 'info');
  log(`  - Vehicle Market Access: ${summary.vehicleMarketAccess} services`, 'info');
  log(`  - Property Market Access: ${summary.propertyMarketAccess} services`, 'info');
  log(`  - Financial Services: ${summary.financialServices} services`, 'info');
}

async function seedServicePermissionMaps(): Promise<void> {
  logSection('Seeding Service Permission Maps');

  const permissionMaps = [
    // Vehicle Market Access (IDs: 133, 134)
    { serviceId: 133, canPostVehicles: true, canPostProperties: false, isFinancialProvider: false, isRealEstateProvider: false, isVehicleProvider: true, specificRole: 'Vehicle Dealer' },
    { serviceId: 134, canPostVehicles: true, canPostProperties: false, isFinancialProvider: false, isRealEstateProvider: false, isVehicleProvider: true, specificRole: 'Individual Vehicle Seller' },
    
    // Real Estate Market Access (IDs: 82, 131, 132)
    { serviceId: 82, canPostVehicles: false, canPostProperties: true, isFinancialProvider: false, isRealEstateProvider: true, isVehicleProvider: false, specificRole: 'Real Estate Agent' },
    { serviceId: 131, canPostVehicles: false, canPostProperties: true, isFinancialProvider: false, isRealEstateProvider: true, isVehicleProvider: false, specificRole: 'Landlord/Property Owner' },
    { serviceId: 132, canPostVehicles: false, canPostProperties: true, isFinancialProvider: false, isRealEstateProvider: true, isVehicleProvider: false, specificRole: 'Property Manager' },
    
    // Financial Services (IDs: 135-140)
    { serviceId: 135, canPostVehicles: false, canPostProperties: false, isFinancialProvider: true, isRealEstateProvider: false, isVehicleProvider: false, specificRole: 'General Insurance Provider' },
    { serviceId: 136, canPostVehicles: false, canPostProperties: false, isFinancialProvider: true, isRealEstateProvider: false, isVehicleProvider: false, specificRole: 'Vehicle Financing Provider' },
    { serviceId: 137, canPostVehicles: false, canPostProperties: false, isFinancialProvider: true, isRealEstateProvider: false, isVehicleProvider: false, specificRole: 'Property Insurance Provider' },
    { serviceId: 138, canPostVehicles: false, canPostProperties: false, isFinancialProvider: true, isRealEstateProvider: false, isVehicleProvider: false, specificRole: 'Vehicle Insurance Provider' },
    { serviceId: 139, canPostVehicles: false, canPostProperties: false, isFinancialProvider: true, isRealEstateProvider: false, isVehicleProvider: false, specificRole: 'Property Financing Provider' },
    { serviceId: 140, canPostVehicles: false, canPostProperties: false, isFinancialProvider: true, isRealEstateProvider: false, isVehicleProvider: false, specificRole: 'General Financing Provider' },
  ];

  for (const map of permissionMaps) {
    await prisma.servicePermissionMap.upsert({
      where: { serviceId: map.serviceId },
      update: map,
      create: map,
    });
    log(`Upserted permission map for service ID: ${map.serviceId} (${map.specificRole})`, 'success');
  }

  log(`Completed seeding ${permissionMaps.length} service permission maps`, 'success');
}

async function seedSampleUsers(): Promise<void> {
  logSection('Seeding Sample Users');

  const hashedPassword = await bcrypt.hash('Admin123!', 12);
  const testPassword = await bcrypt.hash('Test1234!', 12);

  // Super Admin
  const superAdmin = await prisma.user.upsert({
    where: { phone: '+2348000000001' },
    update: {
      email: 'superadmin@workkin.com',
      firstName: 'Super',
      lastName: 'Admin',
      role: UserRole.SUPER_ADMIN,
      status: UserStatus.ACTIVE,
      emailVerified: true,
      phoneVerified: true,
      verificationLevel: VerificationLevel.FULLY_VERIFIED,
    },
    create: {
      email: 'superadmin@workkin.com',
      phone: '+2348000000001',
      password: hashedPassword,
      firstName: 'Super',
      lastName: 'Admin',
      displayName: 'Workkin Admin',
      role: UserRole.SUPER_ADMIN,
      status: UserStatus.ACTIVE,
      emailVerified: true,
      emailVerifiedAt: new Date(),
      phoneVerified: true,
      phoneVerifiedAt: new Date(),
      verificationLevel: VerificationLevel.FULLY_VERIFIED,
      country: 'Nigeria',
      state: 'FCT',
      city: 'Abuja',
    },
  });
  log(`Super Admin created: ${superAdmin.email}`, 'success');

  // Admin
  const admin = await prisma.user.upsert({
    where: { phone: '+2348000000002' },
    update: {
      email: 'admin@workkin.com',
      firstName: 'Workkin',
      lastName: 'Admin',
      role: UserRole.ADMIN,
      status: UserStatus.ACTIVE,
    },
    create: {
      email: 'admin@workkin.com',
      phone: '+2348000000002',
      password: hashedPassword,
      firstName: 'Workkin',
      lastName: 'Admin',
      displayName: 'Admin User',
      role: UserRole.ADMIN,
      status: UserStatus.ACTIVE,
      emailVerified: true,
      emailVerifiedAt: new Date(),
      phoneVerified: true,
      phoneVerifiedAt: new Date(),
      verificationLevel: VerificationLevel.DOCUMENT_VERIFIED,
      country: 'Nigeria',
      state: 'Lagos',
      city: 'Ikeja',
    },
  });
  log(`Admin created: ${admin.email}`, 'success');

  // Get a service type for provider
  const mechanicService = await prisma.serviceType.findFirst({
    where: { slug: 'mechanical-repairs' },
  });

  // Test Provider (with TOP subscription)
  const provider = await prisma.user.upsert({
    where: { phone: '+2348000000003' },
    update: {
      email: 'provider@test.com',
      firstName: 'Musa',
      lastName: 'Abdullahi',
      isProvider: true,
      serviceTypeId: mechanicService?.id,
    },
    create: {
      email: 'provider@test.com',
      phone: '+2348000000003',
      password: testPassword,
      firstName: 'Musa',
      lastName: 'Abdullahi',
      displayName: 'Musa Mechanics',
      role: UserRole.PROVIDER,
      status: UserStatus.ACTIVE,
      isProvider: true,
      isClient: true,
      isOpenToWork: true,
      emailVerified: true,
      emailVerifiedAt: new Date(),
      phoneVerified: true,
      phoneVerifiedAt: new Date(),
      verificationLevel: VerificationLevel.DOCUMENT_VERIFIED,
      country: 'Nigeria',
      state: 'Kano',
      city: 'Kano Municipal',
      serviceTypeId: mechanicService?.id,
    },
  });
  log(`Test Provider created: ${provider.email}`, 'success');

  // Create provider profile
  await prisma.profile.upsert({
    where: { userId: provider.id },
    update: {},
    create: {
      userId: provider.id,
      businessName: 'Musa Auto Repairs',
      businessDescription: 'Professional auto repair services in Kano. Specializing in engine repairs, maintenance, and diagnostics.',
      yearsOfExperience: 12,
      qualifications: ['NABTEB Automotive', 'Toyota Certified'],
      serviceAreas: ['Kano Municipal', 'Nassarawa', 'Fagge'],
      serviceRadius: 15,
    },
  });

  // Create TOP subscription for provider
  const endDate = new Date();
  endDate.setMonth(endDate.getMonth() + 1);
  
  await prisma.subscription.upsert({
    where: { userId: provider.id },
    update: {
      tier: SubscriptionTier.TOP,
      status: SubscriptionStatus.ACTIVE,
      endDate: endDate,
    },
    create: {
      userId: provider.id,
      tier: SubscriptionTier.TOP,
      status: SubscriptionStatus.ACTIVE,
      freeServiceListings: 50,
      freeVehicleSlots: 50,
      freePropertySlots: 50,
      freeProductSlots: 100,
      freeFeaturedPerMonth: 10,
      isContactInfoVisible: true,
      isPaymentInfoVisible: true,
      canViewExternalLinks: true,
      price: 10000,
      currency: 'NGN',
      billingCycle: 'monthly',
      startDate: new Date(),
      endDate: endDate,
    },
  });
  log(`TOP subscription created for provider`, 'success');

  // Create wallet for provider
  await prisma.wallet.upsert({
    where: { userId: provider.id },
    update: {},
    create: {
      userId: provider.id,
      balance: 5000,
      currency: 'NGN',
    },
  });

  // Test Client (with FREE subscription)
  const client = await prisma.user.upsert({
    where: { phone: '+2348000000004' },
    update: {
      email: 'client@test.com',
      firstName: 'Amina',
      lastName: 'Ibrahim',
    },
    create: {
      email: 'client@test.com',
      phone: '+2348000000004',
      password: testPassword,
      firstName: 'Amina',
      lastName: 'Ibrahim',
      displayName: 'Amina I.',
      role: UserRole.USER,
      status: UserStatus.ACTIVE,
      isProvider: false,
      isClient: true,
      emailVerified: true,
      emailVerifiedAt: new Date(),
      phoneVerified: true,
      phoneVerifiedAt: new Date(),
      verificationLevel: VerificationLevel.BASIC_VERIFIED,
      country: 'Nigeria',
      state: 'Lagos',
      city: 'Lekki',
    },
  });
  log(`Test Client created: ${client.email}`, 'success');

  // Create FREE subscription for client
  await prisma.subscription.upsert({
    where: { userId: client.id },
    update: {
      tier: SubscriptionTier.FREE,
      status: SubscriptionStatus.ACTIVE,
    },
    create: {
      userId: client.id,
      tier: SubscriptionTier.FREE,
      status: SubscriptionStatus.ACTIVE,
      freeServiceListings: 1,
      freeVehicleSlots: 1,
      freePropertySlots: 1,
      freeProductSlots: 1,
      freeFeaturedPerMonth: 0,
      isContactInfoVisible: false,
      isPaymentInfoVisible: false,
      canViewExternalLinks: false,
      price: 0,
      currency: 'NGN',
      startDate: new Date(),
    },
  });
  log(`FREE subscription created for client`, 'success');

  // Create wallet for client
  await prisma.wallet.upsert({
    where: { userId: client.id },
    update: {},
    create: {
      userId: client.id,
      balance: 0,
      currency: 'NGN',
    },
  });

  // Get vehicle dealer service type
  const vehicleDealerService = await prisma.serviceType.findFirst({
    where: { slug: 'vehicle-dealer' },
  });

  // Vehicle Dealer (with MID subscription)
  const vehicleDealer = await prisma.user.upsert({
    where: { phone: '+2348000000005' },
    update: {
      email: 'dealer@test.com',
      firstName: 'Chukwu',
      lastName: 'Emeka',
      serviceTypeId: vehicleDealerService?.id,
    },
    create: {
      email: 'dealer@test.com',
      phone: '+2348000000005',
      password: testPassword,
      firstName: 'Chukwu',
      lastName: 'Emeka',
      displayName: 'Emeka Motors',
      role: UserRole.PROVIDER,
      status: UserStatus.ACTIVE,
      isProvider: true,
      isClient: true,
      emailVerified: true,
      emailVerifiedAt: new Date(),
      phoneVerified: true,
      phoneVerifiedAt: new Date(),
      verificationLevel: VerificationLevel.DOCUMENT_VERIFIED,
      country: 'Nigeria',
      state: 'Lagos',
      city: 'Ikeja',
      serviceTypeId: vehicleDealerService?.id,
    },
  });
  log(`Vehicle Dealer created: ${vehicleDealer.email}`, 'success');

  // Create dealer profile
  await prisma.profile.upsert({
    where: { userId: vehicleDealer.id },
    update: {},
    create: {
      userId: vehicleDealer.id,
      businessName: 'Emeka Motors Limited',
      businessDescription: 'Premium vehicle dealer specializing in Toyota, Honda, and Mercedes. Quality foreign used and brand new vehicles.',
      yearsOfExperience: 15,
      vehicleDealership: true,
      serviceAreas: ['Ikeja', 'Victoria Island', 'Lekki', 'Ikoyi'],
    },
  });

  // MID subscription for dealer
  const dealerEndDate = new Date();
  dealerEndDate.setMonth(dealerEndDate.getMonth() + 1);
  
  await prisma.subscription.upsert({
    where: { userId: vehicleDealer.id },
    update: {
      tier: SubscriptionTier.MID,
      status: SubscriptionStatus.ACTIVE,
    },
    create: {
      userId: vehicleDealer.id,
      tier: SubscriptionTier.MID,
      status: SubscriptionStatus.ACTIVE,
      freeServiceListings: 10,
      freeVehicleSlots: 10,
      freePropertySlots: 10,
      freeProductSlots: 15,
      freeFeaturedPerMonth: 3,
      isContactInfoVisible: true,
      isPaymentInfoVisible: true,
      canViewExternalLinks: true,
      price: 5000,
      currency: 'NGN',
      billingCycle: 'monthly',
      startDate: new Date(),
      endDate: dealerEndDate,
    },
  });

  // Create wallet for dealer
  await prisma.wallet.upsert({
    where: { userId: vehicleDealer.id },
    update: {},
    create: {
      userId: vehicleDealer.id,
      balance: 12500,
      currency: 'NGN',
    },
  });

  // Get real estate agent service type
  const realEstateService = await prisma.serviceType.findFirst({
    where: { slug: 'real-estate-agent' },
  });

  // Real Estate Agent (with BASE subscription)
  const realEstateAgent = await prisma.user.upsert({
    where: { phone: '+2348000000006' },
    update: {
      email: 'agent@test.com',
      firstName: 'Fatima',
      lastName: 'Yusuf',
      serviceTypeId: realEstateService?.id,
    },
    create: {
      email: 'agent@test.com',
      phone: '+2348000000006',
      password: testPassword,
      firstName: 'Fatima',
      lastName: 'Yusuf',
      displayName: 'Fatima Properties',
      role: UserRole.PROVIDER,
      status: UserStatus.ACTIVE,
      isProvider: true,
      isClient: true,
      emailVerified: true,
      emailVerifiedAt: new Date(),
      phoneVerified: true,
      phoneVerifiedAt: new Date(),
      verificationLevel: VerificationLevel.DOCUMENT_VERIFIED,
      country: 'Nigeria',
      state: 'Abuja',
      city: 'Wuse',
      serviceTypeId: realEstateService?.id,
    },
  });
  log(`Real Estate Agent created: ${realEstateAgent.email}`, 'success');

  // Create agent profile
  await prisma.profile.upsert({
    where: { userId: realEstateAgent.id },
    update: {},
    create: {
      userId: realEstateAgent.id,
      businessName: 'Fatima Properties & Estates',
      businessDescription: 'Trusted real estate services in Abuja. Specializing in residential properties, land, and commercial spaces.',
      yearsOfExperience: 8,
      realEstateAgency: true,
      propertyManagement: true,
      serviceAreas: ['Wuse', 'Maitama', 'Garki', 'Asokoro', 'Gwarinpa'],
    },
  });

  // BASE subscription for agent
  const agentEndDate = new Date();
  agentEndDate.setMonth(agentEndDate.getMonth() + 1);
  
  await prisma.subscription.upsert({
    where: { userId: realEstateAgent.id },
    update: {
      tier: SubscriptionTier.BASE,
      status: SubscriptionStatus.ACTIVE,
    },
    create: {
      userId: realEstateAgent.id,
      tier: SubscriptionTier.BASE,
      status: SubscriptionStatus.ACTIVE,
      freeServiceListings: 3,
      freeVehicleSlots: 3,
      freePropertySlots: 3,
      freeProductSlots: 5,
      freeFeaturedPerMonth: 1,
      isContactInfoVisible: true,
      isPaymentInfoVisible: true,
      canViewExternalLinks: true,
      price: 2500,
      currency: 'NGN',
      billingCycle: 'monthly',
      startDate: new Date(),
      endDate: agentEndDate,
    },
  });

  // Create wallet for agent
  await prisma.wallet.upsert({
    where: { userId: realEstateAgent.id },
    update: {},
    create: {
      userId: realEstateAgent.id,
      balance: 3000,
      currency: 'NGN',
    },
  });

  log('Completed seeding sample users', 'success');
}

async function seedSystemSettings(): Promise<void> {
  logSection('Seeding System Settings');

  const settings = [
    {
      key: 'subscription_pricing',
      value: {
        FREE: { monthly: 0, yearly: 0 },
        BASE: { monthly: 2500, yearly: 25000 },
        MID: { monthly: 5000, yearly: 50000 },
        TOP: { monthly: 10000, yearly: 100000 },
      },
      description: 'Subscription tier pricing in NGN',
    },
    {
      key: 'featured_listing_pricing',
      value: {
        service: { daily: 200, weekly: 1000, monthly: 3500 },
        vehicle: { daily: 500, weekly: 2500, monthly: 8000 },
        property: { daily: 500, weekly: 2500, monthly: 8000 },
        product: { daily: 200, weekly: 1000, monthly: 3500 },
        job: { daily: 300, weekly: 1500, monthly: 5000 },
      },
      description: 'Featured listing pricing in NGN',
    },
    {
      key: 'platform_settings',
      value: {
        defaultCurrency: 'NGN',
        defaultCountry: 'Nigeria',
        ratingWindowHours: 48,
        maxFreeListingsPerCategory: 1,
        verificationPartnerFee: 5000,
        squadVerificationFee: 10000,
      },
      description: 'General platform configuration',
    },
    {
      key: 'zainpay_config',
      value: {
        enabled: true,
        settlementPercentage: 95,
        minWithdrawal: 1000,
        maxWithdrawal: 5000000,
      },
      description: 'Zainpay integration configuration',
    },
    {
      key: 'notification_settings',
      value: {
        ratingReminderEnabled: true,
        ratingReminderAfterHours: 24,
        bookingReminderEnabled: true,
        bookingReminderBeforeHours: 2,
      },
      description: 'Notification and reminder settings',
    },
  ];

  for (const setting of settings) {
    await prisma.systemSetting.upsert({
      where: { key: setting.key },
      update: {
        value: setting.value,
        description: setting.description,
      },
      create: setting,
    });
    log(`Upserted setting: ${setting.key}`, 'success');
  }

  log(`Completed seeding ${settings.length} system settings`, 'success');
}

// ============================================
// MAIN SEED FUNCTION
// ============================================

async function main(): Promise<void> {
  console.log(`\n${colors.magenta}${'='.repeat(60)}${colors.reset}`);
  console.log(`${colors.cyan}    WORKKIN DATABASE SEED SCRIPT${colors.reset}`);
  console.log(`${colors.magenta}${'='.repeat(60)}${colors.reset}\n`);

  const startTime = Date.now();

  try {
    // Run all seed functions in order
    await prisma.$transaction(async () => {
      await seedServiceCategories();
    });
    
    await prisma.$transaction(async () => {
      await seedServiceTypes();
    });
    
    await prisma.$transaction(async () => {
      await seedServicePermissionMaps();
    });
    
    await prisma.$transaction(async () => {
      await seedSampleUsers();
    });
    
    await prisma.$transaction(async () => {
      await seedSystemSettings();
    });

    const duration = ((Date.now() - startTime) / 1000).toFixed(2);
    
    console.log(`\n${colors.green}${'='.repeat(60)}${colors.reset}`);
    console.log(`${colors.green}    SEED COMPLETED SUCCESSFULLY${colors.reset}`);
    console.log(`${colors.green}    Duration: ${duration}s${colors.reset}`);
    console.log(`${colors.green}${'='.repeat(60)}${colors.reset}\n`);

    // Print summary
    const [categoryCount, serviceCount, userCount, subscriptionCount] = await Promise.all([
      prisma.serviceCategory.count(),
      prisma.serviceType.count(),
      prisma.user.count(),
      prisma.subscription.count(),
    ]);

    log('Final Database Summary:', 'info');
    log(`  - Service Categories: ${categoryCount}`, 'info');
    log(`  - Service Types: ${serviceCount}`, 'info');
    log(`  - Users: ${userCount}`, 'info');
    log(`  - Subscriptions: ${subscriptionCount}`, 'info');

  } catch (error) {
    console.error(`\n${colors.red}${'='.repeat(60)}${colors.reset}`);
    console.error(`${colors.red}    SEED FAILED${colors.reset}`);
    console.error(`${colors.red}${'='.repeat(60)}${colors.reset}\n`);
    console.error(error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

// Run the seed
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });