import type { Metadata } from "next";
import AgroHero from "../components/AgroHero";
import FarmToTableStorytelling from "../components/FarmToTableStorytelling";
import AgroProductsCatalog, { AgroProductItem } from "../components/AgroProductsCatalog";
import AgroHowToBuy from "../components/AgroHowToBuy";
import AgroSeasonalAvailability from "../components/AgroSeasonalAvailability";
import AgroLocationAndMap from "../components/AgroLocationAndMap";
import AgroPhotosGallery, { AgroPhotoItem } from "../components/AgroPhotosGallery";
import AgroNearbyModule from "../components/AgroNearbyModule";
import AgroWholesaleOrderForm from "../components/AgroWholesaleOrderForm";

export const metadata: Metadata = {
  title: "Sampan Eco & Agro | Commercial Organic Farming, Seasonal Produce & Bulk Farmgate Supply",
  description:
    "Sampan Eco & Agro operates organic crop fields, high-yield vegetable complexes, fruit orchards, and commercial floriculture located in Alphadanga, Faridpur, Bangladesh.",
  keywords: [
    "Sampan Eco and Agro",
    "Organic Agriculture Bangladesh",
    "Commercial Vegetable Farming",
    "Alphadanga Faridpur Agro",
    "Fresh Produce Farmgate Supply",
    "Agro B2B Supply Bangladesh",
    "Sampan Group Agro Division",
  ],
  openGraph: {
    title: "Sampan Eco & Agro | Organic Cultivation & Bulk Farmgate Produce",
    description:
      "Organic crop fields, seasonal fruit orchards, and wholesale farmgate harvest supply in Alphadanga, Faridpur, Bangladesh.",
    images: [
      {
        url: "/images/our-divisions/eco-agro/veg2.jpg",
        width: 1200,
        height: 630,
        alt: "Sampan Eco & Agro Agricultural Harvest",
      },
    ],
  },
};

const storyParagraphs = [
  "Founded with a commitment to sustainable, wholesome agriculture, Sampan Eco & Agro manages fertile cultivation fields, seasonal fruit orchards, and greenhouse floriculture in Alphadanga, Faridpur. We focus on natural soil enrichment and chemical-free farming to produce clean, healthy crops.",
  "Our direct farmgate approach ensures produce harvested at peak freshness reaches wholesale merchants, regional markets, corporate kitchens, and retail partners with its natural flavor and nutritional goodness preserved.",
];

const storyPillars = [
  {
    title: "Natural Soil Care",
    description: "Enriching soil fertility naturally through organic compost and responsible crop rotation.",
    icon: "seed" as const,
  },
  {
    title: "Chemical-Free Farming",
    description: "Dedicated to wholesome agricultural methods free from harmful synthetic chemicals.",
    icon: "sun" as const,
  },
  {
    title: "Morning Fresh Harvest",
    description: "Daily hand-picked vegetables and seasonal fruits harvested at peak maturity.",
    icon: "water" as const,
  },
  {
    title: "Direct Farmgate Supply",
    description: "Efficient collection and dispatch direct from our Alphadanga farm to your delivery hub.",
    icon: "truck" as const,
  },
];

const ecoAgroProducts: AgroProductItem[] = [
  {
    id: "organic-okra",
    name: "Farm-Fresh Field Okra & Greens",
    category: "Fresh Vegetables",
    priceBDT: "Bulk Farmgate / Inquire",
    packSize: "Standard Crate",
    image: "/images/our-divisions/eco-agro/veg2.jpg",
    tag: "Morning Harvest",
    description: "Crisp, tender field okra and seasonal green vegetables hand-picked directly from our fertile cultivation beds in Alphadanga.",
    highlights: ["Organically Cultivated", "Daily Morning Harvest", "Direct Farmgate Crates"],
  },
  {
    id: "field-pumpkin",
    name: "Sweet Natural Field Pumpkins",
    category: "Fresh Vegetables",
    priceBDT: "Direct Farmgate / Inquire",
    packSize: "Basket / Agro Sack",
    image: "/images/our-divisions/eco-agro/pumpkin.jpg",
    tag: "Soil Grown",
    description: "Naturally soil-grown organic pumpkins featuring dense, sweet flesh, excellent storage life, and natural nutritional richness.",
    highlights: ["Rich Natural Sweetness", "Uniform Size Sorting", "Long Natural Shelf Life"],
  },
  {
    id: "fresh-eggplants",
    name: "Farm-Fresh Purple Eggplants (Brinjal)",
    category: "Fresh Vegetables",
    priceBDT: "Bulk Farmgate / Inquire",
    packSize: "Standard Crate",
    image: "/images/our-divisions/eco-agro/486247078_122141364842588506_5865218886699525094_n.jpg",
    tag: "Estate Grown",
    description: "Glossy, tender purple eggplants grown with natural soil nutrition and harvested fresh for commercial supply.",
    highlights: ["Hand-Harvested Daily", "Tender & Glossy Skin", "Direct Harvest Packaging"],
  },
  {
    id: "vine-tomatoes",
    name: "Fresh Green & Vine Tomatoes",
    category: "Fresh Vegetables",
    priceBDT: "Direct Harvest / Inquire",
    packSize: "Field Crate",
    image: "/images/our-divisions/eco-agro/485807461_122141364836588506_5451588892501741969_n.jpg",
    tag: "Farm Fresh",
    description: "Firm, healthy vine tomatoes hand-sorted in crates, ideal for wholesale distribution, regional markets, and culinary use.",
    highlights: ["Sun-Nourished Vines", "Careful Field Sorting", "Ideal for Storage & Transit"],
  },
  {
    id: "estate-mangoes",
    name: "Orchard Fresh Sweet Mangoes",
    category: "Seasonal Fruits",
    priceBDT: "Seasonal / Inquire",
    packSize: "Harvest Basket",
    image: "/images/our-divisions/eco-agro/mango.jpg",
    tag: "Summer Special",
    description: "Naturally tree-ripened sweet mangoes harvested directly from our estate orchard groves during peak seasonal harvest.",
    highlights: ["Tree Ripened Naturally", "Aromatic & Sweet Flesh", "Direct Orchard Baskets"],
  },
  {
    id: "floriculture-gerbera",
    name: "Greenhouse Cut Flowers & Floriculture",
    category: "Floriculture & Flowers",
    priceBDT: "Wholesale / Inquire",
    packSize: "Commercial Bundle",
    image: "/images/our-divisions/eco-agro/flower.jpg",
    tag: "Fresh Cut",
    description: "Vibrant gerbera daisies and seasonal ornamental blooms cultivated with care under protected greenhouse conditions.",
    highlights: ["Greenhouse Cultivation", "Long-Lasting Fresh Stems", "Commercial Florist Bundles"],
  },
];

const buyingChannels = [
  {
    id: "1",
    title: "Farmgate Bulk Pickup",
    subtitle: "Direct From Alphadanga Estate",
    description: "Wholesale merchants and buyers can inspect and load freshly harvested crates direct from our Alphadanga packing yard.",
    features: ["Direct Farmgate Pricing", "Live Weight Verification", "Instant Quality Inspection"],
    icon: "farmgate" as const,
    recommendedFor: "Wholesale Merchants & Regional Traders",
  },
  {
    id: "2",
    title: "Commercial B2B Supply",
    subtitle: "Scheduled Transport Dispatch",
    description: "Regularly scheduled dispatches organized for supermarket hubs, hotel kitchens, and corporate institutional buyers.",
    features: ["Carefully Handled Logistics", "Minimal Transit Delay", "Consistent Fresh Shipments"],
    icon: "truck" as const,
    recommendedFor: "Supermarket Chains & Culinary Groups",
  },
  {
    id: "3",
    title: "Seasonal Harvest Contracts",
    subtitle: "Pre-Booked Crop Volumes",
    description: "Arranged seasonal acreage agreements for commercial partners requiring predictable supply volumes.",
    features: ["Guaranteed Seasonal Supply", "Priority Harvest Allocation", "Custom Packing Standards"],
    icon: "b2b" as const,
    recommendedFor: "Commercial Processors & Distributors",
  },
];

const seasonalCalendar = [
  {
    seasonName: "Summer (Baishakh - Jaistha)" as const,
    seasonCode: "summer" as const,
    description: "Peak harvest for sweet orchard mangoes, field okra, and seasonal summer crops.",
    icon: "sun" as const,
    items: [
      { name: "Orchard Mangoes", category: "Fruits", peakMonths: "May - July", status: "Peak Harvest" as const, notes: "Direct estate harvest" },
      { name: "Fresh Field Okra", category: "Vegetables", peakMonths: "April - July", status: "Peak Harvest" as const, notes: "Morning harvest daily" },
      { name: "Seasonal Gourds", category: "Vegetables", peakMonths: "May - August", status: "Available" as const, notes: "Naturally cultivated" },
    ],
  },
  {
    seasonName: "Monsoon (Ashar - Shravan)" as const,
    seasonCode: "monsoon" as const,
    description: "Growth and harvest period for sweet field pumpkins, purple eggplants, and lush greens.",
    icon: "rain" as const,
    items: [
      { name: "Sweet Field Pumpkins", category: "Vegetables", peakMonths: "June - September", status: "Peak Harvest" as const, notes: "Dense soil-grown yield" },
      { name: "Purple Eggplants", category: "Vegetables", peakMonths: "June - October", status: "Peak Harvest" as const, notes: "Tender glossy harvest" },
      { name: "Field Greens", category: "Leafy Greens", peakMonths: "July - Sept", status: "Available" as const, notes: "Chemical-free beds" },
    ],
  },
  {
    seasonName: "Winter (Kartik - Falgun)" as const,
    seasonCode: "winter" as const,
    description: "Prime harvest season for farm tomatoes, winter vegetables, and greenhouse floral blooms.",
    icon: "winter" as const,
    items: [
      { name: "Vine-Fresh Tomatoes", category: "Vegetables", peakMonths: "Dec - March", status: "Peak Harvest" as const, notes: "Firm hand-picked crates" },
      { name: "Greenhouse Gerbera", category: "Flowers", peakMonths: "Nov - Feb", status: "Peak Harvest" as const, notes: "Protected commercial blooms" },
      { name: "Winter Vegetables", category: "Vegetables", peakMonths: "Dec - Feb", status: "Peak Harvest" as const, notes: "Crisp seasonal harvest" },
    ],
  },
];

const ecoAgroFacilities = [
  {
    name: "Sampan Eco & Agro Farm Estate",
    type: "Organic Cultivation & Farmgate Harvest Hub",
    address: "Joydebpur, Boroga, Borice, Alphadanga-7870, Faridpur, Bangladesh",
    phone: "+880 1929-918408",
    keyAssets: [
      "Organic Field Cultivation",
      "Seasonal Fruit Orchards",
      "Commercial Floriculture Greenhouse",
      "Direct Farmgate Dispatch",
    ],
  },
];

const photos: AgroPhotoItem[] = [
  {
    id: "photo-1",
    title: "Fresh Field Okra & Garden Harvest",
    category: "Fresh Vegetables",
    image: "/images/our-divisions/eco-agro/veg2.jpg",
    caption: "Crates of crisp green okra and garden produce harvested fresh in Alphadanga.",
  },
  {
    id: "photo-2",
    title: "Sweet Field Pumpkin Harvest",
    category: "Field Produce",
    image: "/images/our-divisions/eco-agro/pumpkin.jpg",
    caption: "Naturally soil-grown organic pumpkins arranged in harvest baskets.",
  },
  {
    id: "photo-3",
    title: "Estate Purple Eggplant Harvest",
    category: "Fresh Vegetables",
    image: "/images/our-divisions/eco-agro/486247078_122141364842588506_5865218886699525094_n.jpg",
    caption: "Glossy purple eggplants sorted in crates ready for farmgate wholesale dispatch.",
  },
  {
    id: "photo-4",
    title: "Fresh Green & Vine Tomatoes",
    category: "Fresh Vegetables",
    image: "/images/our-divisions/eco-agro/485807461_122141364836588506_5451588892501741969_n.jpg",
    caption: "Hand-picked tomatoes sorted in field crates from our Alphadanga farm beds.",
  },
  {
    id: "photo-5",
    title: "Greenhouse Gerbera Floriculture",
    category: "Floriculture",
    image: "/images/our-divisions/eco-agro/flower.jpg",
    caption: "Commercial gerbera daisy greenhouse rows grown under attentive estate care.",
  },
  {
    id: "photo-6",
    title: "Orchard Mango Harvest Baskets",
    category: "Fruit Orchards",
    image: "/images/our-divisions/eco-agro/mango.jpg",
    caption: "Freshly picked sweet mangoes gathered directly beneath the estate trees.",
  },
  {
    id: "photo-7",
    title: "Fresh Tuberose Blooms & Harvest",
    category: "Floriculture & Greens",
    image: "/images/our-divisions/eco-agro/veg.jpg",
    caption: "Fragrant tuberose floral bundles and garden vegetables prepared for market.",
  },
  {
    id: "photo-8",
    title: "Harvested Farm Mango Baskets",
    category: "Seasonal Fruits",
    image: "/images/our-divisions/eco-agro/fruits.jpg",
    caption: "Wholesale crates of green orchard mangoes ready for seasonal distribution.",
  },
];

const nearbyConcerns = [
  {
    name: "Sampan Eco & Agro Resort",
    category: "Hospitality & Leisure",
    distance: "Adjoining Countryside Resort",
    tagline: "Serene lakeview wooden cottages, boating, and open-air dining in Alphadanga.",
    href: "/our-divisions/hospitality-highway-travel/sampan-eco-agro",
    logo: "/images/brand/sampanechoagro.png",
    icon: "resort" as const,
  },
  {
    name: "Sampan Agro & Golf Resort",
    category: "Hospitality & Leisure",
    distance: "Sister Hospitality Venture",
    tagline: "Integrated agro-resort, golf academy, and family leisure destination.",
    href: "/our-divisions/hospitality-highway-travel/sampan-agro-golf-resort",
    logo: "/images/brand/agroandgolf.png",
    icon: "resort" as const,
  },
];

export default function SampanEcoAgroPage() {
  return (
    <main className="min-h-screen bg-[#F5F5F2] text-neutral-950">

      {/* 1. Hero Banner */}
      <AgroHero
        title="Sampan Eco & Agro"
        subtitle="Organic Crop Cultivation, Seasonal Fruits & Direct Farmgate Supply"
        concernName="Sampan Eco & Agro"
        logo="/images/brand/sampanechoagro.png"
        statusBadge="Commercial Organic Farming & Farmgate Supply"
        statusType="operating"
        description="Operating organic crop fields, vegetable cultivation beds, seasonal fruit orchards, and floriculture grounds in Alphadanga, Faridpur. Delivering wholesome, chemical-free agricultural produce directly to wholesale merchants, commercial buyers, and partners across Bangladesh."
        bannerImage="/images/our-divisions/eco-agro/flower.jpg"
        facts={[
          { value: "Organic", label: "Chemical-Free Soil" },
          { value: "Farmgate", label: "Direct Harvest Dispatch" },
          { value: "Fresh Daily", label: "Vegetables & Fruits" },
          { value: "Alphadanga", label: "Faridpur, Bangladesh" },
        ]}
        accentColor="#15803d"
        badgeColor="#16a34a"
      />

      {/* 2. Farm-to-Table Storytelling */}
      <FarmToTableStorytelling
        title="Wholesome Cultivation & Farmgate Philosophy"
        subtitle="Cultivating Bangladesh's soil with care, organic compost, and wholesome agricultural stewardship in Alphadanga, Faridpur."
        concernName="Sampan Eco & Agro"
        storyParagraphs={storyParagraphs}
        pillars={storyPillars}
        farmImage="/images/our-divisions/eco-agro/veg2.jpg"
        bgTheme="divisions-green"
        accentColor="#15803d"
      />

      {/* 3. What's Sold */}
      <AgroProductsCatalog
        title="What's Sold - Fresh Harvest & Produce Catalog"
        subtitle="Explore our organic farm vegetables, seasonal fruits, and floriculture available for farmgate collection and bulk supply."
        products={ecoAgroProducts}
        bgTheme="about-ivory"
        accentColor="#15803d"
        badgeColor="#16a34a"
      />

      {/* 4. How to Buy */}
      <AgroHowToBuy
        title="How to Buy - Procurement Channels"
        subtitle="Choose your preferred channel - direct farmgate collection, scheduled wholesale transport, or seasonal harvest contracts."
        concernName="Sampan Eco & Agro"
        channels={buyingChannels}
        bgTheme="divisions-green"
        accentColor="#15803d"
      />

      {/* 5. Seasonal Availability */}
      <AgroSeasonalAvailability
        title="Seasonal Harvest Availability Schedule"
        subtitle="Check seasonal crop cycles across Summer, Monsoon, and Winter growing seasons."
        concernName="Sampan Eco & Agro"
        seasons={seasonalCalendar}
        bgTheme="about-ivory"
        accentColor="#15803d"
      />

      {/* 6. Location & Facilities (Verified Address & Directions - No unverified map embed) */}
      <AgroLocationAndMap
        title="Farm Estate Location & Contact"
        subtitle="Located in Alphadanga, Faridpur with direct road connectivity via the Padma Bridge corridor."
        concernName="Sampan Eco & Agro"
        facilities={ecoAgroFacilities}
        facebookUrl="https://www.facebook.com/sampanecoandagro"
        directions={[
          "From Dhaka, follow the expressway across Padma Bridge to Bhanga Interchange.",
          "Continue along the Faridpur regional route toward Alphadanga.",
          "Located at Joydebpur, Boroga, Borice, Alphadanga-7870, Faridpur, Bangladesh.",
        ]}
        bgTheme="divisions-green"
        accentColor="#15803d"
      />

      {/* 7. Photo Gallery */}
      <AgroPhotosGallery
        title="Farm Operations & Harvest Gallery"
        subtitle="Authentic photos from our Alphadanga crop fields, vegetable beds, fruit orchards, and floriculture greenhouse."
        photos={photos}
        bgTheme="about-ivory"
        accentColor="#15803d"
      />

      {/* 8. Nearby Sister Ventures */}
      <AgroNearbyModule
        title="Adjoining Ventures & Sister Concerns"
        subtitle="Explore our adjoining countryside eco-resort retreat and sister divisions."
        currentStoreName="Sampan Eco & Agro"
        locationHubName="Sampan Agro Hub, Alphadanga, Faridpur"
        nearbyConcerns={nearbyConcerns}
        bgTheme="divisions-green"
        accentColor="#15803d"
      />

      {/* 9. Wholesale / B2B Ordering Form & Contact CTA */}
      <AgroWholesaleOrderForm
        title="Wholesale & Bulk Order Inquiry"
        subtitle="Direct farmgate inquiry desk for wholesale merchants, supermarkets, hotel kitchens, and commercial partners."
        concernName="Sampan Eco & Agro"
        bgTheme="white"
        accentColor="#15803d"
      />

    </main>
  );
}
