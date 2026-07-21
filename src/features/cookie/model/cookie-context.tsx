'use client';

import { createContext } from 'react';

import { CookieConsent } from '@/src/features/cookie/model/cookie-types';

interface CookieContextValue {
    /**
     * Current user's cookie consent choice.
     */
    consent: CookieConsent | null;

    saveConsent(value: CookieConsent): void;
    acceptAll(): void;
    rejectAll(): void;
    reset(): void;

    /**
     * Controls visibility of the cookie options modal.
     */
    isPreferencesOpen: boolean;

    openPreferences(): void;
    closePreferences(): void;
}

/**
 * Context for sharing cookie consent state and related actions.
 */
export const CookieContext = createContext<CookieContextValue | null>(null);
