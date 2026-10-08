# Disaster Recovery

## Recovery principles

- Back up PostgreSQL data and configuration state
- Maintain environment variable and secret backups in a secure managed system
- Preserve application and static asset artifacts
- Keep immutable audit logs for administration and financial operations

## Recovery workflow

1. Restore the application environment and dependencies
2. Restore PostgreSQL data
3. Restore Redis and worker state where applicable
4. Reapply config and secret values from the secure secret store
5. Run migrations and health checks
6. Validate marketplace, wallet, and admin flows

## Limitations

No live restores or recovery testing were performed in this environment.
