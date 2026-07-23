'use client';

import { useEffect } from 'react';

interface UseEscapeKeyProps {
    enabled: boolean;
    onEscape: () => void;
}

/**
 * Executes a callback when the Escape key is pressed.
 *
 * Adds a global keyboard listener while enabled and automatically
 * removes it when disabled or when the component is unmounted.
 *
 * Commonly used for closing dialogs, drawers and other overlay components.
 *
 * @param enabled Controls whether the Escape key listener is active.
 * @param onEscape Callback executed when Escape is pressed.
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
