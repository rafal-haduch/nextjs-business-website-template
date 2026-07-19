import BulletList from '@/src/components/ui/bullet-list';

import { PrivacyPolicySubsectionItem } from '@/src/app/privacy-policy/_content/privacy-policy';

export default function PrivacyPolicySubsection({
    id,
    title,
    paragraphs,
    intro,
    items,
    outro,
}: PrivacyPolicySubsectionItem) {
    return (
        <section aria-labelledby={`section-${id}`} className="flex flex-col gap-4">
            <h2
                id={`section-${id}`}
                className="text-foreground border-border-brand border-b pb-2 text-base font-semibold tracking-wide uppercase"
            >
                <span className="text-foreground-brand-primary">§{id}</span> {title}
            </h2>
            <div className="flex flex-col gap-3">
                {paragraphs?.map((p) => (
                    <p key={p} className="text-sm leading-relaxed">
                        {p}
                    </p>
                ))}
                {intro && <p className="text-sm leading-relaxed">{intro}</p>}
                {items && (
                    <BulletList
                        items={items}
                        markerColor="text-foreground-brand-primary"
                        textSize="small"
                    />
                )}
                {outro && <p className="text-sm leading-relaxed">{outro}</p>}
            </div>
        </section>
    );
}
