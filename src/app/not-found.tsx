import Link from 'next/link';

import { ROUTES } from '@/src/config/routes';

import Section from '@/src/components/section';
import Container from '@/src/components/container';

export default function NotFound() {
    return (
        <Section spacing="single" aria-labelledby="not-found-heading">
            <Container className="text-center">
                <h1 id="not-found-heading" className="mb-6">
                    Nie znaleziono treści
                </h1>
                <p className="mb-8">Przejdź do strony głównej lub skorzystaj z menu na górze.</p>
                <Link href={ROUTES.HOME.path} className="btn btn-lg btn-primary">
                    Strona główna{' '}
                </Link>
            </Container>
        </Section>
    );
}
