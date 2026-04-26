import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  MessageSquareText,
  PlayCircle,
  Send,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

const benefits = [
  {
    icon: PlayCircle,
    title: "Early Visibility",
    body: "Show up while your audience is still watching, learning, and deciding who sounds credible in your market.",
  },
  {
    icon: MessageSquareText,
    title: "Better Comments",
    body: "Review thoughtful drafts shaped around the actual video instead of generic AI filler or repetitive templates.",
  },
  {
    icon: Users,
    title: "Delegated Execution",
    body: "Let an admin or team member handle fast approval inside Telegram without adding a full-time social media role.",
  },
];

const howItWorks = [
  "Hesperus monitors selected YouTube channels in your niche.",
  "It identifies videos where your brand can contribute meaningfully.",
  "It generates a thoughtful, brand-aligned comment draft.",
  "The draft is delivered instantly via Telegram.",
  "You or a team member reviews, approves, and posts.",
];

const executionModel = [
  {
    icon: Sparkles,
    title: "AI-assisted detection and drafting",
    body: "Hesperus handles timing, monitoring, and first-draft creation so your team is only brought in when there is a real opportunity worth reviewing.",
  },
  {
    icon: ShieldCheck,
    title: "Human-controlled approval",
    body: "Your team keeps the final decision on whether to approve, edit, or skip. The workflow is designed for speed without giving up judgment.",
  },
];

const qualityPoints = [
  "No bulk commenting.",
  "No generic engagement bait.",
  "No fake conversation loops.",
  "No pretending automation is strategy.",
];

const commandCenter = [
  "Receive opportunities in real time.",
  "Review and approve from anywhere.",
  "Keep the workflow inside a tool your team already checks.",
  "Move fast enough to feel instant without losing control.",
];

const pricingPoints = [
  "Strategic channel selection",
  "Brand voice calibration",
  "System setup and configuration",
  "Ongoing monitoring and refinement",
  "Managed execution support",
];

const mailtoHref =
  "mailto:hello@gethesperus.com?subject=Get%20Hesperus&body=I%20want%20to%20learn%20more%20about%20Hesperus.";

export function HesperusLanding() {
  return (
    <main className="hesperus-shell">
      <div className="page-wrap">
        <nav className="site-nav">
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
            <a className="cta-secondary" href={mailtoHref}>
              hello@gethesperus.com
            </a>
          </div>
        </nav>
      </div>

      <section id="top" className="section">
        <div className="page-wrap hero-grid">
          <div className="hero-copy section-stack">
            <p className="eyebrow rise-in delay-1">AI-Assisted YouTube Engagement</p>
            <h1 className="display rise-in delay-2">
              Turn Other People&apos;s YouTube Audiences Into Your Inbound Lead Pipeline
            </h1>
            <p className="copy rise-in delay-3">
              Hesperus helps your team show up in the right YouTube conversations at
              the exact moment your ideal customers are paying attention without
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
          </div>

          <div className="hero-card rise-in delay-4">
            <div className="telegram-card">
              <div className="telegram-topbar">
                <div>
                  <div className="telegram-pill">New YouTube Opportunity</div>
                </div>
                <Clock3 className="h-5 w-5" />
              </div>
              <div className="telegram-body">
                <div className="telegram-block">
                  <span className="telegram-label">Channel</span>
                  <p className="telegram-text">Commercial Real Estate Mentor</p>
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
                    The audience is actively discussing capital pressure, operator risk,
                    and what they trust from sponsors right now.
                  </p>
                </div>
                <div className="telegram-block">
                  <span className="telegram-label">Draft Comment</span>
                  <p className="telegram-text telegram-comment">
                    Good breakdown. The piece that stood out most was how quickly
                    disciplined operators can earn trust when they explain risk
                    clearly instead of selling certainty.
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
        </div>
      </section>

      <section className="section">
        <div className="page-wrap">
          <div className="section-stack">
            <p className="eyebrow">Why Teams Buy This</p>
            <h2 className="section-title">A tighter path from YouTube attention to inbound lead flow</h2>
            <p className="copy">
              Instead of competing with large creators for attention, Hesperus helps
              your brand participate where your market is already watching, learning,
              and making buying decisions.
            </p>
          </div>
          <div className="grid-3" style={{ marginTop: "1.5rem" }}>
            {benefits.map((item) => (
              <article key={item.title} className="stat-card">
                <item.icon className="h-9 w-9" style={{ color: "rgb(var(--accent))" }} />
                <h3 style={{ marginTop: "1rem" }}>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="section">
        <div className="page-wrap">
          <div className="section-stack">
            <p className="eyebrow">How It Works</p>
            <h2 className="section-title">A fast workflow with a human still in control</h2>
            <p className="copy">
              The goal is not to simulate engagement. The goal is to help your team
              contribute intelligently while the conversation is still fresh.
            </p>
          </div>
          <div className="grid-3 steps" style={{ marginTop: "1.5rem" }}>
            {howItWorks.map((step) => (
              <article key={step} className="surface-card step-card">
                <p>{step}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="page-wrap grid-2">
          <div className="surface-card">
            <p className="eyebrow">Execution Model</p>
            <h2 className="section-title" style={{ fontSize: "2.3rem", marginTop: "0.4rem" }}>
              AI-assisted, human-controlled, easy to delegate
            </h2>
            <p className="copy">
              Most clients do not handle this themselves. An admin, assistant, or
              team member can manage the approval flow in under five minutes a day.
            </p>
          </div>
          <div className="grid-2">
            {executionModel.map((item) => (
              <article key={item.title} className="surface-card">
                <item.icon className="h-9 w-9" style={{ color: "rgb(var(--accent-2))" }} />
                <h3 style={{ marginTop: "1rem" }}>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="page-wrap grid-2">
          <article className="surface-card">
            <p className="eyebrow">Built For Quality, Not Spam</p>
            <h2 className="section-title" style={{ fontSize: "2.3rem", marginTop: "0.4rem" }}>
              Better contribution beats fake volume
            </h2>
            <p className="copy">
              Hesperus is designed to avoid the exact behaviors that make most
              automation tools feel cheap, repetitive, and risky for the brand.
            </p>
            <ul>
              {qualityPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>

          <article className="surface-card">
            <p className="eyebrow">Telegram Command Center</p>
            <h2 className="section-title" style={{ fontSize: "2.3rem", marginTop: "0.4rem" }}>
              The approval loop stays inside Telegram
            </h2>
            <p className="copy">
              That keeps execution fast, visible, and easy to hand off to someone
              on your team without disrupting their day.
            </p>
            <ul>
              {commandCenter.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section id="pricing" className="section">
        <div className="page-wrap grid-2">
          <div className="pricing-panel">
            <p className="eyebrow">Pricing</p>
            <h2 className="section-title" style={{ marginTop: "0.4rem" }}>
              Premium managed service, starting simple
            </h2>
            <span className="price">$3,000/mo</span>
            <p className="copy" style={{ marginTop: "1rem" }}>
              Pricing scales with scope, especially based on the number of channels
              monitored and how much refinement is required around positioning and voice.
            </p>
          </div>
          <div className="surface-card">
            <p className="eyebrow">What You Get</p>
            <h3 style={{ marginTop: "0.5rem" }}>Managed setup, targeting, and refinement</h3>
            <ul>
              {pricingPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="fit" className="section">
        <div className="page-wrap final-panel">
          <p className="eyebrow">Final CTA</p>
          <h2 className="section-title" style={{ maxWidth: "15ch", marginTop: "0.4rem" }}>
            If this fits your growth strategy, the next step is a fit conversation.
          </h2>
          <p className="copy" style={{ maxWidth: "44rem", marginTop: "1rem" }}>
            We will look at whether your niche is a strong match, which channels
            matter most, how your brand should sound in public, and whether to start
            with a pilot or a full engagement.
          </p>
          <div className="cta-row">
            <a className="cta-primary" href={mailtoHref}>
              Get Hesperus <Send className="ml-2 h-4 w-4" />
            </a>
            <a className="cta-secondary" href="mailto:hello@gethesperus.com">
              See If This Fits Your Business
            </a>
          </div>
          <div className="grid-3" style={{ marginTop: "1.5rem" }}>
            <div className="surface-card">
              <CheckCircle2 className="h-8 w-8" style={{ color: "rgb(var(--accent))" }} />
              <h3 style={{ marginTop: "1rem" }}>High-quality inbound leads</h3>
              <p>Built for businesses that care more about lead quality than vanity metrics.</p>
            </div>
            <div className="surface-card">
              <MessageSquareText className="h-8 w-8" style={{ color: "rgb(var(--accent))" }} />
              <h3 style={{ marginTop: "1rem" }}>Public brand alignment</h3>
              <p>Your visible comments should sound like your business, not a content machine.</p>
            </div>
            <div className="surface-card">
              <Users className="h-8 w-8" style={{ color: "rgb(var(--accent))" }} />
              <h3 style={{ marginTop: "1rem" }}>Delegated execution</h3>
              <p>Someone on your team can keep this moving without becoming a full-time operator.</p>
            </div>
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
