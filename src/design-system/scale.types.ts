// --- Overall size ---
export type SizeScale = 'small' | 'medium' | 'large';
export type ExtendedSizeScale = SizeScale | 'extraSmall' | 'extraLarge';

// --- Horizontal length ---
export type LengthScale = 'short' | 'medium' | 'long';
export type ExtendedLengthScale = LengthScale | 'extraShort' | 'extraLong';

// --- Spacing (margin/padding) ---
export type SpacingScale = 'compact' | 'medium' | 'spacious';
export type ExtendedSpacingScale = SpacingScale | 'none' | 'extraSpacious';

// --- Thickness ---
export type ThicknessScale = 'thin' | 'medium' | 'thick';

// --- Color ---
export type BrandColorRole = 'primary' | 'secondary';
export type ExtendedBrandColorRole = BrandColorRole | 'mix';

export type BaseColor = 'neutral';

export type ColorRole = BrandColorRole | BaseColor;
export type ExtendedColorRole = ExtendedBrandColorRole | BaseColor;

// --- Time ---
export type Duration = 'slow' | 'medium' | 'fast' | 'instant';

// --- Position ---
export type VerticalPosition = 'top' | 'bottom';
export type HorizontalPosition = 'left' | 'right';
export type Position = VerticalPosition | HorizontalPosition;

// --- Rounded corners ---
export type CornerRadius = 'none' | 'small' | 'medium' | 'large';
