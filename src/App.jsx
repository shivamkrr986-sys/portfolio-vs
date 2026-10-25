import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { portfolioFiles } from './data/filesData';
import TitleBar from './components/TitleBar';
import ActivityBar from './components/ActivityBar';
import Explorer from './components/Explorer';
import SearchPanel from './components/SearchPanel';
import SourceControlPanel from './components/SourceControlPanel';
import DebugPanel from './components/DebugPanel';
import ExtensionsPanel from './components/ExtensionsPanel';
import EditorTabs from './components/EditorTabs';
import Breadcrumbs from './components/Breadcrumbs';
import EditorView from './components/EditorView';
import IntegratedTerminal from './components/IntegratedTerminal';
import StatusBar from './components/StatusBar';
import CommandPalette from './components/CommandPalette';
import SettingsModal from './components/SettingsModal';
import AccountModal from './components/AccountModal';
import ContextMenu from './components/ContextMenu';

export default function App() {
  const containerRef = useRef(null);

  // Files & Tabs State
  const [files] = useState(portfolioFiles);
  // Default open tabs: about.js, projects.js, skills.js
  const [openTabs, setOpenTabs] = useState(() => [
    portfolioFiles[0], // about.js
    portfolioFiles[3], // projects.js
    portfolioFiles[1]  // skills.js
  ]);
  const [activeTabId, setActiveTabId] = useState('about.js');

  // Layout View States
  const [activeSidebarView, setActiveSidebarView] = useState('explorer');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isTerminalOpen, setIsTerminalOpen] = useState(true);
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);

  // Editor View Mode: 'preview' (default for immediate visual wow), 'code', or 'split'
  const [viewMode, setViewMode] = useState('preview');

  // Overlays State
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const [contextMenuState, setContextMenuState] = useState(null);

  // Settings with LocalStorage persistence
  const [theme, setTheme] = useState(() => localStorage.getItem('vscode_theme') || 'dark+');
  const [fontSize, setFontSize] = useState(() => localStorage.getItem('vscode_fontsize') || '13.5px');
  const [showMinimap, setShowMinimap] = useState(() => localStorage.getItem('vscode_minimap') !== 'false');
  const [showLineNumbers, setShowLineNumbers] = useState(() => localStorage.getItem('vscode_linenums') !== 'false');

  // Sync theme attribute on <body>
  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('vscode_theme', theme);
  }, [theme]);

  // Sync font size
  useEffect(() => {
    document.documentElement.style.setProperty('--editor-font-size', fontSize);
    localStorage.setItem('vscode_fontsize', fontSize);
  }, [fontSize]);

  // Sync minimap & line numbers
  useEffect(() => {
    localStorage.setItem('vscode_minimap', showMinimap);
  }, [showMinimap]);

  useEffect(() => {
    localStorage.setItem('vscode_linenums', showLineNumbers);
  }, [showLineNumbers]);

  // GSAP Entrance Animation
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.from('.vscode-titlebar', {
        y: -15,
        opacity: 0,
        duration: 0.4,
        ease: 'power2.out'
      });
      gsap.from('.vscode-activitybar', {
        x: -20,
        opacity: 0,
        duration: 0.45,
        delay: 0.1,
        ease: 'power2.out'
      });
      gsap.from('.vscode-sidebar', {
        x: -30,
        opacity: 0,
        duration: 0.45,
        delay: 0.15,
        ease: 'power2.out'
      });
      gsap.from('.vscode-editor-workbench', {
        opacity: 0,
        scale: 0.99,
        duration: 0.5,
        delay: 0.2,
        ease: 'power2.out'
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Global Keyboard Shortcuts (Ctrl+P, Ctrl+Shift+P, Ctrl+`, Ctrl+B, Escape)
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Ctrl+P or Cmd+P (or Ctrl+Shift+P)
      if ((e.ctrlKey || e.metaKey) && (e.key === 'p' || e.key === 'P')) {
        e.preventDefault();
        setIsCommandPaletteOpen(prev => !prev);
      }
      // Ctrl+` for Terminal
      else if ((e.ctrlKey || e.metaKey) && e.key === '`') {
        e.preventDefault();
        setIsTerminalOpen(prev => !prev);
      }
      // Ctrl+B for Sidebar
      else if ((e.ctrlKey || e.metaKey) && (e.key === 'b' || e.key === 'B')) {
        e.preventDefault();
        setIsSidebarOpen(prev => !prev);
      }
      // Escape closes open overlays
      else if (e.key === 'Escape') {
        setIsCommandPaletteOpen(false);
        setIsSettingsOpen(false);
        setIsAccountOpen(false);
        setContextMenuState(null);
        setIsMobileDrawerOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // File and Tab Actions
  const handleSelectFile = (file) => {
    if (!file) return;

    // Check if file is already open
    const isAlreadyOpen = openTabs.some(t => t.id === file.id);
    if (!isAlreadyOpen) {
      setOpenTabs(prev => [...prev, file]);
    }
    setActiveTabId(file.id);

    // If on mobile drawer, close drawer on select
    if (isMobileDrawerOpen) {
      setIsMobileDrawerOpen(false);
    }
  };

  const handleNavigateFileById = (fileId) => {
    const targetFile = files.find(f => f.id === fileId);
    if (targetFile) {
      handleSelectFile(targetFile);
    }
  };

  const handleCloseTab = (tabIdToClose) => {
    const tabIndex = openTabs.findIndex(t => t.id === tabIdToClose);
    const updatedTabs = openTabs.filter(t => t.id !== tabIdToClose);
    setOpenTabs(updatedTabs);

    // If the closed tab was active, switch to next or previous tab
    if (activeTabId === tabIdToClose) {
      if (updatedTabs.length > 0) {
        const nextIndex = Math.min(tabIndex, updatedTabs.length - 1);
        setActiveTabId(updatedTabs[nextIndex].id);
      } else {
        setActiveTabId(null);
      }
    }
  };

  const handleCloseOtherTabs = (retainedTabId) => {
    const retained = openTabs.find(t => t.id === retainedTabId);
    if (retained) {
      setOpenTabs([retained]);
      setActiveTabId(retained.id);
    }
  };

  const handleContextMenu = (e, file) => {
    setContextMenuState({
      x: e.clientX,
      y: e.clientY,
      file
    });
  };

  const activeFile = files.find(f => f.id === activeTabId) || null;

  return (
    <div className="vscode-app" ref={containerRef}>
      {/* 1. Title Bar */}
      <TitleBar
        activeFile={activeFile}
        isSidebarOpen={isSidebarOpen}
        onToggleSidebar={() => setIsSidebarOpen(prev => !prev)}
        isTerminalOpen={isTerminalOpen}
        onToggleTerminal={() => setIsTerminalOpen(prev => !prev)}
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
        onOpenSettings={() => setIsSettingsOpen(true)}
        isMobileDrawerOpen={isMobileDrawerOpen}
        onToggleMobileDrawer={() => setIsMobileDrawerOpen(prev => !prev)}
      />

      {/* 2. Main Workbench */}
      <div className="vscode-workspace">
        {/* Activity Bar */}
        <ActivityBar
          activeView={activeSidebarView}
          onSelectView={(view) => setActiveSidebarView(view)}
          isSidebarOpen={isSidebarOpen}
          onToggleSidebar={() => setIsSidebarOpen(prev => !prev)}
          onOpenAccount={() => setIsAccountOpen(true)}
          onOpenSettings={() => setIsSettingsOpen(true)}
        />

        {/* Sidebar Container */}
        <aside className={`vscode-sidebar ${!isSidebarOpen ? 'collapsed' : ''} ${isMobileDrawerOpen ? 'mobile-open' : ''}`}>
          <div className="sidebar-header">
            <span>
              {activeSidebarView === 'explorer' ? 'Explorer' :
               activeSidebarView === 'search' ? 'Search' :
               activeSidebarView === 'source-control' ? 'Source Control' :
               activeSidebarView === 'debug' ? 'Run and Debug' :
               activeSidebarView === 'extensions' ? 'Extensions' : 'Sidebar'}
            </span>
          </div>

          <div className="sidebar-content">
            {activeSidebarView === 'explorer' && (
              <Explorer
                files={files}
                activeFile={activeFile}
                onSelectFile={handleSelectFile}
                onContextMenu={handleContextMenu}
              />
            )}
            {activeSidebarView === 'search' && (
              <SearchPanel
                files={files}
                onSelectFile={handleSelectFile}
              />
            )}
            {activeSidebarView === 'source-control' && (
              <SourceControlPanel
                files={files}
                onSelectFile={handleSelectFile}
              />
            )}
            {activeSidebarView === 'debug' && (
              <DebugPanel />
            )}
            {activeSidebarView === 'extensions' && (
              <ExtensionsPanel />
            )}
          </div>
        </aside>

        {/* Mobile Backdrop */}
        {isMobileDrawerOpen && (
          <div
            className="mobile-drawer-backdrop"
            onClick={() => setIsMobileDrawerOpen(false)}
          />
        )}

        {/* Editor Workbench */}
        <main className="vscode-editor-workbench">
          {/* Tabs Bar */}
          <EditorTabs
            openTabs={openTabs}
            activeTabId={activeTabId}
            onSelectTab={(tab) => setActiveTabId(tab.id)}
            onCloseTab={handleCloseTab}
            viewMode={viewMode}
            onChangeViewMode={(mode) => setViewMode(mode)}
          />

          {/* Breadcrumbs */}
          <Breadcrumbs activeFile={activeFile} />

          {/* Editor and Preview View */}
          <div className="vscode-editor-split">
            <EditorView
              activeFile={activeFile}
              viewMode={viewMode}
              showMinimap={showMinimap}
              showLineNumbers={showLineNumbers}
              onNavigateFile={handleNavigateFileById}
            />

            {/* Bottom Integrated Terminal */}
            <IntegratedTerminal
              isOpen={isTerminalOpen}
              onClose={() => setIsTerminalOpen(false)}
              files={files}
              onSelectFile={handleSelectFile}
              onSelectTheme={(t) => setTheme(t)}
            />
          </div>
        </main>
      </div>

      {/* 3. Status Bar */}
      <StatusBar
        activeFile={activeFile}
        onOpenSettings={() => setIsSettingsOpen(true)}
        onToggleTerminal={() => setIsTerminalOpen(prev => !prev)}
      />

      {/* 4. Modals & Context Menus */}
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        files={files}
        onSelectFile={handleSelectFile}
        onToggleTerminal={() => setIsTerminalOpen(prev => !prev)}
        onOpenSettings={() => setIsSettingsOpen(true)}
        onClearTerminal={() => {}}
      />

      <SettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        theme={theme}
        onSelectTheme={(t) => setTheme(t)}
        fontSize={fontSize}
        onChangeFontSize={(fs) => setFontSize(fs)}
        showMinimap={showMinimap}
        onToggleMinimap={() => setShowMinimap(prev => !prev)}
        showLineNumbers={showLineNumbers}
        onToggleLineNumbers={() => setShowLineNumbers(prev => !prev)}
      />

      <AccountModal
        isOpen={isAccountOpen}
        onClose={() => setIsAccountOpen(false)}
        onNavigateFile={handleNavigateFileById}
      />

      {contextMenuState && (
        <ContextMenu
          x={contextMenuState.x}
          y={contextMenuState.y}
          file={contextMenuState.file}
          onClose={() => setContextMenuState(null)}
          onOpenFile={handleSelectFile}
          onCloseTab={handleCloseTab}
          onCloseOtherTabs={handleCloseOtherTabs}
        />
      )}
    </div>
  );
}
