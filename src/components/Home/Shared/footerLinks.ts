import { FaInstagram } from "react-icons/fa6";
import { FiLinkedin, FiTwitter } from "react-icons/fi";
import { LuFacebook } from "react-icons/lu";
export const jobSeekersLinks = [
  { label: "View Menu", to: "/jobs" },
  { label: "Reserve Your Event", to: "/signup" },
  // { label: "Career Resources", to: "/resources" },
  // { label: "FAQs", to: "/faqs" },
  { label: "Get a Quote", to: "/create-cv" },
];

export const employersLinks = [
  { label: "Wedding Catering", to: "/owner-dashboard/my-jobs/create" },
  { label: "Birthday Party", to: "/owner-dashboard/all-applicant" },
  { label: "Family Gathering", to: "/Family Gathering" },
  // { label: "Success Stories", to: "/success-stories" },
];

export const legalLinks = [
  { label: "Privacy Policy", to: "/privacy-policy" },
  { label: "Terms of Service", to: "/terms-of-service" },
  { label: "Cookie Policy", to: "/cookie-policy" },
];
export const socialLinks = [
  { href: "https://www.facebook.com/", icon: LuFacebook, label: "Facebook" },
  { href: "https://x.com/", icon: FiTwitter, label: "Twitter" },
  {
    href: "https://www.linkedin.com/feed/",
    icon: FiLinkedin,
    label: "LinkedIn",
  },
  { href: "https://www.instagram.com/", icon: FaInstagram, label: "Instagram" },
];
