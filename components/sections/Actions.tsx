import Image from "next/image";
import { actionItems } from "@/data/actions";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

/**
 * 良平アワードが光を当てる行動。
 * 案4a: ダーク基調、輪郭数字、写真に金の内枠。
 */
export function Actions() {
  return (
    <section id="actions" className="bg-navy-deep scroll-mt-20">
      <div className="mx-auto max-w-5xl px-5 md:px-8 py-20 md:py-32">
        <Reveal>
          <SectionHeading
            title="良平アワードが光を当てる行動"
            variant="wide"
            align="left"
            onDark
          />
          <p className="mt-8 text-ivory/70 text-sm md:text-base max-w-2xl">
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
                        <div className="relative overflow-hidden rounded-2xl">
                          <Image
                            src={action.image}
                            alt={action.title}
                            width={720}
                            height={540}
                            className="w-full object-cover aspect-[4/3]"
                            style={{ objectPosition: action.objectPosition ?? "center top" }}
                          />
                          <span aria-hidden="true" className="gold-inner-frame" />
                        </div>
                      )}
                    </div>
                    <div className="md:w-1/2">
                      <p
                        aria-hidden="true"
                        className="outline-number text-4xl md:text-5xl leading-none"
                      >
                        {String(index + 1).padStart(2, "0")}
                      </p>
                      <h3 className="mt-3 text-ivory text-xl md:text-2xl tracking-wider">
                        {action.title}
                      </h3>
                      <p className="mt-5 text-base md:text-lg text-ivory/80 leading-loose">
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
