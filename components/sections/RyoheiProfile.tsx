import Image from "next/image";
import { ryoheiProfile } from "@/data/ryohei";
import { PhotoPlaceholder } from "@/components/ui/PhotoPlaceholder";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function RyoheiProfile() {
  const p = ryoheiProfile;

  return (
    <section id="ryohei" className="relative bg-ivory scroll-mt-20 overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-navy/5 to-transparent"
      />
      <div className="relative mx-auto max-w-6xl px-5 md:px-8 py-20 md:py-28">
        <Reveal>
          <SectionHeading
            label="Dr. Ryohei Kamachi"
            title="蒲池良平先生について"
            variant="editorial"
            align="left"
          />
        </Reveal>

        <div className="mt-12 md:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <Reveal className="lg:col-span-5">
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-gold/20 to-navy/10"
              />
              {p.photo ? (
                <Image
                  src={p.photo}
                  alt={`${p.name}先生の写真`}
                  width={640}
                  height={800}
                  className="relative w-full rounded-2xl object-cover aspect-[4/5] object-top shadow-lg"
                />
              ) : (
                <PhotoPlaceholder
                  label="お写真は準備中です"
                  className="relative w-full rounded-2xl aspect-[4/5] shadow-lg"
                />
              )}
            </div>
          </Reveal>

          <Reveal className="lg:col-span-7" delay={120}>
            <div className="rounded-2xl bg-white px-6 py-8 md:px-9 md:py-10 shadow-sm border border-navy/5">
              <p className="text-xs tracking-[0.25em] text-gold uppercase">
                {p.affiliation} · {p.position}
              </p>
              <h3 className="mt-3 font-serif text-navy text-2xl md:text-3xl tracking-wider">
                {p.name}
                <span className="ml-3 text-sm text-muted font-sans tracking-normal">
                  {p.nameReading}
                </span>
              </h3>
              <div className="mt-8 space-y-6">
                {p.introduction.map((paragraph) => (
                  <p key={paragraph.slice(0, 16)} className="text-base md:text-lg leading-loose">
                    {paragraph}
                  </p>
                ))}
              </div>

              {p.career.length > 0 && (
                <div className="mt-10 pt-8 border-t border-navy/10">
                  <h4 className="font-serif text-navy text-lg">略歴</h4>
                  <ul className="mt-4 space-y-2 text-sm md:text-base">
                    {p.career.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}

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

              {p.comments.length > 0 && (
                <div className="mt-10 space-y-6">
                  {p.comments.map((comment) => (
                    <figure key={comment.text.slice(0, 16)}>
                      <blockquote className="text-base leading-loose">{comment.text}</blockquote>
                      <figcaption className="mt-2 text-sm text-muted">{comment.from}</figcaption>
                    </figure>
                  ))}
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
