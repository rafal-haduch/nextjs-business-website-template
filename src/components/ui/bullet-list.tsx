import { cn } from '@/src/utils/cn';

import {
    BulletListColor,
    bulletListColorStyles,
    BulletListMarker,
    bulletListMarkerStyles,
    BulletListSpacing,
    bulletListSpacingStyles,
    BulletListTextSize,
    bulletListTextSizeStyles,
} from '@/src/design-system/bullet-list-styles';

interface BulletListProps {
    /**  Array of list item strings to render. */
    items: string[];

    /** Marker displayed before each item. */
    marker?: BulletListMarker;

    /**  Foreground color class applied to the marker. */
    color?: BulletListColor;

    /** Vertical spacing between list items. */
    spacing?: BulletListSpacing;

    /** Text size applied to list items. */
    textSize?: BulletListTextSize;

    /** Additional Tailwind classes merged via `cn()`. */
    className?: string;
}

/**
 * Displays a vertical list of items with configurable marker style,
 * spacing, text size, and marker color.
 */
export default function BulletList({
    items,
    marker = 'dash',
    color = 'primary',
    spacing = 'medium',
    textSize = 'medium',
    className,
}: BulletListProps) {
    return (
        <ul className={cn('flex flex-col', bulletListSpacingStyles[spacing], className)}>
            {items.map((item) => (
                <li
                    key={item}
                    className={cn(
                        'flex items-start gap-2 leading-relaxed',
                        bulletListTextSizeStyles[textSize]
                    )}
                >
                    {bulletListMarkerStyles[marker] && (
                        <span className={cn(bulletListColorStyles[color], 'shrink-0')}>
                            {bulletListMarkerStyles[marker]}
                        </span>
                    )}
                    <span>{item}</span>
                </li>
            ))}
        </ul>
    );
}
