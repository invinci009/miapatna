// Ignius Paramedical College - Quick Links

export interface QuickLink {
    id: string;
    title: string;
    description: string;
    href: string;
    icon: string;
    color: 'primary' | 'secondary' | 'accent';
}

export const quickLinks: QuickLink[] = [
    {
        id: "1",
        title: "About Us",
        description: "Learn about our mission, vision, and leadership team",
        href: "/about",
        icon: "info",
        color: "primary"
    },
    {
        id: "2",
        title: "Courses Offered",
        description: "BMLT, DMLT, BPT, BOTT, and more healthcare programs",
        href: "/academics",
        icon: "courses",
        color: "accent"
    },
    {
        id: "3",
        title: "Admissions",
        description: "Apply online for the upcoming session",
        href: "/admissions",
        icon: "apply",
        color: "secondary"
    },
    {
        id: "4",
        title: "Facilities",
        description: "Modern labs, online platform, and research facilities",
        href: "/facilities",
        icon: "facilities",
        color: "primary"
    },
    {
        id: "5",
        title: "Gallery",
        description: "View our campus, labs, and student activities",
        href: "/gallery",
        icon: "gallery",
        color: "accent"
    },
    {
        id: "6",
        title: "Contact Us",
        description: "Get in touch for enquiries and admissions",
        href: "/contact",
        icon: "contact",
        color: "secondary"
    }
];
