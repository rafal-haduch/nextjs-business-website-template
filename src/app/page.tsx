import { SEO } from '@/src/config/seo';

import HeroSection from '@/src/app/_components/hero-section';
import FirstSection from '@/src/app/_components/first-section';
import InputWithLabel from '@/src/components/ui/input-with-label';

export const metadata = SEO.HOME;

export default function Home() {
    return (
        <>
            <HeroSection />
            <FirstSection />
            <InputWithLabel
                variant="default"
                color="mix"
                coloredLabel
                label="Testowy input"
                id="test"
                name="name"
                error="blad!!!"
            />
        </>
    );
}
