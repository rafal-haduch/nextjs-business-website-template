import React from 'react';

import { cn } from '@/src/utils/cn';

import { InputColor, InputSize, inputStyles, InputVariant } from '@/src/design-system/input';

type Order = 'labelFirst' | 'inputFirst';

const labelVariantStyles: Record<InputColor, string> = {
    primary: 'text-foreground-brand-primary',
    secondary: 'text-foreground-brand-secondary',
    mix: 'text-foreground-brand-primary',
    none: '',
};

interface Props extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'className' | 'size'> {
    variant?: InputVariant;
    color?: InputColor;
    coloredLabel?: boolean;
    size?: InputSize;
    order?: Order;

    label?: string;
    description?: string;
    error?: string;

    wrapperClassName?: string;
    labelClassName?: string;
    inputClassName?: string;
    descriptionClassName?: string;
    errorClassName?: string;
}

export default function InputWithLabel({
    variant,
    color = 'none',
    coloredLabel = false,
    size,
    order = 'labelFirst',
    label,
    description,
    error,
    wrapperClassName,
    labelClassName,
    inputClassName,
    descriptionClassName,
    errorClassName,
    ...restInputProps
}: Props) {
    return (
        <div
            className={cn(
                'flex w-full',
                order === 'labelFirst' ? 'flex-col' : 'flex-col-reverse',
                wrapperClassName
            )}
        >
            <label
                htmlFor={restInputProps.id}
                className={cn(coloredLabel && labelVariantStyles[color], labelClassName)}
            >
                {label}
            </label>
            <input
                {...restInputProps}
                className={cn(inputStyles({ variant, color, size, className: inputClassName }))}
            ></input>
            {description && <p className={cn('', descriptionClassName)}>{description}</p>}
            {error && <p className={cn('text-state-error', errorClassName)}>{error}</p>}
        </div>
    );
}
