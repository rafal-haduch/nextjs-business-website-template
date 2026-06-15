export default function BulletList({ items }: { items: string[] }) {
    return (
        <ul className="flex flex-col gap-2">
            {items.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm leading-relaxed">
                    <span className="text-foreground-brand shrink-0">–</span>
                    <span>{item}</span>
                </li>
            ))}
        </ul>
    );
}
