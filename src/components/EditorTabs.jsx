import React from 'react';
import { X, Code2, Eye, Columns2, MoreHorizontal } from 'lucide-react';
import FileIcon from './FileIcon';

export default function EditorTabs({
  openTabs,
  activeTabId,
  onSelectTab,
  onCloseTab,
  viewMode,
  onChangeViewMode
}) {
  return (
    <div className="vscode-tabs-bar" role="tablist" aria-label="Editor Tabs">
      <div className="tabs-scrollable-list">
        {openTabs.map(file => {
          const isActive = file.id === activeTabId;
          return (
            <div
              key={file.id}
              className={`editor-tab ${isActive ? 'active' : ''}`}
              onClick={() => onSelectTab(file)}
              role="tab"
              aria-selected={isActive}
            >
              <FileIcon type={file.icon} size={14} />
              <span className="tab-title">{file.name}</span>
              <button
                className="tab-close-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  onCloseTab(file.id);
                }}
                title="Close Tab (Ctrl+W)"
                aria-label={`Close ${file.name}`}
              >
                <X size={12} />
              </button>
            </div>
          );
        })}
      </div>

      <div className="tabs-actions-bar">
        <button
          className={`tab-action-btn ${viewMode === 'code' ? 'active' : ''}`}
          onClick={() => onChangeViewMode('code')}
          title="Code View"
          aria-label="Code View"
        >
          <Code2 size={13} />
          <span style={{ fontSize: 10.5 }}>Code</span>
        </button>

        <button
          className={`tab-action-btn ${viewMode === 'preview' ? 'active' : ''}`}
          onClick={() => onChangeViewMode('preview')}
          title="Visual Preview"
          aria-label="Visual Preview"
        >
          <Eye size={13} />
          <span style={{ fontSize: 10.5 }}>Preview</span>
        </button>

        <button
          className={`tab-action-btn ${viewMode === 'split' ? 'active' : ''}`}
          onClick={() => onChangeViewMode('split')}
          title="Split View (Code & Preview Side-by-Side)"
          aria-label="Split View"
        >
          <Columns2 size={13} />
          <span style={{ fontSize: 10.5 }}>Split</span>
        </button>
      </div>
    </div>
  );
}
