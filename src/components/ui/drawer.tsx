'use client';

import { useEffect, useState } from 'react';

import { cn } from '@/src/utils/cn';

import Dialog, { DialogSharedProps } from '@/src/components/ui/dialog';

type DrawerSize = 'sm' | 'md' | 'lg' | 'full';
type DrawerSide = 'left' | 'right' | 'top' | 'bottom';
type DrawerAnimationDuration = 'slow' | 'base' | 'fast' | 'instant';

interface DrawerProps extends DialogSharedProps {
    size?: DrawerSize;
    side?: DrawerSide;
    /**
     * Enables opening and closing slide animations.
     */
    animation?: boolean;
    /**
     * Duration of the drawer transition.
     */
    animationDuration?: DrawerAnimationDuration;
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

const drawerAnimationStyles: Record<DrawerSide, { open: string; closed: string }> = {
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

const drawerDurationStyles: Record<DrawerAnimationDuration, string> = {
    slow: '700ms',
    base: '300ms',
    fast: '150ms',
    instant: '0ms',
};
/**
 * Sliding panel built on top of {@link Dialog}.
 *
 * Supports configurable:
 * - placement
 * - size
 * - slide animations
 * - animation duration
 * - delayed unmount after exit animations
 */
export default function Drawer({
    open,
    onClose,
    wrapperClassName,
    panelClassName,
    panelHTMLAttributes,
    children,
    unmountOnExit = false,
    lockScroll = false,
    showOverlay = false,
    closeOnOverlayClick = false,
    closeOnEscape = false,
    showCloseButton = false,
    side = 'right',
    size = 'lg',
    animation = true,
    animationDuration = 'base',
}: DrawerProps) {
    // Controls the slide animation independently from mounting.
    const [visible, setVisible] = useState(false);

    // Delay the visible state by one frame so the opening transition can start.
    useEffect(() => {
        if (open) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setVisible(false);

            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    setVisible(true);
                });
            });
        } else {
            setVisible(false);
        }
    }, [open]);

    return (
        <Dialog
            open={open}
            onClose={onClose}
            wrapperClassName={cn(drawerWrapperStyles[side], wrapperClassName)}
            panelClassName={cn(
                'relative bg-white transition-transform',
                drawerSizeStyles[side][size],
                drawerPanelBaseStyles[side],
                animation
                    ? visible
                        ? drawerAnimationStyles[side].open
                        : drawerAnimationStyles[side].closed
                    : '',
                drawerDurationStyles[animationDuration],
                panelClassName
            )}
            panelHTMLAttributes={{
                ...panelHTMLAttributes,
                style: {
                    ...panelHTMLAttributes?.style,
                    '--tw-duration': drawerDurationStyles[animationDuration],
                } as React.CSSProperties,
            }}
            unmountOnExit={unmountOnExit}
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
