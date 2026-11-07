import { cn } from '@/src/utils/cn';

import { LengthScale, SizeScale } from '@/src/design-system/scale.types';

export type ContainerWidth = LengthScale | 'full';

export type ContainerPadding = SizeScale;

export type ContainerVariant = 'hero' | 'narrow' | 'base' | 'wide' | 'full';

const containerWidthStyles: Record<ContainerWidth, string> = {
    short: 'max-w-3xl',
    medium: 'max-w-7xl',
    long: 'max-w-screen-2xl',
    full: 'w-full',
};

const containerPaddingStyles: Record<ContainerPadding, string> = {
    small: 'px-2 xl:px-0',
    medium: 'px-4 xl:px-0',
    large: 'px-6 xl:px-2',
};

export interface ContainerStyleOptions {
    /** Maximum container width. */
    width: ContainerWidth;

    /** Horizontal padding of the container. */
    padding: ContainerPadding;
}

/** Combines the container width and horizontal padding classes. */
export function containerStyles({ width, padding }: ContainerStyleOptions) {
    return cn(containerWidthStyles[width], containerPaddingStyles[padding]);
}

/** Predefined container style combinations for common use cases. */
export const CONTAINER_PRESETS = {
    hero: {
        width: 'medium',
        padding: 'small',
        className: 'px-0',
    },
    narrow: {
        width: 'short',
        padding: 'medium',
    },
    base: {
        width: 'medium',
        padding: 'medium',
    },
    wide: {
        width: 'long',
        padding: 'medium',
    },
    full: {
        width: 'full',
        padding: 'medium',
    },
} satisfies Record<ContainerVariant, ContainerStyleOptions & { className?: string }>;
