export type DrawerSize = 'sm' | 'md' | 'lg' | 'full';

export type DrawerSide = 'left' | 'right' | 'top' | 'bottom';

export type DrawerAnimationDuration = 'slow' | 'base' | 'fast' | 'instant';

export const drawerWrapperStyles: Record<DrawerSide, string> = {
    left: 'flex h-full justify-start',
    right: 'flex h-full justify-end',
    top: 'flex h-full items-start',
    bottom: 'flex h-full items-end',
};

export const drawerPanelSizeStyles: Record<DrawerSide, Record<DrawerSize, string>> = {
    left: {
        sm: 'h-full w-72',
        md: 'h-full w-96',
        lg: 'h-full w-[32rem]',
        full: 'h-full w-screen',
    },
    right: {
        sm: 'h-full w-72',
        md: 'h-full w-96',
        lg: 'h-full w-[32rem]',
        full: 'h-full w-screen',
    },
    top: {
        sm: 'w-full h-48',
        md: 'w-full h-72',
        lg: 'w-full h-96',
        full: 'w-full h-screen',
    },
    bottom: {
        sm: 'w-full h-48',
        md: 'w-full h-72',
        lg: 'w-full h-96',
        full: 'w-full h-screen',
    },
};

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

export const drawerDurationStyles: Record<DrawerAnimationDuration, string> = {
    instant: '0ms',
    fast: '150ms',
    base: '300ms',
    slow: '700ms',
};
