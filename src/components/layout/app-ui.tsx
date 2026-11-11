import ScrollToTopButton from '@/src/components/layout/scroll-to-top-button';

import CookieConsentBanner from '@/src/features/cookie/components/cookie-consent-banner';
import CookieSettingsModal from '@/src/features/cookie/components/cookie-settings-modal';

//TODO(template): Components from Cookie feature.

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
            {/*--- TODO(template): Remove if not in use ---*/}
            <CookieConsentBanner />
            <CookieSettingsModal />
        </>
    );
}
