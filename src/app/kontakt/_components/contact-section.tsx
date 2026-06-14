import PageSection, { PAGE_SECTION_PRESETS } from '@/src/components/page-section';
import Container, { CONTAINER_PRESETS } from '@/src/components/container';
import WorkInProgress from '@/src/components/wip';

export default function ContactSection() {
    return (
        <PageSection {...PAGE_SECTION_PRESETS.single}>
            <Container {...CONTAINER_PRESETS.base}>
                <WorkInProgress />
            </Container>
        </PageSection>
    );
}
