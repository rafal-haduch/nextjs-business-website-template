'use client';

import { useEffect, useState } from 'react';

import { cn } from '@/src/utils/cn';

import Dialog, { DialogSharedProps } from '@/src/components/ui/dialog';

import {
    DrawerAnimationDuration,
    drawerAnimationStyles,
    drawerDurationStyles,
    DrawerSide,
    DrawerSize,
    drawerPanelSizeStyles,
    drawerWrapperStyles,
} from '@/src/design-system/drawer-styles';

interface DrawerProps extends DialogSharedProps {
    /** Controls the drawer panel's width or height, depending on its side. */
    size?: DrawerSize;

    /** Sets which viewport edge the drawer slides in from. */
    side?: DrawerSide;

    /**
     * Enables slide transitions when the drawer opens and closes.
     */
    animation?: boolean;

    /**
     * Sets the duration of the opening and closing transitions.
     */
    animationDuration?: DrawerAnimationDuration;
}

/**
 * A sliding panel built on top of {@link Dialog}.
 *
 * Configure which edge it opens from, its size, and whether slide animations
 * are enabled. It also supports the shared dialog options for overlays,
 * dismissal, scroll locking, panel attributes, and unmounting after close.
 * By default, the panel fills the viewport along the axis perpendicular to
 * its opening direction. Override that dimension with `panelClassName` when
 * needed (for example, `h-1/2 my-auto` for a partial-height side drawer or
 * `w-1/2 mx-auto` for a partial-width top or bottom drawer).
 */
export default function Drawer({
    // --- DialogSharedProps ---
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
    // --- DrawerProps ---
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
                drawerPanelSizeStyles[side][size],
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
