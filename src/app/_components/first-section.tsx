import {
    FolderTree,
    LayoutTemplate,
    LucideIcon,
    Palette,
    Puzzle,
    SearchCheck,
    Settings2,
    Sparkles,
} from 'lucide-react';

import PageSection from '@/src/components/ui/page-section';
import Container from '@/src/components/ui/container';
import DecorativeLine from '@/src/components/ui/decorative-line';

import { PAGE_SECTION_PRESETS } from '@/src/design-system/page-section-styles';
import { DECORATIVE_LINE_PRESETS } from '@/src/design-system/decorative-line-styles';

export default function FirstSection() {
    return (
        <PageSection {...PAGE_SECTION_PRESETS.between} aria-labelledby="section-title">
            <Container>
                <div className="text-center">
                    <h2
                        id="section-title"
                        className="flex items-center justify-center gap-4 whitespace-nowrap"
                    >
                        <Sparkles
                            aria-hidden="true"
                            className="text-foreground-brand-primary h-10 w-10"
                        />
                        Website template
                    </h2>
                    <DecorativeLine {...DECORATIVE_LINE_PRESETS.heading} />
                    <p className="mb-4">
                        This is a business website template in NextJS made by Rafał Haduch.
                    </p>
                    <div className="text-foreground-brand-primary mx-auto grid max-w-4xl grid-cols-2 gap-x-8 gap-y-10 py-8 sm:grid-cols-3 sm:gap-x-12 md:py-16">
                        <Feature icon={LayoutTemplate} label="Ready-to-use template" />
                        <Feature icon={Puzzle} label="Reusable components" />
                        <Feature icon={FolderTree} label="Organized project structure" />
                        <Feature icon={Palette} label="Consistent design system" />
                        <Feature icon={Settings2} label="Base Next.js configuration" />
                        <Feature icon={SearchCheck} label="Essential SEO setup" />
                    </div>
                </div>
            </Container>
        </PageSection>
    );
}

function Feature({ icon: Icon, label }: { icon: LucideIcon; label: string }) {
    return (
        <div className="flex flex-col items-center gap-3 text-center">
            <Icon aria-hidden="true" className="h-12 w-12" />
            <p className="text-foreground-secondary text-sm font-medium sm:text-base">{label}</p>
        </div>
    );
}
