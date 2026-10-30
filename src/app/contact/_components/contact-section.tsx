import PageSection from '@/src/components/ui/page-section';
import Container from '@/src/components/ui/container';
import WorkInProgress from '@/src/components/ui/wip';

import { CONTAINER_PRESETS } from '@/src/design-system/container-styles';
import { PAGE_SECTION_PRESETS } from '@/src/design-system/page-section-styles';

export default function ContactSection() {
    return (
        <PageSection {...PAGE_SECTION_PRESETS.single} aria-labelledby="contact-title">
            <Container {...CONTAINER_PRESETS.base}>
                <h1 id="contact-title" className="mb-4">
                    Contact
                </h1>
                <WorkInProgress />
            </Container>
        </PageSection>
    );
}
