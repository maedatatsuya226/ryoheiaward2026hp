import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

/**
 * 良平アワードとは(創設趣旨)。
 * 長文を1段落で流さず、段落・引用・強調・余白で構成する。
 */
export function About() {
  return (
    <section id="about" className="bg-ivory scroll-mt-20">
      <div className="mx-auto max-w-3xl px-5 md:px-8 py-20 md:py-32">
        <Reveal>
          <SectionHeading label="About" title="良平アワードとは" />
        </Reveal>

        <Reveal className="mt-12 md:mt-16">
          <p className="text-base md:text-lg">
            良平アワードは、わずか41歳という、決して長くはなかった生涯の中で、誰よりも濃く、真摯に医療に向き合い続けた故・良平先生の精神を継承するために創設されたものです。
          </p>
          <p className="mt-6 text-base md:text-lg">
            良平先生は、患者さん一人ひとりに寄り添い、仲間を信じ、現場に立つ者としての誇りと優しさを持って駆け抜けられました。
          </p>
        </Reveal>

        {/* 強調文1 */}
        <Reveal className="my-14 md:my-20">
          <p className="font-serif text-navy text-xl md:text-2xl leading-loose text-center">
            医療は、誰か一人が大きなことを
            <br className="md:hidden" />
            成し遂げるだけで
            <br />
            成り立つものではありません。
          </p>
        </Reveal>

        {/* 強調文2 */}
        <Reveal className="my-14 md:my-20">
          <div className="border-l-2 border-gold pl-6 md:pl-10 py-2">
            <p className="font-serif text-navy text-lg md:text-2xl leading-loose">
              支える人、気づく人、
              <br />
              手を伸ばす人、
              <br />
              静かに努力を積み重ねる人。
            </p>
            <p className="mt-4 text-muted text-sm md:text-base">
              その全てがあって初めて、医療は成り立ちます。
            </p>
          </div>
        </Reveal>

        <Reveal>
          <p className="text-base md:text-lg">
            本アワードは、そうした日々の行いに光を当て、互いに認め合い、励まし合う場です。
          </p>
          <p className="mt-6 text-base md:text-lg">
            良平先生の志が風化することなく、ここに集う私たち一人ひとりの中に息づき、次の世代へと確かに受け継がれていくことを願っています。
          </p>
        </Reveal>

        {/* 最重要メッセージ */}
        <Reveal className="mt-16 md:mt-24">
          <div className="relative rounded-2xl bg-navy px-6 py-12 md:px-12 md:py-16 text-center overflow-hidden">
            <div
              aria-hidden="true"
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(223, 207, 170, 0.18), transparent 70%)",
              }}
            />
            <p className="relative font-serif text-ivory text-xl md:text-3xl leading-loose tracking-wider">
              今日ここにいる全員が、
              <br className="md:hidden" />
              その志の継承者です。
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
