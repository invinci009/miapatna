'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { navItems, ctaButton } from '@/data/navigation';
import { schoolInfo } from '@/data/leadership';

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isActive = (href: string) => {
        if (href === '/') return pathname === '/';
        return pathname.startsWith(href);
    };

    return (
        <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled
            ? 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-100'
            : 'bg-white/80 backdrop-blur-md'
            }`}>
            {/* Top Bar */}
            <div className="hidden md:block bg-gradient-to-r from-primary via-primary-700 to-primary text-white text-sm py-2">
                <div className="container mx-auto px-4 md:px-8 lg:px-16 flex justify-between items-center">
                    <div className="flex items-center gap-6">
                        <a href={`tel:${schoolInfo.contact.phone[0].replace(/\s/g, '')}`} className="flex items-center gap-2 hover:text-secondary transition-colors">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            {schoolInfo.contact.phone[0]}
                        </a>
                        <a href={`mailto:${schoolInfo.contact.email}`} className="flex items-center gap-2 hover:text-secondary transition-colors">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            {schoolInfo.contact.email}
                        </a>
                    </div>
                    <div className="flex items-center gap-4">
                        <span className="text-white/80">Follow us:</span>
                        <div className="flex gap-3">
                            <a href={schoolInfo.social.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors" aria-label="Facebook">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /></svg>
                            </a>
                            <a href={schoolInfo.social.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors" aria-label="Instagram">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
                            </a>
                            <a href={`https://wa.me/${schoolInfo.contact.whatsapp?.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors" aria-label="WhatsApp">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <nav className="container mx-auto px-4 md:px-8 lg:px-16">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 sm:gap-3 group">
                        <div className="relative flex-shrink-0">
                            <Image
                                src="/logo.png"
                                alt={schoolInfo.shortName}
                                width={56}
                                height={56}
                                className="w-10 h-10 sm:w-11 sm:h-11 md:w-14 md:h-14 rounded-xl shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300 object-contain"
                            />
                        </div>
                        <div className="min-w-0">
                            <h1 className="text-sm sm:text-base md:text-xl font-heading font-bold bg-gradient-to-r from-primary to-primary-focus bg-clip-text text-transparent leading-tight">
                                {schoolInfo.shortName}
                            </h1>
                            <p className="text-[10px] sm:text-xs text-subtle-light truncate max-w-[120px] sm:max-w-[180px] md:max-w-[200px]">
                                Healthcare Education
                            </p>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-1">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`relative px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${isActive(item.href)
                                    ? 'bg-primary text-white shadow-lg'
                                    : 'text-neutral hover:bg-primary/10 hover:text-primary'
                                    }`}
                            >
                                {item.label}
                                {isActive(item.href) && (
                                    <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-secondary rounded-full"></span>
                                )}
                            </Link>
                        ))}
                    </div>

                    {/* CTA Button & Mobile Menu Toggle */}
                    <div className="flex items-center gap-4">
                        <Link
                            href={ctaButton.href}
                            className="hidden md:flex items-center gap-2 bg-gradient-to-r from-secondary via-amber-500 to-secondary text-neutral px-6 py-3 rounded-xl font-bold text-sm shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 animate-gradient-x bg-[length:200%_auto]"
                        >
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
                            </span>
                            {ctaButton.label}
                        </Link>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="lg:hidden p-2.5 rounded-xl bg-base-100 hover:bg-primary hover:text-white transition-all duration-300"
                            aria-label="Toggle menu"
                            aria-expanded={isMobileMenuOpen}
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {isMobileMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <div className={`lg:hidden overflow-hidden transition-all duration-300 ${isMobileMenuOpen ? 'max-h-[600px] opacity-100 pb-4' : 'max-h-0 opacity-0'}`}>
                    <div className="flex flex-col gap-1 bg-white rounded-2xl p-3 shadow-lg border border-gray-100 mt-2">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={`px-4 py-3.5 rounded-xl text-sm font-medium transition-all duration-200 ${isActive(item.href)
                                    ? 'bg-gradient-to-r from-primary to-primary-focus text-white shadow-md'
                                    : 'text-neutral hover:bg-gray-50'
                                    }`}
                            >
                                {item.label}
                            </Link>
                        ))}
                        <div className="h-px bg-gray-100 my-2"></div>
                        <div className="flex items-center justify-center gap-6 py-2">
                            <a href={`tel:${schoolInfo.contact.phone[0].replace(/\s/g, '')}`} className="p-2.5 bg-gray-100 rounded-full hover:bg-primary hover:text-white transition-all">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                            </a>
                            <a href={`https://wa.me/${schoolInfo.contact.whatsapp?.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer" className="p-2.5 bg-green-100 rounded-full hover:bg-green-500 hover:text-white transition-all">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                            </a>
                            <a href={`mailto:${schoolInfo.contact.email}`} className="p-2.5 bg-gray-100 rounded-full hover:bg-primary hover:text-white transition-all">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </a>
                        </div>
                        <Link
                            href={ctaButton.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="flex items-center justify-center gap-2 bg-gradient-to-r from-secondary to-amber-500 text-neutral px-5 py-4 rounded-xl font-bold text-sm shadow-lg mt-2"
                        >
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
                            </span>
                            {ctaButton.label}
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    );
}
