"use client";

import { useEffect, useRef, useState } from "react";

type CountUpProps = {
  /** 最終的に表示する数 */
  to: number;
  /** アニメーション時間(ms) */
  duration?: number;
  /** 視界に入ってから数え始めるまでの遅延(ms) */
  delay?: number;
  className?: string;
};

/**
 * スクロールで見えた瞬間に 0 から to までゆっくりカウントアップする数字。
 * 視界から外れて再び入ると、もう一度カウントする。
 * prefers-reduced-motion 時とJS無効時は最初から確定値を表示する。
 */
export function CountUp({
  to,
  duration = 1600,
  delay = 0,
  className = "",
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(to);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    setValue(0);
    let raf = 0;
    let timer: ReturnType<typeof setTimeout> | undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            timer = setTimeout(() => {
              const start = performance.now();
              const tick = (now: number) => {
                const progress = Math.min(1, (now - start) / duration);
                const eased = 1 - Math.pow(1 - progress, 3);
                setValue(Math.round(to * eased));
                if (progress < 1) raf = requestAnimationFrame(tick);
              };
              raf = requestAnimationFrame(tick);
            }, delay);
          } else {
            // 視界から外れたらリセットし、次に見えたとき再カウントする
            if (timer) clearTimeout(timer);
            cancelAnimationFrame(raf);
            setValue(0);
          }
        }
      },
      { threshold: 0.6 },
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      if (timer) clearTimeout(timer);
      cancelAnimationFrame(raf);
    };
  }, [to, duration, delay]);

  return (
    <span ref={ref} className={className}>
      {value}
    </span>
  );
}
