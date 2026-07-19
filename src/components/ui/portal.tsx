'use client';

import { useSyncExternalStore } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
    children: React.ReactNode;
}

/**
 * Renders children outside the normal React tree directly into document.body.
 *
 * Used for UI elements that must escape parent stacking/overflow contexts
 * such as modals, dialogs, tooltips, dropdowns or popovers.
 *
 * Prevents issues with z-index, overflow:hidden and scroll containers.
 * Waits for client mount to avoid SSR hydration mismatch.
 */
export function Portal({ children }: PortalProps) {
    const mounted = useSyncExternalStore(
        () => () => {},
        () => true,
        () => false
    );

    if (!mounted) return null;

    return createPortal(children, document.body);
}
