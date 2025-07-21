export interface SocialLink {
    id: string;
    name: string;
    url: string;
    icon: string;
  }
  
  export const socialLinks: SocialLink[] = [
    {
      id: "github",
      name: "GitHub",
      url: "https://github.com/sasidharpenubhakam",
      icon: "github"
    },
    {
      id: "linkedin",
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/mr-sasidhar-680874250/",
      icon: "linkedin"
    },
    {
      id: "email",
      name: "Email",
      url: "sasidharpenubhakam@gmail.com",
      icon: "mail"
    },
    {
      id: "phone",
      name: "Phone",
      url: "tel:9347536925",
      icon: "phone"
    }
  ];