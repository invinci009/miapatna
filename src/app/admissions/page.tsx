import { Metadata } from 'next';
import AdmissionsContent from './AdmissionsContent';

export const metadata: Metadata = {
    title: 'Admissions',
    description: 'Apply for admission to healthcare courses at Ignius Paramedical College. BMLT, DMLT, BPT courses with easy admission process.',
};

export default function Admissions() {
    return <AdmissionsContent />;
}
