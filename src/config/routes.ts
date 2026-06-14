/**
 * Navigation item links.
 * @property {string} label - Display text in navigation menu.
 * @property {number} order - Sort order in navigation (ascending).
 */
interface NavItem {
    label: string;
    order: number;
}

/**
 * Application route definition.
 * @property {string} path - URL path for the route.
 * @property {NavItem} [nav] - Optional navigation metadata (omit for non-navigable routes).
 */
interface AppRoute {
    path: string;
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
    },
    ABOUT_US: {
        path: '/o-nas',
        nav: {
            label: 'O nas',
            order: 1,
        },
    },
    CONTACT: {
        path: '/kontakt',
        nav: {
            label: 'Kontakt',
            order: 2,
        },
    },
    CTA: {
        path: '/cta',
    },
    REGULATIONS: {
        path: '/regulamin',
    },
    PRIVACY_POLICY: {
        path: '/polityka-prywatnosci',
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
