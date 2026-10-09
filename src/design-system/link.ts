import { cn } from '@/src/utils/cn';

type Color = 'primary' | 'secondary' | 'base';
type HoverColor = 'primary' | 'secondary' | 'none';

const colorStyles: Record<Color, string> = {
    primary: 'text-brand-primary',
    secondary: 'text-brand-secondary',
    base: '',
};

const hoverColorStyles: Record<HoverColor, string> = {
    primary: 'hover:text-brand-primary',
    secondary: 'hover:text-brand-secondary',
    none: '',
};

interface Options {
    color?: Color;
    hoverColor?: HoverColor;
    underline?: boolean;
    hoverUnderline?: boolean;
    className?: string;
}

/**
 * Generates Tailwind classes for link elements.
 * Supports text colors, hover states and underline styles.
 *
 * @param color - Base text color.
 * @param hoverColor - Text color applied on hover.
 * @param underline - Enables default underline.
 * @param hoverUnderline - Enables underline on hover.
 * @param className - Additional Tailwind classes merged via `cn()` (clsx + tailwind-merge).
 */
export function linkStyles({
    color = 'base',
    hoverColor = 'none',
    underline = false,
    hoverUnderline = false,
    className,
}: Options = {}) {
    return cn(
        'transition-colors',
        colorStyles[color],
        hoverColorStyles[hoverColor],
        underline && 'underline',
        hoverUnderline && 'hover:underline',
        className
    );
}
