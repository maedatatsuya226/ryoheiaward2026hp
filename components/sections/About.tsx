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
 * 良平アワードとは(創設趣旨)。
 * ストーリーの流れ:
 *  01 蒲池良平先生の生涯と医療への姿勢
 *  02 医療は一人の大きな成果だけで成り立つものではない(引用)
 *     → 支える人。/気づく人。/手を伸ばす人。/静かに努力を積み重ねる人。
 *     → そのすべてに、光を。(このセクションの感情的なピーク)
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

        {/* ============ 01 蒲池良平先生の生涯と医療への姿勢 ============ */}
        <div className="pt-6 md:pt-10">
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

          {/* 4つの言葉(単一マークアップ):
              モバイルは縦書き4本並び(右から読む)、PCは横書きで左右へずらす。
              光の背後表示(light-word-glow)は両方で有効。 */}
          <div className="mt-14 md:mt-20 flex flex-row-reverse items-start justify-center gap-5 md:block md:space-y-14 font-serif text-ivory md:tracking-widest">
            {[
              { word: "支える人。", offset: "" },
              { word: "気づく人。", offset: "md:ml-[22%]" },
              { word: "手を伸ばす人。", offset: "md:ml-[8%]" },
              { word: "静かに努力を積み重ねる人。", offset: "md:ml-[28%]" },
            ].map((item, index) => (
              <Reveal key={item.word} delay={index * 130} className="md:text-left">
                <div className={`relative inline-block ${item.offset}`}>
                  <span aria-hidden="true" className="light-word-glow" />
                  {/* モバイルは縦書き(height:max-contentのため列折り返しなし)、PCは横書き */}
                  <p className="max-md:vertical-heading relative text-xl md:text-4xl">
                    {item.word}
                  </p>
                  {/* 金の細いラインはPCのみ(.light-word-line自体がdisplay:blockを持つためラッパーで制御) */}
                  <span aria-hidden="true" className="hidden md:block">
                    <span className="light-word-line relative origin-left" />
                  </span>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-14 md:mt-20 text-center md:text-left">
            <p className="text-ivory/70 text-sm md:text-lg">
              その全てがあって初めて、医療は成り立ちます。
            </p>
          </Reveal>

          {/* そのすべてに、光を。(このセクションの感情的なピーク) */}
          <Reveal className="mt-16 md:mt-24">
            <div className="relative text-center py-10 md:py-14">
              {/* 表示の瞬間、周囲がごくわずかに明るくなる(light-bloom) */}
              <div
                aria-hidden="true"
                className="light-bloom absolute -inset-x-40 -inset-y-20 md:-inset-x-96"
                style={{
                  background:
                    "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(223, 207, 170, 0.09), transparent 72%)",
                }}
              />
              <p className="goldtext relative font-serif text-3xl md:text-5xl leading-relaxed tracking-[0.1em]">
                そのすべてに、
                <br className="md:hidden" />
                光を。
              </p>
            </div>
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
