import { cn } from '@/src/utils/cn';

import { CornerRadius, ExtendedColorRole, SizeScale } from '@/src/design-system/scale.types';

export type InputVariant = 'outline' | 'filled' | 'soft' | 'solid';

export type InputSize = SizeScale;

export type InputColor = ExtendedColorRole;

export type InputRoundedCorners = CornerRadius;

const inputVariantStyles: Record<InputVariant, string> = {
    outline: 'input-outline',
    filled: 'input-filled',
    soft: 'input-soft',
    solid: 'input-solid',
};

const inputSizeStyles: Record<InputSize, string> = {
    small: 'input-sm',
    medium: 'input-md',
    large: 'input-lg',
};

const inputColorStyles: Record<InputColor, string> = {
    neutral: 'input-neutral',
    primary: 'input-primary',
    secondary: 'input-secondary',
    mix: 'input-mix',
};

const inputCornersStyles: Record<InputRoundedCorners, string> = {
    none: '',
    small: 'rounded-md',
    medium: 'rounded-xl',
    large: 'rounded-3xl',
};

const labelSizeStyles: Record<InputSize, string> = {
    small: 'text-base',
    medium: 'text-lg',
    large: 'text-xl',
};

const labelColorStyles: Record<InputColor, string> = {
    neutral: 'text-foreground-primary',
    primary: 'text-foreground-brand-primary',
    secondary: 'text-foreground-brand-secondary',
    mix: 'text-foreground-brand-primary',
};

interface InputOptions {
    /** Sets the input's visual style. */
    variant: InputVariant;

    /** Sets the input's color scheme. */
    color: InputColor;

    /** Sets the input's size. */
    size: InputSize;

    /** Sets the input's corner radius. */
    roundedCorners: InputRoundedCorners;
}

/** Combines the input's variant, color, size, and corner radius classes. */
export function inputStyles({ variant, color, size, roundedCorners }: InputOptions) {
    return cn(
        'input',
        inputVariantStyles[variant],
        inputColorStyles[color],
        inputSizeStyles[size],
        inputCornersStyles[roundedCorners]
    );
}

interface LabelOptions {
    /** Sets the label's color. */
    color: InputColor;

    /** Sets the label's text size. */
    size: InputSize;
}

/** Combines the label's color and text size classes. */
export function labelStyles({ color, size }: LabelOptions) {
    return cn(labelColorStyles[color], labelSizeStyles[size]);
}
