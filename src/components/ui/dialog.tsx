'use client';

import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';

import { cn } from '@/src/utils/cn';

import { useEscapeKey } from '@/src/hooks/use-escape-key';
import { useScrollLock } from '@/src/hooks/use-scroll-lock';

import Portal from '@/src/components/ui/portal';

/**
 * HTML and ARIA attributes forwarded to the dialog panel.
 * Use `panelClassName` for styling and `children` for panel content.
 */
type DialogPanelHTMLAttributes = Omit<
    React.HTMLAttributes<HTMLDivElement>,
    'className' | 'children'
>;

interface DialogCoreProps {
    /** Controls whether the dialog is open. */
    open: boolean;

    /** Called when a configured dismissal action requests closing the dialog. */
    onClose: () => void;

    /**
     * HTML and ARIA attributes forwarded to the dialog panel.
     */
    panelHTMLAttributes?: DialogPanelHTMLAttributes;

    /** Content rendered inside the dialog panel. */
    children: React.ReactNode;
}

interface DialogBehaviorProps {
    /**
     * Unmounts immediately when closed. When `false`, waits for the panel's
     * transition to finish before unmounting.
     *
     * Use `false` when the panel has a closing transition.
     */
    unmountOnExit: boolean;

    /** Locks document body scrolling while the dialog is open. */
    lockScroll: boolean;

    /** Renders a dimmed backdrop behind the panel. */
    showOverlay: boolean;

    /** Calls `onClose` when the backdrop is clicked. */
    closeOnOverlayClick: boolean;

    /** Calls `onClose` when the Escape key is pressed. */
    closeOnEscape: boolean;

    /** Renders a close button inside the panel. */
    showCloseButton: boolean;
}

interface DialogLayoutProps {
    /** Additional classes applied to the backdrop. */
    overlayClassName?: string;

    /**
     * Additional classes applied to the root positioning container.
     *
     * Useful for overriding properties such as `top`, `bottom`
     * or `inset` when the dialog should not cover the entire screen.
     */
    rootPositionClassName?: string;

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
 * Props for higher-level components that reuse the dialog primitive.
 *
 * Core props (`open`, `onClose`, and `children`) are required.
 * Behavior and layout options are optional so each component can expose
 * only the settings it supports.
 */
export interface DialogSharedProps
    extends DialogCoreProps, Partial<DialogBehaviorProps>, Partial<DialogLayoutProps> {}

/**
 * Complete props required internally by the Dialog primitive.
 *
 * Unlike `DialogSharedProps`, all behavior and layout options are required.
 */
interface DialogProps extends DialogCoreProps, DialogBehaviorProps, DialogLayoutProps {}

/**
 * Low-level dialog primitive for modal, drawer, and banner components.
 *
 * Renders its panel through a portal and provides optional backdrop,
 * dismissal, body scroll locking, and delayed unmount after the panel's
 * closing transition. Set `unmountOnExit` to `false` only when the panel
 * emits a transition end event while closing.
 */
export default function Dialog({
    open,
    onClose,
    rootPositionClassName,
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
    // Separate mount state lets animated panels remain in the DOM during exit.
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

    const handleTransitionEnd = (event: React.TransitionEvent<HTMLDivElement>) => {
        // Ignore transition events bubbling up from content inside the panel.
        if (event.target !== event.currentTarget) return;

        if (!open && !unmountOnExit) {
            setMounted(false);
        }
    };

    if (!mounted) {
        return null;
    }

    // Handle role and aria-modal here; forward the remaining panel attributes.
    const {
        role = 'dialog',
        'aria-modal': ariaModal = true,
        onTransitionEnd,
        ...restPanelProps
    } = panelHTMLAttributes ?? {};

    return (
        <Portal>
            {/* Fixed viewport layer that positions the backdrop and panel. */}
            <div className={cn('pointer-events-none fixed inset-0 z-100', rootPositionClassName)}>
                {/* Backdrop sits behind the panel and optionally dismisses it. */}
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
                {/* Wrapper controls the panel's placement within the viewport. */}
                <div className={cn('relative flex min-h-full overflow-x-hidden', wrapperClassName)}>
                    {/* Main dialog surface. */}
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
                            handleTransitionEnd(e);
                        }}
                    >
                        {/* Optional built-in dismissal control. */}
                        {showCloseButton && (
                            <button
                                type="button"
                                onClick={onClose}
                                aria-label="Close dialog"
                                className="absolute top-4 right-4 z-10 cursor-pointer p-1"
                            >
                                <X size={24} />
                            </button>
                        )}
                        {/* Content supplied by the component using this primitive. */}
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
}
