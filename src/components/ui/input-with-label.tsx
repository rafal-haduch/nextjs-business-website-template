import React from 'react';

import { cn } from '@/src/utils/cn';

import {
    InputVariant,
    InputColor,
    InputSize,
    inputStyles,
    LabelColor,
    LabelSize,
    labelStyles,
} from '@/src/design-system/input-with-label';

interface Props extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'className' | 'id'> {
    id: string;
    label: string;

    inputVariant?: InputVariant;
    inputSize?: InputSize;
    inputColor?: InputColor;

    labelSize?: LabelSize;
    labelColor?: LabelColor;

    description?: string;
    error?: string;

    wrapperClassName?: string;
    labelClassName?: string;
    inputClassName?: string;
    descriptionClassName?: string;
    errorClassName?: string;
}

export default function InputWithLabel({
    id,
    label,
    inputVariant = 'default',
    inputColor = 'primary',
    inputSize = 'medium',
    labelColor,
    labelSize,
    description,
    error,
    wrapperClassName,
    labelClassName,
    inputClassName,
    descriptionClassName,
    errorClassName,
    'aria-describedby': ariaDescribedBy,
    'aria-invalid': ariaInvalid,
    ...restInputProps
}: Props) {
    const descriptionId = `${id}-description`;
    const errorId = `${id}-error`;

    const describedBy =
        [ariaDescribedBy, description ? descriptionId : undefined, error ? errorId : undefined]
            .filter(Boolean)
            .join(' ') || undefined;

    return (
        <div className={cn('flex w-full flex-col gap-1.5', wrapperClassName)}>
            <label
                htmlFor={id}
                className={cn(
                    labelStyles({
                        color: labelColor,
                        size: labelSize,
                    }),
                    labelClassName
                )}
            >
                {label}
            </label>
            <input
                {...restInputProps}
                id={id}
                aria-invalid={error ? true : ariaInvalid}
                aria-describedby={describedBy}
                className={cn(
                    inputStyles({ variant: inputVariant, color: inputColor, size: inputSize }),
                    inputClassName
                )}
            ></input>
            {description && (
                <p
                    id={descriptionId}
                    className={cn('text-foreground-secondary text-sm', descriptionClassName)}
                >
                    {description}
                </p>
            )}
            {error && (
                <p id={errorId} className={cn('text-state-error text-sm', errorClassName)}>
                    {error}
                </p>
            )}
        </div>
    );
}
