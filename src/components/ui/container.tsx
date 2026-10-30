import React from 'react';

import { cn } from '@/src/utils/cn';

import {
    type ContainerPadding,
    type ContainerWidth,
    containerStyles,
} from '@/src/design-system/container-styles';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Maximum content width. Defaults to `md`. */
    width?: ContainerWidth;

    /** Horizontal padding. Defaults to `md`. */
    padding?: ContainerPadding;

    children: React.ReactNode;
}

/** Constrains content width and applies horizontal padding.
 * Use a preset from `CONTAINER_PRESETS` for a predefined combination.
 *
 * @example
 * `<Container {...CONTAINER_PRESETS.base}>...</Container>`.
 *
 * @See {@link containerStyles}
 */
export default function Container({
    width = 'md',
    padding = 'md',
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
