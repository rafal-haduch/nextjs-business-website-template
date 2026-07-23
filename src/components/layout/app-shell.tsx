import { ReactNode } from 'react';

import Footer from '@/src/components/layout/footer';
import Navbar from '@/src/components/layout/navbar';

import AppUI from '@/src/components/layout/app-ui';

/**
 * Main application layout wrapper.
 *
 * Provides shared page structure including navigation,
 * main content area, footer and global UI elements.
 */
export default function AppShell({ children }: { children: ReactNode }) {
    return (
        <>
            <Navbar />
            <main>{children}</main>
            <Footer variant="fat" />
            <AppUI />
        </>
    );
}
