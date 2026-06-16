import PageSection, { PAGE_SECTION_PRESETS } from '@/src/components/page-section';
import Container, { CONTAINER_PRESETS } from '@/src/components/container';
import WorkInProgress from '@/src/components/wip';

export default function RegulationsSection() {
    return (
        <PageSection {...PAGE_SECTION_PRESETS.single}>
            <Container {...CONTAINER_PRESETS.base}>
                <h1 className="mb-4">Regulamin</h1>
                <WorkInProgress />
            </Container>
        </PageSection>
    );
}
