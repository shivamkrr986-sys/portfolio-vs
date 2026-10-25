import React from 'react';
import { Briefcase, CheckCircle2, Calendar, MapPin, GraduationCap, Sparkles } from 'lucide-react';
import { portfolioConfig } from '../../config/portfolio';

export default function ExperiencePreview() {
  const exp = portfolioConfig.experience[0];

  return (
    <div className="preview-container">
      <div className="preview-header">
        <div className="preview-tag">
          <Sparkles size={12} />
          <span>src/experience.js &gt; export const experience</span>
        </div>
        <h1 className="preview-title">Professional Work Experience</h1>
        <p className="preview-subtitle">
          Commercial development history, core duties, and application architecture.
        </p>
      </div>

      <div className="experience-timeline">
        <div className="timeline-card">
          <div className="timeline-meta">
            <div>
              <div className="timeline-role">{exp.role}</div>
              <div className="timeline-company">{exp.company} • {exp.location}</div>
            </div>
            <div className="timeline-badge">
              <Calendar size={13} style={{ display: 'inline', marginRight: 4 }} />
              {exp.duration}
            </div>
          </div>

          <p style={{ fontSize: 14, color: 'var(--text-primary)', lineHeight: 1.6 }}>
            {exp.overview}
          </p>

          <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12.5, color: 'var(--accent-light)', background: 'var(--bg-card-alt)', padding: '8px 12px', borderRadius: 3, border: '1px solid var(--border-subtle)' }}>
            <GraduationCap size={15} />
            <span>Academic Background: <strong>{exp.education}</strong></span>
          </div>

          <div>
            <div className="section-label" style={{ marginBottom: 10 }}>Primary Responsibilities</div>
            <ul className="responsibilities-list">
              {exp.responsibilities.map((resp, idx) => (
                <li key={idx} className="responsibility-item">
                  <CheckCircle2 size={16} className="resp-bullet" />
                  <span>{resp}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="section-label" style={{ marginBottom: 8 }}>Technologies & Tooling</div>
            <div className="tech-chips">
              {exp.technologies.map((tech, idx) => (
                <span key={idx} className="tech-chip">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
