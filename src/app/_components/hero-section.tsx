import Link from 'next/link';
import Image from 'next/image';

import { ROUTES } from '@/src/config/routes';

import Section from '@/src/components/section';
import Container from '@/src/components/container';

import heroImage from '@/public/hero-image.webp';

export default function HeroSection() {
    return (
        <Section spacing="hero" aria-label="Sekcja powitalna">
            <Container padding="none">
                {/* Background image */}
                <div className="relative h-svh max-h-184">
                    <Image
                        src={heroImage}
                        alt="..."
                        priority
                        placeholder="blur"
                        fill
                        className="object-cover"
                    />
                    {/* Overlay */}
                    <div aria-hidden="true" className="absolute inset-0 z-10 bg-black/40"></div>
                    {/* Content */}
                    <div className="relative z-10 flex h-full flex-col justify-evenly gap-4 text-center text-white">
                        <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl lg:text-7xl">
                            Hello World!
                        </h1>
                        <Link href={ROUTES.CTA.path} className="btn btn-lg btn-primary">
                            CTA
                        </Link>
                    </div>
                </div>
            </Container>
        </Section>
    );
}
