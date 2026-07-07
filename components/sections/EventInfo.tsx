import { eventInfo, siteStatus } from "@/data/site";
import { parseEventDateParts } from "@/lib/eventDate";
import { Reveal } from "@/components/ui/Reveal";

const COMING_SOON = "詳細は近日公開";

/**
 * 良平アワード2026 開催概要(招待状風・モック準拠)。
 * 日付を主役に、確定情報のみを中央揃えでコンパクトに見せる。
 * 未確定項目は「詳細は近日公開」。架空の値は入れない。
 */
export function EventInfo() {
  const dateParts = parseEventDateParts(eventInfo.date);

  const details: { label: string; value: string; confirmed: boolean }[] = [
    {
      label: "時間",
      value: eventInfo.time ?? COMING_SOON,
      confirmed: !!eventInfo.time,
    },
    {
      label: "主催",
      value: eventInfo.organizer ?? COMING_SOON,
      confirmed: !!eventInfo.organizer,
    },
    {
      label: "受賞者",
      value: siteStatus.awardeesPublished ? "発表中" : "近日発表",
      confirmed: true,
    },
  ];

  return (
    <section
      id="overview"
      className="relative bg-navy-deep scroll-mt-20 overflow-hidden"
    >
      {/* 背景:柔らかな光と光の粒 */}
      <div aria-hidden="true" className="absolute inset-0">
        <div
          className="hero-light absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 55% at 50% 35%, rgba(223, 207, 170, 0.09), transparent 70%)",
          }}
        />
        <span className="spark" style={{ left: "22%", width: 3, height: 3, animationDelay: "1.4s" }} />
        <span className="spark" style={{ left: "56%", width: 4, height: 4, animationDelay: "4.2s" }} />
        <span className="spark" style={{ left: "80%", width: 3, height: 3, animationDelay: "6.6s" }} />
      </div>

      <div className="relative mx-auto max-w-2xl px-5 md:px-8 py-24 md:py-32 text-center">
        <Reveal>
          <h2 className="text-gold-soft text-xs md:text-sm tracking-[0.35em] uppercase">
            Invitation
            <span aria-hidden="true" className="mx-3 text-gold/60">
              ·
            </span>
            開催概要
          </h2>
        </Reveal>

        {/* 日付を主役に */}
        <Reveal delay={120}>
          {dateParts?.year ? (
            <p className="goldtext font-number mt-10 md:mt-12 text-5xl md:text-7xl tracking-[0.06em] leading-none">
              {dateParts.year} . {dateParts.month} . {dateParts.day}
            </p>
          ) : (
            <p className="mt-10 md:mt-12 font-serif text-ivory/70 text-xl md:text-2xl">
              開催日は近日公開
            </p>
          )}
          <p className="mt-6 font-serif text-ivory text-lg md:text-2xl tracking-[0.15em]">
            {dateParts?.weekdayJa && (
              <>
                {dateParts.weekdayJa}
                <span aria-hidden="true" className="mx-3 text-gold/70">
                  —
                </span>
              </>
            )}
            {eventInfo.venue}
          </p>
          <span
            aria-hidden="true"
            className="mt-8 inline-block h-1 w-1 rounded-full bg-gold/60"
          />
        </Reveal>

        {/* 項目(確定情報のみ・中央揃え) */}
        <Reveal delay={200}>
          <dl className="mt-10 space-y-8">
            {details.map((d) => (
              <div key={d.label}>
                <dt className="text-gold-soft text-xs tracking-[0.3em]">
                  {d.label}
                </dt>
                <dd
                  className={`mt-1.5 text-base md:text-lg ${
                    d.confirmed ? "text-ivory" : "text-ivory/60"
                  }`}
                >
                  {d.value}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>

        {/* 締めのピル(開催情報が確定次第、このページで更新) */}
        <Reveal delay={280}>
          <span className="btn-primary mt-14 inline-block rounded-full bg-gradient-to-r from-gold to-gold-soft text-navy px-12 py-4 text-sm md:text-base tracking-[0.15em]">
            当日の詳細を待つ
          </span>
        </Reveal>
      </div>
    </section>
  );
}
