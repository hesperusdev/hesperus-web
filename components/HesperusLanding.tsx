import Image from "next/image";
import { CloudflareVideoPlayer } from "./CloudflareVideoPlayer";
import {
  ArrowRight,
  ArrowBigDown,
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
    title: "Source Channel Foundation",
    body: "I make sure your YouTube channel is built to convert attention into trust, with the right positioning, channel setup, and evergreen content in place before launch.",
  },
  {
    icon: Zap,
    title: "Target Channel Selection",
    body: "I identify the channels and conversations worth entering so your brand shows up where buyer attention already exists, instead of posting blindly into noise.",
  },
  {
    icon: BellRing,
    title: "Comment Execution",
    body: "Hesperus stays internal. I use it behind the scenes to monitor new uploads, draft the comments, and manage the posting flow from your source channel.",
  },
  {
    icon: MessageSquareQuote,
    title: "Attribution And Conversion",
    body: "I connect the traffic path from YouTube to your website, landing page, calendar, or sale flow, with tracking and reporting set up so the outcome is measurable.",
  },
];

const executionPoints = [
  "First, I make sure the foundation is in place: a real source channel, strong channel setup, at least five evergreen videos, and a credible conversion path.",
  "Next, I work with you to choose the target channels where your buyers already spend attention and where your brand actually belongs in the conversation.",
  "Then Hesperus monitors those target channels internally and flags fresh videos as they are published.",
  "I write and manage the comments from your source channel so the right viewers discover, investigate, and trust your brand.",
  "From there, the traffic moves to your website, landing page, or booked-call flow, with analytics in place so performance can be tracked.",
];

const setupPoints = [
  {
    title: "Discovery And Fit",
    body: "I start with a fit conversation to understand the business, the niche, the offer, and whether this channel-first lead flow is actually a match.",
  },
  {
    title: "Source Channel Foundation",
    body: "Before launch, I make sure the source channel is credible: positioning, channel art, descriptions, and at least five evergreen videos that can convert curiosity into trust.",
  },
  {
    title: "Targeting, Tracking, And Launch Prep",
    body: "Then I select the target channels, align the click path to the website or landing page, and make sure analytics and conversion tracking are in place before posting starts.",
  },
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

const advantagePoints = [
  {
    icon: Eye,
    title: "You Borrow Existing Attention",
    body: "Instead of paying to interrupt people cold, I place your brand where your buyers are already watching, researching, and paying attention.",
  },
  {
    icon: Radar,
    title: "You Enter High-Intent Moments",
    body: "A new video on the right channel creates a fresh window where curiosity and buying intent are already active in the comments.",
  },
  {
    icon: Telescope,
    title: "You Gain Trust By Proximity",
    body: "Your brand shows up next to creators your market already trusts, which makes the click to your channel far more qualified than generic traffic.",
  },
  {
    icon: Send,
    title: "You Can Track It End To End",
    body: "The path from comment to channel to site to booked call can be measured, improved, and tied back to qualified leads instead of vanity metrics.",
  },
];

const notFitPoints = [
  "Businesses looking for instant scale without building the channel and conversion path first",
  "Teams that want bulk AI comments or hands-off spam tactics",
  "Offers that do not benefit from trust, authority, or thoughtful public positioning",
  "Clients unwilling to support tracking, landing pages, or a credible sales follow-up process",
];

const clientTypePoints = [
  "I work best with service businesses, experts, educators, and founder-led brands that can benefit from trust-based lead flow.",
  "I take on a limited number of clients at a time so I can stay directly involved in strategy, execution, and optimization.",
  "I do not want a bloated roster. I want a small book of businesses where I can actually move the needle.",
];

const mailtoHref =
  "mailto:hello@gethesperus.com?subject=Hesperus%20Fit%20Call&body=I%20want%20to%20talk%20about%20using%20Hesperus%20as%20a%20managed%20lead-generation%20service%20for%20my%20business.";

export function HesperusLanding() {
  return (
    <main className="hesperus-page">
      <section className="hero-section hero-shell">
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

        <div id="top" className="shell hero-grid container-large section-shell">
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
            <a className="ghost-link" href="#funnel">
              <PlayCircle className="h-5 w-5" />
              <span>See How It Works</span>
            </a>
          </div>
        </div>

      </section>

      <section id="funnel" className="funnel-section">
        <div className="funnel-comparison-section section-shell">
          <div className="funnel-comparison-intro section-intro container-medium">
            <h2 className="section-label">The Funnel</h2>
            <p className="section-intro-title">From borrowed YouTube attention to a qualified lead.</p>
            <p className="section-intro-body">
              I use this funnel to turn large borrowed YouTube audiences into
              measurable client outcomes by moving traffic through the right
              channel, website, and conversion path.
            </p>
          </div>

          <div className="funnel-comparison-diagram">
            {funnelComparisonStages.map((stage, index) => (
              <div key={stage.step} className="funnel-comparison-stage-wrap">
                <article
                  className={`funnel-comparison-stage funnel-comparison-stage-${index + 1} funnel-tone-${stage.tone}${index === funnelComparisonStages.length - 1 ? " funnel-comparison-stage-final" : ""}`}
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

                {index < funnelComparisonStages.length - 1 ? (
                  <div
                    className={`funnel-comparison-arrow${index < funnelComparisonStages.length - 2 ? " funnel-comparison-arrow-muted" : ` funnel-tone-${funnelComparisonStages[index + 1].tone}`}`}
                    aria-hidden="true"
                  >
                    <ArrowBigDown className="h-6 w-6" />
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="setup" className="setup-section content-section">
        <div className="shell setup-section-shell container-large section-shell">
          <div className="setup-section-intro section-intro container-medium">
            <h2 className="section-label">The Setup</h2>
            <p className="section-intro-title">I set up the foundation that makes this work.</p>
            <p className="section-intro-body">
              This is not just comment posting. The source channel, the target-channel
              strategy, the landing path, and the tracking all need to be in place first.
            </p>
          </div>

          <div className="setup-section-grid">
            {setupPoints.map((point, index) => (
              <article key={point.title} className="setup-step-card">
                <div className="setup-step-number">{index + 1}</div>
                <h3>{point.title}</h3>
                <p>{point.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="features" className="features-section light-section">
        <div className="shell features-section-shell container-large section-shell">
          <div className="features-section-intro section-intro container-medium">
            <h2 className="section-label">The Features</h2>
            <p className="section-intro-title">
              I handle the entire process. You focus on closing.
            </p>
            <p className="section-intro-body">
              You are not buying software. You are hiring me to operate the full
              engine: channel readiness, target selection, comment execution,
              and the conversion path that turns that visibility into pipeline.
            </p>
          </div>

          <div className="feature-grid">
            <div className="feature-copy">
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
                    <p className="demo-heading dark">Active Opportunities</p>
                    <p className="demo-subheading dark">This is the internal operating layer I use once the source channel, target channels, and conversion path are ready</p>
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
        </div>
      </section>

      <section className="channel-advantage-section content-section">
        <div className="shell channel-advantage-shell container-large section-shell">
          <div className="channel-advantage-intro section-intro container-medium">
            <h2 className="section-label">Why This Channel Wins</h2>
            <p className="section-intro-title">
              YouTube has baked-in trust and alignment.
            </p>
            <p className="section-intro-body">
              I am not buying cold attention and hoping it converts later. I am
              placing your brand directly inside conversations that already have
              relevance, audience trust, and clear buying context.
            </p>
          </div>

          <div className="channel-advantage-grid">
            {advantagePoints.map((point) => (
              <article key={point.title} className="advantage-card">
                <div className="advantage-card-icon">
                  <point.icon className="h-4 w-4" />
                </div>
                <h3>{point.title}</h3>
                <p>{point.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="how-it-works-section content-section">
        <div className="shell dual-card-grid container-large section-shell">
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

      <section className="who-its-for-section content-section">
        <div className="shell who-its-for-shell container-large section-shell">
          <div className="who-its-for-intro section-intro container-medium">
            <h2 className="section-label">Who&apos;s This For?</h2>
            <p className="section-intro-title">
              Best for Nation-Wide Service-Based Businesses
            </p>
            <p className="section-intro-body">
              The channel, the offer, the landing path, and the follow-up all
              matter here. When those pieces are in place, this can become a
              durable lead-generation system instead of a one-off tactic.
            </p>
          </div>

          <div className="audience-fit-grid">
            <article className="content-card">
              <h3>A Strong Fit</h3>
              <ul className="fit-list dark-list">
                {fitPoints.map((point) => (
                  <li key={point}>
                    <CheckCircle2 className="h-4 w-4" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="content-card accent">
              <h3>Not A Fit</h3>
              <ul className="fit-list dark-list">
                {notFitPoints.map((point) => (
                  <li key={point}>
                    <ShieldCheck className="h-4 w-4" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="client-types-section content-section">
        <div className="shell client-types-shell container-large section-shell">
          <div className="client-types-intro section-intro container-medium">
            <h2 className="section-label">Client Fit</h2>
            <p className="section-intro-title">
              I Work With 10 Clients Max - Slots Currently Open
            </p>
            <p className="section-intro-body">
              This is not a scaled agency model with a huge client roster. I keep
              the client list tight so I can stay directly responsible for setup,
              execution, and results.
            </p>
          </div>

          <div className="client-types-grid">
            <article className="content-card">
              <h3>The Kinds Of Clients I Work With</h3>
              <ul className="fit-list dark-list">
                {clientTypePoints.map((point) => (
                  <li key={point}>
                    <CheckCircle2 className="h-4 w-4" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="content-card accent client-capacity-card">
              <h3>Limited Availability</h3>
              <p className="client-capacity-copy">
                I work with no more than <strong>10 clients at a time</strong>.
              </p>
              <p className="client-capacity-copy">
                I am currently <strong>accepting clients</strong>, but I keep the
                number limited on purpose.
              </p>
              <a className="primary-button" href={mailtoHref}>
                Book a Fit Call <ArrowRight className="h-4 w-4" />
              </a>
            </article>
          </div>
        </div>
      </section>

      <section id="pricing" className="pricing-section cta-section">
        <div className="shell cta-banner container-large section-shell">
          <div className="cta-banner-visual">
            <div className="mini-creature">
              <Image
                    src="/hesperus-yuruchara.webp"
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

      <footer className="footer-section site-footer shell">
        <div className="footer-brand">
          <span className="brand-mark">
            <Star className="h-4 w-4" />
          </span>
          <span className="brand-wordmark">Hesperus</span>
        </div>
        <p>Offered through Southwest Digital Marketing.</p>
        <a href="mailto:hello@gethesperus.com">hello@gethesperus.com</a>
      </footer>
    </main>
  );
}
