'use client';

import { useEffect, useState } from 'react';
import { ChevronUp } from 'lucide-react';

import { cn } from '@/src/utils/cn';
import { scrollToTop } from '@/src/utils/scroll-to-top';

import { getButtonClasses } from '@/src/lib/design-system/button';

export default function ScrollToTopButton() {
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

    return (
        <button
            onClick={scrollToTop}
            aria-label="Przewiń na górę strony"
            title="Przewiń na górę strony"
            className={cn(
                'fixed right-4 bottom-6 flex h-12 w-12 items-center justify-center rounded-full shadow-xl md:hidden',
                isVisible ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0',
                getButtonClasses({ size: 'none', color: 'gradient' })
            )}
        >
            <ChevronUp className="h-6 w-6" aria-hidden="true" />
        </button>
    );
}
