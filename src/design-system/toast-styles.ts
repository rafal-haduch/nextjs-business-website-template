export type VariantToast = 'success' | 'error';

export const variantToastStyles: Record<VariantToast, string> = {
    success: 'bg-emerald-50 text-state-success',
    error: 'bg-red-50 text-state-error',
};
