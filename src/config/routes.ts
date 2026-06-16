/**
 * Navigation item links.
 * @property {number} order - Sort order in navigation (ascending).
 */
interface NavItem {
    order: number;
}

/**
 * Application route definition.
 * @property {string} path - URL path for the route.
 * @property {string} label - Display text in navigation menu or link buttons.
 * @property {NavItem} [nav] - Optional navigation metadata (omit for non-navigable routes).
 */
interface AppRoute {
    path: string;
    label: string;
    nav?: NavItem;
}

/**
 * Route with required navigation metadata.
 * Used for type-safe filtering of navigable routes.
 */
interface NavRoute extends AppRoute {
    nav: NavItem;
}

/**
 * Central routing configuration for the application.
 * Use in: Link href props, canonical URLs etc.
 * @example
 * href={ROUTES.HOME.path}
 */
export const ROUTES = {
    HOME: {
        path: '/',
        label: 'Home',
    },
    ABOUT_US: {
        path: '/about-us',
        label: 'About us',
        nav: {
            order: 1,
        },
    },
    CONTACT: {
        path: '/contact',
        label: 'Contact',
        nav: {
            order: 2,
        },
    },
    CTA: {
        path: '/cta',
        label: 'CTA',
    },
    REGULATIONS: {
        path: '/regulations',
        label: 'Regulations',
    },
    PRIVACY_POLICY: {
        path: '/privacy-policy',
        label: 'Privacy policy',
    },
} satisfies Record<string, AppRoute>;

/**
 * Flat list of all routes.
 * Use in: SEO metadata mapping, loop-based metadata generation.
 */
export const ROUTE_LIST: AppRoute[] = Object.values(ROUTES);

/**
 * Navigation-enabled routes, sorted by display order.
 * Use in: Navigation component, header/footer menus.
 */
export const NAV_ITEMS: NavRoute[] = ROUTE_LIST.filter((r): r is NavRoute => r.nav != null).sort(
    (a, b) => a.nav.order - b.nav.order
);

/**
 * Union type of all route keys.
 * Use in: Type-safe route references, SEO metadata mapping with `Record<PageKey, Metadata>`.
 */
export type PageKey = keyof typeof ROUTES;
