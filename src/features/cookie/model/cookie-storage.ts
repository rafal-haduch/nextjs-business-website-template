import { CookieConsent } from '@/src/features/cookie/model/cookie-types';

import { parseCookieConsent } from '@/src/features/cookie/utils/parse-cookie-consent';

const STORAGE_KEY = 'cookie-consent';

export function getCookieConsent(): CookieConsent | null {
    if (typeof window === 'undefined') return null;

    const stored = localStorage.getItem(STORAGE_KEY);

    return stored ? parseCookieConsent(stored) : null;
}

export function setCookieConsent(consent: CookieConsent) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
}

export function removeCookieConsent() {
    localStorage.removeItem(STORAGE_KEY);
}
