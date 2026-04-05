"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const links = [
  { label: "Our Services", href: "#services" },
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
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
          scrolled
            ? "bg-teal-bg/90 backdrop-blur-xl shadow-[0_2px_20px_rgba(0,0,0,0.06)]"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
          <a href="#">
            <Image
              src="/images/logo.png"
              alt="Ignite Potential"
              width={140}
              height={52}
              className="h-10 w-auto"
              priority
            />
          </a>

          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-black/80 transition-colors duration-200 hover:text-black"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="rounded-full bg-purple px-7 py-3 text-sm font-semibold text-white transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-purple-hover active:scale-[0.97]"
            >
              Get In Touch
            </a>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden relative w-6 h-5 flex flex-col justify-between"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <span
              className={`block h-[2px] w-full bg-black transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] origin-center ${
                open ? "translate-y-[9px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-[2px] w-full bg-black transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                open ? "opacity-0 scale-x-0" : ""
              }`}
            />
            <span
              className={`block h-[2px] w-full bg-black transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] origin-center ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-30 flex flex-col items-center justify-center bg-teal-bg/95 backdrop-blur-2xl transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] md:hidden ${
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
              className="text-2xl font-semibold text-black transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]"
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
            className="mt-4 rounded-full bg-purple px-8 py-3.5 text-base font-semibold text-white transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]"
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
