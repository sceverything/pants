import { ArrowRight, BadgeDollarSign, Bell, Coins, ShieldCheck, ShoppingCart, Users, Wallet } from 'lucide-react';
import { stats, marketplaceItems, adminMetrics } from './data/mockData';

const navItems = ['Marketplace', 'Wallet', 'Orders', 'Admin'];

export default function App() {
  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="brand-wrap">
          <div className="brand-mark">TP</div>
          <div>
            <div className="brand-name">ToasterPants</div>
            <div className="eyebrow">Crypto marketplace</div>
          </div>
        </div>

        <nav className="nav">
          {navItems.map((item) => (
            <button key={item} className="nav-item">{item}</button>
          ))}
        </nav>

        <div className="header-actions">
          <button className="ghost-button">Sign in</button>
          <button className="primary-button">Launch app <ArrowRight size={16} /></button>
        </div>
      </header>

      <main className="page">
        <section className="hero panel">
          <div className="hero-copy">
            <div className="badge-row">
              <span className="badge alert">Live treasury</span>
              <span className="badge subtle">Secure custody</span>
            </div>
            <h1>Trade digital goods with crypto-native liquidity.</h1>
            <p>
              Manage vendors, settlement, custody, and marketplace operations from a single operational control plane built for modern crypto commerce.
            </p>
            <div className="cta-row">
              <button className="primary-button">Explore marketplace</button>
              <button className="ghost-button">Vendor dashboard</button>
            </div>
            <div className="mini-stats">
              {stats.map((stat) => (
                <div key={stat.label} className="mini-stat">
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-panel">
            <div className="panel-header">
              <span className="chip"><Wallet size={16} />wallet</span>
              <span className="status good">On-chain</span>
            </div>
            <div className="wallet-figure">$2.43M</div>
            <div className="wallet-lines">
              <div><span>Available</span><strong>$1.84M</strong></div>
              <div><span>Escrow</span><strong>$0.42M</strong></div>
              <div><span>Payouts</span><strong>$0.17M</strong></div>
            </div>
          </div>
        </section>

        <section className="triple-grid">
          <div className="panel stat-panel">
            <Coins size={18} />
            <h3>Crypto only</h3>
            <p>Blockchain-verified payments across supported assets and networks.</p>
          </div>
          <div className="panel stat-panel">
            <ShieldCheck size={18} />
            <h3>Security first</h3>
            <p>Role-aware access control, audit logging, and explicit signing boundaries.</p>
          </div>
          <div className="panel stat-panel">
            <ShoppingCart size={18} />
            <h3>Market ready</h3>
            <p>Product discovery, cart flows, orders, and vendor infrastructure in one app.</p>
          </div>
        </section>

        <section className="market-grid">
          <div className="section-header">
            <div>
              <div className="eyebrow">Marketplace</div>
              <h2>Featured inventory</h2>
            </div>
            <button className="ghost-button">View all</button>
          </div>

          <div className="product-grid">
            {marketplaceItems.map((item) => (
              <article key={item.id} className="product-card panel">
                <div className="product-art" aria-label={item.name} />
                <div className="product-meta">
                  <div className="product-name">{item.name}</div>
                  <div className="product-vendor">{item.vendor}</div>
                </div>
                <div className="product-row">
                  <div className="price">{item.price}</div>
                  <button className="tiny-button">Add</button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="two-col">
          <div className="panel admin-panel">
            <div className="section-header compact">
              <div>
                <div className="eyebrow">Operations</div>
                <h3>Admin overview</h3>
              </div>
              <Bell size={18} />
            </div>
            <div className="stack-list">
              {adminMetrics.map((item) => (
                <div key={item.label} className="metric-row">
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </div>
              ))}
            </div>
          </div>

          <div className="panel admin-panel">
            <div className="section-header compact">
              <div>
                <div className="eyebrow">Control plane</div>
                <h3>Operational status</h3>
              </div>
              <Users size={18} />
            </div>
            <div className="stack-list">
              <div className="metric-row"><span>Pending vendors</span><strong>14</strong></div>
              <div className="metric-row"><span>Security events</span><strong>6</strong></div>
              <div className="metric-row"><span>Escrow reserves</span><strong>0.73 ETH</strong></div>
              <div className="metric-row"><span>Withdrawals</span><strong>22</strong></div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
