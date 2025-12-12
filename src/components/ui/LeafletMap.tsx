'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { schoolInfo } from '@/data/leadership';

// Leaflet CSS needs to be imported in globals.css or here
export default function LeafletMap() {
    const [Map, setMap] = useState<React.ComponentType<any> | null>(null);

    useEffect(() => {
        // Dynamic import for Leaflet (SSR-safe)
        import('react-leaflet').then((mod) => {
            import('leaflet').then((L) => {
                // Fix default marker icons
                delete (L.Icon.Default.prototype as any)._getIconUrl;
                L.Icon.Default.mergeOptions({
                    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
                    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
                    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
                });
            });
            setMap(() => MapComponent);
        });
    }, []);

    // Patna coordinates (approximate for the college location)
    const position: [number, number] = [25.5941, 85.1376];

    if (!Map) {
        return (
            <div className="bg-gray-100 rounded-2xl h-[400px] flex items-center justify-center">
                <div className="text-center">
                    <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-3"></div>
                    <p className="text-subtle-light">Loading map...</p>
                </div>
            </div>
        );
    }

    return <Map position={position} />;
}

// Separate component to avoid SSR issues
function MapComponent({ position }: { position: [number, number] }) {
    const { MapContainer, TileLayer, Marker, Popup } = require('react-leaflet');

    return (
        <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <link
                rel="stylesheet"
                href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
                integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
                crossOrigin=""
            />
            <MapContainer
                center={position}
                zoom={14}
                scrollWheelZoom={false}
                style={{ height: '400px', width: '100%' }}
                className="z-0"
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                    <Popup>
                        <div className="text-center p-2">
                            <h4 className="font-bold text-primary mb-1">Ignius Paramedical College</h4>
                            <p className="text-sm text-gray-600 mb-2">{schoolInfo.address.line1}</p>
                            <a
                                href={schoolInfo.googleMapsLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary text-sm font-medium hover:underline"
                            >
                                Get Directions →
                            </a>
                        </div>
                    </Popup>
                </Marker>
            </MapContainer>

            {/* Location Card Overlay */}
            <div className="absolute bottom-4 left-4 right-4 md:right-auto md:left-6 md:bottom-6 bg-white rounded-xl shadow-lg p-4 md:p-5 max-w-sm z-[1000]">
                <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                    </div>
                    <div>
                        <h4 className="font-bold text-neutral mb-1">Visit Our Campus</h4>
                        <p className="text-sm text-subtle-light leading-relaxed">{schoolInfo.address.line1}, {schoolInfo.address.city}</p>
                        <div className="flex gap-3 mt-3">
                            <a
                                href={schoolInfo.googleMapsLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary font-semibold text-sm hover:underline"
                            >
                                Directions
                            </a>
                            <Link
                                href="/admissions"
                                className="text-accent font-semibold text-sm hover:underline"
                            >
                                Apply Now
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
