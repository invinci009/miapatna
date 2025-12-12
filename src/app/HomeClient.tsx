'use client';
import { useState } from 'react';
import Link from 'next/link';
import Section from '@/components/ui/Section';
import FacilityGrid from '@/components/ui/FacilityGrid';
import QuickLinksGrid from '@/components/ui/QuickLinksGrid';
import ContactForm from '@/components/ui/ContactForm';
import TestimonialCarousel from '@/components/ui/TestimonialCarousel';
import GoogleMapEmbed from '@/components/ui/GoogleMapEmbed';
import { schoolInfo, leadership, instituteOverview, placementStats } from '@/data/leadership';
import { courses } from '@/data/courses';

export default function Home() {
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);

    return (
        <>
            {/* HERO SECTION */}
            <div className="relative overflow-hidden py-24 lg:py-36">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: "url('/hero-bg.png')" }}
                ></div>
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70"></div>

                {/* Background Decorations */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-40 -right-40 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float"></div>
                    <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float animation-delay-300"></div>
                </div>

                <div className="container mx-auto px-4 md:px-8 lg:px-16 relative z-10">
                    <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
                        <div className="text-center lg:text-left">
                            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-5 py-2.5 rounded-full text-sm font-medium mb-8 border border-white/20 animate-fade-in">
                                <span className="w-2 h-2 bg-secondary rounded-full animate-pulse"></span>
                                {schoolInfo.affiliation}
                            </div>
                            <h1 className="text-4xl font-heading font-extrabold text-white sm:text-5xl lg:text-6xl leading-tight animate-fade-in-up">
                                {schoolInfo.name}
                            </h1>
                            <p className="mt-6 text-lg text-white/90 lg:mx-0 mx-auto max-w-xl animate-fade-in-up animation-delay-200">
                                {schoolInfo.tagline}
                            </p>
                            <div className="mt-4 flex flex-wrap justify-center lg:justify-start gap-4 text-white/80 text-sm animate-fade-in-up animation-delay-300">
                                <span className="flex items-center gap-2">
                                    <svg className="w-5 h-5 text-secondary" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" /></svg>
                                    Est. {schoolInfo.established}
                                </span>
                                <span className="flex items-center gap-2">
                                    <svg className="w-5 h-5 text-secondary" fill="currentColor" viewBox="0 0 20 20"><path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" /></svg>
                                    {placementStats.placementRate} Students
                                </span>
                            </div>
                            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 lg:justify-start animate-fade-in-up animation-delay-400">
                                <Link
                                    href="/academics"
                                    className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-xl font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                                    Explore Courses
                                </Link>
                                <Link
                                    href="/admissions"
                                    className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-secondary to-amber-400 text-neutral px-8 py-4 rounded-xl font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                                >
                                    <span className="relative flex h-2.5 w-2.5">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neutral opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-neutral"></span>
                                    </span>
                                    Apply Now
                                </Link>
                            </div>
                        </div>

                        {/* Hero Stats Cards */}
                        <div className="relative hidden lg:block">
                            <div className="grid grid-cols-2 gap-5">
                                <div className="space-y-5">
                                    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-white shadow-2xl border border-white/20 transform rotate-[-2deg] hover:rotate-0 transition-all duration-500 hover:scale-105">
                                        <div className="text-4xl font-bold text-secondary mb-2">{placementStats.placementRate}</div>
                                        <p className="text-white/80">Students Trained</p>
                                    </div>
                                    <div className="bg-white rounded-2xl p-6 shadow-2xl transform rotate-[3deg] hover:rotate-0 transition-all duration-500 hover:scale-105">
                                        <div className="text-4xl font-bold text-primary mb-2">6+</div>
                                        <p className="text-subtle-light">Healthcare Programs</p>
                                    </div>
                                </div>
                                <div className="space-y-5 mt-10">
                                    <div className="bg-white rounded-2xl p-6 shadow-2xl transform rotate-[-3deg] hover:rotate-0 transition-all duration-500 hover:scale-105">
                                        <div className="flex items-center gap-2 mb-2">
                                            <svg className="w-8 h-8 text-accent" fill="currentColor" viewBox="0 0 20 20"><path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0z" /></svg>
                                        </div>
                                        <p className="font-bold text-neutral">Certified Programs</p>
                                        <p className="text-sm text-subtle-light">Globally Recognized</p>
                                    </div>
                                    <div className="bg-gradient-to-br from-accent to-emerald-600 rounded-2xl p-6 text-white shadow-2xl transform rotate-[2deg] hover:rotate-0 transition-all duration-500 hover:scale-105">
                                        <div className="flex items-center gap-2 mb-2">
                                            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                                        </div>
                                        <p className="font-bold">Online & Offline</p>
                                        <p className="text-sm text-white/80">Flexible Learning</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Wave Divider */}
                <div className="absolute bottom-0 left-0 right-0">
                    <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
                        <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#f8fafc" />
                    </svg>
                </div>
            </div>

            {/* ADMISSION OPEN BANNER */}
            <div className="bg-gradient-to-r from-green-500 via-emerald-500 to-green-500 py-5 relative overflow-hidden animate-gradient-x bg-[length:200%_auto]">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
                        <div className="flex items-center gap-3 text-white">
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                            </span>
                            <span className="text-lg md:text-xl font-bold">Admissions Open for 2025-26 Session!</span>
                        </div>
                        <Link
                            href="/admissions"
                            className="bg-white text-green-600 px-8 py-3 rounded-xl font-bold hover:bg-green-50 hover:scale-105 transition-all shadow-lg"
                        >
                            Apply Now Online
                        </Link>
                    </div>
                </div>
            </div>

            {/* COURSES OFFERED */}
            <Section
                title="Courses Offered"
                subtitle="Job-oriented healthcare programs with practical training"
            >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {courses.slice(0, 6).map((course, index) => (
                        <div
                            key={course.id}
                            className={`group bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 relative overflow-hidden`}
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <div className={`absolute top-0 left-0 w-full h-1 ${index % 3 === 0 ? 'bg-gradient-to-r from-primary to-blue-400' :
                                index % 3 === 1 ? 'bg-gradient-to-r from-secondary to-amber-400' : 'bg-gradient-to-r from-accent to-emerald-400'
                                }`}></div>
                            <div className="flex items-start justify-between mb-4">
                                <span className={`px-4 py-1.5 rounded-full text-sm font-bold ${index % 3 === 0 ? 'bg-primary/10 text-primary' :
                                    index % 3 === 1 ? 'bg-secondary/10 text-secondary-600' : 'bg-accent/10 text-accent'
                                    }`}>
                                    {course.shortName}
                                </span>
                                <span className="text-sm font-semibold text-accent">{course.duration}</span>
                            </div>
                            <h3 className="text-lg font-bold text-neutral mb-2 group-hover:text-primary transition-colors">{course.name}</h3>
                            <p className="text-sm text-subtle-light mb-4">{course.eligibility}</p>
                            <Link
                                href={`/courses/${course.id}`}
                                className="inline-flex items-center text-primary font-semibold text-sm group-hover:gap-2 transition-all"
                            >
                                Learn More
                                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                            </Link>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <Link
                        href="/academics"
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-primary-600 text-white px-10 py-4 rounded-xl font-bold hover:shadow-xl hover:scale-105 transition-all"
                    >
                        View All Courses
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </Link>
                </div>
            </Section>

            {/* MISSION & VISION SECTION */}
            <Section
                className="bg-gradient-to-br from-base-100 to-base-200"
                title="Our Mission & Vision"
                subtitle="Guiding principles that shape our training philosophy"
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    <div className="group bg-white rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-500 border-l-4 border-primary relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500"></div>
                        <div className="relative">
                            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                                <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                            </div>
                            <h3 className="text-2xl font-heading font-bold text-primary mb-4">Our Mission</h3>
                            <p className="text-subtle-light leading-relaxed">
                                {instituteOverview.mission}
                            </p>
                        </div>
                    </div>
                    <div className="group bg-white rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-500 border-l-4 border-secondary relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500"></div>
                        <div className="relative">
                            <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-6">
                                <svg className="w-7 h-7 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                            </div>
                            <h3 className="text-2xl font-heading font-bold text-secondary-600 mb-4">Our Vision</h3>
                            <p className="text-subtle-light leading-relaxed">
                                {instituteOverview.vision}
                            </p>
                        </div>
                    </div>
                </div>
            </Section>

            {/* ABOUT SECTION */}
            <Section
                title={`About ${schoolInfo.shortName}`}
                subtitle="Meet our leadership team"
            >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {leadership.map((leader, index) => (
                        <div
                            key={leader.id}
                            className={`group bg-white rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-500 relative overflow-hidden`}
                        >
                            <div className={`absolute top-0 left-0 w-full h-1 ${index === 0 ? 'bg-gradient-to-r from-primary to-blue-400' : 'bg-gradient-to-r from-secondary to-amber-400'}`}></div>
                            <div className="flex items-start gap-5">
                                <div className="w-20 h-20 rounded-2xl flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform overflow-hidden bg-gray-100">
                                    <img
                                        src="/avatar-placeholder.png"
                                        alt={leader.name}
                                        width={80}
                                        height={80}
                                        loading="lazy"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-neutral">{leader.name}</h3>
                                    <p className={`font-semibold ${index === 0 ? 'text-primary' : 'text-secondary-600'}`}>{leader.designation}</p>
                                    <p className="text-sm text-subtle-light mt-1">{leader.qualification}</p>
                                </div>
                            </div>
                            {leader.message && (
                                <p className="text-sm text-subtle-light mt-6 italic border-l-4 border-primary/20 pl-4 bg-base-100 py-3 rounded-r-lg">
                                    "{leader.message}"
                                </p>
                            )}
                        </div>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <Link
                        href="/about"
                        className="inline-flex items-center gap-2 bg-primary text-white px-10 py-4 rounded-xl font-bold hover:bg-primary-700 hover:shadow-xl transition-all"
                    >
                        Learn More About Us
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </Link>
                </div>
            </Section>

            {/* FACILITIES HIGHLIGHT */}
            <Section
                className="bg-gradient-to-br from-base-100 to-base-200"
                title="Our Facilities"
                subtitle="Modern infrastructure for practical healthcare training"
            >
                <FacilityGrid maxItems={6} />
                <div className="text-center mt-12">
                    <Link
                        href="/facilities"
                        className="inline-flex items-center gap-2 bg-accent text-white px-10 py-4 rounded-xl font-bold hover:bg-accent-700 hover:shadow-xl transition-all"
                    >
                        View All Facilities
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </Link>
                </div>
            </Section>

            {/* QUICK LINKS / SITE MAP */}
            <Section
                title="Quick Links"
                subtitle="Navigate through our website easily"
            >
                <QuickLinksGrid />
            </Section>

            {/* CONTACT CTA */}
            <Section
                className="bg-gradient-to-br from-primary via-indigo-800 to-blue-900 relative overflow-hidden"
                dark
            >
                <div className="absolute inset-0">
                    <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/2 translate-y-1/2"></div>
                </div>
            </Section>

            {/* TESTIMONIALS SECTION */}
            <Section
                className="bg-base-100"
                title="What Our Students Say"
                subtitle="Hear from our alumni about their experience at IPC"
            >
                <TestimonialCarousel />
            </Section>

            {/* LOCATION SECTION */}
            <Section
                title="Visit Our Campus"
                subtitle="Located in the heart of Patna, Bihar"
            >
                <GoogleMapEmbed />
            </Section>

            {/* CONTACT CTA */}
            <Section className="bg-gradient-to-br from-primary via-primary-700 to-primary-900 relative overflow-hidden" dark>
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/2 translate-y-1/2"></div>
                </div>
                <div className="text-center max-w-2xl mx-auto relative z-10">
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
                        Ready to Start Your Healthcare Career?
                    </h2>
                    <p className="text-white/80 mb-10 text-lg">
                        Contact us for admission enquiries, course details, or visit our campus.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button
                            onClick={() => setIsContactModalOpen(true)}
                            className="w-full sm:w-auto bg-white text-primary px-10 py-4 rounded-xl font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                        >
                            Contact Us
                        </button>
                        <Link
                            href="/admissions"
                            className="w-full sm:w-auto bg-gradient-to-r from-secondary to-amber-400 text-neutral px-10 py-4 rounded-xl font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                        >
                            Apply Now
                        </Link>
                    </div>
                </div>
            </Section>

            {/* CONTACT MODAL */}
            {isContactModalOpen && (
                <div className="modal show" onClick={() => setIsContactModalOpen(false)}>
                    <div className="modal-content max-w-lg" onClick={(e) => e.stopPropagation()}>
                        <button
                            className="close"
                            onClick={() => setIsContactModalOpen(false)}
                            aria-label="Close modal"
                        >
                            &times;
                        </button>
                        <h2 className="text-2xl font-bold text-primary mb-6">Contact Us</h2>
                        <ContactForm compact onSubmit={() => setIsContactModalOpen(false)} />
                    </div>
                </div>
            )}
        </>
    );
}

