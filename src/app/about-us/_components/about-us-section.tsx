import PageSection, { PAGE_SECTION_PRESETS } from '@/src/components/ui/page-section';
import Container, { CONTAINER_PRESETS } from '@/src/components/ui/container';
import WorkInProgress from '@/src/components/ui/wip';

export default function AboutUsSection() {
    return (
        <PageSection {...PAGE_SECTION_PRESETS.single} aria-labelledby="about-us-title">
            <Container {...CONTAINER_PRESETS.base}>
                <h1 id="about-us-title" className="mb-4">
                    About us
                </h1>
                <WorkInProgress />
            </Container>
        </PageSection>
    );
}
