# Other Task Platform Scan

Date: 2026-06-13

Mode: low-touch. Codex screens first; user only confirms external actions.

## Platforms Checked

### Opire

Link: https://opire.dev/

What it is:

- Open-source bounty platform.
- Developers earn money by solving GitHub issues.
- Public page showed featured bounties from about $30 to $2,780.

Fit:

- Good fit if Codex can solve a small coding issue.
- Less dependent on X posting or marketing.

Risks / friction:

- Requires real code contribution.
- May require GitHub login and possibly Stripe payout setup later.
- Need to check each issue carefully before starting.

Current judgment:

- Best new candidate category after GitHub and Superteam.
- Next scan should look for small TypeScript / docs / frontend issues under $30-$100.

### Algora

Link: https://algora.io/

What it is:

- GitHub issue bounty platform.
- Public page says bounties can be created by commenting `/bounty $1000` on GitHub issues.

Fit:

- Good if there are small open-source issues Codex can fix.
- Stronger for coding than writing.

Risks / friction:

- Many bounties are real engineering tasks.
- Need to avoid old, claimed, or ambiguous bounties.

Current judgment:

- Worth scanning, but only for small issues with clear tests and low blast radius.

### Bountycaster

Link: https://www.bountycaster.xyz/

Result:

- Page hit a blocked auth/Privy frame in the browser during scan.

Current judgment:

- Watch later. Not a priority until we can inspect tasks without account friction.

### Dework

Link: https://app.dework.xyz/bounties

Result:

- Public page did not expose useful task text during scan.

Current judgment:

- Watch later. Likely needs login / workspace navigation / DAO context.

### OnlyDust

Link: https://app.onlydust.com/projects

Result:

- Public page says OnlyDust has closed.

Current judgment:

- Remove from active candidate list.

### Outlier

Link: https://app.outlier.ai/

Result:

- Registration page said service is not available in current location.

Current judgment:

- Not suitable now.

### DataAnnotation

Link: https://www.dataannotation.tech/

What it is:

- AI training / evaluation work platform.
- Public page advertises paid hourly remote projects.

Fit:

- Potentially good for the user personally.

Why not low-touch:

- Requires application / assessment.
- Work must be done by the account holder.
- Codex should not impersonate the user or submit assessments as the user.

Current judgment:

- Personal side option, not Codex-autonomous route.

### Clickworker

Link: https://www.clickworker.com/clickworker/

What it is:

- Microtask platform.
- Public page lists surveys, text creation, research, app testing, photos, audio, video.
- Public page says payment providers include PayPal and Payoneer.

Fit:

- Task-based, but mostly human microtasks.

Why not low-touch:

- Requires user account and user action.
- PayPal is paused and Payoneer is still pending.
- Many tasks require phone, photos, audio, or user participation.

Current judgment:

- Watch later after Payoneer approval. Not a good Codex-autonomous path.

### Prolific

Link: https://www.prolific.com/participants

What it is:

- Paid research studies.
- Public page says PayPal payout after cashout threshold.

Why not low-touch:

- Requires waitlist / identity verification.
- Studies must be completed by the actual participant.
- PayPal dependency conflicts with current payment status.

Current judgment:

- Not suitable now.

### Toloka

Link: https://toloka.ai/tolokers/

What it is:

- Simple online tasks.
- Public page says payments use Payoneer.

Why not low-touch:

- Tasks are for the user to complete.
- Payoneer is pending and should not be used on computer.

Current judgment:

- Watch after Payoneer approval, but not Codex-autonomous.

### uTest / Userlytics

What they are:

- Product / app / website testing platforms.

Why not low-touch:

- Usually require real tester profile, devices, screens, audio/video, and payout setup.
- Not suitable for Codex to do independently.

Current judgment:

- Not first route.

## Best Current Non-GitHub / Non-Superteam Route

### Recommendation: Opire + Algora

Reason:

- They are closest to "complete a clearly scoped task and get paid".
- They are open-source issue based.
- Codex can potentially do much of the coding work.
- User involvement can stay low until GitHub login / PR / payout steps.

Next scan target:

- Small documentation issues
- Small TypeScript / frontend issues
- Clearly reproducible bugs
- Issues with tests or simple acceptance criteria
- Bounties around $30-$100

Reject:

- Security vulnerabilities
- Large architecture work
- Issues with unclear reproduction
- Old issues with active claims
- Anything requiring private credentials, paid APIs, downloads from unknown sources, or wallet actions

## Current Conclusion

There are other task websites, but most are not suitable for Codex-autonomous earning.

Best next action:

1. Scan Opire featured bounties for small issues.
2. Scan Algora bounties for small issues.
3. If none fit, keep building public samples and wait for Lyra / Wander replies.
