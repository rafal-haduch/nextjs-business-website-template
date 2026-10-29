import { cn } from '@/src/utils/cn';

export type SectionPadding = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type SectionBackground = 'primary' | 'secondary' | 'accent' | 'none';

export type PageSectionPreset = 'hero' | 'first' | 'between' | 'last' | 'single';

const paddingTopStyles: Record<SectionPadding, string> = {
    none: '',
    xs: 'pt-2',
    sm: 'pt-6',
    md: 'pt-12 md:pt-16',
    lg: 'pt-16 md:pt-24',
    xl: 'pt-24 md:pt-32',
};

const paddingBottomStyles: Record<SectionPadding, string> = {
    none: '',
    xs: 'pb-2',
    sm: 'pb-6',
    md: 'pb-12 md:pb-16',
    lg: 'pb-16 md:pb-24',
    xl: 'pb-24 md:pb-32',
};

const backgroundStyles: Record<SectionBackground, string> = {
    primary: 'bg-background-primary',
    secondary: 'bg-background-secondary',
    accent: 'bg-background-accent',
    none: '',
};

interface PageSectionStyleOptions {
    paddingTop: SectionPadding;
    paddingBottom: SectionPadding;
    background: SectionBackground;
}

export function pageSectionStyles({
    paddingTop,
    paddingBottom,
    background,
}: PageSectionStyleOptions) {
    return cn(
        paddingTopStyles[paddingTop],
        paddingBottomStyles[paddingBottom],
        backgroundStyles[background]
    );
}

/**
 * Predefined vertical padding combinations for common section positions.
 * The background defaults to `none`; use `className` for one-off style overrides.
 */
export const PAGE_SECTION_PRESETS = {
    hero: {
        paddingTop: 'none',
        paddingBottom: 'none',
    },
    first: {
        paddingTop: 'md',
        paddingBottom: 'lg',
    },
    between: {
        paddingTop: 'lg',
        paddingBottom: 'lg',
    },
    last: {
        paddingTop: 'lg',
        paddingBottom: 'xl',
    },
    single: {
        paddingTop: 'md',
        paddingBottom: 'xl',
    },
} satisfies Record<PageSectionPreset, Partial<PageSectionStyleOptions>>;
