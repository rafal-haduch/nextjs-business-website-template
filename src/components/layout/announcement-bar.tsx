import Container from '@/src/components/ui/container';

export default function AnnouncementBar() {
    const text = process.env.NEXT_PUBLIC_ANNOUNCEMENT_BAR_TEXT;

    if (!text) return null;

    return (
        <aside aria-label="Ogłoszenie" className="bg-background-soft-primary h-9 py-2">
            <Container className="scrollbar-hidden overflow-auto">
                <p className="text-center text-sm whitespace-nowrap">{text}</p>
            </Container>
        </aside>
    );
}
