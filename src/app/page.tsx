import Image from "next/image";
import Nav from "./components/Nav";
import Reveal from "./components/Reveal";

export default function Home() {
  return (
    <>
      <Nav />

      {/* ═══════════════ HERO ═══════════════ */}
      <section className="relative flex min-h-[100dvh] items-center overflow-hidden">
        {/* Gradient overlay to fade image into bg */}
        <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-r from-teal via-teal/80 to-transparent" />
        {/* Extra mobile overlay */}
        <div className="pointer-events-none absolute inset-0 z-10 bg-teal/40 lg:hidden" />

        {/* Hero image — absolutely positioned, fills right side, MC Coaching style */}
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-3/5 z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/hero-illustration.png"
            alt=""
            className="h-full w-full object-contain object-right mix-blend-multiply opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-teal via-teal/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-teal via-transparent to-teal/30" />
        </div>

        <div className="relative z-20 mx-auto w-full max-w-6xl px-6 py-32">
          <div className="max-w-xl">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-teal-darkest/70 ring-1 ring-white/30 backdrop-blur-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-purple" />
                People Development
              </span>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="mt-8 text-[clamp(2.8rem,7vw,5rem)] font-bold leading-[1.05] tracking-[-0.03em] text-teal-darkest text-balance">
                Empowering{" "}
                <span className="text-teal-deep">growth</span> and{" "}
                <span className="text-teal-deep">development</span>
              </h1>
            </Reveal>

            <Reveal delay={150}>
              <p className="mt-6 max-w-[44ch] text-base leading-[1.7] text-teal-darkest/60 md:text-[17px]">
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
        </div>
      </section>

      {/* ═══════════════ DIFFERENTIATORS ═══════════════ */}
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
              <Reveal delay={120} className="mt-10">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/circle-fire.png" alt="Innovation illustration" width={280} height={280} className="w-48 mix-blend-multiply opacity-85 md:w-56" />
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

      {/* ═══════════════ SERVICES */}
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

          <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {([
              {
                img: "/images/individual-development.png",
                alt: "One-on-one coaching session",
                title: "Individual Development",
                text: "We offer personalised coaching to unlock your full potential. Our expert guidance helps you overcome challenges, set meaningful goals, and thrive in all aspects of life.",
                delay: 80,
              },
              {
                img: "/images/group-development.png",
                alt: "Team workshop collaboration",
                title: "Group Development",
                text: "Build team cohesion and success through interactive workshops and targeted coaching. Our expert facilitators drive collaboration, communication, and results.",
                delay: 140,
              },
              {
                img: "/images/consulting.png",
                alt: "Strategic consulting presentation",
                title: "Personal Consulting",
                text: "Expert consultancy services to drive growth and development. Our team brings experience and diverse perspectives to address your unique challenges and opportunities.",
                delay: 200,
              },
            ] as const).map((service) => (
              <Reveal key={service.title} delay={service.delay}>
                <div className="group flex h-full flex-col rounded-[2rem] bg-white/50 p-1.5 ring-1 ring-white/60 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:shadow-[0_16px_50px_rgba(0,0,0,0.1)]">
                  <div className="flex h-full flex-col overflow-hidden rounded-[calc(2rem-6px)] bg-white">
                    <div className="flex items-center justify-center overflow-hidden p-8">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={service.img} alt={service.alt} width={400} height={400}
                        className="w-36 mix-blend-multiply transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-[1.05] md:w-40" />
                    </div>
                    <div className="flex flex-1 flex-col justify-between p-6">
                      <div>
                        <h3 className="text-lg font-bold text-teal-darkest">{service.title}</h3>
                        <p className="mt-2 text-sm leading-[1.7] text-teal-darkest/55">{service.text}</p>
                      </div>
                      <a href="#contact" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-purple transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:gap-3">
                        Start a conversation
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 7h8M7.5 3.5 11 7l-3.5 3.5"/></svg>
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ CASE STUDIES ═══════════════ */}
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

          {([
            {
              tag: "Women in Leadership",
              title: "Multi-national FMCG manufacturer",
              img: "/images/rocket.png",
              client: "Our client is a multi-national FMCG who are a leading manufacturer of food and pet care products.",
              need: "Our goal was to develop a program to enhance the confidence and skills of high-potential women, aiming for promotion within 12 months and addressing gender balance in leadership.",
              intro: "After understanding the client\u2019s needs, we designed a program enabling women to:",
              items: ["Recognise strengths and personal values.", "Develop confidence and resilience.", "Create a clear leadership brand.", "Build a career plan to focus future development and direction."],
              quote: "\u201CThea and Heidi bring diverse experiences and are personable and approachable. They have been flexible, easy to work with, and agile in delivering workshops for our Women in Leadership cohorts on building confidence and leadership brand.\u201D",
              result: "Women attending the programme reported a fundamental shift in mindset and leadership approach, feeling empowered to lead authentically. Additionally, many have achieved promotions.",
              delay: 100,
            },
            {
              tag: "Leadership Programme",
              title: "National network organisation",
              img: "/images/ignite-world.png",
              client: "Our client is a part of a national network who connect and create value for commercial organisations by investing in development and sharing best practice to maximise employment and growth.",
              need: "Our brief was to design a leadership program for SME leaders, aimed at enhancing leadership skills to drive better ways of working and improved business performance.",
              intro: "After assessing SME leaders\u2019 needs, we created a program to:",
              items: ["Build emotionally intelligent relationships.", "Manage teams and individuals effectively.", "Create effective vision and strategy.", "Lead an organisation through effective change."],
              quote: "\u201CI really enjoyed the course! I have learnt a lot and I am implementing this in my work as well as to improve myself as a person. I look forward to continuing to put the skills I have learnt into practice.\u201D",
              result: "This ongoing project has received positive feedback. Participants report enhanced leadership, the ability to improve organisational processes. In addition several have been promoted to Director-level positions.",
              delay: 80,
            },
          ] as const).map((cs, idx) => (
            <Reveal key={cs.title} delay={cs.delay}>
              <article className={`${idx === 0 ? "mt-14" : "mt-5"} rounded-[2rem] bg-white/50 p-1.5 ring-1 ring-white/60`}>
                <div className="overflow-hidden rounded-[calc(2rem-6px)] bg-white">
                  {/* Header band — illustration fills full width as bg */}
                  <div className="relative overflow-hidden bg-gradient-to-r from-teal-dark to-teal-deep">
                    {/* Full-width blended illustration */}
                    <div className="absolute inset-0 z-0">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={cs.img}
                        alt=""
                        className="h-full w-full object-contain object-right opacity-20 mix-blend-soft-light"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-teal-dark via-teal-dark/70 to-transparent" />
                    </div>
                    <div className="relative z-10 px-8 py-8 md:px-10 md:py-10">
                      <span className="text-[11px] font-bold uppercase tracking-widest text-white/50">{cs.tag}</span>
                      <h3 className="mt-2 text-xl font-bold text-white md:text-2xl">{cs.title}</h3>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-5">
                    <div className="space-y-6 border-b border-gray-100 p-8 md:p-10 lg:col-span-3 lg:border-b-0 lg:border-r">
                      <div>
                        <h4 className="text-[11px] font-bold uppercase tracking-widest text-teal-darkest/30">Client</h4>
                        <p className="mt-2 text-sm leading-[1.7] text-teal-darkest/60">{cs.client}</p>
                      </div>
                      <div>
                        <h4 className="text-[11px] font-bold uppercase tracking-widest text-teal-darkest/30">Client need</h4>
                        <p className="mt-2 text-sm leading-[1.7] text-teal-darkest/60">{cs.need}</p>
                      </div>
                      <div>
                        <h4 className="text-[11px] font-bold uppercase tracking-widest text-teal-darkest/30">What we did</h4>
                        <p className="mt-2 text-sm leading-[1.7] text-teal-darkest/60">{cs.intro}</p>
                        <ul className="mt-2 space-y-1.5 text-sm text-teal-darkest/60">
                          {cs.items.map((t) => (
                            <li key={t} className="flex items-start gap-2"><span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-purple/50"/>{t}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="flex flex-col gap-4 p-8 md:p-10 lg:col-span-2">
                      <div className="flex-1 rounded-2xl bg-teal/20 p-6">
                        <h4 className="text-[11px] font-bold uppercase tracking-widest text-teal-dark">Testimonial</h4>
                        <p className="mt-3 text-[15px] italic leading-[1.7] text-teal-darkest/65">{cs.quote}</p>
                      </div>
                      <div className="rounded-2xl bg-purple/[0.06] p-6">
                        <h4 className="text-[11px] font-bold uppercase tracking-widest text-purple">The result</h4>
                        <p className="mt-3 text-sm leading-[1.7] text-teal-darkest/65">{cs.result}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ═══════════════ TEAM ═══════════════ */}
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

          <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-2 lg:items-stretch">
            {([
              {
                img: "/images/thea.png",
                name: "Thea Roberts",
                roles: ["Executive Coach & Mentor", "25 years leadership experience to MD level", "Advanced facilitator", "Diverse sector experience"],
                expertise: ["Unlocking individual and team potential through coaching, mentoring, and workshops.", "Tailored sessions to clients' specific goals and desired outcomes.", "Fosters capabilities, connection, and clarity."],
                experience: ["Nearly 30 years of senior leadership in retail and consumer goods.", "Managed turnovers up to \u00A3450M and teams of 120+.", "Worked with Mars, Marks & Spencer, and global clients."],
                delay: 80,
              },
              {
                img: "/images/heidi.png",
                name: "Heidi Hunter-Cope",
                roles: ["Chartered Psychologist", "25 years in developing people", "Large-scale organisational change", "Diverse sector experience"],
                expertise: ["25 years of innovative leadership solutions.", "Expert in managing large-scale change projects.", "Improves leadership, communication, and management skills."],
                experience: ["FMCG, financial services, utilities, engineering, retail, airlines and elite sport.", "Large-scale change and development initiatives.", "Extensive work throughout the UK and internationally."],
                delay: 140,
              },
            ] as const).map((person) => (
              <Reveal key={person.name} delay={person.delay}>
                <div className="flex h-full flex-col rounded-[2rem] bg-white/50 p-1.5 ring-1 ring-white/60">
                  <div className="flex h-full flex-col overflow-hidden rounded-[calc(2rem-6px)] bg-white">
                    <div className="flex items-start gap-5 p-7 md:p-8">
                      <Image src={person.img} alt={person.name} width={160} height={160} className="h-28 w-28 shrink-0 rounded-2xl object-cover md:h-32 md:w-32" />
                      <div className="min-w-0">
                        <h3 className="text-xl font-bold text-teal-darkest">{person.name}</h3>
                        <ul className="mt-2 space-y-0.5 text-[13px] leading-snug text-teal-darkest/50">
                          {person.roles.map((r) => <li key={r}>{r}</li>)}
                        </ul>
                      </div>
                    </div>
                    <div className="grid flex-1 grid-cols-2 divide-x divide-gray-100 border-t border-gray-100">
                      <div className="p-6">
                        <h4 className="text-[11px] font-bold uppercase tracking-widest text-teal-darkest/30">Expertise</h4>
                        <ul className="mt-3 space-y-2 text-[13px] leading-[1.6] text-teal-darkest/55">
                          {person.expertise.map((e) => <li key={e}>{e}</li>)}
                        </ul>
                      </div>
                      <div className="p-6">
                        <h4 className="text-[11px] font-bold uppercase tracking-widest text-teal-darkest/30">Experience</h4>
                        <ul className="mt-3 space-y-2 text-[13px] leading-[1.6] text-teal-darkest/55">
                          {person.experience.map((e) => <li key={e}>{e}</li>)}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ CTA ═══════════════ */}
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

      {/* ═══════════════ FOOTER ═══════════════ */}
      <footer className="mt-8 rounded-t-[2.5rem] bg-teal-darkest">
        <div className="mx-auto max-w-6xl px-6 pt-14 pb-8">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <Image src="/images/logo.png" alt="Ignite Potential" width={140} height={52} className="h-8 w-auto brightness-0 invert opacity-70" />
            <div className="flex flex-wrap gap-6">
              {[
                { label: "Services", href: "#services" },
                { label: "Case Studies", href: "#case-studies" },
                { label: "Our Team", href: "#team" },
              ].map((l) => (
                <a key={l.href} href={l.href} className="text-sm text-white/35 transition-colors duration-200 hover:text-white/70">{l.label}</a>
              ))}
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-8">
            <a href="mailto:heidi@ignitepotential.ltd" className="text-sm text-white/40 transition-colors hover:text-white/70">heidi@ignitepotential.ltd</a>
            <a href="mailto:thea@ignitepotential.ltd" className="text-sm text-white/40 transition-colors hover:text-white/70">thea@ignitepotential.ltd</a>
          </div>

          <div className="mt-10 border-t border-white/[0.06]" />

          <div className="mt-6 flex flex-col items-center justify-between gap-3 text-xs text-white/25 md:flex-row">
            <span>&copy; {new Date().getFullYear()} Ignite Potential Ltd. All rights reserved.</span>
            <div className="flex gap-6">
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
