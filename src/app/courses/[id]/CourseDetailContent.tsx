'use client';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import Section from '@/components/ui/Section';
import { courses, howToApply } from '@/data/courses';
import { schoolInfo } from '@/data/leadership';

export default function CourseDetailContent() {
    const params = useParams();
    const courseId = params.id as string;
    const course = courses.find(c => c.id === courseId || c.shortName.toLowerCase().replace(/\s+/g, '-') === courseId);

    if (!course) {
        return (
            <Section title="Course Not Found">
                <div className="text-center py-12">
                    <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-neutral mb-4">Course Not Found</h3>
                    <p className="text-subtle-light mb-8">The course you are looking for does not exist.</p>
                    <Link href="/academics" className="bg-primary text-white px-8 py-3 rounded-xl font-bold hover:bg-primary-700 transition-colors">
                        View All Courses
                    </Link>
                </div>
            </Section>
        );
    }

    const colorVariants = [
        { bg: 'bg-primary', bgLight: 'bg-primary/10', text: 'text-primary', border: 'border-primary', gradient: 'from-primary to-blue-400' },
        { bg: 'bg-secondary', bgLight: 'bg-secondary/10', text: 'text-secondary-600', border: 'border-secondary', gradient: 'from-secondary to-amber-400' },
        { bg: 'bg-accent', bgLight: 'bg-accent/10', text: 'text-accent', border: 'border-accent', gradient: 'from-accent to-emerald-400' },
    ];
    const colorIndex = parseInt(course.id) % 3;
    const colors = colorVariants[colorIndex];

    return (
        <>
            {/* Hero Section */}
            <div className={`relative overflow-hidden bg-gradient-to-br ${colors.gradient} py-20 lg:py-28`}>
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-40 -right-40 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-float"></div>
                    <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-float animation-delay-300"></div>
                </div>

                <div className="container mx-auto px-4 md:px-8 lg:px-16 relative z-10">
                    <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-16">
                        <div className="flex-1">
                            <Link href="/academics" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                                Back to All Courses
                            </Link>
                            <span className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-bold mb-4 border border-white/30">
                                {course.shortName}
                            </span>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-4">
                                {course.name}
                            </h1>
                            <p className="text-xl text-white/90 mb-8 max-w-2xl">
                                {course.description}
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link
                                    href="/admissions"
                                    className="inline-flex items-center gap-2 bg-white text-neutral px-8 py-4 rounded-xl font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
                                >
                                    <span className="relative flex h-2.5 w-2.5">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                                    </span>
                                    Apply Now
                                </Link>
                                <a
                                    href={`https://wa.me/${schoolInfo.contact.whatsapp?.replace(/\D/g, '')}?text=Hi, I'm interested in ${course.name} course.`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                                    Enquire on WhatsApp
                                </a>
                            </div>
                        </div>

                        {/* Quick Info Card */}
                        <div className="w-full lg:w-auto">
                            <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 min-w-[300px]">
                                <h3 className="text-lg font-bold text-neutral mb-6 pb-4 border-b">Course Details</h3>
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center">
                                        <span className="text-subtle-light">Duration</span>
                                        <span className={`font-bold ${colors.text}`}>{course.duration}</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-subtle-light">Eligibility</span>
                                        <span className="font-semibold text-neutral text-right max-w-[150px]">{course.eligibility}</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-subtle-light">Intake</span>
                                        <span className="font-semibold text-neutral">{course.intake} students</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-subtle-light">Certification</span>
                                        <span className="font-semibold text-neutral text-right max-w-[150px]">{course.certification}</span>
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

            {/* Syllabus / Key Subjects */}
            <Section title="Key Subjects" subtitle="Topics covered in this program">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
                    {course.syllabus.map((subject, index) => (
                        <div
                            key={index}
                            className={`bg-white rounded-xl p-4 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border-l-4 ${colors.border}`}
                        >
                            <div className="flex items-center gap-3">
                                <div className={`w-8 h-8 ${colors.bgLight} rounded-lg flex items-center justify-center flex-shrink-0`}>
                                    <svg className={`w-4 h-4 ${colors.text}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <span className="font-medium text-neutral text-sm">{subject}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </Section>

            {/* Admission Requirements */}
            <Section className="bg-gradient-to-br from-base-100 to-base-200" title="Admission Requirements" subtitle="Documents needed for enrollment">
                <div className="max-w-3xl mx-auto">
                    <div className="bg-white rounded-2xl shadow-card p-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {course.admissionRequirements.map((req, index) => (
                                <div key={index} className="flex items-center gap-3 p-4 bg-base-100 rounded-xl">
                                    <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                                        <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                        </svg>
                                    </div>
                                    <span className="font-medium text-neutral">{req}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Section>

            {/* How to Apply */}
            <Section title="How to Apply" subtitle="Simple steps to enroll in this course">
                <div className="max-w-4xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white rounded-2xl p-8 shadow-card border-t-4 border-primary">
                            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                                <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-neutral mb-3">Apply Online</h3>
                            <p className="text-subtle-light mb-6">{howToApply.online}</p>
                            <Link
                                href="/admissions"
                                className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary-700 transition-colors"
                            >
                                Apply Online
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link>
                        </div>
                        <div className="bg-white rounded-2xl p-8 shadow-card border-t-4 border-secondary">
                            <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-6">
                                <svg className="w-7 h-7 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-neutral mb-3">Visit Campus</h3>
                            <p className="text-subtle-light mb-6">{howToApply.offline}</p>
                            <a
                                href={schoolInfo.googleMapsLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-secondary text-neutral px-6 py-3 rounded-xl font-semibold hover:bg-secondary-600 transition-colors"
                            >
                                Get Directions
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Contact CTA */}
            <Section className="bg-gradient-to-br from-primary via-primary-700 to-primary-900" dark>
                <div className="text-center max-w-2xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
                        Have Questions About {course.shortName}?
                    </h2>
                    <p className="text-white/80 mb-10 text-lg">
                        Our counselors are here to help you make the right career choice.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href={`tel:${schoolInfo.contact.phone[0].replace(/\s/g, '')}`}
                            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-xl font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            Call Now
                        </a>
                        <Link
                            href="/contact"
                            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-secondary to-amber-400 text-neutral px-8 py-4 rounded-xl font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            </Section>

            {/* Other Courses */}
            <Section title="Explore Other Courses" subtitle="Find the right program for your career goals">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {courses.filter(c => c.id !== course.id).slice(0, 3).map((otherCourse) => {
                        const otherColors = colorVariants[parseInt(otherCourse.id) % 3];
                        return (
                            <Link
                                key={otherCourse.id}
                                href={`/courses/${otherCourse.id}`}
                                className="group bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden"
                            >
                                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${otherColors.gradient}`}></div>
                                <div className="flex items-start justify-between mb-4">
                                    <span className={`px-4 py-1.5 rounded-full text-sm font-bold ${otherColors.bgLight} ${otherColors.text}`}>
                                        {otherCourse.shortName}
                                    </span>
                                    <span className="text-sm font-semibold text-accent">{otherCourse.duration}</span>
                                </div>
                                <h3 className="text-lg font-bold text-neutral mb-2 group-hover:text-primary transition-colors">{otherCourse.name}</h3>
                                <p className="text-sm text-subtle-light mb-4">{otherCourse.eligibility}</p>
                                <span className={`inline-flex items-center text-primary font-semibold text-sm group-hover:gap-2 transition-all`}>
                                    Learn More
                                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                </span>
                            </Link>
                        );
                    })}
                </div>
            </Section>
        </>
    );
}
