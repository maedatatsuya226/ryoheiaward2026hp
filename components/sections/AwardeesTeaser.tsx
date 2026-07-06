import Link from "next/link";
import { siteStatus } from "@/data/site";
import { awardees2026 } from "@/data/awardees";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

/**
 * 受賞者紹介への導線。
 * 開催前(awardeesPublished: false):「受賞者は当日発表します」のみ表示。
 * 表彰後(true):受賞者名の一部と受賞者ページへのボタンを表示。
 */
export function AwardeesTeaser() {
  return (
    <section id="awardees" className="bg-ivory scroll-mt-20">
      <div className="mx-auto max-w-3xl px-5 md:px-8 py-20 md:py-32 text-center">
        <Reveal>
          <SectionHeading label="Awardees" title="受賞者紹介" />
        </Reveal>

        {siteStatus.awardeesPublished ? (
          <Reveal className="mt-12">
            {awardees2026.length > 0 && (
              <ul className="mb-10 space-y-2">
                {awardees2026.slice(0, 3).map((awardee) => (
                  <li key={awardee.name} className="font-serif text-navy text-lg">
                    {awardee.name}
                    <span className="ml-3 text-sm text-muted font-sans">
                      {awardee.affiliation}
                    </span>
                  </li>
                ))}
              </ul>
            )}
            <Link
              href="/awardees/2026"
              className="inline-block rounded-full bg-navy text-ivory px-10 py-4 tracking-wider hover:bg-navy-soft transition-colors"
            >
              良平アワード2026 受賞者を見る
            </Link>
          </Reveal>
        ) : (
          <Reveal className="mt-12">
            <p className="font-serif text-navy text-xl md:text-2xl leading-loose">
              受賞者は当日発表します。
            </p>
            <p className="mt-5 text-sm md:text-base text-muted">
              表彰式の後、このページで受賞者をご紹介します。
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
