import PageSection, { PAGE_SECTION_PRESETS } from '@/src/components/ui/page-section';
import Container from '@/src/components/ui/container';
import WorkInProgress from '@/src/components/ui/wip';
import { CONTAINER_PRESETS } from '@/src/design-system/container-styles';

export default function RegulationsSection() {
    return (
        <PageSection {...PAGE_SECTION_PRESETS.single} aria-labelledby="regulations-title">
            <Container {...CONTAINER_PRESETS.base}>
                <h1 id="regulations-title" className="mb-4">
                    Regulations
                </h1>
                <WorkInProgress />
            </Container>
        </PageSection>
    );
}
