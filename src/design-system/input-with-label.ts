import { cn } from '@/src/utils/cn';

export type InputVariant = 'outline' | 'filled' | 'soft' | 'solid';
export type InputSize = 'small' | 'medium' | 'large';
export type InputColor = 'neutral' | 'primary' | 'secondary' | 'mix';
export type InputRoundedCorners = 'none' | 'soft' | 'strong';

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
    soft: 'rounded-md',
    strong: 'rounded-xl',
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
    variant: InputVariant;
    color: InputColor;
    size: InputSize;
    roundedCorners: InputRoundedCorners;
}

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
    color: InputColor;
    size: InputSize;
}

export function labelStyles({ color, size }: LabelOptions) {
    return cn(labelColorStyles[color], labelSizeStyles[size]);
}
