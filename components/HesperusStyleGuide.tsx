import Image from "next/image";
import { ArrowRight, CheckCircle2, PlayCircle, ShieldCheck, Sparkles, Star } from "lucide-react";
import { CloudflareVideoPlayer } from "./CloudflareVideoPlayer";
import { designSystem } from "@/lib/designSystem";

const mailtoHref =
  "mailto:hello@gethesperus.com?subject=Get%20Hesperus&body=I%20want%20to%20see%20if%20Hesperus%20fits%20my%20business.";

const colorTokens = [
  { label: "Background Dark", rgb: "8 10 28", hex: "#080A1C", className: "token-bg-dark" },
  { label: "Background Dark 2", rgb: "18 12 47", hex: "#120C2F", className: "token-bg-dark-2" },
  { label: "Hero Text", rgb: "248 243 237", hex: "#F8F3ED", className: "token-hero-text" },
  { label: "Hero Muted", rgb: "195 190 205", hex: "#C3BECD", className: "token-hero-muted" },
  { label: "Accent", rgb: "255 110 58", hex: "#FF6E3A", className: "token-accent" },
  { label: "Accent 2", rgb: "255 169 74", hex: "#FFA94A", className: "token-accent-2" },
  { label: "Accent 3", rgb: "230 92 190", hex: "#E65CBE", className: "token-accent-3" },
  { label: "Surface", rgb: "247 241 236", hex: "#F7F1EC", className: "token-surface" },
  { label: "Surface Card", rgb: "255 253 250", hex: "#FFFDFA", className: "token-surface-card" },
  { label: "Surface Text", rgb: "31 29 40", hex: "#1F1D28", className: "token-surface-text" },
];

const pageWrapperLabel = `min(${designSystem.pageWrapperMaxPx}px, calc(100% - ${designSystem.pageWrapperGutterRem}rem))`;
const fullContainerLabel = `calc(100% - ${designSystem.containerFullGutterRem * 2}rem)`;
const largeContainerLabel = `${designSystem.containerLargePercent}%`;
const mediumContainerLabel = `${designSystem.containerMediumRem}rem / ${designSystem.containerMediumRem * 16}px`;
const smallContainerLabel = `${designSystem.containerSmallRem}rem / ${designSystem.containerSmallRem * 16}px`;
const sectionPaddingLabel = `${designSystem.sectionPaddingRem}rem / ${designSystem.sectionPaddingRem * 16}px`;
const sectionStackGapLabel = `${designSystem.sectionStackGapRem}rem / ${designSystem.sectionStackGapRem * 16}px`;
const containerGapLabel = `${designSystem.containerGapRem}rem / ${designSystem.containerGapRem * 16}px`;
const graphicsRules = [
  "Dark cinematic top sections, warm editorial lower sections",
  "Premium SaaS meets operator dashboard, not generic startup gradients",
  "Use strong layout geometry, clear hierarchy, and generous negative space",
  "Prefer diagrams, UI panels, funnel visuals, and channel-to-site flow graphics",
  "Avoid cartoonish illustrations, fake 3D blobs, crypto aesthetics, or noisy textures",
];
const graphicsMotifs = [
  "YouTube audience flow into a client-owned channel",
  "Funnels, paths, arrows, and narrowing conversion stages",
  "High-signal dashboard panels and monitoring surfaces",
  "Warm orange highlights against deep navy backgrounds",
];

export function HesperusStyleGuide() {
  return (
    <main className="style-guide-page">
      <section className="style-guide-hero-section hero-shell style-guide-shell">
        <div className="hero-noise" />
        <header className="site-header shell">
          <div className="site-header-inner">
            <a className="brand-lockup" href="/">
              <span className="brand-mark">
                <Star className="h-4 w-4" />
              </span>
              <span className="brand-wordmark">Hesperus</span>
            </a>

            <nav className="site-nav">
              <a href="/">Home</a>
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

        <div className="shell style-guide-hero">
          <p className="section-label">Temporary Internal Review Page</p>
          <h1 className="hero-title style-guide-title">
            <span className="hero-title-main">Hesperus Style Guide</span>
            <span className="hero-title-accent">Current Site Styles</span>
          </h1>
          <p className="style-guide-intro">
            This page shows the live visual language used across the current landing page so we can
            tune it in one place and remove this route when the site is finalized.
          </p>
        </div>
      </section>

      <section className="style-guide-content-section light-section">
        <div className="shell style-guide-stack">
          <div className="style-guide-section">
            <div className="style-guide-heading">
              <p className="section-label dark">Colors</p>
              <h2>Core tokens currently driving the site.</h2>
            </div>
            <div className="token-grid">
              {colorTokens.map((token) => (
                <article key={token.label} className="token-card">
                  <div className={`token-swatch ${token.className}`} />
                  <h3>{token.label}</h3>
                  <div className="token-meta">
                    <p>{`rgb(${token.rgb})`}</p>
                    <p>{token.hex}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="style-guide-section">
            <div className="style-guide-heading">
              <p className="section-label dark">Containers</p>
              <h2>Current width system for page layout and content blocks.</h2>
            </div>
            <div className="container-demo-card">
              <div className="container-demo-frame">
                <div className="container-demo-overlay container-demo-full">
                  <span className="container-demo-tag container-demo-tag-full">
                    {`Full Page Width: ${fullContainerLabel}`}
                  </span>
                  <div className="container-demo-overlay container-demo-page">
                    <span className="container-demo-tag container-demo-tag-page">
                      {`Page Wrapper: ${pageWrapperLabel}`}
                    </span>
                    <div className="container-demo-overlay container-demo-large">
                      <span className="container-demo-tag container-demo-tag-large">
                        {`Large: ${largeContainerLabel}`}
                      </span>
                      <div className="container-demo-overlay container-demo-medium">
                        <span className="container-demo-tag container-demo-tag-medium">
                          {`Medium: ${mediumContainerLabel}`}
                        </span>
                        <div className="container-demo-overlay container-demo-small">
                          <span className="container-demo-tag container-demo-tag-small">
                            {`Small: ${smallContainerLabel}`}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="style-guide-section">
            <div className="style-guide-heading">
              <p className="section-label dark">Typography</p>
              <h2>Headline, section, body, and small label treatments.</h2>
            </div>
            <div className="dual-card-grid">
              <article className="content-card">
                <p className="section-label dark">Hero Title</p>
                <div className="style-type-sample">
                  <p className="style-guide-type-main">
                    I Turn Other People&apos;s YouTube Audiences Into Your Leads.
                  </p>
                  <p className="style-guide-type-note">Plain white, centered, sentence-case, high-impact headline</p>
                </div>
              </article>

              <article className="content-card accent">
                <p className="section-label dark">Section Type</p>
                <h2>Designed for relevance, timing, and quality control.</h2>
                <p className="style-guide-copy">
                  Plus Jakarta Sans is used site-wide for both the marketing copy and the tighter UI
                  labels.
                </p>
              </article>
            </div>
          </div>

          <div className="style-guide-section">
            <div className="style-guide-heading">
              <p className="section-label dark">Spacing</p>
              <h2>Simple spacing rules for sections and stacked containers.</h2>
            </div>
            <div className="spacing-guide">
              <article className="spacing-card">
                <div className="spacing-card-header">
                  <h3>Special Section Inset</h3>
                  <p>{sectionPaddingLabel}</p>
                </div>
                <div className="spacing-demo spacing-demo-section">
                  <div className="spacing-demo-band spacing-demo-band-dark">Section Start</div>
                  <div className="spacing-demo-measure spacing-demo-measure-section" />
                  <div className="spacing-demo-band">Section Content</div>
                </div>
              </article>

              <article className="spacing-card">
                <div className="spacing-card-header">
                  <h3>Section Spacer</h3>
                  <p>{sectionStackGapLabel}</p>
                </div>
                <div className="spacing-demo spacing-demo-stack">
                  <div className="spacing-demo-band spacing-demo-band-dark">Section A</div>
                  <div className="spacing-demo-measure spacing-demo-measure-stack" />
                  <div className="spacing-demo-band">Section B</div>
                </div>
              </article>

              <article className="spacing-card">
                <div className="spacing-card-header">
                  <h3>Container Gap</h3>
                  <p>{containerGapLabel}</p>
                </div>
                <div className="spacing-demo spacing-demo-containers">
                  <div className="spacing-demo-band spacing-demo-band-accent">Container One</div>
                  <div className="spacing-demo-measure spacing-demo-measure-container" />
                  <div className="spacing-demo-band spacing-demo-band-accent-light">Container Two</div>
                </div>
              </article>
            </div>
          </div>

          <div className="style-guide-section">
            <div className="style-guide-heading">
              <p className="section-label dark">Buttons</p>
              <h2>Primary and secondary action styles used in the hero and CTA sections.</h2>
            </div>
            <div className="style-button-row">
              <a className="primary-button large" href={mailtoHref}>
                Get Hesperus <ArrowRight className="h-4 w-4" />
              </a>
              <a className="ghost-link style-guide-ghost" href="#components">
                <PlayCircle className="h-5 w-5" />
                <span>See If This Fits Your Business</span>
              </a>
            </div>
          </div>

          <div className="style-guide-section" id="components">
            <div className="style-guide-heading">
              <p className="section-label dark">Video</p>
              <h2>Current marketing-site video treatment.</h2>
            </div>
            <div className="style-guide-video">
              <CloudflareVideoPlayer
                className="cloudflare-player-shell style-guide-video-shell container-medium"
                iframeClassName="cloudflare-player-iframe style-guide-video-iframe"
              />
            </div>
            <p className="style-guide-footnote">{`Landing-page video width: medium container (${mediumContainerLabel})`}</p>
          </div>

          <div className="style-guide-section">
            <div className="style-guide-heading">
              <p className="section-label dark">Components</p>
              <h2>Examples of the cards, chips, panels, and CTA block styles in use.</h2>
            </div>
            <div className="style-component-grid">
              <article className="funnel-stage style-guide-funnel-stage">
                <div className="funnel-stage-icon">
                  <Sparkles className="h-4 w-4" />
                </div>
                <div>
                  <p className="funnel-stage-label">Funnel Stage</p>
                  <p className="funnel-stage-metric">Dark glass panel with warm accent label</p>
                  <p className="funnel-stage-body">Used for the audience-to-lead funnel section on the live page.</p>
                </div>
              </article>

              <article className="content-card">
                <p className="section-label dark">Content Card</p>
                <h2>Used for explanatory and workflow sections.</h2>
                <ol className="execution-list">
                  <li>
                    <span>1</span>
                    <p>Rounded card shell with light surface, border, and soft shadow.</p>
                  </li>
                  <li>
                    <span>2</span>
                    <p>Numbered list styling for process-oriented content.</p>
                  </li>
                </ol>
              </article>

              <article className="content-card accent">
                <p className="section-label dark">Accent Card</p>
                <h2>Used where a lighter warm gradient helps emphasize a block.</h2>
                <ul className="quality-list">
                  <li>
                    <ShieldCheck className="h-4 w-4" />
                    <span>Quality rules and exclusion language</span>
                  </li>
                  <li>
                    <ShieldCheck className="h-4 w-4" />
                    <span>Trust and brand-safety framing</span>
                  </li>
                </ul>
              </article>

              <article className="opportunity-card">
                <div className="opportunity-sidebar">
                  <div className="demo-brand dark">
                    <Star className="h-3.5 w-3.5" />
                    <span>Hesperus</span>
                  </div>
                  <div className="demo-nav-item active">Dashboard</div>
                  <div className="demo-nav-item">Opportunities</div>
                  <div className="demo-nav-item">Alerts</div>
                </div>

                <div className="opportunity-main">
                  <div className="demo-topbar light">
                    <div>
                      <p className="demo-heading dark">Top Opportunities</p>
                      <p className="demo-subheading dark">Dashboard card treatment in use</p>
                    </div>
                    <div className="demo-filter light">This Week</div>
                  </div>

                  <div className="demo-table light">
                    <div className="demo-row light">
                      <div className="demo-row-icon light">
                        <PlayCircle className="h-4 w-4" />
                      </div>
                      <div className="demo-row-copy">
                        <p className="demo-row-title dark">HELOC strategy video with active investor discussion</p>
                        <div className="demo-tags light">
                          <span>High Intent</span>
                          <span>Telegram Ready</span>
                        </div>
                      </div>
                      <div className="demo-score light">
                        <strong>96</strong>
                        <span>/100</span>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>

          <div className="style-guide-section">
            <div className="style-guide-heading">
              <p className="section-label dark">Graphics Brief</p>
              <h2>Use this section as the creative handoff for new on-brand graphics.</h2>
            </div>
            <div className="dual-card-grid">
              <article className="content-card">
                <p className="section-label dark">Visual Direction</p>
                <ul className="quality-list">
                  {graphicsRules.map((rule) => (
                    <li key={rule}>
                      <ShieldCheck className="h-4 w-4" />
                      <span>{rule}</span>
                    </li>
                  ))}
                </ul>
              </article>

              <article className="content-card accent">
                <p className="section-label dark">Preferred Motifs</p>
                <ul className="quality-list">
                  {graphicsMotifs.map((motif) => (
                    <li key={motif}>
                      <ShieldCheck className="h-4 w-4" />
                      <span>{motif}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          </div>

          <section className="style-guide-cta-section cta-section style-guide-cta">
            <div className="cta-banner">
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
                <h2>CTA Banner Style</h2>
                <p>This is the same banner treatment currently used for the pricing and final conversion block.</p>
                <ul className="fit-list">
                  <li>
                    <CheckCircle2 className="h-4 w-4" />
                    <span>Dark gradient surface</span>
                  </li>
                  <li>
                    <CheckCircle2 className="h-4 w-4" />
                    <span>Bright primary CTA</span>
                  </li>
                </ul>
              </div>

              <div className="cta-banner-action">
                <div className="pricing-chip">Current CTA Treatment</div>
                <a className="primary-button large" href={mailtoHref}>
                  Get Hesperus <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
