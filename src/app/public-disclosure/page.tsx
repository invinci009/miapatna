import { Metadata } from 'next';
import { schoolInfo } from '@/data/leadership';

export const metadata: Metadata = {
    title: 'Public Disclosure',
    description: 'Mandatory public disclosure information for Ignius Paramedical College as per regulatory requirements.',
};

export default function PublicDisclosure() {
    return (
        <>
            {/* Page Hero */}
            <div className="bg-gradient-to-br from-neutral to-neutral-focus py-16 md:py-24">
                <div className="container mx-auto px-4 md:px-8 lg:px-16 text-center">
                    <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
                        Public Disclosure
                    </h1>
                    <p className="text-white/80 text-lg max-w-2xl mx-auto">
                        Mandatory disclosure as per regulatory requirements
                    </p>
                </div>
            </div>

            {/* Content */}
            <section className="py-16">
                <div className="container mx-auto px-4 md:px-8 lg:px-16">
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-white rounded-2xl shadow-lg p-8">
                            <h2 className="text-2xl font-bold text-neutral mb-6">Institute Information</h2>
                            <div className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="p-4 bg-base-100 rounded-xl">
                                        <p className="text-sm text-subtle-light mb-1">Institute Name</p>
                                        <p className="font-semibold text-neutral">{schoolInfo.name}</p>
                                    </div>
                                    <div className="p-4 bg-base-100 rounded-xl">
                                        <p className="text-sm text-subtle-light mb-1">Established</p>
                                        <p className="font-semibold text-neutral">{schoolInfo.established}</p>
                                    </div>
                                    <div className="p-4 bg-base-100 rounded-xl">
                                        <p className="text-sm text-subtle-light mb-1">Affiliation</p>
                                        <p className="font-semibold text-neutral">{schoolInfo.affiliation}</p>
                                    </div>
                                    <div className="p-4 bg-base-100 rounded-xl">
                                        <p className="text-sm text-subtle-light mb-1">Recognition</p>
                                        <p className="font-semibold text-neutral">{schoolInfo.affiliationNo}</p>
                                    </div>
                                </div>

                                <div className="p-4 bg-base-100 rounded-xl">
                                    <p className="text-sm text-subtle-light mb-1">Address</p>
                                    <p className="font-semibold text-neutral">{schoolInfo.address.line1}, {schoolInfo.address.line2}</p>
                                </div>

                                <div className="p-4 bg-base-100 rounded-xl">
                                    <p className="text-sm text-subtle-light mb-2">Recognitions & Memberships</p>
                                    <ul className="space-y-2">
                                        {schoolInfo.recognitions.map((rec, index) => (
                                            <li key={index} className="flex items-center gap-2 text-neutral">
                                                <svg className="w-4 h-4 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                {rec}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 text-center text-subtle-light text-sm">
                            <p>For any queries regarding public disclosure, please contact:</p>
                            <a href={`mailto:${schoolInfo.contact.email}`} className="text-primary font-semibold">{schoolInfo.contact.email}</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
