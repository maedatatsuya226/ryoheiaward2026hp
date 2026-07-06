import Image from "next/image";
import Link from "next/link";
import { eventInfo, siteStatus } from "@/data/site";

/** Hero 背景写真(差し替え: public/images/hero/hero-bg.jpg) */
const HERO_BG = "/images/hero/hero-bg.jpg";

export function Hero() {
  return (
    <section
      aria-label="良平アワード2026"
      className="relative min-h-svh flex items-center justify-center overflow-hidden bg-navy"
    >
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
        <div className="slow-zoom absolute inset-0">
          <Image
            src={HERO_BG}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_72%]"
          />
        </div>
        <div className="absolute inset-0 bg-navy-deep/55" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/85 via-navy/50 to-navy-deep/90" />
        <div
          className="hero-light absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 50% 30%, rgba(223, 207, 170, 0.18), transparent 70%)",
          }}
        />
        <div
          className="absolute inset-x-0 bottom-0 h-2/5"
          style={{
            background: "linear-gradient(to top, rgba(10, 24, 48, 0.95), transparent)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-5 py-28 md:py-32 text-center">
        <div className="hero-enter mx-auto mb-8 w-56 md:w-72 drop-shadow-[0_8px_24px_rgba(0,0,0,0.35)]">
          <Image
            src="/logo/ryohei-award-2026.png"
            alt="RYOHEI AWARD 2026 ロゴ"
            width={480}
            height={320}
            priority
          />
        </div>

        <div className="hero-enter" style={{ animationDelay: "160ms" }}>
          <p className="inline-block rounded-full border border-gold/40 bg-navy-deep/40 backdrop-blur-sm px-4 py-1.5 text-gold-soft text-xs md:text-sm tracking-[0.25em] uppercase">
            {eventInfo.venue}
          </p>
          <p className="mt-5 font-serif text-ivory text-2xl md:text-4xl tracking-widest drop-shadow-sm">
            志を受け継ぎ、日々の行いに光を。
          </p>
        </div>

        <p
          className="hero-enter mt-6 text-ivory/90 text-sm md:text-lg tracking-wide max-w-xl mx-auto leading-relaxed"
          style={{ animationDelay: "380ms" }}
        >
          {eventInfo.date && (
            <>
              {eventInfo.date} — {eventInfo.venue}
              <br className="hidden md:inline" />
            </>
          )}
          仲間とともに、誠実な行いを称える一日が近づいています。
        </p>

        <div
          className="hero-enter mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
          style={{ animationDelay: "560ms" }}
        >
          <Link
            href="/#overview"
            className="btn-primary inline-block rounded-lg bg-gold-soft text-navy px-8 py-3.5 text-sm md:text-base tracking-wider hover:bg-gold transition-colors"
          >
            開催概要を見る
          </Link>
          {siteStatus.awardeesPublished ? (
            <Link
              href="/awardees/2026"
              className="inline-block rounded-lg border border-ivory/50 bg-navy-deep/30 backdrop-blur-sm text-ivory px-8 py-3.5 text-sm md:text-base tracking-wider hover:border-gold-soft hover:text-gold-soft transition-colors"
            >
              受賞者を見る
            </Link>
          ) : (
            <span className="inline-flex items-center gap-2 rounded-lg border border-ivory/25 bg-navy-deep/30 backdrop-blur-sm px-6 py-3.5 text-ivory/85 text-sm">
              <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse-soft" />
              受賞者は当日発表
            </span>
          )}
        </div>
      </div>
    </section>
  );
}
