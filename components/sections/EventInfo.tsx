import { eventInfo } from "@/data/site";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const COMING_SOON = "詳細は近日公開";

/**
 * 良平アワード2026 開催概要。
 * 確定情報のみ表示し、未確定項目は「詳細は近日公開」とする。
 * 開催日が確定するまでカウントダウンは実装しない。
 */
export function EventInfo() {
  const rows: { label: string; value: string | null }[] = [
    { label: "名称", value: eventInfo.title },
    { label: "会場", value: eventInfo.venue },
    { label: "開催日", value: eventInfo.date },
    { label: "時間", value: eventInfo.time },
    { label: "主催", value: eventInfo.organizer },
  ];

  return (
    <section id="overview" className="bg-white scroll-mt-20">
      <div className="mx-auto max-w-3xl px-5 md:px-8 py-20 md:py-32">
        <Reveal>
          <SectionHeading label="Outline" title="良平アワード2026 開催概要" />
        </Reveal>

        <Reveal className="mt-12 md:mt-16">
          <dl className="divide-y divide-navy/10 border-y border-navy/10">
            {rows.map((row) => (
              <div
                key={row.label}
                className="grid grid-cols-1 sm:grid-cols-[8rem_1fr] gap-1 sm:gap-6 py-5 md:py-6"
              >
                <dt className="text-sm tracking-widest text-gold">
                  {row.label}
                </dt>
                <dd
                  className={
                    row.value
                      ? "text-base md:text-lg text-ink"
                      : "text-base text-muted"
                  }
                >
                  {row.value ?? COMING_SOON}
                </dd>
              </div>
            ))}
          </dl>
          <p className="mt-8 text-sm text-muted text-center">
            開催情報は、確定し次第このページでお知らせします。
          </p>
        </Reveal>
      </div>
    </section>
  );
}
