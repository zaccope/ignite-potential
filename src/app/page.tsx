import Image from "next/image";
import Nav from "./components/Nav";
import Reveal from "./components/Reveal";

export default function Home() {
  return (
    <>
      <Nav />

      {/* ══════════════════════════════════════════════════════
          HERO — full viewport, split screen, left-aligned
          taste.md: ANTI-CENTER BIAS, min-h-[100dvh]
          soft.md: macro-whitespace, eyebrow tag, nested CTA
      ══════════════════════════════════════════════════════ */}
      <section className="relative flex min-h-[100dvh] items-center overflow-hidden">
        {/* Ambient gradient orbs */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-20 top-1/4 h-[600px] w-[600px] rounded-full bg-white/15 blur-[100px]" />
          <div className="absolute -left-32 bottom-0 h-[400px] w-[400px] rounded-full bg-teal-dark/15 blur-[120px]" />
        </div>

        <div className="relative mx-auto w-full max-w-6xl px-6 py-32">
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-12 md:gap-8">
            <div className="md:col-span-7">
              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-teal-darkest/70 ring-1 ring-white/30 backdrop-blur-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-purple" />
                  People Development
                </span>
              </Reveal>

              <Reveal delay={80}>
                <h1 className="mt-8 text-[clamp(2.8rem,7vw,5rem)] font-bold leading-[1.05] tracking-[-0.03em] text-teal-darkest">
                  Empowering growth
                  <br />
                  <span className="text-teal-deep">and development</span>
                </h1>
              </Reveal>

              <Reveal delay={150}>
                <p className="mt-6 max-w-[44ch] text-base leading-[1.7] text-teal-darkest/55 md:text-[17px]">
                  Ignite Potential offers expert people development for
                  individuals, groups, and organisations of all sizes and sectors.
                </p>
              </Reveal>

              <Reveal delay={220}>
                <div className="mt-9 flex flex-wrap items-center gap-4">
                  <a
                    href="#services"
                    className="group inline-flex items-center gap-2.5 rounded-full bg-teal-darkest pl-7 pr-2.5 py-2.5 text-sm font-semibold text-white transition-all duration-400 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-teal-deep active:scale-[0.97]"
                  >
                    Our Services
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2v8M3 7l3 3 3-3"/></svg>
                    </span>
                  </a>
                  <a
                    href="#case-studies"
                    className="rounded-full border-2 border-teal-darkest/70 px-7 py-2.5 text-sm font-semibold text-teal-darkest transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:border-teal-darkest hover:bg-teal-darkest hover:text-white active:scale-[0.97]"
                  >
                    Case Studies
                  </a>
                </div>
              </Reveal>
            </div>

            <Reveal delay={180} className="md:col-span-5 flex justify-center md:justify-end">
              <div className="relative">
                <div className="absolute -inset-10 rounded-full bg-white/12 blur-3xl" />
                <Image
                  src="/images/blue-fire.png"
                  alt="Growth and innovation illustration"
                  width={420}
                  height={420}
                  className="relative w-60 drop-shadow-[0_20px_50px_rgba(0,0,0,0.15)] md:w-72 lg:w-[340px]"
                  priority
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          DIFFERENTIATORS — editorial numbered list
          taste.md: no 3 equal cards, left-aligned headers
          minimalist.md: border-bottom dividers, editorial feel
      ══════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 items-start gap-16 md:grid-cols-12">
            <div className="md:col-span-5">
              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-teal-darkest/70 ring-1 ring-white/30">
                  <span className="h-1.5 w-1.5 rounded-full bg-purple" />
                  Why us
                </span>
              </Reveal>
              <Reveal delay={60}>
                <h2 className="mt-5 text-3xl font-bold leading-[1.1] tracking-tight text-teal-darkest md:text-4xl">
                  Where experience meets personalised progress
                </h2>
              </Reveal>
              <Reveal delay={120} className="mt-10 flex justify-start">
                <Image src="/images/circle-fire.png" alt="Innovation illustration" width={280} height={280} className="w-48 drop-shadow-lg md:w-56" />
              </Reveal>
            </div>

            <div className="md:col-span-7">
              {([
                { num: "01", img: "/images/diverse-expertise.png", title: "Diverse Expertise", text: "Benefit from our extensive experience and broad perspectives in leadership and psychology, tailored to suit various sectors and organisational sizes." },
                { num: "02", img: "/images/real-world-application.png", title: "Real-World Application", text: "Gain practical insights and strategies derived from our hands-on experience, ensuring effective solutions that work in real-life situations." },
                { num: "03", img: "/images/personalised-approach.png", title: "Personalised Approach", text: "Experience energetic, friendly, and positive coaching and mentoring sessions customised to your specific needs and goals, fostering growth and development." },
              ] as const).map((item, i) => (
                <Reveal key={item.num} delay={i * 100 + 80}>
                  <div className={`flex items-start gap-5 py-8 ${i < 2 ? "border-b border-teal-darkest/10" : ""}`}>
                    <span className="mt-1 shrink-0 font-mono text-xs font-bold text-purple">{item.num}</span>
                    <Image src={item.img} alt={item.title} width={52} height={52} className="mt-0.5 w-11 shrink-0" />
                    <div>
                      <h3 className="text-lg font-bold text-teal-darkest">{item.title}</h3>
                      <p className="mt-2 text-sm leading-[1.7] text-teal-darkest/55">{item.text}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SERVICES — asymmetric bento grid
          taste.md: no 3 equal cards, layout diversification
          soft.md: double-bezel cards, nested CTA
      ══════════════════════════════════════════════════════ */}
      <section id="services" className="py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-teal-darkest/70 ring-1 ring-white/30">
              <span className="h-1.5 w-1.5 rounded-full bg-purple" />
              What we do
            </span>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="mt-5 text-3xl font-bold leading-[1.1] tracking-tight text-teal-darkest md:text-4xl">Our Services</h2>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-12">
            {/* Individual — large featured, 8 cols, 2 rows */}
            <Reveal className="md:col-span-8 md:row-span-2" delay={80}>
              <div className="group h-full rounded-[2rem] bg-white/50 p-1.5 ring-1 ring-white/60 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:shadow-[0_16px_50px_rgba(0,0,0,0.1)]">
                <div className="flex h-full flex-col overflow-hidden rounded-[calc(2rem-6px)] bg-white">
                  <div className="overflow-hidden">
                    <Image src="/images/individual-development.jpeg" alt="Individual walking towards growth and innovation" width={629} height={629}
                      className="w-full transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-[1.03]" />
                  </div>
                  <div className="flex flex-1 flex-col justify-between p-7 md:p-9">
                    <div>
                      <h3 className="text-2xl font-bold text-teal-darkest md:text-3xl">Individual Development</h3>
                      <p className="mt-3 max-w-[52ch] text-[15px] leading-[1.7] text-teal-darkest/55">
                        We offer personalised coaching to unlock your full potential. Our expert guidance helps you overcome challenges, set meaningful goals, and thrive in all aspects of life.
                      </p>
                    </div>
                    <a href="#contact" className="group/link mt-6 inline-flex items-center gap-2 text-sm font-semibold text-purple transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:gap-3">
                      Start a conversation
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 7h8M7.5 3.5 11 7l-3.5 3.5"/></svg>
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Group — 4 cols, top */}
            <Reveal className="md:col-span-4" delay={140}>
              <div className="group h-full rounded-[2rem] bg-white/50 p-1.5 ring-1 ring-white/60 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:shadow-[0_16px_50px_rgba(0,0,0,0.1)]">
                <div className="flex h-full flex-col overflow-hidden rounded-[calc(2rem-6px)] bg-white">
                  <div className="overflow-hidden">
                    <Image src="/images/group-development.jpeg" alt="Team collaboration and innovation" width={629} height={629}
                      className="w-full transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-[1.03]" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-teal-darkest">Group Development</h3>
                    <p className="mt-2 text-sm leading-[1.7] text-teal-darkest/55">
                      Build team cohesion through interactive workshops and targeted coaching. Our facilitators drive collaboration, communication, and results.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Consulting — 4 cols, bottom */}
            <Reveal className="md:col-span-4" delay={200}>
              <div className="group h-full rounded-[2rem] bg-white/50 p-1.5 ring-1 ring-white/60 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:shadow-[0_16px_50px_rgba(0,0,0,0.1)]">
                <div className="flex h-full flex-col overflow-hidden rounded-[calc(2rem-6px)] bg-white">
                  <div className="overflow-hidden">
                    <Image src="/images/consulting.jpeg" alt="Consulting and digital innovation" width={629} height={629}
                      className="w-full transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-[1.03]" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-teal-darkest">Personal Consulting</h3>
                    <p className="mt-2 text-sm leading-[1.7] text-teal-darkest/55">
                      Expert consultancy to drive growth. Our team brings experience and diverse perspectives to your unique challenges.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          CASE STUDIES — editorial panels
          redesign.md: alternating layout, pull-quote testimonials
          soft.md: double-bezel, macro-whitespace
      ══════════════════════════════════════════════════════ */}
      <section id="case-studies" className="py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-teal-darkest/70 ring-1 ring-white/30">
              <span className="h-1.5 w-1.5 rounded-full bg-purple" />
              Proven results
            </span>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="mt-5 text-3xl font-bold leading-[1.1] tracking-tight text-teal-darkest md:text-4xl">Case Studies</h2>
          </Reveal>

          {/* Case Study 1 */}
          <Reveal delay={100}>
            <article className="mt-14 rounded-[2rem] bg-white/50 p-1.5 ring-1 ring-white/60">
              <div className="overflow-hidden rounded-[calc(2rem-6px)] bg-white">
                {/* Header band */}
                <div className="flex items-center justify-between border-b border-gray-100 px-8 py-5 md:px-10">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-widest text-purple">Women in Leadership</span>
                    <h3 className="mt-1 text-xl font-bold text-teal-darkest md:text-2xl">Multi-national FMCG manufacturer</h3>
                  </div>
                  <Image src="/images/rocket.png" alt="" width={64} height={64} className="hidden w-14 sm:block" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5">
                  {/* Left — 3 cols */}
                  <div className="space-y-6 border-b border-gray-100 p-8 md:p-10 lg:col-span-3 lg:border-b-0 lg:border-r">
                    <div>
                      <h4 className="text-[11px] font-bold uppercase tracking-widest text-teal-darkest/30">Client</h4>
                      <p className="mt-2 text-sm leading-[1.7] text-teal-darkest/60">Our client is a multi-national FMCG who are a leading manufacturer of food and pet care products.</p>
                    </div>
                    <div>
                      <h4 className="text-[11px] font-bold uppercase tracking-widest text-teal-darkest/30">Client need</h4>
                      <p className="mt-2 text-sm leading-[1.7] text-teal-darkest/60">Our goal was to develop a program to enhance the confidence and skills of high-potential women, aiming for promotion within 12 months and addressing gender balance in leadership.</p>
                    </div>
                    <div>
                      <h4 className="text-[11px] font-bold uppercase tracking-widest text-teal-darkest/30">What we did</h4>
                      <p className="mt-2 text-sm leading-[1.7] text-teal-darkest/60">After understanding the client&apos;s needs, we designed a program enabling women to:</p>
                      <ul className="mt-2 space-y-1.5 text-sm text-teal-darkest/60">
                        {["Recognise strengths and personal values.", "Develop confidence and resilience.", "Create a clear leadership brand.", "Build a career plan to focus future development and direction."].map((t) => (
                          <li key={t} className="flex items-start gap-2"><span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-purple/50"/>{t}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Right — 2 cols */}
                  <div className="flex flex-col gap-4 p-8 md:p-10 lg:col-span-2">
                    <div className="flex-1 rounded-2xl bg-teal/20 p-6">
                      <h4 className="text-[11px] font-bold uppercase tracking-widest text-teal-dark">Testimonial</h4>
                      <p className="mt-3 text-[15px] italic leading-[1.7] text-teal-darkest/65">
                        &ldquo;Thea and Heidi bring diverse experiences and are personable and approachable. They have been flexible, easy to work with, and agile in delivering workshops for our Women in Leadership cohorts on building confidence and leadership brand.&rdquo;
                      </p>
                    </div>
                    <div className="rounded-2xl bg-purple/[0.06] p-6">
                      <h4 className="text-[11px] font-bold uppercase tracking-widest text-purple">The result</h4>
                      <p className="mt-3 text-sm leading-[1.7] text-teal-darkest/65">
                        Women attending the programme reported a fundamental shift in mindset and leadership approach, feeling empowered to lead authentically. Additionally, many have achieved promotions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </Reveal>

          {/* Case Study 2 */}
          <Reveal delay={80}>
            <article className="mt-5 rounded-[2rem] bg-white/50 p-1.5 ring-1 ring-white/60">
              <div className="overflow-hidden rounded-[calc(2rem-6px)] bg-white">
                <div className="flex items-center justify-between border-b border-gray-100 px-8 py-5 md:px-10">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-widest text-purple">Leadership Programme</span>
                    <h3 className="mt-1 text-xl font-bold text-teal-darkest md:text-2xl">National network organisation</h3>
                  </div>
                  <Image src="/images/ignite-world.png" alt="" width={64} height={64} className="hidden w-14 sm:block" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5">
                  <div className="space-y-6 border-b border-gray-100 p-8 md:p-10 lg:col-span-3 lg:border-b-0 lg:border-r">
                    <div>
                      <h4 className="text-[11px] font-bold uppercase tracking-widest text-teal-darkest/30">Client</h4>
                      <p className="mt-2 text-sm leading-[1.7] text-teal-darkest/60">Our client is a part of a national network who connect and create value for commercial organisations by investing in development and sharing best practice to maximise employment and growth.</p>
                    </div>
                    <div>
                      <h4 className="text-[11px] font-bold uppercase tracking-widest text-teal-darkest/30">Client need</h4>
                      <p className="mt-2 text-sm leading-[1.7] text-teal-darkest/60">Our brief was to design a leadership program for SME leaders, aimed at enhancing leadership skills to drive better ways of working and improved business performance.</p>
                    </div>
                    <div>
                      <h4 className="text-[11px] font-bold uppercase tracking-widest text-teal-darkest/30">What we did</h4>
                      <p className="mt-2 text-sm leading-[1.7] text-teal-darkest/60">After assessing SME leaders&apos; needs, we created a program to:</p>
                      <ul className="mt-2 space-y-1.5 text-sm text-teal-darkest/60">
                        {["Build emotionally intelligent relationships.", "Manage teams and individuals effectively.", "Create effective vision and strategy.", "Lead an organisation through effective change."].map((t) => (
                          <li key={t} className="flex items-start gap-2"><span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-purple/50"/>{t}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex flex-col gap-4 p-8 md:p-10 lg:col-span-2">
                    <div className="flex-1 rounded-2xl bg-teal/20 p-6">
                      <h4 className="text-[11px] font-bold uppercase tracking-widest text-teal-dark">Testimonial</h4>
                      <p className="mt-3 text-[15px] italic leading-[1.7] text-teal-darkest/65">
                        &ldquo;I really enjoyed the course! I have learnt a lot and I am implementing this in my work as well as to improve myself as a person. I look forward to continuing to put the skills I have learnt into practice.&rdquo;
                      </p>
                    </div>
                    <div className="rounded-2xl bg-purple/[0.06] p-6">
                      <h4 className="text-[11px] font-bold uppercase tracking-widest text-purple">The result</h4>
                      <p className="mt-3 text-sm leading-[1.7] text-teal-darkest/65">
                        This ongoing project has received positive feedback. Participants report enhanced leadership, the ability to improve organisational processes. In addition several have been promoted to Director-level positions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          TEAM — photo-forward cards
          taste.md: layout diversification
          redesign.md: photos prominent, clean internal grid
      ══════════════════════════════════════════════════════ */}
      <section id="team" className="py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-teal-darkest/70 ring-1 ring-white/30">
              <span className="h-1.5 w-1.5 rounded-full bg-purple" />
              Our team
            </span>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="mt-5 text-3xl font-bold leading-[1.1] tracking-tight text-teal-darkest md:text-4xl">Meet Our Team</h2>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-2">
            {/* Thea */}
            <Reveal delay={80}>
              <div className="rounded-[2rem] bg-white/50 p-1.5 ring-1 ring-white/60">
                <div className="overflow-hidden rounded-[calc(2rem-6px)] bg-white">
                  <div className="flex items-start gap-5 p-7 md:p-8">
                    <Image src="/images/thea.png" alt="Thea Roberts" width={160} height={160} className="h-28 w-28 shrink-0 rounded-2xl object-cover md:h-32 md:w-32" />
                    <div className="min-w-0">
                      <h3 className="text-xl font-bold text-teal-darkest">Thea Roberts</h3>
                      <ul className="mt-2 space-y-0.5 text-[13px] leading-snug text-teal-darkest/50">
                        <li>Executive Coach &amp; Mentor</li>
                        <li>25 years leadership experience to MD level</li>
                        <li>Advanced facilitator</li>
                        <li>Diverse sector experience</li>
                      </ul>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 divide-x divide-gray-100 border-t border-gray-100">
                    <div className="p-6">
                      <h4 className="text-[11px] font-bold uppercase tracking-widest text-teal-darkest/30">Expertise</h4>
                      <ul className="mt-3 space-y-2 text-[13px] leading-[1.6] text-teal-darkest/55">
                        <li>Unlocking individual and team potential through coaching, mentoring, and workshops.</li>
                        <li>Tailored sessions to clients&apos; specific goals and desired outcomes.</li>
                        <li>Fosters capabilities, connection, and clarity.</li>
                      </ul>
                    </div>
                    <div className="p-6">
                      <h4 className="text-[11px] font-bold uppercase tracking-widest text-teal-darkest/30">Experience</h4>
                      <ul className="mt-3 space-y-2 text-[13px] leading-[1.6] text-teal-darkest/55">
                        <li>Nearly 30 years of senior leadership in retail and consumer goods.</li>
                        <li>Managed turnovers up to &pound;450M and teams of 120+.</li>
                        <li>Worked with Mars, Marks &amp; Spencer, and global clients.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Heidi */}
            <Reveal delay={140}>
              <div className="rounded-[2rem] bg-white/50 p-1.5 ring-1 ring-white/60">
                <div className="overflow-hidden rounded-[calc(2rem-6px)] bg-white">
                  <div className="flex items-start gap-5 p-7 md:p-8">
                    <Image src="/images/heidi.png" alt="Heidi Hunter-Cope" width={160} height={160} className="h-28 w-28 shrink-0 rounded-2xl object-cover md:h-32 md:w-32" />
                    <div className="min-w-0">
                      <h3 className="text-xl font-bold text-teal-darkest">Heidi Hunter-Cope</h3>
                      <ul className="mt-2 space-y-0.5 text-[13px] leading-snug text-teal-darkest/50">
                        <li>Chartered Psychologist</li>
                        <li>25 years in developing people</li>
                        <li>Large-scale organisational change</li>
                        <li>Diverse sector experience</li>
                      </ul>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 divide-x divide-gray-100 border-t border-gray-100">
                    <div className="p-6">
                      <h4 className="text-[11px] font-bold uppercase tracking-widest text-teal-darkest/30">Expertise</h4>
                      <ul className="mt-3 space-y-2 text-[13px] leading-[1.6] text-teal-darkest/55">
                        <li>25 years of innovative leadership solutions.</li>
                        <li>Expert in managing large-scale change projects.</li>
                        <li>Improves leadership, communication, and management skills.</li>
                      </ul>
                    </div>
                    <div className="p-6">
                      <h4 className="text-[11px] font-bold uppercase tracking-widest text-teal-darkest/30">Experience</h4>
                      <ul className="mt-3 space-y-2 text-[13px] leading-[1.6] text-teal-darkest/55">
                        <li>FMCG, financial services, utilities, engineering, retail, airlines and elite sport.</li>
                        <li>Large-scale change and development initiatives.</li>
                        <li>Extensive work throughout the UK and internationally.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          CTA — dark teal panel, visual weight
          soft.md: double-bezel, nested CTA button
      ══════════════════════════════════════════════════════ */}
      <section id="contact" className="py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="rounded-[2.5rem] bg-teal-darkest/90 p-1.5 shadow-[0_20px_60px_rgba(0,0,0,0.15)] ring-1 ring-white/5">
              <div className="rounded-[calc(2.5rem-6px)] bg-teal-darkest px-8 py-20 text-center md:px-20 md:py-24">
                <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
                  Ready To Ignite<br className="hidden sm:block" /> Your Potential?
                </h2>
                <p className="mx-auto mt-5 max-w-md text-[15px] leading-[1.7] text-white/45">
                  Click the button below to start your journey towards growth and success.
                </p>
                <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                  <a
                    href="mailto:heidi@ignitepotential.ltd"
                    className="group inline-flex items-center gap-2.5 rounded-full bg-purple pl-8 pr-3 py-3 text-[15px] font-semibold text-white transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-purple-hover active:scale-[0.97]"
                  >
                    Get In Touch
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 6h8M7 2.5 10.5 6 7 9.5"/></svg>
                    </span>
                  </a>
                  <a href="mailto:heidi@ignitepotential.ltd" className="text-sm text-white/35 underline underline-offset-4 transition-colors hover:text-white/60">
                    or email us directly
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 text-xs text-teal-darkest/30 md:flex-row">
          <Image src="/images/logo.png" alt="Ignite Potential" width={100} height={37} className="h-6 w-auto opacity-40" />
          <span>&copy; {new Date().getFullYear()} Ignite Potential Ltd. All rights reserved.</span>
        </div>
      </footer>
    </>
  );
}
