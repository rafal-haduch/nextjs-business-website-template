'use client';

import { useEffect } from 'react';

interface UseEscapeKeyProps {
    enabled: boolean;
    onEscape: () => void;
}

//TODO: write JSDOC
/**
 * JSDOC...
 * @param param0
 */
export function useEscapeKey({ enabled, onEscape }: UseEscapeKeyProps) {
    useEffect(() => {
        if (!enabled) return;

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onEscape();
            }
        };

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [enabled, onEscape]);
}
