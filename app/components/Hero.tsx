import React from "react";
import { 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  Cpu, 
  Server, 
  Layers, 
  ExternalLink,
  Play,
  Globe
} from "lucide-react";

export function Hero() {
  return (
    <section className="hero">
      <div className="hero-background-glow" aria-hidden="true" />
      
      <div className="container hero-inner">
        <div className="pill-badge">
          <span className="pill-dot" aria-hidden="true" />
          <span className="pill-text">Claude Startups &amp; Accelerator Evaluation Candidate</span>
        </div>

        <h1 className="hero-headline">
          Engineering Production-Grade Web Software &amp; Intelligent AI Architectures.
        </h1>

        <p className="hero-subheading">
          Xelvion develops scalable, fullstack web products in live production. 
          Operating <strong>MegaMart</strong> (e-commerce core at <code>megamart24.tech</code>) and <strong>CineVN</strong> (adaptive HLS streaming engine at <code>cinevn.me</code>) — 
          pairing microservices architecture with Anthropic Claude AI reasoning.
        </p>

        <div className="hero-cta-group">
          <a className="btn btn-primary" href="#proof">
            <span>Explore Live Products</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <a className="btn btn-ghost" href="#demo">
            <Play className="w-4 h-4 text-cyan-400" />
            <span>Watch Live Demo Video</span>
          </a>
          <a className="btn btn-outline" href="#claude-ai">
            <Cpu className="w-4 h-4 text-purple-400" />
            <span>Claude API Blueprint</span>
          </a>
        </div>

        {/* Live metrics / credibility ribbon */}
        <div className="hero-ribbon">
          <div className="ribbon-card">
            <div className="ribbon-icon">
              <Globe className="w-5 h-5 text-indigo-400" />
            </div>
            <div>
              <div className="ribbon-num">megamart24.tech</div>
              <div className="ribbon-label">Live Production E-Commerce</div>
            </div>
          </div>

          <div className="ribbon-divider" />

          <div className="ribbon-card">
            <div className="ribbon-icon">
              <Globe className="w-5 h-5 text-cyan-400" />
            </div>
            <div>
              <div className="ribbon-num">cinevn.me</div>
              <div className="ribbon-label">Live HLS 4K Streaming Engine</div>
            </div>
          </div>

          <div className="ribbon-divider" />

          <div className="ribbon-card">
            <div className="ribbon-icon">
              <Cpu className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <div className="ribbon-num">Anthropic Claude AI</div>
              <div className="ribbon-label">Multimodal Vision &amp; Reasoning</div>
            </div>
          </div>

          <div className="ribbon-divider" />

          <div className="ribbon-card">
            <div className="ribbon-icon">
              <ShieldCheck className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <div className="ribbon-num">Zero Data Retention</div>
              <div className="ribbon-label">Enterprise-grade safety &amp; privacy</div>
            </div>
          </div>
        </div>

        <div className="hero-meta">
          <span>Official Domain: <code>https://xelvion.world</code></span>
          <span className="dot-sep">·</span>
          <span>Founder Inquiries: <code>anhuynh@xelvion.world</code></span>
        </div>
      </div>
    </section>
  );
}
