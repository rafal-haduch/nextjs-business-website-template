import React from 'react';

import { cn } from '@/src/utils/cn';

type SectionSpacing = 'hero' | 'start' | 'end' | 'between' | 'single' | 'none';
type SectionBackground = 'primary' | 'secondary' | 'accent' | 'none';

const spacingStyles: Record<SectionSpacing, string> = {
    hero: 'py-0',
    start: 'pt-10 pb-12 md:pb-16 lg:pb-20 xl:pb-24',
    end: 'pt-12 pb-24 md:pt-16 lg:pt-20 xl:pt-24',
    between: 'py-12 md:py-16 lg:py-20 xl:py-24',
    single: 'pt-10 pb-24',
    none: '',
};

const backgroundStyles: Record<SectionBackground, string> = {
    primary: 'bg-background-primary',
    secondary: 'bg-background-secondary',
    accent: 'bg-background-accent',
    none: '',
};

interface Props extends React.HTMLAttributes<HTMLElement> {
    spacing?: SectionSpacing;
    background?: SectionBackground;
    backgroundImage?: string;
    className?: string;
    children: React.ReactNode;
}

/**
 * Reusable page section component with semantic vertical spacing and background control.
 *
 * @param spacing - Vertical padding based on section position (hero/start/end/between/single/none). Default: `'between'`.
 * @param background - Background color variant (primary/secondary/accent/none). Default: `'none'`.
 * @param backgroundImage - Optional background image URL (overlays on background color).
 * @param className - Additional Tailwind classes merged via `cn()`.
 * @param children - Section content.
 */
export default function Section({
    spacing = 'between',
    background = 'none',
    backgroundImage,
    className,
    children,
    ...props
}: Props) {
    return (
        <section
            className={cn(spacingStyles[spacing], backgroundStyles[background], className)}
            style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : undefined}
            {...props}
        >
            {children}
        </section>
    );
}
