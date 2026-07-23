import { CookieConsent } from '@/src/features/cookie/model/cookie-types';

/**
 * Parses and validates a serialized cookie consent value.
 *
 * Returns a valid CookieConsent object or null
 * when the value is invalid or malformed.
 */
export function parseCookieConsent(value: string): CookieConsent | null {
    try {
        const parsed = JSON.parse(value);

        if (
            parsed &&
            parsed.necessary === true &&
            parsed.optional &&
            typeof parsed.optional.analytics === 'boolean' &&
            typeof parsed.optional.marketing === 'boolean' &&
            typeof parsed.optional.preferences === 'boolean'
        ) {
            return parsed;
        }
    } catch {}

    return null;
}
