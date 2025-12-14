import Link from 'next/link';
import { courses, Course } from '@/data/courses';

interface RelatedCoursesProps {
    currentCourseId: string;
    maxCourses?: number;
}

export default function RelatedCourses({ currentCourseId, maxCourses = 3 }: RelatedCoursesProps) {
    // Get related courses (excluding current course)
    const relatedCourses = courses
        .filter(course => course.id !== currentCourseId)
        .slice(0, maxCourses);

    if (relatedCourses.length === 0) return null;

    return (
        <div className="bg-base-200 py-12">
            <div className="container mx-auto px-4 md:px-8 lg:px-16">
                <div className="text-center mb-8">
                    <h2 className="text-2xl md:text-3xl font-heading font-bold text-neutral mb-2">
                        Explore Other Courses
                    </h2>
                    <p className="text-subtle-light">
                        Discover more healthcare programs at IPC
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {relatedCourses.map((course, index) => (
                        <Link
                            key={course.id}
                            href={`/courses/${course.id}`}
                            className={`bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-t-4 ${index % 3 === 0 ? 'border-primary' :
                                    index % 3 === 1 ? 'border-secondary' : 'border-accent'
                                }`}
                        >
                            <div className="flex justify-between items-start mb-3">
                                <span className="bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full">
                                    {course.shortName}
                                </span>
                                <span className="text-sm text-secondary font-medium">
                                    {course.duration}
                                </span>
                            </div>
                            <h3 className="font-bold text-neutral mb-2 line-clamp-2">
                                {course.name}
                            </h3>
                            <p className="text-subtle-light text-sm line-clamp-2 mb-3">
                                {course.description}
                            </p>
                            <div className="flex items-center text-primary text-sm font-medium">
                                Learn More
                                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="text-center mt-8">
                    <Link
                        href="/academics"
                        className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-primary-focus transition-colors"
                    >
                        View All Courses
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    );
}
