import { Metadata } from 'next';
import AboutContent from './AboutContent';

export const metadata: Metadata = {
    title: 'About Us - Our Mission, Vision & Leadership',
    description: 'Learn about IPC Patna - Ignius Paramedical College. Discover our mission, vision, experienced leadership team, and commitment to quality healthcare education since 2018.',
    keywords: ['about IPC Patna', 'Ignius Paramedical College history', 'healthcare education mission', 'paramedical college leadership'],
    openGraph: {
        title: 'About IPC Patna - Ignius Paramedical College',
        description: 'Discover our mission, vision, and commitment to quality healthcare education.',
    },
};

export default function About() {
    return <AboutContent />;
}
