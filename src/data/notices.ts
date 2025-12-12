// Ignius Paramedical College - Notices & Announcements

export interface Notice {
    id: string;
    title: string;
    description: string;
    date: string;
    category: 'academic' | 'event' | 'general' | 'important';
}

export const notices: Notice[] = [
    {
        id: "1",
        title: "Admissions Open for 2025-26 Session",
        description: "New admissions are now open for DMLT, X-Ray Technician, OTT, and Nursing Assistant courses. Limited seats available.",
        date: "2025-04-01",
        category: "important"
    },
    {
        id: "2",
        title: "DMLT 2nd Year Practical Exam",
        description: "DMLT 2nd-year practical exam scheduled on 18 Feb 2025. All students must report with ID cards.",
        date: "2025-02-18",
        category: "academic"
    },
    {
        id: "3",
        title: "Republic Day Holiday",
        description: "Institute will remain closed on 26th January for Republic Day celebration.",
        date: "2025-01-26",
        category: "general"
    },
    {
        id: "4",
        title: "New Batch Announcement",
        description: "New session starts in July 2025. Form availability from April to June. Limited seats in DMLT & X-Ray Technician courses.",
        date: "2025-03-15",
        category: "important"
    },
    {
        id: "5",
        title: "Hospital Training Schedule",
        description: "Clinical training schedule for this semester has been updated. Check with your course coordinator.",
        date: "2025-01-10",
        category: "academic"
    }
];

// Holiday List
export const holidays = [
    { name: "Republic Day", date: "26 January" },
    { name: "Holi", date: "March (Date varies)" },
    { name: "Independence Day", date: "15 August" },
    { name: "Gandhi Jayanti", date: "2 October" },
    { name: "Eid-ul-Fitr", date: "Date varies" },
    { name: "Diwali", date: "October/November" },
    { name: "Christmas", date: "25 December" }
];

// Important Dates for Admissions
export const admissionDates = {
    formAvailability: "April – June",
    sessionStart: "July every year",
    lastDateSubmission: "June 30"
};
