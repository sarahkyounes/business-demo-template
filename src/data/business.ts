export type MenuItem = {

  name: string;

  description?: string;

  price?: string;

};



export type MenuSection = {

  title: string;

  items: MenuItem[];

};



export type BusinessData = {

  demoLabel: string;

  previewBadge: string;

  name: string;

  category: string;

  tagline: string;

  description: string;

  phone: string;

  phoneDisplay: string;

  address: string;

  directionsUrl: string;

  primaryCta: {

    label: string;

    href: string;

  };

  secondaryCta: {

    label: string;

    href: string;

  };

  footerCtas: {

    label: string;

    href: string;

  }[];

  hours: string[];

  photos: {

    src: string;

    alt: string;

  }[];

  menuTitle: string;

  menuSections: MenuSection[];

  accent: {

    primary: string;

    secondary: string;

    soft: string;

  };

};



export const business: BusinessData = {

  demoLabel: "Sample Website Concept",

  previewBadge: "Demo Preview",

  name: "Your Business Name",

  category: "Local Business",

  tagline: "A clean, modern local business website mockup designed to help customers call, visit, and take action.",

  description:

    "This is a reusable one-page business website template built for local client demos. It works for restaurants, salons, barbershops, repair shops, markets, and similar businesses that need a strong mobile-friendly online presence.",

  phone: "+17035551234",

  phoneDisplay: "(703) 555-1234",

  address: "123 Main Street, Fairfax, VA 22030",

  directionsUrl: "https://maps.google.com",

  primaryCta: {

    label: "Call Now",

    href: "tel:+17035551234",

  },

  secondaryCta: {

    label: "View Services",

    href: "#menu",

  },

  footerCtas: [

    {

      label: "Call Now",

      href: "tel:+17035551234",

    },

    {

      label: "Get Directions",

      href: "https://maps.google.com",

    },

    {

      label: "View Services",

      href: "#menu",

    },

  ],

  hours: [

    "Monday - Friday: 9:00 AM - 6:00 PM",

    "Saturday: 10:00 AM - 4:00 PM",

    "Sunday: Closed",

  ],

  photos: [

    {

      src: "/images/hero.jpg",

      alt: "Business hero image",

    },

    {

      src: "/images/photo-1.jpg",

      alt: "Business photo one",

    },

    {

      src: "/images/photo-2.jpg",

      alt: "Business photo two",

    },

    {

      src: "/images/photo-3.jpg",

      alt: "Business photo three",

    },

  ],

  menuTitle: "Services",

  menuSections: [

    {

      title: "Popular Services",

      items: [

        {

          name: "Service One",

          description: "Short description of the service.",

          price: "$25",

        },

        {

          name: "Service Two",

          description: "Short description of the service.",

          price: "$40",

        },

        {

          name: "Service Three",

          description: "Short description of the service.",

          price: "$60",

        },

      ],

    },

    {

      title: "Additional Options",

      items: [

        {

          name: "Option One",

          description: "Another short description.",

          price: "$15",

        },

        {

          name: "Option Two",

          description: "Another short description.",

          price: "$20",

        },

      ],

    },

  ],

  accent: {

    primary: "bg-zinc-950",

    secondary: "bg-red-700",

    soft: "bg-zinc-100",

  },

};