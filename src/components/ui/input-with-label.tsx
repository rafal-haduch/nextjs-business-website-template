import React from 'react';

import { cn } from '@/src/utils/cn';

import {
    InputVariant,
    InputColor,
    InputSize,
    inputStyles,
    labelStyles,
    InputRoundedCorners,
} from '@/src/design-system/input-with-label';
import { Info } from 'lucide-react';

interface Props extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    'className' | 'id' | 'size'
> {
    id: string;
    label: string;

    variant?: InputVariant;
    size?: InputSize;
    color?: InputColor;
    roundedCorners?: InputRoundedCorners;

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
    variant = 'filled',
    color = 'primary',
    size = 'medium',
    roundedCorners = 'none',
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
                        color,
                        size,
                    }),
                    labelClassName
                )}
            >
                {label}
            </label>
            {description && (
                <div className="text-foreground-muted flex items-center gap-1">
                    <Info width={16} height={16} />
                    <p id={descriptionId} className={cn('text-sm', descriptionClassName)}>
                        {description}
                    </p>
                </div>
            )}
            <input
                {...restInputProps}
                id={id}
                aria-invalid={error ? true : ariaInvalid}
                aria-describedby={describedBy}
                className={cn(
                    inputStyles({ variant, color, size, roundedCorners }),
                    inputClassName
                )}
            />
            {error && (
                <p id={errorId} className={cn('text-state-error text-sm', errorClassName)}>
                    {error}
                </p>
            )}
        </div>
    );
}
