'use client';

import { cn } from '@/src/utils/cn';

import Dialog, { DialogSharedProps } from '@/src/components/ui/dialog';

type BannerPlacement = 'top' | 'bottom';

interface BannerProps extends DialogSharedProps {
    placement?: BannerPlacement;
}

const placementStyles: Record<BannerPlacement, string> = {
    top: 'items-start justify-center ',
    bottom: 'items-end justify-center',
};

const shadowStyles: Record<BannerPlacement, string> = {
    top: 'shadow-[0_10px_30px_rgba(0,0,0,0.05)]',
    bottom: 'shadow-[0_-10px_30px_rgba(0,0,0,0.05)]',
};

export default function Banner({
    open,
    onClose,
    wrapperClassName,
    panelClassName,
    panelHTMLAttributes,
    children,
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
            lockScroll={lockScroll}
            showOverlay={showOverlay}
            closeOnOverlayClick={closeOnOverlayClick}
            closeOnEscape={closeOnEscape}
            showCloseButton={showCloseButton}
            wrapperClassName={cn(placementStyles[placement], wrapperClassName)}
            panelClassName={cn(shadowStyles[placement], panelClassName)}
        >
            {children}
        </Dialog>
    );
}
