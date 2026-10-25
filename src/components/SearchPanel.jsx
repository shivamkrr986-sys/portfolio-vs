import React, { useState, useMemo } from 'react';
import { Search, ChevronDown, ChevronRight } from 'lucide-react';
import FileIcon from './FileIcon';

export default function SearchPanel({ files, onSelectFile }) {
  const [searchQuery, setSearchQuery] = useState('');

  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const queryLower = searchQuery.toLowerCase();

    const matches = [];
    files.forEach(file => {
      const lines = file.code.split('\n');
      const matchingLines = [];

      lines.forEach((lineText, idx) => {
        if (lineText.toLowerCase().includes(queryLower)) {
          matchingLines.push({
            lineNumber: idx + 1,
            text: lineText.trim()
          });
        }
      });

      if (matchingLines.length > 0 || file.name.toLowerCase().includes(queryLower)) {
        matches.push({
          file,
          matchingLines
        });
      }
    });

    return matches;
  }, [searchQuery, files]);

  const totalMatchesCount = searchResults.reduce((acc, curr) => acc + (curr.matchingLines.length || 1), 0);

  return (
    <div className="search-panel">
      <div className="search-input-wrapper">
        <Search size={14} className="search-input-icon" />
        <input
          type="text"
          className="search-input-field"
          placeholder="Search portfolio content..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          autoFocus
        />
      </div>

      {searchQuery && (
        <div className="search-results-summary">
          {totalMatchesCount} result{totalMatchesCount === 1 ? '' : 's'} across {searchResults.length} file{searchResults.length === 1 ? '' : 's'}
        </div>
      )}

      <div className="search-results-list">
        {searchResults.map(({ file, matchingLines }) => (
          <div key={file.id} className="search-result-group">
            <div 
              className="search-result-file"
              onClick={() => onSelectFile(file)}
            >
              <FileIcon type={file.icon} size={14} />
              <span>{file.name}</span>
              <span style={{ marginLeft: 'auto', fontSize: 10, color: 'var(--text-muted)' }}>
                {matchingLines.length || 1}
              </span>
            </div>

            {matchingLines.slice(0, 4).map((match, idx) => (
              <div 
                key={idx} 
                className="search-match-row"
                onClick={() => onSelectFile(file)}
              >
                <span style={{ color: 'var(--text-muted)', fontSize: 10 }}>{match.lineNumber}:</span>
                <span style={{ textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>
                  {match.text}
                </span>
              </div>
            ))}
          </div>
        ))}

        {searchQuery && searchResults.length === 0 && (
          <div style={{ color: 'var(--text-secondary)', fontSize: 12, padding: 10, textAlign: 'center' }}>
            No results found for "{searchQuery}".
          </div>
        )}
      </div>
    </div>
  );
}
