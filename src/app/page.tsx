import Image from "next/image";
import Nav from "./components/Nav";
import Reveal from "./components/Reveal";

export default function Home() {
  return (
    <>
      <Nav />

      {/* ═══════════════ HERO ═══════════════ */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
            <div>
              <Reveal>
                <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-teal-darkest md:text-5xl lg:text-[3.5rem]">
                  Empowering growth and development
                </h1>
              </Reveal>
              <Reveal delay={80}>
                <p className="mt-5 max-w-md text-[15px] leading-relaxed text-teal-darkest/65">
                  Ignite Potential offers expert people development for
                  individuals, groups, and organisations of all sizes and
                  sectors.
                </p>
              </Reveal>
              <Reveal delay={140}>
                <div className="mt-7 flex flex-wrap gap-3">
                  <a href="#case-studies" className="rounded-full border-2 border-teal-darkest px-6 py-2.5 text-sm font-semibold text-teal-darkest transition-all duration-300 hover:bg-teal-darkest hover:text-white active:scale-[0.97]">
                    Case Studies
                  </a>
                  <a href="#services" className="rounded-full border-2 border-teal-darkest px-6 py-2.5 text-sm font-semibold text-teal-darkest transition-all duration-300 hover:bg-teal-darkest hover:text-white active:scale-[0.97]">
                    Our Services
                  </a>
                </div>
              </Reveal>
            </div>
            <Reveal delay={100} className="flex justify-center">
              <Image src="/images/blue-fire.png" alt="Growth and innovation illustration" width={420} height={420} className="w-56 drop-shadow-lg md:w-72 lg:w-80" priority />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══════════════ DIFFERENTIATORS ═══════════════ */}
      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <h2 className="text-center text-2xl font-bold tracking-tight text-teal-darkest md:text-3xl lg:text-4xl">
              Where experience meets personalised progress
            </h2>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 items-center gap-10 md:grid-cols-12">
            <Reveal className="md:col-span-4 flex justify-center">
              <Image src="/images/circle-fire.png" alt="Innovation illustration" width={307} height={307} className="w-44 drop-shadow-lg md:w-56" />
            </Reveal>

            <div className="md:col-span-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {([
                { img: "/images/diverse-expertise.png", title: "Diverse Expertise", text: "Benefit from our extensive experience and broad perspectives in leadership and psychology, tailored to suit various sectors and organisational sizes." },
                { img: "/images/real-world-application.png", title: "Real-World Application", text: "Gain practical insights and strategies derived from our hands-on experience, ensuring effective solutions that work in real-life situations." },
                { img: "/images/personalised-approach.png", title: "Personalised Approach", text: "Experience energetic, friendly, and positive coaching and mentoring sessions customised to your specific needs and goals, fostering growth and development." },
              ] as const).map((item, i) => (
                <Reveal key={item.title} delay={i * 80 + 60}>
                  <div className="h-full rounded-3xl bg-teal-dark p-6 text-center text-white transition-shadow duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.15)]">
                    <Image src={item.img} alt={item.title} width={64} height={64} className="mx-auto w-14" />
                    <h3 className="mt-4 text-base font-bold leading-tight">{item.title}</h3>
                    <p className="mt-3 text-[13px] leading-relaxed text-white/75">{item.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ SERVICES ═══════════════ */}
      <section id="services" className="py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <h2 className="text-center text-2xl font-bold tracking-tight text-teal-darkest md:text-3xl lg:text-4xl">
              Our Services
            </h2>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-12">
            {/* Featured: Individual Development */}
            <Reveal className="md:col-span-7 md:row-span-2" delay={60}>
              <div className="group h-full overflow-hidden rounded-3xl bg-white shadow-[0_2px_20px_rgba(0,0,0,0.06)] transition-shadow duration-500 hover:shadow-[0_8px_40px_rgba(0,0,0,0.1)]">
                <div className="overflow-hidden">
                  <Image src="/images/individual-development.jpeg" alt="Individual walking towards growth" width={629} height={629} className="w-full transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-[1.03]" />
                </div>
                <div className="p-7 md:p-8">
                  <h3 className="text-xl font-bold text-teal-darkest md:text-2xl">Individual Development</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-teal-darkest/60">
                    We offer personalised coaching to unlock your full potential. Our expert guidance helps you overcome challenges, set meaningful goals, and thrive in all aspects of life.
                  </p>
                  <a href="#contact" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-purple transition-all duration-300 hover:gap-3">
                    Start a conversation
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 7h8M7.5 3.5 11 7l-3.5 3.5" /></svg>
                  </a>
                </div>
              </div>
            </Reveal>

            {/* Group Development */}
            <Reveal className="md:col-span-5" delay={120}>
              <div className="group h-full overflow-hidden rounded-3xl bg-white shadow-[0_2px_20px_rgba(0,0,0,0.06)] transition-shadow duration-500 hover:shadow-[0_8px_40px_rgba(0,0,0,0.1)]">
                <div className="overflow-hidden">
                  <Image src="/images/group-development.jpeg" alt="Team walking towards innovation" width={629} height={629} className="w-full transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-[1.03]" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-teal-darkest">Group Development</h3>
                  <p className="mt-2 text-sm leading-relaxed text-teal-darkest/60">
                    Build team cohesion and success through interactive workshops and targeted coaching. Our expert facilitators drive collaboration, communication, and results.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Personal Consulting */}
            <Reveal className="md:col-span-5" delay={180}>
              <div className="group h-full overflow-hidden rounded-3xl bg-white shadow-[0_2px_20px_rgba(0,0,0,0.06)] transition-shadow duration-500 hover:shadow-[0_8px_40px_rgba(0,0,0,0.1)]">
                <div className="overflow-hidden">
                  <Image src="/images/consulting.jpeg" alt="Digital innovation and consulting" width={629} height={629} className="w-full transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-[1.03]" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-teal-darkest">Personal Consulting</h3>
                  <p className="mt-2 text-sm leading-relaxed text-teal-darkest/60">
                    Expert consultancy services to drive growth and development. Our team brings experience and diverse perspectives to address your unique challenges and opportunities.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={200}>
            <div className="mt-10 text-center">
              <a href="#contact" className="inline-block rounded-full bg-purple px-8 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-purple-hover active:scale-[0.97]">
                Get In Touch
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════ CASE STUDIES ═══════════════ */}
      <section id="case-studies" className="py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <h2 className="text-center text-2xl font-bold tracking-tight text-teal-darkest md:text-3xl lg:text-4xl">
              Case Studies
            </h2>
          </Reveal>

          {/* Case Study 1 */}
          <Reveal delay={80}>
            <div className="mt-12 overflow-hidden rounded-3xl bg-white shadow-[0_2px_20px_rgba(0,0,0,0.06)]">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Left */}
                <div className="border-b border-gray-100 p-7 md:p-10 lg:border-b-0 lg:border-r">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-widest text-purple">Women in Leadership</span>
                      <h3 className="mt-2 text-xl font-bold text-teal-darkest md:text-2xl">Multi-national FMCG manufacturer</h3>
                    </div>
                    <Image src="/images/rocket.png" alt="" width={72} height={72} className="hidden w-16 shrink-0 sm:block" />
                  </div>

                  <div className="mt-6">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-teal-darkest/35">Client</h4>
                    <p className="mt-2 text-sm leading-relaxed text-teal-darkest/65">
                      Our client is a multi-national FMCG who are a leading manufacturer of food and pet care products.
                    </p>
                  </div>

                  <div className="mt-5">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-teal-darkest/35">Client Need</h4>
                    <p className="mt-2 text-sm leading-relaxed text-teal-darkest/65">
                      Our goal was to develop a program to enhance the confidence and skills of high-potential women, aiming for promotion within 12 months and addressing gender balance in leadership.
                    </p>
                  </div>

                  <div className="mt-5">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-teal-darkest/35">What we did</h4>
                    <p className="mt-2 text-sm leading-relaxed text-teal-darkest/65">After understanding the client&apos;s needs, we designed a program enabling women to:</p>
                    <ul className="mt-2 space-y-1.5 text-sm text-teal-darkest/65">
                      {["Recognise strengths and personal values.", "Develop confidence and resilience.", "Create a clear leadership brand.", "Build a career plan to focus future development and direction."].map((t) => (
                        <li key={t} className="flex items-start gap-2.5"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-purple/40" />{t}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right */}
                <div className="flex flex-col p-7 md:p-10">
                  <div className="flex-1 rounded-2xl bg-teal/15 p-6">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-teal-dark">Testimonial</h4>
                    <p className="mt-3 text-[15px] italic leading-relaxed text-teal-darkest/70">
                      &ldquo;Thea and Heidi bring diverse experiences and are personable and approachable. They have been flexible, easy to work with, and agile in delivering workshops for our Women in Leadership cohorts on building confidence and leadership brand.&rdquo;
                    </p>
                  </div>
                  <div className="mt-4 rounded-2xl bg-purple/[0.07] p-6">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-purple">The Result</h4>
                    <p className="mt-3 text-sm leading-relaxed text-teal-darkest/70">
                      Women attending the programme reported a fundamental shift in mindset and leadership approach, feeling empowered to lead authentically. Additionally, many have achieved promotions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Case Study 2 */}
          <Reveal delay={80}>
            <div className="mt-6 overflow-hidden rounded-3xl bg-white shadow-[0_2px_20px_rgba(0,0,0,0.06)]">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="border-b border-gray-100 p-7 md:p-10 lg:border-b-0 lg:border-r">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-widest text-purple">Leadership Programme</span>
                      <h3 className="mt-2 text-xl font-bold text-teal-darkest md:text-2xl">National network organisation</h3>
                    </div>
                    <Image src="/images/ignite-world.png" alt="" width={72} height={72} className="hidden w-16 shrink-0 sm:block" />
                  </div>

                  <div className="mt-6">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-teal-darkest/35">Client</h4>
                    <p className="mt-2 text-sm leading-relaxed text-teal-darkest/65">
                      Our client is a part of a national network who connect and create value for commercial organisations by investing in development and sharing best practice to maximise employment and growth.
                    </p>
                  </div>

                  <div className="mt-5">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-teal-darkest/35">Client Need</h4>
                    <p className="mt-2 text-sm leading-relaxed text-teal-darkest/65">
                      Our brief was to design a leadership program for SME leaders, aimed at enhancing leadership skills to drive better ways of working and improved business performance.
                    </p>
                  </div>

                  <div className="mt-5">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-teal-darkest/35">What we did</h4>
                    <p className="mt-2 text-sm leading-relaxed text-teal-darkest/65">After assessing SME leaders&apos; needs, we created a program to:</p>
                    <ul className="mt-2 space-y-1.5 text-sm text-teal-darkest/65">
                      {["Build emotionally intelligent relationships.", "Manage teams and individuals effectively.", "Create effective vision and strategy.", "Lead an organisation through effective change."].map((t) => (
                        <li key={t} className="flex items-start gap-2.5"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-purple/40" />{t}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex flex-col p-7 md:p-10">
                  <div className="flex-1 rounded-2xl bg-teal/15 p-6">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-teal-dark">Testimonial</h4>
                    <p className="mt-3 text-[15px] italic leading-relaxed text-teal-darkest/70">
                      &ldquo;I really enjoyed the course! I have learnt a lot and I am implementing this in my work as well as to improve myself as a person. I look forward to continuing to put the skills I have learnt into practice.&rdquo;
                    </p>
                  </div>
                  <div className="mt-4 rounded-2xl bg-purple/[0.07] p-6">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-purple">The Result</h4>
                    <p className="mt-3 text-sm leading-relaxed text-teal-darkest/70">
                      This ongoing project has received positive feedback. Participants report enhanced leadership, the ability to improve organisational processes. In addition several have been promoted to Director-level positions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════ TEAM ═══════════════ */}
      <section id="team" className="py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <h2 className="text-center text-2xl font-bold tracking-tight text-teal-darkest md:text-3xl lg:text-4xl">
              Meet Our Team
            </h2>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {/* Thea */}
            <Reveal delay={60}>
              <div className="h-full overflow-hidden rounded-3xl bg-white shadow-[0_2px_20px_rgba(0,0,0,0.06)]">
                <div className="flex flex-col items-center gap-5 p-7 sm:flex-row sm:items-start md:p-8">
                  <Image src="/images/thea.png" alt="Thea Roberts" width={200} height={200} className="h-36 w-36 shrink-0 rounded-2xl object-cover" />
                  <div>
                    <h3 className="text-lg font-bold text-teal-darkest">Thea Roberts</h3>
                    <ul className="mt-2 space-y-0.5 text-[13px] text-teal-darkest/55">
                      <li>Executive Coach &amp; Mentor</li>
                      <li>25 years leadership experience to MD level</li>
                      <li>Advanced facilitator</li>
                      <li>Diverse sector experience</li>
                    </ul>
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-px bg-gray-100 sm:grid-cols-2">
                  <div className="bg-white p-6">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-teal-darkest/35">Expertise</h4>
                    <ul className="mt-3 space-y-2 text-[13px] leading-relaxed text-teal-darkest/60">
                      <li>Specialises in unlocking individual and team potential through coaching, mentoring, and workshops.</li>
                      <li>Tailors sessions to clients&apos; specific goals and desired outcomes.</li>
                      <li>Fosters capabilities, connection, and clarity to manage work-life demands effectively.</li>
                    </ul>
                  </div>
                  <div className="bg-white p-6">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-teal-darkest/35">Experience</h4>
                    <ul className="mt-3 space-y-2 text-[13px] leading-relaxed text-teal-darkest/60">
                      <li>Nearly 30 years of senior leadership roles in the retail and consumer goods industry.</li>
                      <li>Managed turnovers up to &pound;450M and led teams of over 120 individuals.</li>
                      <li>Worked with prominent corporations like Mars and Marks &amp; Spencer, serving clients globally.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Heidi */}
            <Reveal delay={120}>
              <div className="h-full overflow-hidden rounded-3xl bg-white shadow-[0_2px_20px_rgba(0,0,0,0.06)]">
                <div className="flex flex-col items-center gap-5 p-7 sm:flex-row sm:items-start md:p-8">
                  <Image src="/images/heidi.png" alt="Heidi Hunter-Cope" width={200} height={200} className="h-36 w-36 shrink-0 rounded-2xl object-cover" />
                  <div>
                    <h3 className="text-lg font-bold text-teal-darkest">Heidi Hunter-Cope</h3>
                    <ul className="mt-2 space-y-0.5 text-[13px] text-teal-darkest/55">
                      <li>Chartered Psychologist</li>
                      <li>25 years in developing people</li>
                      <li>Experienced in large-scale organisational change</li>
                      <li>Diverse sector experience</li>
                    </ul>
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-px bg-gray-100 sm:grid-cols-2">
                  <div className="bg-white p-6">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-teal-darkest/35">Expertise</h4>
                    <ul className="mt-3 space-y-2 text-[13px] leading-relaxed text-teal-darkest/60">
                      <li>25 years of creating innovative leadership solutions.</li>
                      <li>Expert in managing large-scale change projects.</li>
                      <li>Improves leadership skills, communication, management, and relationship skills.</li>
                    </ul>
                  </div>
                  <div className="bg-white p-6">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-teal-darkest/35">Experience</h4>
                    <ul className="mt-3 space-y-2 text-[13px] leading-relaxed text-teal-darkest/60">
                      <li>Worked across a wide range of industries including FMCG, financial services, utilities, engineering, professional partnerships, retail, airlines and elite sport.</li>
                      <li>Managed large-scale change and development initiatives.</li>
                      <li>Extensive work throughout the UK and internationally.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══════════════ CTA ═══════════════ */}
      <section id="contact" className="py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="rounded-3xl bg-teal-dark px-8 py-16 text-center shadow-[0_8px_40px_rgba(0,0,0,0.12)] md:px-16 md:py-20">
              <h2 className="text-2xl font-bold tracking-tight text-white md:text-3xl lg:text-4xl">
                Ready To Ignite Your Potential?
              </h2>
              <p className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-white/55">
                Click the button below to start your journey towards growth and success.
              </p>
              <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                <a href="mailto:heidi@ignitepotential.ltd" className="rounded-full bg-purple px-9 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-purple-hover active:scale-[0.97]">
                  Get In Touch
                </a>
                <a href="mailto:heidi@ignitepotential.ltd" className="text-sm font-medium text-white/40 underline underline-offset-4 hover:text-white/70">
                  Click to email us
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════ FOOTER ═══════════════ */}
      <footer className="py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 text-xs text-teal-darkest/35 md:flex-row">
          <Image src="/images/logo.png" alt="Ignite Potential" width={100} height={37} className="h-6 w-auto opacity-50" />
          <span>&copy; {new Date().getFullYear()} Ignite Potential Ltd. All rights reserved.</span>
        </div>
      </footer>
    </>
  );
}
