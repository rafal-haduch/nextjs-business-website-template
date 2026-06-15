import { cn } from '@/src/utils/cn';

type Marker = 'dash' | 'bullet' | 'check' | 'arrow' | 'none';
type Spacing = 'compact' | 'normal' | 'spacious';
type TextSize = 'small' | 'medium' | 'large';

const markerStyles: Record<Marker, React.ReactNode> = {
    dash: '–',
    bullet: '•',
    check: '✓',
    arrow: '→',
    none: null,
};

const spacingStyles: Record<Spacing, string> = {
    compact: 'gap-1',
    normal: 'gap-2',
    spacious: 'gap-4',
};

const textSizeStyles: Record<TextSize, string> = {
    small: 'text-sm',
    medium: 'text-base',
    large: 'text-lg',
};

interface Props {
    items: string[];
    marker?: Marker;
    markerColor?: string;
    spacing?: Spacing;
    textSize?: TextSize;
    className?: string;
}

/**
 * Displays a vertical list of items with configurable marker style,
 * spacing, text size, and marker color.
 *
 * @param items - Array of list item strings to render.
 * @param marker - Marker displayed before each item. Default: `'dash'`.
 * @param markerColor - Tailwind text color class applied to the marker
 * (e.g. `'text-foreground-brand'`) Default: `''`.
 * @param spacing - Vertical spacing between list items. Default: `'normal'`.
 * @param textSize - Text size applied to list items. Default: `'medium'`.
 * @param className - Additional Tailwind classes merged via `cn()`.
 */
export default function BulletList({
    items,
    marker = 'dash',
    markerColor = '',
    spacing = 'normal',
    textSize = 'medium',
    className,
}: Props) {
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
                        <span className={cn(markerColor ? markerColor : '', 'shrink-0')}>
                            {markerStyles[marker]}
                        </span>
                    )}
                    <span>{item}</span>
                </li>
            ))}
        </ul>
    );
}
