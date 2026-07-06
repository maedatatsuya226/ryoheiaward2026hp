import Link from "next/link";
import { siteStatus } from "@/data/site";
import { awardees2026 } from "@/data/awardees";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

/**
 * 受賞者紹介への導線。
 */
export function AwardeesTeaser() {
  return (
    <section id="awardees" className="bg-ivory scroll-mt-20">
      <div className="mx-auto max-w-3xl px-5 md:px-8 py-24 md:py-32 text-center">
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
              className="btn-primary inline-block rounded-lg bg-navy text-ivory px-10 py-4 tracking-wider hover:bg-navy-soft transition-colors"
            >
              良平アワード2026 受賞者を見る
            </Link>
          </Reveal>
        ) : (
          <Reveal className="mt-12">
            <div className="relative mx-auto max-w-xl overflow-hidden rounded-2xl border border-gold/20 bg-white px-6 py-10 md:px-10 md:py-12">
              <div
                aria-hidden="true"
                className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-24 bg-gradient-to-r from-transparent via-gold to-transparent"
              />
              <p className="font-serif text-navy text-xl md:text-2xl leading-loose">
                当日、ここから光ります。
              </p>
              <p className="mt-4 text-sm md:text-base text-muted leading-relaxed">
                受賞者の発表は表彰式のクライマックス。
                <br className="hidden sm:inline" />
                その瞬間まで、どうぞお楽しみに。
              </p>
              <p className="mt-6 inline-flex items-center gap-2 text-sm text-gold">
                <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse-soft" />
                表彰後、このページでご紹介します
              </p>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
