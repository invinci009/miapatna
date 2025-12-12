// Ignius Paramedical College - Institute Data

export interface Leader {
    id: string;
    name: string;
    designation: string;
    qualification: string;
    message?: string;
    image?: string;
}

export const leadership: Leader[] = [
    {
        id: "1",
        name: "Director",
        designation: "Founder & Director",
        qualification: "Healthcare & Education Expert",
        message: "At Ignius Paramedical College, we believe in the power of education to transform lives. With state-of-the-art facilities, experienced instructors, and a commitment to excellence, we strive to help every student achieve their career goals and unlock their full potential."
    },
    {
        id: "2",
        name: "Academic Team",
        designation: "Faculty & Mentors",
        qualification: "Highly Qualified Professionals",
        message: "Our faculty is incredibly supportive and knowledgeable, truly caring about student success. We bring together dedicated educators across various disciplines to provide transformative educational experiences."
    }
];

// Faculty & Staff
export interface Faculty {
    id: string;
    name: string;
    designation: string;
    qualification: string;
    experience: string;
    specialization?: string;
    image?: string;
}

export const faculty: Faculty[] = [
    {
        id: "1",
        name: "Director",
        designation: "Founder & Director",
        qualification: "MD, Healthcare Management",
        experience: "20+ years in Healthcare Education",
        specialization: "Healthcare Administration & Research"
    },
    {
        id: "2",
        name: "Prof. Md. Rahman",
        designation: "Head of Department - MLT",
        qualification: "M.Sc Medical Laboratory Technology",
        experience: "15+ years teaching experience",
        specialization: "Clinical Biochemistry & Hematology"
    },
    {
        id: "3",
        name: "Dr. Priya Singh",
        designation: "Senior Faculty - Physiotherapy",
        qualification: "MPT (Orthopedics)",
        experience: "12+ years clinical & teaching",
        specialization: "Musculoskeletal & Sports Physiotherapy"
    },
    {
        id: "4",
        name: "Mrs. Fatima Khatoon",
        designation: "HOD - Nursing Administration",
        qualification: "M.Sc Nursing, MBA Healthcare",
        experience: "18+ years in Nursing Education",
        specialization: "Hospital Management & Patient Care"
    },
    {
        id: "5",
        name: "Mr. Ankit Kumar",
        designation: "Faculty - OT Technology",
        qualification: "B.Sc OT Tech, PGDHA",
        experience: "10+ years in Operation Theater",
        specialization: "Surgical Procedures & Sterilization"
    },
    {
        id: "6",
        name: "Ms. Neha Sharma",
        designation: "Faculty - Computer Applications",
        qualification: "MCA, B.Ed",
        experience: "8+ years teaching experience",
        specialization: "Computer Education & Digital Skills"
    }
];

export const schoolInfo = {
    name: "Ignius Paramedical College",
    shortName: "IPC",
    tagline: "Empowering Minds, Shaping Futures",
    established: "2000",
    affiliation: "Ignius Foundation",
    affiliationNo: "QS I-GAUGE Diamond & Gold Rated",
    recognitions: [
        "Recognized by UGC and BCI",
        "QS I-GAUGE Diamond & Gold Rated for Teaching & Learning",
        "Member of Association of Indian Universities (AIU)",
        "Member of Association of Commonwealth Universities (ACU)",
        "Member of International Association of Universities (IAU)",
        "International Accreditation since 2010"
    ],
    address: {
        line1: "60 Feet Petrol Line, Isapur, Federal Colony Road",
        line2: "Phulwarisharif, Patna - 801505, Bihar",
        city: "Patna",
        state: "Bihar",
        pincode: "801505"
    },
    contact: {
        phone: ["+91 6205708606"],
        email: "igniusstudios@gmail.com",
        whatsapp: "+91 6205708606",
        website: "igniusparamedical.com"
    },
    social: {
        facebook: "https://facebook.com/igniusparamedical",
        instagram: "https://instagram.com/igniusparamedical",
        youtube: "https://youtube.com/igniusparamedical",
        whatsapp: "https://wa.me/916205708606"
    },
    googleMapsLink: "https://maps.app.goo.gl/4Q7wTZoDddSxFTWQ9"
};

// Institute Overview
export const instituteOverview = {
    description: "Ignius Paramedical College, a proud unit of Ignius Foundation, was established with a mission to bridge the gap between education and employability. We are committed to providing high-quality, industry-relevant training that equips individuals with the practical skills needed to thrive in today's job market. Our programs are designed in collaboration with industry experts, ensuring that the training we provide is both up-to-date and aligned with current professional demands.",
    mission: "To empower individuals with skills and knowledge for today's job market through high-quality, industry-relevant training that bridges the gap between education and employability.",
    vision: "To be a leading educational institution that inspires lifelong learning, nurturing critical thinking, creativity, and ethical values while preparing students for real-world challenges.",
    values: [
        "Innovation & Research",
        "Academic Excellence",
        "Industry Relevance",
        "Student Success",
        "Ethical Practice"
    ],
    motto: "Empowering Minds, Shaping Futures"
};

// Partner Organizations
export const partnerHospitals = [
    { name: "Association of Indian Universities (AIU)", type: "Academic Partner" },
    { name: "Association of Commonwealth Universities (ACU)", type: "International Partner" },
    { name: "International Association of Universities (IAU)", type: "Global Partner" }
];

// Statistics
export const placementStats = {
    placementRate: "2000+",
    description: "Students trained and trusted our quality education programs across various disciplines."
};

// Student Testimonials
export const testimonials = [
    {
        id: "1",
        text: "The faculty is incredibly supportive and knowledgeable. They truly care about our success.",
        name: "Student",
        course: "Healthcare Program"
    },
    {
        id: "2",
        text: "Industry-relevant training that prepared me for real-world challenges.",
        name: "Graduate",
        course: "Vocational Training"
    }
];

// Equipment & Facilities
export const equipmentList = [
    "Smart Computer Labs",
    "Modern Laboratory Equipment",
    "Digital Learning Resources",
    "Online Learning Platform",
    "Research Facilities",
    "Clinical Training Setup"
];
