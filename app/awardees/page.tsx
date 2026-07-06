import type { Metadata } from "next";
import Link from "next/link";
import { awardYears } from "@/data/awardees";
import { siteStatus } from "@/data/site";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "受賞者一覧|良平アワード",
  description:
    "良平アワードの年度別受賞者一覧です。医療現場で日々積み重ねられる誠実な行いに光を当てた受賞者をご紹介します。",
};

/**
 * 年度別の受賞者一覧ページ。
 * 年度が増えたら data/awardees.ts の awardYears に追加する。
 */
export default function AwardeesPage() {
  return (
    <div className="bg-ivory">
      {/* ページヘッダー(共通ヘッダーが重なるため上部はネイビー) */}
      <div className="bg-navy pt-32 pb-16 md:pt-40 md:pb-20 px-5 text-center">
        <p className="text-gold-soft text-xs tracking-[0.35em] uppercase">
          Awardees
        </p>
        <h1 className="mt-4 font-serif text-ivory text-3xl md:text-4xl tracking-wider">
          受賞者一覧
        </h1>
      </div>

      <div className="mx-auto max-w-3xl px-5 md:px-8 py-16 md:py-24">
        <SectionHeading title="年度から選ぶ" />
        <ul className="mt-12 space-y-5">
          {awardYears.map((entry) => (
            <li key={entry.year}>
              <Link
                href={entry.href}
                className="group flex items-center justify-between rounded-2xl bg-white border border-navy/10 px-6 py-6 md:px-10 md:py-8 hover:border-gold transition-colors"
              >
                <span>
                  <span className="block font-serif text-gold text-sm tracking-[0.25em]">
                    {entry.year}
                  </span>
                  <span className="mt-1 block font-serif text-navy text-xl md:text-2xl tracking-wider">
                    {entry.title}
                  </span>
                  {!siteStatus.awardeesPublished && entry.year === "2026" && (
                    <span className="mt-2 block text-sm text-muted">
                      受賞者は当日発表します
                    </span>
                  )}
                </span>
                <span
                  aria-hidden="true"
                  className="text-gold group-hover:translate-x-1 transition-transform"
                >
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
