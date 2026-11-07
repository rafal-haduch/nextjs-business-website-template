import { ExtendedSizeScale } from '@/src/design-system/scale.types';

export type ModalSize = ExtendedSizeScale | 'full';

export const modalSizeStyles: Record<ModalSize, string> = {
    extraSmall: 'max-w-sm',
    small: 'max-w-md',
    medium: 'max-w-xl',
    large: 'max-w-3xl',
    extraLarge: 'max-w-5xl',
    full: 'max-w-none w-[95vw] h-[95vh]',
};
