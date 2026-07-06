import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { awardees2026 } from "@/data/awardees";
import { siteStatus } from "@/data/site";
import { PhotoPlaceholder } from "@/components/ui/PhotoPlaceholder";

export const metadata: Metadata = {
  title: "良平アワード2026 受賞者|良平アワード",
  description:
    "良平アワード2026の受賞者をご紹介します。医療現場で日々積み重ねられる誠実な行いに光を当てます。",
};

const PENDING_TEXT = "発表後に掲載します";

/**
 * 良平アワード2026 受賞者ページ(案4a・モック5b/5c)。
 * 発表前(awardeesPublished: false): 縦書き「まもなく、ここから光ります。」+光の粒。
 * 発表後: 受賞者カード(輪郭数字+写真枠+部門+氏名+所属+各コメント)。
 * 動画は掲載しない(方針確定)。架空の受賞者を作らないこと。
 */
export default function Awardees2026Page() {
  const published = siteStatus.awardeesPublished && awardees2026.length > 0;

  return (
    <div className="bg-navy-deep min-h-svh">
      <div className="pt-32 pb-14 md:pt-40 md:pb-16 px-5 text-center">
        <p className="text-gold-soft text-xs tracking-[0.35em] uppercase">
          Ryohei Award 2026
        </p>
        <h1 className="mt-4 font-serif text-ivory text-3xl md:text-4xl tracking-wider">
          良平アワード2026 <span className="whitespace-nowrap">受賞者</span>
        </h1>
        <div aria-hidden="true" className="mx-auto mt-8 h-px w-14 bg-gold/60" />
      </div>

      <div className="mx-auto max-w-4xl px-5 md:px-8 pb-20 md:pb-28">
        {!published ? (
          /* 発表前(モック5b): 縦書き2列+光の粒 */
          <div className="relative overflow-hidden rounded-2xl border border-gold/20 bg-navy px-6 py-16 md:py-24 text-center">
            <div aria-hidden="true" className="absolute inset-0">
              <div
                className="hero-light absolute inset-0"
                style={{
                  background:
                    "radial-gradient(ellipse 70% 60% at 50% 60%, rgba(223, 207, 170, 0.12), transparent 70%)",
                }}
              />
              <span className="spark" style={{ left: "20%", width: 4, height: 4, animationDelay: "0.6s" }} />
              <span className="spark" style={{ left: "46%", width: 3, height: 3, animationDelay: "3.4s" }} />
              <span className="spark" style={{ left: "72%", width: 4, height: 4, animationDelay: "5.8s" }} />
            </div>

            {/* 縦書き2列(右列→左列の順で読む)。「光」のみgoldtext */}
            <p className="vertical-heading relative mx-auto font-serif text-ivory text-2xl md:text-3xl leading-[2]">
              まもなく、
              <br />
              ここから<span className="goldtext">光</span>ります。
            </p>
            <p className="relative mt-10 text-ivory/70 text-sm md:text-base leading-relaxed">
              受賞者は開催に先立ちご紹介します。
              <br className="hidden sm:inline" />
              発表の日を、どうぞお楽しみに。
            </p>
            <Link
              href="/"
              className="relative mt-12 inline-block rounded-lg border border-ivory/30 text-ivory/85 px-8 py-3.5 text-sm tracking-wider hover:border-gold-soft hover:text-gold-soft transition-colors"
            >
              トップページへ戻る
            </Link>
          </div>
        ) : (
          /* 発表後(モック5c): 受賞者カード */
          <ul className="space-y-14 md:space-y-20">
            {awardees2026.map((awardee, index) => (
              <li
                key={awardee.name}
                className="relative rounded-2xl bg-navy border border-gold/25 overflow-hidden"
              >
                <article className="grid grid-cols-1 md:grid-cols-5">
                  <div className="md:col-span-2 relative">
                    {awardee.photo ? (
                      <Image
                        src={awardee.photo}
                        alt={`${awardee.name}さんの写真`}
                        width={640}
                        height={800}
                        className="w-full h-full object-cover aspect-[4/5]"
                      />
                    ) : (
                      <PhotoPlaceholder className="w-full h-full aspect-[4/5]" />
                    )}
                    <span aria-hidden="true" className="gold-inner-frame" />
                  </div>
                  <div className="md:col-span-3 px-6 py-8 md:px-10 md:py-10">
                    <p
                      aria-hidden="true"
                      className="outline-number text-4xl md:text-5xl leading-none"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <p className="mt-4 text-xs tracking-[0.25em] text-gold-soft uppercase">
                      {awardee.category}
                    </p>
                    <h2 className="mt-2 font-serif text-ivory text-2xl tracking-wider">
                      {awardee.name}
                    </h2>
                    <p className="mt-1 text-sm text-ivory/60">
                      {awardee.affiliation}
                    </p>

                    <div className="mt-6">
                      <h3 className="font-serif text-gold-soft text-base">受賞理由</h3>
                      <p className="mt-2 text-sm md:text-base text-ivory/85">
                        {awardee.reason ?? PENDING_TEXT}
                      </p>
                    </div>
                    <div className="mt-6">
                      <h3 className="font-serif text-gold-soft text-base">
                        推薦者からのコメント
                      </h3>
                      <p className="mt-2 text-sm md:text-base text-ivory/85">
                        {awardee.nominatorComment ?? PENDING_TEXT}
                      </p>
                    </div>
                    <div className="mt-6">
                      <h3 className="font-serif text-gold-soft text-base">
                        ご本人のコメント
                      </h3>
                      <p className="mt-2 text-sm md:text-base text-ivory/85">
                        {awardee.awardeeComment ?? PENDING_TEXT}
                      </p>
                    </div>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
