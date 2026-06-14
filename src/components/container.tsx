import React from 'react';

import { cn } from '@/src/utils/cn';

type Width = 'none' | 'sm' | 'md' | 'lg' | 'full';
type Padding = 'none' | 'sm' | 'md' | 'lg';

type ContainerVariant = 'hero' | 'narrow' | 'base' | 'wide' | 'full' | 'custom';

const widthStyles: Record<Width, string> = {
    none: '',
    sm: 'max-w-3xl',
    md: 'max-w-7xl',
    lg: 'max-w-screen-2xl',
    full: 'w-full',
};

const paddingStyles: Record<Padding, string> = {
    none: '',
    sm: 'px-2 xl:px-0',
    md: 'px-4 xl:px-0',
    lg: 'px-6 xl:px-2',
};

interface Props extends React.HTMLAttributes<HTMLElement> {
    width?: Width;
    padding?: Padding;
    className?: string;
    children: React.ReactNode;
}

/**
 * Predefined container style combinations for common use cases.
 * Use `custom` preset to opt out of all defaults and style entirely via `className`.
 */
export const CONTAINER_PRESETS = {
    hero: {
        width: 'md',
        padding: 'md',
    },
    narrow: {
        width: 'sm',
        padding: 'md',
    },
    base: {
        width: 'md',
        padding: 'md',
    },
    wide: {
        width: 'lg',
        padding: 'md',
    },
    full: {
        width: 'full',
        padding: 'md',
    },
    custom: {
        width: 'none',
        padding: 'none',
    },
} satisfies Record<ContainerVariant, Partial<Props>>;

/**
 * Reusable container component used to constrain content width and apply horizontal padding.
 *
 * **Recommended:** use via {@link CONTAINER_PRESETS}
 *
 * @param width - Maximum width container. Default: `'md'`.
 * @param padding - Horizontal padding. Default: `'md'`.
 * @param className - Additional Tailwind classes merged via `cn()`.
 * @param children - Container content.
 */
export default function Container({
    width = 'md',
    padding = 'md',
    className,
    children,
    ...props
}: Props) {
    return (
        <div
            className={cn('mx-auto', widthStyles[width], paddingStyles[padding], className)}
            {...props}
        >
            {children}
        </div>
    );
}
