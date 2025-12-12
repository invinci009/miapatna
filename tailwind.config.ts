import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: "#1e40af",
                    50: "#eff6ff",
                    100: "#dbeafe",
                    200: "#bfdbfe",
                    300: "#93c5fd",
                    400: "#60a5fa",
                    500: "#3b82f6",
                    600: "#2563eb",
                    700: "#1d4ed8",
                    800: "#1e40af",
                    900: "#1e3a8a",
                },
                "primary-focus": "#1e3a8a",
                "primary-content": "#ffffff",
                secondary: {
                    DEFAULT: "#f59e0b",
                    50: "#fffbeb",
                    100: "#fef3c7",
                    200: "#fde68a",
                    300: "#fcd34d",
                    400: "#fbbf24",
                    500: "#f59e0b",
                    600: "#d97706",
                    700: "#b45309",
                    800: "#92400e",
                    900: "#78350f",
                },
                "secondary-focus": "#d97706",
                "secondary-content": "#1f2937",
                accent: {
                    DEFAULT: "#059669",
                    50: "#ecfdf5",
                    100: "#d1fae5",
                    200: "#a7f3d0",
                    300: "#6ee7b7",
                    400: "#34d399",
                    500: "#10b981",
                    600: "#059669",
                    700: "#047857",
                    800: "#065f46",
                    900: "#064e3b",
                },
                "accent-focus": "#047857",
                "accent-content": "#ffffff",
                neutral: "#1f2937",
                "neutral-focus": "#111827",
                "neutral-content": "#ffffff",
                "base-100": "#f8fafc",
                "base-200": "#e2e8f0",
                "base-300": "#cbd5e1",
                "base-content": "#1e293b",
                info: "#3b82f6",
                success: "#22c55e",
                warning: "#eab308",
                error: "#ef4444",
                "background-light": "#f1f5f9",
                "background-dark": "#0f172a",
                "foreground-light": "#1e293b",
                "foreground-dark": "#f8fafc",
                "subtle-light": "#64748b",
                "subtle-dark": "#94a3b8"
            },
            fontFamily: {
                display: ["Inter", "system-ui", "sans-serif"],
                heading: ["Poppins", "sans-serif"]
            },
            borderRadius: {
                DEFAULT: "0.75rem",
                lg: "1rem",
                xl: "1.5rem",
                "2xl": "2rem",
                "3xl": "2.5rem",
                full: "9999px"
            },
            boxShadow: {
                soft: "0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)",
                glow: "0 0 40px rgba(30, 64, 175, 0.15)",
                "glow-lg": "0 0 60px rgba(30, 64, 175, 0.25)",
                card: "0 10px 40px -10px rgba(0, 0, 0, 0.1)",
                "card-hover": "0 20px 60px -15px rgba(0, 0, 0, 0.2)",
                "inner-glow": "inset 0 2px 20px 0 rgba(255, 255, 255, 0.5)",
            },
            keyframes: {
                float: {
                    "0%, 100%": { transform: "translateY(0px)" },
                    "50%": { transform: "translateY(-20px)" }
                },
                "fade-in-up": {
                    "0%": { opacity: "0", transform: "translateY(20px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" }
                },
                "bounce-slow": {
                    "0%, 100%": { transform: "translateY(0)" },
                    "50%": { transform: "translateY(-6px)" }
                },
                "gradient-x": {
                    "0%, 100%": { backgroundPosition: "0% 50%" },
                    "50%": { backgroundPosition: "100% 50%" }
                }
            },
            animation: {
                float: "float 6s ease-in-out infinite",
                "fade-in-up": "fade-in-up 0.6s ease-out forwards",
                "bounce-slow": "bounce-slow 3s ease-in-out infinite",
                "gradient-x": "gradient-x 3s ease infinite",
            },
        }
    },
    plugins: [],
};

export default config;
