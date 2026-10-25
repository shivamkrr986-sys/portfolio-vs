import React from 'react';
import CodeEditor from './CodeEditor';
import AboutPreview from './previews/AboutPreview';
import SkillsPreview from './previews/SkillsPreview';
import ExperiencePreview from './previews/ExperiencePreview';
import ProjectsPreview from './previews/ProjectsPreview';
import AchievementsPreview from './previews/AchievementsPreview';
import ContactPreview from './previews/ContactPreview';
import ReadmePreview from './previews/ReadmePreview';

export default function EditorView({
  activeFile,
  viewMode,
  showMinimap,
  showLineNumbers,
  onNavigateFile
}) {
  if (!activeFile) {
    return <CodeEditor file={null} />;
  }

  const renderPreview = () => {
    switch (activeFile.previewType) {
      case 'about':
        return <AboutPreview onNavigateFile={onNavigateFile} />;
      case 'skills':
        return <SkillsPreview />;
      case 'experience':
        return <ExperiencePreview />;
      case 'projects':
        return <ProjectsPreview />;
      case 'achievements':
        return <AchievementsPreview />;
      case 'contact':
        return <ContactPreview />;
      case 'readme':
        return <ReadmePreview onNavigateFile={onNavigateFile} />;
      default:
        return <AboutPreview onNavigateFile={onNavigateFile} />;
    }
  };

  if (viewMode === 'code') {
    return (
      <div className="vscode-editor-main">
        <CodeEditor
          file={activeFile}
          showMinimap={showMinimap}
          showLineNumbers={showLineNumbers}
        />
      </div>
    );
  }

  if (viewMode === 'preview') {
    return (
      <div className="vscode-editor-main">
        {renderPreview()}
      </div>
    );
  }

  // Split View: Code on Left, Preview on Right
  return (
    <div className="vscode-editor-main" style={{ display: 'flex' }}>
      <div style={{ flex: 1, borderRight: '1px solid var(--border-color)', display: 'flex', overflow: 'hidden' }}>
        <CodeEditor
          file={activeFile}
          showMinimap={false}
          showLineNumbers={showLineNumbers}
        />
      </div>
      <div style={{ flex: 1, display: 'flex', overflow: 'hidden' }}>
        {renderPreview()}
      </div>
    </div>
  );
}
