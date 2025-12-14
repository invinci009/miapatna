'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface BreadcrumbItem {
    label: string;
    href: string;
}

// Map of path segments to human-readable labels
const pathLabels: Record<string, string> = {
    'about': 'About Us',
    'admissions': 'Admissions',
    'academics': 'Courses & Programs',
    'facilities': 'Facilities',
    'gallery': 'Photo Gallery',
    'contact': 'Contact Us',
    'courses': 'Courses',
    'public-disclosure': 'Public Disclosure',
};

export default function Breadcrumb() {
    const pathname = usePathname();

    // Don't show breadcrumb on home page
    if (pathname === '/') return null;

    // Build breadcrumb items from pathname
    const pathSegments = pathname.split('/').filter(Boolean);
    const breadcrumbItems: BreadcrumbItem[] = [
        { label: 'Home', href: '/' }
    ];

    let currentPath = '';
    pathSegments.forEach((segment, index) => {
        currentPath += `/${segment}`;

        // Get label from map or capitalize segment
        let label = pathLabels[segment] || segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' ');

        // For course detail pages, just show the course ID or name
        if (pathSegments[0] === 'courses' && index === 1) {
            label = `Course ${segment}`;
        }

        breadcrumbItems.push({
            label,
            href: currentPath
        });
    });

    // JSON-LD structured data for breadcrumbs
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': breadcrumbItems.map((item, index) => ({
            '@type': 'ListItem',
            'position': index + 1,
            'name': item.label,
            'item': `https://miapatna.vercel.app${item.href}`
        }))
    };

    return (
        <>
            {/* JSON-LD for SEO */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* Breadcrumb UI */}
            <nav aria-label="Breadcrumb" className="bg-base-200 border-b border-base-300">
                <div className="container mx-auto px-4 md:px-8 lg:px-16 py-3">
                    <ol className="flex items-center gap-2 text-sm flex-wrap">
                        {breadcrumbItems.map((item, index) => {
                            const isLast = index === breadcrumbItems.length - 1;

                            return (
                                <li key={item.href} className="flex items-center gap-2">
                                    {index > 0 && (
                                        <svg className="w-4 h-4 text-subtle-light flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    )}
                                    {isLast ? (
                                        <span className="text-primary font-medium truncate max-w-[150px] md:max-w-none" title={item.label}>
                                            {item.label}
                                        </span>
                                    ) : (
                                        <Link
                                            href={item.href}
                                            className="text-subtle-light hover:text-primary transition-colors truncate max-w-[100px] md:max-w-none"
                                            title={item.label}
                                        >
                                            {item.label}
                                        </Link>
                                    )}
                                </li>
                            );
                        })}
                    </ol>
                </div>
            </nav>
        </>
    );
}
