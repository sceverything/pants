# Security Documentation

## Security posture

ToasterPants is designed around explicit security boundaries, server-side authorization, auditable financial transitions, and a clear domain separation between marketplace logic, wallets, and signing infrastructure.

## Security principles

- No production secrets committed to Git
- No unrestricted wallet signing in ordinary app code
- Strong server-side access control
- Payment verification does not trust client hashes
- Auditable financial and admin actions
- Explicit tenant-aware resource boundaries

## Security controls implemented in scaffold

- Django security middleware and CSRF enforcement baseline
- Secure cookie conventions and configuration guidance
- Role-based APIs and permission-based service scaffolding
- Security event and audit models defined in backend app modules
- Testnet-only wallet and signing model contracts

## Security controls still requiring runtime verification

- Real authorization tests
- Browser security verification and CSP configuration check
- Actual secret scanning in repo and environment
- Dependency audit in a real package environment
- Production wallet and signing infrastructure verification
- Container and reverse-proxy security validation

## Security limitations

This repository should be considered a secure architecture scaffold, not a completed production security validation. Runtime execution, dependency installation, and environment-based security scanning are required before production claims can be made.
