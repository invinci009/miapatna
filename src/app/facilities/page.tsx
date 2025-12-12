import Link from 'next/link';
import { Metadata } from 'next';
import { schoolInfo } from '@/data/leadership';
import { facilities } from '@/data/facilities';

export const metadata: Metadata = {
    title: 'Facilities',
    description: 'Explore our world-class facilities including modern laboratories, computer labs, library, and more.',
};

export default function Facilities() {
    return (
        <>
            {/* Page Hero */}
            <div className="bg-gradient-to-br from-accent to-emerald-600 py-16 md:py-24">
                <div className="container mx-auto px-4 md:px-8 lg:px-16 text-center">
                    <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
                        Our Facilities
                    </h1>
                    <p className="text-white/80 text-lg max-w-2xl mx-auto">
                        Modern infrastructure designed for effective learning
                    </p>
                </div>
            </div>

            {/* Facilities Grid */}
            <section className="py-16">
                <div className="container mx-auto px-4 md:px-8 lg:px-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {facilities.map((facility, index) => (
                            <div key={facility.id} className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all border-t-4 ${index % 3 === 0 ? 'border-primary' :
                                    index % 3 === 1 ? 'border-secondary' : 'border-accent'
                                }`}>
                                <div className="p-6">
                                    <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                                        <span className="text-2xl">{facility.icon}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-neutral mb-2">{facility.title}</h3>
                                    <p className="text-subtle-light text-sm mb-4">{facility.description}</p>
                                    <ul className="space-y-2">
                                        {facility.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-center gap-2 text-sm text-subtle-light">
                                                <svg className="w-4 h-4 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-gradient-to-br from-primary to-primary-focus">
                <div className="container mx-auto px-4 md:px-8 lg:px-16 text-center">
                    <h2 className="text-3xl font-heading font-bold text-white mb-4">
                        Experience Our Facilities
                    </h2>
                    <p className="text-white/80 mb-8">Schedule a campus tour today</p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            href="/contact"
                            className="w-full sm:w-auto bg-white text-primary px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all"
                        >
                            Schedule a Tour
                        </Link>
                        <a
                            href={`tel:${schoolInfo.contact.phone[0].replace(/\s/g, '')}`}
                            className="w-full sm:w-auto bg-secondary text-neutral px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all"
                        >
                            Call: {schoolInfo.contact.phone[0]}
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
