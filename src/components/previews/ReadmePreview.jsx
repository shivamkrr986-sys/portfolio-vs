import React from 'react';
import { BookOpen, Sparkles, CheckCircle2 } from 'lucide-react';
import { portfolioConfig } from '../../config/portfolio';

export default function ReadmePreview({ onNavigateFile }) {
  const { developer } = portfolioConfig;

  return (
    <div className="preview-container">
      <div className="preview-header">
        <div className="preview-tag">
          <BookOpen size={12} />
          <span>README.md &gt; Preview</span>
        </div>
        <h1 className="preview-title">{developer.name} — Portfolio Documentation</h1>
        <p className="preview-subtitle">
          Interactive developer portfolio environment built with React, Vite, and GSAP.
        </p>
      </div>

      <div className="readme-doc">
        <h1>{developer.name} — Frontend Developer</h1>
        <blockquote>
          Welcome to my interactive workspace portfolio. Explore my background, production projects, and Frontend capabilities directly through this simulated VS Code IDE.
        </blockquote>

        <h2>Quick Facts</h2>
        <ul>
          <li><strong>Role:</strong> {developer.role}</li>
          <li><strong>Current Company:</strong> {developer.company} ({developer.experience})</li>
          <li><strong>Education:</strong> {developer.education}</li>
          <li><strong>Location:</strong> {developer.location}</li>
        </ul>

        <h2>Workspace Navigation Guide</h2>
        <ul>
          <li><strong>Explorer Sidebar:</strong> Click any file in the left explorer to view its code or rendered preview.</li>
          <li><strong>Code / Preview Toggle:</strong> Use the top right editor toggle to switch between raw syntax-highlighted code and rendered visual panels.</li>
          <li><strong>Command Palette:</strong> Press <code>Ctrl+P</code> or <code>Ctrl+Shift+P</code> to quickly jump to any file or trigger IDE actions.</li>
          <li><strong>Integrated Terminal:</strong> Open the bottom terminal and type <code>help</code>, <code>skills</code>, <code>projects</code>, or <code>about</code>.</li>
        </ul>

        <h2>Configuring Your Information</h2>
        <p>
          All profile metadata, verified projects, and external channels are centrally managed in <code>src/config/portfolio.js</code>.
        </p>
      </div>
    </div>
  );
}
