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

/**
 * 良平アワード2026 受賞者ページ。
 * siteStatus.awardeesPublished が false の間は「受賞者は当日発表します」を表示。
 * 表彰後、data/awardees.ts に確定情報を記入して true に切り替える。
 */
export default function Awardees2026Page() {
  return (
    <div className="bg-ivory min-h-svh">
      <div className="bg-navy pt-32 pb-16 md:pt-40 md:pb-20 px-5 text-center">
        <p className="text-gold-soft text-xs tracking-[0.35em] uppercase">
          Ryohei Award 2026
        </p>
        <h1 className="mt-4 font-serif text-ivory text-3xl md:text-4xl tracking-wider">
          良平アワード2026 受賞者
        </h1>
      </div>

      <div className="mx-auto max-w-4xl px-5 md:px-8 py-16 md:py-24">
        {!siteStatus.awardeesPublished || awardees2026.length === 0 ? (
          /* 開催前の表示 */
          <div className="text-center py-12 md:py-20">
            <p className="font-serif text-navy text-2xl md:text-3xl leading-loose">
              受賞者は当日発表します。
            </p>
            <p className="mt-6 text-muted text-sm md:text-base">
              表彰式の後、このページで受賞者の行動や思いをご紹介します。
            </p>
            <Link
              href="/"
              className="mt-12 inline-block rounded-full border border-navy/30 text-navy px-8 py-3.5 text-sm tracking-wider hover:border-gold hover:text-gold transition-colors"
            >
              トップページへ戻る
            </Link>
          </div>
        ) : (
          /* 表彰後の受賞者一覧 */
          <ul className="space-y-14 md:space-y-20">
            {awardees2026.map((awardee) => (
              <li
                key={awardee.name}
                className="rounded-2xl bg-white border border-navy/10 overflow-hidden"
              >
                <article className="grid grid-cols-1 md:grid-cols-5">
                  <div className="md:col-span-2">
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
                  </div>
                  <div className="md:col-span-3 px-6 py-8 md:px-10 md:py-10">
                    <p className="text-xs tracking-[0.25em] text-gold uppercase">
                      {awardee.category}
                    </p>
                    <h2 className="mt-2 font-serif text-navy text-2xl tracking-wider">
                      {awardee.name}
                    </h2>
                    <p className="mt-1 text-sm text-muted">
                      {awardee.affiliation}
                    </p>

                    {awardee.reason && (
                      <div className="mt-6">
                        <h3 className="font-serif text-navy text-base">受賞理由</h3>
                        <p className="mt-2 text-sm md:text-base">{awardee.reason}</p>
                      </div>
                    )}
                    {awardee.nominatorComment && (
                      <div className="mt-6">
                        <h3 className="font-serif text-navy text-base">
                          推薦者からのコメント
                        </h3>
                        <p className="mt-2 text-sm md:text-base">
                          {awardee.nominatorComment}
                        </p>
                      </div>
                    )}
                    {awardee.awardeeComment && (
                      <div className="mt-6">
                        <h3 className="font-serif text-navy text-base">
                          ご本人のコメント
                        </h3>
                        <p className="mt-2 text-sm md:text-base">
                          {awardee.awardeeComment}
                        </p>
                      </div>
                    )}
                    {awardee.video && (
                      <div className="mt-8">
                        <h3 className="font-serif text-navy text-base">紹介動画</h3>
                        {/* 動画は自動再生しない */}
                        <div className="mt-3 aspect-video rounded-xl overflow-hidden bg-navy">
                          <iframe
                            src={awardee.video}
                            title={`${awardee.name}さんの紹介動画`}
                            className="w-full h-full"
                            allowFullScreen
                          />
                        </div>
                      </div>
                    )}
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
