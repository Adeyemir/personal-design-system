# Personal Design System

A React, TypeScript, Tailwind CSS, and Storybook learning project. The goal is to practise building, documenting, checking, and sharing reusable components before working in an existing frontend team's codebase.

This project's theme is a practice theme. Existing product work should reuse that product's brand assets, design tokens, components, and conventions.

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
| 4. Sharing and recap | Next | A shareable build, a guided review, and the final learning checklist |

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

Stage 3 verification: 23 stories pass in each theme, for 46 Chromium tests. This includes automated accessibility checks and eight interaction scenarios per theme. The first coverage run reports 100% line coverage and 97.95% branch coverage for the five components. Coverage is a record of execution, rather than a guarantee that every user scenario is covered.

The Storybook sidebar focuses on the workshop components and guide. The original generated examples remain in the repository as source references.

### Design references

The existing practice theme remains the main target. [shadcn/ui](https://ui.shadcn.com/) informs compact content hierarchy and restrained surfaces; the [imgs.so sign-in reference](https://imgs.so/) contributes only a flat, rounded input treatment. Existing font and color roles remain in place. The form craft reference requires visible labels, native inputs, associated messages, and visible keyboard focus. The danger color is reserved for validation messages and error borders.

## About Storybook's completion percentage

The sidebar percentage measures Storybook's onboarding checklist. Some items are triggered by actions in the running UI, such as changing Controls, using Viewports, or running tests from the sidebar. Other items involve optional AI or hosted services. It is separate from this repository's learning checklist, and CLI tests or Git pushes do not automatically complete every UI item.

Keep the checklist honest: perform applicable actions in Storybook, and use its own skip controls for optional steps you choose to omit.

## References

- [Storybook documentation](https://storybook.js.org/docs)
- [Stories and args](https://storybook.js.org/docs/writing-stories/args)
- [Interaction tests](https://storybook.js.org/docs/writing-tests/interaction-testing)
- [Accessibility tests](https://storybook.js.org/docs/writing-tests/accessibility-testing)
