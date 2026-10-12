import React from "react";
import { 
  CheckCircle2, 
  CircleDot, 
  Clock, 
  Calendar, 
  ArrowRight, 
  Rocket, 
  ShieldCheck, 
  Cpu, 
  Server, 
  ExternalLink 
} from "lucide-react";

export function RoadmapSection() {
  return (
    <section id="roadmap" className="section section-dark">
      <div className="container">
        <div className="section-header text-center">
          <div className="badge-pill">
            <Rocket className="w-4 h-4 text-cyan-400" />
            <span>Execution Milestones &amp; Program Alignment</span>
          </div>
          <h2 className="section-title">
            Product Roadmap &amp; Startup Evaluation Milestones
          </h2>
          <p className="section-subtitle">
            A transparent engineering trajectory moving from verified live products to production 
            Claude AI integration and commercial expansion.
          </p>
        </div>

        {/* 4-Phase Timeline Grid */}
        <div className="timeline-grid mt-10">
          {/* Phase 1 */}
          <div className="timeline-card status-completed">
            <div className="timeline-badge">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Phase 1 · Completed</span>
            </div>
            <h4>Production Launch &amp; Domain Go-Live</h4>
            <p className="timeline-desc">
              Successfully launched live production builds for MegaMart (<code>megamart24.tech</code>) 
              and CineVN (<code>cinevn.me</code>). Implemented Caddy TLS, Nginx load balancing, and Redis caching.
            </p>
            <ul className="timeline-list">
              <li>
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Live at https://megamart24.tech (Next.js + NestJS)</span>
              </li>
              <li>
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Live at https://cinevn.me (HLS.js + Caddy HTTPS)</span>
              </li>
              <li>
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Audited Ubuntu 24.04 LTS Docker infrastructure</span>
              </li>
            </ul>
          </div>

          {/* Phase 2 */}
          <div className="timeline-card status-current">
            <div className="timeline-badge badge-current">
              <CircleDot className="w-4 h-4 text-cyan-400 animate-pulse" />
              <span>Phase 2 · Active Now</span>
            </div>
            <h4>Accelerator Reviews &amp; Claude AI Testing</h4>
            <p className="timeline-desc">
              Submitting verified applications to Claude Startups (Anthropic), AWS Activate, and leading accelerators. 
              Benchmarking Claude 3.5 API latency on staging endpoints.
            </p>
            <ul className="timeline-list">
              <li>
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>Submission to Claude Startups (Anthropic)</span>
              </li>
              <li>
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>Official mailbox verification at anhuynh@xelvion.world</span>
              </li>
              <li>
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>AWS Activate &amp; Google Cloud for Startups applications</span>
              </li>
            </ul>
          </div>

          {/* Phase 3 */}
          <div className="timeline-card">
            <div className="timeline-badge badge-upcoming">
              <Clock className="w-4 h-4 text-slate-400" />
              <span>Phase 3 · Q4 2026</span>
            </div>
            <h4>Claude API Production Pipelines</h4>
            <p className="timeline-desc">
              Deploying production Anthropic SDK endpoints. Launching multimodal catalog auto-tagging 
              for MegaMart and spoiler-free plot reasoning for CineVN.
            </p>
            <ul className="timeline-list">
              <li>
                <CircleDot className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                <span>Claude 3.5 Sonnet Vision catalog enrichment</span>
              </li>
              <li>
                <CircleDot className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                <span>Claude 3.5 Haiku conversational plot companion</span>
              </li>
              <li>
                <CircleDot className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                <span>Private alpha testing with 10 pilot merchants</span>
              </li>
            </ul>
          </div>

          {/* Phase 4 */}
          <div className="timeline-card">
            <div className="timeline-badge badge-upcoming">
              <Calendar className="w-4 h-4 text-slate-400" />
              <span>Phase 4 · Q1 2027</span>
            </div>
            <h4>Commercial Scaling &amp; Pre-Seed Round</h4>
            <p className="timeline-desc">
              Expanding merchant ecosystem, activating live Stripe/VNPAY production payments, 
              and opening pre-seed funding round.
            </p>
            <ul className="timeline-list">
              <li>
                <CircleDot className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                <span>Production payment gateway go-live</span>
              </li>
              <li>
                <CircleDot className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                <span>Multi-tenant merchant SaaS management</span>
              </li>
              <li>
                <CircleDot className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                <span>Pre-seed fundraising with strategic angels</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Application Criteria Box */}
        <div className="program-criteria-card mt-12">
          <div className="criteria-content">
            <div className="criteria-header">
              <ShieldCheck className="w-6 h-6 text-emerald-400" />
              <div>
                <h3 className="text-lg font-bold">Information for Startup Program Reviewers</h3>
                <p className="text-sm text-slate-400">
                  Verification summary and official corporate credentials.
                </p>
              </div>
            </div>

            <div className="criteria-grid mt-6">
              <div className="criteria-item">
                <span className="criteria-title">Corporate Entity &amp; Domain</span>
                <span className="criteria-val">xelvion.world (Active)</span>
              </div>
              <div className="criteria-item">
                <span className="criteria-title">Founder Contact</span>
                <span className="criteria-val">anhuynh@xelvion.world</span>
              </div>
              <div className="criteria-item">
                <span className="criteria-title">Live Production Products</span>
                <span className="criteria-val">megamart24.tech &amp; cinevn.me</span>
              </div>
              <div className="criteria-item">
                <span className="criteria-title">AI Alignment</span>
                <span className="criteria-val">Anthropic Claude 3.5 Sonnet &amp; Haiku</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
