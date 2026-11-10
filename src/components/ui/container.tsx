import React from 'react';

import { cn } from '@/src/utils/cn';

import {
    type ContainerPadding,
    type ContainerWidth,
    containerStyles,
} from '@/src/design-system/container-styles';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Maximum content width. */
    width?: ContainerWidth;

    /** Horizontal padding. */
    padding?: ContainerPadding;

    children: React.ReactNode;
}

/** Constrains content width and applies horizontal padding.
 * Use a preset from `CONTAINER_PRESETS` for a predefined combination.
 *
 * @example
 * `<Container {...CONTAINER_PRESETS.hero}>...</Container>`.
 *
 * @See {@link containerStyles}
 */
export default function Container({
    width = 'medium',
    padding = 'medium',
    className,
    children,
    ...props
}: ContainerProps) {
    return (
        <div className={cn('mx-auto', containerStyles({ width, padding }), className)} {...props}>
            {children}
        </div>
    );
}
