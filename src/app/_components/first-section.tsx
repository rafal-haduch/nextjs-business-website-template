import Section from '@/src/components/section';
import Container from '@/src/components/container';
import DecorativeLine, { DECORATIVE_LINE_PRESETS } from '@/src/components/decorative-line';

export default function FirstSection() {
    return (
        <Section spacing="between" aria-labelledby="section-heading">
            <Container>
                <div className="text-center">
                    <h2 id="section-heading">Website template</h2>
                    <DecorativeLine {...DECORATIVE_LINE_PRESETS.heading} />
                    <p>This is a business website template in NextJS made by Rafał Haduch.</p>
                </div>
            </Container>
        </Section>
    );
}
