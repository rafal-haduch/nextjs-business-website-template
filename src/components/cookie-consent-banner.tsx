'use client';

import Link from 'next/link';

import { ROUTES } from '@/src/config/routes';

import { getButtonClasses } from '@/src/lib/design-system/button';

import Banner from '@/src/components/banner';

import { useCookies } from '@/src/app/hooks/use-cookie-context';

export default function CookieConsentBanner() {
    //TODO: Improve note
    //NOTE: sprawdza render u klienta - nieweluje efekt migania podczas renderu.
    //const isClient = useIsClient();

    const { consent, isReady, acceptAll, openOptions } = useCookies();

    if (!isReady || consent) return null;

    return (
        <Banner
            open
            onClose={() => {
                acceptAll();
            }}
            showCloseButton
            placement="bottom"
            panelHTMLAttributes={{
                role: 'region',
                'aria-labelledby': 'cookie-banner-title',
                'aria-describedby': 'cookie-banner-description',
            }}
        >
            <div className="text-center">
                <h2 className="text-lg font-semibold">Privacy policy</h2>
                <p className="mt-2 text-sm">
                    This website uses cookies. You can learn more about them in our{' '}
                    <Link href={ROUTES.PRIVACY_POLICY.path}>{ROUTES.PRIVACY_POLICY.label}</Link>.
                </p>
                <div className="mt-6 flex flex-col items-center gap-3 md:mx-auto md:max-w-xl md:flex-row md:justify-center">
                    <button
                        onClick={acceptAll}
                        className={getButtonClasses({
                            size: 'small',
                            className: 'mx-0 w-1/2',
                        })}
                    >
                        Agree
                    </button>
                    <button
                        onClick={openOptions}
                        className={getButtonClasses({
                            variant: 'outline',
                            size: 'small',
                            className: 'mx-0 w-1/2',
                        })}
                    >
                        More Options
                    </button>
                </div>
            </div>
        </Banner>
    );
}
