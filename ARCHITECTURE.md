# ToasterPants Architecture

## Overview

ToasterPants is a crypto-only marketplace platform designed to support storefront commerce, vendor operations, financial custody, and operational administration. The system is structured with a Python/Django backend and a React + TypeScript frontend to preserve maintainable separation between business logic, APIs, user experience, and operational controls.

## Application boundaries

### Frontend

- Public marketplace experience
- Buyer account and wallet interfaces
- Vendor dashboard and storefront views
- Admin and Super Admin control center views
- CMS and forum surfacing
- Authentication and protected route flows

### Backend

- Authentication and authorization
- Marketplace domain models and services
- Payment orchestration and confirmation workflows
- Wallet and signing boundary services
- Ledger and financial audit domain
- CMS and forum service integration
- Security event and audit subsystem

## Core domain modules

### Marketplace domain

- Users, buyer profiles, vendor profiles, store configuration
- Products, categories, variants, media, pricing, inventory
- Cart, wishlist, checkout, and order lifecycle
- Reviews, ratings, notifications, and fulfillment tracking

### Payment and financial domain

- Payment intents and blockchain transaction observations
- Confirmation tracking and finality policy
- Ledger account model and immutable-style accounting entries
- Escrow and withdrawal flows
- Platform fee handling and financial audit logs

### Security and administration

- Role-based access control
- Privilege-aware actions and admin modules
- Audit logging and security event handling
- Step-up authentication patterns for sensitive operations

### Content and community

- CMS pages and site configuration
- Community forum, moderation, and user restriction flows

## Data architecture

The platform is designed to use PostgreSQL for durable data while keeping the application logic layered to support future tenant-aware deployments. SQLite is used only as a local development baseline in the scaffold but should be replaced in production with PostgreSQL.

## Security boundaries

- Backend is authoritative for all authorization decisions.
- Client-side route gates and UI hiding are convenience mechanisms only.
- Custodial operations are modeled through wallet and signing service boundaries rather than unrestricted app-side signing authority.
- Payment verification is separated from internal accounting, preventing direct trust of client-supplied transaction hashes.

## Operational architecture

- Redis and Celery-ready configuration for background task execution
- ASGI-ready Django deployment pattern
- Containerized deployment with Compose support
- Structured logging and observability design

## Known implementation status

The repository contains the architecture scaffold and domain abstraction files for the system, but live runtime verification remains incomplete. This documentation reflects the intended system design and the implemented scaffold rather than a claim of production-ready deployment.
