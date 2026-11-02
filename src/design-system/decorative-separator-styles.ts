import { cn } from '@/src/utils/cn';

export type DecorativeSeparatorColor = 'primary' | 'secondary' | 'mix';

export type DecorativeSeparatorThickness = 'thin' | 'medium' | 'thick';

export type DecorativeSeparatorSpacing = 'compact' | 'medium' | 'spacious';

export type DecorativeSeparatorWidth = 'short' | 'medium' | 'long';

export type DecorativeSeparatorIconSize = 'small' | 'medium' | 'large';

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

const colorStyles: Record<DecorativeSeparatorColor, string> = {
    primary: 'border-border-brand-primary',
    secondary: 'border-border-brand-secondary',
    mix: 'border-border-brand-secondary', // NOTE: Icon has contrasting brand color (primary <-> secondary).
};

const iconSizeStyles: Record<DecorativeSeparatorIconSize, string> = {
    small: 'w-8 h-8 md:w-10 md:h-10',
    medium: 'w-10 h-10 md:w-12 md:h-12',
    large: 'w-12 h-12  md:w-16 md:h-16',
};

const iconColorStyles: Record<DecorativeSeparatorColor, string> = {
    primary: 'text-foreground-brand-primary',
    secondary: 'text-foreground-brand-secondary',
    mix: 'text-foreground-brand-primary', // NOTE: Lines has contrasting brand color (primary <-> secondary).
};

interface LinesStyleProps {
    width: DecorativeSeparatorWidth;
    thickness: DecorativeSeparatorThickness;
    color: DecorativeSeparatorColor;
}

export function lineStyle({ width, thickness, color }: LinesStyleProps) {
    return cn(
        decorativeSeparatorWidthStyles[width],
        thicknessStyles[thickness],
        colorStyles[color]
    );
}

interface IconStyleProps {
    size: DecorativeSeparatorIconSize;
    color: DecorativeSeparatorColor;
}

export function iconStyle({ color, size }: IconStyleProps) {
    return cn(iconSizeStyles[size], iconColorStyles[color]);
}
