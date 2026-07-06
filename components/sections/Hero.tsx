import Image from "next/image";
import Link from "next/link";
import { eventInfo, siteStatus } from "@/data/site";
import { historyItems } from "@/data/history";

/** 下から立ち上る光の粒(left位置とdelayをずらして配置) */
const SPARKS = [
  { left: "12%", size: 4, delay: "0s" },
  { left: "30%", size: 3, delay: "3.2s" },
  { left: "50%", size: 4, delay: "1.6s" },
  { left: "68%", size: 3, delay: "5.2s" },
  { left: "86%", size: 4, delay: "2.4s" },
];

/**
 * eventInfo.date(例:"2026年11月26日(木)")から表示用パーツを導出する。
 * データに存在しない値は作らない(dateがnullなら何も表示しない)。
 */
function parseDateParts(date: string | null) {
  if (!date) return null;
  const m = date.match(/(\d{1,2})月(\d{1,2})日(?:[^月火水木金土日]*([月火水木金土日]))?/);
  if (!m) return null;
  const weekdayEn: Record<string, string> = {
    月: "MONDAY",
    火: "TUESDAY",
    水: "WEDNESDAY",
    木: "THURSDAY",
    金: "FRIDAY",
    土: "SATURDAY",
    日: "SUNDAY",
  };
  return {
    month: m[1],
    day: m[2],
    weekday: m[3] ? weekdayEn[m[3]] : null,
  };
}

/**
 * ファーストビュー(案4aモック準拠)。
 * 金の枠線の中に、左:開催情報/右:縦書きメインコピー(「光」はgoldtext)。
 * その下に授賞式写真カード、CTA、巨大アウトライン年号。
 */
export function Hero() {
  const dateParts = parseDateParts(eventInfo.date);
  const featured = historyItems.find((item) => item.image);

  return (
    <section
      aria-label="良平アワード2026"
      className="relative overflow-hidden bg-navy-deep"
    >
      {/* 細い金の枠線 */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-2 md:inset-3 z-10 border border-gold/25"
      />

      {/* 背景:柔らかな光と光の粒 */}
      <div aria-hidden="true" className="absolute inset-0">
        <div
          className="hero-light absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 55% at 65% 20%, rgba(223, 207, 170, 0.1), transparent 70%)",
          }}
        />
        {SPARKS.map((s, i) => (
          <span
            key={i}
            className="spark"
            style={{
              left: s.left,
              width: s.size,
              height: s.size,
              animationDelay: s.delay,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-7 md:px-12 pt-28 md:pt-36 pb-10 md:pb-14">
        {/* セクションラベル */}
        <p className="hero-enter flex items-center gap-3 text-gold-soft text-xs md:text-sm tracking-[0.3em]">
          <span aria-hidden="true" className="h-px w-8 bg-gold/60" />
          RYOHEI AWARD 2026
        </p>

        {/* 左:開催情報 / 右:縦書きメインコピー */}
        <div className="mt-10 md:mt-16 flex items-start justify-between gap-6 md:gap-12">
          <div
            className="hero-enter max-w-[52%] md:max-w-sm"
            style={{ animationDelay: "160ms" }}
          >
            <p className="text-ivory/85 text-sm md:text-base leading-relaxed">
              仲間とともに、
              <br />
              誠実な行いを称える一日が近づいています。
            </p>
            {dateParts && (
              <p className="mt-8 md:mt-10">
                <span className="font-number text-gold text-4xl md:text-6xl tracking-[0.12em]">
                  {dateParts.month} . {dateParts.day}
                </span>
                {dateParts.weekday && (
                  <span className="mt-2 block font-number text-gold/70 text-sm md:text-base tracking-[0.35em]">
                    {dateParts.weekday}
                  </span>
                )}
              </p>
            )}
            <p className="mt-4 text-ivory/70 text-xs md:text-sm tracking-[0.15em]">
              {eventInfo.venue}
            </p>
            <Link
              href="/#overview"
              className="mt-7 inline-flex items-center gap-2 border-b border-gold/60 pb-1 text-sm text-ivory tracking-wider hover:text-gold-soft transition-colors"
            >
              開催概要を見る
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          <h1
            className="hero-enter vertical-heading shrink-0 font-serif text-ivory text-[34px] md:text-6xl leading-[1.75]"
            style={{ animationDelay: "380ms" }}
          >
            志を受け継ぎ、
            <br />
            日々の行いに<span className="goldtext">光</span>を。
          </h1>
        </div>

        {/* 授賞式写真カード(写真は data/history.ts から) */}
        {featured?.image && (
          <figure
            className="hero-enter mt-12 md:mt-16 max-w-xl"
            style={{ animationDelay: "560ms" }}
          >
            <div className="border border-gold/40 p-1.5">
              <div className="relative overflow-hidden">
                <Image
                  src={featured.image}
                  alt={`${featured.year}年 ${featured.title} ${featured.caption}`}
                  width={960}
                  height={640}
                  priority
                  className="w-full object-cover aspect-[4/3] md:aspect-[3/2]"
                />
                <span
                  aria-hidden="true"
                  className="vertical-heading absolute top-3 right-2.5 text-ivory/90 text-[11px] tracking-[0.35em] drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]"
                >
                  良平アワード
                </span>
              </div>
            </div>
            <figcaption className="mt-3 text-ivory/60 text-xs md:text-sm tracking-[0.12em]">
              {featured.year} — {featured.title}より
            </figcaption>
          </figure>
        )}

        {/* CTA */}
        <div
          className="hero-enter mt-10 flex flex-col sm:flex-row gap-3 max-w-xl"
          style={{ animationDelay: "720ms" }}
        >
          <Link
            href="/#overview"
            className="btn-primary flex-1 text-center rounded-full bg-gradient-to-r from-gold to-gold-soft text-navy px-8 py-3.5 text-sm md:text-base tracking-wider hover:opacity-90 transition-opacity"
          >
            開催概要を見る
          </Link>
          {siteStatus.awardeesPublished ? (
            <Link
              href="/awardees/2026"
              className="flex-1 text-center rounded-full border border-ivory/40 text-ivory px-8 py-3.5 text-sm md:text-base tracking-wider hover:border-gold-soft hover:text-gold-soft transition-colors"
            >
              受賞者を見る
            </Link>
          ) : (
            <Link
              href="/awardees/2026"
              className="flex-1 inline-flex items-center justify-center gap-2 rounded-full border border-ivory/30 px-8 py-3.5 text-ivory/85 text-sm tracking-wider hover:border-gold-soft hover:text-gold-soft transition-colors"
            >
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse-soft"
              />
              受賞者は近日発表
            </Link>
          )}
        </div>

        {/* 巨大アウトライン年号(装飾) */}
        <p
          aria-hidden="true"
          className="outline-number pointer-events-none select-none mt-8 -mb-8 md:-mb-14 -ml-2 text-[24vw] md:text-[13rem] leading-[0.85]"
        >
          2026
        </p>
      </div>
    </section>
  );
}
