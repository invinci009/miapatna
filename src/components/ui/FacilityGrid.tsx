import React from 'react';
import { facilities } from '@/data/facilities';

interface FacilityGridProps {
    maxItems?: number;
}

// SVG Icons for facilities
const facilityIcons: Record<string, React.ReactNode> = {
    lab: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>,
    computer: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
    library: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>,
    online: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>,
    clinical: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>,
    research: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>,
    classroom: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>,
    certificate: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>,
};

const defaultIcon = <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>;

const colorVariants = [
    { bg: 'bg-primary/10', text: 'text-primary', border: 'border-primary', gradient: 'from-primary to-blue-400' },
    { bg: 'bg-secondary/10', text: 'text-secondary-600', border: 'border-secondary', gradient: 'from-secondary to-amber-400' },
    { bg: 'bg-accent/10', text: 'text-accent', border: 'border-accent', gradient: 'from-accent to-emerald-400' },
];

export default function FacilityGrid({ maxItems }: FacilityGridProps) {
    const displayFacilities = maxItems ? facilities.slice(0, maxItems) : facilities;

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayFacilities.map((facility, index) => {
                const colorVariant = colorVariants[index % 3];
                const icon = facilityIcons[facility.icon] || defaultIcon;

                return (
                    <div
                        key={facility.id}
                        className="group bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden"
                        style={{ animationDelay: `${index * 100}ms` }}
                    >
                        {/* Top Gradient Line */}
                        <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${colorVariant.gradient} z-10`}></div>

                        {/* Image Header or Icon */}
                        {facility.image ? (
                            <div className="relative h-40 overflow-hidden">
                                <img
                                    src={facility.image}
                                    alt={facility.title}
                                    width={400}
                                    height={160}
                                    loading="lazy"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                            </div>
                        ) : (
                            <div className="pt-6 px-6">
                                {/* Background Circle */}
                                <div className={`absolute -right-8 -top-8 w-24 h-24 ${colorVariant.bg} rounded-full opacity-50 group-hover:scale-150 transition-transform duration-500`}></div>

                                {/* Icon */}
                                <div className={`relative w-14 h-14 ${colorVariant.bg} rounded-xl flex items-center justify-center mb-4 ${colorVariant.text} group-hover:scale-110 transition-transform`}>
                                    {icon}
                                </div>
                            </div>
                        )}

                        <div className={`relative ${facility.image ? 'p-5' : 'px-6 pb-6'}`}>
                            <h3 className="text-lg font-bold text-neutral mb-2 group-hover:text-primary transition-colors">
                                {facility.title}
                            </h3>
                            <p className="text-sm text-subtle-light leading-relaxed">
                                {facility.description}
                            </p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}


