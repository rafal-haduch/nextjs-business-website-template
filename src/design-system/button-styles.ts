import { cn } from '@/src/utils/cn';

import { ExtendedBrandColorRole, SizeScale } from '@/src/design-system/scale.types';

type ButtonSize = SizeScale;

type ButtonColor = ExtendedBrandColorRole;

type ButtonVariant = 'solid' | 'outline' | 'ghost';

const buttonSizeStyles: Record<ButtonSize, string> = {
    small: 'btn-sm',
    medium: 'btn-md',
    large: 'btn-lg gap-4',
};

const buttonColorStyles: Record<ButtonColor, string> = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    mix: 'btn-gradient',
};

const buttonVariantStyles: Record<ButtonVariant, string> = {
    solid: 'btn-solid',
    outline: 'btn-outline',
    ghost: 'btn-ghost',
};

interface ButtonStyleOptions {
    /** Controls padding and font size. */
    size?: ButtonSize;

    /** Color of the button from brand scale palette. */
    color?: ButtonColor;

    /** Visual style of the button. */
    variant?: ButtonVariant;
}

/**
 * Generates a combined className string for button and link elements
 *  based on predefined component classes defined in `globals.css` (`@layer components`).
 */
export function buttonStyles({
    size = 'medium',
    color = 'primary',
    variant = 'solid',
}: ButtonStyleOptions = {}) {
    return cn(
        'btn',
        buttonVariantStyles[variant],
        buttonColorStyles[color],
        buttonSizeStyles[size]
    );
}
