import { Facebook, Instagram, Linkedin, Twitter } from "@/assets";
import { MenuItem } from "./types";

export const MENU_ITEMS: MenuItem[] = [
  { name: "Our Products", link: "/" },
  { name: "About us", link: "/about-us" },
  { name: "Contact Us", link: "/contact" },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    name: "Facebook",
    link: "https://www.facebook.com/",
    icon: Facebook,
  },
  {
    name: "Twitter",
    link: "https://twitter.com/",
    icon: Twitter,
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/",
    icon: Instagram,
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/",
    icon: Linkedin,
  },
] as const;
