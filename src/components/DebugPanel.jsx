import React, { useState } from 'react';
import { Play, RotateCw, Pause, Square } from 'lucide-react';
import { portfolioConfig } from '../config/portfolio';

export default function DebugPanel() {
  const [isRunning, setIsRunning] = useState(false);

  return (
    <div className="debug-panel">
      <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
        <button
          className="debug-start-btn"
          style={{ flex: 1 }}
          onClick={() => setIsRunning(!isRunning)}
        >
          {isRunning ? <Pause size={14} /> : <Play size={14} fill="#fff" />}
          <span>{isRunning ? "Pause Session" : "Launch Portfolio (Chrome)"}</span>
        </button>
      </div>

      {isRunning && (
        <div style={{ background: 'rgba(0, 122, 204, 0.15)', border: '1px solid var(--accent-blue)', padding: 8, borderRadius: 3, fontSize: 11 }}>
          <span style={{ color: 'var(--terminal-green)', fontWeight: 600 }}>● Debugger attached</span> to localhost:5173
        </div>
      )}

      {/* Variables View */}
      <div className="debug-section">
        <div className="debug-section-title">Variables (Local Scope)</div>
        <div className="debug-row">
          <span style={{ color: 'var(--variable-light-blue)' }}>developer:</span>
          <span style={{ color: 'var(--string-orange)' }}>"{portfolioConfig.developer.name}"</span>
        </div>
        <div className="debug-row">
          <span style={{ color: 'var(--variable-light-blue)' }}>role:</span>
          <span style={{ color: 'var(--string-orange)' }}>"{portfolioConfig.developer.role}"</span>
        </div>
        <div className="debug-row">
          <span style={{ color: 'var(--variable-light-blue)' }}>company:</span>
          <span style={{ color: 'var(--string-orange)' }}>"{portfolioConfig.developer.company}"</span>
        </div>
        <div className="debug-row">
          <span style={{ color: 'var(--variable-light-blue)' }}>experience:</span>
          <span style={{ color: 'var(--string-orange)' }}>"{portfolioConfig.developer.experience}"</span>
        </div>
        <div className="debug-row">
          <span style={{ color: 'var(--variable-light-blue)' }}>projectsCount:</span>
          <span style={{ color: '#b5cea8' }}>{portfolioConfig.projects.length}</span>
        </div>
      </div>

      {/* Watch Expressions */}
      <div className="debug-section">
        <div className="debug-section-title">Watch</div>
        <div className="debug-row">
          <span style={{ color: 'var(--text-primary)' }}>isAvailable:</span>
          <span style={{ color: 'var(--terminal-green)' }}>true</span>
        </div>
        <div className="debug-row">
          <span style={{ color: 'var(--text-primary)' }}>performanceScore:</span>
          <span style={{ color: '#b5cea8' }}>100</span>
        </div>
      </div>

      {/* Call Stack */}
      <div className="debug-section">
        <div className="debug-section-title">Call Stack</div>
        <div className="debug-row" style={{ color: 'var(--text-secondary)' }}>
          <span>portfolioWorkspace()</span>
          <span>App.jsx:24</span>
        </div>
        <div className="debug-row" style={{ color: 'var(--text-muted)' }}>
          <span>initGSAPEngine()</span>
          <span>main.jsx:12</span>
        </div>
      </div>
    </div>
  );
}
