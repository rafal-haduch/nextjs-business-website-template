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

/** Reusable component used to constrain content width and apply horizontal padding.
 * See {@link containerStyles}
 *  **Recommended:** use via `CONTAINER_PRESETS`
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
