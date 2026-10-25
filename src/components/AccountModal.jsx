import React, { useState } from 'react';
import { X, User, MapPin, Briefcase, GraduationCap, Mail, Copy, Check, ExternalLink } from 'lucide-react';
import { portfolioConfig } from '../config/portfolio';

export default function AccountModal({ isOpen, onClose, onNavigateFile }) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioConfig.developer.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="palette-backdrop" onClick={onClose}>
      <div 
        className="palette-modal" 
        style={{ maxWidth: 440 }}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-label="Account Profile"
      >
        <div className="palette-input-box" style={{ justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontWeight: 600, color: 'var(--text-bright)' }}>
            <User size={16} />
            <span>Developer Account</span>
          </div>
          <button onClick={onClose} className="sidebar-action-btn" aria-label="Close Profile">
            <X size={16} />
          </button>
        </div>

        <div style={{ padding: 20, display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <div style={{
              width: 52,
              height: 52,
              borderRadius: '50%',
              backgroundColor: 'var(--accent-blue)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              fontSize: 20,
              fontWeight: 700,
              boxShadow: '0 4px 12px rgba(0, 122, 204, 0.4)'
            }}>
              SK
            </div>
            <div>
              <div style={{ fontSize: 17, fontWeight: 700, color: 'var(--text-bright)' }}>
                {portfolioConfig.developer.name}
              </div>
              <div style={{ fontSize: 13, color: 'var(--accent-light)' }}>
                {portfolioConfig.developer.role}
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, background: 'var(--bg-input)', padding: 12, borderRadius: 3, fontSize: 12.5 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--text-primary)' }}>
              <Briefcase size={14} color="var(--text-secondary)" />
              <span>Current: <strong>{portfolioConfig.developer.company}</strong> ({portfolioConfig.developer.experience})</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--text-primary)' }}>
              <GraduationCap size={14} color="var(--text-secondary)" />
              <span>{portfolioConfig.developer.education}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--text-primary)' }}>
              <MapPin size={14} color="var(--text-secondary)" />
              <span>{portfolioConfig.developer.location}</span>
            </div>
          </div>

          <div style={{ display: 'flex', gap: 8 }}>
            <button
              className="btn-primary"
              style={{ flex: 1, justifyContent: 'center' }}
              onClick={handleCopyEmail}
            >
              {copied ? <Check size={14} /> : <Copy size={14} />}
              <span>{copied ? "Email Copied!" : "Copy Email"}</span>
            </button>
            <button
              className="btn-secondary"
              style={{ flex: 1, justifyContent: 'center' }}
              onClick={() => {
                onNavigateFile('contact.js');
                onClose();
              }}
            >
              <Mail size={14} />
              <span>Contact Page</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
