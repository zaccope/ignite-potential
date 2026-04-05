"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const links = [
  { label: "Services", href: "#services" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Our Team", href: "#team" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${scrolled ? "bg-teal/90 backdrop-blur-xl shadow-[0_1px_0_rgba(0,0,0,0.06)]" : ""}`}>
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#" className="shrink-0">
            <Image src="/images/logo.png" alt="Ignite Potential" width={150} height={55} className="h-9 w-auto" priority />
          </a>

          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-sm font-medium text-teal-darkest/70 transition-colors hover:text-teal-darkest">{l.label}</a>
            ))}
            <a href="#contact" className="rounded-full bg-purple px-6 py-2.5 text-sm font-semibold text-white transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-purple-hover active:scale-[0.97]">
              Get In Touch
            </a>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden w-7 h-5 flex flex-col justify-between" aria-label="Menu">
            <span className={`block h-[2px] w-full bg-teal-darkest rounded transition-all duration-300 origin-center ${open ? "translate-y-[9px] rotate-45" : ""}`} />
            <span className={`block h-[2px] w-full bg-teal-darkest rounded transition-all duration-300 ${open ? "opacity-0" : ""}`} />
            <span className={`block h-[2px] w-full bg-teal-darkest rounded transition-all duration-300 origin-center ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div className={`fixed inset-0 z-30 flex flex-col items-center justify-center bg-teal/98 backdrop-blur-2xl transition-all duration-400 md:hidden ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
        {links.map((l, i) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-3 text-2xl font-semibold text-teal-darkest" style={{ transitionDelay: open ? `${i * 50 + 80}ms` : "0ms", opacity: open ? 1 : 0, transform: open ? "translateY(0)" : "translateY(12px)", transition: "all 0.4s cubic-bezier(0.16,1,0.3,1)" }}>
            {l.label}
          </a>
        ))}
        <a href="#contact" onClick={() => setOpen(false)} className="mt-6 rounded-full bg-purple px-8 py-3 font-semibold text-white" style={{ transitionDelay: open ? "230ms" : "0ms", opacity: open ? 1 : 0, transform: open ? "translateY(0)" : "translateY(12px)", transition: "all 0.4s cubic-bezier(0.16,1,0.3,1)" }}>
          Get In Touch
        </a>
      </div>
    </>
  );
}
