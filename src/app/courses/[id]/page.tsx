import { Metadata } from 'next';
import { courses } from '@/data/courses';
import CourseDetailContent from './CourseDetailContent';

type Props = {
    params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
    return courses.map((course) => ({
        id: course.id,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { id } = await params;
    const course = courses.find((c) => c.id === id);

    if (!course) {
        return {
            title: 'Course Not Found',
        };
    }

    return {
        title: `${course.name} (${course.shortName})`,
        description: course.description || `Learn about ${course.name} at Ignius Paramedical College. ${course.duration} program with ${course.certification} certification.`,
    };
}

export default async function CoursePage() {
    return <CourseDetailContent />;
}
