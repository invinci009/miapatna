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
        title: "Lab Se Practical Sikho",
        description: "Our labs have all the equipment you'll use in real hospitals - microscopes, analyzers, the works. Students spend a lot of time here doing actual tests, not just reading about them.",
        icon: "lab",
        image: "/facility-lab.png",
        features: ["Binocular Microscopes", "Hematology Analyzers", "Biochemistry Equipment"]
    },
    {
        id: "2",
        title: "Computer Lab",
        description: "Every student gets their own computer during lab hours. We use it for data entry practice, report writing, and sometimes for online classes when needed.",
        icon: "computer",
        image: "/facility-computer.png",
        features: ["High-Speed Internet", "Latest Software", "Individual Workstations"]
    },
    {
        id: "3",
        title: "Library",
        description: "Our library isn't huge, but it has all the books you'll need for your course. Previous year question papers are also available - students find those very helpful before exams.",
        icon: "library",
        image: "/facility-library.png",
        features: ["Course Books", "Reference Materials", "Previous Year Papers"]
    },
    {
        id: "4",
        title: "Online Classes Available",
        description: "We started online classes during COVID and kept them running for students who can't come daily. You can watch lectures from home if you miss a class.",
        icon: "online",
        features: ["Video Lectures", "Notes Download", "Recorded Classes"]
    },
    {
        id: "5",
        title: "Hospital Training",
        description: "We take students to partner hospitals for practical training. Nothing beats learning by actually working with patients under supervision of senior doctors.",
        icon: "clinical",
        features: ["Hospital Visits", "Hands-on Practice", "Supervised Training"]
    },
    {
        id: "6",
        title: "Project Help",
        description: "Final year students need to submit projects. Our teachers guide you through the whole process - from choosing a topic to making the report.",
        icon: "research",
        features: ["Topic Selection", "Research Guidance", "Report Writing Help"]
    },
    {
        id: "7",
        title: "Clean Classrooms",
        description: "We have AC classrooms with projectors. Nothing fancy, but comfortable enough for a full day of classes. Seats are comfortable too.",
        icon: "classroom",
        image: "/facility-classroom.png",
        features: ["Projector", "AC", "Comfortable Seating"]
    },
    {
        id: "8",
        title: "Job-Ready Certificate",
        description: "Our certificates are recognized by hospitals and labs across Bihar. Many of our students are working in good places now - that's the real proof.",
        icon: "certificate",
        features: ["Recognized Certificate", "Placement Support", "Alumni Network"]
    }
];

// Key Features
export const keyFeatures = [
    {
        id: "1",
        title: "Valid Certificate",
        description: "Our certificate is accepted in hospitals and diagnostic labs across Bihar and outside too.",
        icon: "globe"
    },
    {
        id: "2",
        title: "Trusted Since 2000",
        description: "We've been teaching for more than 20 years now. 2000+ students have graduated from here.",
        icon: "star"
    },
    {
        id: "3",
        title: "Good Teachers",
        description: "Most of our teachers have worked in hospitals. They teach from experience, not just books.",
        icon: "teacher"
    },
    {
        id: "4",
        title: "Flexible Timing",
        description: "Can't come daily? We have online classes too. Ask us about batch timings.",
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
