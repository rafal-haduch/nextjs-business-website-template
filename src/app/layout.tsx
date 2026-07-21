import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';

import { BASE_URL, SITE_NAME } from '@/src/data/site-and-company';

import AppProviders from '@/src/app/app-providers';

import AppShell from '@/src/components/layout/app-shell';

import '@/src/app/globals.css';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    metadataBase: new URL(BASE_URL),
    title: {
        default: SITE_NAME,
        template: `%s - ${SITE_NAME}`,
    },
    openGraph: {
        type: 'website',
        siteName: SITE_NAME,
        locale: 'en',
        images: [{ url: `${BASE_URL}/og-image.jpg` }],
    },
    twitter: {
        card: 'summary_large_image',
        images: [`${BASE_URL}/og-image.jpg`],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-image-preview': 'large',
        },
    },
    keywords: ['Hello', 'World'],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: ReactNode;
}>) {
    return (
        <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
            <body>
                <AppProviders>
                    <AppShell>{children}</AppShell>
                </AppProviders>
            </body>
        </html>
    );
}
