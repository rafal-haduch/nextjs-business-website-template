'use client';

import React from 'react';
import { useEffect } from 'react';
import { X } from 'lucide-react';

import { cn } from '@/src/utils/cn';

export type DialogPlacement = 'center' | 'top' | 'bottom';
export type DialogSize = 'sm' | 'md' | 'lg' | 'xl' | 'full';

export interface PanelHTMLAttributes extends Omit<
    React.HTMLAttributes<HTMLDivElement>,
    'className' | 'children'
> {
    role?: React.AriaRole;
    'aria-label'?: string;
    'aria-labelledby'?: string;
    'aria-describedby'?: string;
    'aria-modal'?: boolean;
}

export interface DialogSharedProps {
    open: boolean;
    onClose: () => void;
    panelHTMLAttributes?: PanelHTMLAttributes;
    children: React.ReactNode;
}

export interface DialogBehaviorProps {
    lockScroll: boolean;
    showOverlay: boolean;
    closeOnOverlayClick: boolean;
    closeOnEscape: boolean;
    showCloseButton: boolean;
}

export interface DialogLayoutProps {
    overlayClassName?: string;
    wrapperClassName?: string;
    panelClassName?: string;
}

export type DialogProps = DialogSharedProps & DialogBehaviorProps & DialogLayoutProps;

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
    useEffect(() => {
        if (!open || !closeOnEscape) return;

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') onClose();
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [open, closeOnEscape, onClose]);

    useEffect(() => {
        if (!open || !lockScroll) return;

        const originalOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = originalOverflow;
        };
    }, [open, lockScroll]);

    if (!open) return null;

    const {
        role = 'dialog',
        'aria-modal': ariaModal = true,
        ...restPanelProps
    } = panelHTMLAttributes ?? {};

    return (
        <div className="pointer-events-none fixed inset-0 z-100">
            {/* Overlay */}
            {showOverlay && (
                <button
                    type="button"
                    aria-label="Close dialog"
                    onClick={() => {
                        if (closeOnOverlayClick) onClose();
                    }}
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
                    onClick={(e) => e.stopPropagation()}
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
                            <X />
                        </button>
                    )}
                    {children}
                </div>
            </div>
        </div>
    );
}
