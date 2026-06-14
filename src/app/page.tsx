import { SEO } from '@/src/config/seo';

import HeroSection from '@/src/app/_components/hero-section';
import FirstSection from '@/src/app/_components/first-section';

export const metadata = SEO.HOME;

export default function Home() {
    return (
        <>
            <HeroSection />
            <FirstSection />
        </>
    );
}
