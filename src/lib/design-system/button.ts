import { cn } from '@/src/utils/cn';

type Variant = 'solid' | 'outline' | 'ghost' | 'none';
type Color = 'primary' | 'secondary' | 'gradient' | 'none';
type Size = 'small' | 'base' | 'large' | 'none';

const variantStyles: Record<Variant, string> = {
    solid: 'btn-solid',
    outline: 'btn-outline',
    ghost: 'btn-ghost',
    none: '',
};

const colorStyles: Record<Color, string> = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    gradient: 'btn-gradient',
    none: '',
};

const sizeStyles: Record<Size, string> = {
    small: 'btn-sm',
    base: 'btn-md',
    large: 'btn-lg gap-4',
    none: '',
};

interface Options {
    variant?: Variant;
    color?: Color;
    size?: Size;
    className?: string;
}

/**
 * Generates a combined className string for button and link elements
 *  based on predefined component classes defined in `globals.css` (`@layer components`).
 * @param variant - Visual style of the button. Default: `'solid'`.
 * @param color - Color of the button from brand scale palette. Default: `'primary'`.
 * @param size - Controls padding and font size. Default: `'base'`.
 * @param className - Additional Tailwind classes merged via `cn()` (clsx + tailwind-merge).
 */
export function getButtonClasses({
    variant = 'solid',
    color = 'primary',
    size = 'base',
    className,
}: Options = {}) {
    return cn(
        'btn mx-auto',
        variantStyles[variant],
        colorStyles[color],
        sizeStyles[size],
        className
    );
}
