# Personal Design System

[![Component checks](https://github.com/Adeyemir/personal-design-system/actions/workflows/checks.yml/badge.svg)](https://github.com/Adeyemir/personal-design-system/actions/workflows/checks.yml)

A React, TypeScript, Tailwind CSS, and Storybook learning project. The goal is to practise building, documenting, checking, and sharing reusable components before working in an existing frontend team's codebase.

This project's theme is a practice theme. Existing product work should reuse that product's brand assets, design tokens, components, and conventions.

## Completed Storybook workshop

[<img src="docs/images/storybook-completed.png" alt="Completed Storybook guide showing Your work here is done, passing component tests, coverage, and accessibility checks. Optional integrations are marked as skipped." width="1600" />](docs/images/storybook-completed.png)

The finished local guide and passing component checks. Click the screenshot to open the full-resolution image.

## Run locally

```bash
npm ci
npm run storybook
```

Use Node.js 24. Open http://localhost:6006. `npm run dev` starts the separate Vite starter app.

## Checks

```bash
npm run lint
npm run build
npm run test:storybook
npm run test:storybook:coverage
npm run build-storybook
```

## Component map

| Level | Components | Lesson |
| --- | --- | --- |
| Atoms | Button, Badge, Input | Props, variants, accessible labels, and shared styling |
| Molecules | Card | Children, optional slots, and composition |
| Organisms | DashboardSection | Combining components and responsive grids |

## Learning log

Each completed stage is committed and pushed separately so the Git history explains the progression.

| Stage | Status | Implemented and learned |
| --- | --- | --- |
| Foundations | Complete | Button and Badge variants; Card composition; a responsive DashboardSection; checking contrast in Storybook |
| 1. Controls | Complete | The dashboard renders its `title` prop, and its story supplies `args.title`. Controls changes those args, which updates the rendered heading. ESLint ignores generated Storybook output. |
| 2. Reusable data and states | Complete | The dashboard accepts typed project data and a create callback; five stories cover realistic states. Input demonstrates labels, descriptions, errors, disabled state, and filled state. |
| 3. Documentation and verification | Complete | Autodocs, an MDX guide, interaction tests, light/dark checks, accessibility failures, coverage, and a GitHub Actions workflow |
| 4. Sharing and recap | Complete | A static build and preview command, downloadable CI artifacts, and a final hands-on review checklist. Public hosting is optional. |

### Stage 1 exercise: Controls

Open **Organisms → DashboardSection → Default**, select **Controls**, and change `title`. Follow the value through these three places:

1. `args.title` in `DashboardSection.stories.tsx` supplies a sample value.
2. `DashboardSectionProps` defines the component's input.
3. `<h2>{title}</h2>` displays that input.

The default value `title = 'My projects'` is used when the prop is omitted.

### Stage 2 exercise: Data, states, and Actions

- Change the `projects` array in DashboardSection Controls. `.map()` renders one Card per project, and the stable `id` supplies React's `key`.
- Open **Empty**, **Many Projects**, and **Long Titles** to review cases beyond the default layout.
- Open **Mobile** or use the Viewports toolbar. The grid changes from one column to two at the `md` breakpoint.
- Click **Create project**, then open **Actions**. `fn()` records the callback; the story is a UI demonstration and does not save a project to a server.
- Inspect Input's stories. The label is linked with `htmlFor`/`id`; helper and error text are linked with `aria-describedby`; errors set `aria-invalid`.

Input is an uncontrolled native input: `defaultValue` provides its initial value. A consumer can instead supply `value` and `onChange` to manage its state.

### Stage 3 exercise: Documentation and tests

Open **Guides → Tutorial** in Storybook for the complete walkthrough. Each component also has an Autodocs page.

- `play` functions verify button callbacks, disabled behavior, clicking an input label, typing, linked error messages, the empty state, and a mobile layout without horizontal overflow.
- The Light / Dark toolbar changes the component theme and its canvas together. Semantic text colors stay readable in both themes.
- `npm run test:storybook` renders every workshop story in both light and dark themes, with accessibility violations treated as errors.
- `npm run test:storybook:coverage` writes an HTML report to `coverage/index.html`.
- `npm run check` runs lint, the application build, component tests, and the static Storybook build.
- `.github/workflows/checks.yml` runs the same checks for pushes and pull requests. Successful runs provide downloadable `storybook-site` and `component-coverage` artifacts for seven days.
- The local sidebar runner uses one light-theme project because the addon assigns a single project name per Storybook configuration. CLI and CI still run both themes. This avoids duplicate project names when clicking Run tests with Coverage and Accessibility enabled.

Stage 3 verification: 23 stories pass in each theme, for 46 Chromium tests. This includes automated accessibility checks and eight interaction scenarios per theme. The first coverage run reports 100% line coverage and 97.95% branch coverage for the five components. Coverage is a record of execution, rather than a guarantee that every user scenario is covered.

The [first complete GitHub Actions run](https://github.com/Adeyemir/personal-design-system/actions/runs/40661394338) also passed lint, builds, all themed tests, and both artifact uploads.

### Stage 4 exercise: Share and review

```bash
npm run build-storybook
npm run preview:storybook
```

Open http://localhost:6007 to review the production Storybook build. The development workshop remains on port 6006.

The static site is written to `storybook-static`. Successful [GitHub Actions runs](https://github.com/Adeyemir/personal-design-system/actions/workflows/checks.yml) attach a `storybook-site` artifact containing that build, and a `component-coverage` artifact containing the coverage report. Download a build to review it with a static server. Artifacts expire after seven days; source and build commands remain in Git.

The repository and downloadable build complete the sharing exercise. A public Pages or Chromatic site can be added separately when desired. This tutorial does not require creating a paid account or adding a secret.

### Stage commits

- [Stage 1: Controls and learning log](https://github.com/Adeyemir/personal-design-system/commit/50b83af)
- [Stage 2: Data-driven states and Input](https://github.com/Adeyemir/personal-design-system/commit/60d8902)
- [Stage 3: Documentation and automated checks](https://github.com/Adeyemir/personal-design-system/commit/dbef9ca)
- Stage 4: `docs: wrap up Storybook tutorial and sharing workflow` in the repository history.
- Follow-up: keep the sidebar test runner compatible with the two-theme CLI configuration, and normalize heading assertions when Controls values contain whitespace.

The follow-up was verified through Storybook's own test service: all 23 stories pass with accessibility enabled. The same configuration passes with coverage in sidebar mode, and all 46 CLI theme checks still pass.

## What this project covers

- Reusable React components with typed props, variants, children, and composition.
- Data-driven rendering, callbacks, empty states, and responsive layouts.
- Storybook stories, Controls, Actions, Autodocs, and an MDX tutorial guide.
- Accessible labels, validation messages, keyboard focus, and light/dark themes.
- Interaction tests, accessibility checks, coverage reports, and GitHub Actions.
- Small, documented implementation stages committed and pushed to GitHub.

The Storybook sidebar focuses on the workshop components and guide. The original generated examples remain in the repository as source references.

### Design references

The existing practice theme remains the main target. [shadcn/ui](https://ui.shadcn.com/) informs compact content hierarchy and restrained surfaces; the [imgs.so sign-in reference](https://imgs.so/) contributes only a flat, rounded input treatment. Existing font and color roles remain in place. The form craft reference requires visible labels, native inputs, associated messages, and visible keyboard focus. The danger color is reserved for validation messages and error borders.

## References

- [Storybook documentation](https://storybook.js.org/docs)
- [Stories and args](https://storybook.js.org/docs/writing-stories/args)
- [Interaction tests](https://storybook.js.org/docs/writing-tests/interaction-testing)
- [Accessibility tests](https://storybook.js.org/docs/writing-tests/accessibility-testing)
