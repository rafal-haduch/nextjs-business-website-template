'use client';

import { useCookies } from '@/src/features/cookie/model/use-cookies';

interface Props {
    className?: string;
}

/**
 * Button for opening the cookie preferences panel.
 */
export default function CookieSettingsButton({ className }: Props) {
    const { openPreferences } = useCookies();
    return (
        <button type="button" onClick={openPreferences} className={className}>
            Cookie settings
        </button>
    );
}
