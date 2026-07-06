import { eventInfo } from "@/data/site";

/** マーキー帯の1セット分(2セット複製してループさせる) */
function MarqueeContent() {
  const items = [
    eventInfo.titleEn,
    eventInfo.date,
    eventInfo.venue,
    "志を受け継ぎ、日々の行いに光を。",
  ].filter(Boolean) as string[];

  return (
    <span className="flex shrink-0 items-center">
      {items.map((item) => (
        <span key={item} className="flex items-center">
          <span className="font-number text-gold-soft/90 text-sm md:text-base tracking-[0.2em] whitespace-nowrap">
            {item}
          </span>
          <span className="mx-6 md:mx-10 text-gold/50">·</span>
        </span>
      ))}
    </span>
  );
}

/**
 * ヒーロー直下のマーキー帯(案4aモック準拠)。
 * 開催情報の詳細はヒーローと開催概要セクションが担うため、ここは帯のみ。
 */
export function EventAnticipation() {
  return (
    <section
      aria-label="良平アワード2026 開催予告"
      className="overflow-hidden bg-navy-deep border-y border-gold/20 py-3.5"
    >
      <p className="sr-only">
        {eventInfo.titleEn}
        {eventInfo.date ? ` ${eventInfo.date}` : ""} {eventInfo.venue}{" "}
        志を受け継ぎ、日々の行いに光を。
      </p>
      <div aria-hidden="true" className="marquee-track">
        <MarqueeContent />
        <MarqueeContent />
      </div>
    </section>
  );
}
