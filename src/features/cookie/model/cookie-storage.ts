import { CookieConsent } from '@/src/features/cookie/model/cookie-types';

import { parseCookieConsent } from '@/src/features/cookie/utils/parse-cookie-consent';

const COOKIE_CONSENT_STORAGE_KEY = 'cookie-consent';

/**
 * Retrieves the current cookie consent from persistent storage.
 *
 * Returns null when no valid consent exists
 * or when the code is executed on the server.
 */
export function getCookieConsent(): CookieConsent | null {
    if (typeof window === 'undefined') return null;

    const stored = localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY);

    return stored ? parseCookieConsent(stored) : null;
}

/**
 * Persists cookie consent settings.
 */
export function setCookieConsent(consent: CookieConsent): void {
    localStorage.setItem(COOKIE_CONSENT_STORAGE_KEY, JSON.stringify(consent));
}

/**
 * Removes saved cookie consent settings.
 */
export function removeCookieConsent(): void {
    localStorage.removeItem(COOKIE_CONSENT_STORAGE_KEY);
}
