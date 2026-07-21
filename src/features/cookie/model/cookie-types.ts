export type CookieCategory = 'analytics' | 'marketing' | 'preferences';

export interface CookieConsent {
    necessary: true;
    optional: Record<CookieCategory, boolean>;
}
