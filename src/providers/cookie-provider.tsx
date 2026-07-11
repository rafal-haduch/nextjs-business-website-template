'use client';

import { useCookieConsent } from '@/src/app/hooks/use-cookie-consent';
import { CookieContext } from '@/src/context/cookie-context';
import { PropsWithChildren, useState } from 'react';

export function CookieProvider({ children }: PropsWithChildren) {
    const cookie = useCookieConsent();

    const [isOptionsOpen, setOptionsOpen] = useState(false);

    return (
        <CookieContext.Provider
            value={{
                ...cookie,

                isOptionsOpen,

                openOptions: () => setOptionsOpen(true),

                closeOptions: () => setOptionsOpen(false),
            }}
        >
            {children}
        </CookieContext.Provider>
    );
}
