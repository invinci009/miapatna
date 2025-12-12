'use client';

import { useState, useRef, type FormEvent, type ChangeEvent } from 'react';
import { schoolInfo } from '@/data/leadership';
import { courses } from '@/data/courses';

const WEB3FORMS_KEY = '6c6fec0f-1c99-46ce-a752-531b0c6efc9a';

interface FormData {
    studentName: string;
    dateOfBirth: string;
    gender: string;
    nationality: string;
    category: string;
    aadhaarNo: string;
    courseApplied: string;
    qualification: string;
    previousInstitution: string;
    percentage: string;
    guardianName: string;
    guardianRelation: string;
    guardianPhone: string;
    guardianEmail: string;
    address: string;
    city: string;
    state: string;
    pincode: string;
    howDidYouHear: string;
    message: string;
}

const initialFormData: FormData = {
    studentName: '',
    dateOfBirth: '',
    gender: '',
    nationality: 'Indian',
    category: '',
    aadhaarNo: '',
    courseApplied: '',
    qualification: '',
    previousInstitution: '',
    percentage: '',
    guardianName: '',
    guardianRelation: '',
    guardianPhone: '',
    guardianEmail: '',
    address: '',
    city: '',
    state: 'Bihar',
    pincode: '',
    howDidYouHear: '',
    message: '',
};

export default function AdmissionForm() {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState<FormData>(initialFormData);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [errors, setErrors] = useState<Record<string, string>>({});
    const formRef = useRef<HTMLFormElement>(null);

    const totalSteps = 4;

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const validateStep = (step: number): boolean => {
        const newErrors: Record<string, string> = {};

        if (step === 1) {
            if (!formData.studentName.trim()) newErrors.studentName = 'Required';
            if (!formData.dateOfBirth) newErrors.dateOfBirth = 'Required';
            if (!formData.gender) newErrors.gender = 'Required';
            if (!formData.courseApplied) newErrors.courseApplied = 'Required';
        }

        if (step === 2) {
            if (!formData.guardianName.trim()) newErrors.guardianName = 'Required';
            if (!formData.guardianPhone.trim()) newErrors.guardianPhone = 'Required';
            if (!formData.guardianEmail.trim()) newErrors.guardianEmail = 'Required';
            else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.guardianEmail)) {
                newErrors.guardianEmail = 'Invalid email';
            }
        }

        if (step === 3) {
            if (!formData.address.trim()) newErrors.address = 'Required';
            if (!formData.city.trim()) newErrors.city = 'Required';
            if (!formData.pincode.trim()) newErrors.pincode = 'Required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const nextStep = () => {
        if (validateStep(currentStep)) {
            setCurrentStep(prev => Math.min(prev + 1, totalSteps));
        }
    };

    const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (!validateStep(currentStep)) return;

        setIsSubmitting(true);

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    access_key: WEB3FORMS_KEY,
                    subject: `New Admission Application - ${formData.studentName} for ${formData.courseApplied}`,
                    from_name: schoolInfo.shortName,
                    applicant_name: formData.studentName,
                    date_of_birth: formData.dateOfBirth,
                    gender: formData.gender,
                    course_applied: formData.courseApplied,
                    nationality: formData.nationality,
                    category: formData.category || 'Not provided',
                    aadhaar_number: formData.aadhaarNo || 'Not provided',
                    qualification: formData.qualification || 'Not provided',
                    previous_institution: formData.previousInstitution || 'Not provided',
                    percentage: formData.percentage || 'Not provided',
                    guardian_name: formData.guardianName,
                    guardian_relation: formData.guardianRelation || 'Not provided',
                    guardian_phone: formData.guardianPhone,
                    guardian_email: formData.guardianEmail,
                    full_address: `${formData.address}, ${formData.city}, ${formData.state} - ${formData.pincode}`,
                    how_did_you_hear: formData.howDidYouHear || 'Not specified',
                    additional_message: formData.message || 'None',
                })
            });

            const result = await response.json();
            if (result.success) {
                setSubmitStatus('success');
                setFormData(initialFormData);
                setCurrentStep(1);
            } else {
                throw new Error('Submission failed');
            }
        } catch {
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    const stepTitles = ['Applicant Details', 'Guardian Info', 'Address', 'Review & Submit'];

    if (submitStatus === 'success') {
        return (
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-8 md:p-12 text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <h3 className="text-2xl font-bold text-green-700 mb-3">Application Submitted Successfully!</h3>
                <p className="text-green-600 mb-2">Thank you for applying to {schoolInfo.shortName}.</p>
                <p className="text-green-600 mb-8">We will contact you within 2-3 working days with the next steps.</p>
                <button
                    onClick={() => setSubmitStatus('idle')}
                    className="bg-green-600 text-white px-8 py-3 rounded-full font-bold hover:bg-green-700 transition-colors shadow-lg"
                >
                    Submit Another Application
                </button>
            </div>
        );
    }

    if (submitStatus === 'error') {
        return (
            <div className="bg-gradient-to-br from-red-50 to-rose-50 border border-red-200 rounded-2xl p-8 md:p-12 text-center">
                <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>
                <h3 className="text-2xl font-bold text-red-700 mb-3">Submission Failed</h3>
                <p className="text-red-600 mb-2">Please try again or contact us directly.</p>
                <p className="text-red-600 mb-8">
                    Phone: <a href={`tel:${schoolInfo.contact.phone[0]}`} className="underline font-semibold">{schoolInfo.contact.phone[0]}</a>
                </p>
                <button
                    onClick={() => setSubmitStatus('idle')}
                    className="bg-red-600 text-white px-8 py-3 rounded-full font-bold hover:bg-red-700 transition-colors shadow-lg"
                >
                    Try Again
                </button>
            </div>
        );
    }

    return (
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            {/* Progress Bar */}
            <div className="bg-gradient-to-r from-primary to-primary-focus p-6 md:p-8">
                <div className="flex justify-between items-center mb-6">
                    {[1, 2, 3, 4].map((step) => (
                        <div key={step} className="flex items-center">
                            <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center font-bold text-sm md:text-base transition-all ${currentStep > step
                                ? 'bg-white text-primary shadow-lg'
                                : currentStep === step
                                    ? 'bg-white text-primary shadow-lg scale-110'
                                    : 'bg-white/20 text-white'
                                }`}>
                                {currentStep > step ? (
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                ) : step}
                            </div>
                            {step < 4 && (
                                <div className={`w-8 sm:w-16 md:w-24 lg:w-32 h-1 mx-1 md:mx-2 rounded-full transition-all ${currentStep > step ? 'bg-white' : 'bg-white/20'
                                    }`} />
                            )}
                        </div>
                    ))}
                </div>
                <div className="text-white text-center">
                    <h3 className="font-bold text-xl md:text-2xl">{stepTitles[currentStep - 1]}</h3>
                    <p className="text-white/80 text-sm mt-1">Step {currentStep} of {totalSteps}</p>
                </div>
            </div>

            <form ref={formRef} onSubmit={handleSubmit} className="p-6 md:p-8">
                {/* Step 1 - Applicant Details */}
                {currentStep === 1 && (
                    <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-semibold text-neutral mb-2">
                                    Full Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="studentName"
                                    value={formData.studentName}
                                    onChange={handleChange}
                                    placeholder="Enter your full name"
                                    className={`w-full px-4 py-3.5 bg-gray-50 border rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white transition-all outline-none ${errors.studentName ? 'border-red-400 bg-red-50' : 'border-gray-200'}`}
                                />
                                {errors.studentName && <p className="text-red-500 text-xs mt-1">{errors.studentName}</p>}
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-neutral mb-2">
                                    Date of Birth <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="date"
                                    name="dateOfBirth"
                                    value={formData.dateOfBirth}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3.5 bg-gray-50 border rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white transition-all outline-none ${errors.dateOfBirth ? 'border-red-400 bg-red-50' : 'border-gray-200'}`}
                                />
                                {errors.dateOfBirth && <p className="text-red-500 text-xs mt-1">{errors.dateOfBirth}</p>}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-semibold text-neutral mb-2">
                                    Gender <span className="text-red-500">*</span>
                                </label>
                                <select
                                    name="gender"
                                    value={formData.gender}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3.5 bg-gray-50 border rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white transition-all outline-none appearance-none cursor-pointer ${errors.gender ? 'border-red-400 bg-red-50' : 'border-gray-200'}`}
                                >
                                    <option value="">Select Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>
                                </select>
                                {errors.gender && <p className="text-red-500 text-xs mt-1">{errors.gender}</p>}
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-neutral mb-2">
                                    Course Applied For <span className="text-red-500">*</span>
                                </label>
                                <select
                                    name="courseApplied"
                                    value={formData.courseApplied}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3.5 bg-gray-50 border rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white transition-all outline-none appearance-none cursor-pointer ${errors.courseApplied ? 'border-red-400 bg-red-50' : 'border-gray-200'}`}
                                >
                                    <option value="">Select Course</option>
                                    {courses.map(c => (
                                        <option key={c.id} value={c.shortName}>{c.shortName} - {c.name}</option>
                                    ))}
                                </select>
                                {errors.courseApplied && <p className="text-red-500 text-xs mt-1">{errors.courseApplied}</p>}
                            </div>
                        </div>

                        <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                            <h4 className="font-semibold text-neutral mb-4">Educational Background</h4>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-600 mb-2">Last Qualification</label>
                                    <select
                                        name="qualification"
                                        value={formData.qualification}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
                                    >
                                        <option value="">Select</option>
                                        <option value="10th Pass">10th Pass</option>
                                        <option value="12th Pass">12th Pass</option>
                                        <option value="Graduate">Graduate</option>
                                        <option value="Post Graduate">Post Graduate</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-600 mb-2">Previous Institution</label>
                                    <input
                                        type="text"
                                        name="previousInstitution"
                                        value={formData.previousInstitution}
                                        onChange={handleChange}
                                        placeholder="School/College name"
                                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-600 mb-2">Percentage/CGPA</label>
                                    <input
                                        type="text"
                                        name="percentage"
                                        value={formData.percentage}
                                        onChange={handleChange}
                                        placeholder="e.g., 75% or 7.5"
                                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div>
                                <label className="block text-sm font-semibold text-neutral mb-2">Nationality</label>
                                <input
                                    type="text"
                                    name="nationality"
                                    value={formData.nationality}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white transition-all outline-none"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-neutral mb-2">Category</label>
                                <select
                                    name="category"
                                    value={formData.category}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white transition-all outline-none appearance-none cursor-pointer"
                                >
                                    <option value="">Select</option>
                                    <option value="General">General</option>
                                    <option value="OBC">OBC</option>
                                    <option value="SC">SC</option>
                                    <option value="ST">ST</option>
                                    <option value="EWS">EWS</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-neutral mb-2">Aadhaar Number</label>
                                <input
                                    type="text"
                                    name="aadhaarNo"
                                    value={formData.aadhaarNo}
                                    onChange={handleChange}
                                    placeholder="XXXX XXXX XXXX"
                                    className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white transition-all outline-none"
                                />
                            </div>
                        </div>
                    </div>
                )}

                {/* Step 2 - Guardian Details */}
                {currentStep === 2 && (
                    <div className="space-y-6">
                        <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-6">
                            <p className="text-blue-700 text-sm">Please provide details of a parent or guardian who can be contacted for admission-related communication.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-semibold text-neutral mb-2">
                                    Guardian Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="guardianName"
                                    value={formData.guardianName}
                                    onChange={handleChange}
                                    placeholder="Parent/Guardian full name"
                                    className={`w-full px-4 py-3.5 bg-gray-50 border rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white transition-all outline-none ${errors.guardianName ? 'border-red-400 bg-red-50' : 'border-gray-200'}`}
                                />
                                {errors.guardianName && <p className="text-red-500 text-xs mt-1">{errors.guardianName}</p>}
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-neutral mb-2">Relation</label>
                                <select
                                    name="guardianRelation"
                                    value={formData.guardianRelation}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white transition-all outline-none appearance-none cursor-pointer"
                                >
                                    <option value="">Select Relation</option>
                                    <option value="Father">Father</option>
                                    <option value="Mother">Mother</option>
                                    <option value="Guardian">Guardian</option>
                                    <option value="Self">Self</option>
                                </select>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-semibold text-neutral mb-2">
                                    Phone Number <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="tel"
                                    name="guardianPhone"
                                    value={formData.guardianPhone}
                                    onChange={handleChange}
                                    placeholder="+91 XXXXX XXXXX"
                                    className={`w-full px-4 py-3.5 bg-gray-50 border rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white transition-all outline-none ${errors.guardianPhone ? 'border-red-400 bg-red-50' : 'border-gray-200'}`}
                                />
                                {errors.guardianPhone && <p className="text-red-500 text-xs mt-1">{errors.guardianPhone}</p>}
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-neutral mb-2">
                                    Email Address <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    name="guardianEmail"
                                    value={formData.guardianEmail}
                                    onChange={handleChange}
                                    placeholder="email@example.com"
                                    className={`w-full px-4 py-3.5 bg-gray-50 border rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white transition-all outline-none ${errors.guardianEmail ? 'border-red-400 bg-red-50' : 'border-gray-200'}`}
                                />
                                {errors.guardianEmail && <p className="text-red-500 text-xs mt-1">{errors.guardianEmail}</p>}
                            </div>
                        </div>
                    </div>
                )}

                {/* Step 3 - Address */}
                {currentStep === 3 && (
                    <div className="space-y-6">
                        <div>
                            <label className="block text-sm font-semibold text-neutral mb-2">
                                Full Address <span className="text-red-500">*</span>
                            </label>
                            <textarea
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                rows={3}
                                placeholder="House No., Street, Locality..."
                                className={`w-full px-4 py-3.5 bg-gray-50 border rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white transition-all outline-none resize-none ${errors.address ? 'border-red-400 bg-red-50' : 'border-gray-200'}`}
                            />
                            {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div>
                                <label className="block text-sm font-semibold text-neutral mb-2">
                                    City <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="city"
                                    value={formData.city}
                                    onChange={handleChange}
                                    placeholder="e.g., Patna"
                                    className={`w-full px-4 py-3.5 bg-gray-50 border rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white transition-all outline-none ${errors.city ? 'border-red-400 bg-red-50' : 'border-gray-200'}`}
                                />
                                {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city}</p>}
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-neutral mb-2">State</label>
                                <input
                                    type="text"
                                    name="state"
                                    value={formData.state}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white transition-all outline-none"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-neutral mb-2">
                                    Pincode <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="pincode"
                                    value={formData.pincode}
                                    onChange={handleChange}
                                    placeholder="e.g., 801505"
                                    className={`w-full px-4 py-3.5 bg-gray-50 border rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white transition-all outline-none ${errors.pincode ? 'border-red-400 bg-red-50' : 'border-gray-200'}`}
                                />
                                {errors.pincode && <p className="text-red-500 text-xs mt-1">{errors.pincode}</p>}
                            </div>
                        </div>

                        <div className="bg-gray-50 rounded-xl p-5 border border-gray-100 space-y-4">
                            <h4 className="font-semibold text-neutral">Additional Information</h4>
                            <div>
                                <label className="block text-sm font-medium text-gray-600 mb-2">How did you hear about us?</label>
                                <select
                                    name="howDidYouHear"
                                    value={formData.howDidYouHear}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
                                >
                                    <option value="">Select</option>
                                    <option value="Website">Website</option>
                                    <option value="Social Media">Social Media</option>
                                    <option value="Friends/Family">Friends/Family</option>
                                    <option value="Advertisement">Advertisement</option>
                                    <option value="JustDial">JustDial</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-600 mb-2">Any message for us?</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={2}
                                    placeholder="Any queries or special requirements..."
                                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none resize-none"
                                />
                            </div>
                        </div>
                    </div>
                )}

                {/* Step 4 - Review */}
                {currentStep === 4 && (
                    <div className="space-y-6">
                        <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-6 border border-primary/20">
                            <h4 className="font-bold text-primary mb-4 text-lg">Application Summary</h4>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-3">
                                    <h5 className="font-semibold text-neutral border-b pb-2">Applicant Details</h5>
                                    <p className="flex justify-between"><span className="text-gray-500">Name:</span> <strong>{formData.studentName}</strong></p>
                                    <p className="flex justify-between"><span className="text-gray-500">DOB:</span> <strong>{formData.dateOfBirth}</strong></p>
                                    <p className="flex justify-between"><span className="text-gray-500">Gender:</span> <strong>{formData.gender}</strong></p>
                                    <p className="flex justify-between"><span className="text-gray-500">Course:</span> <strong className="text-primary">{formData.courseApplied}</strong></p>
                                </div>
                                <div className="space-y-3">
                                    <h5 className="font-semibold text-neutral border-b pb-2">Guardian Details</h5>
                                    <p className="flex justify-between"><span className="text-gray-500">Name:</span> <strong>{formData.guardianName}</strong></p>
                                    <p className="flex justify-between"><span className="text-gray-500">Phone:</span> <strong>{formData.guardianPhone}</strong></p>
                                    <p className="flex justify-between"><span className="text-gray-500">Email:</span> <strong>{formData.guardianEmail}</strong></p>
                                </div>
                            </div>
                            <div className="mt-6 pt-4 border-t border-primary/20">
                                <h5 className="font-semibold text-neutral mb-2">Address</h5>
                                <p className="text-gray-700">{formData.address}, {formData.city}, {formData.state} - {formData.pincode}</p>
                            </div>
                        </div>

                        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                            <p className="text-amber-800 text-sm">
                                <strong>Note:</strong> Please review all information before submitting. Confirmation will be sent to <strong>{formData.guardianEmail}</strong>
                            </p>
                        </div>

                        <label className="flex items-start gap-3 cursor-pointer p-4 bg-gray-50 rounded-xl border border-gray-200 hover:bg-gray-100 transition-colors">
                            <input type="checkbox" required className="w-5 h-5 mt-0.5 rounded border-gray-300 text-primary focus:ring-primary" />
                            <span className="text-sm text-gray-700">I declare that all information provided is true and accurate. I understand that false information may lead to cancellation of admission.</span>
                        </label>
                    </div>
                )}

                {/* Navigation */}
                <div className="flex justify-between mt-8 pt-6 border-t border-gray-100">
                    {currentStep > 1 ? (
                        <button
                            type="button"
                            onClick={prevStep}
                            className="flex items-center gap-2 px-6 py-3 border-2 border-gray-200 rounded-xl font-semibold text-gray-600 hover:bg-gray-50 hover:border-gray-300 transition-all"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                            Previous
                        </button>
                    ) : <div />}

                    {currentStep < totalSteps ? (
                        <button
                            type="button"
                            onClick={nextStep}
                            className="flex items-center gap-2 bg-gradient-to-r from-primary to-primary-focus text-white px-8 py-3 rounded-xl font-bold hover:shadow-lg hover:scale-[1.02] transition-all"
                        >
                            Next Step
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    ) : (
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-3 rounded-xl font-bold hover:shadow-lg hover:scale-[1.02] transition-all disabled:opacity-50 disabled:hover:scale-100"
                        >
                            {isSubmitting ? (
                                <>
                                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                    </svg>
                                    Submitting...
                                </>
                            ) : (
                                <>
                                    Submit Application
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </>
                            )}
                        </button>
                    )}
                </div>
            </form>
        </div>
    );
}


