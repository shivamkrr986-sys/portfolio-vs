import React from 'react';
import { X, Check, Palette, Type, Sliders, Eye } from 'lucide-react';

export default function SettingsModal({
  isOpen,
  onClose,
  theme,
  onSelectTheme,
  fontSize,
  onChangeFontSize,
  showMinimap,
  onToggleMinimap,
  showLineNumbers,
  onToggleLineNumbers
}) {
  if (!isOpen) return null;

  const themes = [
    { id: 'dark+', label: 'Dark+ (default modern)' },
    { id: 'monokai', label: 'Monokai' },
    { id: 'dracula', label: 'Dracula' },
    { id: 'onedark', label: 'One Dark Pro' }
  ];

  const fontSizes = [
    { id: '12px', label: '12px (Compact)' },
    { id: '13.5px', label: '13.5px (Standard)' },
    { id: '15px', label: '15px (Large)' }
  ];

  return (
    <div className="palette-backdrop" onClick={onClose}>
      <div 
        className="palette-modal" 
        style={{ maxWidth: 500 }}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-label="Settings"
      >
        <div className="palette-input-box" style={{ justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontWeight: 600, color: 'var(--text-bright)' }}>
            <Sliders size={16} />
            <span>Settings & Preferences</span>
          </div>
          <button 
            onClick={onClose} 
            className="sidebar-action-btn"
            aria-label="Close Settings"
          >
            <X size={16} />
          </button>
        </div>

        <div style={{ padding: 18, display: 'flex', flexDirection: 'column', gap: 18, overflowY: 'auto' }}>
          {/* Theme Selector */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, fontWeight: 600, color: 'var(--text-bright)', marginBottom: 8 }}>
              <Palette size={14} color="var(--accent-light)" />
              <span>Color Theme</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
              {themes.map(t => (
                <button
                  key={t.id}
                  onClick={() => onSelectTheme(t.id)}
                  style={{
                    padding: '8px 12px',
                    borderRadius: 3,
                    border: '1px solid var(--border-color)',
                    background: theme === t.id ? 'var(--accent-blue)' : 'var(--bg-input)',
                    color: theme === t.id ? '#ffffff' : 'var(--text-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    fontSize: 12,
                    cursor: 'pointer'
                  }}
                >
                  <span>{t.label}</span>
                  {theme === t.id && <Check size={14} />}
                </button>
              ))}
            </div>
          </div>

          {/* Font Size */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, fontWeight: 600, color: 'var(--text-bright)', marginBottom: 8 }}>
              <Type size={14} color="var(--accent-light)" />
              <span>Editor Font Size</span>
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
              {fontSizes.map(f => (
                <button
                  key={f.id}
                  onClick={() => onChangeFontSize(f.id)}
                  style={{
                    flex: 1,
                    padding: '6px 10px',
                    borderRadius: 3,
                    border: '1px solid var(--border-color)',
                    background: fontSize === f.id ? 'var(--accent-blue)' : 'var(--bg-input)',
                    color: fontSize === f.id ? '#ffffff' : 'var(--text-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 12,
                    cursor: 'pointer'
                  }}
                >
                  <span>{f.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Toggles */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, fontWeight: 600, color: 'var(--text-bright)', marginBottom: 8 }}>
              <Eye size={14} color="var(--accent-light)" />
              <span>View Toggles</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <label style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: 12.5, color: 'var(--text-primary)', cursor: 'pointer' }}>
                <span>Show Editor Minimap</span>
                <input
                  type="checkbox"
                  checked={showMinimap}
                  onChange={onToggleMinimap}
                  style={{ accentColor: 'var(--accent-blue)', width: 16, height: 16 }}
                />
              </label>

              <label style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: 12.5, color: 'var(--text-primary)', cursor: 'pointer' }}>
                <span>Show Gutter Line Numbers</span>
                <input
                  type="checkbox"
                  checked={showLineNumbers}
                  onChange={onToggleLineNumbers}
                  style={{ accentColor: 'var(--accent-blue)', width: 16, height: 16 }}
                />
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
