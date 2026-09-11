import type { Metadata } from "next";
import SampanEcoAgroClient from "./components/SampanEcoAgroClient";

export const metadata: Metadata = {
  title: "Sampan Eco & Agro Resort | Lakeview Eco-Cottages, Lakeside Dining & Nature Retreat",
  description:
    "A peaceful countryside eco-resort sanctuary featuring luxury lakeview wooden cottages, tranquil boat rides, open-air lakeside dining & BBQ, botanical garden trails, and family weekend staycations on the Dhaka Expressway corridor.",
  keywords: [
    "Sampan Eco and Agro Resort",
    "Eco Resort Bangladesh",
    "Dhaka Mawa Expressway Resort",
    "Lakeview Eco Cottage",
    "Lakeside Dining Resort",
    "Weekend Staycation Dhaka",
    "Nature Retreat Bangladesh",
    "Sampan Group Hospitality",
  ],
  openGraph: {
    title: "Sampan Eco & Agro Resort | Luxury Eco-Cottage Retreat & Lakeside Dining",
    description:
      "A peaceful countryside eco-resort sanctuary with lakefront cottages, serene boat rides, open-air lakeside dining, and refreshing nature stays along the expressway corridor.",
    images: [
      {
        url: "/images/our-divisions/sampan-eco-agro/frontview2.jpg",
        width: 1200,
        height: 630,
        alt: "Sampan Eco & Agro Resort",
      },
    ],
  },
};

export default function SampanEcoAgroPage() {
  return <SampanEcoAgroClient />;
}
