'use client';

import { PropsWithChildren } from 'react';

import { CookieProvider } from '@/src/features/cookie/model/cookie-provider';

//TODO(template): Remove the cookie feature if it is not being used.

/**
 * Wraps the app with all providers.
 */
export default function AppProviders({ children }: PropsWithChildren) {
    return <CookieProvider>{children}</CookieProvider>;
}
