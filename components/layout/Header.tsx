"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { siteStatus } from "@/data/site";

const navItems = [
  { href: "/#about", label: "良平アワードとは" },
  { href: "/#ryohei", label: "蒲池良平先生" },
  { href: "/#history", label: "これまでの歩み" },
  { href: "/#overview", label: "開催概要" },
  { href: "/#access", label: "会場・アクセス" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const onHome = pathname === "/";

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const useDarkHeader = !onHome || scrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        useDarkHeader
          ? "bg-navy-deep/95 backdrop-blur-md shadow-[0_1px_0_rgba(199,168,107,0.15)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="flex items-center justify-between py-4 md:py-5">
          <Link
            href="/"
            className={`font-serif text-lg md:text-xl tracking-wider transition-colors ${
              useDarkHeader ? "text-ivory" : "text-ivory"
            }`}
          >
            良平アワード<span className="text-gold-soft">2026</span>
          </Link>

          <nav aria-label="メインナビゲーション" className="hidden md:block">
            <ul className="flex items-center gap-7">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-ivory/90 hover:text-gold-soft transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              {siteStatus.awardeesPublished && (
                <li>
                  <Link
                    href="/awardees/2026"
                    className="text-sm text-navy bg-gold-soft hover:bg-gold transition-colors rounded-lg px-4 py-2"
                  >
                    受賞者紹介
                  </Link>
                </li>
              )}
            </ul>
          </nav>

          <button
            type="button"
            className="md:hidden inline-flex flex-col items-center justify-center gap-1.5 w-11 h-11 rounded-md"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">メニューを{open ? "閉じる" : "開く"}</span>
            <span
              aria-hidden="true"
              className={`block h-px w-6 bg-ivory transition-transform ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
            />
            <span
              aria-hidden="true"
              className={`block h-px w-6 bg-ivory transition-transform ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
            />
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="メインナビゲーション"
          className="md:hidden mx-5 mb-4 rounded-xl bg-navy-deep/95 backdrop-blur px-6 py-5 shadow-lg border border-gold/10"
        >
          <ul className="flex flex-col gap-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block py-2.5 text-ivory/90 hover:text-gold-soft transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            {siteStatus.awardeesPublished && (
              <li className="pt-2">
                <Link
                  href="/awardees/2026"
                  className="inline-block text-navy bg-gold-soft rounded-lg px-5 py-2.5"
                  onClick={() => setOpen(false)}
                >
                  受賞者紹介
                </Link>
              </li>
            )}
          </ul>
        </nav>
      )}
    </header>
  );
}
