import Link from "next/link";
import { eventInfo } from "@/data/site";

/**
 * ヒーロー直下の「当日への期待」帯。
 * 開催日未確定の間も、イベントとしての高揚感を伝える。
 */
export function EventAnticipation() {
  return (
    <section
      aria-label="良平アワード2026 開催予告"
      className="relative overflow-hidden bg-navy-deep border-y border-gold/20"
    >
      <div
        aria-hidden="true"
        className="anticipation-shimmer absolute inset-0 opacity-60"
      />
      <div className="relative mx-auto max-w-6xl px-5 md:px-8 py-8 md:py-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-10">
          <div className="flex items-start md:items-center gap-4 md:gap-6">
            <p
              aria-hidden="true"
              className="shrink-0 font-serif text-gold text-4xl md:text-5xl leading-none tracking-tight"
            >
              2026
            </p>
            <div>
              <p className="font-serif text-ivory text-lg md:text-xl leading-relaxed">
                {eventInfo.venue}で、
                <br className="sm:hidden" />
                新たな表彰の日を迎えます。
              </p>
              <p className="mt-2 text-ivory/70 text-sm md:text-base">
                {eventInfo.date
                  ? `開催日：${eventInfo.date}`
                  : "開催日は近日公開 — 確定次第、ここでお知らせします。"}
              </p>
            </div>
          </div>
          <Link
            href="/#overview"
            className="shrink-0 self-start md:self-center inline-flex items-center gap-2 rounded-lg border border-gold/40 bg-gold/10 px-6 py-3 text-sm text-gold-soft tracking-wider hover:bg-gold/20 hover:border-gold/60 transition-colors"
          >
            開催概要を見る
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
