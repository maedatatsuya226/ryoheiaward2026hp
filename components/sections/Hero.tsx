import Image from "next/image";
import Link from "next/link";
import { awardeesNotice, eventInfo, siteStatus } from "@/data/site";
import { historyItems } from "@/data/history";
import { parseEventDateParts } from "@/lib/eventDate";

/** 下から立ち上る光の粒(left位置とdelayをずらして配置) */
const SPARKS = [
  { left: "12%", size: 4, delay: "0s" },
  { left: "30%", size: 3, delay: "3.2s" },
  { left: "50%", size: 4, delay: "1.6s" },
  { left: "68%", size: 3, delay: "5.2s" },
  { left: "86%", size: 4, delay: "2.4s" },
];

/** 授賞式写真カード(写真は data/history.ts から) */
function FeaturedPhoto({ className = "" }: { className?: string }) {
  const featured = historyItems.find((item) => item.image);
  if (!featured?.image) return null;
  return (
    <figure className={className}>
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
  );
}

/** CTAボタン(開催概要+受賞者導線) */
function CtaButtons({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
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
          {awardeesNotice.short}
        </Link>
      )}
    </div>
  );
}

/**
 * ファーストビュー(案4aモック準拠)。
 * モバイル: 左=開催情報/右=縦書きコピー → 写真カード → CTA → 巨大年号。
 * PC: 左列に情報・写真・CTAをまとめ、右に縦書きコピーを置いて高さを圧縮する。
 */
export function Hero() {
  const dateParts = parseEventDateParts(eventInfo.date);

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

      <div className="relative z-10 mx-auto max-w-6xl px-7 md:px-12 pt-28 md:pt-32 pb-10 md:pb-12">
        {/* セクションラベル */}
        <p className="hero-enter flex items-center gap-3 text-gold-soft text-xs md:text-sm tracking-[0.3em]">
          <span aria-hidden="true" className="h-px w-8 bg-gold/60" />
          RYOHEI AWARD 2026
        </p>

        {/* 左:情報(PCは写真・CTAも左列) / 右:縦書きメインコピー */}
        <div className="mt-10 md:mt-12 flex items-start justify-between gap-6 md:grid md:grid-cols-[minmax(0,1fr)_auto] md:gap-x-16 lg:gap-x-24">
          <div>
            <div
              className="hero-enter max-w-[52vw] md:max-w-none"
              style={{ animationDelay: "160ms" }}
            >
              <p className="text-ivory/85 text-sm md:text-base leading-relaxed">
                仲間とともに、
                <br className="md:hidden" />
                誠実な行いを称える一日が近づいています。
              </p>
              {dateParts && (
                <p className="mt-8 md:mt-9">
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

            {/* PC: 写真カードとCTAを左列に配置して間延びを防ぐ */}
            <FeaturedPhoto className="hero-enter hidden md:block mt-10 max-w-lg" />
            <CtaButtons className="hero-enter hidden md:flex mt-9 gap-3 max-w-lg" />
          </div>

          {/* メインコピー(縦書き・全ブレークポイント共通の単一マークアップ) */}
          <h1
            className="hero-enter vertical-heading shrink-0 font-serif text-ivory text-[34px] leading-[1.75] md:self-center md:text-5xl lg:text-[54px] md:leading-[1.7]"
            style={{ animationDelay: "380ms" }}
          >
            志を受け継ぎ、
            <br />
            日々の行いに<span className="goldtext">光</span>を。
          </h1>
        </div>

        {/* モバイル: 写真カード → CTA */}
        <FeaturedPhoto
          className="hero-enter md:hidden mt-12"
        />
        <CtaButtons className="hero-enter md:hidden mt-10 flex flex-col gap-3" />

        {/* 巨大アウトライン年号(装飾) */}
        <p
          aria-hidden="true"
          className="outline-number pointer-events-none select-none mt-8 md:mt-2 -mb-8 md:-mb-10 -ml-2 text-[24vw] md:text-[10rem] leading-[0.85]"
        >
          2026
        </p>
      </div>
    </section>
  );
}
