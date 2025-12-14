import { Metadata } from 'next';
import ContactContent from './ContactContent';

export const metadata: Metadata = {
    title: 'Contact Us - Admission Enquiry & Location',
    description: 'Contact IPC Patna - Ignius Paramedical College for admission enquiries, course information, or campus visit. Call +91 9430862148 or visit Phulwarisharif, Patna.',
    keywords: ['contact IPC Patna', 'admission enquiry', 'paramedical college address Patna', 'IPC phone number'],
    openGraph: {
        title: 'Contact IPC Patna - Ignius Paramedical College',
        description: 'Get in touch for admission enquiries or visit our campus at Phulwarisharif, Patna.',
    },
};

export default function Contact() {
    return <ContactContent />;
}
