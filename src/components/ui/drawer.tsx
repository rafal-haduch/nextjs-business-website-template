'use client';

import { useEffect, useState } from 'react';

import { cn } from '@/src/utils/cn';

import Dialog, { DialogSharedProps } from '@/src/components/ui/dialog';

import {
    DrawerAnimationDuration,
    drawerAnimationStyles,
    drawerDurationStyles,
    drawerPanelBaseStyles,
    DrawerSide,
    DrawerSize,
    drawerSizeStyles,
    drawerWrapperStyles,
} from '@/src/design-system/drawer-styles';

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
    rootPositionClassName,
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
            rootPositionClassName={rootPositionClassName}
            wrapperClassName={cn(drawerWrapperStyles[side], wrapperClassName)}
            panelClassName={cn(
                'relative bg-white transition-transform p-0 md:p-0 lg:p-0',
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
