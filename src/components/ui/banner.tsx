'use client';

import { cn } from '@/src/utils/cn';

import Dialog, { DialogSharedProps } from '@/src/components/ui/dialog';

import {
    BannerPlacement,
    bannerPlacementStyles,
    shadowStyles,
} from '@/src/design-system/banner-styles';

interface BannerProps extends DialogSharedProps {
    placement?: BannerPlacement;
}

/**
 * Banner displayed at the top or bottom of the viewport built on top of {@link Dialog}.
 */
export default function Banner({
    open,
    onClose,
    wrapperClassName,
    panelClassName,
    panelHTMLAttributes,
    children,
    unmountOnExit = true,
    lockScroll = false,
    showOverlay = false,
    closeOnOverlayClick = false,
    closeOnEscape = false,
    showCloseButton = false,
    placement = 'bottom',
}: BannerProps) {
    return (
        <Dialog
            open={open}
            onClose={onClose}
            panelHTMLAttributes={panelHTMLAttributes}
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
