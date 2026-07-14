'use client';

import { useContext } from 'react';

import { CookieContext } from '@/src/features/cookie/model/cookie-context';

/**
 * Returns the cookie context.
 * Must be used within a CookieProvider.
 */
export function useCookies() {
    const context = useContext(CookieContext);

    if (!context) throw new Error('Hook useCookies() must be used inside CookieProvider.');

    return context;
}
