'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

import { NAV_ITEMS, ROUTES } from '@/src/config/routes';

import { cn } from '@/src/utils/cn';

import { getButtonClasses } from '@/src/lib/design-system/button';

import { useDisclosure } from '@/src/hooks/use-disclosure';

import Container from '@/src/components/ui/container';
import Drawer from '@/src/components/ui/drawer';

import logo from '@/public/full-logo.svg';

export default function Navbar() {
    const path = usePathname();
    const mobileMenu = useDisclosure();

    // Close mobile menu at lg break point
    useEffect(() => {
        const mediaQuery = window.matchMedia('(min-width: 1024px)');

        const handleChange = (e: MediaQueryListEvent) => {
            if (e.matches) {
                mobileMenu.close();
            }
        };

        mediaQuery.addEventListener('change', handleChange);

        return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);

    return (
        <>
            {/*--- Desktop menu bar ---*/}
            <header className="bg-background-primary sticky top-0 z-50 py-4 shadow-sm">
                <Container>
                    <div className="flex items-center justify-between">
                        <Link href={ROUTES.HOME.path} className="shrink-0">
                            <Image
                                src={logo}
                                alt="Logo pracowni"
                                priority
                                className="h-auto w-64"
                            />
                        </Link>
                        {/*--- Desktop nav ---*/}
                        <div className="my-auto hidden h-fit items-center gap-4 lg:flex">
                            <nav>
                                <ul className="flex gap-4 whitespace-nowrap">
                                    {NAV_ITEMS.map((link) => (
                                        <li key={link.path}>
                                            <Link
                                                href={link.path}
                                                className={cn(
                                                    'hover:text-foreground-brand-primary transition-colors',
                                                    path === link.path
                                                        ? 'text-foreground-brand-primary'
                                                        : ''
                                                )}
                                            >
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                            {/*--- CTA button ---*/}
                            <Link
                                href={ROUTES.CTA.path}
                                className={getButtonClasses({
                                    variant: 'solid',
                                    color: 'gradient',
                                })}
                            >
                                {ROUTES.CTA.label}
                            </Link>
                        </div>
                        {/*--- Hamburger button ---*/}
                        <button
                            onClick={mobileMenu.toggle}
                            aria-label="Otwórz menu"
                            className="text-foreground-brand-primary cursor-pointer lg:hidden"
                        >
                            <Menu className="h-8 w-8" aria-hidden="true" />
                        </button>
                    </div>
                </Container>
            </header>

            {/*--- Mobile menu drawer ---*/}
            <Drawer
                open={mobileMenu.isOpen}
                onClose={mobileMenu.close}
                side="right"
                size="full"
                animationDuration="base"
                lockScroll
                closeOnEscape
                panelClassName="p-0"
                panelHTMLAttributes={{
                    'aria-label': 'Menu nawigacyjne',
                }}
            >
                {/*--- Top bar ---*/}
                <div className="border-border-brand-primary flex items-center justify-between border-b-3 p-4">
                    <Link href={ROUTES.HOME.path} onClick={mobileMenu.close} className="shrink-0">
                        <Image src={logo} alt="Logo pracowni" priority className="h-auto w-64" />
                    </Link>
                    <button
                        onClick={mobileMenu.close}
                        aria-label="Zamknij menu"
                        className="text-foreground-brand-primary cursor-pointer p-1"
                    >
                        <X className="h-8 w-8" aria-hidden="true" />
                    </button>
                </div>
                {/*--- Mobile nav ---*/}
                <nav className="flex flex-1 flex-col items-center gap-8 px-4 pt-12 pb-24">
                    <ul className="flex flex-col">
                        {NAV_ITEMS.map((item) => (
                            <li key={item.path}>
                                <Link
                                    href={item.path}
                                    onClick={mobileMenu.close}
                                    className="hover:text-foreground-brand-primary block rounded-lg px-4 py-3 text-center text-lg whitespace-nowrap transition-colors"
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    {/*--- CTA button ---*/}
                    <div className="mt-auto w-full">
                        <Link
                            href={ROUTES.CTA.path}
                            onClick={mobileMenu.close}
                            className={cn(
                                getButtonClasses({
                                    variant: 'solid',
                                    color: 'gradient',
                                }),
                                'px-8'
                            )}
                        >
                            {ROUTES.CTA.label}
                        </Link>
                    </div>
                </nav>
            </Drawer>
        </>
    );
}
