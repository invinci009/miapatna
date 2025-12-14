'use client';
import { useState } from 'react';
import Section from '@/components/ui/Section';

export default function Gallery() {
    const [activeCategory, setActiveCategory] = useState('all');

    // TODO: Replace placeholder images with actual MIA gallery images
    const categories = [
        { id: 'all', label: 'All' },
        { id: 'campus', label: 'Campus' },
        { id: 'events', label: 'Events' },
        { id: 'sports', label: 'Sports' },
        { id: 'classrooms', label: 'Classrooms' },
        { id: 'labs', label: 'Labs' },
    ];

    // Placeholder gallery items
    const galleryItems = [
        { id: 1, category: 'campus', icon: '🏫', title: 'School Building' },
        { id: 2, category: 'events', icon: '🎊', title: 'Annual Day Celebration' },
        { id: 3, category: 'sports', icon: '🏆', title: 'Sports Day' },
        { id: 4, category: 'classrooms', icon: '📚', title: 'Smart Classroom' },
        { id: 5, category: 'labs', icon: '🔬', title: 'Science Lab' },
        { id: 6, category: 'events', icon: '🎭', title: 'Cultural Program' },
        { id: 7, category: 'campus', icon: '🌳', title: 'School Garden' },
        { id: 8, category: 'sports', icon: '⚽', title: 'Football Match' },
        { id: 9, category: 'labs', icon: '💻', title: 'Computer Lab' },
        { id: 10, category: 'classrooms', icon: '✏️', title: 'Art Class' },
        { id: 11, category: 'events', icon: '🎓', title: 'Prize Distribution' },
        { id: 12, category: 'campus', icon: '📖', title: 'Library' },
        { id: 13, category: 'sports', icon: '🏸', title: 'Badminton' },
        { id: 14, category: 'events', icon: '🇮🇳', title: 'Independence Day' },
        { id: 15, category: 'labs', icon: '🧪', title: 'Chemistry Experiment' },
        { id: 16, category: 'campus', icon: '🚌', title: 'School Transport' },
    ];

    const filteredItems = activeCategory === 'all'
        ? galleryItems
        : galleryItems.filter(item => item.category === activeCategory);

    return (
        <>
            {/* Page Hero - Creative green with clean white frames */}
            <div className="relative bg-accent overflow-hidden py-20 md:py-28">
                {/* White frame elements - representing photos */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-8 left-[8%] w-16 h-20 bg-white/15 rounded shadow-lg rotate-[-8deg]"></div>
                    <div className="absolute top-12 right-[10%] w-14 h-18 bg-white/15 rounded shadow-lg rotate-[10deg]"></div>
                    <div className="absolute bottom-16 left-[15%] w-20 h-24 bg-white/15 rounded shadow-lg rotate-[5deg]"></div>
                    <div className="absolute bottom-12 right-[18%] w-16 h-20 bg-white/15 rounded shadow-lg rotate-[-6deg]"></div>
                </div>

                {/* Concentric circles - camera lens effect */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10">
                    <div className="w-[400px] h-[400px] rounded-full border-[3px] border-white"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full border-[2px] border-white"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] rounded-full border-[2px] border-white"></div>
                </div>

                <div className="container mx-auto px-4 md:px-8 lg:px-16 text-center relative z-10">
                    <div className="inline-flex items-center gap-2 mb-4 px-5 py-2 bg-white/15 backdrop-blur-sm rounded-full border border-white/25">
                        <span className="text-white text-sm font-medium">Campus Memories</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-4">
                        Photo Gallery
                    </h1>
                    <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto font-light">
                        Glimpses of campus life, events, and activities at MIA
                    </p>
                </div>
            </div>

            {/* Category Filters */}
            <div className="bg-white border-b border-base-200 sticky top-16 md:top-20 z-40">
                <div className="container mx-auto px-4">
                    <div className="flex overflow-x-auto gap-2 py-4">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setActiveCategory(category.id)}
                                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${activeCategory === category.id
                                    ? 'bg-accent text-white'
                                    : 'bg-base-200 text-subtle-light hover:bg-base-300'
                                    }`}
                            >
                                {category.label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Gallery Grid */}
            <Section>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {filteredItems.map((item) => (
                        <div
                            key={item.id}
                            className="group relative aspect-square bg-gradient-to-br from-accent/10 to-emerald-100 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
                        >
                            {/* Placeholder icon */}
                            <div className="absolute inset-0 flex items-center justify-center text-6xl opacity-30 group-hover:opacity-50 group-hover:scale-110 transition-all duration-300">
                                {item.icon}
                            </div>

                            {/* Hover overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                                <div className="p-4 w-full">
                                    <p className="text-white text-sm font-medium">{item.title}</p>
                                    <p className="text-white/70 text-xs capitalize">{item.category}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {filteredItems.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-subtle-light">No photos in this category yet.</p>
                    </div>
                )}
            </Section>

            {/* Note about placeholders */}
            <Section className="bg-base-200">
                <div className="max-w-2xl mx-auto text-center">
                    <div className="bg-white rounded-2xl p-8 shadow-lg">
                        <h3 className="text-xl font-bold text-neutral mb-3">Placeholder Gallery</h3>
                        <p className="text-subtle-light">
                            This gallery currently shows placeholder content. Actual photos of MIA campus,
                            events, and activities will be added here. Each image will be replaced with
                            real photographs from the school.
                        </p>
                    </div>
                </div>
            </Section>
        </>
    );
}
