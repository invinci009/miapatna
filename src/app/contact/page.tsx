import { Metadata } from 'next';
import ContactContent from './ContactContent';

export const metadata: Metadata = {
    title: 'Contact Us',
    description: 'Get in touch with Ignius Paramedical College. Contact us for admission inquiries, course information, or any questions.',
};

export default function Contact() {
    return <ContactContent />;
}
