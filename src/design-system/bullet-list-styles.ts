export type Marker = 'dash' | 'bullet' | 'check' | 'arrow' | 'none';

export type Color = 'neutral' | 'primary' | 'secondary';

export type Spacing = 'compact' | 'normal' | 'spacious';

export type TextSize = 'small' | 'medium' | 'large';

export const markerStyles: Record<Marker, React.ReactNode> = {
    dash: '–',
    bullet: '•',
    check: '✓',
    arrow: '→',
    none: null,
};

export const colorStyles: Record<Color, React.ReactNode> = {
    neutral: 'text-foreground-secondary',
    primary: 'text-foreground-brand-primary',
    secondary: 'text-foreground-brand-secondary',
};

export const spacingStyles: Record<Spacing, string> = {
    compact: 'gap-1',
    normal: 'gap-2',
    spacious: 'gap-4',
};

export const textSizeStyles: Record<TextSize, string> = {
    small: 'text-sm',
    medium: 'text-base',
    large: 'text-lg',
};
