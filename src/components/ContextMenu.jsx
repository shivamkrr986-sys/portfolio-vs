import React, { useEffect, useRef } from 'react';
import { ExternalLink, Copy, X, FolderCheck } from 'lucide-react';

export default function ContextMenu({
  x,
  y,
  file,
  onClose,
  onOpenFile,
  onCloseTab,
  onCloseOtherTabs
}) {
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        onClose();
      }
    }
    window.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('scroll', onClose);
    return () => {
      window.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('scroll', onClose);
    };
  }, [onClose]);

  if (!file) return null;

  const handleCopyPath = () => {
    navigator.clipboard.writeText(file.path);
    onClose();
  };

  const handleCopyName = () => {
    navigator.clipboard.writeText(file.name);
    onClose();
  };

  return (
    <div
      ref={menuRef}
      className="context-menu-wrapper"
      style={{
        top: Math.min(y, window.innerHeight - 180),
        left: Math.min(x, window.innerWidth - 180)
      }}
    >
      <div
        className="context-menu-item"
        onClick={() => {
          onOpenFile(file);
          onClose();
        }}
      >
        <ExternalLink size={14} />
        <span>Open</span>
      </div>

      <div className="context-menu-item" onClick={handleCopyPath}>
        <Copy size={14} />
        <span>Copy Relative Path</span>
      </div>

      <div className="context-menu-item" onClick={handleCopyName}>
        <Copy size={14} />
        <span>Copy Name</span>
      </div>

      <div className="context-menu-divider" />

      {onCloseTab && (
        <div
          className="context-menu-item"
          onClick={() => {
            onCloseTab(file.id);
            onClose();
          }}
        >
          <X size={14} />
          <span>Close</span>
        </div>
      )}

      {onCloseOtherTabs && (
        <div
          className="context-menu-item"
          onClick={() => {
            onCloseOtherTabs(file.id);
            onClose();
          }}
        >
          <FolderCheck size={14} />
          <span>Close Others</span>
        </div>
      )}
    </div>
  );
}
