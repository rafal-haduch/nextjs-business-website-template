'use client';

import { useLocalStorage } from '@/src/app/hooks/use-local-storage';

export type CookieConsent = 'all' | 'necessary' | 'customized';

export function useCookieConsent() {
    const [isReady, consent, setConsent] = useLocalStorage<CookieConsent | null>(
        'cookie-consent',
        null
    );
    const acceptAll = () => {
        setConsent('all');
    };

    const rejectAll = () => {
        setConsent('necessary');
    };

    const saveConsent = (value: CookieConsent) => {
        setConsent(value);
    };

    return {
        consent,
        isReady,
        acceptAll,
        rejectAll,
        saveConsent,
    };
}
