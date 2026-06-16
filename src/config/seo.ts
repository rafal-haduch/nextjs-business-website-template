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
        title: ROUTES.ABOUT_US.label,
        description: '...',
        alternates: {
            canonical: ROUTES.ABOUT_US.path,
        },
        openGraph: {
            title: `${ROUTES.ABOUT_US.label} - ${SITE_NAME}`,
            description: '...',
            url: ROUTES.ABOUT_US.path,
        },
    },
    CONTACT: {
        title: ROUTES.CONTACT.label,
        description: '...',
        alternates: {
            canonical: ROUTES.CONTACT.path,
        },
        openGraph: {
            title: `${ROUTES.CONTACT.label} - ${SITE_NAME}`,
            description: '...',
            url: ROUTES.CONTACT.path,
        },
    },
    CTA: {
        title: ROUTES.CTA.label,
        description: '...',
        alternates: {
            canonical: ROUTES.CTA.path,
        },
        openGraph: {
            title: `${ROUTES.CTA.label} - ${SITE_NAME}`,
            description: '...',
            url: ROUTES.CTA.path,
        },
    },
    REGULATIONS: {
        title: ROUTES.REGULATIONS.label,
        description: '...',
        alternates: {
            canonical: ROUTES.REGULATIONS.path,
        },
        openGraph: {
            title: `${ROUTES.REGULATIONS.label} - ${SITE_NAME}`,
            description: '...',
            url: ROUTES.REGULATIONS.path,
        },
    },
    PRIVACY_POLICY: {
        title: ROUTES.PRIVACY_POLICY.label,
        description: '...',
        alternates: {
            canonical: ROUTES.PRIVACY_POLICY.path,
        },
        openGraph: {
            title: `${ROUTES.PRIVACY_POLICY.label} - ${SITE_NAME}`,
            description: '...',
            url: ROUTES.PRIVACY_POLICY.path,
        },
    },
} satisfies Record<PageKey, Metadata>;
