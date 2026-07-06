import Image from "next/image";
import { representativeGreeting } from "@/data/representative";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

/**
 * 良平アワード基金 代表挨拶。
 */
export function RepresentativeGreeting() {
  const g = representativeGreeting;

  return (
    <section id="greeting" className="bg-ivory scroll-mt-20">
      <div className="mx-auto max-w-6xl px-5 md:px-8 py-20 md:py-28">
        <Reveal>
          <SectionHeading
            label="Message from the Representative"
            title="良平アワード基金 代表挨拶"
          />
        </Reveal>

        <div className="mt-12 md:mt-20 grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-14 items-start">
          <Reveal className="md:col-span-2 md:order-2">
            <Image
              src={g.photo}
              alt={`${g.organization} ${g.role} ${g.name}先生の写真`}
              width={640}
              height={800}
              className="w-full rounded-2xl object-cover aspect-[4/5] object-top"
            />
          </Reveal>

          <Reveal className="md:col-span-3 md:order-1" delay={120}>
            <p className="text-xs tracking-[0.3em] text-gold uppercase">
              {g.organization}
            </p>
            <h3 className="mt-3 text-navy text-2xl md:text-3xl tracking-wider">
              {g.name}
              <span className="ml-3 text-sm text-muted font-sans tracking-normal">
                {g.nameReading}
              </span>
            </h3>
            <p className="mt-1 text-sm text-muted">{g.role}</p>

            <div className="mt-8 space-y-6">
              {g.greeting.map((paragraph) => (
                <p key={paragraph.slice(0, 20)} className="text-base md:text-lg leading-loose">
                  {paragraph}
                </p>
              ))}
            </div>

            <p className="mt-8 text-sm text-muted">
              ※ 本文は仮の文案です。確定後に差し替えます。
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
