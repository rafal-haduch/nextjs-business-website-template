import PageSection from '@/src/components/ui/page-section';
import Container from '@/src/components/ui/container';

import { PAGE_SECTION_PRESETS } from '@/src/design-system/page-section-styles';
import { CONTAINER_PRESETS } from '@/src/design-system/container-styles';

import { PRIVACY_SECTIONS } from '@/src/app/privacy-policy/_content/privacy-policy';

import PrivacyPolicySubsection from '@/src/app/privacy-policy/_components/privacy-policy-subsection';

//NOTE: Privacy policy template is write in polish.
//TODO(template): Align the privacy policy with the project guidelines
export default function PrivacyPolicySection() {
    return (
        <PageSection {...PAGE_SECTION_PRESETS.single} aria-labelledby="privacy-policy-title">
            <Container {...CONTAINER_PRESETS.narrow}>
                <div className="flex flex-col gap-10">
                    <header className="flex flex-col gap-4">
                        <h1 id="privacy-policy-title">Polityka prywatności</h1>
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
