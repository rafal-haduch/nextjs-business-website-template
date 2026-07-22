'use client';

import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';

import { cn } from '@/src/utils/cn';

import { useEscapeKey } from '@/src/hooks/use-escape-key';
import { useScrollLock } from '@/src/hooks/use-scroll-lock';

import Portal from '@/src/components/ui/portal';

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
    /**
     * Additional HTML and ARIA attributes forwarded
     * to the dialog panel element.
     */
    panelHTMLAttributes?: DialogPanelHTMLAttributes;
    children: React.ReactNode;
}

interface DialogBehaviorProps {
    /**
     * Controls whether the dialog is immediately removed from the DOM when closed.
     *
     * Set to `false` to keep the dialog mounted until the exit transition
     * finishes, allowing close animations to complete.
     */
    unmountOnExit: boolean;
    lockScroll: boolean;
    showOverlay: boolean;
    closeOnOverlayClick: boolean;
    closeOnEscape: boolean;
    showCloseButton: boolean;
}

interface DialogLayoutProps {
    overlayClassName?: string;
    /**
     * Additional classes applied to the wrapper responsible for positioning
     * the dialog panel inside the viewport.
     */
    wrapperClassName?: string;
    /**
     * Additional classes applied directly to the dialog panel.
     *
     * Useful for overriding appearance such as padding, background,
     * border radius or shadow.
     */
    panelClassName?: string;
}

/**
 * Shared props used by all dialog-based components.
 *
 * Allows higher-level components to expose only the configuration
 * they need while reusing the same dialog behavior.
 */
export interface DialogSharedProps
    extends DialogCoreProps, Partial<DialogBehaviorProps>, Partial<DialogLayoutProps> {}

interface DialogProps extends DialogCoreProps, DialogBehaviorProps, DialogLayoutProps {}

/**
 * Low-level dialog primitive.
 *
 * Provides common behavior for overlay components:
 * - Modal
 * - Drawer
 * - Banner
 *
 * Features:
 * - Portal rendering
 * - Escape key handling
 * - optional body scroll locking
 * - overlay click handling
 * - accessibility attributes
 * - optional delayed unmount for exit animations
 */
export default function Dialog({
    open,
    onClose,
    wrapperClassName,
    panelClassName,
    panelHTMLAttributes,
    children,
    unmountOnExit,
    lockScroll,
    showOverlay,
    closeOnOverlayClick,
    closeOnEscape,
    showCloseButton,
    overlayClassName,
}: DialogProps) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        if (open) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setMounted(true);
        }

        if (!open && unmountOnExit) {
            setMounted(false);
        }
    }, [open, unmountOnExit]);

    useEscapeKey({
        enabled: open && closeOnEscape,
        onEscape: onClose,
    });

    useScrollLock(open && lockScroll);

    /**
     * Removes the dialog from the DOM after the closing transition completes.
     */
    const handleTransitionEnd = () => {
        if (!open && !unmountOnExit) {
            setMounted(false);
        }
    };

    if (!mounted) {
        return null;
    }

    const {
        role = 'dialog',
        'aria-modal': ariaModal = true,
        onTransitionEnd,
        ...restPanelProps
    } = panelHTMLAttributes ?? {};

    return (
        <Portal>
            {/*--- Base container ---*/}
            <div className="pointer-events-none fixed inset-0 z-100">
                {/*--- Overlay ---*/}
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
                {/*--- Wrapper for placement main panel ---*/}
                <div className={cn('relative flex min-h-full', wrapperClassName)}>
                    {/*--- Main panel ---*/}
                    <div
                        role={role}
                        aria-modal={ariaModal}
                        className={cn(
                            'pointer-events-auto relative w-full bg-white p-6',
                            panelClassName
                        )}
                        // style={{
                        //     transitionDuration: '7000ms',
                        // }}
                        {...restPanelProps}
                        onTransitionEnd={(e) => {
                            onTransitionEnd?.(e);
                            handleTransitionEnd();
                        }}
                    >
                        {/*--- Close button ---*/}
                        {showCloseButton && (
                            <button
                                onClick={onClose}
                                aria-label="Close dialog"
                                className="absolute top-4 right-4 z-10 cursor-pointer p-1"
                            >
                                <X size={24} />
                            </button>
                        )}
                        {/*--- Content from parent ---*/}
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
}
