'use client';
import { useState, useRef, useEffect } from 'react';
import Section from '@/components/ui/Section';
import ContactForm from '@/components/ui/ContactForm';
import AdmissionForm from '@/components/ui/AdmissionForm';
import { schoolInfo } from '@/data/leadership';
import { courses, admissionProcess, requiredDocuments, howToApply } from '@/data/courses';

// Institute highlights
const instituteHighlights = [
    { label: 'Courses Offered', value: '6+ Healthcare Programs', color: 'primary' },
    { label: 'Session Starts', value: 'July Every Year', color: 'secondary' },
    { label: 'Recognition', value: 'UGC & AIU Approved', color: 'accent' },
    { label: 'Students Trained', value: '2000+', color: 'primary' },
];

// Why choose us
const whyChooseUs = [
    { title: 'Expert Faculty', description: 'Experienced healthcare professionals as instructors' },
    { title: 'Modern Labs', description: 'State-of-the-art clinical simulation and diagnostic labs' },
    { title: 'Flexible Learning', description: 'Online and offline modes available for all programs' },
    { title: 'Affordable Fees', description: 'Quality education at affordable costs with payment options' },
    { title: 'Global Certificate', description: 'Certificates recognized by top institutes across India' },
    { title: 'Career Support', description: 'Placement assistance and career guidance services' },
];

export default function Admissions() {
    const [activeTab, setActiveTab] = useState('overview');
    const formSectionRef = useRef<HTMLDivElement>(null);

    // Scroll to form when switching to apply or enquiry tabs
    useEffect(() => {
        if ((activeTab === 'apply' || activeTab === 'enquiry') && formSectionRef.current) {
            setTimeout(() => {
                formSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 100);
        }
    }, [activeTab]);

    const tabs = [
        { id: 'overview', label: 'Overview' },
        { id: 'apply', label: 'Apply Now' },
        { id: 'courses', label: 'Courses' },
        { id: 'process', label: 'Process' },
        { id: 'documents', label: 'Documents' },
        { id: 'enquiry', label: 'Enquiry' },
    ];

    return (
        <>
            {/* Hero Section */}
            <div className="relative bg-white py-20 md:py-28 overflow-hidden border-b border-gray-100">
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-10 left-10 w-40 h-40 bg-primary rounded-full blur-3xl"></div>
                    <div className="absolute bottom-10 right-10 w-60 h-60 bg-primary rounded-full blur-3xl"></div>
                </div>

                <div className="container mx-auto px-4 md:px-8 lg:px-16 text-center relative z-10">
                    <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-6 py-3 rounded-full text-sm font-medium mb-6 border border-primary/20">
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                        </span>
                        <span className="font-bold">Admissions Open for 2025-26</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-heading font-extrabold text-neutral mb-6">
                        Join {schoolInfo.shortName}
                    </h1>
                    <p className="text-subtle-light text-lg md:text-xl max-w-3xl mx-auto mb-8">
                        Start your healthcare career with quality education, expert faculty, and globally recognized certificates.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button
                            onClick={() => setActiveTab('apply')}
                            className="w-full sm:w-auto bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-primary-focus hover:scale-105 transition-all shadow-lg"
                        >
                            Apply Online Now
                        </button>
                        <button
                            onClick={() => setActiveTab('enquiry')}
                            className="w-full sm:w-auto bg-gray-100 text-neutral border border-gray-200 px-8 py-4 rounded-full font-bold hover:bg-gray-200 transition-all"
                        >
                            Make an Enquiry
                        </button>
                    </div>
                </div>
            </div>

            {/* Tab Navigation */}
            <div className="bg-white border-b border-base-200 sticky top-16 md:top-20 z-40 shadow-sm">
                <div className="container mx-auto px-4">
                    <div className="flex overflow-x-auto gap-2 py-3 scrollbar-hide md:justify-center pl-1">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`px-4 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all flex-shrink-0 ${activeTab === tab.id
                                    ? 'bg-primary text-white shadow-lg'
                                    : 'bg-base-100 text-subtle-light hover:bg-base-200'
                                    }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Overview Tab */}
            {activeTab === 'overview' && (
                <>
                    <Section>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
                            {instituteHighlights.map((item, index) => (
                                <div
                                    key={index}
                                    className={`bg-white rounded-2xl p-6 text-center shadow-lg border-t-4 border-${item.color}`}
                                >
                                    <h4 className={`font-bold text-${item.color} mb-1`}>{item.label}</h4>
                                    <p className="text-sm text-subtle-light">{item.value}</p>
                                </div>
                            ))}
                        </div>

                        <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl p-6 md:p-8 text-white mb-12">
                            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                                <div className="text-center md:text-left">
                                    <h3 className="text-2xl md:text-3xl font-bold mb-2">Ready to Apply?</h3>
                                    <p className="text-white/90">Complete the online application in just 5 minutes!</p>
                                </div>
                                <button
                                    onClick={() => setActiveTab('apply')}
                                    className="bg-white text-green-600 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-all shadow-lg"
                                >
                                    Start Application
                                </button>
                            </div>
                        </div>
                    </Section>

                    <Section
                        className="bg-base-200"
                        title="Why Choose Us?"
                        subtitle="What makes us the right choice for your healthcare career"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {whyChooseUs.map((item, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all border-l-4 border-primary"
                                >
                                    <h4 className="text-lg font-bold text-neutral mb-2">{item.title}</h4>
                                    <p className="text-subtle-light text-sm">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </Section>

                    <Section>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <button
                                onClick={() => setActiveTab('courses')}
                                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all text-left group border-l-4 border-primary"
                            >
                                <h3 className="text-xl font-bold text-neutral mb-2">Courses Offered</h3>
                                <p className="text-subtle-light text-sm mb-4">BMLT, DMLT, BPT, BOTT, and more</p>
                                <span className="text-primary font-medium group-hover:underline">View Courses →</span>
                            </button>
                            <button
                                onClick={() => setActiveTab('process')}
                                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all text-left group border-l-4 border-primary"
                            >
                                <h3 className="text-xl font-bold text-neutral mb-2">Admission Process</h3>
                                <p className="text-subtle-light text-sm mb-4">Simple steps to get admitted</p>
                                <span className="text-primary font-medium group-hover:underline">View Process →</span>
                            </button>
                            <button
                                onClick={() => setActiveTab('documents')}
                                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all text-left group border-l-4 border-primary"
                            >
                                <h3 className="text-xl font-bold text-neutral mb-2">Required Documents</h3>
                                <p className="text-subtle-light text-sm mb-4">Documents needed for admission</p>
                                <span className="text-primary font-medium group-hover:underline">View Documents →</span>
                            </button>
                        </div>
                    </Section>
                </>
            )}

            {/* Apply Now Tab */}
            {activeTab === 'apply' && (
                <div ref={formSectionRef}>
                    <Section
                        title="Online Admission Application"
                        subtitle="Complete the form below to submit your admission application"
                    >
                        <div className="max-w-4xl mx-auto">
                            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-8">
                                <h4 className="font-bold text-blue-800 mb-2">How it works</h4>
                                <ul className="text-blue-700 text-sm space-y-1">
                                    <li>• Fill all required fields marked with *</li>
                                    <li>• You'll receive a confirmation with application reference</li>
                                    <li>• Our team will contact you within 2-3 working days</li>
                                    <li>• Bring original documents during campus visit</li>
                                </ul>
                            </div>
                            <AdmissionForm />
                        </div>
                    </Section>
                </div>
            )}

            {/* Courses Tab */}
            {activeTab === 'courses' && (
                <Section
                    title="Courses Offered"
                    subtitle="Choose your path in healthcare"
                >
                    <div className="max-w-5xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {courses.map((course, index) => (
                                <div
                                    key={course.id}
                                    className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border-t-4 ${index % 3 === 0 ? 'border-primary' :
                                        index % 3 === 1 ? 'border-secondary' : 'border-accent'
                                        }`}
                                >
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <h3 className="text-xl font-bold text-neutral">{course.name}</h3>
                                            <span className="bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full">
                                                {course.shortName}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                                        <div>
                                            <p className="text-subtle-light">Duration</p>
                                            <p className="font-semibold text-neutral">{course.duration}</p>
                                        </div>
                                        <div>
                                            <p className="text-subtle-light">Eligibility</p>
                                            <p className="font-semibold text-neutral">{course.eligibility}</p>
                                        </div>
                                        <div>
                                            <p className="text-subtle-light">Intake</p>
                                            <p className="font-semibold text-neutral">{course.intake} students</p>
                                        </div>
                                        <div>
                                            <p className="text-subtle-light">Certification</p>
                                            <p className="font-semibold text-neutral">{course.certification}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="text-center mt-12">
                            <button
                                onClick={() => setActiveTab('apply')}
                                className="bg-gradient-to-r from-primary to-primary-focus text-white px-10 py-4 rounded-full font-bold hover:shadow-xl transition-all"
                            >
                                Apply Now →
                            </button>
                        </div>
                    </div>
                </Section>
            )}

            {/* Process Tab */}
            {activeTab === 'process' && (
                <Section
                    title="Admission Process"
                    subtitle="Follow these simple steps"
                >
                    <div className="max-w-4xl mx-auto">
                        <div className="relative">
                            {admissionProcess.map((step, index) => (
                                <div key={step.step} className="flex gap-4 md:gap-6 mb-8 last:mb-0">
                                    <div className="relative">
                                        <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary-focus text-white rounded-2xl flex items-center justify-center text-xl font-bold shadow-lg z-10 relative">
                                            {step.step}
                                        </div>
                                        {index < admissionProcess.length - 1 && (
                                            <div className="absolute top-14 left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary/50 to-primary/10 rounded-full"></div>
                                        )}
                                    </div>
                                    <div className="flex-1 bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                                        <h3 className="text-lg font-bold text-neutral mb-2">{step.title}</h3>
                                        <p className="text-subtle-light">{step.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-12 bg-blue-50 rounded-2xl p-6 md:p-8">
                            <h3 className="text-xl font-bold text-neutral mb-4">How to Apply</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="font-bold text-neutral mb-2">Online</h4>
                                    <p className="text-subtle-light text-sm">{howToApply.online}</p>
                                </div>
                                <div>
                                    <h4 className="font-bold text-neutral mb-2">Offline</h4>
                                    <p className="text-subtle-light text-sm">{howToApply.offline}</p>
                                </div>
                            </div>
                        </div>

                        <div className="text-center mt-12">
                            <button
                                onClick={() => setActiveTab('apply')}
                                className="bg-gradient-to-r from-primary to-primary-focus text-white px-10 py-4 rounded-full font-bold hover:shadow-xl transition-all"
                            >
                                Start Your Application →
                            </button>
                        </div>
                    </div>
                </Section>
            )}

            {/* Documents Tab */}
            {activeTab === 'documents' && (
                <Section
                    title="Documents Required"
                    subtitle="Prepare these documents before visiting the campus"
                >
                    <div className="max-w-3xl mx-auto">
                        <div className="bg-white rounded-2xl p-8 shadow-xl">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {requiredDocuments.map((item, index) => (
                                    <div key={index} className="flex items-start gap-4 p-3 rounded-xl hover:bg-base-100 transition-colors">
                                        <div className="w-10 h-10 bg-primary/10 text-primary rounded-lg flex items-center justify-center flex-shrink-0 font-bold">
                                            {index + 1}
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-neutral">{item.doc}</h4>
                                            <p className="text-subtle-light text-sm">{item.detail}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-8 p-4 bg-blue-50 border-l-4 border-blue-400 rounded-lg">
                                <p className="text-blue-700 text-sm">
                                    <strong>Important:</strong> All documents should be self-attested.
                                    Original documents are required for verification at the time of admission.
                                </p>
                            </div>
                        </div>
                    </div>
                </Section>
            )}

            {/* Enquiry Tab */}
            {activeTab === 'enquiry' && (
                <div ref={formSectionRef}>
                    <Section
                        title="Admission Enquiry"
                        subtitle="Have questions? We're here to help!"
                    >
                        <div className="max-w-3xl mx-auto">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                                <div className="bg-gradient-to-br from-primary to-primary-focus rounded-2xl p-6 text-white">
                                    <h4 className="font-bold text-lg mb-2">Call / WhatsApp</h4>
                                    <p className="text-white/80 text-sm mb-4">Mon-Sat, 9:00 AM - 5:00 PM</p>
                                    <a href={`tel:${schoolInfo.contact.phone[0]}`} className="text-xl font-bold hover:underline">
                                        {schoolInfo.contact.phone[0]}
                                    </a>
                                </div>
                                <div className="bg-gradient-to-br from-secondary to-secondary-focus rounded-2xl p-6 text-white">
                                    <h4 className="font-bold text-lg mb-2">Email Us</h4>
                                    <p className="text-white/80 text-sm mb-4">We'll respond within 24 hours</p>
                                    <a href={`mailto:${schoolInfo.contact.email}`} className="text-lg font-bold hover:underline">
                                        {schoolInfo.contact.email}
                                    </a>
                                </div>
                            </div>

                            <div className="bg-white rounded-2xl p-8 shadow-xl">
                                <h3 className="text-xl font-bold text-neutral mb-6">Send us a Message</h3>
                                <ContactForm />
                            </div>
                        </div>
                    </Section>
                </div>
            )}
        </>
    );
}

