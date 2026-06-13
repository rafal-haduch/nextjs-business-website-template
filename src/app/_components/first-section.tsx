import Section from '@/src/components/section';
import Container from '@/src/components/container';

export default function FirstSection() {
    return (
        <Section spacing="between" aria-labelledby="section-heading">
            <Container>
                <div className="text-center">
                    <h2 id="section-heading" className="mb-4">
                        Website template
                    </h2>
                    <p>This is a business website template in NextJS made by Rafał Haduch.</p>
                </div>
            </Container>
        </Section>
    );
}
