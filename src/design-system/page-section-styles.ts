import { cn } from '@/src/utils/cn';

import { BrandColorRole, SizeScale } from '@/src/design-system/scale.types';

export type SectionPadding = SizeScale | 'none';

export type SectionBackground = BrandColorRole | 'none';

export type PageSectionPreset = 'first' | 'between' | 'last' | 'single';

const pageSectionTopPaddingStyles: Record<SectionPadding, string> = {
    none: 'pt-0',
    small: 'pt-4',
    medium: 'pt-8',
    large: 'pt-12 md:pt-16',
};

const pageSectionBottomPaddingStyles: Record<SectionPadding, string> = {
    none: 'pb-0',
    small: 'pb-4',
    medium: 'pb-8',
    large: 'pb-12 md:pb-16',
};

const pageSectionBackgroundStyles: Record<SectionBackground, string> = {
    primary: 'bg-background-primary',
    secondary: 'bg-background-secondary',
    none: '',
};

interface PageSectionStyleOptions {
    /** Sets the section's top padding. */
    paddingTop: SectionPadding;

    /** Sets the section's bottom padding. */
    paddingBottom: SectionPadding;

    /** Sets the section's background color. */
    background: SectionBackground;
}

/** Combines the section's vertical padding and background classes. */
export function pageSectionStyles({
    paddingTop,
    paddingBottom,
    background,
}: PageSectionStyleOptions) {
    return cn(
        pageSectionTopPaddingStyles[paddingTop],
        pageSectionBottomPaddingStyles[paddingBottom],
        pageSectionBackgroundStyles[background]
    );
}

/**
 * Predefined vertical padding combinations for common section positions.
 */
export const PAGE_SECTION_PRESETS = {
    first: {
        paddingTop: 'small',
        paddingBottom: 'medium',
    },
    between: {
        paddingTop: 'medium',
        paddingBottom: 'medium',
    },
    last: {
        paddingTop: 'medium',
        paddingBottom: 'large',
    },
    single: {
        paddingTop: 'small',
        paddingBottom: 'large',
    },
} satisfies Record<PageSectionPreset, Partial<PageSectionStyleOptions>>;
