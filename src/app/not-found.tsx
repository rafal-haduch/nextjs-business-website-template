import Link from 'next/link';
import { House } from 'lucide-react';

import { ROUTES } from '@/src/config/routes';

import { buttonStyles } from '@/src/design-system/button';

import PageSection, { PAGE_SECTION_PRESETS } from '@/src/components/ui/page-section';
import Container, { CONTAINER_PRESETS } from '@/src/components/ui/container';

export default function NotFound() {
    return (
        <PageSection {...PAGE_SECTION_PRESETS.single} aria-labelledby="not-found-title">
            <Container {...CONTAINER_PRESETS.base} className="text-center">
                <h1 id="not-found-title" className="mb-6">
                    404 Not Found
                </h1>
                <p className="mb-8">Go to the home page or use the navigation menu.</p>
                <Link href={ROUTES.HOME.path} className={buttonStyles({ size: 'large' })}>
                    {ROUTES.HOME.label}
                    <House aria-hidden="true" />
                </Link>
            </Container>
        </PageSection>
    );
}
