export type DrawerSize = 'sm' | 'md' | 'lg' | 'full';

export type DrawerSide = 'left' | 'right' | 'top' | 'bottom';

export type DrawerAnimationDuration = 'slow' | 'base' | 'fast' | 'instant';

export const drawerWrapperStyles: Record<DrawerSide, string> = {
    left: 'flex h-full justify-start',
    right: 'flex h-full justify-end',
    top: 'flex h-full items-start',
    bottom: 'flex h-full items-end',
};

//REVIEW: ????
export const drawerPanelBaseStyles: Record<DrawerSide, string> = {
    left: 'h-full',
    right: 'h-full',
    top: 'w-full',
    bottom: 'w-full',
};

export const drawerSizeStyles: Record<DrawerSide, Record<DrawerSize, string>> = {
    left: {
        sm: 'w-72',
        md: 'w-96',
        lg: 'w-[32rem]',
        full: 'w-screen',
    },
    right: {
        sm: 'w-72',
        md: 'w-96',
        lg: 'w-[32rem]',
        full: 'w-screen',
    },
    top: {
        sm: 'h-48',
        md: 'h-72',
        lg: 'h-96',
        full: 'h-screen',
    },
    bottom: {
        sm: 'h-48',
        md: 'h-72',
        lg: 'h-96',
        full: 'h-screen',
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
