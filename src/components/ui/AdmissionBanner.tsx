'use client';

import Link from 'next/link';

interface AdmissionBannerProps {
    variant?: 'full' | 'compact' | 'floating';
}

export default function AdmissionBanner({ variant = 'full' }: AdmissionBannerProps) {
    if (variant === 'floating') {
        return (
            <div className="fixed bottom-20 right-4 z-40 animate-fade-in-up hidden md:block">
                <Link
                    href="/admissions"
                    className="flex items-center gap-3 bg-gradient-to-r from-primary to-primary-focus text-white px-5 py-3 rounded-full shadow-2xl hover:shadow-3xl hover:scale-105 transition-all group"
                >
                    <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-400"></span>
                    </span>
                    <span className="font-bold">Admissions Open 2025</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </Link>
            </div>
        );
    }

    if (variant === 'compact') {
        return (
            <div className="bg-gradient-to-r from-primary via-primary-focus to-primary py-3 px-4">
                <div className="container mx-auto flex flex-col sm:flex-row items-center justify-center gap-3 text-white">
                    <div className="flex items-center gap-2">
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400"></span>
                        </span>
                        <span className="font-semibold text-sm">Admissions Open for 2025-26 Session</span>
                    </div>
                    <Link
                        href="/admissions"
                        className="bg-white text-primary px-4 py-1.5 rounded-full text-sm font-bold hover:bg-gray-100 transition-all"
                    >
                        Apply Now →
                    </Link>
                </div>
            </div>
        );
    }

    // Full variant
    return (
        <div className="bg-gradient-to-r from-accent via-accent-focus to-accent py-8 md:py-12 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-white rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 md:px-8 lg:px-16 relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="text-center md:text-left text-white">
                        <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                            </span>
                            <span className="text-sm font-medium text-white/90">Limited Seats Available</span>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold mb-2">Admissions Open for 2025-26</h3>
                        <p className="text-white/80">BMLT, DMLT, BPT, BOTT & more courses. Apply before seats fill up!</p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3">
                        <Link
                            href="/admissions"
                            className="bg-white text-accent px-8 py-4 rounded-xl font-bold text-center hover:bg-gray-100 hover:scale-105 transition-all shadow-lg"
                        >
                            Apply Online Now
                        </Link>
                        <a
                            href="tel:+916205708606"
                            className="bg-white/20 backdrop-blur-sm text-white border-2 border-white/50 px-8 py-4 rounded-xl font-bold text-center hover:bg-white/30 transition-all"
                        >
                            Call: +91 620 570 8606
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
