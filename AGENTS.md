# Project instructions

## Purpose

This repository contains the public WebCare DatV catalog website.
It presents independently developed technical solutions and DevOps tutoring for
engineering teams, businesses, content teams, and individual learners.

The current objective is to help visitors find a suitable solution or tutoring
service and contact the seller. After a manual bank transfer, a solution customer
receives source code and an integration guide, while a tutoring customer
receives the agreed meeting.

This repository is not a SaaS application, a monitoring platform, a customer
dashboard, or the source repository for any listed solution.

## Read order

Read only what is needed for the task:

1. Read this file.
2. Read `docs/CODEBASE.md` when onboarding or when a task spans HTML, CSS, and
   JavaScript.
3. Read `docs/UI_GUIDELINES.md` for any visual, copy, layout, responsive, theme,
   interaction, or accessibility change.
4. Read `docs/TECHNICAL_FOUNDATION.md` only when architecture, tools,
   deployment, security, backup, or operations are relevant.
5. Read `docs/PRODUCT.md` only when product scope, pricing, customers, or
   business operations are relevant.
6. Read only implementation files directly related to the requested change.

Do not load the entire repository when targeted searches and focused reads are
enough.

## Current constraints

- Build a responsive public marketing website first.
- Deploy the static website on Netlify with no build step.
- Keep Docker Compose as an optional self-host path only when it is requested.
- Keep the first release small enough for one person to operate.
- Use plain HTML, CSS, and JavaScript until a framework solves a measured need.
- The primary conversion is a consultation request through the contact form.
- Each solution or tool must live in its own separate project.
- Do not place solution source code in this catalog repository.
- Payment is arranged manually by bank transfer after consultation.
- Do not introduce Kubernetes, microservices, queues, or distributed systems.
- Do not build a custom dashboard, authentication system, billing system, or
  mobile application unless the product scope explicitly changes.
- Keep internal operations and customer infrastructure out of this repository.

## Engineering principles

- Choose the smallest design that completely solves the current requirement.
- Keep code simple, explicit, and easy to delete or replace.
- Use clear domain names. Avoid abbreviations and vague names such as
  `data`, `item`, `manager`, `helper`, or `utils` when a precise name is
  available.
- Keep functions focused on one responsibility.
- Separate configuration, domain logic, integration code, and persistence.
- Prefer composition over inheritance.
- Avoid speculative abstractions and premature generalization.
- Remove dead code instead of commenting it out.
- Do not duplicate logic. Extract shared code only after a real duplication is
  understood.
- Make error handling explicit. Never silently ignore failures.
- Validate data at system boundaries.
- Store configuration in environment variables and provide safe defaults only
  when they are truly safe.
- Never commit secrets, credentials, tokens, private keys, customer data, or
  production environment files.
- Pin container image versions. Do not use `latest` in production.
- Add health checks, restart policies, resource awareness, and persistent
  volumes to production services.
- Keep public network exposure minimal. Only the reverse proxy should publish
  HTTP and HTTPS ports unless a documented exception is required.
- Make backup and restore procedures part of the implementation, not an
  afterthought.

## Code quality

When custom code is added:

- Use the formatter, linter, type checker, and test runner selected by the
  repository.
- Treat lint and type errors as failures.
- Prefer strongly typed interfaces and explicit return values at boundaries.
- Write tests for business rules, failure paths, and bug fixes.
- Avoid tests that only repeat implementation details.
- Keep comments short and explain why, not what.
- Keep modules cohesive and dependencies directional.
- Do not catch broad exceptions unless they are logged and converted into a
  meaningful boundary error.

Do not invent build or test commands. Add exact commands to this file when the
first implementation stack is introduced.

Current local preview command:

```text
python3 -m http.server 8080 --directory website
```

Current validation has no dependency installation. Check HTML, CSS, JavaScript,
responsive layout, keyboard navigation, and browser console errors.

## UI quality

- Follow the code ownership map in `docs/CODEBASE.md`.
- Keep CSS split by responsibility. Do not merge the CSS files into one large
  file.
- Preserve the documented CSS load order and place new rules in the file that
  owns the component.
- Follow `docs/UI_GUIDELINES.md` for every user-facing UI change.
- Keep the solution catalog as a horizontal scroll-snap carousel unless the user
  explicitly requests another presentation.
- Keep copy concise. Each section must have one clear purpose.
- Use a consistent type scale, spacing scale, color tokens, and layout grid.
- Support light and dark themes through shared CSS variables.
- Do not duplicate component styles between themes.
- Check contrast, keyboard focus, touch targets, and readable line lengths.
- Review the rendered UI in both themes at desktop and mobile sizes.
- Do not add icons or visual decoration.
- Prefer fewer strong elements over many competing elements.
- Prefer HTML and CSS for simple interface illustrations.
- Use optimized SVG only when a vector asset is genuinely needed.
- Do not store raster marketing images in this repository. Serve them through
  ImageKit when image content is introduced.
- Do not embed large images as base64 or data URLs.
- Only the ImageKit URL endpoint may be used in frontend code.
- Never expose ImageKit private keys, upload credentials, signatures, tokens,
  or admin configuration in this public repository.
- Add responsive `srcset`, explicit dimensions, lazy loading, and async decoding
  when an ImageKit asset is introduced.

## Change workflow

1. Inspect the smallest relevant set of files.
2. State any assumption that materially affects the solution.
3. Implement the smallest coherent change.
4. Run the relevant validation.
5. Review the diff for unnecessary complexity, secrets, and unrelated edits.
6. Update documentation when architecture, operations, configuration, or user
   behavior changes.

Do not modify unrelated files. Preserve user changes already present in the
workspace.

## Git workflow

- Develop and validate changes locally by default.
- Do not create commits unless the user explicitly requests a commit.
- Do not push, rename repositories, change remotes, or create branches unless
  the user explicitly requests that exact action in the current conversation.
- Never assume that finishing a feature includes publishing it.
- This repository is public. Before any requested push, scan the complete diff
  for secrets, credentials, personal information, customer data, environment
  files, generated files, and unintended local paths.
- Show the user what will be published before pushing when the scope is not
  already obvious.

## Docker Compose rules

- Use `compose.yaml` as the main Compose file.
- Provide `.env.example` with placeholders, never real secrets.
- Use named volumes for persistent application data.
- Put internal services on private Docker networks.
- Publish only required ports.
- Use explicit image versions.
- Document every environment variable.
- Verify configuration with `docker compose config`.
- Verify service health after deployment.
- Never run automatic unattended major-version upgrades.
- Back up persistent data before upgrades and test restoration periodically.

These rules apply when deployment files are added. Do not add internal tools,
solution code, customer systems, or payment processing to the website Compose
project.

## Documentation rules

- Keep documentation concise and factual.
- Maintain one source of truth for each decision.
- Link to an existing document instead of copying the same explanation.
- Record architecture decisions in `docs/TECHNICAL_FOUNDATION.md`.
- Record product and service decisions in `docs/PRODUCT.md`.
- Use normal punctuation.
- Do not use the em dash character.
- Do not use emoji or decorative icons.

## Token and context efficiency

- Search with `rg` before opening broad files.
- Read focused line ranges when only one section is relevant.
- Do not repeatedly read unchanged files.
- Avoid restating information already present in project documents.
- Keep progress updates and final summaries concise.
- Prefer a small diff over generating replacement files.
- Do not create duplicate plans, summaries, or architecture documents.

## Definition of done

A change is complete only when:

- It meets the requested scope.
- Relevant validation passes.
- Failure behavior is clear.
- No secret or customer data was added.
- Deployment and documentation remain accurate.
- The final response identifies changed files and any remaining manual step.
