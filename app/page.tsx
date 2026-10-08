export default function Page() {
  return (
    <>
      <header className="header">
        <div className="container header-inner">
          <a className="brand" href="#top">
            <span className="brand-mark">X</span>
            <span>xelvion.world</span>
          </a>
          <nav className="nav">
            <a href="#about">About</a>
            <a href="#product">Product</a>
            <a href="#technology">Technology</a>
            <a href="#contact">Contact</a>
          </nav>
          <a className="btn btn-primary btn-small" href="#contact">
            Get in touch
          </a>
        </div>
      </header>

      <main id="top">
        {/* HERO */}
        <section className="hero">
          <div className="container hero-inner">
            <span className="pill">
              <span className="pill-dot" aria-hidden="true" /> In development
            </span>
            <h1>Building useful technology.</h1>
            <p className="lead">
              We are developing software and AI-powered products to solve
              practical problems.
            </p>
            <div className="hero-cta">
              <a className="btn btn-primary" href="#contact">
                Contact us →
              </a>
              <a className="btn btn-ghost" href="#product">
                What we&apos;re building
              </a>
            </div>
            <div className="hero-meta">
              Startup website preview · live at <code>xelvion.world</code>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="section">
          <div className="container">
            <p className="kicker">About</p>
            <h2 className="h2">A small team focused on practical problems.</h2>
            <p className="sub">
              Xelvion is an early-stage software startup. We are building and
              learning quickly, starting with a simple website and iterating
              toward useful AI-powered tools.
            </p>

            <div className="grid2">
              <div className="card">
                <div className="icon" aria-hidden="true">◍</div>
                <h3>What we do</h3>
                <p>
                  We design and develop web software, from landing pages to
                  small AI-assisted applications. Our focus is clarity, speed,
                  and reliability.
                </p>
              </div>
              <div className="card">
                <div className="icon" aria-hidden="true">◎</div>
                <h3>Where we are</h3>
                <p>
                  We are in early development. We have no customers, revenue, or
                  funding to report yet — and we prefer to be transparent about
                  that while we build.
                </p>
                <span className="status">● Early stage — building in public</span>
              </div>
            </div>
          </div>
        </section>

        {/* PRODUCT */}
        <section id="product" className="section section-soft">
          <div className="container">
            <p className="kicker">Product</p>
            <h2 className="h2">What we&apos;re building</h2>
            <p className="sub">
              Our first direction is a lightweight AI assistant for everyday
              work — helping individuals summarize, draft, and organize
              information faster.
            </p>

            <div className="grid3">
              <div className="card">
                <div className="icon" aria-hidden="true">✎</div>
                <h3>Draft &amp; summarize</h3>
                <p>
                  Turn rough notes into clear drafts, summaries, and action
                  items. Built for students, freelancers, and small teams.
                </p>
              </div>
              <div className="card">
                <div className="icon" aria-hidden="true">▦</div>
                <h3>Simple by design</h3>
                <p>
                  No complex setup. A clean web experience that works on mobile
                  and desktop from day one.
                </p>
              </div>
              <div className="card">
                <div className="icon" aria-hidden="true">◐</div>
                <h3>Responsible AI</h3>
                <p>
                  We show sources where possible, respect privacy, and keep
                  humans in control of the final decision.
                </p>
              </div>
            </div>

            <ul className="list">
              <li>
                <span className="check">✓</span>
                <span>
                  <strong>Problem:</strong> people waste time rewriting the same
                  emails, notes, and reports.
                </span>
              </li>
              <li>
                <span className="check">✓</span>
                <span>
                  <strong>Users:</strong> early adopters who want a fast,
                  honest AI helper — not a black box.
                </span>
              </li>
              <li>
                <span className="check">✓</span>
                <span>
                  <strong>Status:</strong> prototype in development. No public
                  launch yet.
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* TECHNOLOGY */}
        <section id="technology" className="section">
          <div className="container">
            <p className="kicker">Technology</p>
            <h2 className="h2">Built with modern web + Claude.</h2>
            <p className="sub">
              We use a lean stack we actually know — Next.js deployed on Vercel
              — and we plan to integrate the Claude API by Anthropic for
              reasoning, summarization, and drafting features.
            </p>

            <div className="tech-box">
              <div>
                <h3>Why Claude API?</h3>
                <p>
                  We chose Claude for its strong reasoning, long-context
                  handling, and focus on safety. Our product will call the
                  Claude API server-side for summarization and assisted writing,
                  with clear user consent and data handling.
                </p>
                <p>
                  Learn more at{" "}
                  <a
                    href="https://www.anthropic.com"
                    target="_blank"
                    rel="noreferrer"
                    className="tech-link"
                  >
                    anthropic.com
                  </a>{" "}
                  and{" "}
                  <a
                    href="https://console.anthropic.com"
                    target="_blank"
                    rel="noreferrer"
                    className="tech-link"
                  >
                    Claude Console
                  </a>
                  .
                </p>
                <div className="tech-tags">
                  <span className="tag">Next.js</span>
                  <span className="tag">Vercel</span>
                  <span className="tag">Claude API</span>
                  <span className="tag">TypeScript</span>
                </div>
              </div>
              <div className="card">
                <div className="icon" aria-hidden="true">⬢</div>
                <h3>How we&apos;ll use Claude</h3>
                <p>
                  1. Summarize user-provided text.
                  <br />
                  2. Draft structured output from bullet notes.
                  <br />
                  3. Explain results in plain language.
                </p>
                <p className="mt">
                  No training on private user data. No hidden prompts.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section section-soft">
          <div className="container">
            <p className="kicker">Contact</p>
            <h2 className="h2">Get in touch.</h2>
            <p className="sub">
              For program review or partnership inquiries, the fastest way to
              reach us is email. We reply from our domain mailbox.
            </p>

            <div className="contact-card">
              <div>
                <a
                  className="mailto"
                  href="mailto:founder@xelvion.world?subject=Hello%20Xelvion"
                >
                  <span aria-hidden="true">✉</span> founder@xelvion.world
                </a>
                <p className="small mt">
                  This mailbox is used for official correspondence, including
                  Claude Startups application review. If you are reviewing our
                  application: website is live at{" "}
                  <a href="https://xelvion.world">xelvion.world</a>, and this
                  email is monitored.
                </p>
                <p className="small">
                  Prefer web? This landing page is intentionally simple — no
                  account, no tracking, no newsletter yet.
                </p>
              </div>
              <div className="contact-cta">
                <h3>How to reach us</h3>
                <p className="small">
                  Click below to open your email app with a pre-filled subject.
                  No form data is stored on this website.
                </p>
                <a
                  className="btn btn-primary"
                  href="mailto:founder@xelvion.world?subject=Hello%20Xelvion&body=Hi%20Xelvion%2C%0A%0AMy%20name%20is%20...%0A"
                >
                  Email founder@xelvion.world →
                </a>
                <p className="small mt">
                  Email: <code>founder@xelvion.world</code>
                  <br />
                  Website: <code>https://xelvion.world</code>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <span>
            © {new Date().getFullYear()} Xelvion · xelvion.world · In
            development
          </span>
          <span>Built with Next.js · Deployed on Vercel · AI via Claude</span>
        </div>
      </footer>
    </>
  );
}
