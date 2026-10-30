export type BannerPlacement = 'top' | 'bottom';

export const bannerPlacementStyles: Record<BannerPlacement, string> = {
    top: 'items-start justify-center ',
    bottom: 'items-end justify-center',
};

export const shadowStyles: Record<BannerPlacement, string> = {
    top: 'shadow-[0_10px_30px_rgba(0,0,0,0.05)]',
    bottom: 'shadow-[0_-10px_30px_rgba(0,0,0,0.05)]',
};
