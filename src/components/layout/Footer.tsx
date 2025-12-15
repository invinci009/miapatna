import Link from 'next/link';
import { navItems } from '@/data/navigation';
import { schoolInfo } from '@/data/leadership';
import { courses } from '@/data/courses';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gradient-to-br from-neutral via-neutral-focus to-neutral text-neutral-content relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full -translate-x-1/2 translate-y-1/2"></div>
            </div>

            {/* Newsletter/CTA Section */}
            <div className="border-b border-white/10">
                <div className="container mx-auto px-4 md:px-8 lg:px-16 py-12 relative z-10">
                    <div className="bg-gradient-to-r from-primary/20 to-secondary/20 backdrop-blur-sm rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 border border-white/10">
                        <div className="text-center md:text-left">
                            <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-2">
                                Start Your Healthcare Journey Today
                            </h3>
                            <p className="text-white/70">Get admission updates and course information</p>
                        </div>
                        <Link
                            href="/admissions"
                            className="flex-shrink-0 bg-gradient-to-r from-secondary to-amber-400 text-neutral px-8 py-4 rounded-xl font-bold hover:shadow-xl hover:scale-105 transition-all"
                        >
                            Apply Now
                        </Link>
                    </div>
                </div>
            </div>

            {/* Main Footer */}
            <div className="container mx-auto px-4 md:px-8 lg:px-16 py-12 md:py-16 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
                    {/* Institute Info */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                                DF
                            </div>
                            <div>
                                <h3 className="text-xl font-heading font-bold text-white">
                                    {schoolInfo.shortName}
                                </h3>
                                <p className="text-xs text-white/60">
                                    Est. {schoolInfo.established}
                                </p>
                            </div>
                        </div>
                        <p className="text-white/70 text-sm leading-relaxed mb-6">
                            {schoolInfo.tagline}. Quality healthcare education with globally recognized certificates.
                        </p>

                        {/* Social Media */}
                        <div className="flex gap-3">
                            <a
                                href={schoolInfo.social.facebook}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-[#1877F2] transition-colors group"
                                aria-label="Facebook"
                            >
                                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /></svg>
                            </a>
                            <a
                                href={schoolInfo.social.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-gradient-to-br hover:from-purple-600 hover:via-pink-500 hover:to-orange-400 transition-all"
                                aria-label="Instagram"
                            >
                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
                            </a>
                            <a
                                href={schoolInfo.social.youtube}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-[#FF0000] transition-colors"
                                aria-label="YouTube"
                            >
                                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
                            </a>
                            <a
                                href={`https://wa.me/${schoolInfo.contact.whatsapp?.replace(/\D/g, '')}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-[#25D366] transition-colors"
                                aria-label="WhatsApp"
                            >
                                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-bold mb-6 text-lg flex items-center gap-2">
                            <span className="w-8 h-0.5 bg-primary rounded-full"></span>
                            Quick Links
                        </h4>
                        <ul className="space-y-3">
                            {navItems.slice(0, 6).map((item) => (
                                <li key={item.href}>
                                    <Link
                                        href={item.href}
                                        className="text-white/70 hover:text-secondary transition-colors text-sm flex items-center gap-2 group"
                                    >
                                        <svg className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Courses */}
                    <div>
                        <h4 className="text-white font-bold mb-6 text-lg flex items-center gap-2">
                            <span className="w-8 h-0.5 bg-secondary rounded-full"></span>
                            Our Courses
                        </h4>
                        <ul className="space-y-3">
                            {courses.slice(0, 5).map((course) => (
                                <li key={course.id}>
                                    <Link
                                        href={`/courses/${course.id}`}
                                        className="text-white/70 hover:text-secondary transition-colors text-sm flex items-center gap-2 group"
                                    >
                                        <svg className="w-4 h-4 text-secondary group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                        {course.shortName} ({course.duration})
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-white font-bold mb-6 text-lg flex items-center gap-2">
                            <span className="w-8 h-0.5 bg-accent rounded-full"></span>
                            Contact Us
                        </h4>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                </div>
                                <div className="text-sm text-white/70">
                                    <p>{schoolInfo.address.line1}</p>
                                    <p>{schoolInfo.address.line2}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                </div>
                                <div className="text-sm">
                                    <a href={`tel:${schoolInfo.contact.phone[0].replace(/\s/g, '')}`} className="text-white/70 hover:text-secondary transition-colors block">
                                        {schoolInfo.contact.phone[0]}
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                </div>
                                <a
                                    href={`mailto:${schoolInfo.contact.email}`}
                                    className="text-sm text-white/70 hover:text-secondary transition-colors"
                                >
                                    {schoolInfo.contact.email}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10 bg-black/20">
                <div className="container mx-auto px-4 md:px-8 lg:px-16 py-5 relative z-10">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-sm text-white/50">
                            © {currentYear} {schoolInfo.name}. All rights reserved.
                        </p>
                        <p className="text-sm text-white/50">
                            Made by{' '}
                            <a
                                href="https://ignius-olive.vercel.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gradient-to-r from-secondary via-amber-400 to-orange-400 bg-clip-text text-transparent font-bold hover:from-orange-400 hover:to-secondary transition-all"
                            >
                                Ignius Studios
                            </a>
                            {' '}with <span className="text-pink-400">♥</span>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
