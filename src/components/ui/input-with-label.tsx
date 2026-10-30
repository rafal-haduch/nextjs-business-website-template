import React from 'react';
import { Info } from 'lucide-react';

import { cn } from '@/src/utils/cn';

import {
    InputVariant,
    InputColor,
    InputSize,
    inputStyles,
    labelStyles,
    InputRoundedCorners,
} from '@/src/design-system/input-with-label-styles';

interface InputWithLabelProps extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    'className' | 'id' | 'size'
> {
    /** Required id used to associate the input with its label. */
    id: string;

    /** Label text; also used as the placeholder when `labelPlacement` is `placeholder`. */
    label: string;

    /**
     * Places the label above the input or visually hides it and uses its
     * text as the input placeholder. The hidden label remains
     * available to screen readers.
     */
    labelPlacement?: 'above' | 'placeholder';

    /**
     * Input appearance: `outline` uses a transparent background and colored border;
     * `filled` uses a white background and colored border; `solid` uses a strong
     * palette color without a border; `soft` uses a light palette background with
     * a colored border that becomes more prominent on focus.
     */
    variant?: InputVariant;

    /** Input and label height and text scale. */
    size?: InputSize;

    /** Input and label color theme. */
    color?: InputColor;

    /** Input corner radius. */
    roundedCorners?: InputRoundedCorners;

    /** Help text announced with the input. */
    description?: string;

    /** Error text; marks the input as invalid and associates the message with it. */
    error?: string;

    /** Optional CSS class overrides for individual part of the component. */
    wrapperClassName?: string;
    /** Optional CSS class overrides for individual part of the component. */
    labelClassName?: string;
    /** Optional CSS class overrides for individual part of the component. */
    inputClassName?: string;
    /** Optional CSS class overrides for individual part of the component. */
    descriptionClassName?: string;
    /** Optional CSS class overrides for individual part of the component. */
    errorClassName?: string;
}

/**
 * Text input with a label, optional description, and error message.
 *
 * The label can appear above the input or be visually hidden while serving
 * as its placeholder. The description and error message are associated
 * with the input for screen readers.
 */
export default function InputWithLabel({
    id,
    label,
    labelPlacement = 'above',
    variant = 'filled',
    size = 'medium',
    color = 'primary',
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
}: InputWithLabelProps) {
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
                    labelClassName,
                    labelPlacement === 'above' ? '' : 'sr-only'
                )}
            >
                {label}
            </label>
            <input
                {...restInputProps}
                id={id}
                aria-invalid={error ? true : ariaInvalid}
                aria-describedby={describedBy}
                placeholder={labelPlacement === 'placeholder' ? label : ''}
                className={cn(
                    inputStyles({ variant, color, size, roundedCorners }),
                    inputClassName
                )}
            />
            {description && (
                <div className="text-foreground-muted flex items-center gap-1">
                    <Info width={16} height={16} />
                    <p id={descriptionId} className={cn('text-sm', descriptionClassName)}>
                        {description}
                    </p>
                </div>
            )}
            {error && (
                <p id={errorId} className={cn('text-state-error text-sm', errorClassName)}>
                    {error}
                </p>
            )}
        </div>
    );
}
