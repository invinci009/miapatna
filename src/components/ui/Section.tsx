import type { ReactNode } from 'react';

interface SectionProps {
    id?: string;
    title?: string;
    subtitle?: string;
    children: ReactNode;
    className?: string;
    titleClassName?: string;
    dark?: boolean;
}

export default function Section({
    id,
    title,
    subtitle,
    children,
    className = '',
    titleClassName = '',
    dark = false,
}: SectionProps) {
    return (
        <section
            id={id}
            className={`py-16 md:py-20 lg:py-24 px-4 md:px-8 lg:px-16 relative ${dark ? 'bg-neutral text-neutral-content' : ''
                } ${className}`}
        >
            <div className="container mx-auto relative z-10">
                {(title || subtitle) && (
                    <div className="text-center mb-12 md:mb-16">
                        {title && (
                            <h2
                                className={`text-3xl md:text-4xl lg:text-5xl font-heading font-bold relative inline-block ${dark ? 'text-white' : 'text-neutral'
                                    } ${titleClassName}`}
                            >
                                {title}
                                <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-full"></span>
                            </h2>
                        )}
                        {subtitle && (
                            <p
                                className={`mt-6 text-lg max-w-2xl mx-auto ${dark ? 'text-white/70' : 'text-subtle-light'
                                    }`}
                            >
                                {subtitle}
                            </p>
                        )}
                    </div>
                )}
                {children}
            </div>
        </section>
    );
}


