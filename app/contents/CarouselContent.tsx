'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function CarouselContent() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const slides = [
        {
            image: '/images/camp/camp1.jpg',
            title: 'Premium Glamping',
            subtitle: 'Luxury camping in untouched nature',
            description: 'Experience comfort surrounded by pristine forests'
        },
        {
            image: '/images/camp/camp2.jpg',
            title: 'Mountain View',
            subtitle: 'Breathtaking landscapes',
            description: 'Wake up to stunning mountain vistas'
        },
        {
            image: '/images/camp/camp3.jpg',
            title: 'Silence Of Nature',
            subtitle: 'Peaceful Retreat',
            description: 'Unplug and unwind in serene surroundings'
        },
        {
            image: '/images/camp/camp4.jpg',
            title: 'Morning Cooking',
            subtitle: 'Campfire Cuisine',
            description: 'Cook delicious meals in the great outdoors'
        },
    ];

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
    };

    useEffect(() => {
        const timer = setInterval(nextSlide, 5000);
        return () => clearInterval(timer);
    }, [currentIndex]);

    return (
        <div className="relative mx-auto rounded-2xl overflow-hidden shadow-2xl group">
            <div className="md:h-[600px] bg-gray-800">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-all duration-700 ${index === currentIndex
                                ? 'opacity-100'
                                : 'opacity-0'
                            }`}
                    >
                        <Image
                            src={slide.image}
                            alt={slide.title}
                            fill
                            className="object-cover"
                            sizes="100vw"
                            priority={index === 0}
                        />

                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                        {/* Text Content */}
                        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white">
                            <div className="max-w-3xl">
                                <span className="text-sm md:text-base font-semibold text-emerald-300 mb-2 block">
                                    {slide.subtitle}
                                </span>
                                <h3 className="text-3xl md:text-5xl font-bold mb-4">
                                    {slide.title}
                                </h3>
                                <p className="text-lg md:text-xl text-gray-200 mb-6">
                                    {slide.description}
                                </p>
                                <button className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-lg transition-colors duration-300">
                                    Learn More
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <button
                onClick={prevSlide}
                className="absolute left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all opacity-0 group-hover:opacity-100"
                aria-label="Previous slide"
            >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            </button>

            <button
                onClick={nextSlide}
                className="absolute right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all opacity-0 group-hover:opacity-100"
                aria-label="Next slide"
            >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`transition-all duration-300 ${index === currentIndex
                                ? 'bg-white w-10 h-2 rounded-lg'
                                : 'bg-white/40 w-3 h-3 rounded-full hover:bg-white/60'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

            <div className="absolute top-6 right-6 bg-black/40 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm">
                <span className="font-bold">{currentIndex + 1}</span>
                <span className="mx-2">/</span>
                <span>{slides.length}</span>
            </div>
        </div>
    );
}