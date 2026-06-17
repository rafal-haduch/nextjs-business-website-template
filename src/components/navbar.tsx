'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

import { NAV_ITEMS, ROUTES } from '@/src/config/routes';

import { cn } from '@/src/utils/cn';

import { getButtonClasses } from '@/src/lib/design-system/button';

import Container from '@/src/components/container';

import logo from '@/public/full-logo.svg';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const path = usePathname();

    const openMobileMenu = () => setIsOpen(true);
    const closeMobileMenu = () => setIsOpen(false);

    // Block scroll when mobile menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    // Close mobile menu at lg break point
    useEffect(() => {
        const mediaQuery = window.matchMedia('(min-width: 1024px)');

        const handleChange = (e: MediaQueryListEvent) => {
            if (e.matches) {
                closeMobileMenu();
            }
        };

        mediaQuery.addEventListener('change', handleChange);

        return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);

    // Close mobile menu by ESC
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') closeMobileMenu();
        };
        document.addEventListener('keydown', handleEsc);
        return () => document.removeEventListener('keydown', handleEsc);
    }, []);

    return (
        <>
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
                        {/* Desktop nav */}
                        <div className="my-auto hidden h-fit items-center gap-4 lg:flex">
                            <nav>
                                <ul className="flex gap-4 whitespace-nowrap">
                                    {NAV_ITEMS.map((link) => (
                                        <li key={link.path}>
                                            <Link
                                                href={link.path}
                                                className={cn(
                                                    'hover:text-foreground-brand transition-colors',
                                                    path === link.path
                                                        ? 'text-foreground-brand'
                                                        : ''
                                                )}
                                            >
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                            {/* CTA button */}
                            <Link href={ROUTES.CTA.path} className={getButtonClasses()}>
                                {ROUTES.CTA.label}
                            </Link>
                        </div>
                        {/* Hamburger */}
                        <button
                            onClick={openMobileMenu}
                            aria-label="Otwórz menu"
                            className="text-foreground-brand cursor-pointer lg:hidden"
                        >
                            <Menu className="h-8 w-8" aria-hidden="true" />
                        </button>
                    </div>
                </Container>
            </header>

            {/* Overlay */}
            <div
                className={`fixed inset-0 z-50 bg-black/50 transition-opacity duration-300 lg:hidden ${
                    isOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
                }`}
                onClick={closeMobileMenu}
                aria-hidden="true"
            />
            {/* Mobile menu */}
            <div
                className={`fixed inset-y-0 right-0 z-50 flex w-full flex-col bg-white shadow-xl transition-transform duration-400 ease-in-out lg:hidden ${
                    isOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
                role="dialog"
                aria-modal="true"
                aria-label="Menu nawigacyjne"
            >
                {/* Header with logo */}
                <div className="border-border-brand flex items-center justify-between border-b-3 p-4">
                    <Link href={ROUTES.HOME.path} onClick={closeMobileMenu} className="shrink-0">
                        <Image src={logo} alt="Logo pracowni" priority className="h-auto w-64" />
                    </Link>
                    <button
                        onClick={closeMobileMenu}
                        aria-label="Zamknij menu"
                        className="text-foreground-brand cursor-pointer p-1"
                    >
                        <X className="h-8 w-8" aria-hidden="true" />
                    </button>
                </div>
                {/* Mobile nav */}
                <nav className="flex flex-1 flex-col items-center gap-1 px-4 pt-12 pb-24">
                    <ul className="divide-brand-400 flex flex-col gap-2 divide-y-2">
                        {NAV_ITEMS.map((item) => (
                            <li key={item.path}>
                                <Link
                                    href={item.path}
                                    onClick={closeMobileMenu}
                                    className="hover:text-foreground-brand block rounded-lg px-4 py-3 text-center text-lg whitespace-nowrap transition-colors"
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    {/* CTA button */}
                    <div className="mt-auto w-full">
                        <Link href={ROUTES.CTA.path} className={getButtonClasses()}>
                            {ROUTES.CTA.label}
                        </Link>
                    </div>
                </nav>
            </div>
        </>
    );
}
