import React from 'react';
import { ChevronRight } from 'lucide-react';
import FileIcon from './FileIcon';

export default function Breadcrumbs({ activeFile }) {
  if (!activeFile) return null;

  const parts = activeFile.path.split('/');
  const symbol = 
    activeFile.id === 'about.js' ? 'developer' :
    activeFile.id === 'skills.js' ? 'skills' :
    activeFile.id === 'experience.js' ? 'experience' :
    activeFile.id === 'projects.js' ? 'projects' :
    activeFile.id === 'achievements.json' ? 'verifiedMilestones' :
    activeFile.id === 'contact.js' ? 'contactDetails' :
    null;

  return (
    <div className="editor-breadcrumbs" aria-label="Breadcrumb navigation">
      <span className="breadcrumb-crumb">shivam-portfolio</span>
      <span className="breadcrumb-separator"><ChevronRight size={12} /></span>
      
      {parts.length > 1 && (
        <>
          <span className="breadcrumb-crumb">{parts[0]}</span>
          <span className="breadcrumb-separator"><ChevronRight size={12} /></span>
        </>
      )}

      <span className="breadcrumb-crumb" style={{ color: 'var(--text-bright)' }}>
        <FileIcon type={activeFile.icon} size={13} style={{ marginRight: 4 }} />
        {activeFile.name}
      </span>

      {symbol && (
        <>
          <span className="breadcrumb-separator"><ChevronRight size={12} /></span>
          <span className="breadcrumb-crumb" style={{ color: 'var(--js-yellow)', fontFamily: 'var(--font-code)' }}>
            {symbol}
          </span>
        </>
      )}
    </div>
  );
}
