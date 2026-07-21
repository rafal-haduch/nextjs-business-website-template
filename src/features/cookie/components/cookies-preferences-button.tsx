'use client';

import { useCookies } from '@/src/features/cookie/model/use-cookies';

/**
 * Button for opening the cookie preferences panel.
 */
export default function CookiePreferencesButton() {
    const { openPreferences } = useCookies();
    return (
        <button type="button" onClick={openPreferences}>
            Cookie preferences
        </button>
    );
}
