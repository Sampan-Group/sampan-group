export const enquiryTypes = {
  contact: { title: "General enquiry", required: ["name", "email", "subject", "message"] },
  homepage: { title: "Homepage enquiry", required: ["name", "phone", "interest"] },
  launch: { title: "Launch notification signup", required: ["email"] },
  careers: { title: "Talent community application", required: ["name", "email"] },
  newsletter: { title: "Newsroom newsletter signup", required: ["email"] },
  membership: { title: "Club membership visit request", required: ["name", "email"] },
  "golf-resort": { title: "Agro & Golf Resort enquiry", required: ["name", "phone", "email"] },
  "golf-club": { title: "Agro & Golf Club Lounge enquiry", required: ["name", "phone", "email"] },
  "eco-agro": { title: "Eco Agro enquiry", required: ["name", "phone"] },
  maritime: { title: "Maritime investment enquiry", required: ["name", "phone", "email"] },
  education: { title: "LSHS education enquiry", required: ["name", "email", "phone"] },
  property: { title: "Property enquiry", required: ["name", "phone", "email"] },
  "site-visit": { title: "Site visit request", required: ["name", "phone", "visitDate"] },
} as const;

export type EnquiryType = keyof typeof enquiryTypes;
export const MAX_CV_BYTES = 10 * 1024 * 1024;
