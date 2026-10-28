import { cn } from '@/src/utils/cn';

export type ContainerWidth = 'sm' | 'md' | 'lg' | 'full';

export type ContainerPadding = 'sm' | 'md' | 'lg';

export type ContainerVariant = 'hero' | 'narrow' | 'base' | 'wide' | 'full';

const widthStyles: Record<ContainerWidth, string> = {
    sm: 'max-w-3xl',
    md: 'max-w-7xl',
    lg: 'max-w-screen-2xl',
    full: 'w-full',
};

const paddingStyles: Record<ContainerPadding, string> = {
    sm: 'px-2 xl:px-0',
    md: 'px-4 xl:px-0',
    lg: 'px-6 xl:px-2',
};

export interface ContainerStyleOptions {
    width: ContainerWidth;
    padding: ContainerPadding;
}

export function containerStyles({ width, padding }: ContainerStyleOptions) {
    return cn(widthStyles[width], paddingStyles[padding]);
}

/** Predefined container style combinations for common use cases. Use `className` for one-off overrides. */
export const CONTAINER_PRESETS = {
    hero: {
        width: 'md',
        padding: 'sm',
        className: 'px-0',
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
} satisfies Record<ContainerVariant, Partial<ContainerStyleOptions> & { className?: string }>;
