import { useState, type FormEvent } from 'react';
import { schoolInfo } from '@/data/leadership';

const WEB3FORMS_KEY = '6c6fec0f-1c99-46ce-a752-531b0c6efc9a';

interface ContactFormProps {
    onSubmit?: () => void;
    compact?: boolean;
}

export default function ContactForm({ onSubmit, compact = false }: ContactFormProps) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        const form = e.currentTarget;
        const formData = new FormData(form);

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    access_key: WEB3FORMS_KEY,
                    subject: `New Enquiry from ${formData.get('name')} - ${schoolInfo.shortName}`,
                    from_name: schoolInfo.shortName,
                    name: formData.get('name'),
                    email: formData.get('email'),
                    phone: formData.get('phone') || 'Not provided',
                    inquiry_type: formData.get('subject') || 'General Enquiry',
                    message: formData.get('message'),
                })
            });

            const result = await response.json();
            if (result.success) {
                setSubmitStatus('success');
                form.reset();
                onSubmit?.();
            } else {
                throw new Error('Submission failed');
            }
        } catch {
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };


    if (submitStatus === 'success') {
        return (
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <h3 className="text-xl font-bold text-green-700 mb-2">Message Sent Successfully!</h3>
                <p className="text-green-600 text-sm mb-6">We'll get back to you within 24 hours.</p>
                <button
                    onClick={() => setSubmitStatus('idle')}
                    className="bg-green-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-green-700 transition-colors shadow-lg"
                >
                    Send Another Message
                </button>
            </div>
        );
    }

    if (submitStatus === 'error') {
        return (
            <div className="bg-gradient-to-br from-red-50 to-rose-50 border border-red-200 rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>
                <h3 className="text-xl font-bold text-red-700 mb-2">Failed to Send</h3>
                <p className="text-red-600 text-sm mb-6">Please try again or call us directly.</p>
                <button
                    onClick={() => setSubmitStatus('idle')}
                    className="bg-red-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-red-700 transition-colors shadow-lg"
                >
                    Try Again
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-5">
            <div className={compact ? 'space-y-5' : 'grid grid-cols-1 md:grid-cols-2 gap-5'}>
                <div className="relative">
                    <label className="block text-sm font-semibold text-neutral mb-2">
                        Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        name="name"
                        required
                        placeholder="Enter your full name"
                        className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white transition-all outline-none"
                    />
                </div>
                <div className="relative">
                    <label className="block text-sm font-semibold text-neutral mb-2">
                        Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="email"
                        name="email"
                        required
                        placeholder="your.email@example.com"
                        className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white transition-all outline-none"
                    />
                </div>
            </div>

            <div className={compact ? 'space-y-5' : 'grid grid-cols-1 md:grid-cols-2 gap-5'}>
                <div className="relative">
                    <label className="block text-sm font-semibold text-neutral mb-2">Phone Number</label>
                    <input
                        type="tel"
                        name="phone"
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white transition-all outline-none"
                    />
                </div>
                <div className="relative">
                    <label className="block text-sm font-semibold text-neutral mb-2">Subject</label>
                    <select
                        name="subject"
                        className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white transition-all outline-none appearance-none cursor-pointer"
                    >
                        <option value="General Enquiry">General Enquiry</option>
                        <option value="Admission Enquiry">Admission Enquiry</option>
                        <option value="Course Details">Course Details</option>
                        <option value="Fee Structure">Fee Structure</option>
                        <option value="Placement">Placement</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
            </div>

            <div className="relative">
                <label className="block text-sm font-semibold text-neutral mb-2">
                    Your Message <span className="text-red-500">*</span>
                </label>
                <textarea
                    name="message"
                    required
                    rows={compact ? 4 : 5}
                    placeholder="How can we help you? Write your message here..."
                    className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white transition-all outline-none resize-none"
                />
            </div>

            <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-primary to-primary-focus text-white py-4 rounded-xl font-bold text-lg hover:shadow-xl hover:scale-[1.02] transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
                {isSubmitting ? (
                    <span className="flex items-center justify-center gap-3">
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending...
                    </span>
                ) : (
                    'Send Message'
                )}
            </button>

            <p className="text-center text-sm text-gray-500">
                We typically respond within 24 hours
            </p>
        </form>
    );
}


