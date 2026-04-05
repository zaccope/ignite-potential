import Image from "next/image";
import Nav from "./components/Nav";
import Reveal from "./components/Reveal";

export default function Home() {
  return (
    <>
      <Nav />

      {/* ═══════════════════════════════════════════ HERO */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-20">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
            <div>
              <Reveal>
                <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
                  Empowering growth and development
                </h1>
              </Reveal>
              <Reveal delay={80}>
                <p className="mt-6 max-w-lg text-base leading-relaxed text-black/70 md:text-lg">
                  Ignite Potential offers expert people development for
                  individuals, groups, and organisations of all sizes and
                  sectors.
                </p>
              </Reveal>
              <Reveal delay={160}>
                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href="#case-studies"
                    className="rounded-full border-2 border-black px-7 py-3 text-sm font-semibold text-black transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-black hover:text-white active:scale-[0.97]"
                  >
                    Case Studies
                  </a>
                  <a
                    href="#services"
                    className="rounded-full border-2 border-black px-7 py-3 text-sm font-semibold text-black transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-black hover:text-white active:scale-[0.97]"
                  >
                    Our Services
                  </a>
                </div>
              </Reveal>
            </div>
            <Reveal delay={120} className="flex justify-center">
              <Image
                src="/images/blue-fire.png"
                alt="Abstract illustration representing creativity, growth and innovation"
                width={400}
                height={400}
                className="w-64 md:w-80 lg:w-96"
                priority
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ WHERE EXPERIENCE MEETS */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal>
            <h2 className="text-center text-3xl font-bold tracking-tight md:text-4xl">
              Where experience meets personalised progress
            </h2>
          </Reveal>

          <div className="mt-16 grid grid-cols-1 items-center gap-12 md:grid-cols-12">
            {/* Circle fire illustration */}
            <Reveal className="md:col-span-4 flex justify-center">
              <Image
                src="/images/circle-fire.png"
                alt="Illustration of a lightbulb with gears and flames, representing innovation"
                width={307}
                height={307}
                className="w-48 md:w-64"
              />
            </Reveal>

            {/* Three differentiator cards */}
            <div className="md:col-span-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <Reveal delay={80}>
                <div className="flex flex-col items-center rounded-[2rem] bg-teal-dark p-6 text-center text-white md:p-8">
                  <Image
                    src="/images/diverse-expertise.png"
                    alt="Diverse expertise"
                    width={80}
                    height={80}
                    className="mb-4 w-16"
                  />
                  <h3 className="text-lg font-semibold">Diverse Expertise</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/80">
                    Benefit from our extensive experience and broad perspectives
                    in leadership and psychology, tailored to suit various
                    sectors and organisational sizes.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={160}>
                <div className="flex flex-col items-center rounded-[2rem] bg-teal-dark p-6 text-center text-white md:p-8">
                  <Image
                    src="/images/real-world-application.png"
                    alt="Real-world application"
                    width={80}
                    height={80}
                    className="mb-4 w-16"
                  />
                  <h3 className="text-lg font-semibold">
                    Real-World Application
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/80">
                    Gain practical insights and strategies derived from our
                    hands-on experience, ensuring effective solutions that work
                    in real-life situations.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={240}>
                <div className="flex flex-col items-center rounded-[2rem] bg-teal-dark p-6 text-center text-white md:p-8">
                  <Image
                    src="/images/personalised-approach.png"
                    alt="Personalised approach"
                    width={80}
                    height={80}
                    className="mb-4 w-16"
                  />
                  <h3 className="text-lg font-semibold">
                    Personalised Approach
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/80">
                    Experience energetic, friendly, and positive coaching and
                    mentoring sessions customised to your specific needs and
                    goals, fostering growth and development.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ SERVICES */}
      <section id="services" className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal>
            <h2 className="text-center text-3xl font-bold tracking-tight md:text-4xl">
              Our Services
            </h2>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Individual Development */}
            <Reveal delay={80}>
              <div className="flex flex-col overflow-hidden rounded-[2rem] bg-teal-dark">
                <div className="p-6 md:p-8">
                  <Image
                    src="/images/individual-development.jpeg"
                    alt="Businessman with briefcase walking towards growth, surrounded by innovation symbols"
                    width={629}
                    height={629}
                    className="mx-auto w-full max-w-[280px] rounded-2xl"
                  />
                </div>
                <div className="flex flex-1 flex-col px-6 pb-8 text-center text-white md:px-8">
                  <h3 className="text-xl font-semibold">
                    Individual Development
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/80">
                    We offer personalised coaching to unlock your full potential.
                    Our expert guidance helps you overcome challenges, set
                    meaningful goals, and thrive in all aspects of life.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Group Development */}
            <Reveal delay={160}>
              <div className="flex flex-col overflow-hidden rounded-[2rem] bg-teal-dark">
                <div className="p-6 md:p-8">
                  <Image
                    src="/images/group-development.jpeg"
                    alt="People walking towards a flame, symbolising teamwork and innovation"
                    width={629}
                    height={629}
                    className="mx-auto w-full max-w-[280px] rounded-2xl"
                  />
                </div>
                <div className="flex flex-1 flex-col px-6 pb-8 text-center text-white md:px-8">
                  <h3 className="text-xl font-semibold">Group Development</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/80">
                    Build team cohesion and success through interactive workshops
                    and targeted coaching. Our expert facilitators drive
                    collaboration, communication, and results.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Personal Consulting */}
            <Reveal delay={240}>
              <div className="flex flex-col overflow-hidden rounded-[2rem] bg-teal-dark sm:col-span-2 lg:col-span-1">
                <div className="p-6 md:p-8">
                  <Image
                    src="/images/consulting.jpeg"
                    alt="Person with digital network head, holding laptop with swirling energy"
                    width={629}
                    height={629}
                    className="mx-auto w-full max-w-[280px] rounded-2xl"
                  />
                </div>
                <div className="flex flex-1 flex-col px-6 pb-8 text-center text-white md:px-8">
                  <h3 className="text-xl font-semibold">Personal Consulting</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/80">
                    Expert consultancy services to drive growth and development.
                    Our team brings experience and diverse perspectives to
                    address your unique challenges and opportunities.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={300}>
            <div className="mt-10 flex justify-center">
              <a
                href="#contact"
                className="rounded-full bg-purple px-10 py-4 text-base font-semibold text-white transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-purple-hover active:scale-[0.97]"
              >
                Get In Touch
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ CASE STUDIES */}
      <section id="case-studies" className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal>
            <h2 className="text-center text-3xl font-bold tracking-tight md:text-4xl">
              Case Studies
            </h2>
          </Reveal>

          {/* Case Study 1 */}
          <Reveal delay={80}>
            <div className="mt-14 grid grid-cols-1 gap-4 lg:grid-cols-2">
              {/* Left column: Client + Client Need */}
              <div className="space-y-4">
                <div className="rounded-[2rem] bg-teal-dark p-6 text-white md:p-8">
                  <h3 className="text-lg font-semibold">Client</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/80">
                    Our client is a multi-national FMCG who are a leading
                    manufacturer of food and pet care products.
                  </p>
                </div>
                <div className="rounded-[2rem] bg-teal-dark p-6 text-white md:p-8">
                  <h3 className="text-lg font-semibold">Client Need</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/80">
                    Our goal was to develop a program to enhance the confidence
                    and skills of high-potential women, aiming for promotion
                    within 12 months and addressing gender balance in leadership.
                  </p>
                </div>
              </div>

              {/* Right column: What we did */}
              <div className="space-y-4">
                <div className="rounded-[2rem] bg-teal-dark p-6 text-white md:p-8">
                  <h3 className="text-lg font-semibold">What we did</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/80">
                    After understanding the client&apos;s needs, we designed a
                    program enabling women to:
                  </p>
                  <ul className="mt-3 space-y-2 text-sm text-white/80">
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-white/50" />
                      Recognise strengths and personal values.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-white/50" />
                      Develop confidence and resilience.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-white/50" />
                      Create a clear leadership brand.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-white/50" />
                      Build a career plan to focus future development and
                      direction.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Testimonial + Result row */}
          <Reveal delay={120}>
            <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
              <div className="rounded-[2rem] bg-teal-dark p-6 text-white md:p-8">
                <h3 className="text-lg font-semibold">Testimonial</h3>
                <p className="mt-3 text-sm italic leading-relaxed text-white/80">
                  &ldquo;Thea and Heidi bring diverse experiences and are
                  personable and approachable. They have been flexible, easy to
                  work with, and agile in delivering workshops for our Women in
                  Leadership cohorts on building confidence and leadership
                  brand.&rdquo;
                </p>
              </div>
              <div className="rounded-[2rem] bg-teal-dark p-6 text-white md:p-8">
                <h3 className="text-lg font-semibold">The Result</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/80">
                  Women attending the programme reported a fundamental shift in
                  mindset and leadership approach, feeling empowered to lead
                  authentically. Additionally, many have achieved promotions.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Decorative image between case studies */}
          <Reveal delay={80}>
            <div className="my-12 flex justify-center">
              <Image
                src="/images/rocket.png"
                alt="Rocket illustration representing business success"
                width={200}
                height={200}
                className="w-40 md:w-52"
              />
            </div>
          </Reveal>

          {/* Case Study 2 */}
          <Reveal delay={80}>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
              <div className="space-y-4">
                <div className="rounded-[2rem] bg-teal-dark p-6 text-white md:p-8">
                  <h3 className="text-lg font-semibold">Client</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/80">
                    Our client is a part of a national network who connect and
                    create value for commercial organisations by investing in
                    development and sharing best practice to maximise employment
                    and growth.
                  </p>
                </div>
                <div className="rounded-[2rem] bg-teal-dark p-6 text-white md:p-8">
                  <h3 className="text-lg font-semibold">Client Need</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/80">
                    Our brief was to design a leadership program for SME leaders,
                    aimed at enhancing leadership skills to drive better ways of
                    working and improved business performance.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="rounded-[2rem] bg-teal-dark p-6 text-white md:p-8">
                  <h3 className="text-lg font-semibold">What we did</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/80">
                    After assessing SME leaders&apos; needs, we created a program
                    to:
                  </p>
                  <ul className="mt-3 space-y-2 text-sm text-white/80">
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-white/50" />
                      Build emotionally intelligent relationships.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-white/50" />
                      Manage teams and individuals effectively.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-white/50" />
                      Create effective vision and strategy.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-white/50" />
                      Lead an organisation through effective change.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
              <div className="rounded-[2rem] bg-teal-dark p-6 text-white md:p-8">
                <h3 className="text-lg font-semibold">Testimonial</h3>
                <p className="mt-3 text-sm italic leading-relaxed text-white/80">
                  &ldquo;I really enjoyed the course! I have learnt a lot and I
                  am implementing this in my work as well as to improve myself as
                  a person. I look forward to continuing to put the skills I have
                  learnt into practice.&rdquo;
                </p>
              </div>
              <div className="rounded-[2rem] bg-teal-dark p-6 text-white md:p-8">
                <h3 className="text-lg font-semibold">The Result</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/80">
                  This ongoing project has received positive feedback.
                  Participants report enhanced leadership, the ability to improve
                  organisational processes. In addition several have been
                  promoted to Director-level positions.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Ignite world illustration */}
          <Reveal delay={80}>
            <div className="mt-12 flex justify-center">
              <Image
                src="/images/ignite-world.png"
                alt="Light bulb against globe with gears, representing global innovation"
                width={200}
                height={200}
                className="w-40 md:w-52"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ TEAM */}
      <section id="team" className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal>
            <h2 className="text-center text-3xl font-bold tracking-tight md:text-4xl">
              Meet Our Team!
            </h2>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-2">
            {/* Thea */}
            <Reveal delay={80}>
              <div className="rounded-[2rem] bg-teal-dark p-6 text-white md:p-8">
                <div className="flex flex-col items-center sm:flex-row sm:items-start gap-6">
                  <Image
                    src="/images/thea.png"
                    alt="Thea Roberts"
                    width={180}
                    height={180}
                    className="h-40 w-40 shrink-0 rounded-2xl object-cover"
                  />
                  <div>
                    <h3 className="text-xl font-bold">Thea Roberts</h3>
                    <ul className="mt-3 space-y-1 text-sm text-white/80">
                      <li>Executive Coach &amp; Mentor.</li>
                      <li>25 years leadership experience to MD level.</li>
                      <li>Advanced facilitator.</li>
                      <li>Diverse sector experience.</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl bg-white/10 p-5">
                    <h4 className="font-semibold">Expertise</h4>
                    <ul className="mt-2 space-y-2 text-sm text-white/80">
                      <li>
                        Specialises in unlocking individual and team potential
                        through coaching, mentoring, and workshops.
                      </li>
                      <li>
                        Tailors sessions to clients&apos; specific goals and
                        desired outcomes.
                      </li>
                      <li>
                        Fosters capabilities, connection, and clarity to manage
                        work-life demands effectively.
                      </li>
                    </ul>
                  </div>
                  <div className="rounded-2xl bg-white/10 p-5">
                    <h4 className="font-semibold">Experience</h4>
                    <ul className="mt-2 space-y-2 text-sm text-white/80">
                      <li>
                        Nearly 30 years of senior leadership roles in the retail
                        and consumer goods industry.
                      </li>
                      <li>
                        Managed turnovers up to &pound;450M and led teams of over
                        120 individuals.
                      </li>
                      <li>
                        Worked with prominent corporations like Mars and Marks
                        &amp; Spencer, serving clients globally.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Heidi */}
            <Reveal delay={160}>
              <div className="rounded-[2rem] bg-teal-dark p-6 text-white md:p-8">
                <div className="flex flex-col items-center sm:flex-row sm:items-start gap-6">
                  <Image
                    src="/images/heidi.png"
                    alt="Heidi Hunter-Cope"
                    width={180}
                    height={180}
                    className="h-40 w-40 shrink-0 rounded-2xl object-cover"
                  />
                  <div>
                    <h3 className="text-xl font-bold">Heidi Hunter-Cope</h3>
                    <ul className="mt-3 space-y-1 text-sm text-white/80">
                      <li>Chartered Psychologist</li>
                      <li>25 years in developing people</li>
                      <li>
                        Experienced in large-scale organisational change and
                        people development.
                      </li>
                      <li>Diverse sector experience</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl bg-white/10 p-5">
                    <h4 className="font-semibold">Expertise</h4>
                    <ul className="mt-2 space-y-2 text-sm text-white/80">
                      <li>
                        25 years of creating innovative leadership solutions.
                      </li>
                      <li>
                        Expert in managing large-scale change projects.
                      </li>
                      <li>
                        Improves leadership skills, communication, management,
                        and relationship skills.
                      </li>
                    </ul>
                  </div>
                  <div className="rounded-2xl bg-white/10 p-5">
                    <h4 className="font-semibold">Experience</h4>
                    <ul className="mt-2 space-y-2 text-sm text-white/80">
                      <li>
                        Worked across a wide range of industries including FMCG,
                        financial services, utilities, engineering, professional
                        partnerships, retail, airlines and elite sport.
                      </li>
                      <li>
                        Managed large-scale change and development initiatives.
                      </li>
                      <li>
                        Extensive work throughout the UK and internationally.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ CTA / CONTACT */}
      <section id="contact" className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6 text-center md:px-10">
          <Reveal>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Ready To Ignite Your Potential?
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="mt-5 text-base leading-relaxed text-black/70 md:text-lg">
              Click the button below to start your journey towards growth and
              success!
            </p>
          </Reveal>
          <Reveal delay={160}>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href="mailto:heidi@ignitepotential.ltd"
                className="rounded-full bg-purple px-10 py-4 text-base font-semibold text-white transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-purple-hover active:scale-[0.97]"
              >
                Get In Touch
              </a>
              <a
                href="mailto:heidi@ignitepotential.ltd"
                className="text-sm font-medium text-black/60 underline underline-offset-4 transition-colors duration-200 hover:text-black"
              >
                Click To Email Us
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ FOOTER */}
      <footer className="border-t border-black/10 py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 md:flex-row md:px-10">
          <Image
            src="/images/logo.png"
            alt="Ignite Potential"
            width={120}
            height={44}
            className="h-8 w-auto"
          />
          <p className="text-sm text-black/50">
            &copy; {new Date().getFullYear()} Ignite Potential Ltd. All rights
            reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
