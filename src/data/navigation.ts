// TODO: Update navigation items as needed for MIA

export interface NavItem {
    label: string;
    href: string;
}

export const navItems: NavItem[] = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Admissions", href: "/admissions" },
    { label: "Academics", href: "/academics" },
    { label: "Facilities", href: "/facilities" },
    { label: "Public Disclosure", href: "/public-disclosure" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: "/contact" },
];

export const ctaButton = {
    label: "Admissions Open",
    href: "/admissions",
};
