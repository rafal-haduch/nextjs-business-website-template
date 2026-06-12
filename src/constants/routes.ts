interface NavItem {
    label: string;
    order: number;
}

interface AppRoute {
    path: string;
    nav?: NavItem;
}

interface NavRoute extends AppRoute {
    nav: NavItem;
}

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

export const ROUTE_LIST: AppRoute[] = Object.values(ROUTES);

export const NAV_ITEMS: NavRoute[] = ROUTE_LIST.filter((r): r is NavRoute => r.nav != null).sort(
    (a, b) => a.nav.order - b.nav.order
);

export type PageKey = keyof typeof ROUTES;
