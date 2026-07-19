'use client';

import { PropsWithChildren } from 'react';

import { CookieProvider } from '@/src/features/cookie/model/cookie-provider';

/**
 * Wraps the app with all providers.
 */
export default function AppProviders({ children }: PropsWithChildren) {
    return <CookieProvider>{children}</CookieProvider>;
}
