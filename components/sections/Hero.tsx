import Image from "next/image";
import Link from "next/link";
import { siteStatus } from "@/data/site";

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
      {/* 背景プレースホルダー:柔らかな光のグラデーション(写真差し替え前提) */}
      <div aria-hidden="true" className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep via-navy to-navy-soft" />
        <div
          className="hero-light absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 50% 30%, rgba(223, 207, 170, 0.22), transparent 70%)",
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
        {/* ロゴ(背景透過PNG。枠や影は付けず、ヒーロー背景にそのまま重ねる) */}
        <div className="mx-auto mb-8 w-56 md:w-72">
          <Image
            src="/logo/ryohei-award-2026.png"
            alt="RYOHEI AWARD 2026 ロゴ"
            width={480}
            height={320}
            priority
          />
        </div>

        <p className="text-gold-soft text-sm md:text-base tracking-[0.4em] uppercase">
          Ryohei Award
        </p>
        <h1 className="mt-4 text-ivory text-3xl md:text-5xl tracking-widest">
          良平アワード2026
        </h1>

        <p className="mt-10 font-serif text-ivory text-xl md:text-3xl leading-loose tracking-wider">
          志を受け継ぎ、
          <br className="md:hidden" />
          日々の行いに光を。
        </p>
        <p className="mt-6 text-ivory/80 text-sm md:text-base tracking-wider">
          今日ここにいる全員が、その志の継承者です。
        </p>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/#overview"
            className="inline-block rounded-full bg-gold-soft text-navy px-8 py-3.5 text-sm md:text-base tracking-wider hover:bg-gold transition-colors"
          >
            開催概要を見る
          </Link>
          {siteStatus.awardeesPublished ? (
            <Link
              href="/awardees/2026"
              className="inline-block rounded-full border border-ivory/50 text-ivory px-8 py-3.5 text-sm md:text-base tracking-wider hover:border-gold-soft hover:text-gold-soft transition-colors"
            >
              受賞者を見る
            </Link>
          ) : (
            <p className="text-ivory/60 text-sm px-4 py-3.5">
              受賞者は当日発表します
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
