'use client';

import { cn } from '@/src/utils/cn';

import Dialog, { DialogSharedProps } from '@/src/components/ui/dialog';

type DrawerSize = 'sm' | 'md' | 'lg' | 'full';
type DrawerSide = 'left' | 'right' | 'top' | 'bottom';

interface DrawerProps extends DialogSharedProps {
    side?: DrawerSide;
    size?: DrawerSize;
}

const drawerWrapperStyles: Record<DrawerSide, string> = {
    left: 'flex h-full justify-start',
    right: 'flex h-full justify-end',
    top: 'flex h-full items-start',
    bottom: 'flex h-full items-end',
};

const drawerPanelBaseStyles: Record<DrawerSide, string> = {
    left: 'h-full',
    right: 'h-full',
    top: 'w-full',
    bottom: 'w-full',
};

const drawerSizeStyles: Record<DrawerSide, Record<DrawerSize, string>> = {
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

export default function Drawer({
    open,
    onClose,
    wrapperClassName,
    panelClassName,
    panelHTMLAttributes,
    children,
    lockScroll = false,
    showOverlay = true,
    closeOnOverlayClick = false,
    closeOnEscape = false,
    showCloseButton = false,
    side = 'right',
    size = 'lg',
}: DrawerProps) {
    return (
        <Dialog
            open={open}
            onClose={onClose}
            wrapperClassName={cn(drawerWrapperStyles[side], wrapperClassName)}
            panelClassName={cn(
                'relative bg-white shadow-2xl',
                drawerPanelBaseStyles[side],
                drawerSizeStyles[side][size],
                panelClassName
            )}
            panelHTMLAttributes={panelHTMLAttributes}
            lockScroll={lockScroll}
            showOverlay={showOverlay}
            closeOnOverlayClick={closeOnOverlayClick}
            closeOnEscape={closeOnEscape}
            showCloseButton={showCloseButton}
        >
            {children}
        </Dialog>
    );
}
