# Deployment Documentation

## Target deployment model

ToasterPants is architected for a modular deployment model with:

- PostgreSQL for persistent business data
- Redis for caching, rate limiting, and queue coordination
- ASGI-based Django service
- Frontend Vite build served behind a reverse proxy or static integration
- Container orchestration compatibility through Docker Compose

## Deployment requirements

- Python runtime
- Node.js runtime
- PostgreSQL service
- Redis service
- Environment variables loaded securely from a secret manager or .env file

## Required external services

- Blockchain data provider for verification when live payment detection is enabled
- Email provider for notification delivery
- Domain and DNS configuration for marketplace/site-level domains
- Optional WAF or Cloudflare security layer as deployment permits

## Production caveat

The project includes deployment architecture and configuration guidance, but no live deployment or runtime verification has been performed. Production readiness remains unverified.
