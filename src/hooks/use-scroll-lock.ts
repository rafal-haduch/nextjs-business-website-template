'use client';

import { useEffect } from 'react';

//TODO: write JSDOC
/**
 * JSDOC...
 * @param enabled
 */
export function useScrollLock(enabled: boolean) {
    useEffect(() => {
        if (!enabled) return;

        const originalOverflow = document.body.style.overflow;

        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = originalOverflow;
        };
    }, [enabled]);
}
