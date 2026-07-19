import {
    Blocks,
    Component,
    LayoutTemplate,
    PencilRuler,
    Puzzle,
    Settings2,
    Sparkles,
} from 'lucide-react';

import PageSection, { PAGE_SECTION_PRESETS } from '@/src/components/ui/page-section';
import Container, { CONTAINER_PRESETS } from '@/src/components/ui/container';
import DecorativeLine, { DECORATIVE_LINE_PRESETS } from '@/src/components/ui/decorative-line';

export default function FirstSection() {
    return (
        <PageSection {...PAGE_SECTION_PRESETS.last} aria-labelledby="section-title">
            <Container {...CONTAINER_PRESETS.base}>
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
                    <div className="text-foreground-brand-primary inline-grid grid-cols-2 flex-row flex-wrap place-items-center gap-16 py-8 sm:grid-cols-3 md:flex md:items-center md:justify-between md:py-16">
                        <LayoutTemplate aria-hidden="true" className="h-18 w-18" />
                        <Puzzle aria-hidden="true" className="h-18 w-18" />
                        <Settings2 aria-hidden="true" className="h-18 w-18" />
                        <Blocks aria-hidden="true" className="h-18 w-18" />
                        <PencilRuler aria-hidden="true" className="h-18 w-18" />
                        <Component aria-hidden="true" className="h-18 w-18" />
                    </div>
                </div>
            </Container>
        </PageSection>
    );
}
