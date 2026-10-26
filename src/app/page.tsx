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
            <form className="mx-auto max-w-lg">
                <h3>Testowy Formularz</h3>
                <InputWithLabel
                    variant="soft"
                    color="neutral"
                    label="Testowy input"
                    roundedCorners="strong"
                    description="Opis inputa"
                    id="test"
                    name="name"
                    error="blad!!!"
                />
                <button type="submit">Przycisk</button>
            </form>
        </>
    );
}
