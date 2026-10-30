import { cn } from '@/src/utils/cn';

export type DecorativeLineColor = 'primary' | 'secondary';

export type DecorativeLineThickness = 'thin' | 'medium' | 'thick';

export type DecorativeLineSpacing = 'none' | 'compact' | 'normal' | 'spacious';

export type DecorativeLineWidth = 'short' | 'base' | 'long';

export type DecorativeLineRoundedCorners = 'none' | 'small' | 'medium' | 'large';

export type DecorativeLinePresets = 'mainHeading' | 'heading' | 'contentSeparator';

const widthStyles: Record<DecorativeLineWidth, string> = {
    short: 'w-1/2 sm:max-w-xs',
    base: 'w-4/5 sm:max-w-md',
    long: 'w-full sm:max-w-2xl',
};

const thicknessStyles: Record<DecorativeLineThickness, string> = {
    thin: 'border-t-2',
    medium: 'border-t-4',
    thick: 'border-t-6',
};

const spacingStyles: Record<DecorativeLineSpacing, string> = {
    compact: 'mt-1 mb-4',
    normal: 'mt-1 mb-8',
    spacious: 'mt-2 mb-12',
    none: '',
};

const colorStyles: Record<DecorativeLineColor, string> = {
    primary: 'border-border-brand-primary',
    secondary: 'border-border-brand-secondary',
};

interface DecorativeLineStyleOptions {
    width: DecorativeLineWidth;
    thickness: DecorativeLineThickness;
    color: DecorativeLineColor;
    spacing: DecorativeLineSpacing;
}

export function decorativeLineStyles({
    width,
    thickness,
    spacing,
    color,
}: DecorativeLineStyleOptions) {
    return cn(
        widthStyles[width],
        thicknessStyles[thickness],
        colorStyles[color],
        spacingStyles[spacing]
    );
}

/**
 * Predefined style combinations for common use cases.
 * To overwrite some preset styles, use
 * <DecorativeLine {...DECORATIVE_LINE_PRESETS.mainHeading} color="primary" classNames="mt-0" />

 */
export const DECORATIVE_LINE_PRESETS = {
    mainHeading: { thickness: 'thick', spacing: 'spacious' } as const,
    heading: { thickness: 'medium', spacing: 'normal' } as const,
    contentSeparator: { thickness: 'thin', spacing: 'compact' } as const,
} satisfies Record<DecorativeLinePresets, Partial<DecorativeLineStyleOptions>>;
