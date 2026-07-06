import Image from "next/image";
import { actionItems } from "@/data/actions";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Actions() {
  return (
    <section id="actions" className="bg-white scroll-mt-20">
      <div className="mx-auto max-w-5xl px-5 md:px-8 py-20 md:py-32">
        <Reveal>
          <SectionHeading
            title="良平アワードが光を当てる行動"
            variant="wide"
            align="left"
          />
          <p className="mt-8 text-muted text-sm md:text-base max-w-2xl">
            大きな功績だけではなく、医療現場で日々積み重ねられている誠実な行いにこそ、光を当てます。
          </p>
        </Reveal>

        <ol className="mt-16 md:mt-20 space-y-14 md:space-y-20 list-none">
          {actionItems.map((action, index) => {
            const reversed = index % 2 === 1;
            return (
              <li key={action.title}>
                <Reveal>
                  <div
                    className={`flex flex-col gap-8 md:gap-12 md:items-center ${
                      reversed ? "md:flex-row-reverse" : "md:flex-row"
                    }`}
                  >
                    <div className="md:w-1/2">
                      {action.image && (
                        <Image
                          src={action.image}
                          alt={action.title}
                          width={720}
                          height={540}
                          className="w-full rounded-2xl object-cover aspect-[4/3] shadow-md"
                          style={{ objectPosition: action.objectPosition ?? "center top" }}
                        />
                      )}
                    </div>
                    <div className="md:w-1/2">
                      <p
                        aria-hidden="true"
                        className="font-serif text-gold/80 text-sm tracking-[0.25em]"
                      >
                        {String(index + 1).padStart(2, "0")}
                      </p>
                      <h3 className="mt-2 text-navy text-xl md:text-2xl tracking-wider">
                        {action.title}
                      </h3>
                      <p className="mt-5 text-base md:text-lg text-ink/90 leading-loose">
                        {action.text}
                      </p>
                    </div>
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
