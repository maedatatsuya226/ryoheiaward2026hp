import { Reveal } from "@/components/ui/Reveal";

/** 章マーカー(画面端に食い込む巨大な輪郭数字+章タイトル) */
function ChapterMarker({ number, title }: { number: string; title: string }) {
  return (
    <div>
      <span
        aria-hidden="true"
        className="outline-number block select-none -ml-6 md:-ml-10 text-[88px] md:text-[140px] leading-[0.85]"
      >
        {number}
      </span>
      <h3 className="mt-1 text-gold-soft text-xs md:text-sm tracking-[0.3em]">
        {title}
      </h3>
    </div>
  );
}

/**
 * 良平アワードとは(創設趣旨)。案4aモック準拠。
 * 冒頭に「そのすべてに、光を。」を掲げ、3章立てで読ませる。
 *  01 蒲池良平先生の生涯と医療への姿勢
 *  02 医療を支えるさまざまな人々
 *  03 良平アワードが担う役割
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
              "radial-gradient(ellipse 75% 40% at 50% 20%, rgba(223, 207, 170, 0.1), transparent 70%)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-3xl px-5 md:px-8 py-20 md:py-28">
        <h2 className="sr-only">良平アワードとは</h2>

        {/* 冒頭の言葉 */}
        <Reveal className="text-center pt-6 md:pt-10">
          <p className="goldtext font-serif text-3xl md:text-5xl leading-relaxed tracking-[0.1em]">
            そのすべてに、
            <br className="md:hidden" />
            光を。
          </p>
          <div aria-hidden="true" className="mx-auto mt-10 h-px w-14 bg-gold/50" />
        </Reveal>

        {/* ============ 01 蒲池良平先生の生涯と医療への姿勢 ============ */}
        <div className="mt-20 md:mt-28">
          <Reveal>
            <ChapterMarker number="01" title="蒲池良平先生の生涯と医療への姿勢" />
          </Reveal>

          <Reveal className="mt-10 md:mt-14">
            {/* 文節単位の inline-block で、中途半端な位置での折り返しを防ぐ */}
            <p className="font-serif text-ivory text-xl md:text-3xl leading-loose tracking-wider">
              <span className="inline-block">わずか41歳という生涯の中で、</span>
              <span className="inline-block">誰よりも濃く、</span>
              <span className="inline-block">真摯に医療に向き合い続けた</span>
              <span className="inline-block">蒲池良平先生。</span>
            </p>
          </Reveal>

          <Reveal className="mt-8 md:mt-10">
            <p className="text-ivory/80 text-base md:text-lg leading-loose">
              良平アワードは、その精神を継承するために創設されました。良平先生は、患者さん一人ひとりに寄り添い、仲間を信じ、現場に立つ者としての誇りと優しさを持って駆け抜けられました。
            </p>
          </Reveal>
        </div>

        {/* ============ 02 医療を支えるさまざまな人々 ============ */}
        <div className="mt-20 md:mt-28">
          <Reveal>
            <ChapterMarker number="02" title="医療を支えるさまざまな人々" />
          </Reveal>

          <Reveal className="mt-10 md:mt-14">
            <p className="font-serif text-ivory text-xl md:text-3xl leading-loose tracking-wider">
              <span className="inline-block">医療は、誰か一人が</span>
              <span className="inline-block">大きなことを成し遂げるだけで</span>
              <span className="inline-block">成り立つものではありません。</span>
            </p>
          </Reveal>

          {/* 4つの言葉:モバイルは縦書き4本並び(右から読む)、PCは横書きで左右へずらす */}
          <div className="md:hidden mt-14 flex flex-row-reverse items-start justify-center gap-5 font-serif text-ivory">
            {[
              "支える人。",
              "気づく人。",
              "手を伸ばす人。",
              "静かに努力を積み重ねる人。",
            ].map((word, index) => (
              <Reveal key={word} delay={index * 150}>
                <div className="relative">
                  <span aria-hidden="true" className="light-word-glow" />
                  {/* vertical-heading は height: max-content のため列折り返しは起きない */}
                  <p className="vertical-heading relative text-xl">{word}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="hidden md:block mt-20 space-y-14 font-serif text-ivory tracking-widest">
            {[
              { word: "支える人。", offset: "" },
              { word: "気づく人。", offset: "md:ml-[22%]" },
              { word: "手を伸ばす人。", offset: "md:ml-[8%]" },
              { word: "静かに努力を積み重ねる人。", offset: "md:ml-[28%]" },
            ].map((item, index) => (
              <Reveal key={item.word} delay={index * 120} className="text-left">
                <div className={`relative inline-block ${item.offset}`}>
                  <span aria-hidden="true" className="light-word-glow" />
                  <p className="relative text-4xl">{item.word}</p>
                  <span
                    aria-hidden="true"
                    className="light-word-line relative origin-left"
                  />
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-14 md:mt-20 text-center md:text-left">
            <p className="text-ivory/70 text-sm md:text-lg">
              その全てがあって初めて、医療は成り立ちます。
            </p>
          </Reveal>
        </div>

        {/* ============ 03 良平アワードが担う役割 ============ */}
        <div className="mt-20 md:mt-28">
          <Reveal>
            <ChapterMarker number="03" title="良平アワードが担う役割" />
          </Reveal>

          <Reveal className="mt-10 md:mt-14">
            <p className="text-ivory/80 text-base md:text-lg leading-loose">
              本アワードは、日々の行いに光を当て、互いに認め合い、励まし合う場です。良平先生の志が風化することなく、次の世代へと確かに受け継がれていくことを願っています。
            </p>
          </Reveal>

          {/* 最重要メッセージ(「その志の継承者」に金の下線) */}
          <Reveal className="mt-14 md:mt-20">
            <p className="font-serif text-ivory text-xl md:text-3xl leading-loose tracking-wider">
              今日ここにいる全員が、
              <span className="whitespace-nowrap md:whitespace-normal">
                <span className="border-b border-gold/70 pb-1">
                  その志の継承者
                </span>
                です。
              </span>
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
