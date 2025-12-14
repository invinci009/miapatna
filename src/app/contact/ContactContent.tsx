'use client';
import Section from '@/components/ui/Section';
import ContactForm from '@/components/ui/ContactForm';
import LeafletMap from '@/components/ui/LeafletMap';
import { schoolInfo } from '@/data/leadership';

export default function Contact() {
    return (
        <>
            {/* Page Hero - Professional blue with wave and white accents */}
            <div className="relative bg-gradient-to-br from-primary via-blue-600 to-primary-focus overflow-hidden py-20 md:py-28">
                {/* White wave at bottom */}
                <div className="absolute bottom-0 left-0 right-0">
                    <svg viewBox="0 0 1440 120" className="w-full h-auto fill-white">
                        <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
                    </svg>
                </div>

                {/* White decorative elements */}
                <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute top-1/3 right-0 w-48 h-48 bg-white/10 rounded-full translate-x-1/2"></div>
                <div className="absolute bottom-1/4 left-1/4 w-32 h-32 bg-white/5 rounded-full"></div>

                {/* Subtle grid pattern */}
                <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>

                <div className="container mx-auto px-4 md:px-8 lg:px-16 text-center relative z-10">
                    <div className="inline-flex items-center gap-2 mb-4 px-5 py-2 bg-white/15 backdrop-blur-sm rounded-full border border-white/25">
                        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                        <span className="text-white text-sm font-medium">We're here to help</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-4">
                        Contact Us
                    </h1>
                    <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto font-light">
                        We'd love to hear from you. Get in touch for admission enquiries or any questions.
                    </p>
                </div>
            </div>

            {/* Contact Info Cards */}
            <Section>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    <div className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary text-2xl font-bold mx-auto mb-4">
                            A
                        </div>
                        <h3 className="text-lg font-bold text-neutral mb-2">Our Address</h3>
                        <p className="text-subtle-light text-sm">
                            {schoolInfo.address.line1}<br />
                            {schoolInfo.address.line2}
                        </p>
                        <a
                            href={schoolInfo.googleMapsLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block mt-3 text-primary hover:underline text-sm font-medium"
                        >
                            View on Maps →
                        </a>
                    </div>
                    <div className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow">
                        <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center text-secondary text-2xl font-bold mx-auto mb-4">
                            P
                        </div>
                        <h3 className="text-lg font-bold text-neutral mb-2">Phone / WhatsApp</h3>
                        <p className="text-subtle-light text-sm">
                            {schoolInfo.contact.phone.map((phone, idx) => (
                                <span key={idx}>
                                    <a href={`tel:${phone.replace(/\s/g, '')}`} className="hover:text-primary transition-colors">
                                        {phone}
                                    </a>
                                    {idx < schoolInfo.contact.phone.length - 1 && <br />}
                                </span>
                            ))}
                        </p>
                        <a
                            href={`https://wa.me/${schoolInfo.contact.whatsapp?.replace(/\D/g, '')}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block mt-3 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-green-600 transition-colors"
                        >
                            WhatsApp Us
                        </a>
                    </div>
                    <div className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow">
                        <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center text-accent text-2xl font-bold mx-auto mb-4">
                            E
                        </div>
                        <h3 className="text-lg font-bold text-neutral mb-2">Email Us</h3>
                        <p className="text-subtle-light text-sm">
                            <a href={`mailto:${schoolInfo.contact.email}`} className="hover:text-primary transition-colors">
                                {schoolInfo.contact.email}
                            </a>
                        </p>
                        <p className="text-xs text-subtle-light mt-2">We respond within 24 hours</p>
                    </div>
                    <div className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary text-2xl font-bold mx-auto mb-4">
                            H
                        </div>
                        <h3 className="text-lg font-bold text-neutral mb-2">Office Hours</h3>
                        <p className="text-subtle-light text-sm">
                            Mon - Sat: 9:00 AM - 5:00 PM<br />
                            Sunday: Closed
                        </p>
                    </div>
                </div>
            </Section>

            {/* Map and Form */}
            <Section className="bg-base-200">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Map */}
                    <div>
                        <h3 className="text-2xl font-heading font-bold text-neutral mb-6">Find Us</h3>
                        <LeafletMap />

                        {/* Quick Contact */}
                        <div className="mt-6 bg-white rounded-xl p-6 shadow-md">
                            <h4 className="font-bold text-neutral mb-4">Quick Contact</h4>
                            <div className="space-y-3 text-sm">
                                <div className="flex items-center gap-3">
                                    <span className="font-medium text-primary">Address:</span>
                                    <span className="text-subtle-light">{schoolInfo.address.line1}</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="font-medium text-primary">Phone:</span>
                                    <a href={`tel:${schoolInfo.contact.phone[0].replace(/\s/g, '')}`} className="text-subtle-light hover:text-primary">
                                        {schoolInfo.contact.phone[0]}
                                    </a>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="font-medium text-primary">Email:</span>
                                    <a href={`mailto:${schoolInfo.contact.email}`} className="text-subtle-light hover:text-primary">
                                        {schoolInfo.contact.email}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div>
                        <h3 className="text-2xl font-heading font-bold text-neutral mb-6">Send Us a Message</h3>
                        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </Section>

            {/* Social Media & WhatsApp */}
            <Section>
                <div className="text-center">
                    <h3 className="text-2xl font-heading font-bold text-neutral mb-6">Connect With Us</h3>
                    <div className="flex justify-center gap-4 flex-wrap">
                        <a
                            href={schoolInfo.social.facebook}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-14 h-14 bg-[#1877F2] text-white rounded-full flex items-center justify-center text-lg font-bold hover:scale-110 transition-transform shadow-lg"
                            aria-label="Facebook"
                        >
                            f
                        </a>
                        <a
                            href={schoolInfo.social.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-14 h-14 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 text-white rounded-full flex items-center justify-center text-lg font-bold hover:scale-110 transition-transform shadow-lg"
                            aria-label="Instagram"
                        >
                            in
                        </a>
                        <a
                            href={schoolInfo.social.youtube}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-14 h-14 bg-[#FF0000] text-white rounded-full flex items-center justify-center text-lg font-bold hover:scale-110 transition-transform shadow-lg"
                            aria-label="YouTube"
                        >
                            ▶
                        </a>
                        <a
                            href={`https://wa.me/${schoolInfo.contact.whatsapp?.replace(/\D/g, '')}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center text-lg font-bold hover:scale-110 transition-transform shadow-lg"
                            aria-label="WhatsApp"
                        >
                            W
                        </a>
                    </div>
                    <p className="mt-6 text-subtle-light">
                        Follow us on social media for updates and announcements
                    </p>
                </div>
            </Section>
        </>
    );
}
