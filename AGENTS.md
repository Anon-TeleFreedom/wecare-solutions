# Project instructions

## Purpose

This repository contains the public WebCare Solutions marketing website.
WebCare Solutions provides website monitoring, backup, recovery, and server
care for freelancers, web agencies, and small businesses.

The current objective is to explain the services clearly and convert visitors
into qualified consultation requests. This repository is not the internal
monitoring platform and is not a SaaS application.

## Read order

Read only what is needed for the task:

1. Read this file.
2. Read `docs/TECHNICAL_FOUNDATION.md` only when architecture, tools,
   deployment, security, backup, or operations are relevant.
3. Read `docs/PRODUCT.md` only when product scope, pricing, customers, or
   business operations are relevant.
4. Read only implementation files directly related to the requested change.

Do not load the entire repository when targeted searches and focused reads are
enough.

## Current constraints

- Build a responsive public marketing website first.
- Deploy the static website with Docker Compose on one existing server.
- Keep the first release small enough for one person to operate.
- Use plain HTML, CSS, and JavaScript until a framework solves a measured need.
- The primary conversion is a consultation request by phone or contact form.
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

These rules apply when deployment files are added. Do not add internal
monitoring services to the public website Compose project.

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
