import type { ReactNode } from 'react';
import Link from 'next/link';

interface CardProps {
    title: string;
    description?: string;
    icon?: string;
    href?: string;
    color?: 'primary' | 'secondary' | 'accent';
    children?: ReactNode;
    className?: string;
}

export default function Card({
    title,
    description,
    icon,
    href,
    color = 'primary',
    children,
    className = '',
}: CardProps) {
    const colorClasses = {
        primary: 'border-primary hover:border-primary-focus',
        secondary: 'border-secondary hover:border-secondary-focus',
        accent: 'border-accent hover:border-accent-focus',
    };

    const iconBgClasses = {
        primary: 'bg-primary/10 text-primary',
        secondary: 'bg-secondary/10 text-secondary',
        accent: 'bg-accent/10 text-accent',
    };

    const buttonClasses = {
        primary: 'bg-primary hover:bg-primary-focus text-primary-content',
        secondary: 'bg-secondary hover:bg-secondary-focus text-secondary-content',
        accent: 'bg-accent hover:bg-accent-focus text-accent-content',
    };

    const content = (
        <>
            {icon && (
                <div
                    className={`w-14 h-14 rounded-xl flex items-center justify-center text-2xl mb-4 ${iconBgClasses[color]}`}
                >
                    {icon}
                </div>
            )}
            <h3 className="text-xl font-semibold text-foreground-light mb-2">{title}</h3>
            {description && (
                <p className="text-subtle-light text-sm leading-relaxed">{description}</p>
            )}
            {children}
            {href && (
                <div className="mt-4">
                    <span
                        className={`inline-block px-4 py-2 rounded-lg text-sm font-medium ${buttonClasses[color]} transition-colors`}
                    >
                        Learn More
                    </span>
                </div>
            )}
        </>
    );

    const cardClasses = `bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-b-4 ${colorClasses[color]} ${className}`;

    if (href) {
        return (
            <Link href={href} className={cardClasses}>
                {content}
            </Link>
        );
    }

    return <div className={cardClasses}>{content}</div>;
}


