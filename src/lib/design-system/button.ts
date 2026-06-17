import { cn } from '@/src/utils/cn';

type Color = 'primary' | 'secondary' | 'outline' | 'ghost' | 'none';
type Size = 'small' | 'medium' | 'large' | 'none';

const colorStyles: Record<Color, string> = {
    none: '',
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    outline: 'btn-outline',
    ghost: 'btn-ghost',
};

const sizeStyles: Record<Size, string> = {
    small: 'btn-sm',
    medium: 'btn-md',
    large: 'btn-lg gap-4',
    none: '',
};

interface Options {
    color?: Color;
    size?: Size;
    className?: string;
}

/**
 * Generates a combined className string for button and link elements
 *  based on predefined component classes defined in `globals.css` (`@layer components`).
 * @param color - Visual style of the button. Default: `'primary'`. Unstyled: `'none'`.
 * @param size - Controls padding and font size. Default: `'medium'`. Unstyled: `'none'`.
 * @param className - Additional Tailwind classes merged via `cn()` (clsx + tailwind-merge).
 */
export function getButtonClasses({ color = 'primary', size = 'medium', className }: Options = {}) {
    return cn('btn mx-auto', colorStyles[color], sizeStyles[size], className);
}
