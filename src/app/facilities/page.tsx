import { Metadata } from 'next';
import FacilitiesContent from './FacilitiesContent';

export const metadata: Metadata = {
    title: 'Facilities',
    description: 'Explore our world-class facilities including modern laboratories, computer labs, library, and more at Ignius Paramedical College.',
};

export default function Facilities() {
    return <FacilitiesContent />;
}
