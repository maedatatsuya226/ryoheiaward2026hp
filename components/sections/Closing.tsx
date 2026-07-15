import { eventInfo } from "@/data/site";
import { parseEventDateParts } from "@/lib/eventDate";
import { Reveal } from "@/components/ui/Reveal";

/**
 * クロージング(案4aモック準拠)。
 * 最重要メッセージを縦書き2列で大きく掲げ、
 * 下に RYOHEI AWARD 2026 . {月} . {日} の一行で締める(日付はeventInfo.dateから導出)。
 */
export function Closing() {
  const dateParts = parseEventDateParts(eventInfo.date);

  return (
    <section
      aria-label="メッセージ"
      className="relative bg-navy overflow-hidden"
    >
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
        <div className="slow-zoom absolute inset-0 bg-gradient-to-t from-navy-deep via-navy to-navy-soft" />
        <div className="hero-rays absolute inset-0 opacity-50" />
        <div
          className="hero-light absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 45% at 50% 70%, rgba(223, 207, 170, 0.3), transparent 70%)",
          }}
        />
        {/* 光の粒 */}
        <span className="spark" style={{ left: "16%", width: 4, height: 4, animationDelay: "0.8s" }} />
        <span className="spark" style={{ left: "38%", width: 3, height: 3, animationDelay: "3.6s" }} />
        <span className="spark" style={{ left: "64%", width: 4, height: 4, animationDelay: "5.6s" }} />
        <span className="spark" style={{ left: "84%", width: 3, height: 3, animationDelay: "2s" }} />
      </div>

      <div className="relative mx-auto max-w-4xl px-5 md:px-8 py-24 md:py-36 text-center">
        <Reveal>
          {/* 縦書き2列(右列→左列の順で読む)。「継承者」のみgoldtext */}
          <p className="vertical-heading inline-block font-serif text-ivory text-2xl md:text-4xl leading-[1.9]">
            今日ここにいる全員が、
            <br />
            その志の<span className="goldtext">継承者</span>です。
          </p>
        </Reveal>
        <Reveal delay={200}>
          <p className="mt-14 md:mt-20 font-number text-gold-soft/85 text-xs md:text-sm tracking-[0.35em]">
            RYOHEI AWARD 2026
            {dateParts && ` . ${dateParts.month} . ${dateParts.day}`}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
