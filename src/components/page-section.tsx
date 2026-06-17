import React from 'react';

import { cn } from '@/src/utils/cn';

type SpacingTop = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type SpacingBottom = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';

type Background = 'primary' | 'secondary' | 'accent' | 'none';

type SectionVariant = 'hero' | 'first' | 'between' | 'last' | 'single' | 'custom';

const spacingTopStyles: Record<SpacingTop, string> = {
    none: '',
    xs: 'pt-2',
    sm: 'pt-6',
    md: 'pt-12 md:pt-16',
    lg: 'pt-16 md:pt-24',
    xl: 'pt-24 md:pt-32',
};

const spacingBottomStyles: Record<SpacingBottom, string> = {
    none: '',
    xs: 'pb-2',
    sm: 'pb-6',
    md: 'pb-12 md:pb-16',
    lg: 'pb-16 md:pb-24',
    xl: 'pb-24 md:pb-32',
};

const backgroundStyles: Record<Background, string> = {
    primary: 'bg-background-primary',
    secondary: 'bg-background-secondary',
    accent: 'bg-background-accent',
    none: '',
};

interface Props extends React.HTMLAttributes<HTMLElement> {
    spacingTop?: SpacingTop;
    spacingBottom?: SpacingBottom;
    background?: Background;
    backgroundImage?: string;
    /** Decorative element rendered above the section. */
    topSeparator?: React.ReactNode;
    /** Decorative element rendered below the section. */
    bottomSeparator?: React.ReactNode;
    className?: string;
    children: React.ReactNode;
}

/**
 * Predefined spacing Y style combinations for common use cases.
 * Use `custom` preset to opt out of all defaults and style entirely via `className`.
 */
export const PAGE_SECTION_PRESETS = {
    hero: {
        spacingTop: 'none',
        spacingBottom: 'none',
    },
    first: {
        spacingTop: 'md',
        spacingBottom: 'lg',
    },
    between: {
        spacingTop: 'lg',
        spacingBottom: 'lg',
    },
    last: {
        spacingTop: 'lg',
        spacingBottom: 'xl',
    },
    single: {
        spacingTop: 'md',
        spacingBottom: 'xl',
    },
    custom: {
        spacingTop: 'none',
        spacingBottom: 'none',
    },
} satisfies Record<SectionVariant, Partial<Props>>;

/**
 * Reusable page section component with semantic vertical spacing and background control.
 *
 * Decorative separators can be injected above and/or below the section
 * using the `topSeparator` and `bottomSeparator` props.
 *
 * **Recommended:** use via {@link PAGE_SECTION_PRESETS}
 *
 * @param spacingTop - Top section spacing. Default: `'lg'`.
 * @param spacingBottom - Bottom section spacing. Default: `'lg'`.
 * @param background - Background color variant. Default: `'none'`.
 * @param backgroundImage - Optional background image URL (overlays on background color).
 * @param topSeparator - Optional decorative element rendered before the section. Accepts any React node.
 * @param bottomSeparator - Optional decorative element rendered after the section. Accepts any React node.
 * @param className - Additional Tailwind classes merged via `cn()`.
 * @param children - Section content.
 */
export default function PageSection({
    spacingTop = 'lg',
    spacingBottom = 'lg',
    background = 'none',
    backgroundImage,
    topSeparator,
    bottomSeparator,
    className,
    children,
    ...props
}: Props) {
    return (
        <>
            {topSeparator}
            <section
                className={cn(
                    spacingTopStyles[spacingTop],
                    spacingBottomStyles[spacingBottom],
                    backgroundStyles[background],
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
