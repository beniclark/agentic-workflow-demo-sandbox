---
# Trigger: whenever code under src/ changes on main.
on:
  push:
    branches: [main]
    paths:
      - "src/**"

permissions:
  contents: read
  pull-requests: read

timeout-minutes: 10
concurrency:
  group: docs-sync-${{ github.ref }}
  cancel-in-progress: true

safe-outputs:
  create-pull-request:
    max: 1
    draft: false
    allowed-files:
      - "docs/**"  # hard allow-list: this agent may only touch docs/

engine: copilot

tools:
  bash:
    - "git log --oneline -n 5"
    - "git diff HEAD~1..HEAD -- 'src/**'"
    - "ls **"
    - "cat **"
---

# Documentation Sync Agent

Code under `src/` just changed. Your job is to decide whether the
documentation in `docs/` still accurately reflects the public API and,
if not, to open a pull request that updates the docs (and **only** the
docs) to match.

## Procedure

1. Inspect the latest diff: `git diff HEAD~1..HEAD -- 'src/**'`.
2. For each exported function, class, or configuration key that changed,
   search `docs/` for references. Use `grep -rn`.
3. If any doc snippet is now inaccurate (wrong signature, wrong
   parameter name, outdated example, removed field), rewrite it to match
   the current code.
4. Preserve the doc's tone, heading structure, and example style. You
   are editing prose, not rewriting the manual.
5. Open a pull request titled:
   `docs(agent): sync docs for <changed symbol(s)>`

   The PR body must:
   - list the code symbol(s) that drifted
   - link to the commit(s) that introduced the drift
   - show a before/after diff of each edited doc section.

## Forbidden

- Touching anything outside `docs/` — this is enforced by
  `safe-outputs.create-pull-request.paths`, but it should also be obvious
  from your change set.
- Rewriting doc structure, headings, or navigation.
- "Improving" docs that aren't actually drifted.

If the docs are already in sync, exit cleanly without opening a PR.
