import type { Metadata } from "next";
import Link from "next/link";
import { awardYears } from "@/data/awardees";
import { awardeesNotice, siteStatus } from "@/data/site";

export const metadata: Metadata = {
  title: "受賞者一覧|良平アワード",
  description:
    "良平アワードの年度別受賞者一覧です。医療現場で日々積み重ねられる誠実な行いに光を当てた受賞者をご紹介します。",
};

/**
 * 年度別の受賞者一覧ページ(案4a・モック5a)。
 * 金枠の年度カード+将来年度用の破線プレースホルダー。
 * 年度が増えたら data/awardees.ts の awardYears に追加する。
 */
export default function AwardeesPage() {
  return (
    <div className="bg-navy-deep min-h-svh">
      <div className="pt-32 pb-14 md:pt-40 md:pb-16 px-5 text-center">
        <p className="text-gold-soft text-xs tracking-[0.35em] uppercase">
          Awardees
        </p>
        <h1 className="mt-4 font-serif text-ivory text-3xl md:text-4xl tracking-wider">
          受賞者一覧
        </h1>
        <div aria-hidden="true" className="mx-auto mt-8 h-px w-14 bg-gold/60" />
      </div>

      <div className="mx-auto max-w-2xl px-5 md:px-8 pb-20 md:pb-28">
        <ul className="space-y-6">
          {awardYears.map((entry) => (
            <li key={entry.year}>
              <Link
                href={entry.href}
                className="group relative block overflow-hidden rounded-2xl border border-gold/40 bg-navy px-6 py-8 md:px-10 md:py-10 hover:border-gold transition-colors"
              >
                <span aria-hidden="true" className="gold-inner-frame" />
                <span className="flex items-center justify-between gap-6">
                  <span>
                    <span className="goldtext font-number block text-5xl md:text-6xl leading-none">
                      {entry.year}
                    </span>
                    <span className="mt-3 block font-serif text-ivory text-xl md:text-2xl tracking-wider">
                      {entry.title}
                    </span>
                    {!siteStatus.awardeesPublished && entry.year === "2026" && (
                      <span className="mt-2 block text-sm text-ivory/60">
                        {awardeesNotice.yearCard}
                      </span>
                    )}
                  </span>
                  <span
                    aria-hidden="true"
                    className="text-gold group-hover:translate-x-1 transition-transform"
                  >
                    →
                  </span>
                </span>
              </Link>
            </li>
          ))}

          {/* 将来年度のプレースホルダー */}
          <li aria-hidden="true">
            <div className="rounded-2xl border border-dashed border-gold/25 px-6 py-8 md:px-10 md:py-10 text-center">
              <p className="font-number text-ivory/30 text-3xl md:text-4xl leading-none">
                20XX
              </p>
              <p className="mt-3 text-sm text-ivory/40">
                これからの歩みが、ここに増えていきます。
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
