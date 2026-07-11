'use client';

import { createContext } from 'react';

import { CookieConsent } from '@/src/app/hooks/use-cookie-consent';

interface CookieContextValue {
    consent: CookieConsent | null;

    isReady: boolean;

    acceptAll(): void;
    rejectAll(): void;
    saveConsent(value: CookieConsent): void;

    isOptionsOpen: boolean;
    
    openOptions(): void;
    closeOptions(): void;
}

export const CookieContext = createContext<CookieContextValue | null>(null);
