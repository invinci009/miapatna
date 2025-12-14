'use client';
import Section from '@/components/ui/Section';
import { schoolInfo, leadership, instituteOverview, partnerHospitals, placementStats } from '@/data/leadership';

export default function About() {
    return (
        <>
            {/* Page Hero - Clean, professional with white accents */}
            <div className="relative bg-primary overflow-hidden py-20 md:py-28">
                {/* White decorative elements */}
                <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full translate-x-1/3 translate-y-1/3"></div>
                <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-white/5 rounded-full"></div>

                {/* Subtle line pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-0 left-1/4 w-px h-full bg-white"></div>
                    <div className="absolute top-0 left-2/4 w-px h-full bg-white"></div>
                    <div className="absolute top-0 left-3/4 w-px h-full bg-white"></div>
                </div>

                <div className="container mx-auto px-4 md:px-8 lg:px-16 text-center relative z-10">
                    <div className="inline-block mb-4 px-5 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                        <span className="text-white text-sm font-medium tracking-wide">Established {schoolInfo.established}</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-4">
                        About {schoolInfo.shortName}
                    </h1>
                    <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto font-light">
                        {schoolInfo.tagline}
                    </p>
                </div>
            </div>

            {/* Our Story */}
            <Section
                title="Our Story"
                subtitle={`Established in ${schoolInfo.established}`}
            >
                <div className="max-w-4xl mx-auto">
                    <div className="bg-white rounded-2xl p-8 shadow-lg">
                        <p className="text-subtle-light leading-relaxed text-lg">
                            {instituteOverview.description}
                        </p>
                    </div>
                </div>
            </Section>

            {/* Mission & Vision */}
            <Section
                className="bg-base-200"
                title="Mission & Vision"
                subtitle="Our guiding principles"
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-primary">
                        <h3 className="text-2xl font-heading font-bold text-primary mb-4">Our Mission</h3>
                        <p className="text-subtle-light leading-relaxed">
                            {instituteOverview.mission}
                        </p>
                    </div>
                    <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-secondary">
                        <h3 className="text-2xl font-heading font-bold text-secondary mb-4">Our Vision</h3>
                        <p className="text-subtle-light leading-relaxed">
                            {instituteOverview.vision}
                        </p>
                    </div>
                </div>
            </Section>

            {/* Our Values */}
            <Section
                title="Our Values"
                subtitle="What we stand for"
            >
                <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
                    {instituteOverview.values.map((value, index) => (
                        <div
                            key={index}
                            className={`bg-white rounded-xl px-6 py-4 shadow-md border-b-4 ${index % 3 === 0 ? 'border-primary' :
                                index % 3 === 1 ? 'border-secondary' : 'border-accent'
                                }`}
                        >
                            <span className="font-semibold text-neutral">{value}</span>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-8">
                    <p className="text-lg font-semibold text-primary">
                        Motto: "{instituteOverview.motto}"
                    </p>
                </div>
            </Section>

            {/* Leadership */}
            <Section
                className="bg-base-200"
                title="Our Leadership"
                subtitle="The team behind our success"
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {leadership.map((leader, index) => (
                        <div
                            key={leader.id}
                            className={`bg-white rounded-2xl p-8 shadow-lg border-t-4 ${index === 0 ? 'border-primary' : 'border-secondary'
                                }`}
                        >
                            <div className="flex items-start gap-4 mb-6">
                                <div className="w-16 h-16 rounded-full flex-shrink-0 overflow-hidden bg-gray-100 shadow-lg">
                                    <img
                                        src="/avatar-placeholder.png"
                                        alt={leader.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-neutral">{leader.name}</h3>
                                    <p className="text-primary font-medium">{leader.designation}</p>
                                    <p className="text-sm text-subtle-light">{leader.qualification}</p>
                                </div>
                            </div>
                            {leader.message && (
                                <blockquote className="italic text-subtle-light border-l-4 border-primary/30 pl-4">
                                    "{leader.message}"
                                </blockquote>
                            )}
                        </div>
                    ))}
                </div>
            </Section>

            {/* Why Choose Us */}
            <Section
                title="Why Choose Us?"
                subtitle="What makes us different"
            >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {[
                        { title: "Quality Education", desc: "Industry-relevant curriculum designed with experts" },
                        { title: "Experienced Faculty", desc: "Supportive and knowledgeable instructors" },
                        { title: "Modern Infrastructure", desc: "State-of-the-art labs and facilities" },
                        { title: "Flexible Learning", desc: "Online and offline modes available" },
                        { title: "Global Recognition", desc: "Certificates recognized across India" },
                        { title: "Career Support", desc: "Placement assistance and career guidance" }
                    ].map((item, index) => (
                        <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border-l-4 border-primary">
                            <h4 className="font-bold text-neutral mb-2">{item.title}</h4>
                            <p className="text-subtle-light text-sm">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </Section>

            {/* Recognitions */}
            <Section
                className="bg-base-200"
                title="Recognitions & Affiliations"
                subtitle="Our credentials"
            >
                <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
                    {schoolInfo.recognitions.map((recognition, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg px-5 py-3 shadow-sm border border-base-200"
                        >
                            <span className="text-sm font-medium text-neutral">{recognition}</span>
                        </div>
                    ))}
                </div>
            </Section>

            {/* Partner Organizations */}
            <Section
                title="Our Partners"
                subtitle="Academic and institutional partnerships"
            >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                    {partnerHospitals.map((partner, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl p-6 shadow-md text-center border-b-4 border-primary"
                        >
                            <h4 className="font-bold text-neutral mb-2">{partner.name}</h4>
                            <p className="text-sm text-primary">{partner.type}</p>
                        </div>
                    ))}
                </div>
            </Section>

            {/* Stats */}
            <Section className="bg-primary" dark>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white max-w-4xl mx-auto">
                    <div>
                        <p className="text-4xl font-bold">{placementStats.placementRate}</p>
                        <p className="text-white/80">Students Trained</p>
                    </div>
                    <div>
                        <p className="text-4xl font-bold">Since {schoolInfo.established}</p>
                        <p className="text-white/80">Years of Excellence</p>
                    </div>
                    <div>
                        <p className="text-4xl font-bold">6+</p>
                        <p className="text-white/80">Healthcare Programs</p>
                    </div>
                </div>
            </Section>

            {/* Contact Info */}
            <Section
                title="Visit Us"
                subtitle="Get in touch"
            >
                <div className="max-w-2xl mx-auto text-center">
                    <div className="bg-white rounded-2xl p-8 shadow-lg">
                        <p className="text-lg text-neutral font-semibold mb-4">{schoolInfo.name}</p>
                        <p className="text-subtle-light mb-2">{schoolInfo.address.line1}</p>
                        <p className="text-subtle-light mb-4">{schoolInfo.address.line2}</p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
                            <a
                                href={`tel:${schoolInfo.contact.phone[0].replace(/\s/g, '')}`}
                                className="bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-primary-focus transition-colors"
                            >
                                Call: {schoolInfo.contact.phone[0]}
                            </a>
                            <a
                                href={schoolInfo.googleMapsLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-secondary text-secondary-content px-6 py-3 rounded-full font-semibold hover:bg-secondary-focus transition-colors"
                            >
                                View on Maps
                            </a>
                        </div>
                    </div>
                </div>
            </Section>
        </>
    );
}
