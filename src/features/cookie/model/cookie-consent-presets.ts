import { CookieConsent } from '@/src/features/cookie/model/cookie-types';

export const NECESSARY_COOKIE_CONSENT: CookieConsent = {
    necessary: true,
    optional: {
        analytics: false,
        marketing: false,
        preferences: false,
    },
};

export const ALL_COOKIE_CONSENT: CookieConsent = {
    necessary: true,
    optional: {
        analytics: true,
        marketing: true,
        preferences: true,
    },
};
