import React from 'react';
import { Briefcase, ArrowRight, Mail, Sparkles, MapPin, GraduationCap } from 'lucide-react';
import { portfolioConfig } from '../../config/portfolio';

export default function AboutPreview({ onNavigateFile }) {
  const { developer } = portfolioConfig;

  return (
    <div className="preview-container">
      <div className="preview-header">
        <div className="preview-tag">
          <Sparkles size={12} />
          <span>src/about.js &gt; developer</span>
        </div>
        <h1 className="preview-title">{developer.name}</h1>
        <p className="preview-subtitle">{developer.role} @ {developer.company}</p>
      </div>

      <div className="about-hero-card">
        <p className="about-intro-text">
          {developer.bio}
        </p>

        {/* Stats Grid */}
        <div className="about-stats-grid">
          {developer.summaryStats.map((stat, idx) => (
            <div key={idx} className="stat-item">
              <div className="stat-label">{stat.label}</div>
              <div className="stat-val">{stat.value}</div>
            </div>
          ))}
        </div>

        {/* Focus Areas */}
        <div className="about-focus-section">
          <div className="section-label">Core Specializations</div>
          <div className="focus-tags">
            {developer.focus.map((item, idx) => (
              <div key={idx} className="focus-pill">
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent-light)' }} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation CTAs */}
        <div className="about-cta-row">
          <button
            className="btn-primary"
            onClick={() => onNavigateFile('projects.js')}
          >
            <Briefcase size={15} />
            <span>View Projects</span>
            <ArrowRight size={14} />
          </button>

          <button
            className="btn-secondary"
            onClick={() => onNavigateFile('contact.js')}
          >
            <Mail size={15} />
            <span>Contact Me</span>
          </button>
        </div>
      </div>
    </div>
  );
}
