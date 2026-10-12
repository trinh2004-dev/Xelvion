import React from "react";
import { Sparkles, Terminal, Mail, ExternalLink, ArrowRight } from "lucide-react";

export function Navbar() {
  return (
    <header className="header">
      <div className="container header-inner">
        <a className="brand" href="#top" title="Xelvion — Home">
          <div className="brand-mark">
            <img
              src="/images/xelvion-mark.svg"
              alt="Xelvion Nexus Logo Mark"
              width={38}
              height={38}
              className="brand-mark-img"
            />
          </div>
          <div className="brand-text">
            <span className="brand-title">XELVION</span>
            <span className="brand-badge">Startup Program Applicant</span>
          </div>
        </a>

        <nav className="nav">
          <a href="#proof">Live Products</a>
          <a href="#demo">Video Demo</a>
          <a href="#claude-ai">Claude AI</a>
          <a href="#roadmap">Roadmap</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="header-actions">
          <a className="btn btn-outline btn-small" href="#proof">
            <span>View Live Proof</span>
          </a>
          <a className="btn btn-primary btn-small" href="#contact">
            <Mail className="w-4 h-4" />
            <span>anhuynh@xelvion.world</span>
          </a>
        </div>
      </div>
    </header>
  );
}
