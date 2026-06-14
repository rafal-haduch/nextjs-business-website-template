import { SEO } from '@/src/config/seo';

import PageSection, { PAGE_SECTION_PRESETS } from '@/src/components/page-section';
import Container, { CONTAINER_PRESETS } from '@/src/components/container';
import WorkInProgress from '@/src/components/wip';

export const metadata = SEO.ABOUT_US;

export default function AboutUsPage() {
    return (
        <PageSection {...PAGE_SECTION_PRESETS.single}>
            <Container {...CONTAINER_PRESETS.base}>
                <WorkInProgress />
            </Container>
        </PageSection>
    );
}
