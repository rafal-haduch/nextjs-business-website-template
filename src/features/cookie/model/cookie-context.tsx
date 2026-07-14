'use client';

import { createContext } from 'react';

import { CookieConsent } from '@/src/features/cookie/model/use-cookie-consent';

interface CookieContextValue {
    /**
     * Current user's cookie consent choice.
     * Persisted in local storage.
     */
    consent: CookieConsent | null;

    /**
     * Indicates whether the initial consent value has been loaded from local storage*.
     * Prevents UI components from flickering before the stored value is available.
     */
    isReady: boolean;

    acceptAll(): void;
    rejectAll(): void;
    saveConsent(value: CookieConsent): void;

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
