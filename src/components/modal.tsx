'use client';

import { cn } from '@/src/utils/cn';

import Dialog, { DialogSharedProps } from '@/src/components/dialog';

type ModalSize = 'sm' | 'md' | 'lg' | 'xl' | 'full';

interface ModalProps extends DialogSharedProps {
    size?: ModalSize;
}

const modalSizeStyles: Record<ModalSize, string> = {
    sm: 'max-w-md',
    md: 'max-w-xl',
    lg: 'max-w-3xl',
    xl: 'max-w-5xl',
    full: 'max-w-none w-[95vw] h-[95vh]',
};

export default function Modal({
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
    size = 'lg',
}: ModalProps) {
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
