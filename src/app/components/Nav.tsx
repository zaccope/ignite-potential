"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const links = [
  { label: "Services", href: "#services" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Team", href: "#team" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    fn();
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <nav
        className={`fixed top-5 left-1/2 z-50 -translate-x-1/2 rounded-full transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${
          scrolled
            ? "w-[min(92vw,56rem)] bg-white/75 shadow-[0_4px_30px_rgba(0,0,0,0.08)] ring-1 ring-white/60 backdrop-blur-2xl"
            : "w-[min(92vw,56rem)] bg-white/30 ring-1 ring-white/20 backdrop-blur-md"
        }`}
      >
        <div className="flex items-center justify-between px-5 py-2.5 md:px-6">
          <a href="#" className="shrink-0">
            <Image src="/images/logo.png" alt="Ignite Potential" width={130} height={48} className="h-7 w-auto md:h-8" priority />
          </a>
          <div className="hidden items-center gap-6 md:flex">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-[13px] font-medium text-teal-darkest/60 transition-colors duration-200 hover:text-teal-darkest">{l.label}</a>
            ))}
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-purple pl-5 pr-2 py-1.5 text-[13px] font-semibold text-white transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-purple-hover active:scale-[0.97]"
            >
              Get In Touch
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15 transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5">
                <svg width="11" height="11" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 6h8M7 2.5 10.5 6 7 9.5"/></svg>
              </span>
            </a>
          </div>
          <button onClick={() => setOpen(!open)} className="md:hidden w-6 h-[18px] flex flex-col justify-between" aria-label="Menu">
            <span className={`block h-[2px] w-full rounded bg-teal-darkest transition-all duration-300 origin-center ${open ? "translate-y-2 rotate-45" : ""}`}/>
            <span className={`block h-[2px] w-full rounded bg-teal-darkest transition-all duration-300 ${open ? "opacity-0" : ""}`}/>
            <span className={`block h-[2px] w-full rounded bg-teal-darkest transition-all duration-300 origin-center ${open ? "-translate-y-2 -rotate-45" : ""}`}/>
          </button>
        </div>
      </nav>

      <div className={`fixed inset-0 z-40 flex flex-col items-center justify-center bg-white/90 backdrop-blur-3xl transition-all duration-500 md:hidden ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
        {links.map((l, i) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}
            className="py-4 text-3xl font-bold text-teal-darkest"
            style={{ transition: "all 0.5s cubic-bezier(0.16,1,0.3,1)", transitionDelay: open ? `${i*60+80}ms` : "0ms", opacity: open?1:0, transform: open?"translateY(0)":"translateY(16px)" }}>
            {l.label}
          </a>
        ))}
        <a href="#contact" onClick={() => setOpen(false)}
          className="mt-6 rounded-full bg-purple px-8 py-3 font-semibold text-white"
          style={{ transition: "all 0.5s cubic-bezier(0.16,1,0.3,1)", transitionDelay: open?"260ms":"0ms", opacity: open?1:0, transform: open?"translateY(0)":"translateY(16px)" }}>
          Get In Touch
        </a>
      </div>
    </>
  );
}
