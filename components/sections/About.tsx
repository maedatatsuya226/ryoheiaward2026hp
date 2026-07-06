import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

/**
 * 良平アワードとは(創設趣旨)。
 * 長文をカードで区切らず、タイポグラフィと余白で品格を出す。
 */
export function About() {
  return (
    <section id="about" className="relative bg-ivory scroll-mt-20 overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-0 h-96 w-96 rounded-full bg-gold/[0.04] blur-3xl"
      />

      <div className="relative mx-auto max-w-4xl px-5 md:px-8 py-24 md:py-32">
        <SectionHeading
          title="良平アワードとは"
          variant="editorial"
          align="left"
        />

        {/* リード文 */}
        <p className="mt-12 md:mt-16 max-w-3xl font-serif text-navy text-xl md:text-2xl leading-loose tracking-wide">
          故・良平先生の精神を継承し、
          <br className="hidden md:inline" />
          日々の行いに光を当てるアワードです。
        </p>

        <div className="mt-10 md:mt-12 max-w-2xl space-y-6 text-base md:text-lg text-ink/90 leading-loose">
          <p>
            良平アワードは、わずか41歳という、決して長くはなかった生涯の中で、誰よりも濃く、真摯に医療に向き合い続けた故・良平先生の精神を継承するために創設されたものです。
          </p>
          <p>
            良平先生は、患者さん一人ひとりに寄り添い、仲間を信じ、現場に立つ者としての誇りと優しさを持って駆け抜けられました。
          </p>
        </div>

        {/* 核となるメッセージ */}
        <Reveal className="mt-16 md:mt-24">
          <div className="relative border-y border-gold/25 py-12 md:py-16">
            <div
              aria-hidden="true"
              className="absolute left-0 top-1/2 -translate-y-1/2 font-serif text-gold/15 text-[5rem] md:text-[7rem] leading-none select-none"
            >
              &ldquo;
            </div>
            <blockquote className="relative mx-auto max-w-2xl text-center">
              <p className="font-serif text-navy text-xl md:text-3xl leading-loose tracking-wide">
                医療は、誰か一人が大きなことを
                <br />
                成し遂げるだけで
                <br />
                成り立つものではありません。
              </p>
            </blockquote>
          </div>
        </Reveal>

        {/* 支える人々 */}
        <div className="mt-14 md:mt-20 max-w-2xl">
          <ul className="space-y-4 md:space-y-5">
            {[
              "支える人",
              "気づく人",
              "手を伸ばす人",
              "静かに努力を積み重ねる人",
            ].map((line) => (
              <li
                key={line}
                className="flex items-baseline gap-4 font-serif text-navy text-lg md:text-xl tracking-wide"
              >
                <span aria-hidden="true" className="shrink-0 h-px w-8 bg-gold/60" />
                {line}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-muted text-sm md:text-base leading-relaxed">
            その全てがあって初めて、医療は成り立ちます。
          </p>
        </div>

        <div className="mt-14 md:mt-20 max-w-2xl space-y-6 text-base md:text-lg text-ink/90 leading-loose border-t border-navy/8 pt-12 md:pt-16">
          <p>
            本アワードは、そうした日々の行いに光を当て、互いに認め合い、励まし合う場です。
          </p>
          <p>
            良平先生の志が風化することなく、ここに集う私たち一人ひとりの中に息づき、次の世代へと確かに受け継がれていくことを願っています。
          </p>
        </div>
      </div>
    </section>
  );
}
