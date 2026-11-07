export type SizeScale = 'small' | 'medium' | 'large';
export type ExtendedSizeScale = SizeScale | 'extraSmall' | 'extraLarge';

export type LengthScale = 'short' | 'medium' | 'long';
export type ExtendedLengthScale = LengthScale | 'extraShort' | 'extraLong';

export type SpacingScale = 'compact' | 'medium' | 'spacious';
export type ExtendedSpacingScale = SpacingScale | 'none' | 'extraSpacious';

export type ThicknessScale = 'thin' | 'medium' | 'thick';

export type BrandColorRole = 'primary' | 'secondary';
export type ExtendedBrandColorRole = BrandColorRole | 'mix';

export type BaseColor = 'neutral';

export type ColorRole = BrandColorRole | BaseColor;
export type ExtendedColorRole = ExtendedBrandColorRole | BaseColor;
