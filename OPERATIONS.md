# Operations Guide

## Operational goals

- Keep the application, queue workers, and database services isolated and monitored
- Handle background processing and security events in a structured way
- Maintain secure configuration and audit trail integrity

## Monitoring

- Health checks
- App logs
- Security logs
- Payment and ledger audit logs
- Worker status

## Maintenance

- Migrate schema changes carefully
- Validate ledger reconciliation after upgrades
- Verify permission changes and admin steps under step-up checks

## Known limitation

Operational monitoring and deployment execution are not verified in this environment.
