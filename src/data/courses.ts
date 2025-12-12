// Ignius Paramedical College - Courses Offered

export interface Course {
    id: string;
    name: string;
    shortName: string;
    duration: string;
    eligibility: string;
    fees: string;
    intake: number;
    certification: string;
    syllabus: string[];
    admissionRequirements: string[];
    description?: string;
}

export const courses: Course[] = [
    {
        id: "1",
        name: "Bachelor in Medical Laboratory Technology",
        shortName: "BMLT",
        duration: "3 years",
        eligibility: "12th (Science - PCB/PCM)",
        fees: "Contact for fees",
        intake: 60,
        certification: "University Certified",
        syllabus: [
            "Clinical Biochemistry",
            "Hematology",
            "Microbiology",
            "Immunology",
            "Molecular Biology",
            "Histopathology"
        ],
        admissionRequirements: [
            "10th & 12th Marksheets",
            "ID Proof (Aadhar Card)",
            "Passport Size Photos",
            "Medical Fitness Certificate"
        ],
        description: "Comprehensive training in laboratory diagnostic techniques with practical internship."
    },
    {
        id: "2",
        name: "Diploma in Medical Laboratory Technology",
        shortName: "DMLT",
        duration: "2-3 years",
        eligibility: "12th (Science preferred)",
        fees: "Contact for fees",
        intake: 60,
        certification: "State Paramedical Council",
        syllabus: [
            "Anatomy and Physiology",
            "Biochemistry",
            "Pathology",
            "Microbiology",
            "Hematology",
            "Blood Banking"
        ],
        admissionRequirements: [
            "10th & 12th Marksheets",
            "ID Proof (Aadhar Card)",
            "Passport Size Photos",
            "Medical Fitness Certificate"
        ],
        description: "Industry-relevant diploma program for medical laboratory professionals."
    },
    {
        id: "3",
        name: "Bachelor in Physiotherapy",
        shortName: "BPT",
        duration: "4 years",
        eligibility: "12th (Science - PCB)",
        fees: "Contact for fees",
        intake: 40,
        certification: "University Certified",
        syllabus: [
            "Anatomy & Physiology",
            "Biomechanics & Kinesiology",
            "Electrotherapy",
            "Musculoskeletal Physiotherapy",
            "Neurological Physiotherapy",
            "Sports Physiotherapy"
        ],
        admissionRequirements: [
            "10th & 12th Marksheets",
            "ID Proof (Aadhar Card)",
            "Passport Size Photos",
            "Medical Fitness Certificate"
        ],
        description: "Professional degree program for physiotherapy with clinical rotations."
    },
    {
        id: "4",
        name: "Bachelor in Operation Theater Technology",
        shortName: "BOTT",
        duration: "3 years",
        eligibility: "12th (Science)",
        fees: "Contact for fees",
        intake: 40,
        certification: "University Certified",
        syllabus: [
            "OT Protocols & Procedures",
            "Sterilization Techniques",
            "Surgical Instruments",
            "Patient Safety",
            "Anesthesia Basics",
            "Emergency Procedures"
        ],
        admissionRequirements: [
            "10th & 12th Marksheets",
            "ID Proof (Aadhar Card)",
            "Passport Size Photos",
            "Medical Fitness Certificate"
        ],
        description: "Specialized training for operation theater technology professionals."
    },
    {
        id: "5",
        name: "Diploma in Nursing Administration",
        shortName: "DNA",
        duration: "1-2 years",
        eligibility: "GNM/B.Sc Nursing",
        fees: "Contact for fees",
        intake: 30,
        certification: "State Board Certified",
        syllabus: [
            "Healthcare Management",
            "Nursing Administration",
            "Hospital Management",
            "Quality Assurance",
            "Patient Care",
            "Medical Ethics"
        ],
        admissionRequirements: [
            "GNM/B.Sc Nursing Certificate",
            "ID Proof (Aadhar Card)",
            "Passport Size Photos",
            "Experience Certificate (if any)"
        ],
        description: "Advanced diploma for nursing professionals in administration."
    },
    {
        id: "6",
        name: "B.Voc in Physiotherapy",
        shortName: "B.Voc PT",
        duration: "3 years",
        eligibility: "12th Pass",
        fees: "Contact for fees",
        intake: 40,
        certification: "Vocational Certificate",
        syllabus: [
            "Basic Anatomy & Physiology",
            "Therapeutic Exercises",
            "Manual Therapy",
            "Patient Care",
            "Rehabilitation",
            "Clinical Practice"
        ],
        admissionRequirements: [
            "10th & 12th Marksheets",
            "ID Proof (Aadhar Card)",
            "Passport Size Photos",
            "Medical Fitness Certificate"
        ],
        description: "Vocational degree focused on practical physiotherapy skills."
    }
];

// Additional Course Categories
export const courseCategories = [
    { name: "Basic Certificate Course", icon: "certificate" },
    { name: "Advance Certificate Course", icon: "advanced" },
    { name: "Computer Education", icon: "computer" },
    { name: "Handicraft Course", icon: "craft" },
    { name: "Medical Workshop", icon: "medical" },
    { name: "Diploma 3 yrs", icon: "diploma" },
    { name: "UG Courses", icon: "ug" },
    { name: "PG Courses", icon: "pg" },
    { name: "Basic Paramedical Diploma", icon: "paramedical" }
];

// Admission Process Steps
export const admissionProcess = [
    {
        step: 1,
        title: "Enquiry & Registration",
        description: "Visit our website or campus to enquire about courses and collect application form.",
        icon: "form"
    },
    {
        step: 2,
        title: "Submit Application",
        description: "Fill the form completely and submit with all required documents.",
        icon: "submit"
    },
    {
        step: 3,
        title: "Counselling Session",
        description: "Attend counselling session for course guidance and career planning.",
        icon: "counselling"
    },
    {
        step: 4,
        title: "Pay Registration Fee",
        description: "Complete registration by paying the required fee online or offline.",
        icon: "payment"
    },
    {
        step: 5,
        title: "Admission Confirmation",
        description: "Receive admission confirmation and welcome kit.",
        icon: "confirm"
    },
    {
        step: 6,
        title: "Classes Begin",
        description: "Join classes as per schedule - online or offline modes available.",
        icon: "class"
    }
];

// Required Documents for Admission
export const requiredDocuments = [
    { doc: "10th & 12th Mark Sheets", detail: "Original + 2 Photocopies" },
    { doc: "Transfer Certificate", detail: "From previous institution" },
    { doc: "Aadhar Card", detail: "Original for verification" },
    { doc: "Passport Size Photographs", detail: "4-6 recent photos" },
    { doc: "Medical Fitness Certificate", detail: "From registered practitioner" },
    { doc: "Caste Certificate", detail: "If applicable for reservation" }
];

// How to Apply
export const howToApply = {
    online: "Fill out the Online Application Form on our website or contact us",
    offline: "Visit our campus at Phulwarisharif, Patna and submit form at the office",
    contact: "+91 9430862148"
};
