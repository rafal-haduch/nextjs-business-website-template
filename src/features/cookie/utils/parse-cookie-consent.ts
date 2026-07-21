import { CookieConsent } from '@/src/features/cookie/model/cookie-types';

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
