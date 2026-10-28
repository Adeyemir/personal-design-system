# Personal Design System

A React, TypeScript, Tailwind CSS, and Storybook learning project. The goal is to practise building, documenting, checking, and sharing reusable components before working in an existing frontend team's codebase.

This project's theme is a practice theme. Existing product work should reuse that product's brand assets, design tokens, components, and conventions.

## Run locally

```bash
npm ci
npm run storybook
```

Open http://localhost:6006. `npm run dev` starts the separate Vite starter app.

## Checks

```bash
npm run lint
npm run build
npm run build-storybook
```

## Component map

| Level | Components | Lesson |
| --- | --- | --- |
| Atoms | Button, Badge | Props, variants, and shared styling |
| Molecules | Card | Children, optional slots, and composition |
| Organisms | DashboardSection | Combining components and responsive grids |

## Learning log

Each completed stage is committed and pushed separately so the Git history explains the progression.

| Stage | Status | Implemented and learned |
| --- | --- | --- |
| Foundations | Complete | Button and Badge variants; Card composition; a responsive DashboardSection; checking contrast in Storybook |
| 1. Controls | Complete | The dashboard renders its `title` prop, and its story supplies `args.title`. Controls changes those args, which updates the rendered heading. ESLint ignores generated Storybook output. |
| 2. Reusable data and states | Next | Typed data, callbacks, a labelled form input, and stories for realistic edge cases |
| 3. Documentation and verification | Planned | Autodocs, interaction tests, accessibility checks, and repeatable GitHub checks |
| 4. Sharing and recap | Planned | A shareable build, a guided review, and the final learning checklist |

### Stage 1 exercise: Controls

Open **Organisms → DashboardSection → Default**, select **Controls**, and change `title`. Follow the value through these three places:

1. `args.title` in `DashboardSection.stories.tsx` supplies a sample value.
2. `DashboardSectionProps` defines the component's input.
3. `<h2>{title}</h2>` displays that input.

The default value `title = 'My projects'` is used when the prop is omitted.

## About Storybook's completion percentage

The sidebar percentage measures Storybook's onboarding checklist. Some items are triggered by actions in the running UI, such as changing Controls, using Viewports, or running tests from the sidebar. Other items involve optional AI or hosted services. It is separate from this repository's learning checklist, and CLI tests or Git pushes do not automatically complete every UI item.

Keep the checklist honest: perform applicable actions in Storybook, and use its own skip controls for optional steps you choose to omit.

## References

- [Storybook documentation](https://storybook.js.org/docs)
- [Stories and args](https://storybook.js.org/docs/writing-stories/args)
- [Interaction tests](https://storybook.js.org/docs/writing-tests/interaction-testing)
- [Accessibility tests](https://storybook.js.org/docs/writing-tests/accessibility-testing)
