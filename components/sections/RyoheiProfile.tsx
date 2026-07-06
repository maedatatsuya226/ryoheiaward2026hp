import Image from "next/image";
import { ryoheiProfile } from "@/data/ryohei";
import { PhotoPlaceholder } from "@/components/ui/PhotoPlaceholder";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

/**
 * 蒲池良平先生の紹介。
 * PCは写真+文章の2カラム、スマートフォンは縦並び。
 * 略歴・言葉・コメントは data/ryohei.ts に追加すると表示される。
 */
export function RyoheiProfile() {
  const p = ryoheiProfile;

  return (
    <section id="ryohei" className="bg-white scroll-mt-20">
      <div className="mx-auto max-w-6xl px-5 md:px-8 py-20 md:py-28">
        <Reveal>
          <SectionHeading label="Dr. Ryohei Kamachi" title="蒲池良平先生について" />
        </Reveal>

        <div className="mt-12 md:mt-20 grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-14 items-start">
          {/* 写真(差し替え前提のプレースホルダー) */}
          <Reveal className="md:col-span-2">
            {p.photo ? (
              <Image
                src={p.photo}
                alt={`${p.name}先生の写真`}
                width={640}
                height={800}
                className="w-full rounded-2xl object-cover aspect-[4/5] object-top"
              />
            ) : (
              <PhotoPlaceholder
                label="お写真は準備中です"
                className="w-full rounded-2xl aspect-[4/5]"
              />
            )}
          </Reveal>

          {/* 紹介文 */}
          <Reveal className="md:col-span-3" delay={120}>
            <p className="text-xs tracking-[0.3em] text-gold uppercase">
              {p.affiliation} {p.position}
            </p>
            <h3 className="mt-3 text-navy text-2xl md:text-3xl tracking-wider">
              {p.name}
              <span className="ml-3 text-sm text-muted font-sans tracking-normal">
                {p.nameReading}
              </span>
            </h3>
            <div className="mt-8 space-y-6">
              {p.introduction.map((paragraph) => (
                <p key={paragraph.slice(0, 16)} className="text-base md:text-lg">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* 略歴(確定後に data/ryohei.ts へ追加すると表示) */}
            {p.career.length > 0 && (
              <div className="mt-10">
                <h4 className="font-serif text-navy text-lg">略歴</h4>
                <ul className="mt-4 space-y-2 text-sm md:text-base">
                  {p.career.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* 印象に残っている言葉(確定後に追加すると表示) */}
            {p.words.length > 0 && (
              <div className="mt-10 space-y-4">
                {p.words.map((word) => (
                  <blockquote
                    key={word}
                    className="border-l-2 border-gold pl-5 font-serif text-navy text-lg leading-loose"
                  >
                    {word}
                  </blockquote>
                ))}
              </div>
            )}

            {/* 周囲の方からのコメント(確定後に追加すると表示) */}
            {p.comments.length > 0 && (
              <div className="mt-10 space-y-6">
                {p.comments.map((comment) => (
                  <figure key={comment.text.slice(0, 16)}>
                    <blockquote className="text-base leading-loose">
                      {comment.text}
                    </blockquote>
                    <figcaption className="mt-2 text-sm text-muted">
                      {comment.from}
                    </figcaption>
                  </figure>
                ))}
              </div>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
