import { eventInfo, selectionStatus } from "@/data/site";
import { parseEventDateParts } from "@/lib/eventDate";
import { CountUp } from "@/components/ui/CountUp";

const STAGES = [
  { key: "first", label: "一次審査" },
  { key: "second", label: "二次審査" },
  { key: "final", label: "最終審査" },
  { key: "award", label: "授賞式" },
] as const;

/** 現在の段階に応じた添え書き */
function stageNote(currentKey: string): string {
  switch (currentKey) {
    case "first":
      return "ただいま、一次審査が進んでいます。";
    case "second":
      return "ただいま、二次審査が進んでいます。";
    case "final":
      return "ただいま、最終審査が進んでいます。";
    default:
      return "まもなく、授賞式を迎えます。";
  }
}

/**
 * 選考の進行状況(データは data/site.ts の selectionStatus)。
 * variant "journey": 数字+選考段階ステッパー(現在地が金色に明滅)
 * variant "numbers": 大きなカウント数字を主役にしたシンプル表示
 */
export function SelectionJourney({
  variant = "journey",
}: {
  variant?: "journey" | "numbers";
}) {
  const s = selectionStatus;
  const currentIndex = STAGES.findIndex((st) => st.key === s.currentStage);
  const dateParts = parseEventDateParts(eventInfo.date);

  if (variant === "numbers") {
    return (
      <div className="text-center">
        <p className="text-ivory/75 text-sm md:text-base leading-relaxed">
          <span className="font-number text-ivory/70 text-2xl md:text-3xl mx-1 align-[-0.1em]">
            {s.candidates}
          </span>
          名の候補者から、一次審査を通過したのは
        </p>
        <p className="mt-4 leading-none">
          <span className="goldtext font-number text-[88px] md:text-[120px]">
            <CountUp to={s.firstPassed} />
          </span>
          <span className="ml-2 text-ivory/80 text-xl md:text-2xl">名</span>
        </p>
        <p className="mt-6 text-ivory/70 text-sm md:text-base">
          {stageNote(s.currentStage)}
          <br className="sm:hidden" />
          光は、すこしずつ絞られていきます。
        </p>
      </div>
    );
  }

  return (
    <div className="text-center">
      <p className="text-gold-soft text-xs tracking-[0.35em] uppercase">
        Selection
      </p>
      <h3 className="mt-3 font-serif text-ivory text-xl md:text-2xl tracking-wider">
        選考のあゆみ
      </h3>

      {/* 66 → 31 のカウント */}
      <div className="mt-10 flex items-end justify-center gap-5 md:gap-8">
        <div className="text-center">
          <p className="font-number text-ivory/55 text-5xl md:text-6xl leading-none">
            <CountUp to={s.candidates} duration={1300} />
          </p>
          <p className="mt-2.5 text-ivory/60 text-xs tracking-[0.2em]">候補者</p>
        </div>
        <span aria-hidden="true" className="pb-7 text-gold/70 text-xl md:text-2xl">
          →
        </span>
        <div className="text-center">
          <p className="goldtext font-number text-7xl md:text-8xl leading-none">
            <CountUp to={s.firstPassed} duration={2000} />
          </p>
          <p className="mt-2.5 text-gold-soft text-xs tracking-[0.2em]">
            一次審査通過
          </p>
        </div>
      </div>

      {/* 選考段階ステッパー(現在地が明滅) */}
      <ol className="mt-12 flex items-start justify-center list-none">
        {STAGES.map((stage, index) => {
          const done = index < currentIndex;
          const current = index === currentIndex;
          return (
            <li key={stage.key} className="flex items-start">
              {index > 0 && (
                <span
                  aria-hidden="true"
                  className={`mt-[5px] h-px w-6 sm:w-10 md:w-16 ${
                    index <= currentIndex ? "bg-gold/60" : "bg-ivory/15"
                  }`}
                />
              )}
              <div className="relative -mt-0.5 flex w-16 md:w-20 flex-col items-center">
                <span className="relative flex h-3 w-3 items-center justify-center">
                  {current && (
                    <span
                      aria-hidden="true"
                      className="animate-pulse-soft absolute -inset-1.5 rounded-full bg-gold/40 blur-[5px]"
                    />
                  )}
                  <span
                    className={`relative h-3 w-3 rounded-full ${
                      done || current ? "bg-gold" : "border border-ivory/30"
                    }`}
                  />
                </span>
                <span
                  className={`mt-2.5 text-xs tracking-[0.15em] ${
                    current
                      ? "text-gold-soft"
                      : done
                        ? "text-ivory/70"
                        : "text-ivory/40"
                  }`}
                >
                  {stage.label}
                  {current && (
                    <span className="sr-only">(現在の段階)</span>
                  )}
                </span>
                {stage.key === "award" && dateParts && (
                  <span className="mt-1 font-number text-ivory/40 text-[11px] tracking-[0.2em]">
                    {dateParts.month}.{dateParts.day}
                  </span>
                )}
                {done && (
                  <span className="mt-1 text-gold/60 text-[11px]">済</span>
                )}
              </div>
            </li>
          );
        })}
      </ol>

      <p className="mt-8 text-ivory/70 text-sm md:text-base">
        {stageNote(s.currentStage)}
      </p>
    </div>
  );
}
