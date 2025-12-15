'use client';

import { useRouter, usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function AdmissionRibbon() {
    const router = useRouter();
    const pathname = usePathname();

    // Handle hash scrolling after navigation
    useEffect(() => {
        if (typeof window !== 'undefined' && window.location.hash === '#admission-form') {
            setTimeout(() => {
                const formElement = document.getElementById('admission-form');
                if (formElement) {
                    formElement.scrollIntoView({ behavior: 'smooth' });
                    formElement.classList.add('ring-4', 'ring-secondary/50');
                    setTimeout(() => {
                        formElement.classList.remove('ring-4', 'ring-secondary/50');
                    }, 2000);
                }
            }, 500);
        }
    }, [pathname]);

    const handleClick = () => {
        if (pathname === '/admissions') {
            // Already on admissions page - scroll to form
            const formElement = document.getElementById('admission-form');
            if (formElement) {
                formElement.scrollIntoView({ behavior: 'smooth' });
                formElement.classList.add('ring-4', 'ring-secondary/50');
                setTimeout(() => {
                    formElement.classList.remove('ring-4', 'ring-secondary/50');
                }, 2000);
            }
        } else {
            // Navigate to admissions page
            router.push('/admissions?tab=apply#admission-form');
        }
    };

    // Only show on home page
    if (pathname !== '/') {
        return null;
    }

    return (
        <>
            {/* Desktop Ribbon */}
            <button
                onClick={handleClick}
                className="fixed right-0 top-[50%] z-50 hidden md:flex items-center justify-center bg-gradient-to-b from-red-600 to-red-700 text-white py-5 px-3 shadow-2xl hover:from-red-700 hover:to-red-800 hover:scale-105 hover:shadow-[0_0_30px_rgba(220,38,38,0.4)] transition-all duration-300 cursor-pointer group rounded-l-xl border-l-4 border-t-4 border-b-4 border-red-500"
                style={{ writingMode: 'vertical-rl' }}
                aria-label="Apply for Admission"
            >
                <span className="flex items-center gap-2 text-sm font-bold tracking-wider uppercase">
                    <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400"></span>
                    </span>
                    Admission Open
                    <svg className="w-4 h-4 rotate-90 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </span>
            </button>

            {/* Mobile Ribbon - Bottom fixed, left side to avoid WhatsApp overlap */}
            <button
                onClick={handleClick}
                className="fixed bottom-24 left-4 z-40 md:hidden flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-700 text-white px-4 py-2.5 rounded-full shadow-xl transition-all duration-300"
                aria-label="Apply for Admission"
            >
                <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
                </span>
                <span className="text-xs font-bold uppercase tracking-wide">Admission Open</span>
            </button>
        </>
    );
}
