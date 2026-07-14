import Link from 'next/link';

import { ROUTES } from '@/src/config/routes';

import { COMPANY_NAME } from '@/src/data/site-and-company';

import Container from '@/src/components/container';
import CookiePreferencesButton from '@/src/features/cookie/ui/cookies-preferences-button';

export default function FooterLegal() {
    return (
        <div className="bg-background-accent-primary text-foreground-inverted w-full py-6">
            <Container>
                <div className="flex flex-col items-center gap-4">
                    <ul className="flex w-full flex-col items-center gap-4 sm:flex-row sm:justify-between">
                        <li>
                            <Link href={ROUTES.REGULATIONS.path}>{ROUTES.REGULATIONS.label}</Link>
                        </li>
                        <li>
                            <Link href={ROUTES.PRIVACY_POLICY.path}>
                                {ROUTES.PRIVACY_POLICY.label}
                            </Link>
                        </li>
                        <CookiePreferencesButton />
                    </ul>
                    <p className="text-center">© 2026 {COMPANY_NAME}</p>
                </div>
            </Container>
        </div>
    );
}
