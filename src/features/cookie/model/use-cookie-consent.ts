'use client';

import { useState } from 'react';

import { CookieConsent } from '@/src/features/cookie/model/cookie-types';

import {
    ALL_COOKIE_CONSENT,
    NECESSARY_COOKIE_CONSENT,
} from '@/src/features/cookie/model/cookie-consent-presets';

import {
    getCookieConsent,
    removeCookieConsent,
    setCookieConsent,
} from '@/src/features/cookie/model/cookie-storage';

/**
 * Manages the current cookie consent state and provides actions
 * for accepting, rejecting, updating, and resetting preferences.
 */
export function useCookieConsent() {
    const [consent, setConsent] = useState<CookieConsent | null>(() => getCookieConsent());

    const saveConsent = (value: CookieConsent) => {
        setConsent(value);
        setCookieConsent(value);
    };

    const acceptAll = () => saveConsent(ALL_COOKIE_CONSENT);

    const rejectAll = () => saveConsent(NECESSARY_COOKIE_CONSENT);

    const reset = () => {
        setConsent(null);
        removeCookieConsent();
    };

    return {
        consent,
        saveConsent,
        acceptAll,
        rejectAll,
        reset,
    };
}
