'use client';

import React from 'react';
import { X } from 'lucide-react';

import { cn } from '@/src/utils/cn';

import { useEscapeKey } from '@/src/hooks/use-escape-key';
import { useScrollLock } from '@/src/hooks/use-scroll-lock';

import { Portal } from '@/src/components/ui/portal';

interface DialogPanelHTMLAttributes extends Omit<
    React.HTMLAttributes<HTMLDivElement>,
    'className' | 'children'
> {
    role?: React.AriaRole;
    'aria-label'?: string;
    'aria-labelledby'?: string;
    'aria-describedby'?: string;
    'aria-modal'?: boolean;
}

interface DialogCoreProps {
    open: boolean;
    onClose: () => void;
    panelHTMLAttributes?: DialogPanelHTMLAttributes;
    children: React.ReactNode;
}

interface DialogBehaviorProps {
    lockScroll: boolean;
    showOverlay: boolean;
    closeOnOverlayClick: boolean;
    closeOnEscape: boolean;
    showCloseButton: boolean;
}

interface DialogLayoutProps {
    overlayClassName?: string;
    wrapperClassName?: string;
    panelClassName?: string;
}

//NOTE: for parents components (banner, modal, drawer)
export interface DialogSharedProps
    extends DialogCoreProps, Partial<DialogBehaviorProps>, Partial<DialogLayoutProps> {}

interface DialogProps extends DialogCoreProps, DialogBehaviorProps, DialogLayoutProps {}

export default function Dialog({
    open,
    onClose,
    wrapperClassName,
    panelClassName,
    panelHTMLAttributes,
    children,
    lockScroll,
    showOverlay,
    closeOnOverlayClick,
    closeOnEscape,
    showCloseButton,
    overlayClassName,
}: DialogProps) {
    useEscapeKey({
        enabled: open && closeOnEscape,
        onEscape: onClose,
    });

    useScrollLock(open && lockScroll);

    if (!open) return null;

    const {
        role = 'dialog',
        'aria-modal': ariaModal = true,
        ...restPanelProps
    } = panelHTMLAttributes ?? {};

    return (
        <Portal>
            {/* Base container */}
            <div className="pointer-events-none fixed inset-0 z-100">
                {/* Overlay */}
                {showOverlay && (
                    <div
                        aria-hidden="true"
                        onClick={closeOnOverlayClick ? onClose : undefined}
                        className={cn(
                            'pointer-events-auto absolute inset-0 bg-black/50',
                            overlayClassName
                        )}
                    />
                )}
                {/* Wrapper for placement main panel */}
                <div className={cn('relative flex min-h-full', wrapperClassName)}>
                    {/* Main panel with content */}
                    <div
                        role={role}
                        aria-modal={ariaModal}
                        className={cn(
                            'pointer-events-auto relative w-full bg-white p-6',
                            panelClassName
                        )}
                        {...restPanelProps}
                    >
                        {showCloseButton && (
                            <button
                                onClick={onClose}
                                aria-label="Close dialog"
                                className="absolute top-4 right-4 z-10 cursor-pointer p-1"
                            >
                                <X size={24} />
                            </button>
                        )}
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
}
