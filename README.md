# agentic-workflow-demo-sandbox

Scratch repo for live demos of [GitHub Agentic Workflows](https://github.com/github/gh-aw).

Paired with the deck and source demos at
[`beniclark/agentic-workflow-demo`](https://github.com/beniclark/agentic-workflow-demo).

## Workflows

| File | Trigger | Engine | Safe outputs |
|------|---------|--------|--------------|
| `.github/workflows/triage.md`    | `issues: [opened, reopened]` | `copilot` | add-labels (≤5), add-issue-comment (≤1) |
| `.github/workflows/simplify.md`  | daily cron + manual dispatch | `claude`  | create-pull-request (≤1, draft) |
| `.github/workflows/docs-sync.md` | push to `main` on `src/**`   | `copilot` | create-pull-request (≤1) |

## Fixtures

| Path | Used by |
|------|---------|
| `src/messy.js`, `src/messy.py` | `simplify` — intentionally verbose code for the agent to clean up |
| `src/api.js` + `docs/README.md` | `docs-sync` — intentionally disagree on the `createUser` signature |
| `sample-issues.md` | `triage` — cut-and-paste bodies to open real issues during the demo |

## Running the demos

Prereqs:
- `gh extension install github/gh-aw` (once per machine)
- Copilot coding agent enabled on the repo (for `triage` and `docs-sync`)
- `gh secret set ANTHROPIC_API_KEY` (for `simplify` only)

```bash
# Compile the .md workflows into .lock.yml files that Actions executes.
gh aw compile

# Demo 1 — open an issue, watch triage.md run:
gh issue create -t "App crashes when I click Save" -b "$(cat sample-issues.md)"

# Demo 2 — trigger simplify manually:
gh aw run simplify

# Demo 3 — docs-sync fires on the next push that touches src/
# (or dispatch manually once schedule/push is added).
```

To reset between demos:

```bash
gh repo delete beniclark/agentic-workflow-demo-sandbox --yes
# then re-run the provisioning script from the deck repo.
```
