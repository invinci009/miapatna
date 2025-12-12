import { schoolInfo } from '@/data/leadership';

export default function GoogleMapEmbed() {
    return (
        <div className="relative rounded-2xl overflow-hidden shadow-xl" data-aos="fade-up">
            {/* Map */}
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.9990448553636!2d85.09!3d25.61!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDM2JzM2LjAiTiA4NcKwMDUnMjQuMCJF!5e0!3m2!1sen!2sin!4v1702400000000!5m2!1sen!2sin"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ignius Paramedical College Location"
                className="grayscale hover:grayscale-0 transition-all duration-500"
            />

            {/* Location Card Overlay */}
            <div className="absolute bottom-4 left-4 right-4 md:right-auto md:left-6 md:bottom-6 bg-white rounded-xl shadow-lg p-4 md:p-6 max-w-sm">
                <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                    </div>
                    <div>
                        <h4 className="font-bold text-neutral mb-1">Based in Patna, Bihar</h4>
                        <p className="text-sm text-subtle-light leading-relaxed">{schoolInfo.address.line1}, {schoolInfo.address.line2}</p>
                        <a
                            href={schoolInfo.googleMapsLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-primary font-semibold text-sm mt-2 hover:gap-2 transition-all"
                        >
                            Get Directions
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
