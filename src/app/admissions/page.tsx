import { Metadata } from 'next';
import { schoolInfo } from '@/data/leadership';
import { courses, admissionProcess, requiredDocuments } from '@/data/courses';
import AdmissionForm from './AdmissionForm';

export const metadata: Metadata = {
    title: 'Admissions',
    description: 'Apply for admission to healthcare courses at Ignius Paramedical College. BMLT, DMLT, BPT courses with easy admission process.',
};

export default function Admissions() {
    return (
        <>
            {/* Page Hero */}
            <div className="bg-gradient-to-br from-secondary to-amber-500 py-16 md:py-24">
                <div className="container mx-auto px-4 md:px-8 lg:px-16 text-center">
                    <span className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-bold mb-4 border border-white/30">
                        🎓 Admissions Open 2024-25
                    </span>
                    <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
                        Start Your Healthcare Journey
                    </h1>
                    <p className="text-white/90 text-lg max-w-2xl mx-auto">
                        Join our world-class healthcare programs and build a successful career
                    </p>
                </div>
            </div>

            {/* Admission Process */}
            <section className="py-16">
                <div className="container mx-auto px-4 md:px-8 lg:px-16">
                    <h2 className="text-3xl font-heading font-bold text-neutral text-center mb-4">
                        Admission Process
                    </h2>
                    <p className="text-subtle-light text-center mb-12">Simple steps to join our institute</p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        {admissionProcess.map((step, index) => (
                            <div key={index} className="relative">
                                <div className="bg-white rounded-2xl p-6 shadow-lg border-t-4 border-primary">
                                    <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                                        {index + 1}
                                    </div>
                                    <h3 className="text-lg font-bold text-neutral mb-2">{step.step}</h3>
                                    <p className="text-subtle-light text-sm">{step.description}</p>
                                </div>
                                {index < admissionProcess.length - 1 && (
                                    <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                                        <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Required Documents */}
            <section className="py-16 bg-base-200">
                <div className="container mx-auto px-4 md:px-8 lg:px-16">
                    <h2 className="text-3xl font-heading font-bold text-neutral text-center mb-4">
                        Required Documents
                    </h2>
                    <p className="text-subtle-light text-center mb-12">Documents needed for admission</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
                        {requiredDocuments.map((doc, index) => (
                            <div key={index} className="bg-white p-4 rounded-xl shadow-sm flex items-center gap-3">
                                <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                                    <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                </div>
                                <span className="text-neutral font-medium">{doc}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Application Form */}
            <section className="py-16">
                <div className="container mx-auto px-4 md:px-8 lg:px-16">
                    <h2 className="text-3xl font-heading font-bold text-neutral text-center mb-4">
                        Apply Now
                    </h2>
                    <p className="text-subtle-light text-center mb-12">Fill out the form below to start your application</p>

                    <div className="max-w-2xl mx-auto">
                        <AdmissionForm courses={courses} schoolInfo={schoolInfo} />
                    </div>
                </div>
            </section>

            {/* Contact for Queries */}
            <section className="py-16 bg-gradient-to-br from-primary to-primary-focus">
                <div className="container mx-auto px-4 md:px-8 lg:px-16 text-center">
                    <h2 className="text-3xl font-heading font-bold text-white mb-4">
                        Need Help?
                    </h2>
                    <p className="text-white/80 mb-8">Our admission counselors are ready to assist you</p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href={`tel:${schoolInfo.contact.phone[0].replace(/\s/g, '')}`}
                            className="w-full sm:w-auto bg-white text-primary px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all"
                        >
                            📞 {schoolInfo.contact.phone[0]}
                        </a>
                        <a
                            href={`https://wa.me/${schoolInfo.contact.whatsapp?.replace(/\D/g, '')}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all"
                        >
                            💬 Chat on WhatsApp
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
