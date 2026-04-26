import Image from "next/image";
import { CloudflareVideoPlayer } from "./CloudflareVideoPlayer";
import {
  ArrowRight,
  BellRing,
  CheckCircle2,
  Compass,
  Eye,
  MessageSquareQuote,
  PlayCircle,
  Radar,
  Send,
  ShieldCheck,
  Sparkles,
  Star,
  Telescope,
  Users,
  Zap,
} from "lucide-react";

const heroSignals = [
  {
    icon: Telescope,
    label: "I Scout",
    body: "Watch the right channels before the window closes.",
  },
  {
    icon: Radar,
    label: "I Signal",
    body: "Surface the conversations your market is already reacting to.",
  },
  {
    icon: Send,
    label: "I Deliver",
    body: "Send thoughtful draft comments into Telegram for review.",
  },
];

const dashboardRows = [
  {
    title: "HELOC strategy video with active investor discussion",
    tags: ["High Intent", "Telegram Ready"],
    score: "96",
  },
  {
    title: "Multifamily market reset clip with high comment velocity",
    tags: ["Fast Moving", "Brand Fit"],
    score: "92",
  },
  {
    title: "Tax strategy explainer with buyer-language in comments",
    tags: ["Lead Signal", "Opportunity"],
    score: "87",
  },
  {
    title: "Creator breakdown triggering audience trust questions",
    tags: ["Strong Context", "Review"],
    score: "75",
  },
];

const benefits = [
  {
    icon: Compass,
    title: "Conversation Discovery",
    body: "We scan the channels, topics, and upload windows where your buyers are already deciding who sounds credible.",
  },
  {
    icon: Zap,
    title: "Opportunity Scoring",
    body: "Each opportunity is filtered for timing, relevance, and whether your brand actually belongs in the discussion.",
  },
  {
    icon: BellRing,
    title: "Smart Alerts",
    body: "Telegram becomes the operating surface for quick decisions instead of another dashboard someone forgets to check.",
  },
  {
    icon: MessageSquareQuote,
    title: "Actionable Drafts",
    body: "You get comments built around the actual conversation, not filler designed to sound automated.",
  },
];

const executionPoints = [
  "Hesperus monitors selected YouTube channels in your niche.",
  "It detects new videos where your brand can contribute meaningfully.",
  "It prepares a context-aware draft aligned to your brand voice.",
  "The opportunity lands instantly in Telegram for review.",
  "A human approves, edits, or skips before anything is posted.",
];

const fitPoints = [
  "Businesses that want high-quality inbound leads, not vanity traffic",
  "Teams that care about tone, trust, and reputation in public",
  "Operators who already understand YouTube as a discovery platform",
  "Brands that prefer precision over mass outreach",
];

const qualityPoints = [
  "No bulk commenting",
  "No generic AI responses",
  "No fake engagement loops",
  "No pretending that automation alone is strategy",
];

const mailtoHref =
  "mailto:hello@gethesperus.com?subject=Get%20Hesperus&body=I%20want%20to%20see%20if%20Hesperus%20fits%20my%20business.";

export function HesperusLanding() {
  return (
    <main className="hesperus-page">
      <section className="hero-shell">
        <div className="hero-noise" />
        <header className="site-header shell">
          <div className="site-header-inner container-large">
            <a className="brand-lockup" href="#top">
              <span className="brand-mark">
                <Star className="h-4 w-4" />
              </span>
              <span className="brand-wordmark">Hesperus</span>
            </a>

            <nav className="site-nav">
              <a href="#features">Features</a>
              <a href="#how-it-works">How It Works</a>
              <a href="#pricing">Pricing</a>
              <a href="#about">About</a>
              <a href="/style-guide">Style Guide</a>
            </nav>

            <div className="site-actions">
              <a className="login-link" href={mailtoHref}>
                Log in
              </a>
              <a className="primary-button" href={mailtoHref}>
                Get Started
              </a>
            </div>
          </div>
        </header>

        <div id="top" className="shell hero-grid container-large">
          <div className="hero-copy container-large">
            <h1 className="hero-title">
              I Turn Other People&apos;s YouTube Audiences Into Your Leads.
            </h1>
          </div>

          <div className="hero-media container-medium">
            <CloudflareVideoPlayer
              className="cloudflare-player-shell hero-player-shell"
              iframeClassName="cloudflare-player-iframe hero-player-iframe"
            />
          </div>

          <div className="hero-cta-row container-small">
            <a className="primary-button large" href={mailtoHref}>
              Get Hesperus <ArrowRight className="h-4 w-4" />
            </a>
            <a className="ghost-link" href="#how-it-works">
              <PlayCircle className="h-5 w-5" />
              <span>See If This Fits Your Business</span>
            </a>
          </div>
        </div>

        <div className="shell hero-signal-section">
          <div className="hero-signal-row container-large">
            {heroSignals.map((item) => (
              <article key={item.label} className="signal-chip">
                <div className="signal-icon">
                  <item.icon className="h-4 w-4" />
                </div>
                <div>
                  <p className="signal-label">{item.label}</p>
                  <p className="signal-body">{item.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="features" className="light-section">
        <div className="shell feature-grid container-large">
          <div className="feature-copy">
            <p className="section-label dark">Built to give your brand an unfair visibility advantage</p>
            <h2>Designed for relevance, timing, and quality control.</h2>

            <div className="feature-list">
              {benefits.map((item) => (
                <article key={item.title} className="feature-item">
                  <div className="feature-item-icon">
                    <item.icon className="h-4 w-4" />
                  </div>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="opportunity-card">
            <div className="opportunity-sidebar">
              <div className="demo-brand dark">
                <Star className="h-3.5 w-3.5" />
                <span>Hesperus</span>
              </div>
              <div className="demo-nav-item active">Dashboard</div>
              <div className="demo-nav-item">Opportunities</div>
              <div className="demo-nav-item">Alerts</div>
              <div className="demo-nav-item">History</div>
              <div className="demo-nav-item">Settings</div>
            </div>

            <div className="opportunity-main">
              <div className="demo-topbar light">
                <div>
                  <p className="demo-heading dark">Top Opportunities</p>
                  <p className="demo-subheading dark">Found for your current source-channel setup</p>
                </div>
                <div className="demo-filter light">This Week</div>
              </div>

              <div className="demo-table light">
                {dashboardRows.map((row) => (
                  <div key={row.title} className="demo-row light">
                    <div className="demo-row-icon light">
                      <PlayCircle className="h-4 w-4" />
                    </div>
                    <div className="demo-row-copy">
                      <p className="demo-row-title dark">{row.title}</p>
                      <div className="demo-tags light">
                        {row.tags.map((tag) => (
                          <span key={tag}>{tag}</span>
                        ))}
                      </div>
                    </div>
                    <div className="demo-score light">
                      <strong>{row.score}</strong>
                      <span>/100</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="content-section">
        <div className="shell dual-card-grid container-large">
          <article className="content-card">
            <p className="section-label dark">How It Works</p>
            <h2>AI-assisted opportunity detection. Human-controlled approval.</h2>
            <ol className="execution-list">
              {executionPoints.map((point, index) => (
                <li key={point}>
                  <span>{index + 1}</span>
                  <p>{point}</p>
                </li>
              ))}
            </ol>
          </article>

          <article className="content-card accent">
            <p className="section-label dark">Built For Quality, Not Spam</p>
            <h2>Hesperus is designed to avoid the usual automation failure modes.</h2>
            <ul className="quality-list">
              {qualityPoints.map((point) => (
                <li key={point}>
                  <ShieldCheck className="h-4 w-4" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <div className="command-box" id="about">
              <div className="command-box-icon">
                <Sparkles className="h-4 w-4" />
              </div>
              <div>
                <h3>Telegram is the command center.</h3>
                <p>
                  Hesperus operates through a fast review flow that your team can
                  delegate without losing control over public-facing comments.
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section id="pricing" className="cta-section">
        <div className="shell cta-banner container-large">
          <div className="cta-banner-visual">
            <div className="mini-creature">
              <Image
                src="/brand/hesperus-yuruchara.webp"
                alt="Hesperus mascot"
                width={640}
                height={960}
                className="mini-creature-image"
              />
            </div>
          </div>

          <div className="cta-banner-copy">
            <h2>Be early. Sound better. Grow faster.</h2>
            <p>
              Hesperus is a strong fit for brands that care about inbound lead
              quality, public reputation, and precision over mass outreach.
            </p>
            <ul className="fit-list">
              {fitPoints.map((point) => (
                <li key={point}>
                  <CheckCircle2 className="h-4 w-4" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="cta-banner-action">
            <div className="pricing-chip">Starting at $3,000/month</div>
            <a className="primary-button large" href={mailtoHref}>
              Get Hesperus <ArrowRight className="h-4 w-4" />
            </a>
            <p>
              Strategic channel selection, brand voice calibration, monitoring,
              refinement, and managed execution support.
            </p>
          </div>
        </div>
      </section>

      <footer className="site-footer shell">
        <div className="footer-brand">
          <span className="brand-mark">
            <Star className="h-4 w-4" />
          </span>
          <span className="brand-wordmark dark">Hesperus</span>
        </div>
        <p>Offered through Southwest Digital Marketing.</p>
        <a href="mailto:hello@gethesperus.com">hello@gethesperus.com</a>
      </footer>
    </main>
  );
}
