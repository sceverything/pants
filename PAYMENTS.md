# Payments Architecture

## Overview

ToasterPants implements a crypto-only payment architecture centered on payment intents, network confirmations, wallet ops, ledger entries, escrow, and withdrawal flows.

## Design

- Payment requests are not treated as fully settled on client input alone
- Blockchain observations are maintained separately from internal accounting
- Ledger entries are reconciled against payment events
- Escrow and payouts use explicit settlement logic

## Payment states

- Requested
- Awaiting confirmation
- Confirmed
- Underpaid
- Overpaid
- Expired
- Refunded
- Settled
- Failed

## Important dependency

Actual blockchain verification requires a trusted provider, network API, or wallet service. This project contains the model and architecture, but no live payment verification environment has been exercised here.
