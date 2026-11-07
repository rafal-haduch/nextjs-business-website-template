import { cn } from '@/src/utils/cn';

import {
    ExtendedColorRole,
    LengthScale,
    SizeScale,
    SpacingScale,
    ThicknessScale,
} from '@/src/design-system/scale.types';

export type DecorativeSeparatorColor = ExtendedColorRole;

export type DecorativeSeparatorWidth = LengthScale;

export type DecorativeSeparatorThickness = ThicknessScale;

export type DecorativeSeparatorSpacing = SpacingScale;

export type DecorativeSeparatorIconSize = SizeScale;

const colorStyles: Record<DecorativeSeparatorColor, string> = {
    neutral: 'border-border-default',
    primary: 'border-border-brand-primary',
    secondary: 'border-border-brand-secondary',
    mix: 'border-border-brand-secondary', // NOTE: Icon has contrasting brand color (primary <-> secondary)
};

export const decorativeSeparatorWidthStyles: Record<DecorativeSeparatorWidth, string> = {
    short: 'w-1/5 md:w-1/6 xl:w-1/7',
    medium: 'w-1/4 md:w-1/5 xl:w-1/6',
    long: 'w-1/3 md:w-1/4 xl:w-1/5',
};

export const thicknessStyles: Record<DecorativeSeparatorThickness, string> = {
    thin: 'border',
    medium: 'border-2',
    thick: 'border-3',
};

export const decorativeSeparatorSpacingStyles: Record<DecorativeSeparatorSpacing, string> = {
    compact: 'my-8',
    medium: 'my-16',
    spacious: 'my-32',
};

const iconSizeStyles: Record<DecorativeSeparatorIconSize, string> = {
    small: 'w-8 h-8 md:w-10 md:h-10',
    medium: 'w-10 h-10 md:w-12 md:h-12',
    large: 'w-12 h-12  md:w-16 md:h-16',
};

const iconColorStyles: Record<DecorativeSeparatorColor, string> = {
    neutral: 'text-border-default',
    primary: 'text-foreground-brand-primary',
    secondary: 'text-foreground-brand-secondary',
    mix: 'text-foreground-brand-primary', // NOTE: Lines has contrasting brand color (primary <-> secondary).
};

interface LinesStyleOptions {
    /** Sets the separator lines' width. */
    width: DecorativeSeparatorWidth;

    /** Sets the separator lines' thickness. */
    thickness: DecorativeSeparatorThickness;

    /** Sets the separator color. */
    color: DecorativeSeparatorColor;
}

/** Combines the separator lines' width, thickness, and color classes. */
export function lineStyles({ width, thickness, color }: LinesStyleOptions) {
    return cn(
        decorativeSeparatorWidthStyles[width],
        thicknessStyles[thickness],
        colorStyles[color]
    );
}

interface IconStyleOptions {
    /** Sets the separator icon's size. */
    size: DecorativeSeparatorIconSize;

    /** Sets the separator icon's color. */
    color: DecorativeSeparatorColor;
}

/** Combines the separator icon's size and color classes. */
export function iconStyles({ color, size }: IconStyleOptions) {
    return cn(iconSizeStyles[size], iconColorStyles[color]);
}
