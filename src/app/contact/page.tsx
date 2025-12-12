import { Metadata } from 'next';
import { schoolInfo } from '@/data/leadership';
import ContactForm from './ContactForm';

export const metadata: Metadata = {
    title: 'Contact Us',
    description: 'Get in touch with Ignius Paramedical College. Contact us for admission inquiries, course information, or any questions.',
};

export default function Contact() {
    return (
        <>
            {/* Page Hero */}
            <div className="bg-gradient-to-br from-primary to-accent py-16 md:py-24">
                <div className="container mx-auto px-4 md:px-8 lg:px-16 text-center">
                    <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
                        Contact Us
                    </h1>
                    <p className="text-white/80 text-lg max-w-2xl mx-auto">
                        We're here to help with any questions you have
                    </p>
                </div>
            </div>

            {/* Contact Info + Form */}
            <section className="py-16">
                <div className="container mx-auto px-4 md:px-8 lg:px-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Info */}
                        <div>
                            <h2 className="text-2xl font-heading font-bold text-neutral mb-6">Get in Touch</h2>
                            <div className="space-y-6">
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

                            {/* Map */}
                            <div className="mt-8">
                                <a
                                    href={schoolInfo.googleMapsLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-bold hover:bg-primary-700 transition-colors"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    </svg>
                                    View on Google Maps
                                </a>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div>
                            <h2 className="text-2xl font-heading font-bold text-neutral mb-6">Send a Message</h2>
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
