'use client';

import { cn } from '@/src/utils/cn';

import Dialog, { DialogSharedProps } from '@/src/components/ui/dialog';

import {
    BannerPlacement,
    bannerPlacementStyles,
    shadowStyles,
} from '@/src/design-system/banner-styles';

interface BannerProps extends DialogSharedProps {
    /** Positions the banner at the top or bottom edge of the viewport. */
    placement?: BannerPlacement;
}

/**
 * Edge-aligned banner displayed at the top or bottom of the viewport built on top of {@link Dialog}.
 *
 * It appears at the bottom by default, without a backdrop, scroll lock,
 * Escape handling, or a built-in close button. Use the shared dialog props
 * to enable those behaviors. The panel is exposed as a non-modal region;
 * provide an accessible label in `panelHTMLAttributes` when appropriate.
 */
export default function Banner({
    // --- DialogSharedProps ---
    open,
    onClose,
    rootPositionClassName,
    wrapperClassName,
    panelClassName,
    overlayClassName,
    panelHTMLAttributes,
    children,
    unmountOnExit = true,
    lockScroll = false,
    showOverlay = false,
    closeOnOverlayClick = false,
    closeOnEscape = false,
    showCloseButton = false,
    // --- BannerProps ---
    placement = 'bottom',
}: BannerProps) {
    return (
        <Dialog
            open={open}
            onClose={onClose}
            rootPositionClassName={rootPositionClassName}
            overlayClassName={overlayClassName}
            panelHTMLAttributes={{
                role: 'region',
                'aria-modal': false,
                ...panelHTMLAttributes,
            }}
            unmountOnExit={unmountOnExit}
            lockScroll={lockScroll}
            showOverlay={showOverlay}
            closeOnOverlayClick={closeOnOverlayClick}
            closeOnEscape={closeOnEscape}
            showCloseButton={showCloseButton}
            wrapperClassName={cn(bannerPlacementStyles[placement], wrapperClassName)}
            panelClassName={cn(shadowStyles[placement], panelClassName)}
        >
            {children}
        </Dialog>
    );
}
