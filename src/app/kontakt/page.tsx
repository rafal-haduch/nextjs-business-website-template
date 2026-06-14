import { SEO } from '@/src/config/seo';

import ContactSection from '@/src/app/kontakt/_components/contact-section';

export const metadata = SEO.CONTACT;

export default function ContactPage() {
    return <ContactSection />;
}
