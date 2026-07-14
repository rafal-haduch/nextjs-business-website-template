'use client';

import { useState } from 'react';

/**
 * Provides reusable state management for UI elements that can be opened and closed.
 */
export function useDisclosure(defaultOpen = false) {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    const open = () => setIsOpen(true);

    const close = () => setIsOpen(false);

    const toggle = () => setIsOpen((v) => !v);

    return {
        isOpen,
        open,
        close,
        toggle,
    };
}
