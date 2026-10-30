export type ModalSize = 'sm' | 'md' | 'lg' | 'xl' | 'full';

export const modalSizeStyles: Record<ModalSize, string> = {
    sm: 'max-w-md',
    md: 'max-w-xl',
    lg: 'max-w-3xl',
    xl: 'max-w-5xl',
    full: 'max-w-none w-[95vw] h-[95vh]',
};
