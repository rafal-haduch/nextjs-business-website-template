'use client';

import { cn } from '@/src/utils/cn';

import Dialog, { DialogSharedProps } from '@/src/components/ui/dialog';

import { ModalSize, modalSizeStyles } from '@/src/design-system/modal-styles';

interface ModalProps extends DialogSharedProps {
    size?: ModalSize;
}

/**
 * Centered modal dialog built on top of {@link Dialog}.
 */
export default function Modal({
    open,
    onClose,
    wrapperClassName,
    panelClassName,
    panelHTMLAttributes,
    children,
    unmountOnExit = true,
    lockScroll = false,
    showOverlay = true,
    closeOnOverlayClick = false,
    closeOnEscape = false,
    showCloseButton = false,
    size = 'lg',
}: ModalProps) {
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
            wrapperClassName={cn(
                'flex min-h-full items-center justify-center p-4',
                wrapperClassName
            )}
            panelClassName={cn(
                'relative w-full rounded-2xl bg-white p-6 shadow-2xl',
                modalSizeStyles[size],
                panelClassName
            )}
        >
            {children}
        </Dialog>
    );
}
