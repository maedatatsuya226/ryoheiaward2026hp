import Image from "next/image";
import { representativeGreeting } from "@/data/representative";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

/**
 * 良平アワード基金 代表挨拶。
 * プロフィール型レイアウトと差別化し、挨拶文中心のコンパクトな構成。
 * 案4a: ダーク基調(navy-soft)+金のアクセント。
 */
export function RepresentativeGreeting() {
  const g = representativeGreeting;

  return (
    <section id="greeting" className="bg-navy-soft scroll-mt-20 border-y border-gold/10">
      <div className="mx-auto max-w-3xl px-5 md:px-8 py-20 md:py-28">
        <Reveal>
          <SectionHeading
            title="良平アワード基金 代表挨拶"
            variant="editorial"
            align="left"
            onDark
          />
        </Reveal>

        <Reveal className="mt-10 md:mt-14">
          <div className="flex items-center gap-5 md:gap-6">
            <Image
              src={g.photo}
              alt={`${g.organization} ${g.role} ${g.name}先生の写真`}
              width={160}
              height={160}
              className="h-20 w-20 md:h-24 md:w-24 shrink-0 rounded-full object-cover object-top ring-1 ring-gold/50 ring-offset-4 ring-offset-navy-soft border border-gold/30"
            />
            <div>
              <p className="text-xs tracking-[0.2em] text-gold-soft">{g.organization}</p>
              <p className="mt-1 font-serif text-ivory text-xl md:text-2xl tracking-wide">
                {g.name}
                <span className="ml-2 text-sm text-ivory/60 font-sans tracking-normal">
                  {g.nameReading}
                </span>
              </p>
              <p className="mt-0.5 text-sm text-ivory/60">{g.role}</p>
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-10 md:mt-12">
          <div className="rounded-2xl bg-navy-deep/50 px-6 py-8 md:px-10 md:py-10 border-l-2 border-gold">
            <div className="space-y-6">
              {g.greeting.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 20)}
                  className="text-base md:text-lg leading-loose text-ivory/85"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
          <p className="mt-6 text-sm text-ivory/50">
            ※ 本文は仮の文案です。確定後に差し替えます。
          </p>
        </Reveal>
      </div>
    </section>
  );
}
