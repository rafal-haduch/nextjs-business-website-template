import PageSection, { PAGE_SECTION_PRESETS } from '@/src/components/page-section';
import Container, { CONTAINER_PRESETS } from '@/src/components/container';
import WorkInProgress from '@/src/components/wip';

export default function AboutUsSection() {
    return (
        <PageSection {...PAGE_SECTION_PRESETS.single} aria-labelledby="about-us-title">
            <Container {...CONTAINER_PRESETS.base}>
                <h1 id="about-us-title" className="mb-4">
                    O nas
                </h1>
                <WorkInProgress />
            </Container>
        </PageSection>
    );
}
