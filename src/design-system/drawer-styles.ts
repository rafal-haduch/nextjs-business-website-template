import { SizeScale } from '@/src/design-system/scale.types';

export type DrawerSize = SizeScale | 'full';

/** Viewport edge from which the drawer enters. */
export type DrawerSide = 'left' | 'right' | 'top' | 'bottom';

export type DrawerAnimationDuration = 'slow' | 'base' | 'fast' | 'instant';

/** Alignment classes that position the drawer against its selected viewport edge. */
export const drawerWrapperStyles: Record<DrawerSide, string> = {
    left: 'flex h-full justify-start',
    right: 'flex h-full justify-end',
    top: 'flex h-full items-start',
    bottom: 'flex h-full items-end',
};

/** Panel dimensions for each drawer side and size option. */
export const drawerPanelSizeStyles: Record<DrawerSide, Record<DrawerSize, string>> = {
    left: {
        small: 'h-full w-72',
        medium: 'h-full w-96',
        large: 'h-full w-[32rem]',
        full: 'h-full w-screen',
    },
    right: {
        small: 'h-full w-72',
        medium: 'h-full w-96',
        large: 'h-full w-[32rem]',
        full: 'h-full w-screen',
    },
    top: {
        small: 'w-full h-48',
        medium: 'w-full h-72',
        large: 'w-full h-96',
        full: 'w-full h-screen',
    },
    bottom: {
        small: 'w-full h-48',
        medium: 'w-full h-72',
        large: 'w-full h-96',
        full: 'w-full h-screen',
    },
};

/** Translation classes for the open and closed states of each drawer side. */
export const drawerAnimationStyles: Record<DrawerSide, { open: string; closed: string }> = {
    right: {
        open: 'translate-x-0',
        closed: 'translate-x-full',
    },
    left: {
        open: '-translate-x-0',
        closed: '-translate-x-full',
    },
    top: {
        open: 'translate-y-0',
        closed: '-translate-y-full',
    },
    bottom: {
        open: 'translate-y-0',
        closed: 'translate-y-full',
    },
};

/** Transition duration values in milliseconds for each animation preset. */
export const drawerDurationStyles: Record<DrawerAnimationDuration, string> = {
    instant: '0ms',
    fast: '150ms',
    base: '300ms',
    slow: '700ms',
};
