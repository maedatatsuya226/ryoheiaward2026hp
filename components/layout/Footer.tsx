import Link from "next/link";
import { siteStatus } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-navy-deep text-ivory">
      <div className="mx-auto max-w-6xl px-5 md:px-8 py-12 md:py-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <p className="font-serif text-xl tracking-wider">
              良平アワード<span className="text-gold-soft">2026</span>
            </p>
            <p className="mt-3 text-sm text-ivory/70">
              志を受け継ぎ、日々の行いに光を。
            </p>
          </div>
          <nav aria-label="フッターナビゲーション">
            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
              <li>
                <Link href="/#about" className="text-ivory/80 hover:text-gold-soft transition-colors">
                  良平アワードとは
                </Link>
              </li>
              <li>
                <Link href="/#greeting" className="text-ivory/80 hover:text-gold-soft transition-colors">
                  代表挨拶
                </Link>
              </li>
              <li>
                <Link href="/#overview" className="text-ivory/80 hover:text-gold-soft transition-colors">
                  開催概要
                </Link>
              </li>
              <li>
                {siteStatus.awardeesPublished ? (
                  <Link href="/awardees" className="text-ivory/80 hover:text-gold-soft transition-colors">
                    受賞者紹介
                  </Link>
                ) : (
                  <span className="text-ivory/50">受賞者は近日発表します</span>
                )}
              </li>
            </ul>
          </nav>
        </div>
        <div className="mt-10 pt-6 border-t border-ivory/15">
          <p className="text-xs text-ivory/50">
            &copy; 良平アワード2026
          </p>
        </div>
      </div>
    </footer>
  );
}
