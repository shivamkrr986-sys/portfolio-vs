import React, { useState } from 'react';
import { GitBranch, Check, RefreshCw, MoreHorizontal } from 'lucide-react';
import FileIcon from './FileIcon';

export default function SourceControlPanel({ onSelectFile, files }) {
  const [commitMessage, setCommitMessage] = useState('');
  const [committedNotice, setCommittedNotice] = useState(false);

  const modifiedFiles = [
    { file: files.find(f => f.id === 'projects.js') || files[3], status: 'M' },
    { file: files.find(f => f.id === 'about.js') || files[0], status: 'M' }
  ];

  const handleCommit = () => {
    if (!commitMessage.trim()) return;
    setCommittedNotice(true);
    setTimeout(() => {
      setCommittedNotice(false);
      setCommitMessage('');
    }, 2500);
  };

  return (
    <div className="source-control-panel">
      <div className="git-branch-info">
        <GitBranch size={14} color="var(--accent-light)" />
        <span style={{ fontWeight: 600, color: 'var(--text-bright)' }}>main</span>
        <span style={{ marginLeft: 'auto', display: 'flex', gap: 6 }}>
          <RefreshCw size={13} style={{ cursor: 'pointer' }} />
          <MoreHorizontal size={13} style={{ cursor: 'pointer' }} />
        </span>
      </div>

      <div className="git-commit-box">
        <textarea
          className="git-commit-input"
          placeholder="Message (Ctrl+Enter to commit on 'main')"
          value={commitMessage}
          onChange={(e) => setCommitMessage(e.target.value)}
        />
        <button className="git-commit-btn" onClick={handleCommit}>
          <Check size={14} />
          <span>Commit & Push</span>
        </button>
        {committedNotice && (
          <div style={{ color: 'var(--terminal-green)', fontSize: 11, textAlign: 'center' }}>
            ✓ Successfully committed to main branch!
          </div>
        )}
      </div>

      <div>
        <div className="git-changes-header">
          <span>Staged Changes ({modifiedFiles.length})</span>
        </div>

        <div style={{ marginTop: 6, display: 'flex', flexDirection: 'column', gap: 2 }}>
          {modifiedFiles.map(({ file, status }) => (
            <div
              key={file.id}
              className="git-file-row"
              onClick={() => onSelectFile(file)}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <FileIcon type={file.icon} size={13} />
                <span style={{ fontFamily: 'var(--font-code)' }}>{file.name}</span>
                <span style={{ fontSize: 10, color: 'var(--text-muted)' }}>{file.folder}</span>
              </div>
              <span className={`git-tag-${status.toLowerCase()}`}>{status}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
