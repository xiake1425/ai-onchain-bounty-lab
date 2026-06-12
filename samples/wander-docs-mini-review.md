# Free Mini Review: Wander Docs

Prepared by: Good luck

Date: 2026-06-12

Project reviewed:

- GitHub: https://github.com/wanderwallet/wander-docs
- Public README / GitBook docs repository overview

Review scope:

- Public repository README
- First-time reader experience
- Product choice clarity: Wander Connect, Browser Extension, Mobile App

Safety boundary:

- No wallet installation
- No account creation
- No private key handling
- No transaction signing

## Quick Summary

Wander Docs introduces a non-custodial Arweave and AO native wallet with multiple products: Wander Connect, Wander Browser Extension, and Wander Mobile App. The README clearly explains that these products serve different use cases, but a first-time developer may benefit from a simpler decision guide that helps them choose which product to start with.

The strongest improvement opportunity is to add a short "Which Wander product should I use?" section near the top.

## What Is Clear

1. Wander is positioned as a non-custodial Arweave and AO native wallet.
2. The README states that dApps can interact securely without users sharing private keys with the dApp.
3. The three product lines are named clearly: Wander Connect, Browser Extension, and Mobile App.
4. The README gives a useful high-level difference between embedded wallet, traditional extension, and mobile-first wallet experiences.

## What Could Be Clearer

### 1. Add a product decision guide

The README lists the three products, but a new developer may still wonder which one to use first.

Suggested section:

```text
## Which Wander product should I use?

- Use Wander Connect if you want embedded onboarding with SSO, passkeys, or a white-labeled wallet experience.
- Use Wander Browser Extension if your users already expect a traditional browser wallet flow.
- Use Wander Mobile App if your dApp is mobile-first or focused on AO dApp access from mobile.
```

### 2. Add a one-sentence security summary

The README already says users do not share private keys with dApps. A more visible summary could help build trust.

Suggested wording:

```text
Security note:
Wander is non-custodial. Your dApp can request wallet actions, but users should never share private keys or seed phrases with any website or application.
```

### 3. Make the first developer step more obvious

After reading the product list, the user should know exactly where to go next.

Suggested addition:

```text
Start here:
- Building embedded onboarding? Read Wander Connect.
- Building for extension or mobile users? Read the Injected API guide.
- New to Wander? Read the product comparison first.
```

### 4. Clarify user type: developer vs wallet holder

The README speaks to both wallet holders and developers. It may help to separate the opening by audience:

```text
For wallet holders:
Wander helps you manage Arweave and AO assets without sharing private keys with dApps.

For developers:
Wander gives your dApp wallet login and signing flows through Connect, Extension, Mobile App, and the Injected API.
```

### 5. Add a "do not share" warning in the product overview

Wallet-related documentation benefits from repeated plain-language safety warnings.

Suggested wording:

```text
Never share your private key or seed phrase. Wander integrations should request user approval through the wallet interface, not through direct key entry.
```

## Suggested Small README Patch

```text
## Start Here

Wander is a non-custodial Arweave and AO native wallet ecosystem.

For users:
Wander helps you manage assets and interact with dApps without sharing private keys with the dApp.

For developers:
Wander provides wallet onboarding and signing flows through Wander Connect, Browser Extension, Mobile App, and the Injected API.

Which product should you choose?

- Wander Connect: embedded onboarding, SSO, passkeys, and white-labeled wallet UX.
- Browser Extension: traditional browser wallet experience for experienced Web3 users.
- Mobile App: mobile-first wallet and AO dApp access.

Security note:
Never share your private key or seed phrase. Wallet actions should be approved through Wander, not by entering secrets into a dApp.
```

## Possible Follow-Up Task

If useful, this could become a small documentation proposal:

- Add a "Start Here" section
- Add a product decision guide
- Add a short private-key safety note
- Separate user and developer language in the opening section
