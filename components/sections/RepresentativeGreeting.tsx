import Image from "next/image";
import { representativeGreeting } from "@/data/representative";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

/**
 * 良平アワード基金 代表挨拶。
 * プロフィール型レイアウトと差別化し、挨拶文中心のコンパクトな構成。
 */
export function RepresentativeGreeting() {
  const g = representativeGreeting;

  return (
    <section id="greeting" className="bg-white scroll-mt-20 border-y border-navy/5">
      <div className="mx-auto max-w-3xl px-5 md:px-8 py-20 md:py-28">
        <Reveal>
          <SectionHeading
            title="良平アワード基金 代表挨拶"
            variant="editorial"
            align="left"
          />
        </Reveal>

        <Reveal className="mt-10 md:mt-14">
          <div className="flex items-center gap-5 md:gap-6">
            <Image
              src={g.photo}
              alt={`${g.organization} ${g.role} ${g.name}先生の写真`}
              width={160}
              height={160}
              className="h-20 w-20 md:h-24 md:w-24 shrink-0 rounded-full object-cover object-top ring-2 ring-gold/30 ring-offset-2 ring-offset-white"
            />
            <div>
              <p className="text-xs tracking-[0.2em] text-gold">{g.organization}</p>
              <p className="mt-1 font-serif text-navy text-xl md:text-2xl tracking-wide">
                {g.name}
                <span className="ml-2 text-sm text-muted font-sans tracking-normal">
                  {g.nameReading}
                </span>
              </p>
              <p className="mt-0.5 text-sm text-muted">{g.role}</p>
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-10 md:mt-12">
          <div className="rounded-2xl bg-ivory/80 px-6 py-8 md:px-10 md:py-10 border-l-2 border-gold">
            <div className="space-y-6">
              {g.greeting.map((paragraph) => (
                <p key={paragraph.slice(0, 20)} className="text-base md:text-lg leading-loose">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
          <p className="mt-6 text-sm text-muted">※ 本文は仮の文案です。確定後に差し替えます。</p>
        </Reveal>
      </div>
    </section>
  );
}
