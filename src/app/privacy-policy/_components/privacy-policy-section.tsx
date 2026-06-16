import PageSection, { PAGE_SECTION_PRESETS } from '@/src/components/page-section';
import Container, { CONTAINER_PRESETS } from '@/src/components/container';

import { PRIVACY_SECTIONS } from '@/src/app/privacy-policy/_content/privacy-policy';

import PrivacyPolicySubsection from '@/src/app/privacy-policy/_components/privacy-policy-subsection';

//NOTE: Privacy policy is write in polish.
//TODO: Remove privacy policy template or replace with lorem ipsum
export default function PrivacyPolicySection() {
    return (
        <PageSection {...PAGE_SECTION_PRESETS.single} aria-labelledby="privacy-policy-title">
            <Container {...CONTAINER_PRESETS.narrow}>
                <div className="flex flex-col gap-10">
                    <header className="flex flex-col gap-4">
                        <h1 id="privacy-policy-title">Privacy Policy</h1>
                        <p className="text-muted-foreground text-sm sm:text-center">
                            Niniejsza polityka prywatności określa zasady przetwarzania i ochrony
                            danych osobowych użytkowników korzystających ze strony internetowej
                            pracowni RTG.
                        </p>
                    </header>
                    <div className="mx-auto flex w-full max-w-4xl flex-col gap-10">
                        {PRIVACY_SECTIONS.map((section) => (
                            <PrivacyPolicySubsection key={section.id} {...section} />
                        ))}
                    </div>
                </div>
            </Container>
        </PageSection>
    );
}
