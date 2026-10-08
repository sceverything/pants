# Authorization Model

## Backend authority

All sensitive operations must be authorized on the backend. The frontend should enforce usability and visibility, not security.

## Roles

- Buyer
- Vendor
- Moderator
- Administrator
- Super Admin

## Controls

- Django permissions and Guardian-style object permission patterns are the baseline
- Ownership and tenant checks remain mandatory
- Sensitive operations require step-up verification and explicit approval
- Privilege changes invalidate stale sessions or tokens where applicable

## Risk note

The repository contains the role and permission scaffolding but has not been executed in a live authorization test environment.
