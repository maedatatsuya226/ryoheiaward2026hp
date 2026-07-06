import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

/** 章マーカー(番号 + 金の細いライン + 章タイトル) */
function ChapterMarker({ number, title }: { number: string; title: string }) {
  return (
    <div className="flex items-center gap-4">
      <span className="font-serif text-gold text-sm tracking-[0.3em]">
        {number}
      </span>
      <span aria-hidden="true" className="h-px w-10 md:w-16 bg-gold/50" />
      <span className="text-gold-soft text-xs md:text-sm tracking-[0.25em]">
        {title}
      </span>
    </div>
  );
}

/**
 * 良平アワードとは(創設趣旨)。
 * 深いネイビーの上で、3章立てのストーリーとして読ませる。
 *  01 蒲池良平先生の生涯と医療への姿勢
 *  02 医療を支えるさまざまな人々
 *  03 良平アワードが担う役割
 * 余白と文字組みを主役にし、スクロールに応じて静かにフェード表示する。
 */
export function About() {
  return (
    <section
      id="about"
      className="relative bg-navy scroll-mt-20 overflow-hidden"
    >
      {/* 背景:深いネイビーのグラデーションと、ごく弱い光の変化 */}
      <div aria-hidden="true" className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep via-navy to-navy-deep" />
        <div
          className="hero-light absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 75% 40% at 50% 38%, rgba(223, 207, 170, 0.10), transparent 70%)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-3xl px-5 md:px-8 py-24 md:py-36">
        <Reveal>
          <SectionHeading label="About" title="良平アワードとは" onDark />
        </Reveal>

        {/* ============ 01 蒲池良平先生の生涯と医療への姿勢 ============ */}
        <div className="mt-20 md:mt-28">
          <Reveal>
            <ChapterMarker number="01" title="蒲池良平先生の生涯と医療への姿勢" />
          </Reveal>

          {/* 冒頭:余白を広く取り、大きく表示 */}
          <Reveal className="mt-16 md:mt-24">
            {/* 文節単位の inline-block で、中途半端な位置での折り返しを防ぐ */}
            <p className="font-serif text-ivory text-2xl md:text-4xl leading-loose tracking-wider">
              <span className="inline-block">わずか41歳という生涯の中で、</span>
              <br />
              <span className="inline-block">誰よりも濃く、</span>
              <span className="inline-block">真摯に医療に向き合い続けた</span>
              <br />
              <span className="inline-block">蒲池良平先生。</span>
            </p>
          </Reveal>

          <Reveal className="mt-14 md:mt-20">
            <div className="space-y-6 text-ivory/80 text-base md:text-lg leading-loose">
              <p>
                良平アワードは、わずか41歳という、決して長くはなかった生涯の中で、誰よりも濃く、真摯に医療に向き合い続けた故・良平先生の精神を継承するために創設されたものです。
              </p>
              <p>
                良平先生は、患者さん一人ひとりに寄り添い、仲間を信じ、現場に立つ者としての誇りと優しさを持って駆け抜けられました。
              </p>
            </div>
          </Reveal>
        </div>

        {/* ============ 02 医療を支えるさまざまな人々 ============ */}
        <div className="mt-24 md:mt-36">
          <Reveal>
            <ChapterMarker number="02" title="医療を支えるさまざまな人々" />
          </Reveal>

          {/* 引用文を大きく表示 */}
          <Reveal className="mt-16 md:mt-24">
            <blockquote className="border-l border-gold/60 pl-6 md:pl-10">
              {/* 文節単位の inline-block で、中途半端な位置での折り返しを防ぐ */}
              <p className="font-serif text-ivory text-xl md:text-3xl leading-loose tracking-wider">
                <span className="inline-block">医療は、誰か一人が</span>
                <span className="inline-block">大きなことを成し遂げるだけで</span>
                <br />
                <span className="inline-block">成り立つものではありません。</span>
              </p>
            </blockquote>
          </Reveal>

          {/* 4つの言葉を大きなタイポグラフィとして順番に表示。
              表示の瞬間、文字の背後に柔らかな光が広がり、金の細いラインが静かに伸びる。
              PCでは言葉ごとに左右へ配置をずらして視線の流れを作り、スマートフォンでは中央寄せ。 */}
          <div className="mt-20 md:mt-28 space-y-12 md:space-y-16 font-serif text-ivory tracking-widest">
            {[
              { word: "支える人。", offset: "" },
              { word: "気づく人。", offset: "md:ml-[22%]" },
              { word: "手を伸ばす人。", offset: "md:ml-[8%]" },
              { word: "静かに努力を積み重ねる人。", offset: "md:ml-[28%]" },
            ].map((item, index) => (
              <Reveal
                key={item.word}
                delay={index * 120}
                className="text-center md:text-left"
              >
                <div className={`relative inline-block ${item.offset}`}>
                  <span aria-hidden="true" className="light-word-glow" />
                  <p className="relative text-2xl md:text-4xl">{item.word}</p>
                  <span
                    aria-hidden="true"
                    className="light-word-line relative mx-auto md:mx-0 origin-center md:origin-left"
                  />
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-14 md:mt-20">
            <p className="text-ivory/70 text-base md:text-lg">
              その全てがあって初めて、医療は成り立ちます。
            </p>
          </Reveal>
        </div>

        {/* ============ 03 良平アワードが担う役割 ============ */}
        <div className="mt-24 md:mt-36">
          <Reveal>
            <ChapterMarker number="03" title="良平アワードが担う役割" />
          </Reveal>

          {/* 「そのすべてに、光を。」を大きく表示 */}
          <Reveal className="mt-16 md:mt-24">
            <div className="relative text-center py-10 md:py-14">
              {/* 表示の瞬間、背景全体がごくわずかに明るくなる(セクションのoverflow-hidden内に収まる) */}
              <div
                aria-hidden="true"
                className="light-bloom absolute -inset-x-40 -inset-y-24 md:-inset-x-96 md:-inset-y-32"
                style={{
                  background:
                    "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(223, 207, 170, 0.09), transparent 72%)",
                }}
              />
              <div
                aria-hidden="true"
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(ellipse 60% 80% at 50% 50%, rgba(223, 207, 170, 0.12), transparent 70%)",
                }}
              />
              <p className="relative font-serif text-gold-soft text-3xl md:text-5xl leading-relaxed tracking-[0.15em]">
                そのすべてに、光を。
              </p>
            </div>
          </Reveal>

          {/* 良平アワードの役割を説明する本文 */}
          <Reveal className="mt-14 md:mt-20">
            <div className="space-y-6 text-ivory/80 text-base md:text-lg leading-loose">
              <p>
                本アワードは、そうした日々の行いに光を当て、互いに認め合い、励まし合う場です。
              </p>
              <p>
                良平先生の志が風化することなく、ここに集う私たち一人ひとりの中に息づき、次の世代へと確かに受け継がれていくことを願っています。
              </p>
            </div>
          </Reveal>

          {/* 最重要メッセージ */}
          <Reveal className="mt-20 md:mt-28">
            <div className="text-center">
              <div aria-hidden="true" className="mx-auto h-px w-16 bg-gold/60" />
              <p className="mt-10 font-serif text-ivory text-xl md:text-3xl leading-loose tracking-wider">
                今日ここにいる全員が、
                <br className="md:hidden" />
                その志の継承者です。
              </p>
              <div
                aria-hidden="true"
                className="mx-auto mt-10 h-px w-16 bg-gold/60"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
