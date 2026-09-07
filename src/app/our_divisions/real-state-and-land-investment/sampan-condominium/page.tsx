import type { Metadata } from "next";
import RealEstateHero from "../components/RealEstateHero";
import UnitTypesAndSizes from "../components/UnitTypesAndSizes";
import LandShareStructure from "../components/LandShareStructure";
import FloorPlansViewer from "../components/FloorPlansViewer";
import BuildingSpecificationsModule, { SpecificationCategory } from "../components/BuildingSpecificationsModule";
import LegalCredentialsModule from "../components/LegalCredentialsModule";
import WalkthroughRenderGallery from "../components/WalkthroughRenderGallery";
import PaymentPlanCalculator from "../components/PaymentPlanCalculator";
import SiteVisitBookingForm from "../components/SiteVisitBookingForm";
import DownloadableBrochureCTA from "../components/DownloadableBrochureCTA";
import RealEstateLocationMap from "../components/RealEstateLocationMap";

export const metadata: Metadata = {
  title: "Sampan Condominium | 16-Storied Luxury High-Rise Living",
  description:
    "Official presentation of Sampan Condominium - 16-storied landmark residential tower offering 1,450 to 2,200 sq ft luxury apartments with 40% open space, panoramic city skyline views, sky gardens, and earthquake-resistant BNBC engineering by Sampan Development Ltd.",
};

const facts = [
  { value: "16-Storied", label: "G+15 High-Rise Tower" },
  { value: "1,450–2,200 sft", label: "Luxury Suites" },
  { value: "40% Open Space", label: "Lush Sky Gardens" },
  { value: "Prime Corridor", label: "City Skyline Views" },
];

const units = [
  {
    id: "condo-type-a",
    name: "Grand Sky Suite - 2,200 sq ft",
    category: "4-Bedroom Corner Penthouse Suite",
    sizeSqFt: "2,200 sq ft",
    bedrooms: 4,
    bathrooms: 4,
    balconies: 4,
    priceRange: "Contact for Official Pricing",
    orientation: "South-East Corner with Panoramic Skyline View",
    highlights: [
      "Master Suite (16'-2\" x 12'-0\") with walk-in wardrobe, attached luxury bath & private panoramic balcony",
      "Expansive Living & Formal Dining with floor-to-ceiling soundproof glass facade",
      "2 Deluxe Bedrooms with ensuite bathrooms & private garden verandas",
      "Executive Study / Guest Room (12'-0\" x 11'-6\") with cross-ventilation",
      "Gourmet Island Kitchen with connected utility gallery & maid's quarters with bath",
      "Dual Dedicated Basement Valet Parking Bays",
    ],
    image: "/images/projects/sampan-condominium-interior.jpg",
  },
  {
    id: "condo-type-b",
    name: "Executive Urban Residence - 1,750 sq ft",
    category: "3-Bedroom Luxury Apartment",
    sizeSqFt: "1,750 sq ft",
    bedrooms: 3,
    bathrooms: 3,
    balconies: 3,
    priceRange: "Contact for Official Pricing",
    orientation: "South Facing with 40% Open Landscaped Setback",
    highlights: [
      "Master Bedroom (15'-0\" x 11'-6\") with luxury ensuite bath & private veranda",
      "Spacious Family Living (14'-0\" x 12'-6\") & Open Dining Area (12'-0\" x 10'-6\")",
      "Two Generous Children & Guest Bedrooms with abundant natural daylight",
      "Contemporary Kitchen with granite countertops, double burner line & dry yard",
      "Soundproof double-glazed acoustic windows for whisper-quiet privacy",
      "Covered Ground Floor Parking Slot with EV Charging Provision",
    ],
    image: "/images/projects/sampan-condominium.jpg",
  },
  {
    id: "condo-type-c",
    name: "Contemporary Suite - 1,450 sq ft",
    category: "3-Bedroom Modern Suite",
    sizeSqFt: "1,450 sq ft",
    bedrooms: 3,
    bathrooms: 3,
    balconies: 2,
    priceRange: "Contact for Official Pricing",
    orientation: "Front Expressway & Green Boulevard View",
    highlights: [
      "Well-proportioned 3-Bedroom urban layout optimized for modern family comfort",
      "Open-concept Living & Dining Hall with wide sliding glass balcony doors",
      "Master Bed with designer porcelain tile bathroom & private morning view deck",
      "Modern Modular Kitchen layout with heavy-duty exhaust line & utility bay",
      "High-efficiency cross-ventilation designed to reduce artificial cooling demand",
      "Designated Reserved Car Parking Bay with automated RFID gate access",
    ],
    image: "/images/projects/unit-coming-soon.jpg",
  },
];

const landShareTiers = [
  {
    title: "Condominium Land Share Ownership Tier",
    shareSize: "Proportional Undivided Land Share",
    equityRatio: "1 Full Apartment Unit Share",
    keyBenefits: [
      "Direct Government Registered Land Deed Allocation",
      "Zero Middleman Profit Margin & Complete Construction Cost Transparency",
      "Exclusive Access to Rooftop Infinity Terrace, Fitness Gymnasium & Resident Lounge",
      "Developed by Sampan Development Ltd (Official REHAB Member)",
    ],
  },
];

const floorPlans = [
  {
    id: "fp-condo-grand-2200",
    name: "Sampan Condominium - Grand Sky Suite Layout",
    category: "4-Bedroom Corner Plan (2,200 sq ft)",
    sizeSqFt: "2,200 sq ft",
    image: "/images/projects/sampan-condominium-interior.jpg",
    description: "Ultra-luxury corner layout featuring 4 Bedrooms, 4 Bathrooms, 4 Private Balconies, Expansive Family Lounge, Formal Dining, Gourmet Kitchen, and Maid's Accommodations.",
    features: [
      "Master Suite: 16'-2\" x 12'-0\" + Walk-in Closet & Bath",
      "Living Hall (18'-6\" x 14'-0\") & Dining (14'-0\" x 12'-0\")",
      "Bed 2: 14'-0\" x 12'-0\" & Bed 3: 13'-6\" x 11'-6\"",
      "Dual Passenger Lifts (10-Person) & High-Speed Stretcher Lift",
    ],
  },
  {
    id: "fp-condo-exec-1750",
    name: "Sampan Condominium - Executive Residence Layout",
    category: "3-Bedroom Executive Plan (1,750 sq ft)",
    sizeSqFt: "1,750 sq ft",
    image: "/images/projects/sampan-condominium.jpg",
    description: "Spacious 3-Bedroom family residence with open-concept living hall, 3 Balconies, fitted kitchen with utility veranda, and dedicated foyer entry.",
    features: [
      "Master Bed: 15'-0\" x 11'-6\" + Private Sky Balcony",
      "Living (14'-0\" x 12'-6\") & Dining (12'-0\" x 10'-6\")",
      "Bed 2: 13'-0\" x 11'-0\" & Bed 3: 12'-0\" x 11'-0\"",
      "Ground Floor Covered Parking & Security Guard Station",
    ],
  },
];

const specifications: SpecificationCategory[] = [
  {
    categoryName: "Structural & Engineering",
    iconName: "structure",
    items: [
      "Substructure & superstructure engineered strictly in accordance with Bangladesh National Building Code (BNBC) seismic standards.",
      "High-yield 60,000+ psi deformed steel reinforcement bars from certified Tier-1 mills (BSRM / AKS).",
      "Heavy-duty cast-in-situ concrete piling with deep foundation testing & soil compaction clearance.",
      "Cylinder test crushing strength verified at 28 days by accredited civil engineering testing laboratories.",
    ],
  },
  {
    categoryName: "Building Entrance & Security",
    iconName: "doors",
    items: [
      "Double-height grand entrance reception lobby with marble cladding and air-conditioned guest waiting lounge.",
      "24/7 CCTV surveillance covering perimeter, lobbies, parking bays, and elevator access points.",
      "Automated RFID barrier gate at entry and exit for seamless authorized vehicle movement.",
      "Central intercom network linking reception desk and guard room to all individual condominium residences.",
    ],
  },
  {
    categoryName: "Elevator & Power Infrastructure",
    iconName: "lift",
    items: [
      "Dual European/Japanese-standard high-speed passenger elevators (10-passenger capacity) with V3F smooth ride control.",
      "One dedicated heavy-duty medical stretcher elevator with automatic emergency rescue device (ARD).",
      "100% full standby diesel sound-attenuated generator backup for elevators, water pumps, common lighting, and apartment emergency lines.",
      "Independent electrical substation with HT/LT panel, power factor improvement (PFI) plant & lightning protection arrestors.",
    ],
  },
  {
    categoryName: "Apartment Interiors & Finishes",
    iconName: "floors",
    items: [
      "24\" x 24\" or 32\" x 32\" imported mirror-finish porcelain floor tiles in living, dining, and all bedrooms.",
      "Solid decorative teak/chittagong wood main entrance door with high-security biometric lock & brass fittings.",
      "Concealed copper wiring with European modular switches, circuit breakers & master distribution board.",
      "Double-glazed soundproof sliding glass windows with thermal barrier and safety lock systems.",
    ],
  },
  {
    categoryName: "Kitchen & Utility Gallery",
    iconName: "kitchen",
    items: [
      "Custom granite kitchen worktop with double stainless steel sink and swivel mixer tap.",
      "Concealed piping provision for gas pipeline / central LPG reticulation with dedicated gas leak sensors.",
      "Heavy-duty exhaust fan opening and provision for modern kitchen hood ventilation.",
      "Separate utility balcony with washing machine inlet, drainage outlet & anti-skid rustic ceramic tiling.",
    ],
  },
  {
    categoryName: "Rooftop Wellness & Community",
    iconName: "utility",
    items: [
      "Landscaped rooftop sky garden with green seating alcoves, walking track, and panoramic city vistas.",
      "Equipped residents' fitness gymnasium with modern cardio equipment and locker facilities.",
      "Multipurpose community lounge & prayer hall for resident family gatherings and celebrations.",
      "Energy-efficient solar panels installed on rooftop to power common corridor and perimeter lighting.",
    ],
  },
];

const developerInfo = {
  companyName: "Sampan Development Ltd",
  tagline: "A Sister Concern of Sampan Group",
  corporateOffice: "Dhaka, Bangladesh",
  phones: ["+880 1713-000000", "+880 2-9880000"],
  website: "https://www.sampangroup.com.bd",
  rehabMember: true,
};

const legalCredentials = [
  {
    authority: "RAJUK / Urban Development Authority",
    approvalTitle: "Architectural & Structural Vetting Clearance",
    referenceNumber: "RAJUK Building Clearance Approved",
    status: "100% Verified",
    description: "Approved multi-storey residential building design compliant with setbacks, height restrictions, and road expansion norms.",
  },
  {
    authority: "Ministry of Land & Sub-Registry Office",
    approvalTitle: "Clear Title Mutation & Land Demarcation",
    referenceNumber: "CS, SA, RS & City Jorip Mutation Cleared",
    status: "100% Mutation Secured",
    description: "Freehold clear title land parcel with 100% government revenue payment clearance and zero encumbrances.",
  },
  {
    authority: "Real Estate & Housing Association of Bangladesh",
    approvalTitle: "Official REHAB Member Developer",
    referenceNumber: "REHAB Membership Certified",
    status: "Active Registered Member",
    description: "Built under strict code of conduct and building standards mandated for certified real estate developers in Bangladesh.",
  },
];

const renders = [
  {
    id: "r-condo-1",
    title: "Sampan Condominium - 16-Storied Architectural Facade",
    category: "exterior" as const,
    categoryLabel: "Exterior Architecture",
    image: "/images/projects/sampan-condominium.jpg",
    type: "image" as const,
    description: "Contemporary architectural facade featuring double-glazed glass curtain walls, private sky terraces, and illuminated grand entrance.",
  },
  {
    id: "r-condo-2",
    title: "Panoramic Sky Living & Dining Suite",
    category: "interior" as const,
    categoryLabel: "Interior Living",
    image: "/images/projects/sampan-condominium-interior.jpg",
    type: "image" as const,
    description: "Expansive floor-to-ceiling glass panoramic living room with designer marble kitchen island and twilight skyline vistas.",
  },
];

const landmarks = [
  { landmark: "Transit Corridor Interchange", distance: "800 m", driveTime: "3 Mins" },
  { landmark: "Metro Rail Station", distance: "2.5 km", driveTime: "7 Mins" },
  { landmark: "Premier Educational Institutions", distance: "3.2 km", driveTime: "10 Mins" },
  { landmark: "Commercial Shopping & Corporate Hub", distance: "1.5 km", driveTime: "5 Mins" },
  { landmark: "Hazrat Shahjalal International Airport", distance: "14 km", driveTime: "25 Mins" },
];

export default function SampanCondominiumPage() {
  return (
    <main className="bg-[#f3f6f2] text-[#183b2b] antialiased selection:bg-[#25633a] selection:text-white">

      {/* 1. Hero Overview */}
      <RealEstateHero
        title="Sampan Condominium"
        subtitle="16-Storied Modern High-Rise Luxury Residences"
        divisionName="Sampan Development Ltd"
        statusBadge="Prime Corridor Landmark"
        statusType="ongoing"
        description="An iconic 16-storied residential condominium offering 1,450 to 2,200 sq ft residences, 40% open space with sky gardens, double-height luxury reception, dual high-speed elevators, and earthquake-resistant BNBC engineering."
        image="/images/projects/sampan-condominium.jpg"
        facts={facts}
        accentColor="#25633a"
        badgeColor="#25633a"
      />

      {/* 2. Unit Configurations */}
      <UnitTypesAndSizes
        title="Condominium Suite Configurations"
        subtitle="Explore available 3 & 4 bedroom residences, floor dimensions, panoramic balconies, and specifications."
        units={units}
        bgTheme="divisions-green"
      />

      {/* 3. Building Specifications Module */}
      <BuildingSpecificationsModule
        projectName="Sampan Condominium"
        subheading="Comprehensive architectural, structural engineering, fittings, and infrastructure specifications."
        categories={specifications}
        developerInfo={developerInfo}
        bgTheme="about-ivory"
      />

      {/* 4. Floor Plans Viewer */}
      <FloorPlansViewer
        title="Condominium Floor Plans & Layouts"
        subtitle="Detailed architectural floor layouts showcasing optimized space planning, natural daylight, and cross-ventilation."
        plans={floorPlans}
        bgTheme="divisions-green"
      />

      {/* 5. Land Share Structure */}
      <LandShareStructure
        title="Condominium Land Share Model"
        subtitle="Direct government registered land deed allocation with zero intermediary markups and full construction transparency."
        totalLandArea="35+ Katha Footprint"
        totalSharesCount="120 Land Shares"
        tiers={landShareTiers}
        bgTheme="about-ivory"
      />

      {/* 6. Location & Connectivity Map */}
      <RealEstateLocationMap
        title="Strategic Corridor Location & Accessibility"
        subtitle="Positioned along prime urban growth corridors with rapid access to transit networks, commercial hubs, and lifestyle amenities."
        projectName="Sampan Condominium"
        address="Prime Urban Corridor, Dhaka, Bangladesh."
        gpsCoordinates="23.8342° N, 90.3789° E"
        embedMapUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14601.6!2d90.3789!3d23.8342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDUwJzAzLjEiTiA5MMKwMjInNDQuMCJF!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd"
        landmarks={landmarks}
        bgTheme="divisions-green"
      />

      {/* 7. Legal Credentials Module */}
      <LegalCredentialsModule
        title="Verified Legal Clearances & Credentials"
        subtitle="Every aspect of land ownership, zoning approval, and engineering clearance is verified and legally compliant."
        credentials={legalCredentials}
        bgTheme="about-ivory"
      />

      {/* 8. 3D Renders & Walkthrough Gallery */}
      <WalkthroughRenderGallery
        title="Architectural Perspectives & Virtual Renders"
        subtitle="Experience the grandeur of modern condominium living through high-resolution architectural visualizations."
        items={renders}
        bgTheme="divisions-green"
      />

      {/* 9. Payment Plan Calculator */}
      {/* <PaymentPlanCalculator
        defaultPropertyPriceBDT={16500000}
        bgTheme="about-ivory"
      /> */}

      {/* 10. Downloadable Brochure CTA */}
      <DownloadableBrochureCTA
        projectName="Sampan Condominium"
        bgTheme="divisions-green"
      />

      {/* 11. Site Visit Booking Form */}
      <SiteVisitBookingForm
        projectName="Sampan Condominium"
        bgTheme="about-ivory"
      />

    </main>
  );
}
