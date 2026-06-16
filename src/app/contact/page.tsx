import { SEO } from '@/src/config/seo';

import ContactSection from '@/src/app/contact/_components/contact-section';

export const metadata = SEO.CONTACT;

export default function ContactPage() {
    return <ContactSection />;
}
