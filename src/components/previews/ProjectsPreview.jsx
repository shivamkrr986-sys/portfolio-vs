import React, { useState, useMemo } from 'react';
import { Search, Sparkles, ExternalLink, Code2, Layers, CheckCircle, Info, X } from 'lucide-react';
import { portfolioConfig } from '../../config/portfolio';

export default function ProjectsPreview() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'Featured', 'Luxury Residential', 'Real Estate Portal'];

  const filteredProjects = useMemo(() => {
    return portfolioConfig.projects.filter(project => {
      const matchesCategory = 
        selectedCategory === 'All' ? true :
        selectedCategory === 'Featured' ? project.featured :
        project.category.toLowerCase().includes(selectedCategory.toLowerCase());

      const matchesSearch = 
        project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.technologies.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="preview-container">
      <div className="preview-header">
        <div className="preview-tag">
          <Sparkles size={12} />
          <span>src/projects.js &gt; export const projects ({portfolioConfig.projects.length})</span>
        </div>
        <h1 className="preview-title">Development Projects Explorer</h1>
        <p className="preview-subtitle">
          Commercial web projects and client portals developed with high-performance animations, responsive frameworks, and campaign tracking.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="projects-controls-bar">
        <div className="category-filter-chips">
          {categories.map(cat => (
            <button
              key={cat}
              className={`filter-chip ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="project-search-box">
          <Search size={14} color="var(--text-muted)" />
          <input
            type="text"
            placeholder="Filter projects or tech..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Projects Grid */}
      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-card-header">
              <div>
                <h3 className="project-name">{project.name}</h3>
                <div style={{ display: 'flex', gap: 6, marginTop: 4 }}>
                  <span className="project-category-badge">{project.category}</span>
                  {project.featured && (
                    <span style={{ fontSize: 10, background: 'rgba(234, 179, 8, 0.15)', color: '#facc15', padding: '2px 5px', borderRadius: 2, fontWeight: 600 }}>
                      FEATURED
                    </span>
                  )}
                </div>
              </div>
            </div>

            <p className="project-desc">{project.shortDescription}</p>

            <div className="project-card-footer">
              <div className="project-tech-tags">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="project-tech-tag">
                    {tech}
                  </span>
                ))}
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 4 }}>
                <button
                  className="btn-secondary"
                  style={{ padding: '4px 8px', fontSize: 11 }}
                  onClick={() => setSelectedProject(project)}
                >
                  <Info size={12} />
                  <span>Inspect Specs</span>
                </button>

                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                    style={{ padding: '4px 8px', fontSize: 11 }}
                  >
                    <span>Visit Live</span>
                    <ExternalLink size={11} />
                  </a>
                ) : (
                  <span style={{ fontSize: 10.5, color: 'var(--text-muted)', fontStyle: 'italic' }}>
                    Configurable link
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div style={{ textAlign: 'center', padding: '40px 20px', color: 'var(--text-secondary)' }}>
          No projects matching your search filter.
        </div>
      )}

      {/* Project Specs Inspection Modal */}
      {selectedProject && (
        <div className="palette-backdrop" onClick={() => setSelectedProject(null)}>
          <div 
            className="palette-modal"
            style={{ maxWidth: 520 }}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-label="Project Details"
          >
            <div className="palette-input-box" style={{ justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontWeight: 600, color: 'var(--text-bright)' }}>
                <Layers size={16} color="var(--accent-light)" />
                <span>{selectedProject.name} — Architecture Specs</span>
              </div>
              <button onClick={() => setSelectedProject(null)} className="sidebar-action-btn">
                <X size={16} />
              </button>
            </div>

            <div style={{ padding: 20, display: 'flex', flexDirection: 'column', gap: 14 }}>
              <div>
                <span className="project-category-badge">{selectedProject.category}</span>
                <p style={{ marginTop: 8, fontSize: 13.5, color: 'var(--text-primary)', lineHeight: 1.6 }}>
                  {selectedProject.shortDescription}
                </p>
              </div>

              <div style={{ background: 'var(--bg-card-alt)', border: '1px solid var(--border-subtle)', padding: 12, borderRadius: 3, display: 'flex', flexDirection: 'column', gap: 8 }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--text-secondary)', textTransform: 'uppercase' }}>
                  Engineering Highlights
                </div>
                {selectedProject.stats && (
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, fontSize: 12 }}>
                    <div>
                      <span style={{ color: 'var(--text-muted)' }}>Responsiveness: </span>
                      <span style={{ color: 'var(--text-bright)' }}>{selectedProject.stats.responsive}</span>
                    </div>
                    <div>
                      <span style={{ color: 'var(--text-muted)' }}>Motion Layer: </span>
                      <span style={{ color: 'var(--text-bright)' }}>{selectedProject.stats.animations}</span>
                    </div>
                    <div>
                      <span style={{ color: 'var(--text-muted)' }}>Integration: </span>
                      <span style={{ color: 'var(--text-bright)' }}>{selectedProject.stats.tracking}</span>
                    </div>
                  </div>
                )}
              </div>

              <div>
                <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--text-secondary)', textTransform: 'uppercase', marginBottom: 6 }}>
                  Technology Stack
                </div>
                <div className="project-tech-tags">
                  {selectedProject.technologies.map((t, idx) => (
                    <span key={idx} className="project-tech-tag" style={{ fontSize: 11, padding: '3px 8px' }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div style={{ fontSize: 11, color: 'var(--text-muted)', borderTop: '1px solid var(--border-subtle)', paddingTop: 10 }}>
                Live URLs and repository links are centralized in <code>src/config/portfolio.js</code> for instant customization.
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
