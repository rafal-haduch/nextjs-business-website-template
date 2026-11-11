'use client';

import { useId, useState } from 'react';
import { ChevronDown, ChevronUp, type LucideIcon } from 'lucide-react';

import { cn } from '@/src/utils/cn';

interface CollapsibleProps {
    title: string;
    content: string;
    expandIcon?: LucideIcon;
    collapseIcon?: LucideIcon;
    titleContainerClassName?: string;
    titleClassName?: string;
    buttonClassName?: string;
    contentContainerClassName?: string;
    contentClassName?: string;
}

/** A simple expandable section for revealing additional content. */
export default function Collapsible({
    title,
    content,
    expandIcon: ExpandIcon = ChevronDown,
    collapseIcon: CollapseIcon = ChevronUp,
    titleContainerClassName,
    titleClassName,
    buttonClassName,
    contentContainerClassName,
    contentClassName,
}: CollapsibleProps) {
    const [isExpanded, setIsExpanded] = useState(false);
    const contentId = useId();
    const ToggleIcon = isExpanded ? CollapseIcon : ExpandIcon;

    return (
        <div className="flex w-full flex-col gap-2">
            <div
                className={cn(
                    'border-border-brand-primary flex justify-between rounded-xl border p-4',
                    titleContainerClassName
                )}
            >
                <p className={cn(titleClassName)}>{title}</p>
                <button
                    type="button"
                    onClick={() => setIsExpanded((previous) => !previous)}
                    aria-expanded={isExpanded}
                    aria-controls={contentId}
                    aria-label={`${isExpanded ? 'Collapse' : 'Expand'} ${title}`}
                    className={cn('text-foreground-brand-primary cursor-pointer', buttonClassName)}
                >
                    <ToggleIcon aria-hidden="true" />
                </button>
            </div>
            <div
                id={contentId}
                hidden={!isExpanded}
                className={cn('px-4', contentContainerClassName)}
            >
                <p className={cn(contentClassName)}>{content}</p>
            </div>
        </div>
    );
}
