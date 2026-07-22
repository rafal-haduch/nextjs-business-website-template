import ScrollToTop from '@/src/components/layout/scroll-to-top';

import CookieConsentBanner from '@/src/features/cookie/components/cookie-consent-banner';
import CookieSettingsModal from '@/src/features/cookie/components/cookie-settings-modal';

//TODO: Write JSDOC
export default function AppUI() {
    return (
        <>
            <ScrollToTop />

            <CookieConsentBanner />
            <CookieSettingsModal />
        </>
    );
}
