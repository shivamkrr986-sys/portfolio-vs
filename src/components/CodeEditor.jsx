import React, { useState, useMemo } from 'react';
import Prism from 'prismjs';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-markdown';
import { Copy, Check } from 'lucide-react';

export default function CodeEditor({
  file,
  showMinimap = true,
  showLineNumbers = true
}) {
  const [activeLine, setActiveLine] = useState(1);
  const [copied, setCopied] = useState(false);

  const lines = useMemo(() => {
    if (!file || !file.code) return [];
    return file.code.split('\n');
  }, [file]);

  const highlightedHtmlLines = useMemo(() => {
    if (!file || !file.code) return [];
    const lang = file.language || 'javascript';
    const grammar = Prism.languages[lang] || Prism.languages.javascript || Prism.languages.clike;

    return lines.map(line => {
      if (!line) return '&nbsp;';
      try {
        return Prism.highlight(line, grammar, lang);
      } catch (err) {
        return line;
      }
    });
  }, [file, lines]);

  const handleCopy = () => {
    if (!file?.code) return;
    navigator.clipboard.writeText(file.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!file) {
    return (
      <div className="editor-empty-state">
        <div className="empty-title">No open editors</div>
        <div className="empty-shortcuts">
          <div className="empty-shortcut-row">
            <span>Show All Commands</span>
            <kbd>Ctrl+Shift+P</kbd>
          </div>
          <div className="empty-shortcut-row">
            <span>Quick Open File</span>
            <kbd>Ctrl+P</kbd>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="code-editor-container" role="region" aria-label="Code Editor">
      {/* Copy Code Floating Action */}
      <button
        onClick={handleCopy}
        className="btn-secondary"
        style={{
          position: 'absolute',
          top: 12,
          right: showMinimap ? 94 : 16,
          zIndex: 10,
          padding: '4px 8px',
          fontSize: 11
        }}
        title="Copy Code Content"
        aria-label="Copy Code"
      >
        {copied ? <Check size={12} color="var(--terminal-green)" /> : <Copy size={12} />}
        <span>{copied ? 'Copied' : 'Copy'}</span>
      </button>

      {/* Line Numbers Gutter */}
      {showLineNumbers && (
        <div className="editor-gutter" aria-hidden="true">
          {lines.map((_, idx) => {
            const lineNum = idx + 1;
            const isActive = lineNum === activeLine;
            return (
              <div
                key={lineNum}
                className={`gutter-number ${isActive ? 'active-line-num' : ''}`}
                onClick={() => setActiveLine(lineNum)}
              >
                {lineNum}
              </div>
            );
          })}
        </div>
      )}

      {/* Syntax Highlighted Code Lines */}
      <div className="editor-code-surface">
        {highlightedHtmlLines.map((html, idx) => {
          const lineNum = idx + 1;
          const isActive = lineNum === activeLine;
          return (
            <div
              key={lineNum}
              className={`editor-line ${isActive ? 'active-line' : ''}`}
              onClick={() => setActiveLine(lineNum)}
              dangerouslySetInnerHTML={{ __html: html }}
            />
          );
        })}
      </div>

      {/* Minimap Representation */}
      {showMinimap && (
        <div className="editor-minimap" aria-hidden="true">
          <div className="minimap-slider" />
          {lines.slice(0, 50).map((line, idx) => {
            const len = Math.min(line.trim().length * 1.5, 65);
            return (
              <div
                key={idx}
                className="minimap-line"
                style={{
                  width: `${Math.max(len, 6)}%`,
                  backgroundColor:
                    line.includes('const') || line.includes('export')
                      ? 'var(--keyword-purple)'
                      : line.includes('function') || line.includes('name')
                      ? 'var(--function-blue)'
                      : line.includes('"')
                      ? 'var(--string-orange)'
                      : 'rgba(255, 255, 255, 0.2)'
                }}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
