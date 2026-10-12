import React from "react";
import { 
  Mail, 
  Send, 
  ExternalLink, 
  ShieldCheck, 
  Clock, 
  Globe, 
  FileCheck, 
  ArrowRight,
  MessageSquare,
  Sparkles
} from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="section section-soft">
      <div className="container">
        <div className="section-header text-center">
          <div className="badge-pill">
            <Mail className="w-4 h-4 text-purple-400" />
            <span>Direct Founder Communication</span>
          </div>
          <h2 className="section-title">
            Connect with Xelvion Leadership
          </h2>
          <p className="section-subtitle">
            Whether you are reviewing our application for a startup accelerator program, evaluating our live platforms 
            at <strong>megamart24.tech</strong> and <strong>cinevn.me</strong>, or exploring strategic collaboration.
          </p>
        </div>

        <div className="contact-grid mt-10">
          {/* Left card: Official Mailbox Info */}
          <div className="contact-info-card">
            <div className="contact-badge-header">
              <span className="dot dot-green" />
              <span>Official Corporate Domain Active</span>
            </div>

            <h3 className="contact-info-title">
              Founder Mailbox: anhuynh@xelvion.world
            </h3>
            
            <p className="contact-info-desc">
              This mailbox is monitored by founder An Huynh. We prioritize correspondence from 
              startup accelerator committees (Claude Startups, Y Combinator, Techstars), cloud credit evaluators, 
              and technical partners.
            </p>

            <div className="contact-channel-list">
              <a 
                href="mailto:anhuynh@xelvion.world?subject=Startup%20Program%20Review%20-%20Xelvion&body=Hello%20An%2C%0A%0AWe%20are%20reviewing%20your%20application%20for%20...%0A"
                className="channel-link"
              >
                <div className="channel-icon bg-indigo-500/10 text-indigo-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="channel-label">Founder Email</div>
                  <div className="channel-value">anhuynh@xelvion.world</div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-500 ml-auto" />
              </a>

              <div className="channel-link">
                <div className="channel-icon bg-cyan-500/10 text-cyan-400">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <div className="channel-label">Official Domain</div>
                  <div className="channel-value">https://xelvion.world</div>
                </div>
              </div>

              <div className="channel-link">
                <div className="channel-icon bg-emerald-500/10 text-emerald-400">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="channel-label">Response Time</div>
                  <div className="channel-value">Within 24 business hours</div>
                </div>
              </div>
            </div>

            <div className="privacy-notice mt-6">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>
                Zero trackers, third-party analytics, or promotional cookies on this site.
              </span>
            </div>
          </div>

          {/* Right card: Program-Specific Direct Action Prompts */}
          <div className="contact-action-card">
            <h4 className="text-lg font-bold text-white mb-2">
              Select Your Inquiry Type
            </h4>
            <p className="text-sm text-slate-400 mb-6">
              Click a template to open your email client pre-populated with relevant context:
            </p>

            <div className="action-templates-list">
              <a
                href="mailto:anhuynh@xelvion.world?subject=%5BClaude%20Startups%20Evaluation%5D%20Xelvion%20Application&body=Hello%20An%20Huynh%2C%0A%0AWe%20have%20reviewed%20your%20Claude%20Startups%20application%20and%20would%20like%20to%20follow%20up%20on%3A%0A-%20...%0A"
                className="action-template-btn"
              >
                <div className="action-template-icon text-purple-400">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <div className="action-template-title">Claude Startups / Accelerator Review</div>
                  <div className="action-template-sub">Follow-up on credits, API access, or interview</div>
                </div>
                <Send className="w-4 h-4 text-slate-400 ml-auto shrink-0" />
              </a>

              <a
                href="mailto:anhuynh@xelvion.world?subject=%5BCloud%20Credits%20Evaluation%5D%20AWS%20Activate%20%2F%20Google%20Cloud&body=Hello%20An%2C%0A%0ARegarding%20your%20cloud%20startup%20credits%20application%20for%20Xelvion%3A%0A"
                className="action-template-btn"
              >
                <div className="action-template-icon text-cyan-400">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <div className="action-template-title">Cloud Credits &amp; Infrastructure Support</div>
                  <div className="action-template-sub">AWS Activate, Google for Startups, NVIDIA Inception</div>
                </div>
                <Send className="w-4 h-4 text-slate-400 ml-auto shrink-0" />
              </a>

              <a
                href="mailto:anhuynh@xelvion.world?subject=%5BInvestor%20Inquiry%5D%20Xelvion%20Pre-Seed&body=Hi%20An%2C%0A%0AI%20am%20interested%20in%20learning%20more%20about%20Xelvion%2C%20MegaMart%2C%20and%20CineVN.%0A"
                className="action-template-btn"
              >
                <div className="action-template-icon text-emerald-400">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <div className="action-template-title">Angel Investor &amp; Venture Inquiries</div>
                  <div className="action-template-sub">Discuss traction, architecture, and future roadmap</div>
                </div>
                <Send className="w-4 h-4 text-slate-400 ml-auto shrink-0" />
              </a>
            </div>

            <div className="direct-mailto-cta mt-6">
              <a
                href="mailto:anhuynh@xelvion.world?subject=Inquiry%20from%20xelvion.world"
                className="btn btn-primary w-full"
              >
                <Mail className="w-4 h-4" />
                <span>Open Mail to anhuynh@xelvion.world</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
