import { SEO } from '@/src/config/seo';

import Section from '@/src/components/section';
import Container from '@/src/components/container';
import WorkInProgress from '@/src/components/wip';

export const metadata = SEO.ABOUT_US;

export default function AboutUsPage() {
    return (
        <Section spacing="single">
            <Container>
                <WorkInProgress />
            </Container>
        </Section>
    );
}
