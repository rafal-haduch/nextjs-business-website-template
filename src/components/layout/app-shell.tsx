import { ReactNode } from 'react';

import Footer from '@/src/components/layout/footer';
import Navbar from '@/src/components/layout/navbar';

import AppUI from '@/src/components/layout/app-ui';

//TODO: Write JSDOC
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
