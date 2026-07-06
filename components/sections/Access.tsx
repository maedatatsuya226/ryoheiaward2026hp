import { venueInfo } from "@/data/site";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

/**
 * 会場・アクセス。
 * 現時点では会場名のみ。住所・地図・駐車場は確定後に data/site.ts へ追加する。
 * 推測した住所や仮の地図埋め込みは使わない。
 * 案4a: ダーク基調。
 */
export function Access() {
  return (
    <section id="access" className="bg-navy scroll-mt-20">
      <div className="mx-auto max-w-2xl px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <SectionHeading title="会場・アクセス" variant="editorial" align="left" onDark />
        </Reveal>

        <Reveal className="mt-12 md:mt-16">
          <div className="rounded-2xl border border-gold/20 bg-navy-deep px-6 py-10 md:px-12 md:py-14 text-center">
            <p className="text-xs tracking-[0.3em] text-gold-soft uppercase">Venue</p>
            <p className="mt-3 font-serif text-ivory text-2xl md:text-3xl tracking-wider">
              {venueInfo.name}
            </p>

            {venueInfo.address && (
              <p className="mt-5 text-base text-ivory/90">{venueInfo.address}</p>
            )}
            {venueInfo.access && (
              <p className="mt-3 text-sm md:text-base text-ivory/70">
                {venueInfo.access}
              </p>
            )}
            {venueInfo.parking && (
              <p className="mt-3 text-sm md:text-base text-ivory/70">
                {venueInfo.parking}
              </p>
            )}

            {!venueInfo.address && (
              <p className="mt-6 text-sm text-ivory/50">
                住所・アクセス・駐車場のご案内は近日公開します。
              </p>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
