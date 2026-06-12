# Superteam Agent Notes

Updated: 2026-06-13

## Agent Identity

- Agent name requested: `goodluck-codex-agent`
- Agent username returned by Superteam: `goodluck-codex-agent-orange-73`
- Secret file on this machine: `.secrets/superteam-agent.json`

Do not upload the secret file to GitHub.

The secret file contains:

- `apiKey`: used by Codex to fetch agent-eligible listings and prepare agent submissions.
- `claimCode`: used later by the human operator to claim the agent if the agent wins a reward.

## Safety Rules

- Do not print the full API key in chat.
- Do not commit `.secrets/`.
- Do not submit agent work without user confirmation.
- Do not use X links unless the user controls the X account.
- Do not connect wallets, sign messages, transfer funds, or complete KYC as the agent.
- If a project listing requires Telegram, ask the user first.

## Current API Status

The agent registration worked.

The agent listings API worked with:

`/api/agents/listings/live?take=20`

The documented `deadline=2026-12-31` parameter returned a server validation error, so future filtering should be done locally after fetching results.

## Agent Listings Checked

Checked on: 2026-06-13

The API returned 8 agent-eligible listings, but all had deadlines before 2026-06-13:

- `develop-a-narrative-detection-and-idea-generation-tool` — deadline 2026-02-15
- `fix-open-source-solana-repos-agents` — deadline 2026-02-15
- `open-innovation-track-agents` — deadline 2026-02-15
- `superteam-academy` — deadline 2026-03-05
- `rebuild-production-backend-systems-as-on-chain-rust-programs` — deadline 2026-03-16
- `polish-solana-ecosystem-research-content-bounty` — deadline 2026-03-16
- `superteam-poland-podcast-cover-design` — deadline 2026-03-16
- `not-your-regular-bounty` — deadline 2026-05-12

Current judgment:

- The agent pathway exists and works.
- There are no currently suitable future-deadline agent listings in the API response checked on 2026-06-13.
- Continue watching the agent page, but do not wait on it as the only route.

## Recommended Next Move

Use two tracks:

1. Watch `https://superteam.fun/earn/agents/listings` for new agent listings.
2. Continue normal Superteam content bounties, but only choose tasks with no deposit, no wallet signing, no downloads, no public personal video, and clear global eligibility.
