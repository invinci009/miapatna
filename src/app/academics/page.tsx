import Link from 'next/link';
import { Metadata } from 'next';
import { courses, courseCategories } from '@/data/courses';
import { schoolInfo, instituteOverview, faculty } from '@/data/leadership';

export const metadata: Metadata = {
    title: 'Courses & Programs',
    description: 'Explore our healthcare courses - BMLT, DMLT, BPT, BOTT and more. Industry-relevant training with globally recognized certificates.',
};

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
            <section className="py-16">
                <div className="container mx-auto px-4 md:px-8 lg:px-16">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-heading font-bold text-neutral mb-6">
                            Our Training Philosophy
                        </h2>
                        <p className="text-subtle-light text-lg leading-relaxed">
                            {instituteOverview.description}
                        </p>
                    </div>
                </div>
            </section>

            {/* Featured Courses */}
            <section className="py-16 bg-base-200">
                <div className="container mx-auto px-4 md:px-8 lg:px-16">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-heading font-bold text-neutral mb-4">Featured Courses</h2>
                        <p className="text-subtle-light">Choose your path in healthcare</p>
                    </div>

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
                                        <span className="bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full">
                                            {course.shortName}
                                        </span>
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
                                    </div>
                                </div>

                                <div className="bg-base-100 p-4 border-t">
                                    <p className="text-xs text-subtle-light mb-2 font-medium">Key Subjects:</p>
                                    <div className="flex flex-wrap gap-1">
                                        {course.syllabus.slice(0, 3).map((subject, idx) => (
                                            <span key={idx} className="bg-base-200 text-subtle-light px-2 py-0.5 rounded text-xs">
                                                {subject}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-gradient-to-br from-primary to-primary-focus">
                <div className="container mx-auto px-4 md:px-8 lg:px-16 text-center">
                    <h2 className="text-3xl font-heading font-bold text-white mb-4">
                        Ready to Start Your Healthcare Career?
                    </h2>
                    <p className="text-white/80 mb-8">
                        Contact us to learn more about our courses and admission process.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            href="/admissions"
                            className="w-full sm:w-auto bg-white text-primary px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl transition-all"
                        >
                            Apply Now
                        </Link>
                        <a
                            href={`tel:${schoolInfo.contact.phone[0].replace(/\s/g, '')}`}
                            className="w-full sm:w-auto bg-secondary text-secondary-content px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl transition-all"
                        >
                            Call: {schoolInfo.contact.phone[0]}
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
