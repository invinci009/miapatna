import Link from 'next/link';
import type { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'accent' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    children: ReactNode;
    icon?: ReactNode;
    href?: string;
    external?: boolean;
    loading?: boolean;
    pulse?: boolean;
}

const variants = {
    primary: 'bg-primary text-white hover:bg-primary-700 shadow-lg hover:shadow-xl',
    secondary: 'bg-gradient-to-r from-secondary to-amber-400 text-slate-900 shadow-lg hover:shadow-xl',
    accent: 'bg-accent text-white hover:bg-accent-700 shadow-lg hover:shadow-xl',
    outline: 'bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white',
    ghost: 'bg-transparent text-slate-700 hover:bg-slate-100'
};

const sizes = {
    sm: 'px-4 py-2 text-sm rounded-lg',
    md: 'px-6 py-3 text-sm rounded-xl',
    lg: 'px-8 py-4 text-base rounded-xl'
};

export default function Button({
    variant = 'primary',
    size = 'md',
    children,
    icon,
    href,
    external,
    loading,
    pulse,
    className = '',
    disabled,
    ...props
}: ButtonProps) {
    const baseClasses = `
        inline-flex items-center justify-center gap-2.5
        font-bold
        transition-all duration-300
        hover:scale-[1.03]
        disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
        focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2
    `;

    const buttonClasses = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

    const content = (
        <>
            {loading && (
                <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
            )}
            {pulse && !loading && (
                <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-current opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-current" />
                </span>
            )}
            {icon && !loading && icon}
            {children}
        </>
    );

    // If href is provided, render as Link
    if (href) {
        if (external) {
            return (
                <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={buttonClasses}
                >
                    {content}
                </a>
            );
        }
        return (
            <Link href={href} className={buttonClasses}>
                {content}
            </Link>
        );
    }

    return (
        <button
            className={buttonClasses}
            disabled={disabled || loading}
            {...props}
        >
            {content}
        </button>
    );
}


