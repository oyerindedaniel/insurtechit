export type MenuItem = {
  name: string;
  link: string;
};

export type FooterLink = {
  name: string;
  link: string;
};

export type FooterSection = {
  header: string;
  links?: FooterLink[];
  details?: {
    phone: string;
    mail: string;
  };
};
