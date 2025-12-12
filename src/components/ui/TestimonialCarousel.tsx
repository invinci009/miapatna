'use client';

import { useState, useEffect } from 'react';

const testimonials = [
    {
        id: 1,
        name: 'Priya Sharma',
        course: 'BMLT Graduate',
        year: '2023',
        rating: 5,
        text: 'Ignius Paramedical College transformed my career. The practical training in pathology labs and placement support helped me secure a job at a leading diagnostic center in Patna.',
        image: '/avatar-placeholder.png',
    },
    {
        id: 2,
        name: 'Rahul Kumar',
        course: 'DMLT Graduate',
        year: '2022',
        rating: 5,
        text: 'The faculty here is exceptional. They focus on hands-on learning which prepared me well for the healthcare industry. I now work at AIIMS Patna.',
        image: '/avatar-placeholder.png',
    },
    {
        id: 3,
        name: 'Sneha Gupta',
        course: 'BPT Graduate',
        year: '2023',
        rating: 5,
        text: 'Best decision of my life! The physiotherapy program here is comprehensive. State-of-the-art equipment and caring professors made learning enjoyable.',
        image: '/avatar-placeholder.png',
    },
    {
        id: 4,
        name: 'Amit Verma',
        course: 'BOTT Graduate',
        year: '2022',
        rating: 5,
        text: 'From classroom to operation theatre - the journey was incredible. The clinical exposure at partner hospitals in Patna gave me real-world experience.',
        image: '/avatar-placeholder.png',
    },
];

export default function TestimonialCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [isAutoPlaying]);

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
        setIsAutoPlaying(false);
        setTimeout(() => setIsAutoPlaying(true), 10000);
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <div className="relative max-w-4xl mx-auto" data-aos="fade-up">
            {/* Main Testimonial Card */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 relative overflow-hidden">
                {/* Quote Icon */}
                <div className="absolute top-6 left-6 text-primary/10">
                    <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                </div>

                <div className="relative z-10">
                    {/* Stars */}
                    <div className="flex gap-1 mb-6">
                        {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                            <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                        ))}
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-lg md:text-xl text-neutral leading-relaxed mb-8 italic">
                        "{testimonials[currentIndex].text}"
                    </p>

                    {/* Author Info */}
                    <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-full overflow-hidden bg-gray-100 shadow-lg">
                            <img
                                src={testimonials[currentIndex].image}
                                alt={testimonials[currentIndex].name}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div>
                            <h4 className="font-bold text-neutral">{testimonials[currentIndex].name}</h4>
                            <p className="text-sm text-primary font-medium">{testimonials[currentIndex].course}</p>
                            <p className="text-xs text-subtle-light">Batch of {testimonials[currentIndex].year}</p>
                        </div>
                    </div>
                </div>

                {/* Background Decoration */}
                <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-primary/5 rounded-full"></div>
            </div>

            {/* Navigation Arrows */}
            <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all"
                aria-label="Previous testimonial"
            >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all"
                aria-label="Next testimonial"
            >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-8">
                {testimonials.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all ${index === currentIndex
                                ? 'bg-primary w-8'
                                : 'bg-gray-300 hover:bg-gray-400'
                            }`}
                        aria-label={`Go to testimonial ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}
