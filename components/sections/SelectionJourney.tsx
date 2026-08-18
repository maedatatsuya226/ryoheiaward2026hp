import { eventInfo, selectionStatus } from "@/data/site";
import { parseEventDateParts } from "@/lib/eventDate";
import { CountUp } from "@/components/ui/CountUp";

const STAGES = [
  { key: "first", label: "一次審査" },
  { key: "second", label: "二次審査" },
  { key: "final", label: "最終審査" },
  { key: "award", label: "授賞式" },
] as const;

type StageKey = (typeof STAGES)[number]["key"];

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

function stageIndex(key: StageKey): number {
  return STAGES.findIndex((st) => st.key === key);
}

/** 締めの添え書き(共通) */
function Note({ currentKey }: { currentKey: string }) {
  return (
    <p className="mt-8 text-ivory/70 text-sm md:text-base leading-relaxed">
      {stageNote(currentKey)}
      {currentKey !== "award" && (
        <>
          <br className="sm:hidden" />
          光は、すこしずつ絞られていきます。
        </>
      )}
    </p>
  );
}

/** 縦型:段階チップ(済/いまここ/これから) */
function StageChip({
  label,
  state,
}: {
  label: string;
  state: "done" | "current" | "future";
}) {
  if (state === "current") {
    return (
      <span className="relative my-1.5 inline-flex items-center gap-2 rounded-full border border-gold/60 bg-gold/10 px-4 py-1.5 text-xs tracking-[0.15em] text-gold-soft">
        <span className="relative flex h-2 w-2 items-center justify-center">
          <span
            aria-hidden="true"
            className="animate-pulse-soft absolute -inset-1 rounded-full bg-gold/50 blur-[3px]"
          />
          <span className="relative h-2 w-2 rounded-full bg-gold" />
        </span>
        {label.endsWith("審査") ? `${label}中` : label}
      </span>
    );
  }
  if (state === "done") {
    return (
      <span className="my-1.5 inline-flex items-center gap-2 rounded-full border border-gold/30 px-4 py-1.5 text-xs tracking-[0.15em] text-ivory/70">
        {label}
        <span className="text-gold/70">済</span>
      </span>
    );
  }
  return (
    <span className="my-1.5 inline-flex items-center rounded-full border border-ivory/15 px-4 py-1.5 text-xs tracking-[0.15em] text-ivory/40">
      {label}
    </span>
  );
}

/** 縦型:接続線 */
function Connector({ reached }: { reached: boolean }) {
  return (
    <span
      aria-hidden="true"
      className={`h-5 w-px ${reached ? "bg-gold/50" : "bg-ivory/15"}`}
    />
  );
}

/**
 * 選考の進行状況(データは data/site.ts の selectionStatus)。
 * 上から下へ数字が絞られていくファネル型。
 * 審査が進んだら data/site.ts の currentStage を更新するだけで現在地が進む。
 */
export function SelectionJourney() {
  const s = selectionStatus;
  const currentIndex = stageIndex(s.currentStage);
  const dateParts = parseEventDateParts(eventInfo.date);

  const state = (key: StageKey): "done" | "current" | "future" => {
    const i = stageIndex(key);
    return i < currentIndex ? "done" : i === currentIndex ? "current" : "future";
  };

  return (
      <div className="text-center">
        <p className="text-gold-soft text-xs tracking-[0.35em] uppercase">
          Selection
        </p>
        <h3 className="mt-3 font-serif text-ivory text-xl md:text-2xl tracking-wider">
          選考のあゆみ
        </h3>

        <div className="relative mx-auto mt-10 max-w-xs">
          {/* 下にいくほど細くなる光の帯(ファネル) */}
          <div
            aria-hidden="true"
            className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-56 md:w-64"
            style={{
              background:
                "linear-gradient(to bottom, rgba(223, 207, 170, 0.11), rgba(223, 207, 170, 0.02))",
              clipPath: "polygon(0% 0%, 100% 0%, 58% 100%, 42% 100%)",
            }}
          />

          <div className="relative flex flex-col items-center">
            {/* 候補者 */}
            <p className="font-number text-ivory/55 text-5xl md:text-6xl leading-none">
              <CountUp to={s.candidates} duration={1100} delay={200} />
            </p>
            <p className="mt-2 text-ivory/60 text-xs tracking-[0.2em]">候補者</p>

            {/* 一次審査 */}
            <div className="mt-3 flex flex-col items-center">
              <Connector reached />
              <StageChip label="一次審査" state={state("first")} />
              <Connector reached />
            </div>

            {/* 一次審査通過 */}
            <p className="goldtext font-number mt-3 text-7xl md:text-8xl leading-none">
              <CountUp to={s.firstPassed} duration={2400} delay={1500} />
            </p>
            <p className="mt-2 text-gold-soft text-xs tracking-[0.2em]">
              一次審査通過
            </p>

            {/* 二次審査 */}
            <div className="mt-3 flex flex-col items-center">
              <Connector reached={currentIndex >= stageIndex("second")} />
              <StageChip label="二次審査" state={state("second")} />
              <Connector reached={currentIndex > stageIndex("second")} />
            </div>

            {/* 最終審査 */}
            <div className="flex flex-col items-center">
              <StageChip label="最終審査" state={state("final")} />
              <Connector reached={currentIndex > stageIndex("final")} />
            </div>

            {/* 授賞式(光の収束点) */}
            <div className="mt-1 flex flex-col items-center">
              <span
                aria-hidden="true"
                className={`text-lg leading-none ${
                  s.currentStage === "award" ? "text-gold" : "text-gold/50"
                }`}
              >
                ✦
              </span>
              {dateParts && (
                <p className="mt-2 font-number text-gold-soft/80 text-sm tracking-[0.3em]">
                  {dateParts.month}.{dateParts.day}
                </p>
              )}
              <p className="mt-1 text-ivory/70 text-xs tracking-[0.2em]">
                授賞式 — 受賞者発表
              </p>
            </div>
          </div>
        </div>

        <Note currentKey={s.currentStage} />
      </div>
  );
}
