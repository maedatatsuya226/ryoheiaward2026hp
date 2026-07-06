import Image from "next/image";
import Link from "next/link";
import { eventInfo, siteStatus } from "@/data/site";

/**
 * ファーストビュー。
 * 背景写真(医療現場に差し込む柔らかな光など)が用意できたら、
 * 下記の「背景プレースホルダー」部分を next/image の背景写真に差し替える。
 */
export function Hero() {
  return (
    <section
      aria-label="良平アワード2026"
      className="relative min-h-svh flex items-center justify-center overflow-hidden bg-navy"
    >
      {/* 背景プレースホルダー:柔らかな光のグラデーション(実写真差し替え前提) */}
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
        <div className="slow-zoom absolute inset-0 bg-gradient-to-b from-navy-deep via-navy to-navy-soft" />
        <div className="hero-rays absolute inset-0" />
        <div
          className="hero-light absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 50% 30%, rgba(223, 207, 170, 0.28), transparent 70%)",
          }}
        />
        <div
          className="absolute inset-x-0 bottom-0 h-1/3"
          style={{
            background:
              "linear-gradient(to top, rgba(10, 24, 48, 0.9), transparent)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-5 py-28 md:py-32 text-center">
        <div className="hero-enter mx-auto mb-8 w-56 md:w-72">
          <Image
            src="/logo/ryohei-award-2026.png"
            alt="RYOHEI AWARD 2026 ロゴ"
            width={480}
            height={320}
            priority
          />
        </div>

        <div className="hero-enter" style={{ animationDelay: "160ms" }}>
          <p className="inline-block rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-gold-soft text-xs md:text-sm tracking-[0.25em] uppercase">
            {eventInfo.venue}
          </p>
          <h1 className="mt-5 text-ivory text-3xl md:text-5xl tracking-widest">
            良平アワード2026
          </h1>
        </div>

        <p
          className="hero-enter mt-10 font-serif text-ivory text-xl md:text-3xl leading-loose tracking-wider"
          style={{ animationDelay: "380ms" }}
        >
          志を受け継ぎ、
          <br className="md:hidden" />
          日々の行いに光を。
        </p>
        <p
          className="hero-enter mt-6 text-ivory/85 text-sm md:text-lg tracking-wide max-w-xl mx-auto leading-relaxed"
          style={{ animationDelay: "560ms" }}
        >
          仲間とともに、誠実な行いを称える一日。
          <br className="hidden md:inline" />
          その日が、もうすぐここに訪れます。
        </p>

        <div
          className="hero-enter mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
          style={{ animationDelay: "720ms" }}
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
              className="inline-block rounded-lg border border-ivory/50 text-ivory px-8 py-3.5 text-sm md:text-base tracking-wider hover:border-gold-soft hover:text-gold-soft transition-colors"
            >
              受賞者を見る
            </Link>
          ) : (
            <span className="inline-flex items-center gap-2 rounded-lg border border-ivory/20 bg-ivory/5 px-6 py-3.5 text-ivory/80 text-sm">
              <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse-soft" />
              受賞者は当日発表
            </span>
          )}
        </div>
      </div>
    </section>
  );
}
