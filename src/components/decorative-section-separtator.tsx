import { cn } from '@/src/utils/cn';

interface Props {
    position: 'top' | 'bottom';
}

export default function DecorativeSectionSeparator({ position }: Props) {
    return (
        <div aria-hidden="true" className="w-full overflow-hidden leading-none">
            <svg
                viewBox="0 0 900 600"
                preserveAspectRatio="none"
                className={cn(
                    'block h-30 w-full sm:h-45',
                    position === 'bottom' ? 'rotate-180' : ''
                )}
                xmlns="http://www.w3.org/2000/svg"
            >
                <rect
                    x="0"
                    y="0"
                    width="900"
                    height="600"
                    fill="#ffffff" //NOTE: Primary background color from globals.css
                />
                <path
                    d="M0 386L16.7 408.2C33.3 430.3 66.7 474.7 100 462.7C133.3 450.7 166.7 382.3 200 351.5C233.3 320.7 266.7 327.3 300 354.5C333.3 381.7 366.7 429.3 400 461.5C433.3 493.7 466.7 510.3 500 487.5C533.3 464.7 566.7 402.3 600 395.5C633.3 388.7 666.7 437.3 700 466C733.3 494.7 766.7 503.3 800 475C833.3 446.7 866.7 381.3 883.3 348.7L900 316L900 601L0 601Z"
                    fill="#e0f2fe" //NOTE: Secondary or subtle background color from globals.css
                />
            </svg>
        </div>
    );
}
