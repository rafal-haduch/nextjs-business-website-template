import { cn } from '@/src/utils/cn';

import {
    DecorativeLineColor,
    DecorativeLineSpacing,
    decorativeLineStyles,
    DecorativeLineThickness,
    DecorativeLineWidth,
} from '@/src/design-system/decorative-line-styles';

//TODO: create decorative ornament (line with icon or graphis?)

interface Props {
    /** Decorative line width. */
    width?: DecorativeLineWidth;

    /** Decorative line thickness set using the border. */
    thickness?: DecorativeLineThickness;

    /** Decorative line color. */
    color?: DecorativeLineColor;

    /** Margin around the decorative line. */
    spacing?: DecorativeLineSpacing;

    /** Rounds the edges of the lines. */
    rounded?: boolean;

    /** Additional Tailwind classes merged via `cn()` */
    className?: string;
}

/**
 * Reusable decorative line component that highlights headings or separates content.
 * Use a preset from {@link DECORATIVE_LINE_PRESETS} for a predefined padding combination.
 *
 *  @example
 * <DecorativeLine {...DECORATIVE_LINE_PRESETS.mainHeading} />
 *
 * @See {@link decorativeLineStyles}
 */
export default function DecorativeLine({
    color = 'primary',
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
                'mx-auto',
                decorativeLineStyles({ width, thickness, color, spacing }),
                rounded ? 'rounded-md' : '',
                className
            )}
        />
    );
}
