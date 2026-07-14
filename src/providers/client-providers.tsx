'use client';

import { PropsWithChildren } from 'react';

import { CookieProvider } from '@/src/features/cookie/model/cookie-provider';

import CookieConsentBanner from '@/src/features/cookie/ui/cookie-consent-banner';
import CookiePreferencesModal from '@/src/features/cookie/ui/cookie-preferences-modal';

export default function ClientProviders({ children }: PropsWithChildren) {
    return (
        <CookieProvider>
            {children}
            <CookieConsentBanner />
            <CookiePreferencesModal />
        </CookieProvider>
    );
}
