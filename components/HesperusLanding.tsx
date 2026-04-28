import Image from "next/image";
import { CloudflareVideoPlayer } from "./CloudflareVideoPlayer";
import {
  ArrowRight,
  ArrowBigDown,
  BellRing,
  CalendarDays,
  CheckCircle2,
  Compass,
  DollarSign,
  Eye,
  MessageSquareQuote,
  PhoneCall,
  PlayCircle,
  Radar,
  Send,
  ShieldCheck,
  Sparkles,
  Star,
  Telescope,
  Users,
  X,
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

const benefits = [
  {
    icon: Compass,
    title: "Where You're Showing Up",
    body: "See which channels we're active on, how often we're posting, and where your visibility is coming from.",
  },
  {
    icon: Zap,
    title: "How Traffic Is Moving",
    body: "Track how attention turns into real traffic — and which channels are actually driving it.",
  },
  {
    icon: BellRing,
    title: "Leads Being Generated",
    body: "See how many leads are coming in and where they're coming from — tied back to real activity.",
  },
  {
    icon: MessageSquareQuote,
    title: "What's Working",
    body: "Identify which channels and conversations are producing results so the system improves over time.",
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
    body: "We start with a fit conversation to understand your business, your offer, and your market. If this channel-first approach does not make sense for you, I will tell you before anything starts.",
    bullets: [
      "Make sure this will actually produce leads for your business",
    ],
  },
  {
    title: "Source Channel Foundation",
    body: "Before launch, I make sure your YouTube channel is credible and positioned correctly so that when someone clicks, they do not bounce — they stay, trust, and move forward.",
    bullets: [
      "Clear positioning and messaging",
      "Channel setup that builds trust",
      "At least 5 evergreen videos that answer real buyer questions",
    ],
  },
  {
    title: "Targeting, Tracking, And Launch Prep",
    body: "Before posting begins, I build the path from attention to click to lead. Nothing goes live until the full path is in place.",
    bullets: [
      "Identify the channels and conversations worth entering",
      "Align the click path to your website or landing page",
      "Set up tracking so every lead can be tied back to the source",
    ],
  },
];

const fitPoints = [
  "Businesses doing $500K+ in annual revenue",
  "Offers where one new client can justify the investment",
  "Service businesses with high-ticket sales or recurring revenue",
  "Companies willing to build a credible YouTube presence (I handle the setup)",
  "Founders who want qualified inbound leads, not just visibility",
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
    title: "You Tap Into Massive Existing Demand",
    body: (
      <>
        <strong>YouTube is where your buyers go to figure out what to do.</strong>{" "}
        Your buyers are already searching for answers, strategies, and
        solutions in your niche. By showing up on the right channels, you're
        not creating demand — you're stepping directly into it.
      </>
    ),
  },
  {
    icon: Radar,
    title: "Authority Transfers By Proximity",
    body: "Large creators — and even respected niche channels — carry influence. When your brand consistently shows up in their conversations, that trust transfers. You're no longer unknown — you're part of the space.",
  },
  {
    icon: Telescope,
    title: "Video Builds Trust Instantly",
    body: "Nothing builds trust faster than video. When someone clicks through, they don't land on a static page — they land on your channel, your content, your voice. They can immediately see how you think, how you explain, and whether they trust you.",
  },
  {
    icon: Send,
    title: "You Show Up When Decisions Are Being Made",
    body: "People go to YouTube to learn, evaluate, and decide. Some try to DIY. Some look to hire the creator. But when that doesn't work, they ask: \"Who do I actually trust to do this?\" If your brand has been consistently showing up in that conversation, you're already in the running.",
  },
  {
    icon: BellRing,
    title: "Consistent Visibility → Consistent Deal Flow",
    body: "As new videos are published and conversations continue, your brand keeps showing up. That creates steady visibility, repeated exposure, and ongoing inbound leads. Not a one-time campaign — a continuous flow.",
  },
  {
    icon: Compass,
    title: "Higher-Quality Leads",
    body: "These aren't cold clicks. They're people who were already researching the problem, already considering solutions, and already understand the value. That's why the leads are more qualified — and easier to close.",
  },
];

const notFitPoints = [
  "Early-stage businesses still figuring out their offer",
  "Offers where a new client does not justify the investment",
  "Anyone looking for shortcuts, bulk comments, or spam tactics",
  "Businesses expecting results without participating in setup and follow-through",
];

const clientTypePoints = [
  "I work best with service businesses, experts, educators, and founder-led brands that can benefit from trust-based lead flow.",
  "I take on a limited number of clients at a time so I can stay directly involved in strategy, execution, and optimization.",
  "I do not want a bloated roster. I want a small book of businesses where I can actually move the needle.",
];

const pricingPlans = [
  {
    name: "Starter",
    targetChannels: "3 Target Channels",
    subtitle: "Initial presence in your niche",
    description:
      "Build visibility and start generating inbound interest from the right conversations.",
    price: "$2,000",
    cadence: "/ month",
    includedLabel: "Includes:",
    features: [
      "Full setup (channel, targeting, conversion path)",
      "Placement across 3 selected target channels",
      "Up to 30 placements per month",
      "Ongoing comment writing and posting",
      "Landing page alignment + tracking",
      "Weekly performance visibility",
    ],
    bestFor: "Validating lead flow in your market",
  },
  {
    name: "Growth",
    targetChannels: "5 Target Channels",
    subtitle: "Consistent visibility and inbound traffic",
    description:
      "Expand your reach and generate steady, qualified inbound leads.",
    supportingLine:
      "This is where the system starts to produce consistent lead flow.",
    price: "$3,500",
    cadence: "/ month",
    includedLabel: "Everything in Starter, plus:",
    features: [
      "Placement across 5 target channels",
      "Up to 60 placements per month",
      "Broader coverage across your niche",
      "More consistent traffic and lead flow",
      "Increased optimization based on performance",
    ],
    bestFor: "Businesses ready for consistent deal flow",
    featured: true,
  },
  {
    name: "Scale",
    targetChannels: "10 Target Channels",
    subtitle: "High-frequency presence across your niche",
    description:
      "Maximize visibility and build a dominant presence in key conversations.",
    price: "$5,000",
    cadence: "/ month",
    includedLabel: "Everything in Growth, plus:",
    features: [
      "Placement across 10 target channels",
      "Up to 120 placements per month",
      "Highest volume of traffic and leads",
      "Priority optimization and focus",
    ],
    bestFor:
      "Businesses looking to fully leverage YouTube as a lead channel",
  },
];

const featureReliefPoints = [
  {
    title: "Find Target Channels",
    body: "I identify the right channels and conversations so you are not guessing where to show up.",
  },
  {
    title: "Write Or Manage Comments",
    body: "I handle the actual comment strategy and execution so you do not have to manage the day-to-day work.",
  },
  {
    title: "Track Traffic Or Performance",
    body: "I connect the traffic path and reporting so you can see what attention is turning into real activity.",
  },
  {
    title: "Figure Out What's Working",
    body: "I surface the signals that matter so you know where the system is producing results over time.",
  },
];

const resultsStoryPoints = [
  {
    icon: MessageSquareQuote,
    text: "Consistent presence in high-intent conversations",
  },
  {
    icon: Eye,
    text: "Built familiarity before the buyer reached out",
  },
  {
    icon: Users,
    text: "Became the obvious next option when they were ready to act",
  },
];

const resultsMetricCards = [
  {
    icon: MessageSquareQuote,
    label: "Source",
    value: "YouTube Comments",
  },
  {
    icon: CalendarDays,
    label: "Time To Close",
    value: "~1 Week",
  },
  {
    icon: PhoneCall,
    label: "Lead Type",
    value: "Inbound Call",
  },
  {
    icon: DollarSign,
    label: "Deal Context",
    value: "High-Value Client",
    detail: "Boat brokerage, $100K+ deals",
  },
];

const mailtoHref =
  "mailto:hello@gethesperus.com?subject=Hesperus%20Fit%20Call&body=I%20want%20to%20talk%20about%20using%20Hesperus%20as%20a%20managed%20lead-generation%20service%20for%20my%20business.";

function SectionCta({
  label = "Book a Fit Call",
  caption,
}: {
  label?: string;
  caption?: string;
}) {
  return (
    <div className="shell section-cta-row-shell">
      <div className="section-cta-row container-small">
        <a className="primary-button large" href={mailtoHref}>
          {label} <ArrowRight className="h-4 w-4" />
        </a>
        {caption ? <p className="section-cta-caption">{caption}</p> : null}
      </div>
    </div>
  );
}

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
              <a href="#funnel">YouTube Leads Funnel</a>
              <a href="#channel-wins">Why YouTube?</a>
              <a href="#features">Features</a>
            </nav>

            <div className="site-actions">
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
              title="Hesperus marketing video"
            />
            <aside className="hero-callout-card">
              <blockquote className="hero-callout-quote">
                <span className="hero-callout-quote-mark" aria-hidden="true">
                  &ldquo;
                </span>
                You don&apos;t need more content. You need to show up where your
                buyers are already paying attention &mdash; and turn that attention
                into pipeline.
              </blockquote>
              <div className="hero-callout-attribution">
                <Image
                  src="/macdonald-thomas-headshot.webp"
                  alt="Thomas Macdonald"
                  width={80}
                  height={80}
                  className="hero-callout-headshot"
                />
                <div className="hero-callout-credit">
                  <strong>Thomas</strong>
                  <span>Founder, Hesperus</span>
                </div>
              </div>
            </aside>
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
            <h2 className="section-label">YouTube Leads Funnel</h2>
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
        <SectionCta
          label="Get A Lead Flow Plan For Your Business"
          caption="See how this would work for your market, offer, and traffic path"
        />
      </section>

      <section id="channel-wins" className="channel-advantage-section content-section">
        <div className="shell channel-advantage-shell container-large section-shell">
          <div className="channel-advantage-intro section-intro container-medium">
            <h2 className="section-label">Why YouTube?</h2>
            <p className="section-intro-title">
              Because trust, authority, and buying intent are already there.
            </p>
            <p className="section-intro-body">
              I place your brand inside conversations where your buyers are
              already learning, already evaluating options, and already
              deciding what to do next.
            </p>
          </div>

          <div className="channel-advantage-grid">
            {advantagePoints.map((point, index) => (
              <article
                key={point.title}
                className={`advantage-card${index >= advantagePoints.length - 2 ? " advantage-card-green" : ""}`}
              >
                <h3 className="heading-3">{point.title}</h3>
                <p>{point.body}</p>
              </article>
            ))}
          </div>
        </div>
        <SectionCta
          label="See If This Will Work For Your Business"
          caption="I'll look at your niche, your offer, and whether this approach can generate leads for you."
        />
      </section>

      <section id="features" className="features-section light-section">
        <div className="shell features-section-shell container-large section-shell">
          <div className="features-section-intro section-intro container-medium">
            <h2 className="section-label">Features</h2>
            <p className="section-intro-title">
              I handle the entire process. You focus on closing.
            </p>
            <p className="section-intro-body">
              You're not buying software.
              <br />
              You&apos;re hiring me to run the full path from YouTube attention
              to inbound leads — and show you exactly what&apos;s happening along
              the way.
            </p>
          </div>

          <div className="features-dashboard-shell container-large">
            <Image
              src="/hesperus-client-dashboard-lead-generation.png"
              alt="Hesperus client dashboard showing lead generation reporting"
              width={1600}
              height={1100}
              className="features-dashboard-image"
            />
          </div>

            <div className="features-content-grid">
              <div className="feature-copy">
                <h3 className="heading-3 features-subheading">What You&apos;ll See</h3>
                <div className="feature-list">
                  {benefits.map((item) => (
                  <article key={item.title} className="feature-item">
                    <div className="feature-item-icon">
                      <item.icon className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="heading-3">{item.title}</h3>
                      <p>{item.body}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>

              <div className="feature-system-panel">
                <div className="feature-system-note">
                  <h3 className="heading-3">What You Don&apos;t Have To Do</h3>
                  <div className="feature-relief-list">
                    {featureReliefPoints.map((point) => (
                      <article key={point.title} className="feature-relief-item">
                        <div className="feature-relief-icon" aria-hidden="true">
                          <X className="feature-relief-icon-glyph" />
                        </div>
                        <div>
                          <h3 className="heading-3">{point.title}</h3>
                          <p>{point.body}</p>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              </div>
          </div>
        </div>
        <SectionCta
          label="See If I Can Build This For Your Business"
          caption="I'll look at your niche, your offer, and whether this system can generate leads for you."
        />
      </section>

      <section id="setup" className="setup-section content-section">
        <div className="shell setup-section-shell container-large section-shell">
          <div className="setup-section-intro section-intro container-medium">
            <h2 className="section-label">Setup</h2>
            <p className="section-intro-title">I set up the foundation that makes this work.</p>
            <p className="section-intro-body">
              This is not just comment posting. The source channel, the target-channel
              strategy, the landing path, and the tracking all need to be in place first.
            </p>
          </div>

          <div className="setup-section-grid">
            {setupPoints.map((point, index) => (
              <article key={point.title} className="setup-step-card">
                <div className="setup-step-header">
                  <p className="setup-step-kicker">Step {index + 1}</p>
                </div>
                <h3 className="heading-3">{point.title}</h3>
                <p>{point.body}</p>
                <ul className="setup-step-list">
                  {point.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
        <SectionCta
          label="Get A Setup Plan For Your Business"
          caption="See what needs to be in place before this can work for you"
        />
      </section>

      <section id="how-it-works" className="how-it-works-section content-section">
        <div className="shell how-it-works-shell container-large section-shell">
          <div className="how-it-works-intro section-intro container-medium">
            <h2 className="section-label">Quality</h2>
          </div>

          <div className="dual-card-grid container-large">
          <article className="content-card">
            <h2>Built For Quality, Not Spam</h2>
            <p>
              This only works when it&apos;s done properly.
            </p>
            <p>
              This is not bulk commenting or generic outreach.
            </p>
            <p>
              It only works when the channel, targeting, messaging, and
              conversion path are all aligned — and when every comment is
              placed with intent.
            </p>
            <h3 className="heading-3">No Noise. No Shortcuts.</h3>
            <ul className="quality-list">
              {qualityPoints.map((point) => (
                <li key={point}>
                  <ShieldCheck className="h-4 w-4" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="content-card accent">
            <h2>Every Placement Is Intentional</h2>
            <p>Your brand shows up where it actually belongs.</p>
            <p>I don&apos;t post everywhere.</p>
            <p>
              I place your brand in conversations where:
            </p>
            <ul className="quality-list">
              <li>
                <CheckCircle2 className="h-4 w-4" />
                <span>your audience is already paying attention</span>
              </li>
              <li>
                <CheckCircle2 className="h-4 w-4" />
                <span>the topic matches your offer</span>
              </li>
              <li>
                <CheckCircle2 className="h-4 w-4" />
                <span>the context makes sense</span>
              </li>
            </ul>
            <div className="command-box" id="about">
              <div className="command-box-icon">
                <Sparkles className="h-4 w-4" />
              </div>
              <div>
                <h3 className="heading-3">Built To Convert, Not Just Be Seen</h3>
                <p>
                  Visibility means nothing if it doesn&apos;t turn into leads.
                </p>
                <p>
                  Every step is aligned to one outcome: the right person sees
                  your comment, clicks through, trusts what they find, and takes
                  action.
                </p>
              </div>
            </div>
          </article>
          </div>
        <SectionCta
          label="See If This Will Work For Your Business"
          caption="I&apos;ll look at your niche, your offer, and whether this approach can generate leads for you."
        />
        </div>
      </section>

      <section id="results" className="results-section content-section">
        <div className="shell results-shell container-large section-shell">
          <div className="results-intro section-intro container-medium">
            <h2 className="section-label">Results</h2>
            <p className="section-intro-title">
              What this looks like in practice
            </p>
            <p className="section-intro-body">
              Before offering this as a service, I used the same approach to
              generate a client for my own business.
            </p>
          </div>

          <div className="results-case-card container-large">
            <div className="results-case-grid">
              <div className="results-story">
                <div className="results-story-label">Real Example</div>
                <h3 className="heading-3 results-story-title">
                  Bookkeeping Client Acquired From YouTube Comments
                </h3>
                <p className="results-story-micro-tag">
                  1 client -&gt; 1 week -&gt; inbound call
                </p>
                <p className="results-story-outcome">
                  Closed a new client within ~1 week from YouTube comment visibility.
                </p>
                <div className="results-cta results-cta-inline">
                  <a className="primary-button large" href={mailtoHref}>
                    See If This Will Work For Your Business{" "}
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  <p className="results-cta-caption">
                    I&apos;ll look at your niche, your offer, and whether this
                    approach can generate leads for you.
                  </p>
                </div>
                <div className="results-story-copy">
                  <p>
                    I consistently showed up in the comments on a large
                    bookkeeping YouTube channel — not with spam, but with
                    relevant input where people were actively looking for help.
                  </p>
                  <p>
                    A company in the marine space wanted to work with the
                    channel creator — but he wasn&apos;t available.
                  </p>
                  <p>
                    They had already seen my name repeatedly in the comments.
                    When they needed an alternative, I was the obvious next
                    option.
                  </p>
                </div>
              </div>

              <div className="results-metrics">
                <p className="results-metrics-label">Outcome</p>
                <div className="results-metrics-grid">
                  {resultsMetricCards.map((card) => (
                    <article key={card.label} className="results-metric-card">
                      <div className="results-metric-icon">
                        <card.icon className="h-5 w-5" />
                      </div>
                      <p className="results-metric-label">{card.label}</p>
                      <p className="results-metric-value">{card.value}</p>
                      {card.detail ? (
                        <p className="results-metric-detail">{card.detail}</p>
                      ) : null}
                    </article>
                  ))}
                </div>

                <blockquote className="results-quote">
                  This isn&apos;t about volume. It&apos;s about showing up in
                  the right conversations and being the obvious choice when
                  someone is ready to hire.
                </blockquote>
              </div>

              <div className="results-story-points">
                {resultsStoryPoints.map((point) => (
                  <div key={point.text} className="results-story-point">
                    <div className="results-story-point-icon">
                      <point.icon className="h-4 w-4" />
                    </div>
                    <p>{point.text}</p>
                  </div>
                ))}
              </div>

              <div className="results-cta results-cta-bottom">
                <a className="primary-button large" href={mailtoHref}>
                  See If This Will Work For Your Business{" "}
                  <ArrowRight className="h-4 w-4" />
                </a>
                <p className="results-cta-caption">
                  I&apos;ll look at your niche, your offer, and whether this
                  approach can generate leads for you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="who-its-for" className="who-its-for-section content-section">
        <div className="shell who-its-for-shell container-large section-shell">
          <div className="who-its-for-intro section-intro container-medium">
            <h2 className="section-label">The Fit</h2>
            <p className="section-intro-title">
              This works best for established businesses with real deal value.
            </p>
            <p className="section-intro-body">
              This is not for early-stage companies still figuring out their
              offer. It works best when you already have a proven business, a
              clear service, and the ability to turn one inbound lead into
              meaningful revenue.
            </p>
          </div>

          <div className="audience-fit-grid">
            <article className="content-card">
                <h3 className="heading-3">A Strong Fit</h3>
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
                <h3 className="heading-3">Not A Fit</h3>
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
          <p className="fit-section-note section-intro-body container-medium">
            If one new client per month would make this a clear win, this is
            worth exploring.
          </p>
        </div>
        <SectionCta />
      </section>

      <section id="client-fit" className="client-types-section content-section">
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
                <h3 className="heading-3">The Kinds Of Clients I Work With</h3>
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
                <h3 className="heading-3">Limited Availability</h3>
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
        <SectionCta />
      </section>

      <section id="pricing" className="pricing-section content-section">
        <div className="shell pricing-shell container-large section-shell">
          <div className="pricing-intro section-intro container-medium">
            <h2 className="section-label">Pricing</h2>
            <p className="section-intro-title">
              A simple, done-for-you lead generation system
            </p>
            <p className="section-intro-body">
              This is a managed service. I set up and run the full path from
              YouTube attention -&gt; channel -&gt; website -&gt; inbound leads.
            </p>
            <p className="section-intro-body">
              Most clients treat this as a 60-90 day test to validate lead
              flow.
            </p>
            <p className="section-intro-body">
              I handle strategy, execution, and optimization directly.
            </p>
          </div>

          <div className="pricing-plan-grid">
            {pricingPlans.map((plan) => (
              <article
                key={plan.name}
                className={`pricing-plan-card${plan.featured ? " pricing-plan-card-featured" : " pricing-plan-card-soft"}`}
              >
                {plan.featured ? (
                  <div className="pricing-plan-badge">Recommended</div>
                ) : null}
                <p className="pricing-plan-kicker">{plan.name}</p>
                <h3 className="heading-3 pricing-plan-target">
                  {plan.targetChannels}
                </h3>
                <p className="pricing-plan-subtitle">{plan.subtitle}</p>
                <p className="pricing-plan-copy pricing-plan-description">
                  {plan.description}
                </p>
                {plan.supportingLine ? (
                  <p className="pricing-plan-supporting-line">
                    {plan.supportingLine}
                  </p>
                ) : null}
                <p className="pricing-plan-title">
                  {plan.price} <span>{plan.cadence}</span>
                </p>
                <div className="pricing-plan-stack">
                  <div className="pricing-plan-block">
                    <p className="pricing-plan-list-label">{plan.includedLabel}</p>
                    <ul className="fit-list dark-list pricing-plan-list">
                      {plan.features.map((point) => (
                        <li key={point}>
                          <CheckCircle2 className="h-4 w-4" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pricing-plan-block">
                    <p className="pricing-plan-list-label">Best for:</p>
                    <p className="pricing-note">{plan.bestFor}</p>
                  </div>
                </div>
                <a className="primary-button large pricing-plan-button" href={mailtoHref}>
                  See If This Will Work For Your Business{" "}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </article>
            ))}
          </div>
          <p className="pricing-allocation-note section-intro-body container-medium">
            Placements are allocated across target channels based on activity and opportunity.
          </p>
          <p className="pricing-allocation-note section-intro-body container-medium">
            A lead = a real inbound inquiry (call, form, or booking) from your target market.
          </p>
          <p className="pricing-bottom-note section-intro-body container-medium">
            If one new client per month covers this, it&apos;s worth testing. If it produces more, it becomes a core channel.
          </p>
          <p className="pricing-allocation-note section-intro-body container-medium">
            Limited client capacity - I stay directly involved in each account.
          </p>
        </div>
      </section>

      <footer className="footer-section site-footer shell">
        <div className="footer-brand">
          <span className="brand-mark">
            <Star className="h-4 w-4" />
          </span>
          <span className="brand-wordmark">Hesperus</span>
        </div>
        <nav className="footer-nav">
          <a href="#funnel">The Funnel</a>
          <a href="#setup">Setup</a>
          <a href="#features">Features</a>
          <a href="#channel-wins">Why YouTube?</a>
          <a href="#who-its-for">The Fit</a>
          <a href="#client-fit">Client Fit</a>
          <a href="#pricing">Pricing</a>
        </nav>
        <p>Offered through Southwest Digital Marketing.</p>
        <a href="mailto:hello@gethesperus.com">hello@gethesperus.com</a>
      </footer>
    </main>
  );
}


