'use client';

import { PropsWithChildren } from 'react';

import { useDisclosure } from '@/src/hooks/use-disclosure';

import { CookieContext } from '@/src/features/cookie/model/cookie-context';
import { useCookieConsent } from '@/src/features/cookie/model/use-cookie-consent';

/**
 * Provides cookie consent state and actions to child components through context.
 */
export function CookieProvider({ children }: PropsWithChildren) {
    const cookieConsent = useCookieConsent();
    const preferencesDisclosure = useDisclosure();

    return (
        <CookieContext.Provider
            value={{
                ...cookieConsent,

                isPreferencesOpen: preferencesDisclosure.isOpen,
                openPreferences: preferencesDisclosure.open,
                closePreferences: preferencesDisclosure.close,
            }}
        >
            {children}
        </CookieContext.Provider>
    );
}
