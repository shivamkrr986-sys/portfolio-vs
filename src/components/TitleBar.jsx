import React from 'react';
import { Search, Sidebar, Terminal, Columns2, Settings, Menu } from 'lucide-react';

export default function TitleBar({
  activeFile,
  isSidebarOpen,
  onToggleSidebar,
  isTerminalOpen,
  onToggleTerminal,
  onOpenCommandPalette,
  onOpenSettings,
  isMobileDrawerOpen,
  onToggleMobileDrawer
}) {
  return (
    <header className="vscode-titlebar" role="banner">
      <div className="titlebar-left">
        {/* Mobile menu trigger */}
        <button 
          className="titlebar-tool-btn mobile-only-btn"
          style={{ display: 'none' }}
          onClick={onToggleMobileDrawer}
          title="Toggle Mobile Explorer"
          aria-label="Toggle Explorer"
        >
          <Menu size={16} />
        </button>

        {/* Decorative Window Controls */}
        <div className="window-dots" aria-hidden="true">
          <div className="window-dot close" title="Close Window" />
          <div className="window-dot minimize" title="Minimize" />
          <div className="window-dot maximize" title="Maximize" />
        </div>

        {/* VS Code Branding & Workspace */}
        <div className="vscode-icon-title">
          <svg width="15" height="15" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M72.5 9.2L96 20.8V79.2L72.5 90.8L46.2 66.8L72.5 49.8V9.2Z" fill="#0066B8"/>
            <path d="M72.5 9.2L46.2 33.2L24.2 18.7L4 33.8V66.2L24.2 81.3L46.2 66.8L72.5 90.8V72.2L36.8 50L72.5 27.8V9.2Z" fill="#007ACC"/>
            <path d="M4 66.2L24.2 81.3L46.2 66.8L36.8 50L4 66.2Z" fill="#1F8AD2"/>
            <path d="M4 33.8L24.2 18.7L46.2 33.2L36.8 50L4 33.8Z" fill="#0E639C"/>
            <path d="M96 20.8L72.5 9.2V90.8L96 79.2V20.8Z" fill="#007ACC"/>
          </svg>
          <span style={{ fontWeight: 500, color: 'var(--text-primary)' }}>
            shivam-portfolio {activeFile ? `— ${activeFile.name}` : ''}
          </span>
        </div>
      </div>

      {/* Center Command Search Box */}
      <div className="titlebar-center">
        <button 
          className="command-search-btn" 
          onClick={onOpenCommandPalette}
          title="Search files and run commands (Ctrl+P)"
          aria-label="Quick Open Command Palette"
        >
          <Search size={13} />
          <span>shivam-portfolio {activeFile ? `> ${activeFile.path}` : ''}</span>
          <span className="command-shortcut">Ctrl+P</span>
        </button>
      </div>

      {/* Right Layout Actions */}
      <div className="titlebar-right">
        <button 
          className={`titlebar-tool-btn ${isSidebarOpen ? 'active' : ''}`}
          onClick={onToggleSidebar}
          title="Toggle Primary Side Bar (Ctrl+B)"
          aria-label="Toggle Primary Side Bar"
        >
          <Sidebar size={15} />
        </button>

        <button 
          className={`titlebar-tool-btn ${isTerminalOpen ? 'active' : ''}`}
          onClick={onToggleTerminal}
          title="Toggle Integrated Terminal (Ctrl+`)"
          aria-label="Toggle Integrated Terminal"
        >
          <Terminal size={15} />
        </button>

        <button 
          className="titlebar-tool-btn"
          onClick={onOpenSettings}
          title="Open Settings"
          aria-label="Settings"
        >
          <Settings size={15} />
        </button>
      </div>
    </header>
  );
}
