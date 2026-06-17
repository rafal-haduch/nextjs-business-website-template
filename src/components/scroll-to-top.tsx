'use client';

import { useEffect, useState } from 'react';
import { ChevronUp } from 'lucide-react';

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    // Show/hide button while scroll
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    // Scroll to top
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <button
            onClick={scrollToTop}
            aria-label="Przewiń na górę strony"
            title="Przewiń na górę strony"
            className={`bg-brand-primary hover:bg-brand-300 fixed right-4 bottom-6 z-40 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full text-white shadow-lg transition-all duration-300 md:hidden ${
                isVisible
                    ? 'pointer-events-auto scale-100 opacity-100'
                    : 'pointer-events-none scale-75 opacity-0'
            }`}
        >
            <ChevronUp className="h-6 w-6" aria-hidden="true" />
        </button>
    );
}
