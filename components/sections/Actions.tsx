import Image from "next/image";
import { actionItems } from "@/data/actions";
import { PhotoPlaceholder } from "@/components/ui/PhotoPlaceholder";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

/**
 * 良平アワードが光を当てる行動(5項目)。
 * 均等カードの羅列は避け、写真+文章の左右交互レイアウトで構成する。
 */
export function Actions() {
  return (
    <section id="actions" className="bg-ivory scroll-mt-20">
      <div className="mx-auto max-w-5xl px-5 md:px-8 py-20 md:py-32">
        <Reveal>
          <SectionHeading
            label="Spotlight"
            title="良平アワードが光を当てる行動"
          />
          <p className="mt-8 text-center text-muted text-sm md:text-base">
            大きな功績だけではなく、医療現場で日々積み重ねられている
            <br className="hidden md:inline" />
            誠実な行いにこそ、光を当てます。
          </p>
        </Reveal>

        <ol className="mt-16 md:mt-24 space-y-16 md:space-y-24 list-none">
          {actionItems.map((action, index) => {
            const reversed = index % 2 === 1;
            return (
              <li key={action.title}>
                <Reveal>
                  <div
                    className={`flex flex-col gap-6 md:gap-12 md:items-center ${
                      reversed ? "md:flex-row-reverse" : "md:flex-row"
                    }`}
                  >
                    {/* 写真(用意でき次第 data/actions.ts で差し替え) */}
                    <div className="md:w-1/2">
                      {action.image ? (
                        <Image
                          src={action.image}
                          alt=""
                          width={720}
                          height={480}
                          className="w-full rounded-2xl object-cover aspect-[3/2]"
                        />
                      ) : (
                        <PhotoPlaceholder className="w-full rounded-2xl aspect-[3/2]" />
                      )}
                    </div>
                    <div className="md:w-1/2">
                      <p
                        aria-hidden="true"
                        className="font-serif text-gold text-sm tracking-[0.3em]"
                      >
                        {String(index + 1).padStart(2, "0")}
                      </p>
                      <h3 className="mt-2 text-navy text-xl md:text-2xl tracking-wider">
                        {action.title}
                      </h3>
                      <p className="mt-5 text-base md:text-lg text-ink/90">
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
