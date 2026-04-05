import Nav from "./components/Nav";
import Reveal from "./components/Reveal";

export default function Home() {
  return (
    <>
      <Nav />

      {/* ═══════════════════════════════════════════ HERO */}
      <section className="relative min-h-[100dvh] flex items-center overflow-hidden">
        {/* Warm gradient orbs */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-20 right-[10%] h-[500px] w-[500px] rounded-full bg-amber-200/25 blur-[120px]" />
          <div className="absolute bottom-[10%] right-[25%] h-[350px] w-[350px] rounded-full bg-orange-200/20 blur-[100px]" />
          <div className="absolute top-[40%] left-[5%] h-[250px] w-[250px] rounded-full bg-amber-100/15 blur-[80px]" />
        </div>

        <div className="relative mx-auto w-full max-w-7xl px-5 md:px-10 py-32">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7">
              <Reveal>
                <span className="inline-block rounded-full bg-accent/10 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.15em] text-accent">
                  People Development
                </span>
              </Reveal>

              <Reveal delay={80}>
                <h1 className="mt-7 font-serif text-5xl leading-[1.08] tracking-tight text-charcoal md:text-7xl lg:text-8xl">
                  Empowering growth{" "}
                  <span className="italic text-accent">&</span> development
                </h1>
              </Reveal>

              <Reveal delay={160}>
                <p className="mt-7 max-w-[52ch] text-lg leading-relaxed text-muted md:text-xl">
                  Ignite Potential offers expert people development for
                  individuals, groups, and organisations of all sizes and
                  sectors. Where experience meets personalised progress.
                </p>
              </Reveal>

              <Reveal delay={240}>
                <div className="mt-10 flex flex-wrap gap-4">
                  <a
                    href="#services"
                    className="group inline-flex items-center gap-3 rounded-full bg-charcoal px-7 py-3.5 text-sm font-medium text-bone transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-accent active:scale-[0.97]"
                  >
                    Our services
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5">
                      <ArrowDown />
                    </span>
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex items-center rounded-full border border-charcoal/10 px-7 py-3.5 text-sm font-medium text-charcoal transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:border-charcoal/25 hover:bg-charcoal/[0.03] active:scale-[0.97]"
                  >
                    Get in touch
                  </a>
                </div>
              </Reveal>
            </div>

            <div className="hidden md:col-span-5 md:flex items-center justify-center">
              <div className="relative">
                <div className="h-80 w-80 rounded-[3rem] bg-gradient-to-br from-amber-100/60 via-orange-50/40 to-transparent rotate-6 lg:h-96 lg:w-96" />
                <div className="absolute inset-4 rounded-[2.5rem] bg-gradient-to-tl from-surface via-bone to-transparent -rotate-3 shadow-[inset_0_1px_2px_rgba(255,255,255,0.6)]" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <FlameIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ SERVICES */}
      <section id="services" className="py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <Reveal>
            <span className="inline-block rounded-full bg-accent/10 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.15em] text-accent">
              What we do
            </span>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="mt-5 max-w-2xl font-serif text-4xl leading-[1.12] tracking-tight text-charcoal md:text-5xl lg:text-6xl">
              Tailored development, lasting results
            </h2>
          </Reveal>

          <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-12">
            {/* Individual Development — large featured card */}
            <Reveal className="md:col-span-7" delay={80}>
              <div className="group h-full rounded-[1.5rem] bg-white p-1.5 ring-1 ring-charcoal/[0.04] transition-shadow duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
                <div className="flex h-full flex-col justify-between rounded-[calc(1.5rem-6px)] bg-surface/40 p-8 md:p-10">
                  <div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10">
                      <UserIcon />
                    </div>
                    <h3 className="mt-6 font-serif text-2xl tracking-tight text-charcoal md:text-3xl">
                      Individual development
                    </h3>
                    <p className="mt-4 max-w-[50ch] leading-relaxed text-muted">
                      Personalised coaching to help you overcome challenges, set
                      meaningful goals, and thrive in all aspects of life. Expert
                      guidance tailored to your specific situation and ambitions.
                    </p>
                  </div>
                  <div className="mt-8">
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 text-sm font-medium text-accent transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:gap-3"
                    >
                      Start a conversation
                      <ArrowRight />
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Group Development */}
            <Reveal className="md:col-span-5" delay={160}>
              <div className="group h-full rounded-[1.5rem] bg-white p-1.5 ring-1 ring-charcoal/[0.04] transition-shadow duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
                <div className="flex h-full flex-col justify-between rounded-[calc(1.5rem-6px)] bg-surface/40 p-8 md:p-10">
                  <div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10">
                      <GroupIcon />
                    </div>
                    <h3 className="mt-6 font-serif text-2xl tracking-tight text-charcoal md:text-3xl">
                      Group development
                    </h3>
                    <p className="mt-4 max-w-[50ch] leading-relaxed text-muted">
                      Interactive workshops and targeted coaching that build team
                      cohesion. Our facilitators drive collaboration,
                      communication, and measurable results.
                    </p>
                  </div>
                  <div className="mt-8">
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 text-sm font-medium text-accent transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:gap-3"
                    >
                      Start a conversation
                      <ArrowRight />
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Consulting — offset below */}
            <Reveal className="md:col-span-6 md:col-start-4" delay={240}>
              <div className="group h-full rounded-[1.5rem] bg-white p-1.5 ring-1 ring-charcoal/[0.04] transition-shadow duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
                <div className="flex h-full flex-col justify-between rounded-[calc(1.5rem-6px)] bg-surface/40 p-8 md:p-10">
                  <div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10">
                      <CompassIcon />
                    </div>
                    <h3 className="mt-6 font-serif text-2xl tracking-tight text-charcoal md:text-3xl">
                      Consultancy
                    </h3>
                    <p className="mt-4 max-w-[50ch] leading-relaxed text-muted">
                      Expert consultancy services to drive growth and
                      development. Our team brings experience and diverse
                      perspectives to address your unique challenges and
                      opportunities.
                    </p>
                  </div>
                  <div className="mt-8">
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 text-sm font-medium text-accent transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:gap-3"
                    >
                      Start a conversation
                      <ArrowRight />
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ WHY US */}
      <section id="why" className="py-28 md:py-36 bg-surface/60">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <Reveal>
            <span className="inline-block rounded-full bg-accent/10 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.15em] text-accent">
              Why Ignite Potential
            </span>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="mt-5 max-w-2xl font-serif text-4xl leading-[1.12] tracking-tight text-charcoal md:text-5xl lg:text-6xl">
              Built on experience, driven by results
            </h2>
          </Reveal>

          <div className="mt-20 space-y-20 md:space-y-28">
            {/* Differentiator 1 */}
            <Reveal>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:items-start">
                <div className="md:col-span-2">
                  <span className="font-mono text-sm text-accent">01</span>
                </div>
                <div className="md:col-span-5">
                  <h3 className="font-serif text-3xl tracking-tight text-charcoal md:text-4xl">
                    Diverse expertise
                  </h3>
                </div>
                <div className="md:col-span-5">
                  <p className="leading-relaxed text-muted">
                    Benefit from extensive experience and broad perspectives in
                    leadership and psychology, tailored to suit various sectors
                    and organisational sizes. We draw on real careers — not just
                    textbooks.
                  </p>
                </div>
              </div>
            </Reveal>

            <div className="mx-auto max-w-6xl border-t border-charcoal/[0.06]" />

            {/* Differentiator 2 */}
            <Reveal>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:items-start">
                <div className="md:col-span-2">
                  <span className="font-mono text-sm text-accent">02</span>
                </div>
                <div className="md:col-span-5">
                  <h3 className="font-serif text-3xl tracking-tight text-charcoal md:text-4xl">
                    Real-world application
                  </h3>
                </div>
                <div className="md:col-span-5">
                  <p className="leading-relaxed text-muted">
                    Practical insights and strategies derived from hands-on
                    experience. No theoretical fluff — solutions that have been
                    tested and proven effective in real organisations.
                  </p>
                </div>
              </div>
            </Reveal>

            <div className="mx-auto max-w-6xl border-t border-charcoal/[0.06]" />

            {/* Differentiator 3 */}
            <Reveal>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:items-start">
                <div className="md:col-span-2">
                  <span className="font-mono text-sm text-accent">03</span>
                </div>
                <div className="md:col-span-5">
                  <h3 className="font-serif text-3xl tracking-tight text-charcoal md:text-4xl">
                    Personalised approach
                  </h3>
                </div>
                <div className="md:col-span-5">
                  <p className="leading-relaxed text-muted">
                    Energetic, friendly, and positive coaching sessions
                    customised to your specific needs and goals. Every programme
                    is designed around you — not a one-size-fits-all framework.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ CASE STUDIES */}
      <section id="case-studies" className="py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <Reveal>
            <span className="inline-block rounded-full bg-accent/10 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.15em] text-accent">
              Case studies
            </span>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="mt-5 max-w-2xl font-serif text-4xl leading-[1.12] tracking-tight text-charcoal md:text-5xl lg:text-6xl">
              Programmes that shift mindsets
            </h2>
          </Reveal>

          {/* Case Study 1 */}
          <Reveal delay={120}>
            <article className="mt-16 rounded-[2rem] bg-white p-1.5 ring-1 ring-charcoal/[0.04]">
              <div className="rounded-[calc(2rem-6px)] bg-surface/30 p-8 md:p-12 lg:p-16">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
                  <div>
                    <span className="text-xs font-medium uppercase tracking-[0.15em] text-accent">
                      Women in leadership
                    </span>
                    <h3 className="mt-4 font-serif text-2xl tracking-tight text-charcoal md:text-3xl">
                      Multi-national FMCG manufacturer
                    </h3>
                    <p className="mt-4 leading-relaxed text-muted">
                      A leading manufacturer of food and pet care products needed
                      a programme to enhance the confidence and skills of
                      high-potential women, aiming for promotion within 12 months
                      and addressing gender balance in leadership.
                    </p>

                    <div className="mt-8">
                      <h4 className="text-sm font-medium uppercase tracking-[0.1em] text-charcoal/60">
                        What we delivered
                      </h4>
                      <ul className="mt-4 space-y-3">
                        {[
                          "Recognise strengths and personal values",
                          "Develop confidence and resilience",
                          "Create a clear leadership brand",
                          "Build a career plan to focus future development",
                        ].map((item) => (
                          <li key={item} className="flex items-start gap-3">
                            <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-accent/60" />
                            <span className="leading-relaxed text-muted">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex flex-col justify-between gap-10">
                    <blockquote className="relative">
                      <div className="font-serif text-5xl leading-none text-accent/20">
                        &ldquo;
                      </div>
                      <p className="mt-2 font-serif text-xl italic leading-relaxed text-charcoal/80 md:text-2xl">
                        Thea and Heidi bring diverse experiences and are
                        personable and approachable. They have been flexible,
                        easy to work with, and agile in delivering workshops for
                        our Women in Leadership cohorts on building confidence
                        and leadership brand.
                      </p>
                    </blockquote>

                    <div className="rounded-2xl bg-accent/[0.06] p-6">
                      <h4 className="text-sm font-medium uppercase tracking-[0.1em] text-accent">
                        Results
                      </h4>
                      <p className="mt-3 leading-relaxed text-charcoal/80">
                        Women attending the programme reported a fundamental
                        shift in mindset and leadership approach, feeling
                        empowered to lead authentically. Many have since achieved
                        promotions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </Reveal>

          {/* Case Study 2 */}
          <Reveal delay={80}>
            <article className="mt-8 rounded-[2rem] bg-white p-1.5 ring-1 ring-charcoal/[0.04]">
              <div className="rounded-[calc(2rem-6px)] bg-surface/30 p-8 md:p-12 lg:p-16">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
                  <div>
                    <span className="text-xs font-medium uppercase tracking-[0.15em] text-accent">
                      Leadership programme
                    </span>
                    <h3 className="mt-4 font-serif text-2xl tracking-tight text-charcoal md:text-3xl">
                      National network organisation
                    </h3>
                    <p className="mt-4 leading-relaxed text-muted">
                      Part of a national network connecting commercial
                      organisations through development and best practice. They
                      needed a leadership programme for SME leaders to enhance
                      skills and drive better business performance.
                    </p>

                    <div className="mt-8">
                      <h4 className="text-sm font-medium uppercase tracking-[0.1em] text-charcoal/60">
                        What we delivered
                      </h4>
                      <ul className="mt-4 space-y-3">
                        {[
                          "Build emotionally intelligent relationships",
                          "Manage teams and individuals effectively",
                          "Create effective vision and strategy",
                          "Lead an organisation through effective change",
                        ].map((item) => (
                          <li key={item} className="flex items-start gap-3">
                            <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-accent/60" />
                            <span className="leading-relaxed text-muted">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex flex-col justify-between gap-10">
                    <blockquote className="relative">
                      <div className="font-serif text-5xl leading-none text-accent/20">
                        &ldquo;
                      </div>
                      <p className="mt-2 font-serif text-xl italic leading-relaxed text-charcoal/80 md:text-2xl">
                        I really enjoyed the course. I have learnt a lot and I am
                        implementing this in my work as well as to improve myself
                        as a person. I look forward to continuing to put the
                        skills I have learnt into practice.
                      </p>
                    </blockquote>

                    <div className="rounded-2xl bg-accent/[0.06] p-6">
                      <h4 className="text-sm font-medium uppercase tracking-[0.1em] text-accent">
                        Results
                      </h4>
                      <p className="mt-3 leading-relaxed text-charcoal/80">
                        Participants report enhanced leadership capability and
                        the ability to improve organisational processes. Several
                        have been promoted to Director-level positions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ CONTACT / CTA */}
      <section id="contact" className="relative overflow-hidden bg-warm-dark py-28 md:py-36">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-[20%] left-[15%] h-[400px] w-[400px] rounded-full bg-amber-900/10 blur-[120px]" />
          <div className="absolute bottom-[10%] right-[10%] h-[300px] w-[300px] rounded-full bg-orange-900/8 blur-[100px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 md:px-10">
          <div className="grid grid-cols-1 gap-16 md:grid-cols-2 md:items-center">
            <div>
              <Reveal>
                <h2 className="font-serif text-4xl leading-[1.12] tracking-tight text-bone md:text-5xl lg:text-6xl">
                  Ready to ignite potential?
                </h2>
              </Reveal>
              <Reveal delay={80}>
                <p className="mt-6 max-w-[48ch] text-lg leading-relaxed text-bone/60">
                  Whether you are looking to develop yourself, your team, or
                  your entire organisation — we would love to hear from you.
                </p>
              </Reveal>
            </div>

            <div>
              <Reveal delay={120}>
                <div className="space-y-6">
                  <a
                    href="mailto:heidi@ignitepotential.ltd"
                    className="group flex items-center justify-between rounded-2xl bg-warm-dark-surface p-6 ring-1 ring-white/[0.06] transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:ring-accent/30"
                  >
                    <div>
                      <p className="text-sm text-bone/40">Get in touch with</p>
                      <p className="mt-1 text-lg font-medium text-bone">
                        Heidi
                      </p>
                      <p className="mt-0.5 text-sm text-bone/50">
                        heidi@ignitepotential.ltd
                      </p>
                    </div>
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/[0.06] transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:bg-accent group-hover:text-bone">
                      <ArrowUpRight className="text-bone/40 group-hover:text-bone" />
                    </span>
                  </a>

                  <a
                    href="mailto:thea@ignitepotential.ltd"
                    className="group flex items-center justify-between rounded-2xl bg-warm-dark-surface p-6 ring-1 ring-white/[0.06] transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:ring-accent/30"
                  >
                    <div>
                      <p className="text-sm text-bone/40">Get in touch with</p>
                      <p className="mt-1 text-lg font-medium text-bone">
                        Thea
                      </p>
                      <p className="mt-0.5 text-sm text-bone/50">
                        thea@ignitepotential.ltd
                      </p>
                    </div>
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/[0.06] transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:bg-accent group-hover:text-bone">
                      <ArrowUpRight className="text-bone/40 group-hover:text-bone" />
                    </span>
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ FOOTER */}
      <footer className="border-t border-charcoal/[0.06] py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 text-sm text-muted md:flex-row md:px-10">
          <span className="font-serif text-base text-charcoal">
            Ignite Potential
          </span>
          <span>&copy; {new Date().getFullYear()} Ignite Potential Ltd</span>
        </div>
      </footer>
    </>
  );
}

/* ─────────────────── Inline SVG Icons ─────────────────── */

function ArrowDown() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 2.5v7M3 7l3 3 3-3" />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2.5 7h9M8 3.5L11.5 7 8 10.5" />
    </svg>
  );
}

function ArrowUpRight({ className = "" }: { className?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M4.5 11.5l7-7M5.5 4.5h6v6" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#b45309" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="4" />
      <path d="M5.5 21a6.5 6.5 0 0 1 13 0" />
    </svg>
  );
}

function GroupIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#b45309" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="8" r="3.5" />
      <circle cx="17" cy="9" r="2.5" />
      <path d="M3 21a6 6 0 0 1 12 0" />
      <path d="M15 21a4 4 0 0 1 7 0" />
    </svg>
  );
}

function CompassIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#b45309" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" fill="#b4530920" stroke="#b45309" />
    </svg>
  );
}

function FlameIcon() {
  return (
    <svg width="80" height="80" viewBox="0 0 24 24" fill="none" className="text-accent/20">
      <path
        d="M12 2c0 4-4 6-4 10a4 4 0 0 0 8 0c0-4-4-6-4-10Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="0.5"
      />
      <path
        d="M12 12c0 2-1.5 3-1.5 5a1.5 1.5 0 0 0 3 0c0-2-1.5-3-1.5-5Z"
        fill="#b4530930"
      />
    </svg>
  );
}
