import Container from '@/src/components/ui/container';
import PageSection, { PAGE_SECTION_PRESETS } from '@/src/components/ui/page-section';
import { CONTAINER_PRESETS } from '@/src/design-system/container-styles';
import NewsletterForm from '@/src/features/newsletter/components/newsletter-form';

export default function NewsletterSection() {
    return (
        <PageSection {...PAGE_SECTION_PRESETS.last} aria-labelledby="newsletter-title">
            <Container {...CONTAINER_PRESETS.base}>
                <h2 id="newsletter-title" className="mb-2 text-center">
                    Subscribe Our Newsletter
                </h2>
                <p className="mb-6 text-center">Get information about new features and updates.</p>
                <NewsletterForm />
            </Container>
        </PageSection>
    );
}
