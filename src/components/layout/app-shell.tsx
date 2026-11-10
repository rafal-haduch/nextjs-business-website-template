import { ReactNode } from 'react';

import AnnouncementBar from '@/src/components/layout/announcement-bar';
import Navbar from '@/src/components/layout/navbar';
import Footer from '@/src/components/layout/footer';
import AppUI from '@/src/components/layout/app-ui';

const hasAnnouncement = Boolean(process.env.NEXT_PUBLIC_ANNOUNCEMENT_BAR_TEXT);

/**
 * Main application layout wrapper.
 *
 * Provides shared page structure including navigation,
 * main content area, footer and global UI elements.
 */
export default function AppShell({ children }: { children: ReactNode }) {
    return (
        <>
            <div className="sticky top-0 z-50">
                <AnnouncementBar />
                <Navbar hasAnnouncement={hasAnnouncement} />
            </div>
            <main>{children}</main>
            <Footer variant="fat" />
            <AppUI />
        </>
    );
}
