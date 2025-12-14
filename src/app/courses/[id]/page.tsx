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
        title: `${course.shortName} Course - ${course.name}`,
        description: `${course.name} (${course.shortName}) at IPC Patna. ${course.duration} program with ${course.certification}. Eligibility: ${course.eligibility}. Apply now for admission!`,
        keywords: [
            `${course.shortName} course Patna`,
            `${course.name}`,
            `${course.shortName} admission`,
            'paramedical course Bihar'
        ],
        openGraph: {
            title: `${course.shortName} - ${course.name} | IPC Patna`,
            description: `${course.duration} ${course.shortName} program with practical training and placement assistance.`,
        },
    };
}

export default async function CoursePage() {
    return <CourseDetailContent />;
}
