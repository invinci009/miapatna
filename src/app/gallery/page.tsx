import { Metadata } from 'next';
import { schoolInfo } from '@/data/leadership';

export const metadata: Metadata = {
    title: 'Gallery',
    description: 'View photos of our campus, events, and student activities at Ignius Paramedical College.',
};

const galleryImages = [
    { id: 1, title: 'Campus View', category: 'Campus' },
    { id: 2, title: 'Laboratory', category: 'Facilities' },
    { id: 3, title: 'Classroom', category: 'Academic' },
    { id: 4, title: 'Library', category: 'Facilities' },
    { id: 5, title: 'Computer Lab', category: 'Facilities' },
    { id: 6, title: 'Student Activity', category: 'Events' },
];

export default function Gallery() {
    return (
        <>
            {/* Page Hero */}
            <div className="bg-gradient-to-br from-purple-600 to-primary py-16 md:py-24">
                <div className="container mx-auto px-4 md:px-8 lg:px-16 text-center">
                    <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
                        Photo Gallery
                    </h1>
                    <p className="text-white/80 text-lg max-w-2xl mx-auto">
                        Explore our campus, events, and student activities
                    </p>
                </div>
            </div>

            {/* Gallery Grid */}
            <section className="py-16">
                <div className="container mx-auto px-4 md:px-8 lg:px-16">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {galleryImages.map((image, index) => (
                            <div key={image.id} className={`relative group rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all h-64 bg-gradient-to-br ${index % 3 === 0 ? 'from-primary/20 to-primary/40' :
                                    index % 3 === 1 ? 'from-secondary/20 to-secondary/40' : 'from-accent/20 to-accent/40'
                                }`}>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-center">
                                        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <h3 className="text-white font-bold text-lg">{image.title}</h3>
                                        <span className="text-white/70 text-sm">{image.category}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <p className="text-subtle-light mb-4">More photos coming soon!</p>
                        <a
                            href={schoolInfo.social.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-xl font-bold hover:shadow-lg transition-all"
                        >
                            Follow us on Instagram
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
