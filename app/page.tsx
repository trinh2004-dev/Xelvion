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
            <a href="#product">Products</a>
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
              Xelvion is developing MegaMart (e-commerce) and CineVN
              (movie streaming) — practical web products with AI assistance.
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
              Xelvion is an early-stage software startup building two products:
              MegaMart for online shopping and CineVN for movie streaming. We
              start with working web apps and iterate toward useful AI features.
            </p>

            <div className="grid2">
              <div className="card">
                <div className="icon" aria-hidden="true">◍</div>
                <h3>What we do</h3>
                <p>
                  We design fullstack web software — storefronts, streaming
                  experiences, and admin tools. Our focus is clarity, speed,
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
            <p className="kicker">Products</p>
            <h2 className="h2">MegaMart &amp; CineVN</h2>
            <p className="sub">
              Two products in active development. No public launch, customers,
              or revenue to report yet — we are building and testing.
            </p>

            <div className="grid2">
              <div className="card">
                <div className="icon" aria-hidden="true">🛒</div>
                <h3>MegaMart — E-commerce</h3>
                <p>
                  Fullstack online shopping prototype: storefront with cart,
                  3D product preview, flash-sale demo with Redis inventory
                  hold, sandbox checkout integration (VNPAY / Stripe test
                  mode), and an admin dashboard prototype for catalog,
                  variants, stock, and sales reports.
                </p>
                <div className="tech-tags tags-dark">
                  <span className="tag tag-dark">Next.js</span>
                  <span className="tag tag-dark">NestJS</span>
                  <span className="tag tag-dark">PostgreSQL</span>
                  <span className="tag tag-dark">Redis</span>
                  <span className="tag tag-dark">Docker</span>
                </div>
                <span className="status">
                  ● In development — Docker-ready, not yet launched
                </span>
              </div>
              <div className="card">
                <div className="icon" aria-hidden="true">🎬</div>
                <h3>CineVN — Video player demo</h3>
                <p>
                  Streaming-technology demo in the browser: adaptive HLS
                  playback, cinematic UI with Ambilight effect,
                  continue-watching, Skip Intro, auto next-episode, watch
                  history and favorites. Built and tested with open-licensed /
                  trailer content only — no copyrighted catalog.
                </p>
                <div className="tech-tags tags-dark">
                  <span className="tag tag-dark">Next.js</span>
                  <span className="tag tag-dark">HLS.js</span>
                  <span className="tag tag-dark">Node.js</span>
                  <span className="tag tag-dark">MongoDB</span>
                  <span className="tag tag-dark">Caddy + Docker</span>
                </div>
                <span className="status">
                  ● In development — local staging, not yet launched
                </span>
              </div>
            </div>

            <ul className="list">
              <li>
                <span className="check">✓</span>
                <span>
                  <strong>Problem:</strong> small shops need an affordable,
                  modern storefront; developers need a fast, reusable HLS video
                  player demo for the browser.
                </span>
              </li>
              <li>
                <span className="check">✓</span>
                <span>
                  <strong>Users:</strong> early testers and friends trying demo
                  builds — not paying customers yet.
                </span>
              </li>
              <li>
                <span className="check">✓</span>
                <span>
                  <strong>Status:</strong> both prototypes in development. No
                  public launch, no revenue, no funding to report.
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* TECHNOLOGY */}
        <section id="technology" className="section">
          <div className="container">
            <p className="kicker">Technology</p>
            <h2 className="h2">Modern web + practical AI.</h2>
            <p className="sub">
              Our stack is Next.js + TypeScript on the frontend, NestJS / Node.js
              on the backend, with PostgreSQL, MongoDB, Redis, and Docker for
              deploy. We prototype AI features with Gemini / OpenAI today and
              plan to integrate the Claude API by Anthropic.
            </p>

            <div className="tech-box">
              <div>
                <h3>Why Claude API next?</h3>
                <p>
                  We want Claude for strong reasoning, long-context handling,
                  and safety focus: product-description drafting and review
                  summarization for MegaMart, plus synopsis explanations and
                  recommendation write-ups for CineVN — all called server-side
                  with clear user consent.
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
                  <span className="tag">NestJS / Node.js</span>
                  <span className="tag">PostgreSQL / MongoDB</span>
                  <span className="tag">Redis / Docker</span>
                  <span className="tag">Claude API (planned)</span>
                </div>
              </div>
              <div className="card">
                <div className="icon" aria-hidden="true">⬢</div>
                <h3>How we&apos;ll use Claude</h3>
                <p>
                  1. MegaMart: draft product descriptions, summarize reviews.
                  <br />
                  2. CineVN: explain recommendations, summarize discussions.
                  <br />
                  3. Both: plain-language explanations, human in control.
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
          <span>Built with Next.js · Deployed on Vercel · Exploring Claude API</span>
        </div>
      </footer>
    </>
  );
}
