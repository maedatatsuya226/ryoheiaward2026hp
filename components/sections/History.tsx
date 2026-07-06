import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { HistoryGallery } from "@/components/gallery/HistoryGallery";

/**
 * 過去の授賞式・これまでの歩み。
 * 受け継がれてきた時間をたどる「写真回廊」として見せる。
 */
export function History() {
  return (
    <section id="history" className="bg-navy scroll-mt-20 overflow-hidden">
      <div className="py-20 md:py-32">
        <div className="mx-auto max-w-3xl px-5 md:px-8">
          <Reveal>
            <SectionHeading label="History" title="受け継がれてきた時間" onDark />
            <p className="mt-8 text-center text-ivory/70 text-sm md:text-base">
              良平アワードが積み重ねてきた時間を、写真とともにたどります。
            </p>
          </Reveal>
        </div>
        <Reveal className="mt-12 md:mt-16">
          <HistoryGallery />
        </Reveal>
      </div>
    </section>
  );
}
