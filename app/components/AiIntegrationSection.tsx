import React from "react";
import { 
  Cpu, 
  Sparkles, 
  ShieldCheck, 
  Layers, 
  Terminal, 
  CheckCircle2, 
  ArrowRight,
  Database,
  Lock,
  ExternalLink
} from "lucide-react";

export function AiIntegrationSection() {
  return (
    <section id="claude-ai" className="section section-soft">
      <div className="container">
        <div className="section-header text-center">
          <div className="badge-pill">
            <Cpu className="w-4 h-4 text-purple-400" />
            <span>Anthropic Claude API Strategic Integration</span>
          </div>
          <h2 className="section-title">
            Harnessing Claude 3.5 for Reasoning &amp; Multimodal Workflows
          </h2>
          <p className="section-subtitle">
            Rather than generic chatbots, Xelvion integrates Anthropic Claude models directly into 
            mission-critical server pipelines where deep reasoning, long-context comprehension, and strict safety matter.
          </p>
        </div>

        {/* 2-column feature breakdown */}
        <div className="grid2 mt-10">
          {/* Card 1: MegaMart AI */}
          <div className="ai-feature-card">
            <div className="ai-card-badge">
              <span className="dot dot-purple" />
              <span>MegaMart E-Commerce Core</span>
            </div>
            <h3>Multimodal Catalog Enrichment &amp; Review Synthesis</h3>
            <p className="text-slate-400 mb-4">
              Leveraging Claude 3.5 Sonnet&apos;s multimodal vision and structured output extraction 
              to automate tedious retail catalog operations.
            </p>

            <ul className="feature-check-list">
              <li>
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>
                  <strong>Automated Product Attribute Extraction:</strong> Analyzes raw merchant photos to detect materials, cut, dimensions, and color palettes automatically.
                </span>
              </li>
              <li>
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>
                  <strong>Review Sentiment Synthesis:</strong> Compiles hundreds of customer reviews into concise, spoiler-free buying summaries with genuine pros and cons.
                </span>
              </li>
              <li>
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>
                  <strong>High-Concurrency Rate Limiting:</strong> Queued via Redis BullMQ with retry logic and fallback cache to minimize latency and manage token quotas.
                </span>
              </li>
            </ul>

            {/* Code snippet showing API design */}
            <div className="code-preview-box">
              <div className="code-header">
                <span className="code-lang">NestJS Server-Side Pipeline</span>
                <span className="code-model">claude-3-5-sonnet-20241022</span>
              </div>
              <pre className="code-content">
{`const response = await anthropic.messages.create({
  model: 'claude-3-5-sonnet-20241022',
  max_tokens: 1024,
  messages: [{
    role: 'user',
    content: [
      { type: 'image', source: { type: 'base64', media_type: 'image/jpeg', data: imageBase64 } },
      { type: 'text', text: 'Extract SKU attributes into validated JSON format: title, category, tags, specs.' }
    ]
  }]
});`}
              </pre>
            </div>
          </div>

          {/* Card 2: CineVN AI */}
          <div className="ai-feature-card">
            <div className="ai-card-badge">
              <span className="dot dot-cyan" />
              <span>CineVN Streaming Engine</span>
            </div>
            <h3>Conversational Plot Companion &amp; Scene Understanding</h3>
            <p className="text-slate-400 mb-4">
              Taking advantage of Claude&apos;s 200K token context window to parse dialogue scripts, 
              synopses, and provide interactive viewer Q&amp;A.
            </p>

            <ul className="feature-check-list">
              <li>
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>
                  <strong>Spoiler-Free Plot Explanations:</strong> Context-aware reasoning answers &ldquo;Who was that character introduced in scene 2?&rdquo; calibrated to the viewer&apos;s current timestamp.
                </span>
              </li>
              <li>
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>
                  <strong>Contextual Subtitle Nuance Translation:</strong> Resolves idioms and cultural humor that standard machine translation misses in trailer subtitles.
                </span>
              </li>
              <li>
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>
                  <strong>Content Safety &amp; Tagging:</strong> Automated verification of open-media licenses and content safety classifications.
                </span>
              </li>
            </ul>

            {/* Code snippet */}
            <div className="code-preview-box">
              <div className="code-header">
                <span className="code-lang">Streaming Context Agent</span>
                <span className="code-model">claude-3-5-haiku-20241022</span>
              </div>
              <pre className="code-content">
{`// Timestamp-bounded Q&A without future plot spoilers
const explanation = await anthropic.messages.create({
  model: 'claude-3-5-haiku-20241022',
  system: 'You are CineAI. Answer viewer questions strictly using facts up to playback timestamp T. Never reveal future events.',
  messages: [{ role: 'user', content: queryWithTimestampContext }]
});`}
              </pre>
            </div>
          </div>
        </div>

        {/* Safety & Data Governance Commitment */}
        <div className="ai-trust-banner mt-10">
          <div className="trust-icon bg-emerald-500/10 text-emerald-400">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div className="trust-content">
            <h4>Strict Enterprise Privacy &amp; Data Governance</h4>
            <p>
              Xelvion enforces zero customer data retention for AI training. All Claude API requests are transmitted 
              via secure HTTPS with short-lived tokens, isolated server-side proxies, and strict prompt sanitization. 
              No private shopper or viewer data is ever logged or exposed to third parties.
            </p>
          </div>
          <div className="trust-cta">
            <a 
              href="https://console.anthropic.com" 
              target="_blank" 
              rel="noreferrer" 
              className="btn btn-outline btn-small"
            >
              <span>Claude Console</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
