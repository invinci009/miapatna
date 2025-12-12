'use client';

import { useState } from 'react';
import Link from 'next/link';

const galleryImages = [
    { id: 1, src: '/gallery/lab-1.jpg', title: 'Laboratory', category: 'Facilities' },
    { id: 2, src: '/gallery/classroom-1.jpg', title: 'Classroom', category: 'Academics' },
    { id: 3, src: '/gallery/students-1.jpg', title: 'Students', category: 'Campus Life' },
    { id: 4, src: '/gallery/events-1.jpg', title: 'Events', category: 'Events' },
    { id: 5, src: '/gallery/lab-2.jpg', title: 'Practical Training', category: 'Facilities' },
    { id: 6, src: '/gallery/campus-1.jpg', title: 'Campus View', category: 'Campus Life' },
];

export default function GalleryPreview() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <div className="space-y-8">
            {/* Masonry-style Gallery Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {galleryImages.map((image, index) => (
                    <div
                        key={image.id}
                        className={`relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 cursor-pointer group transition-all duration-500 ${index === 0 || index === 3 ? 'md:row-span-2 aspect-[3/4]' : 'aspect-square'
                            }`}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        {/* Placeholder gradient background */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${index % 6 === 0 ? 'from-primary/20 to-primary/40' :
                                index % 6 === 1 ? 'from-gray-200 to-gray-300' :
                                    index % 6 === 2 ? 'from-primary/10 to-gray-200' :
                                        index % 6 === 3 ? 'from-gray-300 to-gray-400' :
                                            index % 6 === 4 ? 'from-primary/15 to-primary/30' :
                                                'from-gray-200 to-primary/20'
                            }`} />

                        {/* Icon placeholder */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-16 h-16 rounded-full bg-white/50 flex items-center justify-center text-primary/50 group-hover:scale-110 transition-transform">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </div>
                        </div>

                        {/* Hover overlay */}
                        <div className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent transition-all duration-300 ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                            }`}>
                            <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform transition-transform duration-300">
                                <span className="text-xs font-medium text-white/70 uppercase tracking-wider">{image.category}</span>
                                <h4 className="text-lg font-bold">{image.title}</h4>
                            </div>
                        </div>

                        {/* Subtle border */}
                        <div className="absolute inset-0 border border-gray-200 rounded-2xl pointer-events-none" />
                    </div>
                ))}
            </div>

            {/* View All Button */}
            <div className="text-center">
                <Link
                    href="/gallery"
                    className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-primary-focus hover:scale-105 transition-all shadow-lg group"
                >
                    <span>View Full Gallery</span>
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </Link>
            </div>
        </div>
    );
}
