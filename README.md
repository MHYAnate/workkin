WORKKIN - Complete Platform Workflow Documentation (Restructured with Payment, Rating, and AI RAG System)
IMPORTANT! - Platform Identity
Name: Workkin
Tagline: "Where service providers and consumers connect, collaborate, and succeed"
Core Purpose: A comprehensive service marketplace connecting skilled professionals with clients across three specialized market modules (Vehicle Market, Real Estate Market, General Market), three service provider categories (Auto & Transport, Home & Property, Lifestyle & Professional), job opportunities, and community networking.

IMPORTANT! - Platform Structure Overview
Three Specialized Market Modules

Vehicle Market Module - Buy, sell, lease vehicles with dealer and individual seller support

Real Estate Market Module - Property sales, rentals, and leasing with agent, owner, and manager support

General Market Module - General goods, tools, equipment, and miscellaneous items

Three Service Provider Categories

Auto & Transport Services - Vehicle repair, maintenance, transport services

Home & Property Services - Home maintenance, construction, property services

Lifestyle & Professional Services - Personal care, professional services, events

Additional Platform Features

Job Board - Employment opportunities and hiring

Community Chat Rooms - Networking and discussions

Talent Pool & Hiring Directory - Workforce management and recruitment

AI RAG Intelligence System - Market insights and data-driven recommendations

IMPORTANT! - Unified Payment System (External Payment Model)
Core Payment Principle
ALL marketplace transactions (Vehicle, Real Estate, General Market) follow the external payment model:

NO in-app payment processing for marketplace transactions

ONLY in-app payments for: platform subscriptions, featured listings, job postings, and service bookings

External payments handled directly between buyer/seller

Payment Visibility Rules
User Type	View Contact Details	View Payment Info	View External Links	In-App Purchases
Unregistered	❌	❌	❌	❌
Registered (Free)	❌	❌	❌	✅ (via Zainpay)
Registered (Subscribed)	✅	✅	✅	✅ (via Zainpay)
Vehicle Market Payment Flow
Buyer finds vehicle → Views listing

Buyer registers/logs in → Gains contact access (if subscribed)

Buyer contacts seller → Platform messaging or direct contact

Negotiation occurs externally

Payment completed outside Workkin

Both parties return to update transaction status

Rating system triggered

Real Estate Market Payment Flow
Buyer/Renter finds property → Views listing

User registers/logs in → Gains contact access (if subscribed)

Contacts agent/owner → Platform messaging or direct contact

Negotiation occurs externally

Payment completed outside Workkin

Both parties return to update transaction status

Rating system triggered

General Market Payment Flow
Buyer finds item → Views listing

User registers/logs in → Gains contact access (if subscribed)

Contacts seller → Platform messaging or direct contact

Negotiation occurs externally

Payment completed outside Workkin

Both parties return to update transaction status

Rating system triggered

In-App Payment Exceptions (via Zainpay)
Platform subscriptions (monthly/yearly/lifetime)

Featured listings (vehicles, properties, general items)

Job postings

Service bookings and deposits

Premium features purchases

Staff upgrade fees

Squad verification fees

IMPORTANT! - Unified Rating System Flow
Rating Trigger Events
Service Completion - Client rates provider after service delivery

Vehicle Transaction - Both parties rate after sale/lease completion

Property Transaction - Both parties rate after sale/rent/lease completion

General Market Transaction - Both parties rate after sale/lease completion

Job Completion - Employer rates employee after job completion

Staff Relationship - Mutual rating at relationship termination

Rating Flow Process
Step 1: Transaction Completion

Seller/Buyer marks transaction as "Completed" in their dashboard

System sends rating invitation to both parties

48-hour window to submit ratings

Step 2: Rating Submission

1-5 star rating

Optional written review (max 500 characters)

Category-specific feedback metrics:

Services: Quality, Punctuality, Communication, Value

Vehicles: Accuracy of Description, Vehicle Condition, Seller Communication

Properties: Accuracy of Listing, Property Condition, Agent/Owner Communication

General Items: Item Condition, Seller Communication, Shipping/Handling

Step 3: Rating Display

Average rating calculated (weighted by recency)

Review count displayed

Recent reviews shown first

Response to reviews allowed (for rated party)

Step 4: Rating Moderation

Automated profanity filter

Manual reporting system

Admin review for disputed reviews

Review removal for policy violations

Step 5: Rating Analytics

Provider dashboard shows rating trends

Response rate tracking

Rating distribution by category

Improvement suggestions based on feedback

Rating Impact
Search Ranking: Higher-rated listings appear first

Verification Boost: Good ratings accelerate verification process

Talent Pool Priority: Higher ratings improve Talent Pool visibility

Hiring Directory Priority: Better ratings enhance employer credibility

Featured Eligibility: Minimum 4.0 rating required for featured listings

IMPORTANT! - AI RAG Intelligence System
System Architecture
Technology Stack:

AI Model: DeepSeek (free tier, 128K context)

Vector Database: Pinecone (free tier, 100K vectors)

Embeddings: OpenAI text-embedding-ada-002 (via DeepSeek API)

Backend Integration: Express.js with AI endpoints

Frontend Display: React components with real-time insights

Data Sources for RAG System
Market Data:

Vehicle listings and pricing trends

Property listings and market values

General market supply/demand patterns

Service Data:

Service provider performance metrics

Customer review patterns

Service category demand trends

User Data:

User behavior patterns (anonymized)

Transaction success rates

Platform engagement metrics

Location Data:

Regional service demand

Location-based pricing insights

Geographic market gaps

AI Intelligence Features
1. Market Insights Dashboard
For Providers:

Pricing recommendations based on market trends

Demand forecasting for services/vehicles/properties

Competitive analysis (anonymized)

Seasonal trend predictions

For Clients:

Fair price estimation for services

Market value assessment for vehicles/properties

Service provider recommendations

Negotiation strategy suggestions

2. Personalised Recommendations
Service Provider Matching:

AI-powered provider-client matching

Skill gap analysis for providers

Service expansion suggestions

Client acquisition strategies

Transaction Intelligence:

Fraud detection patterns

Transaction risk assessment

Payment term optimization

Documentation completeness checking

3. Business Intelligence
For Premium Users:

Revenue projection models

Customer retention insights

Staff performance analytics

Market expansion recommendations

For Platform Admins:

Platform health monitoring

User engagement optimization

Feature usage analytics

Churn prediction and prevention

4. Real-Time Assistance
Chat Integration:

AI assistant in chat rooms

Transaction guidance

Document verification assistance

Dispute resolution suggestions

Search Enhancement:

Natural language search processing

Intent-based result filtering

Predictive search suggestions

Cross-module recommendation engine

Implementation Flow
Step 1: Data Collection

Daily batch processing of anonymized data

Real-time streaming for urgent insights

Data cleaning and normalization

Vector embedding generation

Step 2: Indexing

Pinecone vector database updates

Semantic search index optimization

Context window management

Cache layer implementation

Step 3: Query Processing

User query analysis and intent classification

Relevant context retrieval from vector store

Prompt engineering for DeepSeek API

Response generation with citations

Step 4: Response Delivery

Insight cards in user dashboard

Real-time notifications for critical insights

Weekly intelligence reports (email)

Interactive visualization tools

Free Tier Optimization
Cost Management:

Batch processing during off-peak hours

Response caching for common queries

Context window optimization

Efficient vector search algorithms

Scalability:

Progressive enhancement based on user tier

Basic insights for free users

Advanced analytics for premium users

Enterprise-level insights for top tier

IMPORTANT! - User Profile Sharing
Users can share links to external persons:

Links display complete profile with service history, ratings, achievements

Shared profiles include staff hierarchy information

Open to Work status visible (if enabled)

Currently Hiring status visible (if enabled)

Both statuses can be enabled simultaneously

Property listings visible (for Real Estate Providers)

Vehicle listings visible (for Vehicle Dealers/Sellers)

Unregistered users can view shared profiles but cannot see contact details or payment information

IMPORTANT! - User Types & Registration
1. Service Provider
Definition: Users who offer services, skills, or expertise

Registration Flow:

Sign up with email/phone

Complete profile with professional information

Select service categories and specific services

Set service areas and availability

Optional: Request verification

Start posting services

If Real Estate Provider: Complete additional property management setup

If Vehicle Dealer/Seller: Complete additional vehicle listing setup

Capabilities:

Post and manage service listings

Receive and respond to service requests

Apply for jobs

Buy, sell, and lease items in all three market modules (external payments)

Join or create squads

Hire other providers as staff

Be hired as staff under another provider

Set "Open to Work" status

Set "Currently Hiring" status

Appear in Talent Pool (if open to work)

Appear in Hiring Directory (if currently hiring)

Post and manage property listings (Real Estate Providers only - IDs: 82, 131, 132)

Access Property Dashboard (Real Estate Providers only)

Post and manage vehicle listings (Vehicle Dealers/Sellers only - IDs: 133, 134)

Access Vehicle Dashboard (Vehicle Dealers/Sellers only)

Access AI Market Insights (based on subscription tier)

2. Client (Consumer)
Definition: Users who seek services, hire professionals, or engage with marketplace

Registration Flow:

Sign up with email/phone

Complete basic profile

Add location and preferences

Start browsing services

Capabilities:

Browse and book services (in-app payment via Zainpay)

Post service requests

Post job listings (with in-app payment or subscription)

Buy, sell, and lease items in all three market modules (external payments)

Rate and review service providers

Access Talent Pool (subscription required)

Set "Currently Hiring" status (for clients looking to hire providers)

Browse and inquire about property listings

Browse and inquire about vehicle listings

Save favorite properties and vehicles

Schedule property viewings and vehicle inspections

Contact sellers/dealers for vehicle transactions

Access AI Buying Assistant (based on subscription tier)

3. Dual Role Users
Definition: Users can function as both providers and clients simultaneously

How It Works:

Single account with dual capabilities

Profile sections for both roles

Service provider metrics separate from client activity

Can post services AND book services from others

Unified wallet for in-app purchases

Can enable both "Open to Work" and "Currently Hiring" simultaneously

Separate rating systems for provider vs client activities

4. Unregistered Users (Visitors)
Definition: Users browsing without creating an account

Capabilities:

Browse all service listings

Browse all property listings

Browse all vehicle listings

Browse all product listings

View service provider profiles (limited)

View vehicle dealer/seller profiles (limited)

View real estate provider profiles (limited)

Search and filter listings

Access basic AI market insights (aggregated, anonymized)

Restrictions:

Cannot view contact numbers

Cannot view payment details

Cannot view external payment links

Cannot book services

Cannot send messages

Cannot save favorites

Cannot post listings

Cannot access chat rooms

Cannot access personalized AI insights

IMPORTANT! - Vehicle Market Module
Overview
Specialized marketplace for buying, selling, leasing vehicles. Connects dealers and sellers with buyers. All vehicle payments handled externally.

Vehicle Types & Categories
text
├── Cars
│   ├── New Cars
│   ├── Used Cars
│   ├── Certified Pre-Owned
│   └── Luxury/Exotic Cars
├── Motorcycles
│   ├── New Motorcycles
│   ├── Used Motorcycles
│   ├── Sports Bikes
│   └── Commercial Motorcycles (Okada)
├── Trucks & Commercial Vehicles
│   ├── Pickup Trucks
│   ├── Delivery Trucks
│   ├── Buses & Minibuses
│   ├── Trailers
│   └── Commercial Vans
└── Heavy Equipment
    ├── Construction Equipment
    ├── Agricultural Equipment
    ├── Industrial Machinery
    └── Forklifts & Loaders
Vehicle Market Provider Types
Service ID Assignment:

133: Vehicle Dealer - Dealer Permissions (Auto & Transport)

134: Individual Vehicle Seller - Seller Permissions (Auto & Transport)

1. Vehicle Dealer (ID: 133)
Capabilities:

Post unlimited vehicle listings (based on subscription)

Create and manage vehicle inventory

Respond to vehicle inquiries

Schedule and manage viewings/test drives

Access dealer-specific analytics

Connect with potential buyers

Manage fleet of vehicles

Access Vehicle Dealer Dashboard

Display dealership branding

Offer financing options (informational)

Provide vehicle history reports

Access AI pricing insights

Track leads and conversions

Verification Requirements (uploaded as pictures):

Business registration documents

Dealership license (where applicable)

Physical location verification (optional)

CAC registration (for Nigerian dealers)

2. Individual Vehicle Seller (ID: 134)
Capabilities:

Post personal vehicles for sale/lease

Manage personal vehicle listings

Respond to inquiries

Schedule vehicle viewings

Access individual seller dashboard

Basic analytics for listings

Verification Requirements (uploaded as pictures):

Valid ID verification

Vehicle ownership documents

Proof of ownership

Vehicle Verification System
All documents uploaded as pictures/photos:

text
Required Documents:
├── VIN Verification
│   ├── Photo of VIN plate
│   ├── VIN documentation
│   └── VIN history report
├── Ownership Documents
│   ├── Vehicle registration (photo)
│   ├── Title/proof of ownership (photo)
│   ├── Previous transfer documents (photo)
│   └── Customs papers (if imported) (photo)
├── Mechanical Inspection Reports
│   ├── Recent inspection certificate (photo)
│   ├── Mechanic's report (photo)
│   └── Emission test results (photo)
├── Accident History
│   ├── Text description of any accidents
│   ├── Photos of previous damage (if any)
│   ├── Insurance claim records (photo)
│   └── Repair documentation (photo)
└── Mileage Verification
    ├── Odometer photo
    ├── Service records showing mileage (photo)
    └── Last maintenance mileage (photo)
Verification Levels:

Unverified: Basic listing only (no badge)

Basic Verified: Photo verification of vehicle (✓ Photo Verified badge)

Document Verified: Valid ownership documents uploaded (✓ Docs Verified badge)

Fully Verified: Physical verification by Workkin partner (✓✓ Fully Verified badge)

Vehicle Listing Flow
Step 1: Access Vehicle Portal
Vehicle Dealers/Sellers → Dashboard → Vehicles → Add New Vehicle

Step 2: Select Listing Type

For Sale

For Lease

For Rent

For Sale & Lease (Dual listing)

Step 3: Vehicle Details (Required)

Basic Information (title, type, subtype, description)

Vehicle Specifications (make, model, year, trim, transmission, fuel, mileage)

Condition & History (condition, accident history, previous owners)

Location (country, state, city, optional address)

Pricing (sale price, lease amount, negotiable indicator)

Step 4: Features & Specifications

Safety Features (ABS, airbags, cameras, sensors)

Comfort Features (AC, leather seats, sunroof, power features)

Entertainment Features (Bluetooth, navigation, premium audio)

Performance Features (turbo, sport mode, cruise control)

Step 5: Media Upload

Vehicle photos (minimum 5, maximum 25)

Vehicle video (optional, max 3 minutes)

360° Tour (optional)

Step 6: Verification Documents (Pictures)

VIN Photo

Registration Document Photo

Insurance Document Photo

Inspection Certificate Photo

Ownership Transfer Documents Photo

Mileage Verification Photo

Step 7: External Payment Information
IMPORTANT: Vehicle payments NOT processed in-app

Preferred Payment Methods (informational only)

Bank Details (visible to subscribed users only)

External Payment Link (optional, visible to subscribed users only)

Financing Partners (if applicable)

Step 8: Publication Settings

Listing Status (Active, Paused, Sold)

Contact Preference (Call, WhatsApp, Platform Message, All)

Show Full Address (Yes/No)

Allow Test Drive Scheduling (Yes/No)

Featured Listing (paid in-app upgrade via Zainpay)

Vehicle Listing Display
text
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🚗 VEHICLE LISTING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
[FOR SALE] [VERIFIED ✓✓]

2022 Toyota Camry XSE V6
📍 Lagos, Nigeria

💰 Price: ₦28,500,000 (Negotiable)

🚗 Vehicle Details:
  • Year: 2022 | Mileage: 25,000 km
  • Transmission: Automatic
  • Fuel: Petrol | Engine: 3.5L V6
  • Condition: Foreign Used
  • Color: Pearl White

✨ Key Features:
  • Leather Seats • Sunroof • Navigation
  • Apple CarPlay • Backup Camera

📋 Documents: ✓ Cleared | ✓ Registered

👤 Listed by: AutoMax Motors (Dealer)
⭐ 4.8 (89 reviews) | ✓ Verified Dealer

[View Vehicle →] [Schedule Test Drive →]
[Contact Dealer →] [Save Vehicle →]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
💳 PAYMENT INFORMATION
(Visible to subscribed users only)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Payment handled outside Workkin app
Bank Transfer Details:
• Bank: First Bank
• Account: 1234567890
• Name: AutoMax Motors Ltd

[Contact for Payment Options →]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Vehicle Rating Flow
After Transaction Completion:

Buyer/Seller marks transaction complete

System sends rating invitation (48-hour window)

Both parties rate on:

Accuracy of vehicle description (1-5 stars)

Vehicle condition vs advertised (1-5 stars)

Seller communication (1-5 stars)

Transaction smoothness (1-5 stars)

Optional written review (500 chars max)

Ratings displayed on both profiles

Review can be responded to by rated party

IMPORTANT! - Real Estate Market Module
Overview
Specialized marketplace for property transactions. Connects agents, owners, managers with buyers/tenants. All property payments handled externally.

Real Estate Provider Types
Service ID Assignment:

82: Real Estate Agent - Agent Permissions

131: Landlords & Property Owners - Owner Permissions

132: Property Management Services - Manager Permissions

1. Real Estate Agent (ID: 82)
Capabilities:

Post properties on behalf of owners (requires authorization)

Create and manage property listings

Respond to property inquiries

Schedule and manage property viewings

Generate property reports for owners

Access agent-specific analytics

Connect with potential buyers/renters

Collaborate with other agents

Access Real Estate Agent dashboard

Access AI property valuation insights

2. Landlords & Property Owners (ID: 131)
Capabilities:

Post own properties for sale/rent/lease

Manage property listings directly

Respond to inquiries

Schedule property viewings

Track property performance metrics

Set pricing and availability

Access property owner dashboard

Assign properties to agents or managers

Access AI rental yield calculator

3. Property Management Services (ID: 132)
Capabilities:

Post properties on behalf of managed owners

Manage multiple property portfolios

Handle tenant communications

Track and manage maintenance requests

Manage lease documentation (tracking only)

Generate owner reports

Coordinate with Real Estate Agents

Access property management dashboard

Property Listing Flow
Step 1: Access Property Portal
Real Estate Providers → Dashboard → Properties → Add New Property

Step 2: Select Listing Type

For Sale

For Rent

For Lease

For Sale & Rent (Dual listing)

Step 3: Property Details (Required)

Basic Information (title, type, subtype, description)

Location (country, state, city, area, optional address)

Pricing (sale price, rent amount, service charges)

Property Specifications (bedrooms, bathrooms, size, furnishing)

Step 4: Features & Amenities

Interior Features (AC, wardrobes, kitchen, flooring)

Exterior Features (parking, garden, pool, balcony)

Utilities (electricity, generator, solar, water, internet)

Security Features (CCTV, security guard, alarm, gated community)

Community Features (estate, schools, hospitals, transport)

Step 5: Media Upload

Property photos (minimum 3, maximum 20)

Video tour (optional, max 3 minutes)

Virtual tour link (optional)

Floor plan (optional)

Survey plan (for land sales)

Step 6: Ownership & Documentation (Pictures)

For Agents: Owner authorization, commission details

For Owners: Ownership declaration, document types available

For Managers: Management agreement status, owner details

Step 7: External Payment Information
IMPORTANT: Property payments NOT processed in-app

Preferred Payment Methods (informational only)

Bank Details (visible to subscribed users only)

External Payment Link (optional, visible to subscribed users only)

Mortgage Partners (if applicable)

Step 8: Publication Settings

Listing Status (Active, Paused, Sold/Rented)

Availability Date

Contact Preference (Call, WhatsApp, Platform Message, All)

Show Full Address (Yes/No)

Allow Viewing Scheduling (Yes/No)

Featured Listing (paid in-app upgrade via Zainpay)

Property Rating Flow
After Transaction Completion:

Buyer/Renter/Seller/Landlord marks transaction complete

System sends rating invitation (48-hour window)

Both parties rate on:

Accuracy of property description (1-5 stars)

Property condition vs advertised (1-5 stars)

Agent/Owner communication (1-5 stars)

Transaction process (1-5 stars)

Optional written review (500 chars max)

Ratings displayed on both profiles

Review can be responded to by rated party

IMPORTANT! - General Market Module
Overview
General-purpose marketplace for products, tools, equipment not covered by specialized markets. All sale/lease payments handled externally.

Who Can Use General Market
User Type	Can Sell	Can Lease	Can Buy	Can Feature Products
Provider (Free)	✅	✅	✅	✅ (Paid in-app)
Provider (Subscribed)	✅	✅	✅	✅ (Free allowance + Paid)
Client (Free)	✅	✅	✅	✅ (Paid in-app)
Client (Subscribed)	✅	✅	✅	✅ (Free allowance + Paid)
Unregistered	View Only	View Only	View Only	❌
Listing Types
Products for Sale: Tools, equipment, materials, appliances, electronics

Products for Lease: Equipment rental, tool sharing, event equipment

Marketplace Services: Equipment rental services, tool sharing programs

General Market Transaction Flow
For Sale Transactions (External Payments):

Buyer finds item → Views listing

Buyer registers/logs in → Gains contact access (if subscribed)

Buyer contacts seller → Platform messaging

Negotiation occurs externally

Payment completed outside Workkin

Both parties mark transaction complete

Rating system triggered

For Lease Transactions (External Payments):

Renter finds item → Views listing

Renter contacts owner → Platform messaging

Terms agreed externally

Security deposit and payments handled externally

Both parties mark transaction complete

Rating system triggered

In-App Payments (via Zainpay):

Featured product upgrades

Additional listing slots

Subscription purchases

Service bookings

General Market Rating Flow
After Transaction Completion:

Buyer/Renter/Seller marks transaction complete

System sends rating invitation (48-hour window)

Both parties rate on:

Item condition vs described (1-5 stars)

Seller communication (1-5 stars)

Shipping/handling (if applicable) (1-5 stars)

Transaction fairness (1-5 stars)

Optional written review (500 chars max)

Ratings displayed on both profiles

Review can be responded to by rated party

IMPORTANT! - Financial Service Providers
Overview
Insurance companies and banks register to showcase products and connect with users needing financing/insurance. All financial transactions handled externally.

Insurance Service Providers
Service IDs:

135: General Insurance Provider

137: Property Insurance Provider

138: Vehicle Insurance Provider

Capabilities:

Create company profile

List insurance packages

Display coverage details

Showcase premium ranges

Connect with potential customers

Receive inquiries

Provide external quote links

Access AI risk assessment insights

Banking/Financing Service Providers
Service IDs:

136: Vehicle Financing Provider

139: Property Financing Provider (Mortgage)

140: General Financing Provider

Capabilities:

Create institution profile

List financing packages

Display interest rates

Show eligibility requirements

Provide external loan calculators

Connect with potential borrowers

Receive inquiries

Access AI credit assessment insights

IMPORTANT! - Service Provider Categories
Category 1: Auto & Transport Services (27 Services)
ID	Service Name
1	Auto Spray Painting
2	Car AC Repair & Maintenance
3	Mechanical Repairs
4	Panel Beating & Bodywork
5	Electrical Rewiring
6	Towing Services
7	Tire Repair & Vulcanization
8	Wheel Balancing & Alignment
33	Car Washing & Detailing
47	Motorcycle (Okada) Repairs
48	Tricycle (Keke/Tuk-tuk) Repairs
49	Car Upholstery & Interior Repair
50	Windscreen & Auto Glass Repair
51	Car Battery Services
52	Vehicle Tracking & GPS Installation
53	Car Key Cutting & Programming
54	Driving School & Lessons
55	Vehicle Inspection Services
56	Car Rental Services
57	Chauffeur & Driver Services
58	Dispatch Rider Services
59	Diesel Delivery
60	Moving & Relocation
61	Errand Services
62	Water Delivery Services
133	Vehicle Dealer (Vehicle Market Permission)
134	Individual Vehicle Seller (Vehicle Market Permission)

Category 2: Home & Property Services (45 Services)
ID	Service Name
9	AC, Fridge & Cooker Repair
10	Carpentry Services
12	Dish Installation & Repair
13	Electrical Services
14	Fumigation & Pest Control
15	Gardening & Landscaping
16	Generator Servicing & Repair
17	InterLocking Floors
18	Masonry & Construction
19	Painting
21	Plumbing Services
22	P.O.P
25	Solar Panel Installation & Maintenance
26	Tiling & Flooring
27	Welding & Fabrication
28	Architectural Design & Consulting
38	Gas Delivery & Refill
43	Domestic Help & Cleaning
45	Security Services
63	Roofing Services
64	Borehole Drilling & Maintenance
65	Water Tank Installation & Cleaning
66	Inverter Installation & Repair
67	CCTV & Surveillance Installation
68	Aluminum Windows & Doors
69	Septic Tank & Soakaway Services
70	Burglar Proof Installation
71	Mosquito Net & Screen Installation
72	Swimming Pool Maintenance
73	Gate Automation & Intercom
74	Waterproofing Services
75	Ceiling Installation
76	Wall Screeding Services
77	Locksmith Services
78	Water Purification & Filter Installation
79	Curtain & Blinds Installation
80	Interior Decoration
81	Furniture Making & Upholstery
82	Real Estate Agent (Real Estate Market Permission)
83	DSTV/GOTV Subscription & Repair
131	Landlords & Property Owners (Real Estate Market Permission)
132	Property Management Services (Real Estate Market Permission)
137	Property Insurance Provider (Financial Service)
139	Property Financing Provider (Financial Service)

Category 3: Lifestyle & Professional Services (57 Services)
ID	Service Name
11	Computer Repair & Maintenance
20	Phone Repair & Maintenance
23	Recycling (Trash for Cash)
24	Shoe Repair & Maintenance
29	Barbing
30	BBQ Services
31	Camera & Photography Services
32	Cap Wash and Maintenance
34	Catering & Event Services
35	Delivery & Logistics
36	Event Planning & Rentals
37	FMCG Procurement & Logistics
39	Islamiya & Quranic Studies
40	Home Tuition & Lessons
41	Laundry & Dry Cleaning
42	Medical & Healthcare
44	Manicure & Pedicure
46	Tailoring Services
85	Makeup Artistry
86	Spa & Massage Services
88	Henna/Lalle Application
89	Skincare Services
91	Legal Services
95	Translation Services
96	Travel Agency Services
98	Website & App Development
99	Graphic Design Services
100	Video Production & Editing
101	Social Media Management
102	Digital Marketing
103	Printing Services
104	DJ Services
105	MC & Event Hosting
107	Decoration Services
108	Cake Baking & Decoration
109	Small Chops & Snacks
110	Bouncy Castle & Kids Entertainment
111	Poultry Farming Services
112	Fish Farming (Aquaculture)
113	Veterinary Services
114	Crop Farming & Agro Services
115	Tractor & Equipment Hire
116	Music Lessons & Instruments
117	Language Lessons
118	Vocational Training
119	Fitness & Personal Training
122	Nanny & Childcare Services
123	Elderly Care Services
124	Home Nursing Services
125	Pet Grooming
126	Pet Sitting & Walking
127	Pet Training
128	Watch Repair
129	Bag Repair & Restoration
130	Key Cutting & Duplication
135	General Insurance Provider (Financial Service)
136	Vehicle Financing Provider (Financial Service)
138	Vehicle Insurance Provider (Financial Service)
140	General Financing Provider (Financial Service)

IMPORTANT! - Workkin Subscription Types
1. No Subscription (Free Tier)
Services Listing:

Free Service Listings: One (1)

Additional Listings: Payment required (highest price tier)

Service Visibility: Lowest priority

Vehicle Market:

Free Vehicle Slots: One (1)

Additional Slots: Payment required (highest rate)

Featured Vehicles: Paid only (highest rate)

Real Estate Market:

Free Property Slots: One (1)

Additional Slots: Payment required (highest rate)

Featured Properties: Paid only (highest rate)

General Market:

Free Slots: One (1)

Additional Slots: Payment required (highest tier)

Featured Products: Paid only (highest tier)

AI Intelligence Access:

Basic market insights (aggregated)

No personalized recommendations

Limited search intelligence

2. Base Subscription (Basic Premium)
Services Listing:

Free Service Listings: Two (2) within one category

Additional Listings: Reduced rate

Service Visibility: Category premium section

Vehicle Market:

Free Vehicle Slots: Three (3)

Additional Slots: Reduced rate

Featured Vehicles: One (1) free per month

Real Estate Market:

Free Property Slots: Three (3)

Additional Slots: Reduced rate

Featured Properties: One (1) free per month

General Market:

Free Slots: Two (2)

Additional Slots: Reduced rate

Featured Products: One (1) free per month

AI Intelligence Access:

Basic personalized insights

Market trend notifications

Pricing suggestions

Basic competitor analysis

3. Mid Subscription (Professional Premium)
Services Listing:

Free Service Listings: Three (3) across any categories

Additional Listings: Further reduced rate

Service Visibility: Premium section with badge

Vehicle Market:

Free Vehicle Slots: Seven (7)

Additional Slots: Further reduced rate

Featured Vehicles: Three (3) free per month

Vehicle Analytics: Full access

Real Estate Market:

Free Property Slots: Seven (7)

Additional Slots: Further reduced rate

Featured Properties: Three (3) free per month

Property Analytics: Full access

General Market:

Free Slots: Three (3)

Additional Slots: Further reduced rate

Featured Products: Three (3) free per month

AI Intelligence Access:

Advanced personalized insights

Demand forecasting

Competitive intelligence

Business growth recommendations

Real-time market alerts

4. Top Subscription (Global Premium)
Services Listing:

Free Service Listings: Seven (7)

Additional Listings: Lowest rate

Service Visibility: Pinned at top globally

Vehicle Market:

Free Vehicle Slots: Twenty (20)

Additional Slots: Unlimited at lowest rate

Featured Vehicles: Unlimited free

Vehicle Analytics: Full analytics with AI insights

Real Estate Market:

Free Property Slots: Twenty (20)

Additional Slots: Unlimited at lowest rate

Featured Properties: Unlimited free

Property Analytics: Full analytics with AI insights

General Market:

Free Slots: Thirteen (13)

Additional Slots: Lowest rate

Featured Products: Unlimited free

AI Intelligence Access:

Enterprise-level intelligence

Predictive analytics

Custom AI models

API access for integration

Dedicated AI insights dashboard

Real-time business intelligence

Market expansion recommendations

IMPORTANT! - AI RAG System Implementation Details
Technical Architecture
Backend Components:

Data Pipeline:

Daily ETL jobs for data extraction

Real-time streaming for urgent data

Anonymization and privacy compliance

Vector embedding generation

AI Service Layer:

DeepSeek API integration (free tier)

Pinecone vector database (free tier)

Embedding model: text-embedding-ada-002

Response caching layer

API Endpoints:

/api/ai/insights - Get personalized insights

/api/ai/search - Intelligent search

/api/ai/recommendations - Recommendations engine

/api/ai/analytics - Business intelligence

Frontend Integration:

Dashboard Widgets:

AI Insights Panel

Market Trends Visualization

Recommendation Cards

Predictive Analytics Charts

Real-time Features:

Live market updates

Instant search suggestions

Dynamic pricing tips

Opportunity alerts

AI Intelligence Modules
1. Market Intelligence Module
Real-time price monitoring across all markets

Supply-demand analysis

Competitive positioning

Seasonal trend prediction

Geographic market analysis

2. Business Optimization Module
Revenue maximization strategies

Cost optimization suggestions

Staff utilization analysis

Service portfolio optimization

Customer retention insights

3. Risk Assessment Module
Transaction risk scoring

Fraud pattern detection

Creditworthiness assessment (for financial partners)

Market volatility alerts

Compliance monitoring

4. Personalization Engine
User behavior analysis

Preference learning

Customized recommendations

Predictive needs anticipation

Context-aware suggestions

Data Privacy & Security
Anonymization: All user data anonymized before AI processing

GDPR Compliance: Full compliance with data protection regulations

User Consent: Explicit consent for AI data usage

Data Encryption: End-to-end encryption for sensitive data

Access Controls: Role-based access to AI insights

Performance Optimization
For Free Tier Limitations:

Batch processing during low-traffic periods

Efficient caching strategies

Context window optimization

Progressive enhancement based on user tier

Scalability Plan:

Phase 1: Basic insights for all users

Phase 2: Enhanced analytics for premium users

Phase 3: Advanced AI for enterprise users

Phase 4: Custom AI model training

IMPORTANT! - Technical Architecture (Updated)
Backend Stack
Runtime: Node.js with Express.js

Database: PostgreSQL (Neon.tech free tier)

AI Vector DB: Pinecone (free tier, 100K vectors)

AI Model: DeepSeek API (free tier, 128K context)

API: GraphQL (Apollo Server)

Module Type: ES Modules

Language: JavaScript (JS)

ORM: Prisma

Real-time: Socket.io

Job Queue: BullMQ with Redis (Upstash free tier)

File Upload: Multer with Cloudinary (free tier)

Email: Resend (free tier)

SMS: Twilio (pay-as-you-go)

Payment: Zainpay SDK (primary), Paystack, Flutterwave

Monitoring: Sentry (free tier)

Frontend Stack
Framework: Next.js 14+ (App Router)

Module Type: ES Modules

Language: TypeScript (TS/TSX)

Styling: Tailwind CSS + Shadcn/UI

State Management: Zustand + React Query

Forms: React Hook Form + Zod

Maps: Mapbox or Google Maps

Charts: Recharts

AI Integration: Custom hooks for DeepSeek API

Real-time: Socket.io client

Image Processing: Next/Image with Cloudinary

Security Architecture
Custom authentication (no third-party auth libraries)

Custom role-based authorization

JWT tokens with refresh tokens

Password hashing (bcrypt with 12 rounds salt)

Rate limiting and DDoS protection

HTTPS with HSTS

Input sanitization and validation

SQL injection prevention

XSS and CSRF protection

GDPR compliance

File upload validation and virus scanning

API request throttling

IMPORTANT! - Deployment Flow
Hosting Services
Backend Hosting: Railway (free tier, auto-scaling)

Frontend Hosting: Vercel (Next.js optimized, free tier)

Database: Neon.tech PostgreSQL (free tier)

AI Vector DB: Pinecone (free tier)

Caching: Upstash Redis (free tier)

File Storage: Cloudinary (free tier)

Email: Resend (free tier)

AI Service: DeepSeek API (free tier)

Monitoring: Sentry (free tier)

CDN: Vercel Edge Network

AI System Deployment
Development Environment:

Local Pinecone instance for testing

DeepSeek development API keys

Mock data for AI training

Local vector database

Production Environment:

Pinecone production instance

DeepSeek production API keys

Real-time data streaming

Production vector embeddings

Cached responses for common queries

IMPORTANT! - Complete Platform Integration Matrix
Module	Service Provider Access	Client Access	Unregistered Access
Services			
Post Services	✅ (Subscription based)	❌	❌
Book Services	✅ (As client)	✅	❌
Rate Services	✅ (After service)	✅ (After service)	❌
Vehicle Market			
Post Vehicles	✅ (IDs: 133,134 + subscription)	❌	❌
Browse Vehicles	✅	✅	✅ (Limited)
Contact Seller	✅ (Subscribed only)	✅ (Subscribed only)	❌
View Payment Info	✅ (Subscribed only)	✅ (Subscribed only)	❌
Real Estate Market			
Post Properties	✅ (IDs: 82,131,132 + subscription)	❌	❌
Browse Properties	✅	✅	✅ (Limited)
Contact Agent/Owner	✅ (Subscribed only)	✅ (Subscribed only)	❌
View Payment Info	✅ (Subscribed only)	✅ (Subscribed only)	❌
General Market			
Post Items	✅ (Subscription based)	✅ (Subscription based)	❌
Browse Items	✅	✅	✅ (Limited)
Contact Seller	✅ (Subscribed only)	✅ (Subscribed only)	❌
AI Intelligence			
Basic Insights	✅ (Limited)	✅ (Limited)	✅ (Aggregated)
Personalized Insights	✅ (Subscription based)	✅ (Subscription based)	❌
Advanced Analytics	✅ (Top tier only)	✅ (Top tier only)	❌
Platform-Wide Rules
Payment Rule: All marketplace transactions (vehicle, property, general) handled externally

In-App Payments: Only for subscriptions, featured listings, job postings, services

Rating System: Unified across all transaction types with 48-hour window

AI Intelligence: Tier-based access with free basic insights

Contact Visibility: Only subscribed users can view contact/payment details

Verification: Enhances credibility across all modules

Staff Hierarchy: Works across all provider types

Squads: Can form across service categories

Financial Integration: Providers showcase products, transactions external

Documentation: All verification documents uploaded as pictures

Scalability: Platform scales from individual providers to full companies

AI Integration: DeepSeek + Pinecone free tier for cost-effective intelligence



module.exports = {
  CREATE_ZAINBOX: {
      name: "CREATE_ZAINBOX",
      url: '/zainbox/create/request',
      method: 'post',
  },
  ZAINBOXES: {
      name: "ZAINBOXES",
      url: '/zainbox/list',
      method: 'get',
  },
  ZAINBOX_TRANSACTIONS: {
      name: "ZAINBOX_TRANSACTIONS",
      url: '/zainbox/transactions',
      method: 'get',
  },
  MERCHANT_TRANSACTIONS: {
      name: "MERCHANT_TRANSACTIONS",
      url: '/zainbox/transactions',
      method: 'get',
  },
  CREATE_VIRTUAL_ACCOUNT: {
      name: "CREATE_VIRTUAL_ACCOUNT",
      url: '/virtual-account/create/request',
      method: 'post',
  },
  VIRTUAL_ACCOUNTS: {
      name: "VIRTUAL_ACCOUNTS",
      url: 'zainbox/virtual-accounts',
      method: 'get',
  },
  VIRTUAL_ACCOUNT_TRANSACTIONS: {
      name: "VIRTUAL_ACCOUNT_TRANSACTIONS",
      url: '/virtual-account/wallet/transactions',
      method: 'get',
  },

  UPDATE_VIRTUAL_ACCOUNT_STATUS: {
      name: "UPDATE_VIRTUAL_ACCOUNT_STATUS",
      url: '/virtual-account/change/account/status',
      method: 'patch',
  },
  VIRTUAL_ACCOUNT_BALANCE: {
      name: "VIRTUAL_ACCOUNT_BALANCE",
      url: '/virtual-account/wallet/balance',
      method: 'get',
  },
  ALL_VIRTUAL_ACCOUNT_BALANCE: {
      name: "ALL_VIRTUAL_ACCOUNT_BALANCE",
      url: '/zainbox/accounts/balance',
      method: 'get',
  },
  ZAINBOX_PROFILE: {
      name: "ZAINBOX_PROFILE",
      url: '/zainbox/profile',
      method: 'get',
  },
  BANK_LIST: {
      name: "BANK_LIST",
      url: '/bank/list',
      method: 'get',
  },
  NAME_ENQUIRY: {
      name: "NAME_ENQUIRY",
      url: '/bank/name-enquiry',
      method: 'get',
  },
  FUNDS_TRANSFER: {
      name: "FUNDS_TRANSFER",
      url: '/bank/transfer',
      method: 'post',
  },
  TRANSFER_VERIFICATION: {
      name: "TRANSFER_VERIFICATION",
      url: '/virtual-account/wallet/transaction/verify',
      method: 'get',
  },
  DEPOSIT_VERIFICATION: {
      name: "DEPOSIT_VERIFICATION",
      url: '/virtual-account/wallet/deposit/verify',
      method: 'get',
  },
  TOTAL_PAYMENT_COLLECTED: {
      name: "TOTAL_PAYMENT_COLLECTED",
      url: '/zainbox/transfer/deposit/summary',
      method: 'get',
  },
  CREATE_SCHEDULED_SETTLEMENT: {
      name: "CREATE_SCHEDULED_SETTLEMENT",
      url: '/zainbox/settlement',
      method: 'post',
  },
  GET_SCHEDULED_SETTLEMENT: {
      name: "GET_SCHEDULED_SETTLEMENT",
      url: '/zainbox/settlement',
      method: 'get',
  }, 
  INITIALIZE_PAYMENT: {
      name: "INITIALIZE_PAYMENT",
      url: '/zainbox/card/initialize/payment',
      method: 'post',
  },
  RETRIEVE_PAYMENT_INFO: {
      name: "RETRIEVE_PAYMENT_INFO",
      url: '/zainbox/card/retrieve/payment/info',
      method: 'get',
  },
  GET_CARD_PAYMENT_STATUS: {
      name: "GET_CARD_PAYMENT_STATUS",
      url: '/virtual-account/wallet/deposit/verify',
      method: 'get',
  },
  RECONCILE_CARD_PAYMENT: {
      name: "RECONCILE_CARD_PAYMENT",
      url: '/virtual-account/wallet/transaction/reconcile/card-payment',
      method: 'get',
  },
  RECONCILE_DEPOSIT_PAYMENT: {
      name: "RECONCILE_DEPOSIT_PAYMENT",
      url: '/virtual-account/wallet/transaction/reconcile/bank-deposit',
      method: 'get',
  },
  MAKE_RECURRING_CARD_PAYMENT: {
      name: "MAKE_RECURRING_CARD_PAYMENT",
      url: '/zainbox/card/recurring/purchase',
      method: 'post',
  },
  UPDATE_VIRTUAL_ACCOUNT_BVN: {
      name: "UPDATE_VIRTUAL_ACCOUNT_BVN",
      url: '/virtual-account/update/bvn',
      method: 'post',
  }
}

/**
 * A custom error class for handling the library related errors.
 * @class BaseError
 */
 class BaseError extends Error {
  /**
   * The BaseError Constructor.
   * @param {String} options.message - The error message if any.
   * @constructor BaseError
   */
  constructor(options = {}) {
    super();
    Error.captureStackTrace(this, this.constructor);
    this.name = this.constructor.name;
    this.message = options.message;
  }
}

module.exports = BaseError;

const BaseError = require('./error.base');
module.exports = BaseError;

const BASE_URL = 'https://sandbox.zainpay.ng';
const BASE_URL_PROD = 'https://api.zainpay.ng';

module.exports = {
    BASE_URL,
    BASE_URL_PROD
};

const handleErrors = (error) => {
  return error.response.data;
};

const handleAxiosError = (error) => {
  return error.message;
};

module.exports = {
  handleErrors,
  handleAxiosError
};

const error = require('./errors')
const constants = require('./constants')
const handleErrors = require('./handle-errors')
const getUrl = require('./url')

module.exports = {
        error,
        constants,
        handleErrors,
        getUrl
}

/**
 * return the sandbox or production URL
 * @param {string} publicKey - Your public key.
 * @returns The base url for the public key
 */
 const getUrl = (sandbox) => {
  const { BASE_URL_PROD, BASE_URL } = require('./constants');

  if (sandbox) {
    return BASE_URL;
  }
  return BASE_URL_PROD;
};

module.exports = getUrl;
const serviceTypes = require("./constants/services");

/**
 * @description initialize the Zainpay wrapper function
 * @param {object} param =>  publicKey, data, serviceType, sandbox
 * @return {function} request function
 */
async function Zainpay(param) {
    const axios = require('axios');
    const {
        getUrl,
        handleErrors,
        handleAxiosError,
    } = require('./utils');
    let { publicKey, serviceType, sandbox, data, params } = param;
    
      /**
   * makes an encrypted call to Zainpay API
   * @param {object} params => publicKey, data, serviceType sandbox
   * @param {function} callback gets called with the result(data) object
   * @return {object} data return decrypted data response object
   */
    if (!publicKey) {
        return console.log('publicKey is required');
    }

    if (!serviceType) {
        return console.log('serviceType is required');
    }

    if (!sandbox) {
        sandbox = false
    }

    try {
        const baseUrl = getUrl(sandbox);
        const axiosStruct = await axios.create({
            baseURL: baseUrl,
            headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + publicKey,
            },
        });

        let { url, method } = serviceTypes[serviceType.name];

        if (params) {
            url = url + "/" + params;
        }

        const response = axiosStruct[method](url, data)
            .then(function (response) {
                if (response.status === 200) {
                    return response.data
                }
            })
            .catch(function (error) {
                return error.response.data
        });

        return await response;
        
    } catch (error) {
        return {
            error: "Request Failed"
        }
    }
}

module.exports = {
    Zainpay,
    serviceTypes
}
Create Zainbox
USE: Create a zainbox. A zainbox is a virtual bucket that allows a merchant to create unlimited multiple virtual accounts.
URL : host/zainbox /virtual-account/create/request
Sandbox Query : https://sandbox.zainpay.ng/zainbox/create/request
Live Query : https://api.zainpay.ng/zainbox/create/request
Required Payload Properties: name, callbackUrl
Optional Payload Properties: emailNotification, description, tags, codeNamePrefix, allowAutoInternalTransfer

Auto Internal Transfer
The Auto Internal Transfer feature in Zainpay simplifies fund settlement by automatically consolidating deposits from all virtual accounts within a Zainbox into a single Internal Settlement Account. This account is automatically generated when the Zainbox is created.

Funds deposited into any virtual account within the Zainbox are automatically transferred to the Internal Settlement Account. Additionally, card payments are also settled directly into this account, providing a unified view of all payment collections within the Zainbox.

The Internal Settlement Account serves as the sole source of payouts or settlements. By consolidating funds into one account, discrepancies and errors during settlement are minimized.

By default, the "allowAutoInternalSettlement "is set to false, meaning it is turned off. This ensures that auto-internal transfers are only initiated when intentionally enabled.

To activate, set allowAutoInternalSettlement to true:

{
    "allowAutoInternalSettlement": true
  }
Once enabled, funds deposited into virtual accounts will begin transferring automatically to the Internal Settlement Account.

Request Payload
MethodPOST

      

{
  "name": "Example Merchant",
  "callbackUrl": "https://example.com/callback",
  "emailNotification": "notify@example.com",
  "description": "This is an example merchant",
  "tags": "tag1, tag2",
  "codeNamePrefix": "EXM",
  "allowAutoInternalTransfer": true
}             
           
      

       
JSON Response

      

{
  "code": "00",
  "data": [
    {
    "callbackUrl": "https://example.com/webhook/zainpay ",
    "codeName": "THbfnDvK5o",
    "emailNotification": "myemail@example.com",
    "name": "test-box",
    "tags": "land, management"
    },
  {
    "callbackUrl": "https://example.com/webhook/zainpay ",
    "codeName": "Zbx9022334",
    "emailNotification": "myemail2@example.com",
    "name": "test-box-2",
    "tags": "charity"
  }
  ],
  "description": "successful",
  "status": "200 OK"
}               
           
      

       
Get all Zainboxes
USE: Get all your created zainboxes
Call Method: GET
URL : host/zainbox/list
Sandbox Query : https://sandbox.zainpay.ng/zainbox/list
Live Query : https://api.zainpay.ng/zainbox/list
Parameter:

JSON Response :

      

{
"code": "00",
    "data": 
[
    {
        "callbackUrl": "https://example.com/webhook/zainpay ",
        "codeName": "THbfnDvK5o",
        "name": "test-box",
        "tags": "land, management"
    },
    {
    "callbackUrl": "https://example.com/webhook/zainpay ",
    "codeName": "rAqwjnYO5chL3QuV7yk0",
    "name": "powershop8",
    "tags": "discos, kedco, aedc"
    }
],
    "description": "successful",
    "status": "Success"
}                           
           
      

       
Update Zainbox
USE: This endpoint is used to update a Zainbox.
URL : host/zainbox/update
Sandbox Query : https://sandbox.zainpay.ng/zainbox/update
Live Query : https://api.zainpay.ng/zainbox/update
Parameter : ZainboxCode(Required), callbackUrl(optional), name(Required), emailNotification(optional)

Request Payload
MethodPATCH

      

{
  "name":"Test One", 
  "tags": "testUpdate",
  "callbackUrl": "https://example.com/ ", 
  "emailNotification": "test@example.com",
  "codeName": "ze73kjdiurwej94sss"
}                    
           
      

       
JSON Response

      

{
"code": "00",
"description": "zainbox successfully updated",
"status": "200 OK"
}
           
      

       
Get all Zainbox Accounts
USE: Get all virtual accounts linked to a zainbox
Call Method: GET
URL : host/zainbox/virtual-accounts/{zainboxCodeName}
Sandbox Query : https://sandbox.zainpay.ng/zainbox/virtual-accounts/{zainboxCodeName}
Live Query : https://api.zainpay.ng/zainbox/virtual-accounts/{zainboxCodeName}
Parameter : zainboxCodeName (required)

JSON Response :

      

[
  {
      "bankAccount": "7966903286",
      "bankName": "035",
      "name": "Go fundme Limited"
  },
  {
      "bankAccount": "7969472891",
      "bankName": "035",
      "name": "Idris Urmi Bello"
  }
]
                  
           
      

       
All Virtual Account Balance of a Zainbox
USE: This endpoint fetches all current account balances for all virtual accounts in a zainbox.
Call Method: GET
URL : host/zainbox/accounts/balance/{zainboxCode}
Sandbox Query : https://sandbox.zainpay.ng/zainbox/accounts/balance/THbfnDvK5o
Live Query : https://api.zainpay.ng/zainbox/accounts/balance/THbfnDvK5o
Parameter: zainboxCode(Required)

JSON Response

      

{
  "code": "00",
  "data":  
  [
    {
    "accountName": "Aminu Nasar",
    "accountNumber": "7966884043",
    "balanceAmount": 372555,
    "transactionDate": "2021-10-13T13:45:52"
    },
    {
    "accountName": "Khalid Ali Sani",
    "accountNumber": "1234567890",
    "balanceAmount": 200,
    "transactionDate": "2021-12-13T13:45:52"
    },
    {
    "accountName": "Nura Bala Usman",
    "accountNumber": "9900778833",
    "balanceAmount": 105000,
    "transactionDate": "2022-01-29T13:45:52"
    }
  ]
  "description": "successful",
  "status": "Success"
}                 
           
      

       
Zainbox Transactions History
USE: Get a list of transactions from a particular zainbox
Call Method: GET
URL : host/zainbox/transactions/{zainboxCode}
Sandbox Query : https://sandbox.zainpay.ng/zainbox/transactions/THbfnDvK5o
Live Query : https://api.zainpay.ng/zainbox/transactions/THbfnDvK5o
Parameter: zainboxCode(Required)

JSON Response

      

{
"code": "00",
"data": [
  {
    "accountNumber": "7964524199",
    "amount": 45000,
    "balance": 45000,
    "narration": "",
    "transactionDate": "2021-12-28T11:47:45",
    "transactionRef": "",
    "transactionType": "deposit"
  },
  {
    "accountNumber": "7964524199",
    "amount": 923000,
    "balance": 968000,
    "narration": "",
    "transactionDate": "2021-12-28T11:48:35",
    "transactionRef": "",
    "transactionType": "deposit"
  }],
"description": "successful",
"status": "Success"
}               
          
      

       
Total Payment Collected By Zainbox
USE: Get the sum of total amount collected by all virtual accounts for a particular zainbox in a particular period, for both transfer and deposit transactions
Call Method: GET
URL : host/zainbox/transfer/deposit/summary/{zainboxCode}
Sandbox Query : https://sandbox.zainpay.ng/zainbox/transfer/deposit/summary/THbfnDvK5o?dateFrom=2022-02&dateTo=2022-03
Live Query : https://api.zainpay.ng/zainbox/transfer/deposit/summary/THbfnDvK5o?dateFrom=2022-02&dateTo=2022-03
Parameter: zainboxCode (Required), dateFrom (optional, if not provided, the system returns the data of the current month), dateTo (optional)

JSON Response

      

{
"code": "00",
"data": [
  {
    "count": 4,
    "dateFrom": "2022-02",
    "dateTo": "2022-03",
    "total": "12690",
    "transactionType": "deposit"
  },
    {
    "count": 4,
    "dateFrom": "2022-02",
    "dateTo": "2022-03",
    "total": "29038",
    "transactionType": "transfer"
  }
        ],
"description": "Summary grouped by txn type",
"status": "Success"
}
                             
           
      

       
Zainbox Profile and Current Billing Plan
USE: Get the complete profile of a Zainbox, including the Current Billing Plan for account to account and interBank transfers respectively
Call Method: GET
URL : host/zainbox/profile/{zainboxCode}
Sandbox Query : https://sandbox.zainpay.ng/zainbox/profile/THbfnDvK5o
Live Query : https://api.zainpay.ng/zainbox/profile/THbfnDvK5o
Parameter : zainboxCode (required)

JSON Response

      

{
"code": "00",
"description": "successful",
"status": "Success",
"data": {
  "zainbox": {
      "callbackUrl": "https://example.com/webhook/zainpay",
      "codeName": "THbfnDvK5o",
      "name": "test-box",
      "tags": "land, management"
      },
  "account2AccountBilling": {
      "fixedCharge": "1000",
      "percentageCharge": 1.5
      },
  "interBankBilling": {
      "fixedCharge": "5000.0",
      "percentageCharge": 1.4
      }
  }
  
}             
           
      

       
Create Settlement
USE: For Scheduling Settlement
Create a scheduled settlement for a zainbox
To create a scheduled settlement for a zainbox., please bear in mind that at any given time, a zainbox can only have one type of settlement.

Planned settlements are divided into three categories.



T1

-

Transaction plus one working day

The value of the T1 schedule. The period must always be on a daily basis.



T7

-

Trasaction plus 7 days

Transaction plus seven days for T7 schedule should be one of Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, or Sunday



T30

-

Transaction plus 30 days

The schedule Period value for T30 should be 1 - 30 or lastDayOfMonth

 Important Note
Days like February 28th and February 29th, as well as months with only 30 days,

will be covered by lastDayOfMonth

The payload's settlementAccountList parameter is an array/list of bank accounts with their corresponding settlement percentages.

Scenario:
Let's say you have a zainbox with three virtual accounts, and you want to set it up so that the total deposits in these three virtual accounts are split between two accounts at every Transaction plus one day (T1). The first settlement account has 90% of the funds, whereas the second contains only 10%.

Call Method: POST
URL : host/zainbox/settlement
Sandbox Query : https://sandbox.zainpay.ng/zainbox/settlement
Live Query : https://api.zainpay.ng/zainbox/settlement
Token: Required

Request Payload
MethodPOST

      

{
"name": "new-daily-settlement3", "zainboxCode": "THbfnDvK5o", "scheduleType": "T1",
"schedulePeriod": "Daily", "settlementAccountList": 
[
{ "accountNumber":"1234567890", "bankCode":"0009", "percentage": "10" },
{ "accountNumber":"1234567890", "bankCode":"0009", "percentage": "90" }
],
"status": true
}             
           
      

       
JSON Response

      

{
  "code": "00",
  "description": "successful",
  "status": "200 OK"
}              
      
      

       
Deactivating Schedule:
To de-activate a schedule, simply update the payload and set the STATUS parameter to FALSE

API CODES

python

Node.js

CURL
import requests 
    url = "https://api.zainpay.ng/zainbox/settlement" 
    payload = {
        "name": "new-daily-settlement3",
        "scheduleType": "T30",
        "schedulePeriod": "Daily",
        "zainboxCode": "THbfnDvK5op",
        "status": True
        }
    headers = {
        "Content-Type": "application/json",
        "Authorization": "Bearer  your_public_key_here"
        }
        response = requests.request("POST", url, json=payload, headers=headers)
    print(response.text)                                                                                                       
    
Get Settlement
USE: For getting settlement(s) tied to a zainbox
Call Method: GET
URL : host/zainbox/settlement?{zainboxCode}
Sandbox Query : https://sandbox.zainpay.ng/zainbox/settlement?zainboxCode=THbfnDvK5o
Live Query : https://api.zainpay.ng/zainbox/settlement?zainboxCode=THbfnDvK5o
Parameter : zainboxCode (required)

JSON Response

      

{
	"code": 200,
	"status": "success",
	"description": "Successful",
	"data": {
		"name": "Asusu",
		"schedulePeriod": "Daily",
		"scheduleType": "T1",
		"settlementAccounts": 
    [
      { 
        "accountNumber":"1234567890", 
        "bankCode":"0009", 
        "percentage": "10" 
      },
      { 
        "accountNumber":"1234567890", 
        "bankCode":"0009", 
        "percentage": "90" 
      }
    ],
	"zainbox": "THbfnDvK5o"
 }
}        
           
Create Virtual Account
USE: Create a virtual account. Map a virtual account to a zainbox. A zainbox can hold multiple virtual accounts. Set Bank type string to"fidelity" for a Fidelity Bank virtual account, "fcmb" for FCMB virtual account or "gtBank" for a Guaranty trust Bank virtual account.
Note: Replace Bank type String with the desired Bank type. Available Banks are FidelityBank, FCMB and GT Bank
Call Method: POST
URL : host/zainbox/virtual-account/create/request
Sandbox Query : https://sandbox.zainpay.ng/virtual-account/create/request
Live Query : https://api.zainpay.ng/virtual-account/create/request
Parameter:

Request Payload:
MethodPOST

      

{
"bankType": "gtBank",
"firstName": "Amina12",
"surname": "Test",
"email": "shuaiba11@gmail.com",
"mobileNumber": "08092837262",
"dob": "12-08-1996",
"gender": "M",
"address": "bompai",
"title": "Mr",
"state": "Kano",
"bvn": "22345678901",
"zainboxCode": "THbfnDvK5o"
}                       
      

       
JSON Response

      

{
"code": "00",
"data": {
"bankName": "gtBank",
"email": "shuaiba11@gmail.com",
"accountName": "Betastack Test Amina12",
"accountType": "",
"accountNumber": "2917863937"
},
"description": "successful",
"status": "200 OK"
}    
           
      

       
Virtual Account Balance
Use : Get the current wallet balance of a virtual account number
Call Method: GET
URL : host/zainbox/virtual-account/wallet/balance/{accountNumber}
Sandbox Query : https://sandbox.zainpay.ng/virtual-account/wallet/balance/7965332109
Live Query : https://api.zainpay.ng/virtual-account/wallet/balance/7965332109
Parameter : accountNumber (required)

JSON Response

      

{"code": "00",
  "data":
  {
  "accountName": "Aminu Nasar Adam", 
  "accountNumber": "7966884043", 
  "balanceAmount": 372555, 
  "transactionDate": "2021-10-13T13:45:52" 
  }
  , 
  "description": "successful",
  "status": "Success" 
}             
           
      

       
Update Virtual Account Status
Use : Activate or deactivate virtual account
Call Method: PATCH
URL : host/virtual-account/change/account/status
Sandbox Query : https://sandbox.zainpay.ng/virtual-account/change/account/status
Live Query : https://api.zainpay.ng/virtual-account/change/account/status
Parameter :

Request Payload
MethodPATCH

      

{
    "zainboxCode": "THbfnDvK5o", 
    "accountNumber": "7963799062", 
    "status": true 
}                 
           
      

       
NOTE: Setting the status field to true will activate the virtual account, while setting it to false will deactivate it.

 Important Note
A deactivated virtual account will not be able to receive or transfer funds

Successful JSON Response

      

{
    "code": "00",
    "description": "Successfully Updated Account",
    "status": "success"
}                  
           
      

       
Failed JSON Response

      

{
    "code": "04",
    "description": "Failed to Update Account",
    "status": "Failed"
}     
      

       
Virtual Account Transactions
USE: Get all transactions of an account
Call Method: GET
URL : host/zainbox/virtual-account/wallet/transactions/{accountNumber}
Sandbox Query : https://sandbox.zainpay.ng/virtual-account/wallet/transactions/7965332109
Live Query : https://api.zainpay.ng/virtual-account/wallet/transactions/7965332109
Parameter : accountNumber (required)

JSON Response

      

{
"code": "00",
"data": 
[
{
    "accountNumber": "7966884043",
    "destinationAccountNumber": "2000002105",
    "amount": 7289,
    "balance": 379844,
    "narration": "",
    "transactionDate": "2021-10-13T13:41:39",
    "transactionRef": "",
    "transactionType": "transfer"
},
{
    "accountNumber": "7966884043",
    "destinationAccountNumber": "1234567890",
    "amount": 7289,
    "balance": 372555,
    "narration": "",
    "transactionDate": "2021-10-13T13:45:52",
    "transactionRef": "",
    "transactionType": "transfer"
}
],
    "description": "successful",
    "status": "Success"
}               
           
      

       
Get Bank List
USE: Get the list of available banks.
Call Method: GET
URL : host/zainbox/bank/list
Sandbox Query : https://sandbox.zainpay.ng/bank/list
Live Query : https://api.zainpay.ng/bank/list
Parameter:

JSON Response

      

{
  "code": "00",
  "data": [
    {
      "code": "120001",
      "name": "9PAYMENT SERVICE BANK"
    },
    {
      "code": "090270",
      "name": "AB MICROFINANCE BANK"
    },
    {
      "code": "070010",
      "name": "ABBEY MORTGAGE BANK"
    }
    ],
  "description": "Bank list",
  "status": "Success"
}      
           
      

       
Name Enquiry
USE: Use the bankCode acquired from the get bank list to validate a bank account number.
Call Method: GET
URL : host/zainbox/bank/name-enquiry?{bankCode}&{accountNumber}
Sandbox Query : https://sandbox.zainpay.ng/bank/name-enquiry?bankCode=000013&accountNumber=0011242735
Live Query : https://api.zainpay.ng/bank/name-enquiry?bankCode=000013&accountNumber=0011242735
Parameter: bankCode(Required), accountNumber(Required)

JSON Response

      

{
    "code": "00",
    "data": {
        "accountName": "Nura Aminu Muhammad",
        "accountNumber": "004532112",
        "bankCode": "000014",
        "bankName": "ACCESS BANK"
    },
    "description": "successful",
    "status": "Success"
}                          
           
      

       
Funds Transfer
USE: Fund transfers can be made in the following ways:


Transferring money from one wallet to another



Make a bank account transfer from your wallet

Zainpay infers your fund transfer type, so you don't have to specify it. The charges for each form of transfer are different. This charge can be obtained through your commercials.

Call Method: POST
URL : host/zainbox/bank/transfer/v2
Sandbox Query : https://sandbox.zainpay.ng/bank/transfer/v2
Live Query : https://api.zainpay.ng/bank/transfer/v2

 Important Note
The amount in the JSON request should be converted to kobo decimalization. It is expected that neither float nor double values will be utilized in this case.

Request Payload
MethodPOST

      

{
    "destinationAccountNumber": "0012121252",
    "destinationBankCode": "000005",
    "amount": "2500",
    "sourceAccountNumber": "7965540126",
    "sourceBankCode": "0013",
    "zainboxCode": "13934_rgwUtC",
    "txnRef": "1119809090831300508190108",
    "narration": "kano street",
    "callbackUrl": "https://xainapp.com"
}              
           
      

       
JSON Success Response

      

{
  "code": "200 OK",
  "data": {
  "amount": "1000",
  "callBackUrl": "https://xainapp.com",
  "destinationAccountName": "IDRIS KABIR",
  "destinationAccountNumber": "0012121252",
  "destinationBankCode": "000005",
  "narration": "kano street",
  "paymentRef": "NIPMINI/46643/Payment from Betastack",
  "sourceAccountNumber": "7965540126",
  "sourceBankAccountName": "wemaBank",
  "sourceBankCode": "0013",
  "status": "success",
  "totalTxnAmount": "1100",
  "txnFee": "100",
  "txnRef": "1119809090831300508190108",
  "zainboxCode": "13934_rgwUtC"
  },
  "description": "Funds Transfer Successful ",
  "status": "200 OK"
}         
           
      

       
JSON Failure Response

      

{
  "code": "500 Bad gateway",
  "data": {
  "amount": "1000",
  "callBackUrl": "https://xainapp.com",
  "failureReason": "destination bank not responding",
  "destinationAccountNumber": "0012121252",
  "destinationBankCode": "000005",
  "narration": "kano street",
  "status": "failed",
  "txnRef": "1119809090831300508190108",
  "zainboxCode": "13934_rgwUtC"
  },
  "description": "Funds Transfer Failed! ",
  "status": "500 Bad gateway"
}        
           
      

       
Transfer Verification
USE: The endpoint can be used to verify a posted transfer by its txnRef acquired after successful Funds Transfer
Call Method: GET
URL : host/virtual-account/wallet/transaction/verify/{txnRef}
Sandbox Query : https://sandbox.zainpay.ng/virtual-account/wallet/transaction/verify/svxgdtyGDHt67
Live Query : https://api.zainpay.ng/virtual-account/wallet/transaction/verify/hJDHtyr8874
Parameter: txnRef (Required)

JSON Response for valid transaction

      

{
	"code": "00",
	"data": {
		"amount": "29500",
		"destinationAccountNumber": "0139900794",
		"destinationBankCode": "000018",
		"narration": " launch for devs",
		"paymentRef": "3341110202_999999240902123233374094734063",
		"sourceAccountNumber": "7966349147",
		"txnDate": "2024-09-02T12:31:49",
		"txnRef": "11131300503180079",
		"txnStatus": "success"
	},
	"description": "successful",
	"status": "200 OK"
}       
      

       
JSON Response for invalid transaction

      


{
	"code": "04",
	"description": "Txn not found",
	"status": "Failed"
}                 
           
      

       
Deposit Verification
USE: The endpoint can be used to verify a funds deposit notification received via our Deposit WebHook notification event
Call Method: GET
URL : host/virtual-account/wallet/deposit/verify/v2/{txnRef}
Sandbox Query : https://sandbox.zainpay.ng/virtual-account/wallet/deposit/verify/v2/{txnRef}
Live Query : https://api.zainpay.ng/virtual-account/wallet/deposit/verify/v2/{txnRef}
Parameter: txnRef(required). The txnRef sent in the webhoook notificatoin payload.

JSON Response for valid reference

      

{
"code": "00",
"data": {
"amountAfterCharges": 3692500,
"bankName": "WEMA BANK",
"beneficiaryAccountName": "7961644804",
"beneficiaryAccountNumber": "7961644804",
"narration": "Registration fees",
"paymentDate": "2024-11-01T18:06:15.674293",
"paymentRef": "JNJQyYBBtPqO4IX2jbro",
"sender": "7964673997",
"senderName": "7964673997",
"txnDate": "2024-11-01T18:06:15.674135",
"txnRef": "ACK_202411011706134459",
"txnType": "deposit",
"zainboxCode": "Live_RHei952Nk3BiqoBQr3DW",
"zainboxName": "Live"
},
"description": "successful",
"status": "200 OK"
}            
           
      

       
JSON Response for invalid reference

      


{
	"code": "04",
	"description": "Txn not found",
	"status": "Failed"
}                 
           
      

       
Merchant Transactions
USE: Get the list of first 50 transactions of a merchant
Call Method: GET
URL : host/zainbox/transactions?count=10
Sandbox Query : https://sandbox.zainpay.ng/zainbox/transactions?count=10
Live Query : https://api.zainpay.ng/zainbox/transactions?count=10
Parameter: count is an optional parameter with a default value of 20

JSON Response

      

{
"code": "00",
"data": 
  [
   {
    "accountNumber": "7964524199",
    "amount": 45000,
    "balance": 45000,
    "narration": "",
    "transactionDate": "2021-12-28T11:47:45",
    "transactionRef": "",
    "transactionType": "deposit"
   },
   {
    "accountNumber": "7964524199",
    "amount": 923000,
    "balance": 968000,
    "narration": "",
    "transactionDate": "2021-12-28T11:48:35",
    "transactionRef": "",
    "transactionType": "deposit"
    }
  ],
"description": "successful",
"status": "Success"
}             
           
      

       
Bank Deposit Reconciliation
USE: This endpoint helps our merchant repush all hanging deposits made in a virtual account.
Call Method: GET
URL : host/virtual-account/wallet/transaction/reconcile/bank-deposit
Sandbox Query : https://sandbox.zainpay.ng/virtual- account/wallet/transaction/reconcile/bank-deposit
Live Query : https://api.zainpay.ng/virtual-account/wallet/transaction/reconcile/bank- deposit
Parameter: sessionId, verificationType, bankType, accountNumber

Note:
1. The values of verificationType can only be anyone of depositReferenceNumber or depositAccountNumber
2. sessionId is required when verificationType = depositReferenceNumber, also accountNumber , verificationType , bankType are all required

JSON Response

      

{
"code": "00",
"data": {
"amount": {
"amount": 44300.000
},
"bankName": "000017",
"beneficiaryAccountName": "Zainpay",
"beneficiaryAccountNumber": "4427686982",
"narration": "any bba",
"paymentDate": "2023-11-28T10:20:23.546817",
"paymentRef": "000017231128997",
"sender": "Zainpay",
"senderName": "Zainpay",
"txnDate": "2023-11-28T10:20:20.105073","txnRef": "20231128091119552",
"txnType": "deposit",
"zainboxCode": "0UW8e14g4xJxmxMbHkMy"
},
"description": "successful",
"status": "200 OK"
}          
           
      

       
Error Response

      


{
"code": "20",
"description": "Deposit not verified, please try again",
"status": "502 Bad Gateway"
}             
           
      

       
Create Dynamic Virtual Account (DVA)
Create a temporary virtual account for a specific transaction. The account is valid for the specified duration, and funds received are automatically settled into the merchant's Internal Settlement Account (ISA) tied to the Zainbox used.
Note: Amount must be in kobo. Duration must be between 300 seconds (5 minutes) and 72 hours. Account Name is fixed as "Zainpay Checkout".
Call Method: POST
Live Query: https://api.zainpay.ng/virtual-account/dynamic/create/request
Sandbox Query: https://sandbox.zainpay.ng/virtual-account/dynamic/create/request
Required Parameters: bankType, email, amount, zainboxCode, txnRef, duration, accountName, callBackUrl

Request Payload
MethodPOST

        

{
  "bankType": "gtBank",
  "email": "august@gmail.com",
  "amount": "50000",
  "zainboxCode": "20457_PdciM7SQFHc8f49EmAfy",
  "txnRef": "3734570194110645420356961",
  "duration": 120,
  "accountName": "Zainpay Checkout",
  "callBackUrl": "https://webhook.site/91a56ae3-6c54-4961-a6d3-a4e37aced7c9"
}
        

      
Successful Response

        

{
  "code": "00",
  "data": {
    "accountName": "Betastack Technology LTD",
    "accountNumber": "8183854198",
    "amount": "50000",
    "bankName": "gtBank",
    "duration": 120,
    "email": "august@gmail.com",
    "paymentStatus": "pending",
    "totalAmount": "55500",
    "txnFee": "5500",
    "txnRef": "3734570194110645420356961"
  },
  "description": "successful",
  "status": "200 OK"
}
        

      
Parameter Descriptions
Parameter	Type	Required	Description
bankType	String	Yes	Bank code (e.g., gtBank)
email	String	Yes	Customer email address
amount	Integer	Yes	Amount in kobo
zainboxCode	String	Yes	Zainbox code tied to merchant
txnRef	String	Yes	Unique transaction reference
duration	Integer	Yes	Validity period in seconds (300 to 259200)
accountName	String	Yes	Fixed as Zainpay Checkout
callBackUrl	String	Yes	Webhook URL for notifications
Special Rules
Amount must be in kobo.
Duration must be between 300 seconds (5 minutes) and 72 hours.
Account Name is fixed as "Zainpay Checkout".
There are four possible payment statuses of a dynamic virtual account stated in the table below:
Payment Status Definitions
SN	Status	Description
1	pending	This is the first status of a DVA when its initiated
2	success	This is the status when the expected amount is deposited within the live time of the DVA
3	mismatch	This is the status when the amount deposited is higher or lower than the expected amount. Note: mismatched amounts are automatically refunded to the depositor.
4	expired	This is the status when deposits are made while the DVA lifetime has expired. Note: any amount transfers to an expired DVA will be automatically refunded.
Important Notes
Mismatched deposit notifications are sent via webhook to the provided callBackUrl.
Successful deposits are settled into the Internal Settlement Account (ISA) tied to the Zainbox used.
Note: Mismatched amounts are automatically refunded to the depositor.
Note: Any amount transfers to an expired DVA will be automatically refunded.
Simulate Payment
Call Method: POST
Sandbox Query: https://sandbox-api-d.squadco.com/virtual-account/simulate/payment
Bearer Token: sandbox_sk_1c9f9593643d8fb24482711ec30bb8169f534a45bd87
Required Parameters: virtual_account_number, amount, dva

Simulate Payment Request Payload
MethodPOST

        

{
  "virtual_account_number": "3659723853",
  "amount": "101",
  "dva": true
}
        

      
Simulate Payment Successful Response

        

{
  "status": 200,
  "success": true,
  "message": "Success",
  "data": "Payment successful"
}
        

      
Simulate Payment Parameter Descriptions
Parameter	Type	Required	Description
virtual_account_number	String	Yes	The dynamic virtual account number created from the Create DVA endpoint. This is the unique identifier for the virtual account where the transaction will be processed. Example: "3659723853"
amount	String	Yes	The transaction amount in Naira (₦). Example: "101" means ₦101
dva	Boolean	Yes	Boolean value indicating if the payment is for a dynamic virtual account (true or false)
DVA Transaction Status Query (TSQ)
Use the following endpoint to check the status of your DVA payment:

Call Method: GET
Live Query: https://api.zainpay.ng/virtual-account/dynamic/deposit/status/{txnRef}
Sandbox Query: https://sandbox.zainpay.ng/virtual-account/dynamic/deposit/status/{txnRef}
Where txnRef is the reference used when creating the DVA.

DVA Status Query Response

        

{
  "code": "200 OK",
  "data": {
    "accountName": "Zainpay Checkout",
    "accountNumber": "8183854198",
    "amount": "80000",
    "bankType": "gtBank",
    "callBackUrl": "https://webhook.site/8e878f96-c649-479e-a511-31604e7a53da",
    "createdDate": "2025-08-15T14:29:01.566421",
    "duration": 69,
    "email": "july@gmail.com",
    "status": "pending",
    "timeToLive": 51,
    "totalTxnAmount": "81200",
    "txnFee": "1200",
    "txnRef": "37345707331155454103469161",
    "zainboxCode": "THbfnDvK5o"
  },
  "description": "",
  "status": "200 OK"
}
        

      
TSQ Response Parameters
Parameter	Type	Description
accountName	String	Virtual account name
accountNumber	String	Generated virtual account number
amount	String	Expected amount in kobo
bankType	String	Bank code used
callBackUrl	String	Webhook URL for notifications
createdDate	String	ISO timestamp when DVA was created
duration	Integer	Total duration in seconds
email	String	Customer email address
status	String	Current payment status (pending, success, mismatch, expired)
timeToLive	Integer	Remaining time in seconds before expiry
totalTxnAmount	String	Total amount including fees in kobo
txnFee	String	Transaction fee in kobo
txnRef	String	Unique transaction reference
zainboxCode	String	Zainbox code used for the transaction
Error Responses
Code	HTTP Status	Description
01	400	Invalid request payload or missing required field
02	400	Invalid bank type
03	400	Duration out of allowed range
401	401	Unauthorized — missing or invalid API key
500	500	Internal server error    
Initialize Payment
The Initialize Payment endpoint in Zainpay enables businesses and developers to initiate card payments seamlessly. This endpoint generates a unique payment URL that users can be redirected to in order to complete their transactions securely. It supports both sandbox and live environments, making it easy for merchants to test and implement the payment process before going live.

With this API, businesses can facilitate one-time and recurring payments, ensuring a smooth and efficient checkout experience. The request payload requires essential parameters such as amount, transaction reference (txnRef), mobile number, email address, and Zainbox Code, along with an optional callback URL for post-payment processing. Additionally, a custom logo URL can be provided to personalize the payment page. Card payment initialization in Zainpay is divided into two methods:

Redirect
InlineJS
Request Payload
MethodPOST

      

axios.post('https://api.zainpay.ng/v1/merchant/initialize/payment', {
      headers: {
        'Authorization': `Bearer {public_key}`,
      },
      data: {
        amount: "1000",
        txnRef: "unique_transaction_reference",
        mobileNumber: "08012345678",
        emailAddress: "customer@example.com",
        zainboxCode: "ZBX_123456789",
        callbackUrl: "https://yourwebsite.com/callback",
        logoUrl: "https://yourwebsite.com/logo.png"
      }
})                
           
      

       
Redirect Payment
USE: This endpoint is used to initialiaze card payments.
The data field of the response returned is a url which you can redirect your users to visit and make the payment.
URL : host/zainpay.ng/zainbox/card/initialize/payment
Sandbox Query : https://sandbox.zainpay.ng/zainbox/card/initialize/payment
Live Query : https://api.zainpay.ng/zainbox/card/initialize/payment
Parameter : email, amount, txnRef (unique per each request), mobileNumber, zainboxCode, emailAddress and callBackUrl.
Optional Payload Properties: emailAddress, mobileNumber, callBackUrl, allowRecurringPayment, logoUrl,
Valid Image Types: The logoUrl parameter must point to a valid image URL with one of the following formats: jpg, jpeg, png, gif, bmp, webp, svg, tiff, ico
Notes:
The amount parameter should be in Naira(N), but the amount in our webhook notification payload will be in kobo.
If logoUrl is not provided or the URL is invalid, the default Zainpay logo will be displayed. Ensure that the image URL is publicly accessible to avoid display issues on the payment page.

Request Payload
MethodPOST

      

{
    "amount": "767.75",
    "txnRef": "1wswqdferS66rgOdfwefghGr",
    "mobileNumber": "08068869698",
    "zainboxCode": "0UW8e14g4xJxmxMbHkMy",
    "emailAddress": "info@betastack.ng",
    "callBackUrl": "https://google.com?app=12345¶m=kosa",
    "allowRecurringPayment": true,
    "currencyCode": "NGN",
    "logoUrl": "https://picsum.photos/200/300.jpg"
}                 
           
      

       
JSON Response

      

{
"code": "00",
"data":
"https://dev.zainpay.ng/merchant/redirect-payment?e=V5fvxGjb8wwLvOPZXYyaNMlVZSDrkAdv4ne
19X7uiCdqu0kNOOAkMcjbGjApMcivvyLb4vj4azuusyWqC87vtME5n1psVTXai0pIdH61aTdrWJhQF
CuYV3a7xJSWiNdDndxh2zNQNl74l2gUpQwhniASWarYUXLl2soyAUAkeAPJ1pUPlTmZddNiYqzgS
MhoO1T4OMWk",
"description": "card processing initialization",
"status": "200 OK"
}              
           
      

       
Get Card Payment Status
USE: This endpoint is used to retrieve initiated payment status
Call Method: GET
URL : host/virtual-account/wallet/deposit/verify/{txnRef}
Sandbox Query : https://sandbox.zainpay.ng/virtual-account/wallet/deposit/verify/{txnRef}
Live Query : https://api.zainpay.ng/virtual-account/wallet/deposit/verify/{txnRef}
Parameter: txnRef(required) -The unique transaction reference you passed during payment initialization

Successful JSON Response

      

{
"code": "00",
"data": {
  "amount": {
    "amount": 100
  },
  "bankName": "",
  "beneficiaryAccountName": "4427505285",
  "beneficiaryAccountNumber": "4427505285",
  "narration": "Approved by Financial Institution",
  "paymentDate": "2022-08-09T15:56:01.686777",
  "paymentRef": "Z9I8XkNRta1hq2dlmMzlhwQ9F60dLw",
  "sender": "Zainpay Card",
  "senderName": "Zainpay Card",
  "txnDate": "2022-08-09T15:56:01.685982",
  "txnRef": "Q6166237864",
  "txnType": "deposit",
  "zainboxCode": "THbfnDvK5o"
},
"description": "successful",
"status": "200 OK"
}                 
           
      

       
Failure/Not Found JSON Response

      

{
"code": "04",
"description": "Txn not found",
"status": "400 Bad Request"
}            
           
      

       
NOTE: The above response can also be returned if the payment is still pending or if it has failed.

Card Payment Transaction Reconciliation
USE: This endpoint enables merchants to repush any hanging card payment.
Call Method: GET
URL : http://host./virtual-account/wallet/transaction/reconcile/card- payment?txnRef=1wswwheeyyxwyyuudekka
Sandbox Query : http://sandbox.zainpay.ng./virtual- account/wallet/transaction/reconcile/card-payment?txnRef=1wswwheeyyxwyyuudekka
Live Query : http://api.zainpay.ng./virtual-account/wallet/transaction/reconcile/card- payment?txnRef=1wswwheeyyxwyyuudekka
Parameter: txnRef

Note:
txnRef is required

JSON Response

      

{
"code": "00",
{
"code": "00",
"data": {
"paymentRef": "EcDthbQmOdYJkns6IUUxPyqnCrhuLH",
"txnDate": "2023-11-28T13:26:56",
"txnRef": "1wswwheeyyxwyyuudekka",
"txnStatus": "success"
},
"description": "Transaction successful",
"status": "200 OK"
}     
           
      

       
Error Response

      


{
"code": "04",
"description": "Invalid txnRef",
"status": "400 Bad Request"
}          
           
      

       
InlineJS
Zainpay InlineJS offers a seamless way to integrate card payments into your web application. This section covers how to implement the InlineJS payment modal for processing card transactions.
URL: host/js/inline
Sandbox Script: https://dev.zainpay.ng/v1/zainpay-inline.js
Live Script: https://api.zainpay.ng/v1/zainpay-inline.js
Required Parameters: amount, txnRef, zainboxCode, emailAddress
Optional Parameters: mobileNumber, callBackUrl, allowRecurringPayment, logoUrl, currencyCode

Installation

      

        Add this script to your HTML file:
        <script src="https://dev.zainpay.ng/v1/zainpay-inline.js"></script>
      

      
Configuration Example
MethodJS

      

        // Configure payment details
        const paymentConfig = {
          amount: "500.00", // Total amount for payment
          txnRef: generateUniqueRef(), // Generate unique transaction reference
          mobileNumber: "08012345678",
          zainboxCode: "YOUR_ZAINBOX_CODE",
          emailAddress: "customer@example.com",
          callBackUrl: "https://your-website.com/callback",
          allowRecurringPayment: false,
          currencyCode: "NGN", // Currency (default: "NGN")
          logoUrl: "https://your-website.com/logo.png" // Optional: your logo for the payment modal
        };

        // Public key (sandbox or live)
        const PUBLIC_KEY = "your_zainpay_public_key";
      

      
Implementation Example
MethodJS

      

        // Initiate payment
        function initiatePayment() {
          zainpayInitPayment(paymentConfig, handleCallback, PUBLIC_KEY);
        }

        // Handle the callback after payment response
        function handleCallback(response) {
          switch(response.status) {
            case "success":
              // Handle successful payment (e.g., show success message)
              break;
            case "failed":
              // Handle failed payment (e.g., show failure message)
              break;
            case "cancelled":
              // Handle cancelled payment (e.g., show cancelled message)
              break;
          }
        }
      

      
Parameter Descriptions
Parameter	Type	Required	Description
amount	String	Yes	Payment amount in Naira (e.g., "500.50")
txnRef	String	Yes	Unique transaction reference for each payment
zainboxCode	String	Yes	Your Zainbox merchant identifier
emailAddress	String	Yes	Customer's email address
mobileNumber	String	No	Customer's phone number
callBackUrl	String	No	URL to receive payment notification
allowRecurringPayment	Boolean	No	Enable/disable recurring payments
logoUrl	String	No	Custom logo URL for payment modal
currencyCode	String	No	Payment currency (default: "NGN")
Test Cards
The following cards can be used in the sandbox to make payments.
5060990 5800 0021 7499

Expiry Date: 03/50CVV: 111



PIN: 1111OTP: 123456

4000 0000 0000 2503

Expiry Date: 03/50CVV: 111



PIN: 1111OTP: 1234

5399 2370 3725 2182

Expiry Date: 07/23CVV: 250



PIN: 4321OTP: 123456

Acceptable Cards

Card Tokenization
The Tokenization feature in Zainpay is designed to enhance the security and convenience of recurring card payments. With tokenization, merchants can generate a unique token for a user's card to store it securely. This token can then be used for subsequent transactions without requiring the cardholder to provide their card details repeatedly. This will not only simplify the payment process but also ensures the confidentiality of sensitive card information.

Benefits of Tokenization
Enhanced Security
Tokenization reduces the risk of exposing sensitive card information during transactions, as merchants do not need to store actual card details.

Convenience for Users
Cardholders do not have to repeatedly enter their card details for recurring payments, streamlining the payment process.

Reduced PCI Compliance Scope
Since merchants handle fewer sensitive card details, the scope of PCI DSS (Payment Card Industry Data Security Standard) compliance is reduced.

Efficient Recurring Payments
Simplifies the handling of recurring payments, making it more efficient for both merchants and users.

How it Works
1. Recurrent Payment Handling
Simplifies the handling of recurring payments, making it more efficient for both merchants and users.

              

                

{
  "amount": "100",
  "txnRef" : "Q6166237864",
  "mobileNumber": "08000000000",
  "zainboxCode": "THbfnDvK5o",
  "emailAddress": "info@test.com",
  "callBackUrl" : "https://example.com/webhook/zainpay",
  "allowRecurringPayment" : true
}          
            
                    

                

            
2. Secure Card
After payment has been made, a token is sent to the merchant in the deposit notification payload labelled cardToken. Subsequently, the merchant can use that token to make recurring payments against the card that was used to make the initial payment. The token is a securely generated alphanumeric string that represents the user's card details without exposing the actual sensitive information. Below is the deposit notification webhook sample;

              

                

{
  "data": {
  "depositedAmount": "100000",
  "txnChargesAmount": "6400",
  "amountAfterCharges": "93600",
  "bankName": "ZainMFB",
  "beneficiaryAccountName": "idris",
  "beneficiaryAccountNumber": "7964524199",
  "narration": "gift",
  "paymentDate": "2021-12-28T11:48:35.044886444",
  "paymentRef": "a1oA0ws127quism",
  "sender": "900989098",
  "senderName": "hassan ",
  "txnDate": "2021-12-28T11:48:35.044777507",
  "txnRef": "730003356",
  "txnType": "deposit",
  "zainboxCode": "xmaldoaYnakaAAVOAE",
  "callBackUrl": "https://example.com/webhook/zainpay ",
  "emailNotification": "user@user.com",
  "zainboxName": "users",
  "cardToken" : "oiuytretyguhjkjhGFDSERDTYUITYER34567890IUYDFGHi789"
  },
  "event": "deposit.success"
}    
                        
                    

                

            
3. Recurrent card purchases endpoints
URL : host/zainbox/list
Sandbox Query : https://sandbox.zainpay.ng/zainbox/card/recurring/purchase
Live Query : https://api.zainpay.ng/zainbox/card/recurring/purchase

Request Payload
MethodPOST

      


{
  "amount": "100",
  "txnRef" : "Q6166237864",
  "mobileNumber": "08000000000",
  "zainboxCode": "THbfnDvK5o",
  "emailAddress": "info@test.com",
  "callBackUrl" : "https://example.net/webhook/zainpay",
  "cardToken" : "oiuytretyguhjkjhGFDSERDTYUITYER34567890IUYDFGHi789"
}              
           
      

       
Successful JSON Response

      


{
  "code": "00",
  "data": {
  "amount": "500",
  "callBackUrl": "https://example.com/webhook/zainpay ",
  "emailAddress": "user@gmail.com",
  "txnRef": "P234567891_0802"
  },
  "description": "card payment successful",
  "status": "200 OK"
}        
           
      

       
Conclusion
Zainpay's Tokenization feature is a powerful tool for merchants to enhance the security and efficiency of recurring card payments. By following the outlined guidelines, merchants can seamlessly integrate this feature into their systems, providing a secure and convenient payment experience for both the users and the businesses.

Webhooks/ Event Notifications
At Zainpay, listening to events notifications is not optional; as a lot of process statuses are pushed to your integration via this.

Listening to events
All triggered events will be posted per zainbox(as JSON Objects), be careful and ensure that your configured callback URL for a zainbox doesn't need any form of authentication or authorization, because of this, it's very important that you verify every event sent to avoid providing value to fake/counterfeit events. When an event is sent, it comes with a custom header called ```Zainpay-Signature``` which is an encrypted value of your payload using ```HmacSHA256``` and signed with your secret key.
An example of the header looks this way


      

```
Host: api.zainpay.ng
Cache-Control: no-cache
Zainpay-Signature: ec22e8478242a64c0cb9130f0f37b8090bda2a2681a5aab34dd01d0e97e291a061
User-Agent: api.zainpay.ng/1.0
Content-Type: application/json
```                      
           
      

       
Transfer
An event is pushed to the callback URL of every zainbox when funds are transferred to any of it's virtual account numbers. The payload structure is given below.

Successful Transfer Event

      

```
Host: api.zainpay.ng
Cache-Control: no-cache
Zainpay-Signature: ec22e8478242a64c0cb9130f0f37b8090bda2a2681a5aab34dd01d0e97e291a061
User-Agent: api.zainpay.ng/1.0
Content-Type: application/json
```

{
  "data": {
    "accountNumber": "7964182836",
    "amount": {
      "amount": 2100
    },
    "beneficiaryAccountNumber": "7964182836",
    "beneficiaryBankCode": "0013",
    "narration": "me and you",
    "paymentRef": "bOQtDmSgmiaZpXC6PiAR",
    "txnDate": "2022-01-05T12:43:35.291042627",
    "txnRef": "1q3311s",
    "txnType": "transfer", 
    “zainboxCode”: “xmaldoaYnakaAAVOAE”
  },
  "event": "transfer.success"
}                  
           
      

       
Failed Transfer Event

      

```
Host: api.zainpay.ng
Cache-Control: no-cache
Zainpay-Signature: ec22e8478242a64c0cb9130f0f37b8090bda2a2681a5aab34dd01d0e97e291a061
User-Agent: api.zainpay.ng/1.0
Content-Type: application/json
```

{
  "data": {
  "accountNumber": "98765445677",
  "amount": {
  "amount": 120987667
  },
  "beneficiaryAccountName": "",
  "beneficiaryAccountNumber": "9808787787",
  "beneficiaryBankCode": "000001",
  "internalTxnRef": "RTYUYT5TTS876567SS",
  "txnDate": "2024-09-28T12:50:27.13380995",
  "txnType": "transfer",
  "zainboxCode": "17621_WWWUYTY2I8znFsYbq"
  },
  "event": "transfer.failed"
}
    
           
      

       
Deposit
An event is pushed to the callback URL of every zainbox when its account number receives a deposit transaction. Here is the payload structure

Note
We have updated the deposit event payload for all new Zainboxes, and Zainboxes created before 13th February can be easily upgraded to the new version,
which has the following Deposit event payload. If you would like to upgrade, please contact our support channels, and we will be more than happy to assist you.

The updated version emphasizes the availability of the new deposit event payload and the ease with which users can upgrade to it.

Deposit Event

      

{
  "data": {
    "depositedAmount": "100000",
    "txnChargesAmount": "6400",
    "amountAfterCharges": "93600",
    "bankName": "ZainMFB",
    "beneficiaryAccountName": "idris",
    "beneficiaryAccountNumber": "7964524199",
    "narration": "gift",
    "paymentDate": "2021-12-28T11:48:35.044886444",
    "paymentRef": "a1oA0ws127quism",
    "sender": "900989098",
    "senderName": "hassan ",
    "txnDate": "2021-12-28T11:48:35.044777507",
    "txnRef": "730003356",
    "txnType": "deposit",
    "zainboxCode": "xmaldoaYnakaAAVOAE",
    "callBackUrl": "http://gofundme.ng/webhook",
    "emailNotification": "user@user.com",
    "zainboxName": "users",
    
  },
  "event": "deposit.success"
}                 
           
      
Application Status Codes
Status Code	Description	Category	Status Type
00	Successful	General	Status
20	Invalid source Account Number or ZainboxCode	Funds Transfer	Error
21	Successful Queued Transaction	Funds Transfer	Status
22	Payload validation Error	General	Error
23	Insufficient wallet balance	Funds Transfer	Error
24	Invalid Destination account number	Funds Transfer	Error
25	This account have no wallet balance	Funds Transfer	Error
26	Duplicate transaction ref number	Funds Transfer	Error
27	Fundss transfer Application Error	Funds Transfer	Error
28	Inactive virtual account	Funds Transfer	Status
29	Application Failure	General	Error
30	Billing Estimation Error during fund transfer	Funds Transfer	Error
.