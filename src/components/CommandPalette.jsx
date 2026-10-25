import React, { useState, useEffect, useRef } from 'react';
import { Search, FileCode, Terminal, Palette, Briefcase, Mail, Eye, Sparkles } from 'lucide-react';
import FileIcon from './FileIcon';

export default function CommandPalette({
  isOpen,
  onClose,
  files,
  onSelectFile,
  onToggleTerminal,
  onOpenSettings,
  onClearTerminal
}) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  const actions = [
    {
      id: 'action-projects',
      title: 'View Projects Gallery',
      type: 'action',
      icon: <Briefcase size={14} color="var(--accent-light)" />,
      badge: 'Action',
      run: () => onSelectFile(files.find(f => f.id === 'projects.js'))
    },
    {
      id: 'action-contact',
      title: 'Open Contact Information',
      type: 'action',
      icon: <Mail size={14} color="var(--accent-light)" />,
      badge: 'Action',
      run: () => onSelectFile(files.find(f => f.id === 'contact.js'))
    },
    {
      id: 'action-terminal',
      title: 'Toggle Integrated Terminal',
      type: 'action',
      icon: <Terminal size={14} color="var(--terminal-green)" />,
      badge: 'View',
      run: onToggleTerminal
    },
    {
      id: 'action-clear-term',
      title: 'Clear Terminal Screen',
      type: 'action',
      icon: <Sparkles size={14} color="var(--warning-orange)" />,
      badge: 'Terminal',
      run: onClearTerminal
    },
    {
      id: 'action-theme',
      title: 'Preferences: Change Color Theme',
      type: 'action',
      icon: <Palette size={14} color="var(--keyword-purple)" />,
      badge: 'Preferences',
      run: onOpenSettings
    }
  ];

  // Combine files + actions
  const fileItems = files.map(file => ({
    id: `file-${file.id}`,
    title: file.name,
    subtitle: file.path,
    type: 'file',
    icon: <FileIcon type={file.icon} size={14} />,
    badge: file.folder,
    run: () => onSelectFile(file)
  }));

  const allItems = [...fileItems, ...actions];

  const filteredItems = allItems.filter(item => {
    const q = query.toLowerCase();
    return (
      item.title.toLowerCase().includes(q) ||
      (item.subtitle && item.subtitle.toLowerCase().includes(q)) ||
      (item.badge && item.badge.toLowerCase().includes(q))
    );
  });

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => (prev + 1) % (filteredItems.length || 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => (prev - 1 + filteredItems.length) % (filteredItems.length || 1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filteredItems[selectedIndex]) {
        filteredItems[selectedIndex].run();
        onClose();
      }
    } else if (e.key === 'Escape') {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="palette-backdrop" onClick={onClose}>
      <div 
        className="palette-modal"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-label="Command Palette"
      >
        <div className="palette-input-box">
          <Search size={15} color="var(--accent-light)" />
          <input
            ref={inputRef}
            type="text"
            className="palette-input-field"
            placeholder="Type a file name or command to run..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            onKeyDown={handleKeyDown}
          />
        </div>

        <div className="palette-items-list" role="listbox">
          {filteredItems.map((item, idx) => {
            const isSelected = idx === selectedIndex;
            return (
              <div
                key={item.id}
                className={`palette-item ${isSelected ? 'selected' : ''}`}
                onClick={() => {
                  item.run();
                  onClose();
                }}
                onMouseEnter={() => setSelectedIndex(idx)}
                role="option"
                aria-selected={isSelected}
              >
                <div className="palette-item-left">
                  {item.icon}
                  <span style={{ fontWeight: 500 }}>{item.title}</span>
                  {item.subtitle && (
                    <span style={{ fontSize: 11, color: isSelected ? '#ffffff' : 'var(--text-secondary)' }}>
                      — {item.subtitle}
                    </span>
                  )}
                </div>
                <span className="palette-item-badge">
                  {item.badge}
                </span>
              </div>
            );
          })}

          {filteredItems.length === 0 && (
            <div style={{ padding: '16px', textAlign: 'center', color: 'var(--text-secondary)', fontSize: 12 }}>
              No matching files or commands found.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
