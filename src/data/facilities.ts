// Ignius Paramedical College - Facilities

export interface Facility {
    id: string;
    title: string;
    description: string;
    icon: string;
    image?: string;
    features?: string[];
}

export const facilities: Facility[] = [
    {
        id: "1",
        title: "Modern Laboratories",
        description: "State-of-the-art labs for pathology, microbiology, hematology, and diagnostic training with latest equipment.",
        icon: "lab",
        image: "/facility-lab.png",
        features: ["Binocular Microscopes", "Hematology Analyzers", "Biochemistry Equipment"]
    },
    {
        id: "2",
        title: "Smart Computer Labs",
        description: "Fully equipped computer labs with modern hardware and software for digital learning and skill development.",
        icon: "computer",
        image: "/facility-computer.png",
        features: ["High-Speed Internet", "Latest Software", "Individual Workstations"]
    },
    {
        id: "3",
        title: "Library & Resources",
        description: "Extensive collection of reference books, journals, e-resources, and previous year papers for academic excellence.",
        icon: "library",
        image: "/facility-library.png",
        features: ["5000+ Books", "Digital Resources", "Quiet Study Areas"]
    },
    {
        id: "4",
        title: "Online Learning Platform",
        description: "Access courses anytime, anywhere with our dedicated online learning platform launched in 2020.",
        icon: "online",
        features: ["24/7 Access", "Video Lectures", "Online Assessments"]
    },
    {
        id: "5",
        title: "Clinical Training Setup",
        description: "Practical training facilities for hands-on experience in healthcare procedures and patient care.",
        icon: "clinical",
        features: ["Patient Simulation", "Medical Equipment", "Supervised Training"]
    },
    {
        id: "6",
        title: "Research Facilities",
        description: "Dedicated research center for healthcare research, innovation, and academic projects.",
        icon: "research",
        features: ["Research Lab", "Project Guidance", "Publication Support"]
    },
    {
        id: "7",
        title: "Smart Classrooms",
        description: "Well-ventilated rooms with projector-enabled smart classes for enhanced learning experience.",
        icon: "classroom",
        image: "/facility-classroom.png",
        features: ["HD Projectors", "AC Rooms", "Ergonomic Seating"]
    },
    {
        id: "8",
        title: "Global Certification",
        description: "Our certificates are recognized by top institutes across India with international accreditation.",
        icon: "certificate",
        features: ["ISO Certified", "Industry Recognition", "Career Support"]
    }
];

// Key Features
export const keyFeatures = [
    {
        id: "1",
        title: "Global Certificate",
        description: "Our Certificates are recognized by the top institutes of India.",
        icon: "globe"
    },
    {
        id: "2",
        title: "Quality Education",
        description: "Our quality education is trusted by 2000+ students with student-friendly approach.",
        icon: "star"
    },
    {
        id: "3",
        title: "Skilled Teachers",
        description: "Experienced faculty and mentors dedicated to student success.",
        icon: "teacher"
    },
    {
        id: "4",
        title: "Flexible Learning",
        description: "Online and offline modes available for all programs.",
        icon: "flexible"
    }
];

// Lab Equipment
export const labEquipment = [
    { name: "Binocular Microscopes", category: "Pathology", icon: "microscope" },
    { name: "Biochemistry Analyzers", category: "Biochemistry", icon: "beaker" },
    { name: "Hematology Analyzers", category: "Hematology", icon: "heart" },
    { name: "Microbiology Equipment", category: "Microbiology", icon: "virus" },
    { name: "Physiotherapy Equipment", category: "Physiotherapy", icon: "activity" },
    { name: "Computer Workstations", category: "IT Lab", icon: "computer" },
    { name: "Digital Learning Tools", category: "Smart Class", icon: "tablet" },
    { name: "Specimen Collection Kits", category: "Clinical", icon: "clipboard" }
];

// Campus Highlights
export const campusHighlights = [
    {
        icon: "camera",
        title: "CCTV Surveillance",
        description: "24/7 camera monitoring across all campus areas for complete security",
        color: "primary"
    },
    {
        icon: "sparkles",
        title: "Hygienic Environment",
        description: "Regular sanitization and cleanliness maintained throughout",
        color: "accent"
    },
    {
        icon: "shield",
        title: "Fire Safety",
        description: "Fire extinguishers and evacuation drills conducted regularly",
        color: "secondary"
    },
    {
        icon: "medical",
        title: "First Aid Facility",
        description: "Fully equipped first aid station with trained personnel",
        color: "primary"
    },
    {
        icon: "lock",
        title: "Security Personnel",
        description: "Trained security guards stationed at all entry points",
        color: "accent"
    },
    {
        icon: "accessibility",
        title: "Accessible Campus",
        description: "Ramps and facilities for differently-abled students",
        color: "secondary"
    }
];

// Facilities Stats
export const facilitiesStats = [
    { label: "Modern Labs", value: "4+", icon: "lab" },
    { label: "Smart Classrooms", value: "10+", icon: "academic" },
    { label: "Library Books", value: "5000+", icon: "book" },
    { label: "Lab Equipment", value: "50+", icon: "equipment" }
];
