export const expressHighwayStoryContent = {
  eyebrow: "A Modern Highway Destination",
  title: "Express Highway Inn",
  description:
    "A premium highway destination by Sampan Group, bringing together refined hospitality, exceptional dining, exclusive leisure, and modern convenience in one distinguished destination.",
  cta: "Discover Membership",
  href: "/contact",
} as const;

export const expressHighwayFeatures = [
  // {
  //   id: "highway-restaurant",
  //   title: "Express Highway Restaurant",
  //   copy: "Exceptional Dining, Open 24/7",
  // },
  // {
  //   id: "vvip-lounge",
  //   title: "VVIP Lounge & Accommodation",
  //   copy: "Premium Comfort, Exclusive Experiences",
  // },
  // {
  //   id: "billiards",
  //   title: "Billiards & Card Room",
  //   copy: "Play, Unwind, Enjoy the Moment",
  // },
  // {
  //   id: "super-shop",
  //   title: "Sampan Mart",
  //   copy: "Everyday Essentials, Open 24/7",
  // },
  // {
  //   id: "ev-car-charging",
  //   title: "EV Charging Station",
  //   copy: "Convenient Charging for Electric Vehicles",
  // },
  // {
  //   id: "automatic-car-wash",
  //   title: "Automatic Car Wash",
  //   copy: "Advanced Care for Every Journey",
  // },
  {
    id: "sampan-trade-emporium",
    title: "Sampan Trade Emporium",
    copy: "A Modern Commercial Destination for Business and Lifestyle",
  },
  {
    id: "sampan-condominium",
    title: "Sampan Condominium",
    copy: "Contemporary Living with Premium Lifestyle Amenities",
  },
  {
    id: "express-highway-inn",
    title: "Express Highway Inn",
    copy: "Where the Highway Leads to Luxury",
  },
] as const;

export function getExpressHighwayStoryLayout() {
  return {
    accentColor: "#58b9eb",
    contentMaxWidth: 1400,
    contentFlowClass: "my-auto",
    mobileGridClass: "grid-cols-2",
    desktopGridClass: "lg:grid-cols-6",
  } as const;
}