import React, { useState } from 'react';
import { GitBranch, RefreshCw, XCircle, AlertTriangle, Bell, Check, Radio } from 'lucide-react';

export default function StatusBar({
  activeFile,
  onOpenSettings,
  onToggleTerminal
}) {
  const [showNotificationToast, setShowNotificationToast] = useState(false);

  const getLanguageName = (file) => {
    if (!file) return 'Plain Text';
    switch (file.language) {
      case 'javascript': return 'JavaScript (ES6+)';
      case 'json': return 'JSON with Comments';
      case 'markdown': return 'Markdown';
      case 'xml': return 'XML / SVG';
      default: return 'JavaScript';
    }
  };

  return (
    <footer className="vscode-statusbar" role="contentinfo" aria-label="Status Bar">
      <div className="statusbar-left">
        <div
          className="statusbar-item"
          style={{ background: 'rgba(0, 0, 0, 0.2)' }}
          title="Git Branch main (Synced)"
        >
          <GitBranch size={13} />
          <span>main*</span>
          <RefreshCw size={11} style={{ marginLeft: 3 }} />
        </div>

        <div className="statusbar-item" onClick={onToggleTerminal} title="0 Errors, 0 Warnings">
          <XCircle size={13} />
          <span>0</span>
          <AlertTriangle size={13} style={{ marginLeft: 4 }} />
          <span>0</span>
        </div>

        <div className="statusbar-item statusbar-hide-mobile" title="Live Server Port: 5173">
          <Radio size={12} color="#4ec9b0" />
          <span>Port: 5173</span>
        </div>
      </div>

      <div className="statusbar-right">
        <div className="statusbar-item statusbar-hide-mobile">
          <span>Ln 1, Col 1</span>
        </div>

        <div className="statusbar-item statusbar-hide-mobile">
          <span>Spaces: 2</span>
        </div>

        <div className="statusbar-item statusbar-hide-mobile">
          <span>UTF-8</span>
        </div>

        <div className="statusbar-item" onClick={onOpenSettings} title="Select Language Mode">
          <span>{getLanguageName(activeFile)}</span>
        </div>

        <div className="statusbar-item statusbar-hide-mobile" title="Code Formatter: Prettier">
          <Check size={12} color="#ffffff" />
          <span>Prettier</span>
        </div>

        <div
          className="statusbar-item"
          onClick={() => setShowNotificationToast(!showNotificationToast)}
          title="Notifications"
          style={{ position: 'relative' }}
        >
          <Bell size={13} />

          {showNotificationToast && (
            <div
              style={{
                position: 'absolute',
                bottom: '100%',
                right: 0,
                marginBottom: 6,
                background: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                borderRadius: 4,
                padding: '10px 14px',
                width: 270,
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.6)',
                zIndex: 60,
                color: 'var(--text-primary)',
                fontSize: 12
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <div style={{ fontWeight: 600, color: 'var(--text-bright)', marginBottom: 4 }}>
                Shivam Kumar — Portfolio
              </div>
              <div style={{ color: 'var(--text-secondary)', fontSize: 11.5, lineHeight: 1.4 }}>
                Ready to explore. Click any file or run <code>help</code> in the terminal!
              </div>
            </div>
          )}
        </div>
      </div>
    </footer>
  );
}
