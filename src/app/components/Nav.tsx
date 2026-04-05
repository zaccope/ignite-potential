"use client";

import { useState, useEffect } from "react";

const links = [
  { label: "Services", href: "#services" },
  { label: "Why us", href: "#why" },
  { label: "Case studies", href: "#case-studies" },
  { label: "Contact", href: "#contact" },
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
      <nav
        className={`fixed top-5 left-1/2 -translate-x-1/2 z-40 flex items-center gap-8 rounded-full px-6 py-3 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
          scrolled
            ? "bg-bone/80 shadow-[0_4px_24px_rgba(0,0,0,0.06)] backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <a
          href="#"
          className="font-serif text-lg text-charcoal whitespace-nowrap"
        >
          Ignite Potential
        </a>

        <div className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition-colors duration-200 hover:text-charcoal"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-2 rounded-full bg-charcoal px-5 py-2 text-sm text-bone transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-accent active:scale-[0.97]"
          >
            Get in touch
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden relative w-6 h-5 flex flex-col justify-between"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <span
            className={`block h-[1.5px] w-full bg-charcoal transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] origin-center ${
              open ? "translate-y-[9px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-[1.5px] w-full bg-charcoal transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] ${
              open ? "opacity-0 scale-x-0" : ""
            }`}
          />
          <span
            className={`block h-[1.5px] w-full bg-charcoal transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] origin-center ${
              open ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      <div
        className={`fixed inset-0 z-30 flex flex-col items-center justify-center bg-bone/95 backdrop-blur-2xl transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] md:hidden ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center gap-8">
          {links.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleClick}
              className="font-serif text-3xl text-charcoal transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]"
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
            className="mt-4 rounded-full bg-charcoal px-8 py-3 text-base text-bone transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]"
            style={{
              transitionDelay: open ? `${links.length * 60 + 100}ms` : "0ms",
              opacity: open ? 1 : 0,
              transform: open ? "translateY(0)" : "translateY(16px)",
            }}
          >
            Get in touch
          </a>
        </div>
      </div>
    </>
  );
}
