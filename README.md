# ToasterPants

A modern, crypto-only, multi-vendor marketplace with comprehensive administrative control plane.

## Quick Start

### Prerequisites
- Python 3.11+
- Node.js 18+
- PostgreSQL 14+
- Redis 7+
- Docker & Docker Compose (recommended)

### Development Setup

```bash
# Clone the repository
git clone https://github.com/sceverything/pants.git
cd pants

# Backend setup
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser

# Frontend setup
cd ../frontend
npm install
npm run dev
```

### Docker Compose

```bash
docker-compose up -d
# Access at http://localhost:3000
```

## Project Structure

```
pants/
├── backend/               # Django application
│   ├── apps/
│   │   ├── accounts/     # Users, authentication
│   │   ├── marketplace/  # Products, vendors, orders
│   │   ├── payments/     # Crypto payments & ledger
│   │   ├── wallets/      # Wallet management
│   │   ├── admin/        # Super Admin control center
│   │   ├── cms/          # Content management
│   │   └── forum/        # Community forum
│   ├── config/           # Django settings
│   └── manage.py
├── frontend/              # React + Vite application
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── hooks/
│   │   └── styles/
│   └── package.json
├── docker-compose.yml
└── docs/                 # Documentation
```

## Documentation

- [Architecture](docs/ARCHITECTURE.md)
- [Security](docs/SECURITY.md)
- [Threat Model](docs/THREAT_MODEL.md)
- [Database Schema](docs/DATABASE.md)
- [Deployment](docs/DEPLOYMENT.md)
- [API Reference](docs/API.md)

## Features

### Marketplace
- Product catalog with variants and inventory
- Vendor storefronts and management
- Shopping cart and checkout
- Order management and tracking
- Reviews and ratings

### Payments
- Cryptocurrency-only payments (Bitcoin, Ethereum, etc.)
- Double-entry ledger system
- Escrow and dispute resolution
- Vendor withdrawals
- Financial audit logs

### Administration
- Super Admin control center
- User and vendor management
- Financial reporting
- Security event logging
- Audit trails

### Community
- Forum with categories and discussions
- CMS for static content
- Moderation tools
- User reports and restrictions

## Security

See [SECURITY.md](docs/SECURITY.md) for comprehensive security documentation.

### Key Principles
- Custodial wallet architecture with restricted signing authority
- Defense-in-depth security architecture
- Comprehensive audit logging
- Role-based access control (RBAC)
- Multi-tenancy support with tenant isolation
- No persistent "remember me" authentication

## License

[License TBD]

## Support

For issues and questions, please use the GitHub Issues tracker.
