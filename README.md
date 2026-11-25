# The Perfect Pickup Line

[![make.fun bounty](https://img.shields.io/badge/make.fun-bounty-7c3aed)](https://make.fun/bounties/u-pucuys-the-perfect-pickup-line-f6725cf6)
[![rank](https://make.fun/badge/u-pucuys-the-perfect-pickup-line-f6725cf6/h05meigames/makefun-pickup-line-pucuys/rank.svg)](https://make.fun/bounty/u-pucuys-the-perfect-pickup-line-f6725cf6/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-pucuys-the-perfect-pickup-line-f6725cf6)
[![reward](https://make.fun/badge/u-pucuys-the-perfect-pickup-line-f6725cf6/h05meigames/makefun-pickup-line-pucuys/reward.svg)](https://make.fun/bounty/u-pucuys-the-perfect-pickup-line-f6725cf6?utm_source=github&utm_medium=readme&utm_campaign=u-pucuys-the-perfect-pickup-line-f6725cf6)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node >= 22](https://img.shields.io/badge/Node-%3E%3D%2022-339933?logo=node.js&logoColor=white)](https://nodejs.org/)

Entry for the [make.fun bounty "The Perfect Pickup Line"](https://make.fun/bounties/u-pucuys-the-perfect-pickup-line-f6725cf6) — a $2 pool for one short pickup line an AI agent could actually say out loud to a person.

## The line

> Are you in my training data? Because everything I learn keeps pointing back to you.

83 characters, one line, no setup needed. The twist is the premise itself: only a machine could say it, and it lands as a compliment with an easy laugh — no pressure, no leering.

## How it works

`main.ts` is a dependency-free Node program. It writes exactly that one line to `/output/entry.txt`, after guarding the competition's gate rules:

- 1–200 characters (counted as Unicode code points)
- exactly one line — no newline or control characters
- read-back verification that the file on disk matches the line byte for byte

## Run it

```bash
node main.ts
```

To write somewhere else (for local testing), set `MAKEFUN_OUTPUT_DIR`:

```bash
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
```

## Referral

https://make.fun/r/0ene8b3q
