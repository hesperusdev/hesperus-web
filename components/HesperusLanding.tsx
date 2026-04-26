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

const funnelComparisonStages = [
  {
    step: "1",
    stage: "Other People's Audiences",
    transition: "Millions -> Tens of Millions of Targeted Viewers",
    body: "I place your brand inside high-traffic conversations your buyers are already watching and trusting.",
    metricLabel: "Potential Reach",
    metricValue: "10M - 100M+",
    metricFootnote: "Monthly viewers across selected channels",
    icon: Users,
    tone: "violet",
    bullets: [
      "Find high-traffic YouTube channels in your niche",
      "Analyze buyer intent and choose the right videos",
      "Put your brand in front of massive, ready-made audiences",
    ],
  },
  {
    step: "2",
    stage: "Your YouTube Channel",
    transition: "Attention -> Curiosity",
    body: "Interested viewers click through to learn more about you, your positioning, and your offer.",
    metricLabel: "Expected CTR",
    metricValue: "1 - 5%",
    metricFootnote: "Typical CTR from comments",
    icon: PlayCircle,
    tone: "orange",
    bullets: [
      "Write high-context comments that earn attention",
      "Add value without sounding generic or spammy",
      "Create curiosity and earn qualified channel visits",
    ],
  },
  {
    step: "3",
    stage: "Your Website Or Landing Page",
    transition: "Curiosity -> Intent",
    body: "Traffic moves from YouTube into a controlled conversion environment built to carry the click forward.",
    metricLabel: "Visit Rate",
    metricValue: "30 - 60%",
    metricFootnote: "Of channel clicks reach your site or landing page",
    icon: Compass,
    tone: "blue",
    bullets: [
      "Optimize or build landing pages if needed",
      "Align the offer, message, and click path",
      "Track traffic and remove friction to action",
    ],
  },
  {
    step: "4",
    stage: "Qualified Lead",
    transition: "Intent -> Action",
    body: "Visitors convert into real opportunities like calls, forms, meetings, or revenue events.",
    metricLabel: "Conversion Rate",
    metricValue: "5 - 15%",
    metricFootnote: "Of landing page visitors become qualified leads",
    icon: CheckCircle2,
    tone: "green",
    bullets: [
      "Improve the conversion flow and next steps",
      "Set up clear offers, forms, calls, or bookings",
      "Track performance and optimize for qualified leads",
    ],
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
    title: "Source Channel Readiness",
    body: "I make sure your YouTube channel can actually convert the attention it receives, including positioning, channel setup, and evergreen content.",
  },
  {
    icon: Zap,
    title: "Target Channel Strategy",
    body: "I help determine which channels are worth monitoring and where your brand can show up credibly instead of randomly posting into noise.",
  },
  {
    icon: BellRing,
    title: "Managed Comment Execution",
    body: "Hesperus stays internal. I use it behind the scenes to monitor new uploads, draft the comments, and manage posting from your source channel.",
  },
  {
    icon: MessageSquareQuote,
    title: "Conversion And Reporting",
    body: "I help connect the traffic path from YouTube to your site, landing page, calendar, or sale flow, with analytics and reporting in place.",
  },
];

const executionPoints = [
  "First, I make sure the foundation is in place: a real source channel, strong channel setup, at least five evergreen videos, and a credible conversion path.",
  "Next, I work with you to choose the target channels where your buyers already spend attention and where your brand actually belongs in the conversation.",
  "Then Hesperus monitors those target channels internally and flags fresh videos as they are published.",
  "I write and manage the comments from your source channel so the right viewers discover, investigate, and trust your brand.",
  "From there, the traffic moves to your website, landing page, or booked-call flow, with analytics in place so performance can be tracked.",
];

const fitPoints = [
  "Businesses willing to build the full chain, not just buy comments in isolation",
  "Clients who can support a real source channel with strong setup and evergreen content",
  "Brands that want tracked lead flow instead of vague visibility metrics",
  "Founders who want the outcome handled for them instead of operating the system themselves",
];

const qualityPoints = [
  "No bulk commenting campaigns",
  "No generic AI filler",
  "No fake engagement tactics",
  "No pretending this works without the right source channel, conversion path, and analytics",
];

const mailtoHref =
  "mailto:hello@gethesperus.com?subject=Hesperus%20Fit%20Call&body=I%20want%20to%20talk%20about%20using%20Hesperus%20as%20a%20managed%20lead-generation%20service%20for%20my%20business.";

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
                Email Me
              </a>
              <a className="primary-button" href={mailtoHref}>
                Book a Fit Call
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
              Book a Fit Call <ArrowRight className="h-4 w-4" />
            </a>
            <a className="ghost-link" href="#how-it-works">
              <PlayCircle className="h-5 w-5" />
              <span>See How It Works</span>
            </a>
          </div>
        </div>

        <div className="funnel-comparison-section">
          <div className="funnel-comparison-intro container-large">
            <p className="section-label">The Funnel</p>
            <h2>This is the path from borrowed YouTube attention to a qualified lead.</h2>
            <p>
              I use this funnel to turn large borrowed YouTube audiences into
              measurable client outcomes by moving traffic through the right
              channel, website, and conversion path.
            </p>
          </div>

          <div className="funnel-comparison-diagram">
            {funnelComparisonStages.map((stage) => (
              <article
                key={stage.step}
                className={`funnel-comparison-stage funnel-tone-${stage.tone}`}
              >
                <div className="funnel-comparison-left">
                  <div className="funnel-comparison-step">{stage.step}</div>
                  <div className="funnel-comparison-badge">
                    <stage.icon className="h-6 w-6" />
                  </div>
                </div>

                <div className="funnel-comparison-main">
                  <p className="funnel-comparison-title">{stage.stage}</p>
                  <p className="funnel-comparison-transition">{stage.transition}</p>
                  <p className="funnel-comparison-body">{stage.body}</p>
                </div>

                <div className="funnel-comparison-metric">
                  <p className="funnel-comparison-metric-label">{stage.metricLabel}</p>
                  <p className="funnel-comparison-metric-value">{stage.metricValue}</p>
                  <p className="funnel-comparison-metric-footnote">{stage.metricFootnote}</p>
                </div>

                <div className="funnel-comparison-actions">
                  <p className="funnel-comparison-actions-title">What I Do</p>
                  <ul className="funnel-comparison-list">
                    {stage.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}

            <div className="funnel-comparison-footer">
              <div className="funnel-comparison-footer-claim">
                <p>I handle the entire process.</p>
                <strong>You focus on closing.</strong>
              </div>
              <div className="funnel-comparison-footer-steps">
                <span>Research</span>
                <span>Comment</span>
                <span>Track</span>
                <span>Optimize</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="light-section">
        <div className="shell feature-grid container-large">
          <div className="feature-copy">
            <p className="section-label dark">A Managed Outcome, Powered Internally By Hesperus</p>
            <h2>You hire me for the lead outcome. I use Hesperus behind the scenes to make the system run.</h2>

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
                  <p className="demo-subheading dark">Managed internally after the source channel, target channels, and conversion path are in place</p>
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
            <h2>I set up the whole chain so YouTube attention can turn into a measurable business result.</h2>
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
            <h2>This only works when the source channel, target channels, conversion path, and tracking all fit together.</h2>
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
                <h3>Telegram is my operating console.</h3>
                <p>
                  I use Telegram internally to keep execution fast, reviewable,
                  and tightly controlled while your team stays focused on sales
                  and delivery.
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
            <h2>Show up in the right conversations. Collect the right leads.</h2>
            <p>
              This is a managed service for brands willing to build the full
              system properly: source channel, content base, target-channel
              selection, conversion path, and tracking.
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
            <div className="pricing-chip">Managed engagements start at $3,000/month</div>
            <a className="primary-button large" href={mailtoHref}>
              Book a Fit Call <ArrowRight className="h-4 w-4" />
            </a>
            <p>
              Includes source-channel readiness, target-channel selection,
              comment execution, conversion-path support, analytics setup, and
              ongoing refinement.
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
