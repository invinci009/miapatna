import Link from 'next/link';
import { Metadata } from 'next';
import { schoolInfo, instituteOverview, leadership, faculty, partnerHospitals } from '@/data/leadership';

export const metadata: Metadata = {
    title: 'About Us',
    description: `Learn about ${schoolInfo.name}, established in ${schoolInfo.established}. Quality healthcare education with experienced faculty and modern facilities.`,
};

export default function About() {
    return (
        <>
            {/* Page Hero */}
            <div className="bg-gradient-to-br from-primary to-primary-focus py-16 md:py-24">
                <div className="container mx-auto px-4 md:px-8 lg:px-16 text-center">
                    <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
                        About Us
                    </h1>
                    <p className="text-white/80 text-lg max-w-2xl mx-auto">
                        {schoolInfo.tagline} since {schoolInfo.established}
                    </p>
                </div>
            </div>

            {/* Institute Overview */}
            <section className="py-16">
                <div className="container mx-auto px-4 md:px-8 lg:px-16">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-heading font-bold text-neutral text-center mb-8">
                            Our Story
                        </h2>
                        <p className="text-subtle-light text-lg leading-relaxed text-center mb-12">
                            {instituteOverview.description}
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                            <div className="bg-primary/5 rounded-2xl p-8">
                                <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                                    <span className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">🎯</span>
                                    Our Mission
                                </h3>
                                <p className="text-subtle-light">{instituteOverview.mission}</p>
                            </div>
                            <div className="bg-secondary/5 rounded-2xl p-8">
                                <h3 className="text-xl font-bold text-secondary-600 mb-4 flex items-center gap-2">
                                    <span className="w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center">👁️</span>
                                    Our Vision
                                </h3>
                                <p className="text-subtle-light">{instituteOverview.vision}</p>
                            </div>
                        </div>

                        <div className="bg-base-200 rounded-2xl p-8">
                            <h3 className="text-xl font-bold text-neutral mb-6 text-center">Our Core Values</h3>
                            <div className="flex flex-wrap justify-center gap-3">
                                {instituteOverview.values.map((value, index) => (
                                    <span key={index} className="bg-white px-4 py-2 rounded-full text-neutral font-medium shadow-sm">
                                        {value}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Leadership */}
            <section className="py-16 bg-base-200">
                <div className="container mx-auto px-4 md:px-8 lg:px-16">
                    <h2 className="text-3xl font-heading font-bold text-neutral text-center mb-12">
                        Our Leadership
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {leadership.map((leader) => (
                            <div key={leader.id} className="bg-white rounded-2xl p-8 shadow-lg">
                                <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                                    {leader.name.charAt(0)}
                                </div>
                                <h3 className="text-xl font-bold text-neutral text-center mb-1">{leader.name}</h3>
                                <p className="text-primary text-center font-medium mb-2">{leader.designation}</p>
                                <p className="text-subtle-light text-sm text-center mb-4">{leader.qualification}</p>
                                {leader.message && (
                                    <p className="text-subtle-light text-sm italic text-center">"{leader.message}"</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Info */}
            <section className="py-16">
                <div className="container mx-auto px-4 md:px-8 lg:px-16">
                    <h2 className="text-3xl font-heading font-bold text-neutral text-center mb-12">
                        Visit Us
                    </h2>
                    <div className="max-w-2xl mx-auto">
                        <div className="bg-white rounded-2xl shadow-lg p-8">
                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-neutral mb-1">Address</h4>
                                        <p className="text-subtle-light">{schoolInfo.address.line1}</p>
                                        <p className="text-subtle-light">{schoolInfo.address.line2}</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-neutral mb-1">Phone</h4>
                                        <a href={`tel:${schoolInfo.contact.phone[0].replace(/\s/g, '')}`} className="text-subtle-light hover:text-primary">
                                            {schoolInfo.contact.phone[0]}
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-neutral mb-1">Email</h4>
                                        <a href={`mailto:${schoolInfo.contact.email}`} className="text-subtle-light hover:text-primary">
                                            {schoolInfo.contact.email}
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-8 text-center">
                                <a
                                    href={schoolInfo.googleMapsLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-bold hover:bg-primary-700 transition-colors"
                                >
                                    View on Google Maps
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
