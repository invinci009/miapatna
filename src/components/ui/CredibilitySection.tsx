import { schoolInfo } from '@/data/leadership';

// Credibility badges and accreditations
const accreditations = [
    { name: 'UGC Recognized', icon: 'shield' },
    { name: 'BCI Affiliated', icon: 'certificate' },
    { name: 'QS Rated', icon: 'star' },
    { name: 'AIU Member', icon: 'globe' }
];

const stats = [
    { value: '2000+', label: 'Students Trained', icon: 'users' },
    { value: '6+', label: 'Programs Offered', icon: 'book' },
    { value: '24+', label: 'Years of Excellence', icon: 'clock' },
    { value: '100%', label: 'Job Focused', icon: 'briefcase' }
];

const testimonials = [
    {
        id: 1,
        text: "The faculty is incredibly supportive and knowledgeable. They truly care about our success and future.",
        name: "Rahul Kumar",
        course: "BMLT Graduate",
        rating: 5
    },
    {
        id: 2,
        text: "Industry-relevant training that prepared me for real-world challenges in healthcare.",
        name: "Priya Singh",
        course: "DMLT Graduate",
        rating: 5
    },
    {
        id: 3,
        text: "The practical lab sessions and hands-on experience gave me confidence for my career.",
        name: "Amit Sharma",
        course: "BOTT Graduate",
        rating: 5
    }
];

// Icon components
const Icons = {
    shield: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
    certificate: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>,
    star: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>,
    globe: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>,
    users: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
    book: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>,
    clock: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    briefcase: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
    quote: <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
};

export default function CredibilitySection() {
    return (
        <div className="py-16 bg-slate-50">
            <div className="container mx-auto px-4 md:px-8 lg:px-16">
                {/* Accreditation Badges */}
                <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-16">
                    {accreditations.map((item, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-3 bg-white px-5 py-3 rounded-full shadow-md border border-slate-100 hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
                        >
                            <span className="text-primary">{Icons[item.icon as keyof typeof Icons]}</span>
                            <span className="font-semibold text-slate-700 text-sm">{item.name}</span>
                        </div>
                    ))}
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl p-6 text-center shadow-lg border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                        >
                            <div className="text-primary mb-3 flex justify-center">
                                {Icons[stat.icon as keyof typeof Icons]}
                            </div>
                            <div className="text-3xl md:text-4xl font-bold text-slate-900 mb-1">
                                {stat.value}
                            </div>
                            <p className="text-slate-500 text-sm font-medium">{stat.label}</p>
                        </div>
                    ))}
                </div>

                {/* Registration Info */}
                <div className="bg-gradient-to-r from-primary to-indigo-700 rounded-2xl p-6 md:p-8 text-white text-center mb-16">
                    <h3 className="text-xl md:text-2xl font-bold mb-2">Government Recognized Institution</h3>
                    <p className="text-white/80 mb-4">
                        {schoolInfo.name} is a registered educational institution under {schoolInfo.affiliation}
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 text-sm">
                        {schoolInfo.recognitions?.slice(0, 3).map((rec, index) => (
                            <span key={index} className="bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm">
                                {rec}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Testimonials */}
                <div className="text-center mb-10">
                    <h2 className="text-2xl md:text-3xl font-heading font-bold text-slate-900 mb-3">
                        What Our Students Say
                    </h2>
                    <p className="text-slate-500 max-w-2xl mx-auto">
                        Hear from our graduates who have transformed their careers through our programs
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {testimonials.map((testimonial) => (
                        <div
                            key={testimonial.id}
                            className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300"
                        >
                            <div className="text-primary/20 mb-4">{Icons.quote}</div>
                            <p className="text-slate-600 mb-6 leading-relaxed italic">
                                "{testimonial.text}"
                            </p>
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 bg-gradient-to-br from-primary to-indigo-600 rounded-full flex items-center justify-center text-white font-bold">
                                    {testimonial.name.charAt(0)}
                                </div>
                                <div>
                                    <p className="font-bold text-slate-900">{testimonial.name}</p>
                                    <p className="text-sm text-slate-500">{testimonial.course}</p>
                                </div>
                            </div>
                            {/* Star Rating */}
                            <div className="flex gap-1 mt-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <svg key={i} className="w-4 h-4 text-secondary fill-current" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}


