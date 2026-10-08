# ToasterPants

ToasterPants is a crypto-only multi-vendor marketplace with marketplace, wallet, ledger, escrow, CMS, forum, and administrative control-plane capabilities.

## Project status

This repository currently contains the implementation scaffold and code documentation for the ToasterPants product architecture. The project was initialized in a GitHub-backed repository context, and the codebase created here reflects a production-oriented application skeleton with modular backend domains and a Vite-based frontend.

## Architecture overview

- Backend: Python + Django + Django REST Framework
- Frontend: React + TypeScript + Vite + Tailwind-compatible design tokens
- Persistence: PostgreSQL-ready data models and migration-friendly domain objects
- Runtime services: Redis-ready background processing and ASGI support
- Financial engine: ledger, escrow, payments, wallet, and withdrawal abstractions
- Security model: RBAC, auditable actions, wallet signing boundaries, and tenant-aware design

## Repository layout

```text
backend/
  toasterpants/
  apps/
  requirements.txt
  manage.py
frontend/
  package.json
  src/
  vite.config.ts
```

## Quick start

```bash
cd backend
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver 0.0.0.0:8000
```

```bash
cd frontend
npm install
npm run dev
```

## Core features included in this scaffold

- Buyer, vendor, admin, and super-admin role framework
- Product catalog, order, review, cart, and marketplace domain stubs
- Wallet and ledger domain services
- Escrow and withdrawal flows
- Security event and audit abstractions
- CMS and forum application modules
- Visual dark purple fintech design system and marketplace UI component shell

## Important limitation

This environment does not provide a live local runtime or package installation for the app, so backend execution, build verification, and UI rendering could not be validated here. The project therefore reflects a production-oriented implementation scaffold with documented constraints and unverified runtime behavior.

## Documentation

- ARCHITECTURE.md
- SECURITY.md
- THREAT_MODEL.md
- DEPLOYMENT.md
- DATABASE.md
- AUTHORIZATION.md
- PAYMENTS.md
- WALLETS.md
- DISASTER_RECOVERY.md
- OPERATIONS.md
- TESTING.md
- DEPENDENCIES.md
