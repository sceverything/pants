# Wallets and Custody

## Wallet model

The project separates marketplace logic from wallet and signing boundaries. This is required for custody-safe design and future production deployment.

## Design principles

- Ordinary app code must not hold unrestricted signing authority
- Wallet operations use a dedicated service boundary
- Production signing should rely on HSM/MPC/KMS or equivalent controls
- Testnet or mock signing is used for isolated testing only

## Known limitation

No production custody environment or secure signing infrastructure has been verified in this session.
