'use client';
import Link from 'next/link';
import Section from '@/components/ui/Section';
import { courses, courseCategories } from '@/data/courses';
import { schoolInfo, instituteOverview, faculty } from '@/data/leadership';

export default function Academics() {
    return (
        <>
            {/* Page Hero */}
            <div className="bg-gradient-to-br from-primary to-secondary py-16 md:py-24">
                <div className="container mx-auto px-4 md:px-8 lg:px-16 text-center">
                    <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
                        Courses & Programs
                    </h1>
                    <p className="text-white/80 text-lg max-w-2xl mx-auto">
                        Industry-relevant healthcare education for a successful career
                    </p>
                </div>
            </div>

            {/* Training Philosophy */}
            <Section>
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-heading font-bold text-neutral mb-6">
                        Our Training Philosophy
                    </h2>
                    <p className="text-subtle-light text-lg leading-relaxed">
                        {instituteOverview.description}
                    </p>
                </div>
            </Section>

            {/* Featured Courses */}
            <Section
                className="bg-base-200"
                title="Featured Courses"
                subtitle="Choose your path in healthcare"
            >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {courses.map((course, index) => (
                        <Link
                            href={`/courses/${course.id}`}
                            key={course.id}
                            className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl hover:scale-[1.02] transition-all duration-300 border-t-4 cursor-pointer ${index % 3 === 0 ? 'border-primary' :
                                index % 3 === 1 ? 'border-secondary' : 'border-accent'
                                }`}
                        >
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <span className="bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full">
                                            {course.shortName}
                                        </span>
                                    </div>
                                    <span className="text-sm text-secondary font-semibold">{course.duration}</span>
                                </div>
                                <h3 className="text-lg font-bold text-neutral mb-2">{course.name}</h3>
                                <p className="text-subtle-light text-sm mb-4">{course.description}</p>

                                <div className="space-y-2 text-sm">
                                    <div className="flex justify-between">
                                        <span className="text-subtle-light">Eligibility:</span>
                                        <span className="font-medium text-neutral">{course.eligibility}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-subtle-light">Intake:</span>
                                        <span className="font-medium text-neutral">{course.intake} students</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-subtle-light">Certification:</span>
                                        <span className="font-medium text-neutral">{course.certification}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-base-100 p-4 border-t">
                                <p className="text-xs text-subtle-light mb-2 font-medium">Key Subjects:</p>
                                <div className="flex flex-wrap gap-1">
                                    {course.syllabus.slice(0, 4).map((subject, idx) => (
                                        <span key={idx} className="bg-base-200 text-subtle-light px-2 py-0.5 rounded text-xs">
                                            {subject}
                                        </span>
                                    ))}
                                    {course.syllabus.length > 4 && (
                                        <span className="text-primary text-xs">+{course.syllabus.length - 4} more</span>
                                    )}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </Section>

            {/* Course Categories */}
            <Section
                title="Course Categories"
                subtitle="Wide range of programs available"
            >
                <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
                    {courseCategories.map((category, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg px-5 py-3 shadow-md hover:shadow-lg transition-shadow border-l-4 border-primary"
                        >
                            <span className="font-medium text-neutral">{category.name}</span>
                        </div>
                    ))}
                </div>
            </Section>

            {/* Learning Modes */}
            <Section
                className="bg-base-200"
                title="Flexible Learning Options"
                subtitle="Choose how you want to learn"
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-primary">
                        <h3 className="text-xl font-bold text-neutral mb-4">Online Mode</h3>
                        <ul className="space-y-3 text-subtle-light">
                            <li className="flex items-start gap-3">
                                <span className="text-primary font-bold">•</span>
                                <span>Learn from anywhere, anytime</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-primary font-bold">•</span>
                                <span>Access to digital learning platform</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-primary font-bold">•</span>
                                <span>Recorded lectures and study materials</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-primary font-bold">•</span>
                                <span>Online assessments and support</span>
                            </li>
                        </ul>
                    </div>
                    <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-secondary">
                        <h3 className="text-xl font-bold text-neutral mb-4">Offline Mode</h3>
                        <ul className="space-y-3 text-subtle-light">
                            <li className="flex items-start gap-3">
                                <span className="text-secondary font-bold">•</span>
                                <span>Classroom-based instruction</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-secondary font-bold">•</span>
                                <span>Hands-on practical training</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-secondary font-bold">•</span>
                                <span>Direct faculty interaction</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-secondary font-bold">•</span>
                                <span>Use of modern lab facilities</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </Section>

            {/* Faculty */}
            <Section
                title="Our Faculty"
                subtitle="Experienced instructors dedicated to your success"
            >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {faculty.map((member) => (
                        <div key={member.id} className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow">
                            <div className="w-20 h-20 rounded-full mx-auto mb-4 overflow-hidden bg-gray-100 shadow-lg">
                                <img
                                    src="/avatar-placeholder.png"
                                    alt={member.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h3 className="text-lg font-bold text-neutral">{member.name}</h3>
                            <p className="text-primary font-medium text-sm">{member.designation}</p>
                            <p className="text-subtle-light text-sm mt-2">{member.qualification}</p>
                            <p className="text-xs text-subtle-light mt-1">{member.experience}</p>
                            {member.specialization && (
                                <p className="text-xs text-secondary mt-2 font-medium">{member.specialization}</p>
                            )}
                        </div>
                    ))}
                </div>
            </Section>

            {/* CTA */}
            <Section className="bg-gradient-to-br from-primary to-primary-focus" dark>
                <div className="text-center max-w-2xl mx-auto">
                    <h2 className="text-3xl font-heading font-bold text-white mb-4">
                        Ready to Start Your Healthcare Career?
                    </h2>
                    <p className="text-white/80 mb-8">
                        Contact us to learn more about our courses and admission process.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="/admissions"
                            className="w-full sm:w-auto bg-white text-primary px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl transition-all"
                        >
                            Apply Now
                        </a>
                        <a
                            href={`tel:${schoolInfo.contact.phone[0].replace(/\s/g, '')}`}
                            className="w-full sm:w-auto bg-secondary text-secondary-content px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl transition-all"
                        >
                            Call: {schoolInfo.contact.phone[0]}
                        </a>
                    </div>
                </div>
            </Section>
        </>
    );
}

