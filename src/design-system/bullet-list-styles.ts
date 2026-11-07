import { ColorRole, SizeScale, SpacingScale } from '@/src/design-system/scale.types';

export type BulletListColor = ColorRole;

export type BulletListSpacing = SpacingScale;

export type BulletListTextSize = SizeScale;

export type BulletListMarker = 'dash' | 'bullet' | 'check' | 'arrow' | 'none';

export const bulletListMarkerStyles: Record<BulletListMarker, React.ReactNode> = {
    dash: '–',
    bullet: '•',
    check: '✓',
    arrow: '→',
    none: null,
};

export const bulletListColorStyles: Record<BulletListColor, React.ReactNode> = {
    neutral: 'text-foreground-secondary',
    primary: 'text-foreground-brand-primary',
    secondary: 'text-foreground-brand-secondary',
};

export const bulletListSpacingStyles: Record<BulletListSpacing, string> = {
    compact: 'gap-1',
    medium: 'gap-2',
    spacious: 'gap-4',
};

export const bulletListTextSizeStyles: Record<BulletListTextSize, string> = {
    small: 'text-sm',
    medium: 'text-base',
    large: 'text-lg',
};
