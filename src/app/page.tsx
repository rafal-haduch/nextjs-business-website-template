import Section from '@/src/components/section';
import Container from '@/src/components/container';

export default function Home() {
    return (
        <Section>
            <Container>
                <h1 className="mb-4">Hello World!</h1>
                <p className="text-center">
                    This is a business website template in NextJS made by Rafał Haduch.
                </p>
            </Container>
        </Section>
    );
}
