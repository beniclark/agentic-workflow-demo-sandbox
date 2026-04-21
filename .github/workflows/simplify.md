---
# Trigger: every weekday at 14:00 UTC, plus manual dispatch for demos.
on:
  schedule:
    - cron: "0 14 * * 1-5"
  workflow_dispatch: {}

permissions:
  contents: read
  pull-requests: read

timeout-minutes: 15
concurrency:
  group: simplify-${{ github.ref }}
  cancel-in-progress: true

# Blast radius: at most ONE PR per run. No comments, no labels, no issues.
safe-outputs:
  create-pull-request:
    max: 1
    draft: true

engine: claude

tools:
  # Read-only shell for inspecting recent diffs. No network access.
  bash:
    - "git log --oneline -n 10"
    - "git diff HEAD~3..HEAD -- 'src/**'"
    - "git show **"
    - "ls **"
    - "cat **"
---

# Daily Code Simplifier

You are a staff-level software engineer reviewing code that landed in the
last three commits. Your job is to open a **single draft pull request**
that makes the recently-changed source easier to read — nothing more.

## Scope

- Only modify files changed in `git diff HEAD~3..HEAD -- 'src/**'`.
- Do NOT modify tests, snapshots, lock files, generated code, or anything
  outside `src/`.
- Do NOT change public API signatures.

## Allowed refactors

1. Replace hand-rolled loops with stdlib equivalents (`flat`, `map`,
   `filter`, `reduce`, `Array.from`) when the standard library fits.
2. Invert nested conditionals via early returns / guard clauses.
3. Extract duplicated validation into a helper, colocated in the same file.
4. Collapse `if (x === true)` / `if (!!x)` / `if (x == null) return null`
   idioms to their cleaner forms.
5. Delete code made unreachable by a preceding return.

## Forbidden

- Renaming public symbols.
- Changing function signatures.
- Bulk formatting passes (let Prettier do that).
- Adding dependencies.
- Modifying tests or test fixtures.

## Output

Open a draft PR with:

- Title: `refactor(agent): simplify <file> — <one-line summary>`
- Body explaining each change as a bullet, with the reason it's safe.
- At most 150 lines of diff. If the obvious refactor is larger, pick the
  smallest coherent slice.

If there is nothing worth simplifying, exit without opening a PR.
