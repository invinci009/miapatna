import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="min-h-[70vh] flex items-center justify-center px-4 py-16">
            <div className="text-center max-w-lg mx-auto">
                <div className="relative mb-8">
                    <div className="text-[150px] sm:text-[200px] font-heading font-bold text-primary/10 leading-none">
                        404
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-gradient-to-br from-primary to-primary-focus rounded-full p-6 shadow-2xl">
                            <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                    </div>
                </div>

                <h1 className="text-3xl sm:text-4xl font-heading font-bold text-neutral mb-4">
                    Page Not Found
                </h1>
                <p className="text-subtle-light text-lg mb-8">
                    Oops! The page you're looking for doesn't exist.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        href="/"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-primary-focus text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all"
                    >
                        Go Home
                    </Link>
                    <Link
                        href="/contact"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white border-2 border-primary text-primary px-8 py-4 rounded-xl font-bold hover:bg-primary hover:text-white transition-all"
                    >
                        Contact Us
                    </Link>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-200">
                    <p className="text-subtle-light mb-4">Or explore:</p>
                    <div className="flex flex-wrap items-center justify-center gap-3">
                        <Link href="/academics" className="text-primary hover:text-primary-700 font-medium underline underline-offset-2">
                            Courses
                        </Link>
                        <span className="text-gray-300">•</span>
                        <Link href="/admissions" className="text-primary hover:text-primary-700 font-medium underline underline-offset-2">
                            Admissions
                        </Link>
                        <span className="text-gray-300">•</span>
                        <Link href="/about" className="text-primary hover:text-primary-700 font-medium underline underline-offset-2">
                            About
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
