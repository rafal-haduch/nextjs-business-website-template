import React from 'react';

import { cn } from '@/src/utils/cn';

import {
    type SectionBackground,
    pageSectionStyles,
    type SectionPadding,
} from '@/src/design-system/page-section-styles';

interface PageSectionProps extends React.HTMLAttributes<HTMLElement> {
    /** Vertical padding above the section content. Defaults to `lg`. */
    paddingTop?: SectionPadding;

    /** Vertical padding below the section content. Defaults to `lg`. */
    paddingBottom?: SectionPadding;

    /** Background color style. Defaults to `none`. */
    background?: SectionBackground;

    /** Optional CSS background image URL, layered over the background color. */
    backgroundImage?: string;

    /** Optional decorative element rendered before the section. */
    topSeparator?: React.ReactNode;

    /** Optional decorative element rendered after the section. */
    bottomSeparator?: React.ReactNode;

    children: React.ReactNode;
}

/**
 * Constrains a page section's vertical padding and background.
 * Use a preset from {@link PAGE_SECTION_PRESETS} for a predefined padding combination.
 *
 * @example
 * `<PageSection {...PAGE_SECTION_PRESETS.single}>...</PageSection>`.
 *
 * @See {@link pageSectionStyles}
 */
export default function PageSection({
    paddingTop = 'lg',
    paddingBottom = 'lg',
    background = 'none',
    backgroundImage,
    topSeparator,
    bottomSeparator,
    className,
    children,
    ...props
}: PageSectionProps) {
    return (
        <>
            {topSeparator}
            <section
                className={cn(
                    pageSectionStyles({
                        paddingTop,
                        paddingBottom,
                        background,
                    }),
                    className
                )}
                style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : undefined}
                {...props}
            >
                {children}
            </section>
            {bottomSeparator}
        </>
    );
}
