import Link from 'next/link';
import { House } from 'lucide-react';

import { ROUTES } from '@/src/config/routes';

import { getButtonClasses } from '@/src/lib/get-button-classes';

import PageSection, { PAGE_SECTION_PRESETS } from '@/src/components/page-section';
import Container, { CONTAINER_PRESETS } from '@/src/components/container';

export default function NotFound() {
    return (
        <PageSection {...PAGE_SECTION_PRESETS.single} aria-labelledby="not-found-title">
            <Container {...CONTAINER_PRESETS.base} className="text-center">
                <h1 id="not-found-title" className="mb-6">
                    Nie znaleziono treści
                </h1>
                <p className="mb-8">
                    Przejdź do strony głównej lub skorzystaj z menu nawigacyjnego.
                </p>
                <Link href={ROUTES.HOME.path} className={getButtonClasses({ size: 'large' })}>
                    Strona główna <House aria-hidden="true" />
                </Link>
            </Container>
        </PageSection>
    );
}
