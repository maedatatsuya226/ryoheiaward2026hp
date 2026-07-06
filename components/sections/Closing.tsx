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
      {/* 柔らかな光が未来(上方)へ続く背景。実写真差し替え時は .slow-zoom 層の中に配置する */}
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
        <div className="slow-zoom absolute inset-0 bg-gradient-to-t from-navy-deep via-navy to-navy-soft" />
        <div
          className="hero-light absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 45% at 50% 70%, rgba(223, 207, 170, 0.25), transparent 70%)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-4xl px-5 md:px-8 py-28 md:py-44 text-center">
        <Reveal>
          <p className="text-gold-soft text-xs md:text-sm tracking-[0.4em] uppercase">
            Message
          </p>
        </Reveal>
        <Reveal delay={150}>
          <p className="mt-8 font-serif text-ivory text-2xl md:text-4xl leading-loose tracking-wider">
            今日ここにいる全員が、
            <br />
            その志の継承者です。
          </p>
        </Reveal>
        <Reveal delay={300}>
          <div
            aria-hidden="true"
            className="mx-auto mt-10 h-px w-16 bg-gold-soft/70"
          />
        </Reveal>
      </div>
    </section>
  );
}
