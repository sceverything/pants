# Threat Model

## Scope

This threat model addresses the core ToasterPants product areas: marketplace authorization, crypto payments, wallet custody, audit logs, CMS, forum, and admin control plane.

## Threats considered

1. Account takeover
2. Privilege escalation
3. IDOR / BOLA
4. CSRF and session hijacking
5. XSS in user-generated content
6. SQL injection and insecure database access
7. SSRF via external integrations
8. Supply-chain and package compromise
9. Tenant escape and cross-domain access
10. Wallet compromise and signing abuse
11. Replay and duplicate payment processing
12. Ledger imbalance or unauthorized financial mutation
13. DNS and domain takeover abuse
14. Abuse of CMS or forum privileges
15. Brute-force and bot abuse

## Mitigations

- Django built-in protections and server-side validation
- Explicit role and object permission checks
- Payment state machine with ledger separation
- Wallet-service boundaries and mock/testnet signing isolation
- Audit logging for privileged actions
- Rate limiting and security event logging
- Domain ownership and permission checks documented

## Residual risk

The repository currently contains the design and scaffolding for these mitigations, but the confidence in the actual security posture remains limited by the lack of live runtime verification and security scanning in this environment.
