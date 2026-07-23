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
    /**
     * Controls whether the dialog exists in the DOM.
     *
     * It is separated from the `open` prop because some components
     * (for example Drawer) need to stay mounted while the closing
     * animation is running.
     *
     * Example:
     * open=false
     * mounted=true
     *
     * means:
     * "The dialog is closing, but keep it alive until transition ends."
     */
    const [mounted, setMounted] = useState(false);

    /**
     * Synchronizes the mounted state with the open state.
     *
     * Opening:
     * - mounts the dialog in the DOM
     *
     * Closing:
     * - immediately removes it only when `unmountOnExit` is enabled
     * - otherwise keeps it mounted so exit animations can finish
     */
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
     * Called after CSS transition finishes.
     *
     * Used mainly by animated components like Drawer.
     *
     * Example:
     * 1. User closes Drawer
     * 2. open becomes false
     * 3. Drawer animates out
     * 4. transition ends
     * 5. Component is removed from DOM
     */
    const handleTransitionEnd = () => {
        if (!open && !unmountOnExit) {
            setMounted(false);
        }
    };

    /**
     * Prevents rendering when component should not exist.
     *
     * Important:
     * Drawer needs this delayed unmount behavior
     * to allow closing animations to complete.
     */
    if (!mounted) {
        return null;
    }

    /**
     * Extract dialog-related accessibility props.
     *
     * Remaining attributes are passed directly
     * to the dialog panel element.
     */
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
                <div className={cn('relative flex min-h-full overflow-x-hidden', wrapperClassName)}>
                    {/*--- Main panel ---*/}
                    <div
                        role={role}
                        aria-modal={ariaModal}
                        className={cn(
                            'pointer-events-auto relative w-full min-w-64 bg-white p-2 md:p-4 lg:p-6',
                            panelClassName
                        )}
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
                        {/*--- Content injected by higher-level components ---*/}
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
}
