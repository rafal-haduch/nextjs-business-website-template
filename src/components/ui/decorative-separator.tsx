import { LucideIcon } from 'lucide-react';

import { cn } from '@/src/utils/cn';

import {
    DecorativeSeparatorColor,
    DecorativeSeparatorIconSize,
    DecorativeSeparatorSpacing,
    decorativeSeparatorSpacingStyles,
    DecorativeSeparatorThickness,
    DecorativeSeparatorWidth,
    decorativeSeparatorWidthStyles,
    iconStyles,
    lineStyles,
} from '@/src/design-system/decorative-separator-styles';

interface DecorativeSeparatorProps {
    /** Decorative separator width. */
    width?: DecorativeSeparatorWidth;

    /** Decorative separator lines thickness set using the border. */
    thickness?: DecorativeSeparatorThickness;

    /** Decorative separator color. */
    color?: DecorativeSeparatorColor;

    /** Vertical margin around the decorative separator. */
    spacing?: DecorativeSeparatorSpacing;

    /** Icon from `LucideIcon`  displayed within a decorative separator. */
    lucideIcon?: LucideIcon;

    /** Icon size within a decorative separator. */
    iconSize?: DecorativeSeparatorIconSize;
}

/**
 * Decorative separator for visually dividing sections of content.
 * Optionally displays a Lucide icon between the separator lines.
 *
 * @example
 * import { Rocket } from 'lucide-react';
 *
 * <DecorativeSeparator lucideIcon={Rocket} />
 *
 * @see {@link lineStyles}
 * @see {@link iconStyles}
 */
export default function DecorativeSeparator({
    width = 'medium',
    thickness = 'medium',
    color = 'mix',
    spacing = 'medium',
    lucideIcon,
    iconSize = 'medium',
}: DecorativeSeparatorProps) {
    const Icon = lucideIcon;

    return (
        <div
            className={cn(
                decorativeSeparatorSpacingStyles[spacing],
                'flex w-full items-center justify-center'
            )}
        >
            <div className={cn(lineStyles({ width, thickness, color }), 'h-0')}></div>
            <div
                className={cn(
                    decorativeSeparatorWidthStyles[width],
                    'flex shrink-0 items-center justify-center'
                )}
            >
                {Icon && (
                    <Icon
                        className={cn(iconStyles({ size: iconSize, color }))}
                        aria-hidden="true"
                    />
                )}
            </div>
            <div className={cn(lineStyles({ width, thickness, color }), 'h-0')}></div>
        </div>
    );
}
