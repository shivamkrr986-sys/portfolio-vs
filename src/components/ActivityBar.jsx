import React from 'react';
import { Files, Search, GitBranch, Bug, Blocks, UserCheck, Settings } from 'lucide-react';

export default function ActivityBar({
  activeView,
  onSelectView,
  isSidebarOpen,
  onToggleSidebar,
  onOpenAccount,
  onOpenSettings
}) {
  const handleItemClick = (viewName) => {
    if (activeView === viewName && isSidebarOpen) {
      onToggleSidebar();
    } else {
      onSelectView(viewName);
      if (!isSidebarOpen) {
        onToggleSidebar();
      }
    }
  };

  return (
    <aside className="vscode-activitybar" aria-label="Activity Bar">
      <div className="activity-group">
        <button
          className={`activity-item ${activeView === 'explorer' && isSidebarOpen ? 'active' : ''}`}
          onClick={() => handleItemClick('explorer')}
          title="Explorer (Ctrl+Shift+E)"
          aria-label="Explorer"
        >
          <Files size={21} strokeWidth={1.7} />
        </button>

        <button
          className={`activity-item ${activeView === 'search' && isSidebarOpen ? 'active' : ''}`}
          onClick={() => handleItemClick('search')}
          title="Search (Ctrl+Shift+F)"
          aria-label="Search"
        >
          <Search size={21} strokeWidth={1.7} />
        </button>

        <button
          className={`activity-item ${activeView === 'source-control' && isSidebarOpen ? 'active' : ''}`}
          onClick={() => handleItemClick('source-control')}
          title="Source Control (Ctrl+Shift+G)"
          aria-label="Source Control"
        >
          <GitBranch size={21} strokeWidth={1.7} />
          <span className="activity-badge">1</span>
        </button>

        <button
          className={`activity-item ${activeView === 'debug' && isSidebarOpen ? 'active' : ''}`}
          onClick={() => handleItemClick('debug')}
          title="Run and Debug (Ctrl+Shift+D)"
          aria-label="Run and Debug"
        >
          <Bug size={21} strokeWidth={1.7} />
        </button>

        <button
          className={`activity-item ${activeView === 'extensions' && isSidebarOpen ? 'active' : ''}`}
          onClick={() => handleItemClick('extensions')}
          title="Extensions (Ctrl+Shift+X)"
          aria-label="Extensions"
        >
          <Blocks size={21} strokeWidth={1.7} />
          <span className="activity-badge">6</span>
        </button>
      </div>

      <div className="activity-group">
        <button
          className="activity-item"
          onClick={onOpenAccount}
          title="Developer Profile & Account"
          aria-label="Account"
        >
          <UserCheck size={20} strokeWidth={1.7} />
        </button>

        <button
          className="activity-item"
          onClick={onOpenSettings}
          title="Preferences & Settings"
          aria-label="Settings"
        >
          <Settings size={20} strokeWidth={1.7} />
        </button>
      </div>
    </aside>
  );
}
