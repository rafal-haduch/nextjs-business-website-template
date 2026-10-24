import { cn } from '@/src/utils/cn';

export type InputVariant = 'solid' | 'outline' | 'default';
export type InputSize = 'small' | 'medium' | 'large' | 'none';
export type InputColor = 'primary' | 'secondary' | 'mix' | 'base';

export type LabelSize = 'small' | 'medium' | 'large';
export type LabelColor = 'primary' | 'secondary' | 'base';

const inputVariantStyles: Record<InputVariant, string> = {
    solid: 'input-solid',
    outline: 'input-outline',
    default: 'input-default',
};

const inputSizeStyles: Record<InputSize, string> = {
    small: 'input-sm',
    medium: 'input-md',
    large: 'input-lg',
    none: '',
};

const inputColorStyles: Record<InputColor, string> = {
    primary: 'input-primary',
    secondary: 'input-secondary',
    mix: 'input-mix',
    base: '',
};

const labelSizeStyles: Record<LabelSize, string> = {
    small: 'text-sm',
    medium: 'text-base',
    large: 'text-lg',
};

const labelColorStyles: Record<LabelColor, string> = {
    primary: 'text-foreground-brand-primary',
    secondary: 'text-foreground-brand-secondary',
    base: 'text-foreground-primary',
};

interface InputOptions {
    variant?: InputVariant;
    color?: InputColor;
    size?: InputSize;
}

export function inputStyles({
    variant = 'default',
    color = 'primary',
    size = 'medium',
}: InputOptions) {
    return cn('input', inputVariantStyles[variant], inputColorStyles[color], inputSizeStyles[size]);
}

interface LabelOptions {
    color?: LabelColor;
    size?: LabelSize;
}

export function labelStyles({ color = 'base', size = 'medium' }: LabelOptions) {
    return cn(labelColorStyles[color], labelSizeStyles[size]);
}
