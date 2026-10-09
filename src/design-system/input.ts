import { cn } from '@/src/utils/cn';

export type InputVariant = 'solid' | 'outline' | 'default';
export type InputColor = 'primary' | 'secondary' | 'mix' | 'none';
export type InputSize = 'small' | 'medium' | 'large' | 'none';

const variantStyles: Record<InputVariant, string> = {
    solid: 'input-solid',
    outline: 'input-outline',
    default: 'input-default',
};

const colorStyles: Record<InputColor, string> = {
    primary: 'input-primary',
    secondary: 'input-secondary',
    mix: 'input-mix',
    none: '',
};

const sizeStyles: Record<InputSize, string> = {
    small: 'input-sm',
    medium: 'input-md',
    large: 'input-lg',
    none: '',
};

interface Options {
    variant?: InputVariant;
    color?: InputColor;
    size?: InputSize;
    className?: string;
}

export function inputStyles({
    variant = 'default',
    color = 'primary',
    size = 'medium',
    className,
}: Options) {
    return cn('input', variantStyles[variant], colorStyles[color], sizeStyles[size], className);
}
