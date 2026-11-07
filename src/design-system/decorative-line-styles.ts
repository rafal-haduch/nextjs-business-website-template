import { cn } from '@/src/utils/cn';

import {
    ColorRole,
    LengthScale,
    SpacingScale,
    ThicknessScale,
} from '@/src/design-system/scale.types';

export type DecorativeLineColor = ColorRole;

export type DecorativeLineWidth = LengthScale;

export type DecorativeLineThickness = ThicknessScale;

export type DecorativeLineSpacing = SpacingScale;

export type DecorativeLineRoundedCorners = 'none' | 'small' | 'medium' | 'large';

export type DecorativeLinePresets = 'mainHeading' | 'heading' | 'contentSeparator';

const decorativeLineColorStyles: Record<DecorativeLineColor, string> = {
    primary: 'border-border-brand-primary',
    secondary: 'border-border-brand-secondary',
    neutral: 'border-border-default',
};

const decorativeLineWidthStyles: Record<DecorativeLineWidth, string> = {
    short: 'w-1/2 sm:max-w-xs',
    medium: 'w-4/5 sm:max-w-md',
    long: 'w-full sm:max-w-2xl',
};

const decorativeLineThicknessStyles: Record<DecorativeLineThickness, string> = {
    thin: 'border-t-2',
    medium: 'border-t-4',
    thick: 'border-t-6',
};

const decorativeLineSpacingStyles: Record<DecorativeLineSpacing, string> = {
    compact: 'mt-1 mb-4',
    medium: 'mt-1 mb-8',
    spacious: 'mt-2 mb-12',
};

interface DecorativeLineStyleOptions {
    /** Sets the line's color. */
    color: DecorativeLineColor;

    /** Sets the line's width. */
    width: DecorativeLineWidth;

    /** Sets the line's thickness. */
    thickness: DecorativeLineThickness;

    /** Sets the vertical spacing around the line. */
    spacing: DecorativeLineSpacing;
}

/** Combines the decorative line's width, thickness, color, and spacing classes. */
export function decorativeLineStyles({
    width,
    thickness,
    spacing,
    color,
}: DecorativeLineStyleOptions) {
    return cn(
        decorativeLineWidthStyles[width],
        decorativeLineThicknessStyles[thickness],
        decorativeLineColorStyles[color],
        decorativeLineSpacingStyles[spacing]
    );
}

/**
 * Predefined style combinations for common use cases.
 * To overwrite some preset styles, use
 * <DecorativeLine {...DECORATIVE_LINE_PRESETS.mainHeading} color="primary" classNames="mt-0" />

 */
export const DECORATIVE_LINE_PRESETS = {
    mainHeading: { thickness: 'thick', spacing: 'spacious' } as const,
    heading: { thickness: 'medium', spacing: 'medium' } as const,
    contentSeparator: { thickness: 'thin', spacing: 'compact' } as const,
} satisfies Record<DecorativeLinePresets, Partial<DecorativeLineStyleOptions>>;
