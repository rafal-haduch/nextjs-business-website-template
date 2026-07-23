'use client';

import { useEffect } from 'react';

/**
 * Prevents the document body from scrolling while a component is active.
 *
 * Useful for modal-like components such as dialogs, drawers or mobile menus.
 * Restores the previous body overflow value when the lock is disabled
 * or the component is unmounted.
 *
 * @param enabled Determines whether scroll locking should be active.
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
