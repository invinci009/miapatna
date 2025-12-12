import { Metadata } from 'next';
import AboutContent from './AboutContent';

export const metadata: Metadata = {
    title: 'About Us',
    description: 'Learn about Ignius Paramedical College - our mission, vision, leadership team, and commitment to quality healthcare education since 2000.',
};

export default function About() {
    return <AboutContent />;
}
