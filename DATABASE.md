# Database Design

## Core persistence model

The platform is structured around explicit domain boundaries rather than a single monolith-only schema. Data stores are expected to include:

- accounts and user profiles
- marketplace products and metadata
- orders and fulfillment states
- wallet addresses and payment records
- ledger entries and account balances
- audit events and security logs
- domain and CMS records
- forum metadata

## Default local development baseline

The scaffold uses SQLite for local development convenience. Production use should migrate to PostgreSQL and include indexes, constraints, and transactional boundaries for high-value financial flows.

## Required financial invariants

- Ledger entries must remain reconciled
- Payment confirmation must be separated from internal crediting logic
- Duplicate or replayed payment events must be idempotent
- Inventory updates must be atomic
- Order-state transitions must be validated

## Migrations

The project includes migration-friendly model organization but not a verified live migration run in this session.
