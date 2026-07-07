import Link from "next/link";
import { awardeesNotice, siteStatus } from "@/data/site";
import { awardees2026 } from "@/data/awardees";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

/** 「光」の一文字だけgoldtextで強調して表示する */
function TitleWithGold({ text }: { text: string }) {
  const index = text.indexOf("光");
  if (index === -1) return <>{text}</>;
  return (
    <>
      {text.slice(0, index)}
      <span className="goldtext">光</span>
      {text.slice(index + 1)}
    </>
  );
}

/**
 * 受賞者紹介への導線。
 * 発表方針の文言は data/site.ts の awardeesNotice で一元管理。
 * 案4a: ダーク基調。
 */
export function AwardeesTeaser() {
  return (
    <section id="awardees" className="bg-navy-deep scroll-mt-20 border-y border-gold/10">
      <div className="mx-auto max-w-3xl px-5 md:px-8 py-24 md:py-32 text-center">
        <Reveal>
          <SectionHeading title="受賞者紹介" variant="minimal" onDark />
        </Reveal>

        {siteStatus.awardeesPublished ? (
          <Reveal className="mt-12">
            {awardees2026.length > 0 && (
              <ul className="mb-10 space-y-2">
                {awardees2026.slice(0, 3).map((awardee) => (
                  <li key={awardee.name} className="font-serif text-ivory text-lg">
                    {awardee.name}
                    <span className="ml-3 text-sm text-ivory/60 font-sans">
                      {awardee.affiliation}
                    </span>
                  </li>
                ))}
              </ul>
            )}
            <Link
              href="/awardees/2026"
              className="btn-primary inline-block rounded-lg bg-gold-soft text-navy px-10 py-4 tracking-wider hover:bg-gold transition-colors"
            >
              良平アワード2026 受賞者を見る
            </Link>
          </Reveal>
        ) : (
          <Reveal className="mt-12">
            <div className="relative mx-auto max-w-xl overflow-hidden rounded-2xl border border-gold/25 bg-navy px-6 py-10 md:px-10 md:py-12">
              <div
                aria-hidden="true"
                className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-24 bg-gradient-to-r from-transparent via-gold to-transparent"
              />
              <p className="font-serif text-ivory text-xl md:text-2xl leading-loose">
                <TitleWithGold text={awardeesNotice.teaserTitle} />
              </p>
              <p className="mt-4 text-sm md:text-base text-ivory/70 leading-relaxed">
                {awardeesNotice.teaserBody}
              </p>
              <Link
                href="/awardees/2026"
                className="mt-6 inline-flex items-center gap-2 text-sm text-gold-soft hover:text-gold transition-colors"
              >
                <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse-soft" />
                {awardeesNotice.teaserNote}
              </Link>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
