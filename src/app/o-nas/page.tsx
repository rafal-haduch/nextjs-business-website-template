import { SEO } from '@/src/config/seo';

import AboutUsSection from '@/src/app/o-nas/_components/about-us-section';

export const metadata = SEO.ABOUT_US;

export default function AboutUsPage() {
    return <AboutUsSection />;
}
