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
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleClick = () => setOpen(false);

  return (
    <>
      {/* Floating glass nav */}
      <nav
        className={`fixed top-4 left-1/2 z-40 -translate-x-1/2 w-[calc(100%-2rem)] max-w-5xl transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${
          scrolled
            ? "rounded-full bg-white/70 shadow-[0_8px_32px_rgba(0,0,0,0.08)] backdrop-blur-2xl ring-1 ring-white/40"
            : "rounded-full bg-white/30 backdrop-blur-lg ring-1 ring-white/20"
        }`}
      >
        <div className="flex items-center justify-between px-5 py-3 md:px-7">
          <a href="#" className="shrink-0">
            <Image
              src="/images/logo.png"
              alt="Ignite Potential"
              width={140}
              height={52}
              className="h-8 w-auto md:h-9"
              priority
            />
          </a>

          <div className="hidden md:flex items-center gap-7">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[13px] font-medium text-teal-darkest/70 transition-colors duration-200 hover:text-teal-darkest"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="group inline-flex items-center gap-2.5 rounded-full bg-purple px-6 py-2.5 text-[13px] font-semibold text-white transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-purple-hover active:scale-[0.97]"
            >
              Get In Touch
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/15 transition-transform duration-300 group-hover:translate-x-0.5">
                <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 6h7M7 2.5L10.5 6 7 9.5" /></svg>
              </span>
            </a>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden relative w-6 h-5 flex flex-col justify-between"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <span className={`block h-[2px] w-full bg-teal-darkest transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] origin-center ${open ? "translate-y-[9px] rotate-45" : ""}`} />
            <span className={`block h-[2px] w-full bg-teal-darkest transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] ${open ? "opacity-0 scale-x-0" : ""}`} />
            <span className={`block h-[2px] w-full bg-teal-darkest transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] origin-center ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-30 flex flex-col items-center justify-center bg-teal-bg/95 backdrop-blur-3xl transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] md:hidden ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center gap-7">
          {links.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleClick}
              className="text-2xl font-semibold text-teal-darkest transition-all duration-500"
              style={{
                transitionDelay: open ? `${i * 60 + 100}ms` : "0ms",
                opacity: open ? 1 : 0,
                transform: open ? "translateY(0)" : "translateY(16px)",
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={handleClick}
            className="mt-4 rounded-full bg-purple px-8 py-3.5 text-base font-semibold text-white"
            style={{
              transitionDelay: open ? `${links.length * 60 + 100}ms` : "0ms",
              opacity: open ? 1 : 0,
              transform: open ? "translateY(0)" : "translateY(16px)",
            }}
          >
            Get In Touch
          </a>
        </div>
      </div>
    </>
  );
}
