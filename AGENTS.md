# Wecare Site instructions

## Project context

This repository contains the public Wecare DatV catalog website. It presents
independently developed technical solutions and the Wecare Mentor service.

The catalog currently covers:

- Wecare Incident
- Wecare App Notify
- Wecare Pages
- Wecare GitOps
- Wecare Mentor

This repository is not a SaaS backend, monitoring platform, customer dashboard,
payment system, or source repository for any listed solution. Each solution has
its own repository, source code, guide, and lifecycle.

The main conversion is a consultation request. Payment is arranged manually by
bank transfer after the scope and price are confirmed.

A separate private repository, `wecare-license`, owns internal customer,
license-key, activation, expiration, revocation, and audit management. Its
administration interface, database, secrets, and source code are private. This
public catalog must not contain license keys or license-management logic.

## Technical baseline

- Use semantic HTML, focused CSS files, and plain JavaScript.
- Keep the website static and deploy it to Netlify with no build step.
- Do not add a framework or dependency unless it solves a measured need.
- Default content is Vietnamese, with English and Simplified Chinese support.
- Keep product source code, customer systems, credentials, secrets, and private
  operational data out of this repository.

## Read only what the task needs

Do not read the whole repository or every document before each task.

- Read `docs/CODEBASE.md` for changes spanning HTML, CSS, and JavaScript, or to
  find the file that owns a component.
- Read `docs/UI_GUIDELINES.md` for visual, copy, layout, responsive, theme,
  interaction, motion, or accessibility changes.
- Read `docs/PRODUCT.md` for product scope, solution relationships, pricing,
  customers, or business operations.
- Read `docs/TECHNICAL_FOUNDATION.md` for architecture, deployment, security,
  forms, storage, backup, or operations.
- Read only the implementation files directly related to the requested change.

Use targeted `rg` searches and focused line ranges before opening broad files.

## Code ownership

- `website/index.html`: semantic content, SEO metadata, entry points, and the
  Netlify consultation form.
- `website/assets/css/`: tokens and component-specific styles. Preserve the CSS
  load order documented in `docs/CODEBASE.md`.
- `website/assets/js/main.js`: theme, mobile menu, page controls, and form.
- `website/assets/js/translations.js`: VI, EN, and zh-CN strings and language
  selection.
- `website/assets/js/motion.js`: entrance, reveal, ambient effects, preview
  animation, and scroll progress.
- `website/assets/js/solution-carousel.js`: solution carousel behavior.

Keep content in HTML, each interaction in its owning JavaScript file, and each
component's styles in its owning CSS file. Do not render primary content with
JavaScript.

## Required behavior

- Add a `data-i18n` key to new user-facing HTML copy and add matching EN and
  zh-CN strings to `translations.js`.
- Route dynamic messages through `getTranslation(key)`.
- Keep the solution catalog as a horizontal scroll-snap carousel unless the
  user explicitly requests another presentation.
- Keep carousel logic out of `main.js`.
- Respect `prefers-reduced-motion` and pause nonessential animation when hidden
  or offscreen.
- Preserve visible keyboard focus, sufficient contrast, touch targets, and
  support for screens from 360px.
- Keep the consultation CAPTCHA hidden until valid required fields are first
  submitted, then require verification and a second submission.
- Do not add icons, decorative symbols, unverified claims, fake customers,
  testimonials, partners, or unsupported integrations.
- Do not store raster marketing images in this repository. Use only an ImageKit
  public URL endpoint when real image content is introduced.

## Working rules

- Make the smallest coherent change that satisfies the request.
- Preserve unrelated and existing user changes.
- Use clear domain names, focused functions, explicit validation, and explicit
  error handling.
- Do not add speculative abstractions or duplicate logic.
- Never commit secrets, credentials, personal information, production
  environment files, or customer data.
- Do not create commits, push, change remotes, or create branches unless the
  user explicitly requests that exact action.
- Update the relevant document when a lasting product, architecture,
  operational, or user-behavior decision changes.
- Use normal punctuation. Do not use the em dash character, emoji, or decorative
  icons in documents, code, comments, commit messages, or user-facing output.

Safe local inspection and validation do not require confirmation. Ask the user
only when a missing decision would materially change product scope, external
state, security, cost, or data handling.

## Validation

Local preview:

```bash
python3 -m http.server 8080 --directory website
```

JavaScript syntax:

```bash
node --check website/assets/js/main.js
node --check website/assets/js/translations.js
node --check website/assets/js/solution-carousel.js
node --check website/assets/js/motion.js
```

For user-facing changes, check the relevant desktop and mobile layouts, light
and dark themes, keyboard navigation, reduced motion, and browser console. Check
the form and carousel when the change can affect them.

Before finishing, review the diff for unrelated edits, unnecessary complexity,
secrets, personal information, and documentation drift.
