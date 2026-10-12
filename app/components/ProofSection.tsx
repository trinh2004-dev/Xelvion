import React from "react";
import Image from "next/image";
import { 
  ExternalLink, 
  ShieldCheck, 
  CheckCircle2, 
  ShoppingCart, 
  Film, 
  Server, 
  Cpu, 
  Database, 
  Layers, 
  Zap,
  Lock,
  Globe,
  FileCode2,
  Terminal
} from "lucide-react";

export function ProofSection() {
  return (
    <section id="proof" className="section section-dark">
      <div className="container">
        <div className="section-header text-center">
          <div className="badge-pill">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Auditable Proof &amp; Live Deployments</span>
          </div>
          <h2 className="section-title">
            Real Working Products. Live Production Domains.
          </h2>
          <p className="section-subtitle">
            We don&apos;t pitch mockups or unverified slides. Below are genuine, live-deployed web platforms 
            running in production right now at <strong>megamart24.tech</strong> and <strong>cinevn.me</strong>.
          </p>
        </div>

        {/* EVIDENCE ITEM 1: MEGAMART */}
        <div className="proof-card" id="megamart">
          <div className="proof-header">
            <div className="proof-title-group">
              <div className="product-icon-badge bg-indigo-500/10 text-indigo-400 border-indigo-500/20">
                <ShoppingCart className="w-6 h-6" />
              </div>
              <div>
                <div className="proof-tag-row">
                  <span className="proof-tag tag-verified">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Production Active (200 OK)
                  </span>
                  <span className="proof-tag">E-Commerce &amp; Flash Sales</span>
                  <span className="proof-tag">Next.js + NestJS + Redis</span>
                </div>
                <h3 className="proof-heading">MegaMart — High-Concurrency Retail Core (megamart24.tech)</h3>
              </div>
            </div>

            <div className="proof-actions">
              <a 
                href="https://megamart24.tech" 
                target="_blank" 
                rel="noreferrer" 
                className="btn btn-outline btn-small"
              >
                <Globe className="w-4 h-4 text-emerald-400" />
                <span>Visit https://megamart24.tech</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Browser frame preview */}
          <div className="browser-mockup">
            <div className="browser-chrome">
              <div className="browser-controls">
                <span className="browser-dot dot-red" />
                <span className="browser-dot dot-yellow" />
                <span className="browser-dot dot-green" />
              </div>
              <div className="browser-address-bar">
                <Lock className="w-3.5 h-3.5 text-emerald-400" />
                <span className="browser-url">https://megamart24.tech</span>
                <span className="browser-status-live">Live Production (Nginx + SSL)</span>
              </div>
            </div>

            <div className="browser-viewport">
              <Image 
                src="/images/megamart-real.png" 
                alt="MegaMart Real Live Website at https://megamart24.tech"
                width={1920}
                height={1080}
                className="proof-image"
                priority
              />
              <div className="viewport-watermark">
                <span>Verified Live Snapshot · https://megamart24.tech · Nginx 1.31 / Next.js Production</span>
              </div>
            </div>
          </div>

          {/* Technical breakdown */}
          <div className="proof-details-grid">
            <div className="spec-card">
              <div className="spec-icon text-indigo-400">
                <Layers className="w-5 h-5" />
              </div>
              <h4>Redis Flash-Sale Inventory Lock</h4>
              <p>
                In-memory reservation queue preventing race conditions and overselling during massive flash sales, 
                with automated TTL expiration and atomic rollback.
              </p>
              <div className="pill-list">
                <span className="tech-pill">Redis Distributed Locks</span>
                <span className="tech-pill">PostgreSQL Transactions</span>
                <span className="tech-pill">Prisma ORM</span>
              </div>
            </div>

            <div className="spec-card">
              <div className="spec-icon text-cyan-400">
                <Zap className="w-5 h-5" />
              </div>
              <h4>Interactive 3D Product Viewport</h4>
              <p>
                WebGL-based 3D model viewport enabling prospective shoppers to rotate and inspect 
                product ergonomics before checkout.
              </p>
              <div className="pill-list">
                <span className="tech-pill">Three.js / WebGL</span>
                <span className="tech-pill">Zustand Cart State</span>
                <span className="tech-pill">VNPAY &amp; Stripe Sandbox</span>
              </div>
            </div>

            <div className="spec-card">
              <div className="spec-icon text-purple-400">
                <Cpu className="w-5 h-5" />
              </div>
              <h4>Claude 3.5 Sonnet Integration</h4>
              <p>
                Server-side AI pipeline that drafts SEO-optimized product specifications, classifies variants, 
                and summarizes shopper feedback with sentiment scoring.
              </p>
              <div className="pill-list">
                <span className="tech-pill">Anthropic SDK</span>
                <span className="tech-pill">Multimodal Vision</span>
                <span className="tech-pill">Zero Data Retention</span>
              </div>
            </div>
          </div>
        </div>

        {/* EVIDENCE ITEM 2: CINEVN */}
        <div className="proof-card mt-12" id="cinevn">
          <div className="proof-header">
            <div className="proof-title-group">
              <div className="product-icon-badge bg-cyan-500/10 text-cyan-400 border-cyan-500/20">
                <Film className="w-6 h-6" />
              </div>
              <div>
                <div className="proof-tag-row">
                  <span className="proof-tag tag-verified">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Production Active (200 OK)
                  </span>
                  <span className="proof-tag">Streaming Engine</span>
                  <span className="proof-tag">HLS.js + Node.js + Caddy</span>
                </div>
                <h3 className="proof-heading">CineVN — Spatial Cinema &amp; Adaptive HLS Streaming (cinevn.me)</h3>
              </div>
            </div>

            <div className="proof-actions">
              <a 
                href="https://cinevn.me" 
                target="_blank" 
                rel="noreferrer" 
                className="btn btn-outline btn-small"
              >
                <Globe className="w-4 h-4 text-emerald-400" />
                <span>Visit https://cinevn.me</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Browser frame preview 1: Player Home */}
          <div className="browser-mockup">
            <div className="browser-chrome">
              <div className="browser-controls">
                <span className="browser-dot dot-red" />
                <span className="browser-dot dot-yellow" />
                <span className="browser-dot dot-green" />
              </div>
              <div className="browser-address-bar">
                <Lock className="w-3.5 h-3.5 text-emerald-400" />
                <span className="browser-url">https://cinevn.me</span>
                <span className="browser-status-live">Live Production (Caddy TLS + HTTP/3)</span>
              </div>
            </div>

            <div className="browser-viewport">
              <Image 
                src="/images/cinevn-real.png" 
                alt="CineVN Real Live Streaming Platform at https://cinevn.me"
                width={1920}
                height={1080}
                className="proof-image"
              />
              <div className="viewport-watermark">
                <span>Verified Live Snapshot · https://cinevn.me · Spatial Cinema 4K UI · Caddy Reverse Proxy</span>
              </div>
            </div>
          </div>

          {/* Browser frame preview 2: Movie Catalog */}
          <div className="browser-mockup">
            <div className="browser-chrome">
              <div className="browser-controls">
                <span className="browser-dot dot-red" />
                <span className="browser-dot dot-yellow" />
                <span className="browser-dot dot-green" />
              </div>
              <div className="browser-address-bar">
                <Lock className="w-3.5 h-3.5 text-emerald-400" />
                <span className="browser-url">https://cinevn.me/kham-pha?type=movie</span>
                <span className="browser-status-live">Dynamic Multi-Genre Filters</span>
              </div>
            </div>

            <div className="browser-viewport">
              <Image 
                src="/images/cinevn-catalog.png" 
                alt="CineVN Real Live Catalog and Filter Screen at https://cinevn.me/kham-pha"
                width={1920}
                height={1080}
                className="proof-image"
              />
              <div className="viewport-watermark">
                <span>Verified Catalog Snapshot · Multi-filter by Genre, Country, Year · High-performance Caching</span>
              </div>
            </div>
          </div>

          {/* Technical breakdown */}
          <div className="proof-details-grid">
            <div className="spec-card">
              <div className="spec-icon text-cyan-400">
                <Film className="w-5 h-5" />
              </div>
              <h4>Adaptive HLS &amp; Ambilight Glow</h4>
              <p>
                Multi-rendition HLS playback with real-time video canvas sampling that projects 
                an ambient backlight around the display matching on-screen color dynamics.
              </p>
              <div className="pill-list">
                <span className="tech-pill">HLS.js Core</span>
                <span className="tech-pill">Canvas Sampling</span>
                <span className="tech-pill">Hardware Acceleration</span>
              </div>
            </div>

            <div className="spec-card">
              <div className="spec-icon text-emerald-400">
                <Server className="w-5 h-5" />
              </div>
              <h4>Zero Copyright Infringement</h4>
              <p>
                Strict compliance architecture built exclusively for licensed open media and trailer analytics. 
                Full metadata integration with TMDB API.
              </p>
              <div className="pill-list">
                <span className="tech-pill">Open Media License</span>
                <span className="tech-pill">Strict Compliance</span>
                <span className="tech-pill">TMDB Metadata</span>
              </div>
            </div>

            <div className="spec-card">
              <div className="spec-icon text-purple-400">
                <Cpu className="w-5 h-5" />
              </div>
              <h4>Claude AI Context &amp; Plot Reasoning</h4>
              <p>
                Planned AI feature utilizing Claude&apos;s 200K token context to provide timestamp-calibrated 
                character explanations and spoiler-free plot recaps.
              </p>
              <div className="pill-list">
                <span className="tech-pill">Claude 3.5 Haiku &amp; Sonnet</span>
                <span className="tech-pill">Spoiler-Free Prompts</span>
                <span className="tech-pill">Dialogue Extraction</span>
              </div>
            </div>
          </div>
        </div>

        {/* ARCHITECTURE & DEVOPS PROOF BLUEPRINT */}
        <div className="arch-blueprint-card mt-12">
          <div className="arch-blueprint-header">
            <div>
              <span className="proof-tag tag-verified">
                <Terminal className="w-3.5 h-3.5" /> DevOps &amp; Production Architecture
              </span>
              <h3 className="text-xl font-bold mt-2">
                Audited DevOps Specifications &amp; Docker Production Blueprints
              </h3>
              <p className="text-sm text-slate-400 mt-1">
                Engineered with strict resource budgeting (Ubuntu 24.04 LTS, 1 vCPU, 4GB RAM, Caddy automated TLS, 
                isolated Docker containers, and memory limits to prevent OOM errors).
              </p>
            </div>
            <div className="arch-badge">
              <span>Ubuntu 24.04 LTS</span>
              <span>Docker Compose</span>
              <span>Caddy 2 TLS</span>
            </div>
          </div>

          <div className="arch-docs-grid">
            <div className="arch-doc-item">
              <div className="arch-doc-meta">
                <FileCode2 className="w-4 h-4 text-cyan-400" />
                <span>Architecture Plan: Routing, Caddy Reverse Proxy, Upstream API</span>
              </div>
              <div className="arch-image-wrap">
                <Image 
                  src="/images/cineon-arch-spec.png" 
                  alt="Official Cineon / CineVN DevOps Architecture Blueprint"
                  width={1075}
                  height={1521}
                  className="arch-image"
                />
              </div>
            </div>

            <div className="arch-doc-item">
              <div className="arch-doc-meta">
                <FileCode2 className="w-4 h-4 text-emerald-400" />
                <span>Resource Allocation: Container Memory Limits &amp; OOM Defense</span>
              </div>
              <div className="arch-image-wrap">
                <Image 
                  src="/images/cineon-infra-spec.png" 
                  alt="Official Container Resource Allocation & Memory Limits"
                  width={1075}
                  height={1521}
                  className="arch-image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
