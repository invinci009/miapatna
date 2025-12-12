import { Metadata } from 'next';
import AcademicsContent from './AcademicsContent';

export const metadata: Metadata = {
    title: 'Academics',
    description: 'Explore healthcare courses at Ignius Paramedical College - BMLT, DMLT, BPT, BOTT and more. Quality education with practical training.',
};

export default function Academics() {
    return <AcademicsContent />;
}
