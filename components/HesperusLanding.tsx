import {
  ArrowRight,
  BadgeDollarSign,
  BotOff,
  CheckCircle2,
  CircleDashed,
  Clock3,
  Eye,
  MessageSquareQuote,
  Radar,
  Send,
  SendHorizontal,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

const benefits = [
  {
    icon: Eye,
    title: "Early Visibility",
    body: "Get in front of buyers while they are still researching the topic, the creator, and which businesses sound credible in public.",
  },
  {
    icon: MessageSquareQuote,
    title: "Better Comments",
    body: "Review comments shaped around the actual video context instead of generic, repetitive, low-trust AI filler.",
  },
  {
    icon: Users,
    title: "Delegated Execution",
    body: "Let an admin or team member manage approvals inside Telegram without building a full social media department.",
  },
];

const howItWorks = [
  {
    step: "01",
    title: "Monitor the right channels",
    body: "Hesperus watches selected YouTube channels in your niche and looks for moments where your brand can contribute meaningfully.",
  },
  {
    step: "02",
    title: "Draft the response fast",
    body: "When a strong opening appears, Hesperus drafts a brand-aligned comment built around the actual video and audience context.",
  },
  {
    step: "03",
    title: "Review in Telegram",
    body: "The opportunity lands in Telegram immediately so your team can approve, edit, reroll, or skip in a familiar workflow.",
  },
  {
    step: "04",
    title: "Post with human approval",
    body: "The final decision stays with a person. The system is designed for speed and consistency without giving up judgment.",
  },
];

const executionCards = [
  {
    icon: Radar,
    title: "Detection and timing",
    body: "Hesperus handles channel monitoring, timing, and opportunity discovery so your team only looks at high-value moments.",
  },
  {
    icon: Sparkles,
    title: "Comment creation",
    body: "The draft is tailored to your brand voice and the specific conversation already happening under that video.",
  },
  {
    icon: ShieldCheck,
    title: "Final approval",
    body: "A real person approves the public-facing comment. That keeps quality high and removes the risk of blind posting.",
  },
];

const leadFlow = [
  "Your brand appears inside a relevant YouTube conversation.",
  "Viewers recognize the quality of the contribution and click through.",
  "They explore your profile, channel, and positioning.",
  "They visit your website or reach out directly.",
  "Qualified inbound leads enter your sales process.",
];

const qualityPoints = [
  "No bulk commenting.",
  "No fake engagement loops.",
  "No generic AI spam.",
  "No pretending automation is strategy.",
];

const commandCenter = [
  "Receive opportunities in real time.",
  "Approve quickly without leaving normal team workflow.",
  "Delegate execution to an assistant or admin.",
  "Keep the process visible and easy to manage.",
];

const bestFit = [
  "Professional services with high customer value",
  "Operators who care about reputation and tone",
  "Teams that already believe YouTube drives trust",
  "Businesses that want quality leads, not empty traffic",
];

const pricingPoints = [
  "Strategic channel selection",
  "Brand voice calibration",
  "System setup and configuration",
  "Ongoing monitoring and refinement",
  "Managed execution support",
];

const mailtoHref =
  "mailto:hello@gethesperus.com?subject=Get%20Hesperus&body=I%20want%20to%20see%20if%20Hesperus%20fits%20my%20business.";

export function HesperusLanding() {
  return (
    <main className="hesperus-shell">
      <header className="page-wrap site-nav">
        <a href="#top" className="brand">
          Hesperus
        </a>
        <div className="nav-actions">
          <a className="nav-link" href="#how-it-works">
            How It Works
          </a>
          <a className="nav-link" href="#pricing">
            Pricing
          </a>
          <a className="nav-link" href="#fit">
            Best Fit
          </a>
          <a className="nav-cta" href={mailtoHref}>
            hello@gethesperus.com
          </a>
        </div>
      </header>

      <section id="top" className="section hero-section">
        <div className="page-wrap hero-grid">
          <div className="hero-copy section-stack">
            <div className="hero-kicker rise-in delay-1">
              <span className="hero-kicker-badge">Premium Managed Service</span>
              <span className="hero-kicker-text">Offered through Southwest Digital Marketing</span>
            </div>

            <p className="eyebrow rise-in delay-1">AI-Assisted YouTube Engagement</p>

            <h1 className="display rise-in delay-2">
              Turn Other People&apos;s YouTube Audiences Into Your Inbound Lead Pipeline
            </h1>

            <p className="copy hero-lead rise-in delay-3">
              Hesperus helps your team show up in the right YouTube conversations
              at the exact moment your ideal customers are paying attention without
              hiring a full-time social media manager.
            </p>

            <p className="support-line rise-in delay-4">
              AI-assisted. Human-controlled. Built for quality engagement, not spam.
            </p>

            <div className="cta-row rise-in delay-4">
              <a className="cta-primary" href={mailtoHref}>
                Get Hesperus <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a className="cta-secondary" href="#fit">
                See If This Fits Your Business
              </a>
            </div>

            <div className="hero-metrics rise-in delay-4">
              <div className="metric-card">
                <span className="metric-value">Under 5 min</span>
                <span className="metric-label">Typical daily approval time</span>
              </div>
              <div className="metric-card">
                <span className="metric-value">Telegram-first</span>
                <span className="metric-label">Review workflow for real-time decisions</span>
              </div>
              <div className="metric-card">
                <span className="metric-value">$3,000/mo</span>
                <span className="metric-label">Starting price for managed service</span>
              </div>
            </div>
          </div>

          <div className="hero-side rise-in delay-4">
            <div className="hero-card">
              <div className="telegram-card">
                <div className="telegram-topbar">
                  <div className="telegram-topbar-copy">
                    <span className="telegram-pill">New YouTube Opportunity</span>
                    <strong>Telegram Review Flow</strong>
                  </div>
                  <SendHorizontal className="h-5 w-5" />
                </div>

                <div className="telegram-body">
                  <div className="telegram-block">
                    <span className="telegram-label">Channel</span>
                    <p className="telegram-text">@CommercialRealEstateMentor</p>
                  </div>

                  <div className="telegram-block">
                    <span className="telegram-label">Video</span>
                    <p className="telegram-text">
                      Why Smart Operators Are Repositioning Before the Next Tightening Cycle
                    </p>
                  </div>

                  <div className="telegram-block">
                    <span className="telegram-label">Why It Matters</span>
                    <p className="telegram-text">
                      The audience is actively discussing capital pressure, operator
                      risk, and who they trust when markets get tighter.
                    </p>
                  </div>

                  <div className="telegram-block">
                    <span className="telegram-label">Draft Comment</span>
                    <p className="telegram-text telegram-comment">
                      The strongest point here is how fast trust goes up when an
                      operator explains downside clearly instead of trying to sound
                      invincible. That is what buyers remember.
                    </p>
                  </div>

                  <div className="button-row">
                    <div className="mock-button primary">Approve &amp; Copy</div>
                    <div className="mock-button secondary">Edit</div>
                    <div className="mock-button neutral">Skip</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="signal-strip">
              <div className="signal-card">
                <Clock3 className="h-5 w-5" />
                <span>Fast review while the conversation is still fresh</span>
              </div>
              <div className="signal-card">
                <BotOff className="h-5 w-5" />
                <span>Human approval stays in the loop</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="page-wrap">
          <div className="section-stack section-intro">
            <p className="eyebrow">Three Reasons This Works</p>
            <h2 className="section-title">A tighter path from YouTube attention to qualified inbound leads</h2>
            <p className="copy">
              Instead of trying to out-compete large creators, Hesperus helps your
              brand participate where your audience is already learning, comparing
              options, and deciding who sounds credible.
            </p>
          </div>

          <div className="grid-3 section-gap">
            {benefits.map((item) => (
              <article key={item.title} className="stat-card">
                <item.icon className="h-9 w-9 accent-icon" />
                <h3 className="card-title-gap">{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="section">
        <div className="page-wrap">
          <div className="section-stack section-intro">
            <p className="eyebrow">How It Works</p>
            <h2 className="section-title">The workflow is fast, but the public action is still controlled</h2>
            <p className="copy">
              Hesperus is designed to feel nearly instantaneous while preserving
              quality and human judgment.
            </p>
          </div>

          <div className="grid-2 how-grid section-gap">
            {howItWorks.map((item) => (
              <article key={item.step} className="surface-card flow-card">
                <div className="flow-step">{item.step}</div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="page-wrap">
          <div className="section-stack section-intro">
            <p className="eyebrow">Execution Model</p>
            <h2 className="section-title">AI-assisted where speed matters, human-controlled where reputation matters</h2>
            <p className="copy">
              Most clients do not personally run this every day. An admin,
              assistant, or team member can own the approval loop while leadership
              retains visibility and control.
            </p>
          </div>

          <div className="grid-3 section-gap">
            {executionCards.map((item) => (
              <article key={item.title} className="surface-card">
                <item.icon className="h-9 w-9 accent-icon-secondary" />
                <h3 className="card-title-gap">{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="page-wrap split-grid">
          <article className="surface-card tone-card">
            <p className="eyebrow">Built For Quality, Not Spam</p>
            <h2 className="section-title section-title-compact">
              Better contribution beats volume every time
            </h2>
            <p className="copy">
              Hesperus is designed specifically to avoid the behaviors that make
              most automation feel cheap, repetitive, and unsafe for the brand.
            </p>

            <ul className="check-list">
              {qualityPoints.map((point) => (
                <li key={point}>
                  <CheckCircle2 className="h-4 w-4" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="surface-card tone-card tone-card-accent">
            <p className="eyebrow">Telegram Command Center</p>
            <h2 className="section-title section-title-compact">
              Fast enough to feel automated, visible enough to stay accountable
            </h2>
            <p className="copy">
              Telegram works because it is already a real operating surface for a
              distributed team. The approval flow stays lightweight and easy to hand off.
            </p>

            <ul className="check-list">
              {commandCenter.map((point) => (
                <li key={point}>
                  <CircleDashed className="h-4 w-4" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="page-wrap lead-grid">
          <div className="lead-copy">
            <p className="eyebrow">Lead Flow</p>
            <h2 className="section-title">The point is not comments. The point is pipeline.</h2>
            <p className="copy">
              When your brand shows up intelligently inside the right conversations,
              viewers start to recognize you before they ever land on your site.
            </p>
          </div>

          <div className="lead-track">
            {leadFlow.map((step, index) => (
              <div key={step} className="lead-step">
                <div className="lead-step-number">{index + 1}</div>
                <div className="lead-step-copy">{step}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="section">
        <div className="page-wrap split-grid">
          <article className="pricing-panel">
            <p className="eyebrow">Pricing</p>
            <h2 className="section-title section-title-compact">Premium managed service, starting simple</h2>
            <span className="price">$3,000/mo</span>
            <p className="copy">
              Pricing scales with scope, especially with the number of channels
              monitored and the amount of refinement needed around voice and targeting.
            </p>

            <ul className="pricing-list">
              {pricingPoints.map((point) => (
                <li key={point}>
                  <BadgeDollarSign className="h-4 w-4" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </article>

          <article id="fit" className="surface-card fit-card">
            <p className="eyebrow">Best Fit</p>
            <h2 className="section-title section-title-compact">Built for businesses that value trust and precision</h2>
            <p className="copy">
              Hesperus is a strong fit when the sale is meaningful, the audience is
              already on YouTube, and the brand cannot afford sloppy public outreach.
            </p>

            <ul className="check-list">
              {bestFit.map((point) => (
                <li key={point}>
                  <CheckCircle2 className="h-4 w-4" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="page-wrap final-panel">
          <p className="eyebrow">Final CTA</p>
          <h2 className="section-title final-title">
            We do not help brands fake engagement. We help them participate in the right conversations with the right message.
          </h2>
          <p className="copy final-copy">
            If this aligns with your growth strategy, the next step is a fit
            conversation to determine whether your niche is a strong match, which
            channels matter most, and how your brand should sound in public.
          </p>

          <div className="cta-row">
            <a className="cta-primary" href={mailtoHref}>
              Get Hesperus <Send className="ml-2 h-4 w-4" />
            </a>
            <a className="cta-secondary" href="mailto:hello@gethesperus.com">
              See If This Fits Your Business
            </a>
          </div>
        </div>
      </section>

      <footer className="page-wrap footer-line">
        Offered through Southwest Digital Marketing. Contact{" "}
        <a href="mailto:hello@gethesperus.com">hello@gethesperus.com</a>.
      </footer>
    </main>
  );
}
