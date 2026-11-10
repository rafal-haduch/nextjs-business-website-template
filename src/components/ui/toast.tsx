'use client';

import { useEffect, useState } from 'react';
import { CircleCheck, CircleX, X, LucideIcon } from 'lucide-react';

import { cn } from '@/src/utils/cn';

import { VariantToast, variantToastStyles } from '@/src/design-system/toast-styles';

const variantIcons: Record<VariantToast, LucideIcon> = {
    success: CircleCheck,
    error: CircleX,
};

interface ToastProps {
    /** Toast variant, which determines its icon and styling. */
    variant: VariantToast;

    /** Message displayed in the toast. */
    text: string;
}

/**
 * Displays a fixed success or error notification that can be dismissed
 * manually or closes automatically after a specified number of seconds.
 */
export default function Toast({ variant, text }: ToastProps) {
    const [isVisible, setIsVisible] = useState(true);
    const Icon = variantIcons[variant];

    useEffect(() => {
        const timer = window.setTimeout(() => {
            setIsVisible(false);
        }, 4000);

        return () => window.clearTimeout(timer);
    }, []);

    if (!isVisible) return null;

    return (
        <div
            role={variant === 'error' ? 'alert' : 'status'}
            className={cn(
                'fixed bottom-4 left-1/2 z-9999 flex w-full -translate-x-1/2 items-center gap-2 p-2 shadow-md sm:w-md',
                variantToastStyles[variant]
            )}
        >
            <Icon aria-hidden="true" />
            <p>{text}</p>
            <button
                type="button"
                aria-label="Zamknij powiadomienie"
                onClick={() => setIsVisible(false)}
                className="ml-auto cursor-pointer"
            >
                <X aria-hidden="true" />
            </button>
        </div>
    );
}
