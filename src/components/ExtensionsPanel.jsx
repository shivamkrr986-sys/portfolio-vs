import React, { useState } from 'react';
import { Search, Star, CheckCircle, Sparkles } from 'lucide-react';

export default function ExtensionsPanel() {
  const [query, setQuery] = useState('');

  const extensions = [
    {
      id: "react",
      name: "React 19 & React Router",
      publisher: "Meta / Frontend",
      description: "Declarative component architecture, custom hooks, and modern Frontend routing patterns.",
      downloads: "18.2M",
      rating: "5.0",
      version: "v19.3.1"
    },
    {
      id: "gsap",
      name: "GSAP & ScrollTrigger",
      publisher: "GreenSock",
      description: "High-performance JavaScript animation engine, timeline sequences, and scroll-linked reveals.",
      downloads: "12.4M",
      rating: "5.0",
      version: "v3.15.0"
    },
    {
      id: "vite",
      name: "Vite Bundler",
      publisher: "Evan You",
      description: "Next-generation Frontend tooling with instant HMR and optimized production bundles.",
      downloads: "9.8M",
      rating: "4.9",
      version: "v8.3.4"
    },
    {
      id: "lucide",
      name: "Lucide React Icons",
      publisher: "Lucide Org",
      description: "Crisp, pixel-perfect icon suite modeled after genuine VS Code design iconography.",
      downloads: "4.5M",
      rating: "4.9",
      version: "v1.61.0"
    },
    {
      id: "css-vars",
      name: "Vanilla CSS & Responsive Engine",
      publisher: "W3C Standards",
      description: "Tailored dark-theme design tokens, CSS Grid, Flexbox, and mobile-first layouts.",
      downloads: "25M",
      rating: "5.0",
      version: "v3.0"
    },
    {
      id: "gtm-marketing",
      name: "GTM & UTM Analytics Tracking",
      publisher: "Webzaa Integrations",
      description: "Google Tag Manager event triggers, lead form hooks, and conversion telemetry.",
      downloads: "2.1M",
      rating: "4.8",
      version: "v2.4"
    }
  ];

  const filtered = extensions.filter(e =>
    e.name.toLowerCase().includes(query.toLowerCase()) ||
    e.description.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="extensions-panel">
      <div className="search-input-wrapper">
        <Search size={14} className="search-input-icon" />
        <input
          type="text"
          className="search-input-field"
          placeholder="Search extensions in Marketplace..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: 0.5, marginTop: 4 }}>
        Installed ({filtered.length})
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {filtered.map(ext => (
          <div key={ext.id} className="extension-card">
            <div className="ext-icon">
              <Sparkles size={18} />
            </div>
            <div className="ext-info">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span className="ext-title">{ext.name}</span>
                <span className="ext-badge-installed" title="Installed and Active">
                  <CheckCircle size={13} />
                </span>
              </div>
              <div className="ext-desc">{ext.description}</div>
              <div className="ext-footer">
                <span>{ext.publisher}</span>
                <span>•</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Star size={10} fill="#ffd700" color="#ffd700" /> {ext.rating}
                </span>
                <span>•</span>
                <span>{ext.version}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
