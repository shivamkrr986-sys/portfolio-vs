import React from 'react';
import { Award, GraduationCap, Briefcase, Globe, Sparkles } from 'lucide-react';
import { portfolioConfig } from '../../config/portfolio';

export default function AchievementsPreview() {
  const getIcon = (id) => {
    switch (id) {
      case 'bca-2024': return <GraduationCap size={20} />;
      case 'webzaa-dev': return <Briefcase size={20} />;
      case 'client-portals': return <Globe size={20} />;
      default: return <Award size={20} />;
    }
  };

  return (
    <div className="preview-container">
      <div className="preview-header">
        <div className="preview-tag">
          <Sparkles size={12} />
          <span>src/achievements.json &gt; verifiedMilestones</span>
        </div>
        <h1 className="preview-title">Verified Professional Milestones</h1>
        <p className="preview-subtitle">
          Academic qualification, employment milestones, and practical software engineering accomplishments.
        </p>
      </div>

      <div className="achievements-grid">
        {portfolioConfig.achievements.map((item) => (
          <div key={item.id} className="achievement-card">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div className="achievement-icon-wrap">
                {getIcon(item.id)}
              </div>
              <span style={{ fontSize: 11, fontFamily: 'var(--font-code)', color: 'var(--accent-light)', background: 'rgba(0, 122, 204, 0.1)', padding: '2px 8px', borderRadius: 3 }}>
                {item.year}
              </span>
            </div>

            <div>
              <div className="achievement-title">{item.title}</div>
              <div className="achievement-org">{item.organization}</div>
            </div>

            <p className="achievement-desc">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
