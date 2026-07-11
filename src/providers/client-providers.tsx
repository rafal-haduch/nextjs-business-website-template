'use client';

import { CookieProvider } from '@/src/providers/cookie-provider';

import CookieConsentBanner from '@/src/components/cookie-consent-banner';
import CookieOptionsModal from '@/src/components/cookie-options-modal';

export default function ClientProviders() {
    return (
        <CookieProvider>
            <CookieConsentBanner />
            <CookieOptionsModal />
        </CookieProvider>
    );
}
