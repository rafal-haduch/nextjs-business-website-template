import ScrollToTopButton from '@/src/components/layout/scroll-to-top-button';

import CookieConsentBanner from '@/src/features/cookie/components/cookie-consent-banner';
import CookieSettingsModal from '@/src/features/cookie/components/cookie-settings-modal';

/**
 * Provides global application UI components.
 *
 * Contains interface elements that are independent
 * from the current page content.
 */
export default function AppUI() {
    return (
        <>
            <ScrollToTopButton />

            <CookieConsentBanner />
            <CookieSettingsModal />
        </>
    );
}
