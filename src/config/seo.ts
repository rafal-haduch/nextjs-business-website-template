import type { Metadata } from 'next';

import { PageKey, ROUTES } from '@/src/config/routes';

import { SITE_NAME } from '@/src/data/site-and-company';

/**
 * Centralized SEO metadata for all routes.
 *
 * Use in each `page.tsx`:
 * ```typescript
 * import { SEO } from '@/src/config/seo';
 * export const metadata: Metadata = SEO.HOME;
 * ```
 */
export const SEO = {
    HOME: {
        title: {
            absolute: SITE_NAME,
        },
        description: '...',
        alternates: {
            canonical: ROUTES.HOME.path,
        },
        openGraph: {
            title: SITE_NAME,
            description: '...',
            url: ROUTES.HOME.path,
        },
    },
    ABOUT_US: {
        title: 'O nas',
        description: '...',
        alternates: {
            canonical: ROUTES.ABOUT_US.path,
        },
        openGraph: {
            title: `O nas - ${SITE_NAME}`,
            description: '...',
            url: ROUTES.ABOUT_US.path,
        },
    },
    CONTACT: {
        title: 'Kontakt',
        description: '...',
        alternates: {
            canonical: ROUTES.CONTACT.path,
        },
        openGraph: {
            title: `Kontakt - ${SITE_NAME}`,
            description: '...',
            url: ROUTES.CONTACT.path,
        },
    },
    CTA: {
        title: 'CTA',
        description: '...',
        alternates: {
            canonical: ROUTES.CTA.path,
        },
        openGraph: {
            title: `CTA - ${SITE_NAME}`,
            description: '...',
            url: ROUTES.CTA.path,
        },
    },
    REGULATIONS: {
        title: 'Regulamin',
        description: '...',
        alternates: {
            canonical: ROUTES.REGULATIONS.path,
        },
        openGraph: {
            title: `Regulamin - ${SITE_NAME}`,
            description: '...',
            url: ROUTES.REGULATIONS.path,
        },
    },
    PRIVACY_POLICY: {
        title: 'Polityka prywatności',
        description: '...',
        alternates: {
            canonical: ROUTES.PRIVACY_POLICY.path,
        },
        openGraph: {
            title: `Polityka prywatności - ${SITE_NAME}`,
            description: '...',
            url: ROUTES.PRIVACY_POLICY.path,
        },
    },
} satisfies Record<PageKey, Metadata>;
