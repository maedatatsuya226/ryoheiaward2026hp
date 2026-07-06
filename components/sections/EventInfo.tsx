import { eventInfo } from "@/data/site";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const COMING_SOON = "詳細は近日公開";

/**
 * 良平アワード2026 開催概要。
 * 確定情報を前面に、未確定項目はコンパクトにまとめる。
 * 案4a: ダーク基調、日付をCormorantで大きく、光の粒を背景に。
 */
export function EventInfo() {
  const pendingRows: { label: string }[] = [];
  const rows: { label: string; value: string | null }[] = [
    { label: "名称", value: eventInfo.title },
    { label: "会場", value: eventInfo.venue },
    { label: "開催日", value: eventInfo.date },
    { label: "時間", value: eventInfo.time },
    { label: "主催", value: eventInfo.organizer },
  ];

  for (const row of rows) {
    if (!row.value && row.label !== "名称" && row.label !== "会場") {
      pendingRows.push({ label: row.label });
    }
  }

  return (
    <section id="overview" className="bg-navy scroll-mt-20">
      <div className="mx-auto max-w-3xl px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <SectionHeading
            title="良平アワード2026 開催概要"
            variant="editorial"
            align="left"
            onDark
          />
        </Reveal>

        <Reveal className="mt-10 md:mt-14">
          {/* 確定情報を大きく見せる */}
          <div className="relative overflow-hidden rounded-2xl bg-navy-deep border border-gold/20 px-6 py-10 md:px-10 md:py-12">
            <div
              aria-hidden="true"
              className="hero-light absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse 80% 70% at 80% 0%, rgba(223, 207, 170, 0.16), transparent 65%)",
              }}
            />
            {/* 光の粒 */}
            <span aria-hidden="true" className="spark" style={{ left: "18%", width: 3, height: 3, animationDelay: "1.2s" }} />
            <span aria-hidden="true" className="spark" style={{ left: "52%", width: 4, height: 4, animationDelay: "4s" }} />
            <span aria-hidden="true" className="spark" style={{ left: "84%", width: 3, height: 3, animationDelay: "6.4s" }} />
            <div className="relative">
              <p className="text-gold-soft text-xs tracking-[0.3em] uppercase">
                Save the Date
              </p>
              {eventInfo.date && (
                <p className="mt-4 font-number text-gold-soft text-4xl md:text-[54px] leading-tight tracking-[0.04em]">
                  {eventInfo.date}
                </p>
              )}
              <h3 className="mt-4 font-serif text-ivory text-2xl md:text-3xl tracking-wider">
                {eventInfo.title}
              </h3>
              <p className="mt-4 text-ivory/90 text-base md:text-lg">
                会場:<span className="text-gold-soft">{eventInfo.venue}</span>
              </p>
              <p className="mt-6 font-serif text-ivory/85 text-lg md:text-xl leading-relaxed">
                {eventInfo.date
                  ? "お会いできる日を、心よりお待ちしています。"
                  : "開催日が決まり次第、ここでお知らせします。当日への期待を、どうぞこのページでお確かめください。"}
              </p>
            </div>
          </div>

          {/* 詳細一覧 */}
          <dl className="mt-8 divide-y divide-ivory/10 border-y border-ivory/10">
            {rows.map((row) => (
              <div
                key={row.label}
                className="grid grid-cols-1 sm:grid-cols-[8rem_1fr] gap-1 sm:gap-6 py-5 md:py-6"
              >
                <dt className="text-sm tracking-widest text-gold-soft">{row.label}</dt>
                <dd
                  className={
                    row.value
                      ? "text-base md:text-lg text-ivory/90"
                      : "text-base text-ivory/50"
                  }
                >
                  {row.value ?? COMING_SOON}
                </dd>
              </div>
            ))}
          </dl>

          {pendingRows.length > 0 && (
            <p className="mt-6 text-sm text-ivory/50">
              {pendingRows.map((r) => r.label).join("・")}
              など — 確定し次第、順次公開します。
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
