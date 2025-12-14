import { Metadata } from 'next';
import AdmissionsContent from './AdmissionsContent';

export const metadata: Metadata = {
    title: 'Admissions 2025 - Apply Now for Healthcare Courses',
    description: 'Apply for admission to IPC Patna. Easy admission process for BMLT, DMLT, BPT, BOTT courses. 100% placement assistance. Limited seats available - Apply now!',
    keywords: ['IPC admission 2025', 'paramedical admission Patna', 'BMLT admission', 'DMLT admission Bihar', 'apply now healthcare course'],
    openGraph: {
        title: 'Admissions Open 2025 - IPC Patna',
        description: 'Apply now for healthcare courses. Limited seats available with 100% placement assistance.',
    },
};

export default function Admissions() {
    return <AdmissionsContent />;
}
