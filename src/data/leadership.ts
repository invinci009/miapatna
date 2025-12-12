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
        name: "Our Director",
        designation: "Founder & Director",
        qualification: "25+ Years in Education",
        message: "When I started this college, many people asked why Patna needs another paramedical institute. My answer was simple - because our students deserve quality education close to home. I've seen students from small villages become successful lab technicians, physiotherapists, and healthcare professionals. That's what keeps us going."
    },
    {
        id: "2",
        name: "Teaching Team",
        designation: "Faculty & Staff",
        qualification: "Experienced Professionals",
        message: "We're not just teachers reading from textbooks. Most of us have worked in hospitals and labs. We teach what we've practiced. When a student struggles, we stay after class. When they succeed, we celebrate with them. That's just how we do things here."
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
    description: "We started Ignius Paramedical College in 2000 with a simple goal - help students from Bihar get quality healthcare education without going far from home. Over the years, we've trained more than 2000 students, many of whom now work in top hospitals across Patna and beyond. Our focus has always been on practical training because we believe you learn best by doing, not just reading from books.",
    mission: "To give students from Bihar and nearby areas the skills they need to build successful careers in healthcare - with hands-on training, supportive teachers, and real job opportunities.",
    vision: "We want to be the college that parents trust and students recommend to their friends. A place where anyone with the willingness to learn can build a future in healthcare.",
    values: [
        "Practical Learning First",
        "Affordable Quality Education",
        "Local Jobs, Real Opportunities",
        "Every Student Matters",
        "Honest Guidance"
    ],
    motto: "Siksha Se Safalta Tak"
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
