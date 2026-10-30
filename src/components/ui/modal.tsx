'use client';

import { cn } from '@/src/utils/cn';

import Dialog, { DialogSharedProps } from '@/src/components/ui/dialog';

import { ModalSize, modalSizeStyles } from '@/src/design-system/modal-styles';

interface ModalProps extends DialogSharedProps {
    /** Controls the modal panel's maximum width. Defaults to `lg`. */
    size?: ModalSize;
}

/**
 * Centered modal dialog built on top of {@link Dialog}.
 *
 * By default, it displays a backdrop and close button, closes on Escape,
 * and keeps the panel centered in the viewport. Clicking the backdrop does
 * not close it by default; configure the dismissal behavior with the
 * corresponding dialog props.
 */
export default function Modal({
    // --- DialogSharedProps ---
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
    closeOnEscape = true,
    showCloseButton = true,
    // --- ModalProps ---
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
