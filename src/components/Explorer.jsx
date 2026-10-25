import React, { useState } from 'react';
import { ChevronRight, Folder, FolderOpen, MoreHorizontal, RefreshCw } from 'lucide-react';
import FileIcon from './FileIcon';

export default function Explorer({
  files,
  activeFile,
  onSelectFile,
  onContextMenu
}) {
  const [expandedFolders, setExpandedFolders] = useState({
    root: true,
    src: true,
    public: true
  });

  const toggleFolder = (folderName) => {
    setExpandedFolders(prev => ({
      ...prev,
      [folderName]: !prev[folderName]
    }));
  };

  const collapseAll = () => {
    setExpandedFolders({
      root: true,
      src: false,
      public: false
    });
  };

  // Group files
  const rootFiles = files.filter(f => f.folder === 'root');
  const srcFiles = files.filter(f => f.folder === 'src');
  const publicFiles = files.filter(f => f.folder === 'public');

  const handleFileClick = (file) => {
    onSelectFile(file);
  };

  const handleRightClick = (e, file) => {
    e.preventDefault();
    if (onContextMenu) {
      onContextMenu(e, file);
    }
  };

  return (
    <div className="explorer-tree" role="tree" aria-label="File Explorer">
      {/* Root workspace item */}
      <div className="tree-folder">
        <div 
          className="tree-folder-header"
          onClick={() => toggleFolder('root')}
          role="treeitem"
          aria-expanded={expandedFolders.root}
        >
          <span className={`folder-arrow ${expandedFolders.root ? 'expanded' : ''}`}>
            <ChevronRight size={14} />
          </span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: 'var(--text-bright)' }}>
            SHIVAM-PORTFOLIO
          </span>
        </div>

        {expandedFolders.root && (
          <div className="tree-folder-children">
            {/* src folder */}
            <div className="tree-folder">
              <div 
                className="tree-folder-header"
                onClick={() => toggleFolder('src')}
                role="treeitem"
                aria-expanded={expandedFolders.src}
              >
                <span className={`folder-arrow ${expandedFolders.src ? 'expanded' : ''}`}>
                  <ChevronRight size={14} />
                </span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                  {expandedFolders.src ? (
                    <FolderOpen size={14} color="#dcb67a" />
                  ) : (
                    <Folder size={14} color="#dcb67a" />
                  )}
                  src
                </span>
              </div>

              {expandedFolders.src && (
                <div className="tree-folder-children">
                  {srcFiles.map(file => {
                    const isActive = activeFile?.id === file.id;
                    return (
                      <div
                        key={file.id}
                        className={`tree-file-item ${isActive ? 'active' : ''}`}
                        onClick={() => handleFileClick(file)}
                        onContextMenu={(e) => handleRightClick(e, file)}
                        role="treeitem"
                        aria-selected={isActive}
                      >
                        <span className="file-icon-badge">
                          <FileIcon type={file.icon} size={15} />
                        </span>
                        <span className="file-name-text">{file.name}</span>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* public folder */}
            <div className="tree-folder">
              <div 
                className="tree-folder-header"
                onClick={() => toggleFolder('public')}
                role="treeitem"
                aria-expanded={expandedFolders.public}
              >
                <span className={`folder-arrow ${expandedFolders.public ? 'expanded' : ''}`}>
                  <ChevronRight size={14} />
                </span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                  {expandedFolders.public ? (
                    <FolderOpen size={14} color="#dcb67a" />
                  ) : (
                    <Folder size={14} color="#dcb67a" />
                  )}
                  public
                </span>
              </div>

              {expandedFolders.public && (
                <div className="tree-folder-children">
                  {publicFiles.map(file => {
                    const isActive = activeFile?.id === file.id;
                    return (
                      <div
                        key={file.id}
                        className={`tree-file-item ${isActive ? 'active' : ''}`}
                        onClick={() => handleFileClick(file)}
                        onContextMenu={(e) => handleRightClick(e, file)}
                        role="treeitem"
                        aria-selected={isActive}
                      >
                        <span className="file-icon-badge">
                          <FileIcon type={file.icon} size={15} />
                        </span>
                        <span className="file-name-text">{file.name}</span>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Root-level files (package.json, README.md) */}
            {rootFiles.map(file => {
              const isActive = activeFile?.id === file.id;
              return (
                <div
                  key={file.id}
                  className={`tree-file-item ${isActive ? 'active' : ''}`}
                  onClick={() => handleFileClick(file)}
                  onContextMenu={(e) => handleRightClick(e, file)}
                  role="treeitem"
                  aria-selected={isActive}
                >
                  <span className="file-icon-badge">
                    <FileIcon type={file.icon} size={15} />
                  </span>
                  <span className="file-name-text">{file.name}</span>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
