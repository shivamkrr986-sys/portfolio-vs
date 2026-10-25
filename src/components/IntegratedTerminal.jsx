import React, { useState, useRef, useEffect } from 'react';
import { Terminal, Ban, Maximize2, Minimize2, X, ChevronRight, CheckCircle2 } from 'lucide-react';
import { portfolioConfig } from '../config/portfolio';

export default function IntegratedTerminal({
  isOpen,
  onClose,
  files,
  onSelectFile,
  onSelectTheme
}) {
  const [activeTab, setActiveTab] = useState('terminal');
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState([
    {
      type: 'system',
      text: "VS Code Integrated Terminal initialized. Type 'help' to view available commands."
    }
  ]);
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [isMaximized, setIsMaximized] = useState(false);

  const terminalEndRef = useRef(null);
  const inputRef = useRef(null);

  const availableCommands = [
    'help', 'about', 'skills', 'experience', 'projects',
    'contact', 'github', 'clear', 'whoami', 'ls', 'date'
  ];

  useEffect(() => {
    if (isOpen && activeTab === 'terminal') {
      terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [history, isOpen, activeTab]);

  const handleCommandExecution = (rawCmd) => {
    const cmd = rawCmd.trim();
    if (!cmd) return;

    // Add to history list
    setCommandHistory(prev => [cmd, ...prev]);
    setHistoryIndex(-1);

    const parts = cmd.split(' ');
    const command = parts[0].toLowerCase();
    const arg = parts.slice(1).join(' ').trim();

    let outputElement = null;

    switch (command) {
      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      case 'help':
        outputElement = (
          <div className="terminal-output">
            <div style={{ color: 'var(--accent-light)', marginBottom: 4, fontWeight: 600 }}>
              Available Terminal Commands:
            </div>
            <table>
              <tbody>
                <tr>
                  <td className="cmd-name">about</td>
                  <td className="cmd-desc">Show developer biography and open about.js</td>
                </tr>
                <tr>
                  <td className="cmd-name">skills</td>
                  <td className="cmd-desc">List Frontend & animation proficiencies and open skills.js</td>
                </tr>
                <tr>
                  <td className="cmd-name">experience</td>
                  <td className="cmd-desc">Display work history at Webzaa and open experience.js</td>
                </tr>
                <tr>
                  <td className="cmd-name">projects</td>
                  <td className="cmd-desc">Inspect verified development projects and open projects.js</td>
                </tr>
                <tr>
                  <td className="cmd-name">contact</td>
                  <td className="cmd-desc">Print contact info, channels, and open contact.js</td>
                </tr>
                <tr>
                  <td className="cmd-name">github</td>
                  <td className="cmd-desc">Navigate to configured GitHub repository profile</td>
                </tr>
                <tr>
                  <td className="cmd-name">whoami</td>
                  <td className="cmd-desc">Display current developer profile and affiliation</td>
                </tr>
                <tr>
                  <td className="cmd-name">ls</td>
                  <td className="cmd-desc">List files and directories in current workspace</td>
                </tr>
                <tr>
                  <td className="cmd-name">date</td>
                  <td className="cmd-desc">Print current session date and time</td>
                </tr>
                <tr>
                  <td className="cmd-name">cat &lt;file&gt;</td>
                  <td className="cmd-desc">Print contents of a workspace file</td>
                </tr>
                <tr>
                  <td className="cmd-name">clear</td>
                  <td className="cmd-desc">Clear the terminal window output (Ctrl+L)</td>
                </tr>
              </tbody>
            </table>
          </div>
        );
        break;

      case 'about':
        onSelectFile(files.find(f => f.id === 'about.js'));
        outputElement = (
          <div className="terminal-output">
            <div style={{ color: 'var(--text-bright)', fontWeight: 600 }}>{portfolioConfig.developer.name}</div>
            <div style={{ color: 'var(--accent-light)' }}>{portfolioConfig.developer.role} @ {portfolioConfig.developer.company} ({portfolioConfig.developer.experience})</div>
            <div style={{ color: 'var(--text-primary)', marginTop: 4 }}>{portfolioConfig.developer.bio}</div>
            <div style={{ color: 'var(--terminal-green)', marginTop: 4, fontSize: 11 }}>➔ Opened src/about.js in editor tab.</div>
          </div>
        );
        break;

      case 'skills':
        onSelectFile(files.find(f => f.id === 'skills.js'));
        outputElement = (
          <div className="terminal-output">
            <div style={{ color: 'var(--js-yellow)', fontWeight: 600 }}>Frontend:</div>
            <div style={{ color: 'var(--text-primary)' }}>{portfolioConfig.skills.Frontend.map(s => s.name).join(', ')}</div>
            <div style={{ color: '#d946ef', fontWeight: 600, marginTop: 4 }}>Animation & UI:</div>
            <div style={{ color: 'var(--text-primary)' }}>{portfolioConfig.skills.animationAndUI.map(s => s.name).join(', ')}</div>
            <div style={{ color: '#34d399', fontWeight: 600, marginTop: 4 }}>Tools & Marketing:</div>
            <div style={{ color: 'var(--text-primary)' }}>{portfolioConfig.skills.toolsAndIntegrations.map(s => s.name).join(', ')}</div>
            <div style={{ color: 'var(--terminal-green)', marginTop: 4, fontSize: 11 }}>➔ Opened src/skills.js in editor tab.</div>
          </div>
        );
        break;

      case 'experience':
        onSelectFile(files.find(f => f.id === 'experience.js'));
        outputElement = (
          <div className="terminal-output">
            <div style={{ color: 'var(--text-bright)', fontWeight: 600 }}>{portfolioConfig.experience[0].role} — {portfolioConfig.experience[0].company}</div>
            <div style={{ color: 'var(--accent-light)' }}>Duration: {portfolioConfig.experience[0].duration} • {portfolioConfig.experience[0].location}</div>
            <div style={{ color: 'var(--text-secondary)' }}>Education: {portfolioConfig.experience[0].education}</div>
            <div style={{ color: 'var(--terminal-green)', marginTop: 4, fontSize: 11 }}>➔ Opened src/experience.js in editor tab.</div>
          </div>
        );
        break;

      case 'projects':
        onSelectFile(files.find(f => f.id === 'projects.js'));
        outputElement = (
          <div className="terminal-output">
            <div style={{ color: 'var(--text-bright)', fontWeight: 600, marginBottom: 4 }}>
              Verified Projects ({portfolioConfig.projects.length} loaded):
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 4 }}>
              {portfolioConfig.projects.map((p, idx) => (
                <div key={idx} style={{ color: 'var(--variable-light-blue)' }}>
                  {idx + 1}. {p.name} {p.featured ? '★' : ''}
                </div>
              ))}
            </div>
            <div style={{ color: 'var(--terminal-green)', marginTop: 6, fontSize: 11 }}>➔ Opened src/projects.js in editor tab.</div>
          </div>
        );
        break;

      case 'contact':
        onSelectFile(files.find(f => f.id === 'contact.js'));
        outputElement = (
          <div className="terminal-output">
            <div>Email: <span style={{ color: 'var(--accent-light)' }}>{portfolioConfig.developer.email}</span></div>
            <div>Location: <span style={{ color: 'var(--text-bright)' }}>{portfolioConfig.developer.location}</span></div>
            <div>Phone: <span style={{ color: 'var(--text-bright)' }}>{portfolioConfig.developer.phone}</span></div>
            <div style={{ color: 'var(--terminal-green)', marginTop: 4, fontSize: 11 }}>➔ Opened src/contact.js in editor tab.</div>
          </div>
        );
        break;

      case 'github':
        if (portfolioConfig.developer.github && portfolioConfig.developer.github !== 'https://github.com/') {
          window.open(portfolioConfig.developer.github, '_blank');
          outputElement = (
            <div className="terminal-output" style={{ color: 'var(--terminal-green)' }}>
              Opening {portfolioConfig.developer.github} in browser...
            </div>
          );
        } else {
          outputElement = (
            <div className="terminal-output" style={{ color: 'var(--warning-orange)' }}>
              GitHub URL is set to default. You can configure your profile URL in <code>src/config/portfolio.js</code>.
            </div>
          );
        }
        break;

      case 'whoami':
        outputElement = (
          <div className="terminal-output" style={{ color: 'var(--terminal-green)' }}>
            shivam — Frontend Developer @ Webzaa (Mumbai, India) [BCA, 2024]
          </div>
        );
        break;

      case 'ls':
        outputElement = (
          <div className="terminal-output">
            <span style={{ color: 'var(--accent-light)', marginRight: 16 }}>src/</span>
            <span style={{ color: 'var(--accent-light)', marginRight: 16 }}>public/</span>
            <span style={{ color: '#cb9a36', marginRight: 16 }}>package.json</span>
            <span style={{ color: '#4fc1ff' }}>README.md</span>
          </div>
        );
        break;

      case 'date':
        outputElement = (
          <div className="terminal-output" style={{ color: 'var(--text-secondary)' }}>
            {new Date().toString()}
          </div>
        );
        break;

      case 'cat':
        if (!arg) {
          outputElement = (
            <div className="terminal-output" style={{ color: 'var(--error-red)' }}>
              cat: missing file operand. Usage: cat &lt;filename&gt;
            </div>
          );
        } else {
          const targetFile = files.find(f => f.name === arg || f.path === arg);
          if (targetFile) {
            outputElement = (
              <div className="terminal-output" style={{ whiteSpace: 'pre-wrap', fontFamily: 'var(--font-code)' }}>
                {targetFile.code}
              </div>
            );
          } else {
            outputElement = (
              <div className="terminal-output" style={{ color: 'var(--error-red)' }}>
                cat: {arg}: No such file or directory. Try 'ls' to list files.
              </div>
            );
          }
        }
        break;

      default:
        outputElement = (
          <div className="terminal-output" style={{ color: 'var(--error-red)' }}>
            sh: command not found: {command}. Type <span style={{ color: 'var(--js-yellow)' }}>'help'</span> for available commands.
          </div>
        );
    }

    setHistory(prev => [
      ...prev,
      { type: 'command', command: cmd },
      { type: 'output', content: outputElement }
    ]);
    setInputVal('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleCommandExecution(inputVal);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const nextIndex = Math.min(historyIndex + 1, commandHistory.length - 1);
        setHistoryIndex(nextIndex);
        setInputVal(commandHistory[nextIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const nextIndex = historyIndex - 1;
        setHistoryIndex(nextIndex);
        setInputVal(commandHistory[nextIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInputVal('');
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      const match = availableCommands.find(c => c.startsWith(inputVal.trim()));
      if (match) {
        setInputVal(match);
      }
    } else if (e.ctrlKey && e.key === 'l') {
      e.preventDefault();
      setHistory([]);
    }
  };

  if (!isOpen) return null;

  return (
    <section
      className={`vscode-terminal-panel ${isMaximized ? 'maximized' : ''}`}
      style={{ height: isMaximized ? '60vh' : 'var(--terminal-height)' }}
      aria-label="Integrated Terminal"
    >
      {/* Header Tabs & Controls */}
      <div className="terminal-header">
        <div className="terminal-tabs">
          <button
            className={`terminal-tab-btn ${activeTab === 'terminal' ? 'active' : ''}`}
            onClick={() => setActiveTab('terminal')}
          >
            <span>TERMINAL</span>
          </button>

          <button
            className={`terminal-tab-btn ${activeTab === 'problems' ? 'active' : ''}`}
            onClick={() => setActiveTab('problems')}
          >
            <span>PROBLEMS</span>
            <span className="terminal-badge">0</span>
          </button>

          <button
            className={`terminal-tab-btn ${activeTab === 'output' ? 'active' : ''}`}
            onClick={() => setActiveTab('output')}
          >
            <span>OUTPUT</span>
          </button>

          <button
            className={`terminal-tab-btn ${activeTab === 'debug' ? 'active' : ''}`}
            onClick={() => setActiveTab('debug')}
          >
            <span>DEBUG CONSOLE</span>
          </button>
        </div>

        <div className="terminal-controls">
          <button
            className="term-control-btn"
            onClick={() => setHistory([])}
            title="Clear Terminal (Ctrl+L)"
            aria-label="Clear Terminal"
          >
            <Ban size={13} />
          </button>

          <button
            className="term-control-btn"
            onClick={() => setIsMaximized(!isMaximized)}
            title={isMaximized ? "Restore Terminal Size" : "Maximize Terminal"}
            aria-label="Toggle Terminal Size"
          >
            {isMaximized ? <Minimize2 size={13} /> : <Maximize2 size={13} />}
          </button>

          <button
            className="term-control-btn"
            onClick={onClose}
            title="Close Terminal Panel"
            aria-label="Close Terminal"
          >
            <X size={14} />
          </button>
        </div>
      </div>

      {/* Terminal View Content */}
      {activeTab === 'terminal' && (
        <div className="terminal-body" onClick={() => inputRef.current?.focus()}>
          <div className="terminal-welcome">
            Microsoft Windows [Portfolio Shell v1.0.0]<br />
            Shivam Kumar — Frontend Developer Interactive Workspace. Type <strong>'help'</strong> to begin.
          </div>

          <div className="terminal-history-list">
            {history.map((entry, idx) => {
              if (entry.type === 'command') {
                return (
                  <div key={idx} className="terminal-prompt-line">
                    <span className="term-user">shivam@portfolio</span>
                    <span className="term-symbol">:~$</span>
                    <span className="term-cmd">{entry.command}</span>
                  </div>
                );
              }
              if (entry.type === 'output') {
                return <div key={idx}>{entry.content}</div>;
              }
              return (
                <div key={idx} style={{ color: 'var(--text-secondary)' }}>
                  {entry.text}
                </div>
              );
            })}
          </div>

          {/* Prompt line */}
          <div className="terminal-input-row">
            <span className="term-user">shivam@portfolio</span>
            <span className="term-symbol">:~$</span>
            <input
              ref={inputRef}
              type="text"
              className="terminal-input-field"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={handleKeyDown}
              autoFocus
              spellCheck={false}
              autoComplete="off"
            />
          </div>

          {/* Autocomplete Suggestion Pills */}
          <div className="terminal-suggestions">
            <span style={{ fontSize: 10, color: 'var(--text-muted)' }}>Quick Commands:</span>
            {['help', 'about', 'skills', 'experience', 'projects', 'contact', 'clear'].map(cmd => (
              <button
                key={cmd}
                className="suggestion-pill"
                onClick={(e) => {
                  e.stopPropagation();
                  handleCommandExecution(cmd);
                }}
              >
                {cmd}
              </button>
            ))}
          </div>

          <div ref={terminalEndRef} />
        </div>
      )}

      {/* Problems View */}
      {activeTab === 'problems' && (
        <div className="terminal-panel-content">
          <div className="problems-view">
            <div className="problems-summary">
              <CheckCircle2 size={16} />
              <span>No problems have been detected in the workspace.</span>
            </div>
            <div style={{ color: 'var(--text-muted)', fontSize: 11.5 }}>
              All 9 source files compiled cleanly with 0 TypeScript/ESLint diagnostics.
            </div>
          </div>
        </div>
      )}

      {/* Output View */}
      {activeTab === 'output' && (
        <div className="terminal-panel-content">
          <div className="output-view">
            <div className="log-muted">[Vite Dev Server Output]</div>
            <div>
              <span className="log-green">VITE v8.3.4</span> <span className="log-muted">ready in</span> 120 ms
            </div>
            <div style={{ marginTop: 4 }}>
              ➜ <span className="log-blue">Local:</span> <span style={{ color: 'var(--accent-light)' }}>http://localhost:5173/</span>
            </div>
            <div>
              ➜ <span className="log-blue">Network:</span> use <code>--host</code> to expose
            </div>
            <div className="log-muted" style={{ marginTop: 6 }}>
              press h + enter to show help
            </div>
          </div>
        </div>
      )}

      {/* Debug Console View */}
      {activeTab === 'debug' && (
        <div className="terminal-panel-content">
          <div className="output-view">
            <div className="log-blue">Debugger listening on ws://127.0.0.1:9229/session</div>
            <div className="log-muted">Loaded React 19 fiber reconciler & GSAP ScrollTrigger timeline listeners.</div>
            <div className="log-green">Workspace verified and ready for interaction.</div>
          </div>
        </div>
      )}
    </section>
  );
}
