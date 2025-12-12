import { Metadata } from 'next';
import GalleryContent from './GalleryContent';

export const metadata: Metadata = {
    title: 'Gallery',
    description: 'View photos of our campus, events, and student activities at Ignius Paramedical College.',
};

export default function Gallery() {
    return <GalleryContent />;
}
