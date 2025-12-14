import { Metadata } from 'next';
import FacilitiesContent from './FacilitiesContent';

export const metadata: Metadata = {
    title: 'Campus Facilities - Labs, Library & Infrastructure',
    description: 'Explore world-class facilities at IPC Patna - modern medical labs, computer labs, well-stocked library, smart classrooms, and more. State-of-the-art infrastructure for healthcare education.',
    keywords: ['IPC Patna facilities', 'medical lab Patna', 'paramedical college infrastructure', 'healthcare training labs'],
    openGraph: {
        title: 'Campus Facilities - IPC Patna',
        description: 'Modern labs, library, and infrastructure for quality healthcare education.',
    },
};

export default function Facilities() {
    return <FacilitiesContent />;
}
