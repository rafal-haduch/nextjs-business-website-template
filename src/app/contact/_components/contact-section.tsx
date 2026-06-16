import PageSection, { PAGE_SECTION_PRESETS } from '@/src/components/page-section';
import Container, { CONTAINER_PRESETS } from '@/src/components/container';
import WorkInProgress from '@/src/components/wip';

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
