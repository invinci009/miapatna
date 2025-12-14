import { Metadata } from 'next';
import GalleryContent from './GalleryContent';

export const metadata: Metadata = {
    title: 'Photo Gallery - Campus Life & Events',
    description: 'View photos of IPC Patna campus, healthcare labs, classrooms, events, and student activities. Explore life at Ignius Paramedical College.',
    keywords: ['IPC Patna photos', 'paramedical college gallery', 'campus photos Patna', 'student activities'],
    openGraph: {
        title: 'Photo Gallery - IPC Patna Campus',
        description: 'Explore campus life, events, and activities at Ignius Paramedical College.',
    },
};

export default function Gallery() {
    return <GalleryContent />;
}
