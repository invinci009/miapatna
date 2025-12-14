import { Metadata } from 'next';
import AcademicsContent from './AcademicsContent';

export const metadata: Metadata = {
    title: 'Courses & Programs - BMLT, DMLT, BPT, BOTT',
    description: 'Explore healthcare courses at IPC Patna - BMLT, DMLT, BPT, BOTT and vocational programs. Industry-relevant curriculum with practical training and 100% placement assistance.',
    keywords: ['BMLT course Patna', 'DMLT course Bihar', 'BPT physiotherapy course', 'BOTT course', 'paramedical courses Bihar', 'healthcare diploma'],
    openGraph: {
        title: 'Healthcare Courses at IPC Patna',
        description: 'BMLT, DMLT, BPT, BOTT courses with practical training and placement assistance.',
    },
};

export default function Academics() {
    return <AcademicsContent />;
}
