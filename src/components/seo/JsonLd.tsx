import { schoolInfo } from '@/data/leadership';

// Organization Schema for the institute
export function OrganizationJsonLd() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'EducationalOrganization',
        '@id': 'https://miapatna.vercel.app/#organization',
        'name': schoolInfo.name,
        'alternateName': schoolInfo.shortName,
        'url': 'https://miapatna.vercel.app',
        'logo': 'https://miapatna.vercel.app/logo.png',
        'description': schoolInfo.tagline,
        'foundingDate': schoolInfo.established,
        'address': {
            '@type': 'PostalAddress',
            'streetAddress': schoolInfo.address.line1,
            'addressLocality': 'Patna',
            'addressRegion': 'Bihar',
            'postalCode': '801505',
            'addressCountry': 'IN'
        },
        'contactPoint': {
            '@type': 'ContactPoint',
            'telephone': schoolInfo.contact.phone[0],
            'contactType': 'admissions',
            'email': schoolInfo.contact.email,
            'availableLanguage': ['English', 'Hindi']
        },
        'sameAs': [
            schoolInfo.social.facebook,
            schoolInfo.social.instagram,
            schoolInfo.social.youtube
        ].filter(Boolean),
        'areaServed': {
            '@type': 'State',
            'name': 'Bihar'
        },
        'hasOfferCatalog': {
            '@type': 'OfferCatalog',
            'name': 'Healthcare Courses',
            'itemListElement': [
                {
                    '@type': 'Course',
                    'name': 'BMLT - Bachelor in Medical Laboratory Technology',
                    'provider': {
                        '@type': 'EducationalOrganization',
                        'name': schoolInfo.name
                    }
                },
                {
                    '@type': 'Course',
                    'name': 'DMLT - Diploma in Medical Laboratory Technology',
                    'provider': {
                        '@type': 'EducationalOrganization',
                        'name': schoolInfo.name
                    }
                },
                {
                    '@type': 'Course',
                    'name': 'BPT - Bachelor in Physiotherapy',
                    'provider': {
                        '@type': 'EducationalOrganization',
                        'name': schoolInfo.name
                    }
                }
            ]
        }
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}

// Website Schema
export function WebsiteJsonLd() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        '@id': 'https://miapatna.vercel.app/#website',
        'url': 'https://miapatna.vercel.app',
        'name': schoolInfo.name,
        'description': 'Best Paramedical College in Patna, Bihar offering BMLT, DMLT, BPT, BOTT courses.',
        'publisher': {
            '@id': 'https://miapatna.vercel.app/#organization'
        },
        'potentialAction': {
            '@type': 'SearchAction',
            'target': {
                '@type': 'EntryPoint',
                'urlTemplate': 'https://miapatna.vercel.app/courses?search={search_term_string}'
            },
            'query-input': 'required name=search_term_string'
        }
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}

// Course Schema for individual course pages
interface CourseJsonLdProps {
    courseName: string;
    courseCode: string;
    description: string;
    duration: string;
    eligibility: string;
}

export function CourseJsonLd({ courseName, courseCode, description, duration, eligibility }: CourseJsonLdProps) {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Course',
        'name': courseName,
        'courseCode': courseCode,
        'description': description,
        'provider': {
            '@type': 'EducationalOrganization',
            'name': schoolInfo.name,
            'sameAs': 'https://miapatna.vercel.app'
        },
        'timeRequired': duration,
        'educationalCredentialAwarded': 'Certificate',
        'occupationalCredentialAwarded': {
            '@type': 'EducationalOccupationalCredential',
            'credentialCategory': 'Diploma/Degree'
        },
        'coursePrerequisites': eligibility,
        'hasCourseInstance': {
            '@type': 'CourseInstance',
            'courseMode': ['onsite', 'online'],
            'instructor': {
                '@type': 'Organization',
                'name': schoolInfo.name
            }
        }
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}

// Local Business Schema for contact page
export function LocalBusinessJsonLd() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        '@id': 'https://miapatna.vercel.app/#localbusiness',
        'name': schoolInfo.name,
        'image': 'https://miapatna.vercel.app/logo.png',
        'url': 'https://miapatna.vercel.app',
        'telephone': schoolInfo.contact.phone[0],
        'email': schoolInfo.contact.email,
        'address': {
            '@type': 'PostalAddress',
            'streetAddress': schoolInfo.address.line1,
            'addressLocality': 'Patna',
            'addressRegion': 'Bihar',
            'postalCode': '801505',
            'addressCountry': 'IN'
        },
        'geo': {
            '@type': 'GeoCoordinates',
            'latitude': 25.5878,
            'longitude': 84.9167
        },
        'openingHoursSpecification': {
            '@type': 'OpeningHoursSpecification',
            'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            'opens': '09:00',
            'closes': '17:00'
        },
        'priceRange': '$$'
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
