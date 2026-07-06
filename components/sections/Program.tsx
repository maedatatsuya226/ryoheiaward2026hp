import { programItems } from "@/data/site";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

/**
 * 当日のプログラム。
 * data/site.ts の programItems が空の間は、セクションごと非表示。
 * 架空のタイムスケジュールは作らない。
 */
export function Program() {
  if (programItems.length === 0) return null;

  return (
    <section id="program" className="bg-navy scroll-mt-20">
      <div className="mx-auto max-w-3xl px-5 md:px-8 py-20 md:py-32">
        <Reveal>
          <SectionHeading title="当日のプログラム" variant="wide" align="left" onDark />
        </Reveal>
        <Reveal className="mt-12 md:mt-16">
          <ol className="space-y-0 border-l border-gold/50 ml-2">
            {programItems.map((item) => (
              <li key={`${item.time}-${item.title}`} className="relative pl-8 pb-10">
                <span
                  aria-hidden="true"
                  className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-gold"
                />
                <p className="font-number text-gold-soft text-base tracking-widest">
                  {item.time}
                </p>
                <h3 className="mt-1 text-ivory text-lg md:text-xl">{item.title}</h3>
                {item.description && (
                  <p className="mt-2 text-sm md:text-base text-ivory/70">
                    {item.description}
                  </p>
                )}
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
