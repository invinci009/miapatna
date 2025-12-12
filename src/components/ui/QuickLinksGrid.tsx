import React from 'react';
import Link from 'next/link';
import { quickLinks } from '@/data/quickLinks';

// SVG Icons for quick links
const linkIcons: Record<string, React.ReactNode> = {
    home: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>,
    about: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    academics: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>,
    admissions: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>,
    facilities: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>,
    contact: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
    gallery: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>,
    info: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
};

const defaultIcon = <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>;

const colorClasses = {
    primary: {
        bg: 'bg-primary',
        bgLight: 'bg-primary/10',
        text: 'text-primary',
        hover: 'hover:bg-primary-700',
        border: 'border-primary',
        gradient: 'from-primary to-blue-400',
    },
    secondary: {
        bg: 'bg-secondary',
        bgLight: 'bg-secondary/10',
        text: 'text-secondary-600',
        hover: 'hover:bg-secondary-600',
        border: 'border-secondary',
        gradient: 'from-secondary to-amber-400',
    },
    accent: {
        bg: 'bg-accent',
        bgLight: 'bg-accent/10',
        text: 'text-accent',
        hover: 'hover:bg-accent-700',
        border: 'border-accent',
        gradient: 'from-accent to-emerald-400',
    },
};

export default function QuickLinksGrid() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {quickLinks.map((link, index) => {
                const colors = colorClasses[link.color];
                const icon = linkIcons[link.icon] || defaultIcon;

                return (
                    <Link
                        key={link.id}
                        href={link.href}
                        className="group bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden"
                        style={{ animationDelay: `${index * 100}ms` }}
                    >
                        {/* Top Gradient Line */}
                        <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${colors.gradient}`}></div>

                        {/* Background Circle */}
                        <div className={`absolute -right-8 -bottom-8 w-32 h-32 ${colors.bgLight} rounded-full opacity-50 group-hover:scale-150 transition-transform duration-500`}></div>

                        <div className="relative">
                            {/* Icon */}
                            <div className={`w-14 h-14 ${colors.bgLight} rounded-xl flex items-center justify-center mb-4 ${colors.text} group-hover:scale-110 transition-transform`}>
                                {icon}
                            </div>

                            <h3 className={`text-xl font-bold text-neutral mb-2 group-hover:${colors.text} transition-colors`}>
                                {link.title}
                            </h3>
                            <p className="text-sm text-subtle-light mb-4">{link.description}</p>

                            <span
                                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm text-white transition-all ${colors.bg} ${colors.hover} group-hover:gap-3`}
                            >
                                Explore
                                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                            </span>
                        </div>
                    </Link>
                );
            })}
        </div>
    );
}


