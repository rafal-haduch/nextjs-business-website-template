import PageSection from '@/src/components/ui/page-section';
import Container from '@/src/components/ui/container';

import WorkInProgress from '@/src/components/ui/wip';

import { PAGE_SECTION_PRESETS } from '@/src/design-system/page-section-styles';

export default function AboutUsSection() {
    return (
        <PageSection {...PAGE_SECTION_PRESETS.single} aria-labelledby="about-us-title">
            <Container>
                <h1 id="about-us-title" className="mb-4">
                    About us
                </h1>
                <WorkInProgress />
            </Container>
        </PageSection>
    );
}
