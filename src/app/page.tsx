import Image from "next/image";
import Nav from "./components/Nav";
import Reveal from "./components/Reveal";

export default function Home() {
  return (
    <>
      <Nav />

      {/* ═══════════════════════ HERO ═══════════════════════ */}
      <section className="relative min-h-[100dvh] flex items-center overflow-hidden">
        <div className="relative mx-auto w-full max-w-7xl px-6 py-32 md:px-10">
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-12">
            {/* Text — left-aligned, 7 cols */}
            <div className="md:col-span-7">
              <Reveal>
                <span className="inline-block rounded-full bg-white/20 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-teal-darkest/80 ring-1 ring-white/30">
                  People Development
                </span>
              </Reveal>

              <Reveal delay={80}>
                <h1 className="mt-8 text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-[1.06] tracking-tight text-teal-darkest">
                  Empowering growth
                  <br />
                  and development
                </h1>
              </Reveal>

              <Reveal delay={160}>
                <p className="mt-7 max-w-[48ch] text-base leading-relaxed text-teal-darkest/60 md:text-lg">
                  Ignite Potential offers expert people development for
                  individuals, groups, and organisations of all sizes and
                  sectors.
                </p>
              </Reveal>

              <Reveal delay={240}>
                <div className="mt-10 flex flex-wrap gap-4">
                  <a
                    href="#case-studies"
                    className="group inline-flex items-center gap-3 rounded-full border-2 border-teal-darkest/80 px-7 py-3.5 text-sm font-semibold text-teal-darkest transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-teal-darkest hover:text-white active:scale-[0.97]"
                  >
                    Case Studies
                  </a>
                  <a
                    href="#services"
                    className="group inline-flex items-center gap-3 rounded-full border-2 border-teal-darkest/80 px-7 py-3.5 text-sm font-semibold text-teal-darkest transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-teal-darkest hover:text-white active:scale-[0.97]"
                  >
                    Our Services
                  </a>
                </div>
              </Reveal>
            </div>

            {/* Illustration — right, 5 cols */}
            <Reveal delay={200} className="md:col-span-5 flex justify-center md:justify-end">
              <div className="relative">
                <div className="absolute -inset-6 rounded-full bg-white/10 blur-2xl" />
                <Image
                  src="/images/blue-fire.png"
                  alt="Abstract illustration representing creativity, growth and innovation"
                  width={420}
                  height={420}
                  className="relative w-64 drop-shadow-2xl md:w-80 lg:w-[380px]"
                  priority
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ DIFFERENTIATORS ═══════════════════════ */}
      <section className="py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal>
            <h2 className="text-center text-3xl font-bold tracking-tight text-teal-darkest md:text-4xl lg:text-5xl">
              Where experience meets
              <br className="hidden sm:block" /> personalised progress
            </h2>
          </Reveal>

          {/* Illustration + Cards */}
          <div className="mt-20 grid grid-cols-1 items-center gap-14 md:grid-cols-12">
            <Reveal className="md:col-span-4 flex justify-center">
              <div className="relative">
                <div className="absolute -inset-8 rounded-full bg-teal-dark/10 blur-3xl" />
                <Image
                  src="/images/circle-fire.png"
                  alt="Illustration of innovation — lightbulb with gears and flames"
                  width={307}
                  height={307}
                  className="relative w-52 drop-shadow-xl md:w-60 lg:w-72"
                />
              </div>
            </Reveal>

            <div className="md:col-span-8 space-y-5">
              {[
                {
                  icon: "/images/diverse-expertise.png",
                  title: "Diverse Expertise",
                  text: "Benefit from our extensive experience and broad perspectives in leadership and psychology, tailored to suit various sectors and organisational sizes.",
                },
                {
                  icon: "/images/real-world-application.png",
                  title: "Real-World Application",
                  text: "Gain practical insights and strategies derived from our hands-on experience, ensuring effective solutions that work in real-life situations.",
                },
                {
                  icon: "/images/personalised-approach.png",
                  title: "Personalised Approach",
                  text: "Experience energetic, friendly, and positive coaching and mentoring sessions customised to your specific needs and goals, fostering growth and development.",
                },
              ].map((item, i) => (
                <Reveal key={item.title} delay={i * 100 + 80}>
                  <div className="group rounded-[1.75rem] bg-white/40 p-1.5 ring-1 ring-white/50 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-white/60 hover:shadow-[0_8px_40px_rgba(0,0,0,0.06)]">
                    <div className="flex items-start gap-5 rounded-[calc(1.75rem-6px)] bg-white/60 p-6 md:p-7">
                      <Image
                        src={item.icon}
                        alt={item.title}
                        width={56}
                        height={56}
                        className="mt-1 w-12 shrink-0 md:w-14"
                      />
                      <div>
                        <h3 className="text-lg font-semibold text-teal-darkest md:text-xl">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-teal-darkest/60 md:text-base">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ SERVICES ═══════════════════════ */}
      <section id="services" className="py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal>
            <span className="inline-block rounded-full bg-white/20 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-teal-darkest/80 ring-1 ring-white/30">
              What we do
            </span>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="mt-5 max-w-xl text-3xl font-bold tracking-tight text-teal-darkest md:text-4xl lg:text-5xl">
              Our Services
            </h2>
          </Reveal>

          {/* Asymmetric bento: large left card + two stacked right */}
          <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-12">
            {/* Individual Development — large featured */}
            <Reveal className="md:col-span-7 md:row-span-2" delay={80}>
              <div className="group h-full rounded-[2rem] bg-white/40 p-1.5 ring-1 ring-white/50 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:shadow-[0_12px_48px_rgba(0,0,0,0.07)]">
                <div className="flex h-full flex-col rounded-[calc(2rem-6px)] bg-white/70 p-7 md:p-9">
                  <div className="flex-1">
                    <div className="overflow-hidden rounded-2xl bg-teal-dark/10">
                      <Image
                        src="/images/individual-development.jpeg"
                        alt="Businessman walking towards growth, surrounded by innovation symbols"
                        width={629}
                        height={629}
                        className="w-full transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-[1.03]"
                      />
                    </div>
                    <h3 className="mt-7 text-2xl font-bold text-teal-darkest md:text-3xl">
                      Individual Development
                    </h3>
                    <p className="mt-4 max-w-[50ch] text-sm leading-relaxed text-teal-darkest/60 md:text-base">
                      We offer personalised coaching to unlock your full
                      potential. Our expert guidance helps you overcome
                      challenges, set meaningful goals, and thrive in all
                      aspects of life.
                    </p>
                  </div>
                  <div className="mt-7">
                    <a
                      href="#contact"
                      className="group/link inline-flex items-center gap-2 text-sm font-semibold text-purple transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:gap-3"
                    >
                      Start a conversation
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 7h9M8 3.5L11.5 7 8 10.5" /></svg>
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Group Development */}
            <Reveal className="md:col-span-5" delay={160}>
              <div className="group h-full rounded-[2rem] bg-white/40 p-1.5 ring-1 ring-white/50 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:shadow-[0_12px_48px_rgba(0,0,0,0.07)]">
                <div className="flex h-full flex-col rounded-[calc(2rem-6px)] bg-white/70 p-7">
                  <div className="overflow-hidden rounded-2xl bg-teal-dark/10">
                    <Image
                      src="/images/group-development.jpeg"
                      alt="People walking towards a flame, symbolising teamwork"
                      width={629}
                      height={629}
                      className="w-full transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-[1.03]"
                    />
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-teal-darkest">
                    Group Development
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-teal-darkest/60">
                    Build team cohesion and success through interactive
                    workshops and targeted coaching. Our expert facilitators
                    drive collaboration, communication, and results.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Personal Consulting */}
            <Reveal className="md:col-span-5" delay={240}>
              <div className="group h-full rounded-[2rem] bg-white/40 p-1.5 ring-1 ring-white/50 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:shadow-[0_12px_48px_rgba(0,0,0,0.07)]">
                <div className="flex h-full flex-col rounded-[calc(2rem-6px)] bg-white/70 p-7">
                  <div className="overflow-hidden rounded-2xl bg-teal-dark/10">
                    <Image
                      src="/images/consulting.jpeg"
                      alt="Person with digital network, holding laptop with swirling energy"
                      width={629}
                      height={629}
                      className="w-full transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-[1.03]"
                    />
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-teal-darkest">
                    Personal Consulting
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-teal-darkest/60">
                    Expert consultancy services to drive growth and development.
                    Our team brings experience and diverse perspectives to
                    address your unique challenges and opportunities.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ CASE STUDIES ═══════════════════════ */}
      <section id="case-studies" className="py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal>
            <span className="inline-block rounded-full bg-white/20 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-teal-darkest/80 ring-1 ring-white/30">
              Proven results
            </span>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="mt-5 max-w-xl text-3xl font-bold tracking-tight text-teal-darkest md:text-4xl lg:text-5xl">
              Case Studies
            </h2>
          </Reveal>

          {/* ── Case Study 1 ── */}
          <Reveal delay={100}>
            <article className="mt-16 rounded-[2rem] bg-white/40 p-1.5 ring-1 ring-white/50">
              <div className="rounded-[calc(2rem-6px)] bg-white/70 p-7 md:p-10 lg:p-14">
                {/* Header row */}
                <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                  <div className="max-w-2xl">
                    <span className="text-xs font-semibold uppercase tracking-[0.15em] text-purple">
                      Women in Leadership
                    </span>
                    <h3 className="mt-3 text-2xl font-bold text-teal-darkest md:text-3xl">
                      Multi-national FMCG manufacturer
                    </h3>
                    <p className="mt-4 leading-relaxed text-teal-darkest/60">
                      Our client is a multi-national FMCG who are a leading
                      manufacturer of food and pet care products.
                    </p>
                  </div>
                  <Image
                    src="/images/rocket.png"
                    alt="Business success illustration"
                    width={120}
                    height={120}
                    className="hidden w-24 shrink-0 md:block lg:w-28"
                  />
                </div>

                <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2">
                  {/* Left: Need + What we did */}
                  <div className="space-y-8">
                    <div>
                      <h4 className="text-sm font-semibold uppercase tracking-[0.1em] text-teal-darkest/40">
                        Client Need
                      </h4>
                      <p className="mt-3 leading-relaxed text-teal-darkest/70">
                        Our goal was to develop a program to enhance the
                        confidence and skills of high-potential women, aiming
                        for promotion within 12 months and addressing gender
                        balance in leadership.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold uppercase tracking-[0.1em] text-teal-darkest/40">
                        What we did
                      </h4>
                      <p className="mt-3 leading-relaxed text-teal-darkest/70">
                        After understanding the client&apos;s needs, we designed a
                        program enabling women to:
                      </p>
                      <ul className="mt-4 space-y-2.5">
                        {[
                          "Recognise strengths and personal values.",
                          "Develop confidence and resilience.",
                          "Create a clear leadership brand.",
                          "Build a career plan to focus future development and direction.",
                        ].map((item) => (
                          <li key={item} className="flex items-start gap-3 text-teal-darkest/70">
                            <span className="mt-2 block h-1.5 w-1.5 shrink-0 rounded-full bg-purple/50" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Right: Testimonial + Result */}
                  <div className="flex flex-col gap-6">
                    <blockquote className="flex-1 rounded-2xl bg-teal-dark/[0.06] p-6 md:p-8">
                      <h4 className="text-sm font-semibold uppercase tracking-[0.1em] text-teal-darkest/40">
                        Testimonial
                      </h4>
                      <p className="mt-4 text-lg italic leading-relaxed text-teal-darkest/70">
                        &ldquo;Thea and Heidi bring diverse experiences and are
                        personable and approachable. They have been flexible,
                        easy to work with, and agile in delivering workshops
                        for our Women in Leadership cohorts on building
                        confidence and leadership brand.&rdquo;
                      </p>
                    </blockquote>

                    <div className="rounded-2xl bg-purple/[0.06] p-6 md:p-8">
                      <h4 className="text-sm font-semibold uppercase tracking-[0.1em] text-purple">
                        The Result
                      </h4>
                      <p className="mt-3 leading-relaxed text-teal-darkest/70">
                        Women attending the programme reported a fundamental
                        shift in mindset and leadership approach, feeling
                        empowered to lead authentically. Additionally, many
                        have achieved promotions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </Reveal>

          {/* ── Case Study 2 ── */}
          <Reveal delay={80}>
            <article className="mt-8 rounded-[2rem] bg-white/40 p-1.5 ring-1 ring-white/50">
              <div className="rounded-[calc(2rem-6px)] bg-white/70 p-7 md:p-10 lg:p-14">
                <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                  <div className="max-w-2xl">
                    <span className="text-xs font-semibold uppercase tracking-[0.15em] text-purple">
                      Leadership Programme
                    </span>
                    <h3 className="mt-3 text-2xl font-bold text-teal-darkest md:text-3xl">
                      National network organisation
                    </h3>
                    <p className="mt-4 leading-relaxed text-teal-darkest/60">
                      Our client is a part of a national network who connect and
                      create value for commercial organisations by investing in
                      development and sharing best practice to maximise
                      employment and growth.
                    </p>
                  </div>
                  <Image
                    src="/images/ignite-world.png"
                    alt="Global innovation illustration"
                    width={120}
                    height={120}
                    className="hidden w-24 shrink-0 md:block lg:w-28"
                  />
                </div>

                <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2">
                  <div className="space-y-8">
                    <div>
                      <h4 className="text-sm font-semibold uppercase tracking-[0.1em] text-teal-darkest/40">
                        Client Need
                      </h4>
                      <p className="mt-3 leading-relaxed text-teal-darkest/70">
                        Our brief was to design a leadership program for SME
                        leaders, aimed at enhancing leadership skills to drive
                        better ways of working and improved business
                        performance.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold uppercase tracking-[0.1em] text-teal-darkest/40">
                        What we did
                      </h4>
                      <p className="mt-3 leading-relaxed text-teal-darkest/70">
                        After assessing SME leaders&apos; needs, we created a
                        program to:
                      </p>
                      <ul className="mt-4 space-y-2.5">
                        {[
                          "Build emotionally intelligent relationships.",
                          "Manage teams and individuals effectively.",
                          "Create effective vision and strategy.",
                          "Lead an organisation through effective change.",
                        ].map((item) => (
                          <li key={item} className="flex items-start gap-3 text-teal-darkest/70">
                            <span className="mt-2 block h-1.5 w-1.5 shrink-0 rounded-full bg-purple/50" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex flex-col gap-6">
                    <blockquote className="flex-1 rounded-2xl bg-teal-dark/[0.06] p-6 md:p-8">
                      <h4 className="text-sm font-semibold uppercase tracking-[0.1em] text-teal-darkest/40">
                        Testimonial
                      </h4>
                      <p className="mt-4 text-lg italic leading-relaxed text-teal-darkest/70">
                        &ldquo;I really enjoyed the course! I have learnt a lot
                        and I am implementing this in my work as well as to
                        improve myself as a person. I look forward to continuing
                        to put the skills I have learnt into practice.&rdquo;
                      </p>
                    </blockquote>

                    <div className="rounded-2xl bg-purple/[0.06] p-6 md:p-8">
                      <h4 className="text-sm font-semibold uppercase tracking-[0.1em] text-purple">
                        The Result
                      </h4>
                      <p className="mt-3 leading-relaxed text-teal-darkest/70">
                        This ongoing project has received positive feedback.
                        Participants report enhanced leadership, the ability to
                        improve organisational processes. In addition several
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

      {/* ═══════════════════════ TEAM ═══════════════════════ */}
      <section id="team" className="py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal>
            <span className="inline-block rounded-full bg-white/20 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-teal-darkest/80 ring-1 ring-white/30">
              Our team
            </span>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="mt-5 text-3xl font-bold tracking-tight text-teal-darkest md:text-4xl lg:text-5xl">
              Meet Our Team
            </h2>
          </Reveal>

          <div className="mt-16 space-y-8">
            {/* Thea */}
            <Reveal delay={80}>
              <div className="rounded-[2rem] bg-white/40 p-1.5 ring-1 ring-white/50">
                <div className="rounded-[calc(2rem-6px)] bg-white/70 p-7 md:p-10">
                  <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
                    {/* Photo + intro */}
                    <div className="md:col-span-4 lg:col-span-3">
                      <div className="overflow-hidden rounded-2xl bg-teal-dark/10">
                        <Image
                          src="/images/thea.png"
                          alt="Thea Roberts"
                          width={300}
                          height={300}
                          className="w-full"
                        />
                      </div>
                      <h3 className="mt-5 text-xl font-bold text-teal-darkest md:text-2xl">
                        Thea Roberts
                      </h3>
                      <ul className="mt-3 space-y-1.5 text-sm text-teal-darkest/60">
                        <li>Executive Coach &amp; Mentor</li>
                        <li>25 years leadership experience to MD level</li>
                        <li>Advanced facilitator</li>
                        <li>Diverse sector experience</li>
                      </ul>
                    </div>

                    {/* Expertise + Experience */}
                    <div className="md:col-span-8 lg:col-span-9 grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <div className="rounded-2xl bg-teal-dark/[0.05] p-6">
                        <h4 className="text-sm font-semibold uppercase tracking-[0.1em] text-teal-darkest/40">
                          Expertise
                        </h4>
                        <ul className="mt-4 space-y-3 text-sm leading-relaxed text-teal-darkest/70">
                          <li>
                            Specialises in unlocking individual and team
                            potential through coaching, mentoring, and workshops.
                          </li>
                          <li>
                            Tailors sessions to clients&apos; specific goals and
                            desired outcomes.
                          </li>
                          <li>
                            Fosters capabilities, connection, and clarity to
                            manage work-life demands effectively.
                          </li>
                        </ul>
                      </div>
                      <div className="rounded-2xl bg-teal-dark/[0.05] p-6">
                        <h4 className="text-sm font-semibold uppercase tracking-[0.1em] text-teal-darkest/40">
                          Experience
                        </h4>
                        <ul className="mt-4 space-y-3 text-sm leading-relaxed text-teal-darkest/70">
                          <li>
                            Nearly 30 years of senior leadership roles in the
                            retail and consumer goods industry.
                          </li>
                          <li>
                            Managed turnovers up to &pound;450M and led teams of
                            over 120 individuals.
                          </li>
                          <li>
                            Worked with prominent corporations like Mars and
                            Marks &amp; Spencer, serving clients globally.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Heidi */}
            <Reveal delay={120}>
              <div className="rounded-[2rem] bg-white/40 p-1.5 ring-1 ring-white/50">
                <div className="rounded-[calc(2rem-6px)] bg-white/70 p-7 md:p-10">
                  <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
                    <div className="md:col-span-4 lg:col-span-3">
                      <div className="overflow-hidden rounded-2xl bg-teal-dark/10">
                        <Image
                          src="/images/heidi.png"
                          alt="Heidi Hunter-Cope"
                          width={300}
                          height={300}
                          className="w-full"
                        />
                      </div>
                      <h3 className="mt-5 text-xl font-bold text-teal-darkest md:text-2xl">
                        Heidi Hunter-Cope
                      </h3>
                      <ul className="mt-3 space-y-1.5 text-sm text-teal-darkest/60">
                        <li>Chartered Psychologist</li>
                        <li>25 years in developing people</li>
                        <li>Experienced in large-scale organisational change</li>
                        <li>Diverse sector experience</li>
                      </ul>
                    </div>

                    <div className="md:col-span-8 lg:col-span-9 grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <div className="rounded-2xl bg-teal-dark/[0.05] p-6">
                        <h4 className="text-sm font-semibold uppercase tracking-[0.1em] text-teal-darkest/40">
                          Expertise
                        </h4>
                        <ul className="mt-4 space-y-3 text-sm leading-relaxed text-teal-darkest/70">
                          <li>
                            25 years of creating innovative leadership
                            solutions.
                          </li>
                          <li>
                            Expert in managing large-scale change projects.
                          </li>
                          <li>
                            Improves leadership skills, communication,
                            management, and relationship skills.
                          </li>
                        </ul>
                      </div>
                      <div className="rounded-2xl bg-teal-dark/[0.05] p-6">
                        <h4 className="text-sm font-semibold uppercase tracking-[0.1em] text-teal-darkest/40">
                          Experience
                        </h4>
                        <ul className="mt-4 space-y-3 text-sm leading-relaxed text-teal-darkest/70">
                          <li>
                            Worked across a wide range of industries including
                            FMCG, financial services, utilities, engineering,
                            professional partnerships, retail, airlines and
                            elite sport.
                          </li>
                          <li>
                            Managed large-scale change and development
                            initiatives.
                          </li>
                          <li>
                            Extensive work throughout the UK and
                            internationally.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ CTA ═══════════════════════ */}
      <section id="contact" className="py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal>
            <div className="rounded-[2.5rem] bg-teal-dark p-1.5 shadow-[0_20px_60px_rgba(0,0,0,0.12)]">
              <div className="rounded-[calc(2.5rem-6px)] bg-teal-dark px-8 py-20 text-center md:px-16 md:py-28">
                <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
                  Ready To Ignite Your Potential?
                </h2>
                <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-white/60 md:text-lg">
                  Click the button below to start your journey towards growth
                  and success.
                </p>
                <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                  <a
                    href="mailto:heidi@ignitepotential.ltd"
                    className="group inline-flex items-center gap-3 rounded-full bg-purple px-10 py-4 text-base font-semibold text-white transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-purple-hover active:scale-[0.97]"
                  >
                    Get In Touch
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/15 transition-transform duration-300 group-hover:translate-x-0.5">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 6h7M7 2.5L10.5 6 7 9.5" /></svg>
                    </span>
                  </a>
                  <a
                    href="mailto:heidi@ignitepotential.ltd"
                    className="text-sm font-medium text-white/50 underline underline-offset-4 transition-colors duration-200 hover:text-white/80"
                  >
                    Click to email us
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════ FOOTER ═══════════════════════ */}
      <footer className="border-t border-teal-dark/10 py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-sm text-teal-darkest/40 md:flex-row md:px-10">
          <Image
            src="/images/logo.png"
            alt="Ignite Potential"
            width={120}
            height={44}
            className="h-7 w-auto opacity-60"
          />
          <span>
            &copy; {new Date().getFullYear()} Ignite Potential Ltd. All rights
            reserved.
          </span>
        </div>
      </footer>
    </>
  );
}
