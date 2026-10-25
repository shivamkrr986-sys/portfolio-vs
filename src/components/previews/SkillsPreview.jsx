import React from 'react';
import { Code, Film, Wrench, Server, Sparkles } from 'lucide-react';
import { portfolioConfig } from '../../config/portfolio';

export default function SkillsPreview() {
  const { skills } = portfolioConfig;

  const categories = [
    {
      title: "Frontend Development",
      icon: <Code size={16} color="var(--accent-light)" />,
      items: skills.Frontend
    },
    {
      title: "Animation & Interactive UI",
      icon: <Film size={16} color="#d946ef" />,
      items: skills.animationAndUI
    },
    {
      title: "Tools & Marketing Integrations",
      icon: <Wrench size={16} color="#34d399" />,
      items: skills.toolsAndIntegrations
    },
    {
      title: "Backend Exposure",
      icon: <Server size={16} color="#f59e0b" />,
      items: skills.backendExposure
    }
  ];

  return (
    <div className="preview-container">
      <div className="preview-header">
        <div className="preview-tag">
          <Sparkles size={12} />
          <span>src/skills.js &gt; export const skills</span>
        </div>
        <h1 className="preview-title">Technical Skills & Technologies</h1>
        <p className="preview-subtitle">
          Core toolset utilized in production Frontend development, interactive animation, and marketing telemetry.
        </p>
      </div>

      <div className="skills-categories-grid">
        {categories.map((category, idx) => (
          <div key={idx} className="skill-category-card">
            <div className="category-card-header">
              {category.icon}
              <span>{category.title}</span>
              <span style={{ marginLeft: 'auto', fontSize: 11, color: 'var(--text-muted)' }}>
                {category.items.length} skills
              </span>
            </div>

            <div className="skill-item-list">
              {category.items.map((skill, sIdx) => (
                <div key={sIdx} className="skill-row">
                  <div className="skill-name">{skill.name}</div>
                  <div className="skill-desc">{skill.level}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
