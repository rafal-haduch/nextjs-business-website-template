import React from 'react';

import { cn } from '@/src/utils/cn';

type ContainerSize = 'sm' | 'base' | 'lg' | 'full';
type ContainerPadding = 'sm' | 'base' | 'lg' | 'none';

const sizeStyles: Record<ContainerSize, string> = {
    sm: 'max-w-3xl',
    base: 'max-w-7xl',
    lg: 'max-w-screen-2xl',
    full: 'w-full',
};

const paddingStyles: Record<ContainerPadding, string> = {
    sm: 'px-2 xl:px-0',
    base: 'px-4 xl:px-0',
    lg: 'px-6 xl:px-2',
    none: '',
};

interface Props extends React.HTMLAttributes<HTMLElement> {
    size?: ContainerSize;
    padding?: ContainerPadding;
    className?: string;
    children: React.ReactNode;
}

/**
 * Reusable container component used to constrain content width and apply horizontal padding.
 *
 * @param size - Maximum width container (sm/base/lg/full). Default: `'base'`.
 * @param padding - Horizontal padding (sm/base/lg/none). Default: `'base'`.
 * @param className - Additional Tailwind classes merged via `cn()`.
 * @param children - Container content.
 */
export default function Container({
    size = 'base',
    padding = 'base',
    className,
    children,
    ...props
}: Props) {
    return (
        <div
            className={cn('mx-auto', sizeStyles[size], paddingStyles[padding], className)}
            {...props}
        >
            {children}
        </div>
    );
}
