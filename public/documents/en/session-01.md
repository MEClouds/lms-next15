# Coding and Development Journal for LMS

## Session [01] Progress and Documentation

### 1. Setting up Next.js with Bun

- **Command**: `bun create next-app`
- **Action**: Performed a cleanup of the default setup.

### 2. Setting up `next-intl` for Localization

- **Command**: `bun install next-intl`
- **Steps**: Followed the instructions from the [next-intl documentation](https://next-intl.dev/docs/getting-started/app-router/with-i18n-routing).
- **Outcome**: Organized the project structure as follows:

```
├── app
│   ├── globals.css
│   └── [locale]
│       ├── (unprotected)
│       │   └── home
│       │       └── page.tsx
│       └── layout.tsx
├── i18n
│   ├── request.ts
│   └── routing.ts
├── locale
│   └── messages
│       ├── ar.json
│       └── en.json
├── middleware.ts
├── next.config.ts
```

- **Validation**: Tested localization to ensure proper functionality.

### 3. Integrating Logto Authentication

- **Reference**: Followed the [Logto quick-start guide](https://docs.logto.io/quick-starts/next-app-router).
- **Outcome**: Updated the project structure as follows:

```
├── app
│   ├── (auth)
│   │   ├── callback
│   │   │   └── route.ts
│   │   ├── logto.ts
│   │   ├── sign-in.tsx
│   │   └── sign-out.tsx
│   └── [locale]
│       ├── (protected)
│       │   ├── (routes)
│       │   ├── layout.tsx
│       │   └── page.tsx
│       ├── (unprotected)
│       │   └── home
│       │       └── page.tsx
│       └── layout.tsx
```

- **Validation**: Tested Logto authentication.

### 4. Initializing Layout and Adding Sidebar

- **Command**:

  - `bunx --bun shadcn@latest init`
  - `bunx --bun shadcn@latest add sidebar`
  - `bunx --bun shadcn@latest add popover`
  - `bunx --bun shadcn@latest add avatar`

- **Reference**: [ShadCN Sidebar Documentation](https://ui.shadcn.com/docs/components/sidebar).
- **Outcome**: Updated the project structure:

```
lms
├── .eslintrc.json
├── .gitignore
├── app
│   ├── (auth)
│   │   ├── callback
│   │   │   └── route.ts
│   │   ├── logto.ts
│   │   ├── sign-in.tsx
│   │   └── sign-out.tsx
│   ├── fonts
│   │   ├── GeistMonoVF.woff
│   │   └── GeistVF.woff
│   ├── globals.css
│   └── [locale]
│       ├── (protected)
│       │   ├── (routes)
│       │   │   ├── search
│       │   │   │   └── page.tsx
│       │   │   └── teacher
│       │   │       ├── analytics
│       │   │       │   └── page.tsx
│       │   │       └── courses
│       │   │           └── page.tsx
│       │   ├── layout.tsx
│       │   └── page.tsx
│       ├── (unprotected)
│       │   └── home
│       │       └── page.tsx
│       └── layout.tsx
├── bun.lockb
├── components
│   ├── navbar.tsx
│   ├── teacher-button.tsx
│   ├── ui
│   │   ├── app-sidebar.tsx
│   │   ├── avatar.tsx
│   │   ├── button.tsx
│   │   ├── input.tsx
│   │   ├── popover.tsx
│   │   ├── separator.tsx
│   │   ├── sheet.tsx
│   │   ├── sidebar.tsx
│   │   ├── skeleton.tsx
│   │   └── tooltip.tsx
│   └── user-button.tsx
├── components.json
├── hooks
│   └── use-mobile.tsx
├── i18n
│   ├── request.ts
│   └── routing.ts
├── lib
│   └── utils.ts
├── locale
│   └── messages
│       ├── ar.json
│       └── en.json
├── middleware.ts
├── next-env.d.ts
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── README.md
├── tailwind.config.ts
└── tsconfig.json
```

### Key Components

#### `app/[locale]/layout.tsx`

Sets up the root layout with localization and sidebar support.

#### `app/[locale]/(protected)/layout.tsx`

Sets up the Dashboard layout with authentication , sidebar and navbar

#### `components/ui/app-sidebar.tsx`

Defines the main sidebar component with dynamic route handling based on user roles.

#### `components/navbar.tsx`

Implements a navigation bar with user and teacher mode switching.

### Summary

This session established the foundational setup for an LMS, including:

- Basic project scaffolding.
- Localization.
- Authentication integration.
- A responsive and accessible layout with a sidebar.

### Screenshots

![Screenshot](/public/documents/images/s01/1.png)

![Screenshot](/public/documents/images/s01/2.png)

![Screenshot](/public/documents/images/s01/3.png)
