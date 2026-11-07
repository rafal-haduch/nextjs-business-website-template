import { cn } from '@/src/utils/cn';

import { ColorRole } from '@/src/design-system/scale.types';

type LinkColor = ColorRole | 'base';

type LinkHoverColor = ColorRole | 'base';

const linkColorStyles: Record<LinkColor, string> = {
    base: 'text-blue-400',
    primary: 'text-brand-primary',
    secondary: 'text-brand-secondary',
    neutral: '',
};

const linkHoverColorStyles: Record<LinkHoverColor, string> = {
    base: 'text-blue-300',
    primary: 'hover:text-brand-primary',
    secondary: 'hover:text-brand-secondary',
    neutral: '',
};

interface LinkStyleOptions {
    /** The base color of the link text. */
    color?: LinkColor;

    /** Link text color applied on hover. */
    hoverColor?: LinkHoverColor;

    /** Enables default underline. */
    underline?: boolean;

    /** Enables underline on hover. */
    hoverUnderline?: boolean;
}

/**
 * Generates Tailwind classes for link elements.
 * Supports text colors, hover states and underline styles.
 */
export function linkStyles({
    color = 'base',
    hoverColor = 'base',
    underline = false,
    hoverUnderline = false,
}: LinkStyleOptions) {
    return cn(
        'transition-colors',
        linkColorStyles[color],
        linkHoverColorStyles[hoverColor],
        underline && 'underline',
        hoverUnderline && 'hover:underline'
    );
}
