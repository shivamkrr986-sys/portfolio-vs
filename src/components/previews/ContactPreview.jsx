import React, { useState } from 'react';
import { Mail, Copy, Check, MessageSquare, Send, AlertCircle, Sparkles, Phone } from 'lucide-react';
import { GithubIcon, LinkedinIcon, WhatsappIcon } from '../SocialIcons';
import { portfolioConfig } from '../../config/portfolio';

export default function ContactPreview() {
  const { developer } = portfolioConfig;
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(developer.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setFormError('Please fill out all required fields before submitting.');
      return;
    }
    setFormError('');
    setFormSubmitted(true);
  };

  return (
    <div className="preview-container">
      <div className="preview-header">
        <div className="preview-tag">
          <Sparkles size={12} />
          <span>src/contact.js &gt; export const contactDetails</span>
        </div>
        <h1 className="preview-title">Get in Touch</h1>
        <p className="preview-subtitle">
          Inquiries for Frontend engineering roles, responsive development projects, or animation consults.
        </p>
      </div>

      <div className="contact-layout">
        {/* Contact Form Panel */}
        <div className="contact-form-panel">
          <div style={{ fontSize: 15, fontWeight: 700, color: 'var(--text-bright)' }}>
            Send an Inquiry
          </div>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <div className="form-group">
              <label className="form-label" htmlFor="contact-name">Your Name *</label>
              <input
                id="contact-name"
                type="text"
                className="form-input"
                placeholder="e.g. Rahul Sharma"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="contact-email">Email Address *</label>
              <input
                id="contact-email"
                type="email"
                className="form-input"
                placeholder="e.g. rahul@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="contact-message">Message *</label>
              <textarea
                id="contact-message"
                className="form-textarea"
                placeholder="Discuss your Frontend requirements, role details, or questions..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>

            {formError && (
              <div style={{ color: 'var(--error-red)', fontSize: 12, display: 'flex', alignItems: 'center', gap: 6 }}>
                <AlertCircle size={14} />
                <span>{formError}</span>
              </div>
            )}

            {formSubmitted ? (
              <div className="contact-notice-box" style={{ borderColor: 'var(--accent-blue)', background: 'rgba(0, 122, 204, 0.12)' }}>
                <div style={{ fontWeight: 600, color: 'var(--accent-light)', marginBottom: 4 }}>
                  Form input logged locally!
                </div>
                <div style={{ color: 'var(--text-primary)', fontSize: 11.5 }}>
                  Notice: As this is a client-side portfolio without an active backend server, message delivery requires a connected email API (e.g. Formspree/PHPMailer). Please reach out directly using the <strong>Copy Email</strong> button or LinkedIn below!
                </div>
              </div>
            ) : (
              <div className="contact-notice-box">
                <AlertCircle size={14} style={{ display: 'inline', marginRight: 4, verticalAlign: 'text-bottom' }} />
                <span>Notice: Automated email dispatch requires an API integration. You can click <strong>Copy Email</strong> for immediate contact.</span>
              </div>
            )}

            <button type="submit" className="btn-primary" style={{ justifyContent: 'center' }}>
              <Send size={14} />
              <span>Submit Inquiry</span>
            </button>
          </form>
        </div>

        {/* Channels Panel */}
        <div className="contact-channels-panel">
          {/* Email Channel */}
          <div className="channel-card">
            <div className="channel-info">
              <div className="channel-icon">
                <Mail size={18} />
              </div>
              <div>
                <div className="channel-name">Primary Email</div>
                <div className="channel-val">{developer.email}</div>
              </div>
            </div>
            <button className="btn-secondary" onClick={handleCopyEmail} style={{ padding: '6px 10px', fontSize: 11 }}>
              {copied ? <Check size={13} color="var(--terminal-green)" /> : <Copy size={13} />}
              <span>{copied ? "Copied" : "Copy"}</span>
            </button>
          </div>

          {/* WhatsApp Channel */}
          <div className="channel-card">
            <div className="channel-info">
              <div className="channel-icon" style={{ color: '#25D366' }}>
                <WhatsappIcon size={18} color="#25D366" />
              </div>
              <div>
                <div className="channel-name">WhatsApp / Direct</div>
                <div className="channel-val">{developer.phone || "Configurable"}</div>
              </div>
            </div>
            {developer.whatsapp ? (
              <a href={developer.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ padding: '6px 10px', fontSize: 11 }}>
                <span>Chat</span>
              </a>
            ) : (
              <span style={{ fontSize: 10, color: 'var(--text-muted)' }}>Configure in portfolio.js</span>
            )}
          </div>

          {/* LinkedIn Channel */}
          <div className="channel-card">
            <div className="channel-info">
              <div className="channel-icon" style={{ color: '#0077b5' }}>
                <LinkedinIcon size={18} color="#0077b5" />
              </div>
              <div>
                <div className="channel-name">LinkedIn Profile</div>
                <div className="channel-val">Professional network & recommendations</div>
              </div>
            </div>
            {developer.linkedin ? (
              <a href={developer.linkedin} target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ padding: '6px 10px', fontSize: 11 }}>
                <span>Connect</span>
              </a>
            ) : (
              <span style={{ fontSize: 10, color: 'var(--text-muted)' }}>Configure in portfolio.js</span>
            )}
          </div>

          {/* GitHub Channel */}
          <div className="channel-card">
            <div className="channel-info">
              <div className="channel-icon">
                <GithubIcon size={18} />
              </div>
              <div>
                <div className="channel-name">GitHub Profile</div>
                <div className="channel-val">Code repositories & open-source work</div>
              </div>
            </div>
            {developer.github ? (
              <a href={developer.github} target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ padding: '6px 10px', fontSize: 11 }}>
                <span>Explore</span>
              </a>
            ) : (
              <span style={{ fontSize: 10, color: 'var(--text-muted)' }}>Configure in portfolio.js</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
