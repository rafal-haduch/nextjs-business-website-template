import { cn } from '@/src/utils/cn';

import {
    Color,
    colorStyles,
    Marker,
    markerStyles,
    Spacing,
    spacingStyles,
    TextSize,
    textSizeStyles,
} from '@/src/design-system/bullet-list-styles';

interface BulletListProps {
    /**  Array of list item strings to render. */
    items: string[];

    /** Marker displayed before each item. */
    marker?: Marker;

    /**  Foreground color class applied to the marker. */
    color?: Color;

    /** Vertical spacing between list items. */
    spacing?: Spacing;

    /** Text size applied to list items. */
    textSize?: TextSize;

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
    spacing = 'normal',
    textSize = 'medium',
    className,
}: BulletListProps) {
    return (
        <ul className={cn('flex flex-col', spacingStyles[spacing], className)}>
            {items.map((item) => (
                <li
                    key={item}
                    className={cn(
                        'flex items-start gap-2 leading-relaxed',
                        textSizeStyles[textSize]
                    )}
                >
                    {markerStyles[marker] && (
                        <span className={cn(colorStyles[color], 'shrink-0')}>
                            {markerStyles[marker]}
                        </span>
                    )}
                    <span>{item}</span>
                </li>
            ))}
        </ul>
    );
}
