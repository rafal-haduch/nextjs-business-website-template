import ScrollToTop from '@/src/components/layout/scroll-to-top';

import CookieConsentBanner from '@/src/features/cookie/ui/cookie-consent-banner';
import CookiePreferencesModal from '@/src/features/cookie/ui/cookie-preferences-modal';

//TODO: Write JSDOC
export default function AppUI() {
    return (
        <>
            <ScrollToTop />

            <CookieConsentBanner />
            <CookiePreferencesModal />
        </>
    );
}
