import PageSection, { PAGE_SECTION_PRESETS } from '@/src/components/page-section';
import Container, { CONTAINER_PRESETS } from '@/src/components/container';
import DecorativeLine, { DECORATIVE_LINE_PRESETS } from '@/src/components/decorative-line';

export default function FirstSection() {
    return (
        <PageSection {...PAGE_SECTION_PRESETS.last} aria-labelledby="section-heading">
            <Container {...CONTAINER_PRESETS.base}>
                <div className="text-center">
                    <h2 id="section-heading">Website template</h2>
                    <DecorativeLine {...DECORATIVE_LINE_PRESETS.heading} />
                    <p>This is a business website template in NextJS made by Rafał Haduch.</p>
                </div>
            </Container>
        </PageSection>
    );
}
