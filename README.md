# Business Website Template

A starting point for business websites projects built with Next.js. It includes example pages, reusable components, a design system, and a foundation for SEO and project configuration.

## Getting started

```bash
npm install
npm run dev
```

## Project structure

```text
src/
├── app/           # Next.js routes, layouts, pages, and page sections
├── components/
│   ├── layout/    # Navigation, footer, announcement bar, and app shell
│   └── ui/        # Reusable, general-purpose interface components
├── config/        # Application configuration: routes and SEO metadata
├── data/          # Site and company content: contact details, names, address
├── design-system/ # Shared style variants and scales for components
├── features/      # Application features with their own UI and logic
├── hooks/         # Shared React hooks
└── utils/         # Helper functions
```

### Features

Keep larger or self-contained functionality in `src/features/`, grouping its UI, logic, and data together. The template includes example cookie consent (`cookie/`) and newsletter (`newsletter/`) features. This is also where you can add other areas, such as authentication, a contact form, or backend integrations.

## Design system

`src/app/globals.css` defines base styles, Tailwind component classes for common UI elements, and custom color tokens that are available as utility classes, such as `bg-background-primary` and `text-foreground-brand-primary`.

`src/design-system/` contains style variants and scales for components. Use them to keep the interface consistent, then adjust individual instances with the available variants or component classes.

## Preparing the template for a new project

The `TODO(template):` tag marks items to customize when creating a new website. After setting up a project from this template, find and address every occurrence:

```bash
rg -n --hidden -g '!node_modules/**' -g '!.next/**' -g '!.git/**' 'TODO\(template\):' .
```

Regular `TODO:` tags refer to work on the template repository itself.
