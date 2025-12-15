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
                    {/* Address Card */}
                    <div className="group bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
                        <div className="w-16 h-16 bg-gradient-to-br from-primary to-blue-400 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </div>
                        <h3 className="text-lg font-bold text-neutral mb-2">Our Address</h3>
                        <p className="text-subtle-light text-sm leading-relaxed">
                            {schoolInfo.address.line1}<br />
                            {schoolInfo.address.line2}
                        </p>
                        <a
                            href={schoolInfo.googleMapsLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 mt-4 text-primary hover:text-primary-700 text-sm font-semibold transition-colors group/link"
                        >
                            View on Maps
                            <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                        </a>
                    </div>

                    {/* Phone/WhatsApp Card */}
                    <div className="group bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
                        <div className="w-16 h-16 bg-gradient-to-br from-secondary to-amber-400 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform">
                            <svg className="w-8 h-8 text-neutral" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
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
                            className="inline-flex items-center gap-2 mt-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:shadow-lg hover:scale-105 transition-all"
                        >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" /></svg>
                            WhatsApp Us
                        </a>
                    </div>

                    {/* Email Card */}
                    <div className="group bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
                        <div className="w-16 h-16 bg-gradient-to-br from-accent to-emerald-400 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <h3 className="text-lg font-bold text-neutral mb-2">Email Us</h3>
                        <p className="text-subtle-light text-sm">
                            <a href={`mailto:${schoolInfo.contact.email}`} className="hover:text-primary transition-colors">
                                {schoolInfo.contact.email}
                            </a>
                        </p>
                        <p className="flex items-center justify-center gap-1.5 text-xs text-accent mt-3 font-medium">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            We respond within 24 hours
                        </p>
                    </div>

                    {/* Office Hours Card */}
                    <div className="group bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
                        <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 className="text-lg font-bold text-neutral mb-2">Office Hours</h3>
                        <div className="text-subtle-light text-sm space-y-1">
                            <p className="flex items-center justify-center gap-2">
                                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                                Mon - Sat: 9:00 AM - 5:00 PM
                            </p>
                            <p className="flex items-center justify-center gap-2">
                                <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                                Sunday: Closed
                            </p>
                        </div>
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
                            className="w-14 h-14 bg-[#1877F2] text-white rounded-2xl flex items-center justify-center hover:scale-110 hover:shadow-xl transition-all shadow-lg"
                            aria-label="Facebook"
                        >
                            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /></svg>
                        </a>
                        <a
                            href={schoolInfo.social.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-14 h-14 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 text-white rounded-2xl flex items-center justify-center hover:scale-110 hover:shadow-xl transition-all shadow-lg"
                            aria-label="Instagram"
                        >
                            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
                        </a>
                        <a
                            href={schoolInfo.social.youtube}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-14 h-14 bg-[#FF0000] text-white rounded-2xl flex items-center justify-center hover:scale-110 hover:shadow-xl transition-all shadow-lg"
                            aria-label="YouTube"
                        >
                            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
                        </a>
                        <a
                            href={`https://wa.me/${schoolInfo.contact.whatsapp?.replace(/\D/g, '')}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-14 h-14 bg-[#25D366] text-white rounded-2xl flex items-center justify-center hover:scale-110 hover:shadow-xl transition-all shadow-lg"
                            aria-label="WhatsApp"
                        >
                            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
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
