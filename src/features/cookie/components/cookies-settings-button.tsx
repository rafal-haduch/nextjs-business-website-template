'use client';

import { cn } from '@/src/utils/cn';

import { useCookies } from '@/src/features/cookie/model/use-cookies';

interface Props {
    className?: string;
}

/**
 * Button for opening the cookie preferences panel.
 */
export default function CookieSettingsButton({ className }: Props) {
    const { openCookieSettings: openPreferences } = useCookies();
    return (
        <button type="button" onClick={openPreferences} className={cn('cursor-pointer', className)}>
            Cookie settings
        </button>
    );
}
