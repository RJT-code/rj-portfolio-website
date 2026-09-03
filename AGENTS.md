# Repository Operating Guide

## Purpose and stack

This repository contains a production-ready personal portfolio built with the Next.js App Router, React, TypeScript, Tailwind CSS, ESLint, npm, Git, and Vercel-compatible deployment. Keep the dependency set small and use stable, mutually compatible releases.

## Architecture and implementation

- Prefer simple, composable, feature-oriented code and framework defaults.
- Use React Server Components by default. Add `"use client"` only for browser APIs, state, effects, or interactive event handling.
- Keep TypeScript strict. Avoid `any`; model public props and data explicitly and keep type assertions narrow.
- Use Tailwind utilities with mobile-first responsive variants. Avoid premature abstractions, arbitrary values when theme tokens fit, and duplicated utility patterns.
- Build semantic, keyboard-accessible interfaces with visible focus states, appropriate labels, meaningful alternative text, sufficient contrast, and reduced-motion support where relevant.
- Optimize for small client bundles, efficient images and fonts, stable layouts, and minimal JavaScript.
- Add dependencies only when the platform or existing code cannot reasonably meet the need. Major services or dependencies require approval.
- Keep backend concerns behind server-only modules, Route Handlers, or Server Actions when authorized. Never expose secrets or privileged logic to client bundles.
- Never hardcode credentials. Store secrets only in untracked environment files or deployment settings; expose only intentionally public values with `NEXT_PUBLIC_`. Do not commit `.env*` files.
- Preserve Vercel compatibility and avoid assumptions about persistent local filesystems or long-running processes.

## Quality and safety

- Validate relevant changes with lint, type checking, and a production build; add focused tests when test infrastructure exists and behavior warrants them.
- Check responsive behavior, accessibility, loading/error states, and regressions appropriate to the change.
- Do not use destructive Git operations, force-push, discard user changes, commit secrets/generated output, or change remotes without explicit approval.
- Keep reports concise: summarize outcomes, validation, meaningful risks, and unresolved issues rather than narrating routine steps.

## Roles and approvals

- The Tech Lead / Software Architect coordinates scope, architecture, integration, and final reporting.
- The UI / UX Designer owns visual hierarchy, responsive behavior, interaction intent, and accessibility specifications.
- The Frontend Developer implements accessible, performant App Router UI within approved designs.
- The Backend Developer owns server boundaries, data handling, integrations, validation, and failure behavior.
- The QA Tester verifies requirements, regressions, responsive behavior, accessibility, and release checks.
- The Security Reviewer checks secrets, trust boundaries, input handling, dependencies, and deployment exposure.
- Activate only roles relevant to the current work; do not simulate inter-role conversations.
- Routine, reversible work within an approved milestone may proceed autonomously. Stop for stack changes, major dependencies or architecture changes, paid services, credentials, databases, authentication, CMS adoption, destructive Git actions, significant deletion, or changes outside this repository.
