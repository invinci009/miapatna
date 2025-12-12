'use client';
import Link from 'next/link';
import Section from '@/components/ui/Section';
import { facilities, labEquipment, campusHighlights, facilitiesStats } from '@/data/facilities';
import { schoolInfo } from '@/data/leadership';

// SVG Icons for stats
const StatsIcons: Record<string, React.ReactNode> = {
    lab: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>,
    academic: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 14l9-5-9-5-9 5 9 5z" /><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" /></svg>,
    book: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>,
    equipment: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
};

// SVG Icons for lab equipment
const EquipmentIcons: Record<string, React.ReactNode> = {
    microscope: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m4 0V7" /></svg>,
    beaker: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>,
    heart: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>,
    virus: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>,
    activity: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
    computer: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
    tablet: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>,
    clipboard: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>,
};

// SVG Icons for campus highlights
const HighlightIcons: Record<string, React.ReactNode> = {
    camera: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>,
    sparkles: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>,
    shield: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
    medical: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>,
    lock: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>,
    accessibility: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>,
};

// Facility card icons
const FacilityIcons: Record<string, React.ReactNode> = {
    online: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>,
    clinical: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>,
    research: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>,
    certificate: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>,
};

export default function Facilities() {
    return (
        <>
            {/* Hero Section */}
            <div className="relative bg-gradient-to-br from-blue-900 via-primary to-indigo-900 py-20 md:py-32 overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-10 left-10 w-32 h-32 border-4 border-white rounded-full animate-pulse"></div>
                    <div className="absolute bottom-20 right-20 w-48 h-48 border-4 border-white rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                    <div className="absolute top-1/2 left-1/4 w-20 h-20 border-4 border-white rotate-45 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                </div>

                <div className="container mx-auto px-4 md:px-8 lg:px-16 relative z-10">
                    <div className="text-center max-w-4xl mx-auto">
                        <span className="inline-block bg-white/20 text-white text-sm font-semibold px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
                            World-Class Infrastructure
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
                            State-of-the-Art
                            <span className="block text-secondary mt-2">Campus & Facilities</span>
                        </h1>
                        <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10">
                            Modern infrastructure designed to provide the best learning environment for aspiring healthcare professionals
                        </p>

                        {/* Hero Stats */}
                        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                            {facilitiesStats.map((stat, index) => (
                                <div
                                    key={index}
                                    className="bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-5 text-center border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                                >
                                    <div className="text-white/90 flex justify-center mb-2">
                                        {StatsIcons[stat.icon]}
                                    </div>
                                    <span className="text-2xl md:text-3xl font-bold text-white block">{stat.value}</span>
                                    <span className="text-sm text-white/70">{stat.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Featured Facilities - Bento Grid */}
            <Section
                title="Our Premium Facilities"
                subtitle="Experience excellence in every corner of our campus"
            >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {facilities.map((facility, index) => (
                        <div
                            key={facility.id}
                            className={`group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 ${index === 0 ? 'md:col-span-2 md:row-span-2' : ''
                                }`}
                        >
                            {/* Image or Gradient Background */}
                            {facility.image ? (
                                <div className={`relative ${index === 0 ? 'h-64 md:h-80' : 'h-48'} overflow-hidden`}>
                                    <img
                                        src={facility.image}
                                        alt={facility.title}
                                        loading="lazy"
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                                    {/* Overlay Content */}
                                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                        <h3 className={`${index === 0 ? 'text-2xl md:text-3xl' : 'text-xl'} font-bold mb-2`}>
                                            {facility.title}
                                        </h3>
                                        <p className="text-white/80 text-sm line-clamp-2">{facility.description}</p>
                                    </div>
                                </div>
                            ) : (
                                <div className="p-6">
                                    {/* Icon Header */}
                                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 ${index % 3 === 0 ? 'bg-primary/10 text-primary' :
                                        index % 3 === 1 ? 'bg-secondary/10 text-secondary-600' : 'bg-accent/10 text-accent'
                                        }`}>
                                        {FacilityIcons[facility.icon]}
                                    </div>

                                    <h3 className="text-xl font-bold text-neutral mb-3 group-hover:text-primary transition-colors">
                                        {facility.title}
                                    </h3>
                                    <p className="text-subtle-light text-sm mb-4">{facility.description}</p>

                                    {/* Features Tags */}
                                    {facility.features && (
                                        <div className="flex flex-wrap gap-2">
                                            {facility.features.map((feature, idx) => (
                                                <span
                                                    key={idx}
                                                    className={`text-xs px-3 py-1 rounded-full ${index % 3 === 0 ? 'bg-primary/10 text-primary' :
                                                        index % 3 === 1 ? 'bg-secondary/10 text-secondary-600' :
                                                            'bg-accent/10 text-accent'
                                                        }`}
                                                >
                                                    {feature}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            )}

                            {/* Hover Effect Line */}
                            <div className={`absolute bottom-0 left-0 w-0 h-1 group-hover:w-full transition-all duration-500 ${index % 3 === 0 ? 'bg-primary' :
                                index % 3 === 1 ? 'bg-secondary' : 'bg-accent'
                                }`}></div>
                        </div>
                    ))}
                </div>
            </Section>

            {/* Lab Equipment Showcase */}
            <Section
                className="bg-gradient-to-br from-base-200 to-base-100"
                title="Laboratory Equipment"
                subtitle="Cutting-edge tools for hands-on training"
            >
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                    {labEquipment.map((equipment, index) => (
                        <div
                            key={index}
                            className="group bg-white rounded-2xl p-5 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center border border-gray-100"
                        >
                            <div className={`mx-auto w-14 h-14 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 ${index % 3 === 0 ? 'bg-primary/10 text-primary' :
                                index % 3 === 1 ? 'bg-secondary/10 text-secondary-600' : 'bg-accent/10 text-accent'
                                }`}>
                                {EquipmentIcons[equipment.icon]}
                            </div>
                            <h4 className="font-bold text-neutral text-sm mb-1 group-hover:text-primary transition-colors">
                                {equipment.name}
                            </h4>
                            <span className="text-xs text-subtle-light bg-base-200 px-2 py-1 rounded-full">
                                {equipment.category}
                            </span>
                        </div>
                    ))}
                </div>
            </Section>

            {/* Campus Highlights */}
            <Section
                title="Campus Highlights"
                subtitle="A safe, hygienic, and student-friendly environment"
            >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {campusHighlights.map((item, index) => (
                        <div
                            key={index}
                            className={`group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl border-t-4 transition-all duration-300 hover:-translate-y-1 ${item.color === 'primary' ? 'border-primary' :
                                item.color === 'secondary' ? 'border-secondary' : 'border-accent'
                                }`}
                        >
                            <div className={`mb-4 group-hover:scale-110 transition-transform duration-300 ${item.color === 'primary' ? 'text-primary' :
                                item.color === 'secondary' ? 'text-secondary-600' : 'text-accent'
                                }`}>
                                {HighlightIcons[item.icon]}
                            </div>
                            <h3 className="font-bold text-lg text-neutral mb-2 group-hover:text-primary transition-colors">
                                {item.title}
                            </h3>
                            <p className="text-subtle-light text-sm leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </Section>

            {/* Virtual Tour CTA */}
            <Section className="bg-base-200">
                <div className="bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 rounded-3xl p-8 md:p-12 text-center border border-gray-200">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-primary">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-heading font-bold text-neutral mb-4">
                        Take a Virtual Campus Tour
                    </h2>
                    <p className="text-subtle-light max-w-2xl mx-auto mb-8">
                        Explore our facilities through our photo gallery. See our labs, classrooms, and campus life in action.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link
                            href="/gallery"
                            className="bg-primary text-white px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl hover:bg-primary-focus transition-all duration-300 inline-flex items-center gap-2"
                        >
                            <span>View Gallery</span>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                        </Link>
                        <Link
                            href="/contact"
                            className="bg-white text-primary border-2 border-primary px-8 py-4 rounded-full font-bold shadow-md hover:shadow-lg hover:bg-primary hover:text-white transition-all duration-300"
                        >
                            Schedule a Visit
                        </Link>
                    </div>
                </div>
            </Section>

            {/* Final CTA */}
            <Section className="bg-gradient-to-br from-primary to-primary-focus" dark>
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
                        Experience Our Campus
                    </h2>
                    <p className="text-white/80 text-lg mb-8">
                        Visit our campus to see our world-class facilities firsthand.
                        Our admissions team is ready to guide you through.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            href="/admissions"
                            className="w-full sm:w-auto bg-white text-primary px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                        >
                            Apply Now
                        </Link>
                        <a
                            href={`tel:${schoolInfo.contact.phone[0].replace(/\s/g, '')}`}
                            className="w-full sm:w-auto bg-secondary text-secondary-content px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 inline-flex items-center justify-center gap-2"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            Call Us
                        </a>
                    </div>
                </div>
            </Section>
        </>
    );
}

