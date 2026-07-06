import { Reveal } from "@/components/ui/Reveal";

/**
 * クロージング。
 * 最重要メッセージを、柔らかな光が未来へ続く背景の上で大きく表示する。
 */
export function Closing() {
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

      <div className="relative mx-auto max-w-4xl px-5 md:px-8 py-28 md:py-44 text-center">
        <Reveal>
          <p className="text-gold-soft text-xs md:text-sm tracking-[0.35em] uppercase">
            Message
          </p>
        </Reveal>
        <Reveal delay={150}>
          {/* モバイル:縦書き2列(右列→左列の順で読む)。「継承者」のみgoldtext */}
          <p className="md:hidden vertical-heading mx-auto mt-8 font-serif text-ivory text-2xl leading-[1.9]">
            今日ここにいる全員が、
            <br />
            その志の<span className="goldtext">継承者</span>です。
          </p>
          {/* PC:横書き */}
          <p className="hidden md:block mt-8 font-serif text-ivory text-4xl leading-loose tracking-wider">
            今日ここにいる全員が、
            <br />
            その志の<span className="goldtext">継承者</span>です。
          </p>
        </Reveal>
        <Reveal delay={300}>
          <p className="mt-8 text-ivory/75 text-sm md:text-base tracking-wide">
            良平アワード2026 — お会いできる日を、心よりお待ちしています。
          </p>
          <div
            aria-hidden="true"
            className="mx-auto mt-10 h-px w-16 bg-gold-soft/70"
          />
        </Reveal>
      </div>
    </section>
  );
}
