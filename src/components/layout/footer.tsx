import FooterContent from '@/src/components/layout/footer-content';
import FooterLegal from '@/src/components/layout/footer-legal';

interface Props {
    variant: 'slim' | 'fat';
}

export default function Footer({ variant }: Props) {
    return (
        <footer>
            {variant == 'fat' && <FooterContent />}
            <FooterLegal />
        </footer>
    );
}
