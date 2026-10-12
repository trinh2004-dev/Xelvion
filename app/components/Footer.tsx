import React from "react";
import { Sparkles, ArrowUp, Globe, Shield } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand-col">
          <div className="brand">
            <div className="brand-mark">
              <span>X</span>
            </div>
            <span className="brand-title">XELVION</span>
          </div>
          <p className="footer-desc">
            Independent software development laboratory building production-grade web platforms 
            and AI integrations.
          </p>
          <div className="footer-legal">
            <span>&copy; {currentYear} Xelvion Inc. · xelvion.world</span>
          </div>
        </div>

        <div className="footer-links-col">
          <div className="footer-link-group">
            <h5>Live Products</h5>
            <a href="https://megamart24.tech" target="_blank" rel="noreferrer">
              MegaMart (megamart24.tech)
            </a>
            <a href="https://cinevn.me" target="_blank" rel="noreferrer">
              CineVN (cinevn.me)
            </a>
            <a href="#demo">Live Demo Reel</a>
          </div>

          <div className="footer-link-group">
            <h5>Technology</h5>
            <a href="#proof">Verified Live Proof</a>
            <a href="#claude-ai">Claude 3.5 Integration</a>
            <a href="#roadmap">Milestone Roadmap</a>
          </div>

          <div className="footer-link-group">
            <h5>Evaluation</h5>
            <a href="https://console.anthropic.com" target="_blank" rel="noreferrer">
              Claude Console
            </a>
            <a href="mailto:anhuynh@xelvion.world">
              anhuynh@xelvion.world
            </a>
            <a href="#top" className="flex items-center gap-1">
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
