import { cn } from '@/src/utils/cn';

type Thickness = 'thin' | 'medium' | 'thick' | 'none';
type Spacing = 'compact' | 'normal' | 'spacious' | 'none';
type Width = 'short' | 'base' | 'long' | 'none';

const thicknessStyles: Record<Thickness, string> = {
    thin: 'border-t-2',
    medium: 'border-t-4',
    thick: 'border-t-6',
    none: '',
};

const spacingStyles: Record<Spacing, string> = {
    compact: 'mt-1 mb-4',
    normal: 'mt-1 mb-8',
    spacious: 'mt-2 mb-12',
    none: '',
};

const widthStyles: Record<Width, string> = {
    short: 'w-1/2 sm:max-w-xs',
    base: 'w-4/5 sm:max-w-md',
    long: 'w-full sm:max-w-2xl',
    none: '',
};

interface Props {
    thickness?: Thickness;
    spacing?: Spacing;
    width?: Width;
    rounded?: boolean;
    className?: string;
}

/**
 * Predefined style combinations for common use cases.
 * Spreads directly onto `<DecorativeLine />` with `{...preset}`.
 * Use `custom` preset to opt out of all defaults and style entirely via `className`.
 */
export const DECORATIVE_LINE_PRESETS = {
    mainHeading: { thickness: 'thick', spacing: 'spacious' } as const,
    heading: { thickness: 'medium', spacing: 'normal' } as const,
    separator: { thickness: 'thin', spacing: 'compact' } as const,
    custom: { thickness: 'none', spacing: 'none', width: 'none' } as const,
} satisfies Record<string, Partial<Props>>;

/**
 * A decorative line that highlights headings or separates content.
 *
 * **Recommended:** use via {@link DECORATIVE_LINE_PRESETS}
 *
 *  @example
 * // Using preset
 * <DecorativeLine {...DECORATIVE_LINE_PRESETS.mainHeading} />
 *
 * @example
 * // Custom combination
 * <DecorativeLine thickness="thick" spacing="normal" width="long" />
 *
 * @example
 * // Fully custom (reset all defaults)
 * <DecorativeLine {...DECORATIVE_LINE_PRESETS.custom} className="border-t-8 my-4 w-2/3" />
 *
 * @param thickness - Border thickness. Default: `'medium'`
 * @param spacing - Margin around the line. Default: `'normal'`
 * @param width - Line width. Default: `'base'`
 * @param rounded - Rounds the edges of the lines. Default: `false`
 * @param className - Additional Tailwind classes merged via `cn()`
 *
 */
export default function DecorativeLine({
    thickness = 'medium',
    spacing = 'normal',
    width = 'base',
    rounded = false,
    className,
}: Props) {
    return (
        <div
            aria-hidden="true"
            className={cn(
                'border-border-brand mx-auto',
                thicknessStyles[thickness],
                spacingStyles[spacing],
                widthStyles[width],
                rounded ? 'rounded-md' : '',
                className
            )}
        />
    );
}
