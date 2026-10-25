import React from 'react';
import { FileCode, FileText, FileJson, Image, File } from 'lucide-react';

export default function FileIcon({ type, size = 15, className = '' }) {
  switch (type) {
    case 'js':
    case 'javascript':
      return (
        <span style={{ color: '#f7df1e', display: 'inline-flex', alignItems: 'center' }} className={className}>
          <FileCode size={size} />
        </span>
      );
    case 'json':
      return (
        <span style={{ color: '#cb9a36', display: 'inline-flex', alignItems: 'center' }} className={className}>
          <FileJson size={size} />
        </span>
      );
    case 'md':
    case 'markdown':
      return (
        <span style={{ color: '#4fc1ff', display: 'inline-flex', alignItems: 'center' }} className={className}>
          <FileText size={size} />
        </span>
      );
    case 'svg':
    case 'xml':
      return (
        <span style={{ color: '#e37933', display: 'inline-flex', alignItems: 'center' }} className={className}>
          <Image size={size} />
        </span>
      );
    default:
      return (
        <span style={{ color: '#cccccc', display: 'inline-flex', alignItems: 'center' }} className={className}>
          <File size={size} />
        </span>
      );
  }
}
