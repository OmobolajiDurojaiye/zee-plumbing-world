# Agent Guide — Zee Plumbing World
- Read PRD.md and TRD.md before any change. Visual source of truth: /design-reference/*.png (Mendx screenshots) + logo.
- Stack: Next.js App Router, TS strict, Tailwind v4, Radix, Embla, motion, RHF+zod, Resend.
- All copy/data lives in /content (validated by zod). Components receive props.
- Never fabricate client facts. Use TODO(client) placeholders; hide empty sections.
- Before finishing a task: run lint, typecheck, build, then compare UI to the reference at 1440px and 390px.
- A11y and perf budgets in TRD §8 and §10 are release blockers.
