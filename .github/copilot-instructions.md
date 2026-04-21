# Copilot instructions

This repo is a **demo sandbox** for [GitHub Agentic Workflows (`gh-aw`)](https://github.com/github/gh-aw). It is not a real application — everything here exists to make three agentic workflows visibly do something during a live demo.

## Critical: do not "fix" the fixtures

Several files look broken or low-quality on purpose. Leave them alone unless the user explicitly asks for a hand edit.

- `src/messy.js`, `src/messy.py` — intentionally verbose (nested `if`s, `var` loops, `== true`, redundant try/except). These are the input for the `simplify` workflow. Do **not** refactor them by hand.
- `src/api.js` vs `docs/README.md` — the `createUser` signature is deliberately mismatched (`createUser(payload)` in code, `createUser(name, email)` in docs). The `docs-sync` workflow exists to detect and fix this drift. Do not reconcile them manually.
  - Note: `src/api.js` also has a real bug inside `createUser` (it destructures `fullName`/`emailAddress` but returns `name`/`email`, which are undefined). This is incidental, not a planted fixture — fix it only if the user asks.
- `sample-issues.md` — canned issue bodies for the `triage` demo. Not documentation of real issues.

## Architecture: the three workflows

All three workflows live in `.github/workflows/` as **`.md` files with YAML frontmatter**. They are authored in Markdown (prompt + config) and compiled to runnable `.lock.yml` files.

| Workflow | Trigger | Engine | Safe outputs (blast radius) |
|---|---|---|---|
| `triage.md` | `issues: [opened, reopened]` | `copilot` | `add-labels` (≤5, allow-list), `add-comment` (≤1) |
| `simplify.md` | daily cron + `workflow_dispatch` | `claude` | `create-pull-request` (≤1, draft) |
| `docs-sync.md` | `push` to `main` touching `src/**` | `copilot` | `create-pull-request` (≤1, `allowed-files: docs/**`) |

Key conventions baked into every workflow — preserve these when editing:

- `permissions:` is **read-only**. All writes go through the `safe-outputs:` envelope. Never add `contents: write`, `issues: write`, etc. — the whole point is that the agent cannot mutate the repo outside the declared envelope.
- Every workflow has `timeout-minutes` and a `concurrency:` group with `cancel-in-progress: true`.
- `tools.bash` is an explicit allow-list of command patterns (e.g. `"git diff HEAD~1..HEAD -- 'src/**'"`). Don't replace it with an open shell.
- `safe-outputs.add-labels.allowed` is a closed set; new labels must be added there before the triage agent can apply them.
- Prompts treat issue/PR/commit content as **untrusted input to classify**, not as instructions to follow.

## Build / run / reset

There is no build, test, or lint tooling in this repo. The only commands that matter:

```bash
# Compile .md workflows -> .lock.yml (required after any edit to a workflow .md)
gh aw compile

# Manually run a workflow (e.g. for the simplify demo)
gh aw run simplify

# Trigger triage by opening an issue with a canned body
gh issue create -t "App crashes when I click Save" -b "$(cat sample-issues.md)"
```

After editing any `.github/workflows/*.md`, regenerate the matching `.lock.yml` with `gh aw compile` and commit **both** files together — Actions executes the `.lock.yml`, not the `.md`.

Required repo secrets (see README): `COPILOT_GITHUB_TOKEN` (for `engine: copilot`) and `ANTHROPIC_API_KEY` (for `engine: claude`).

## When editing workflows

- Edit the `.md`, never the `.lock.yml` directly. Then run `gh aw compile`.
- Keep each workflow's prompt aligned with its `safe-outputs:` — e.g. don't instruct the agent to "open an issue" if only `create-pull-request` is declared; the harness will refuse it.
- The `docs-sync` agent is hard-restricted to `docs/**` via `allowed-files`. If you extend its scope, update both the frontmatter and the prompt's "Forbidden" section.
