"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { historyItems } from "@/data/history";
import { PhotoPlaceholder } from "@/components/ui/PhotoPlaceholder";

const AUTOPLAY_INTERVAL_MS = 6000;

function HistoryGalleryAnticipation() {
  return (
    <div className="mx-auto max-w-2xl px-5 md:px-8">
      <div className="rounded-2xl border border-ivory/15 bg-navy-soft/30 px-6 py-12 md:py-16 text-center">
        <p className="text-gold-soft text-xs tracking-[0.3em] uppercase">Memories</p>
        <p className="mt-5 font-serif text-ivory text-xl md:text-2xl leading-loose">
          これまでの授賞式の思い出が、
          <br />
          ここに並びます。
        </p>
        <p className="mt-4 text-ivory/70 text-sm md:text-base">
          過去の写真が用意でき次第、写真回廊として公開します。
        </p>
      </div>
    </div>
  );
}

function HistoryGalleryCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const scrollToIndex = useCallback(
    (index: number) => {
      const track = trackRef.current;
      if (!track) return;
      const items = track.querySelectorAll<HTMLElement>("[data-gallery-item]");
      const clamped = ((index % items.length) + items.length) % items.length;
      const target = items[clamped];
      if (!target) return;
      track.scrollTo({
        left: target.offsetLeft - (track.clientWidth - target.clientWidth) / 2,
        behavior: reducedMotion ? "auto" : "smooth",
      });
    },
    [reducedMotion],
  );

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const items = track.querySelectorAll<HTMLElement>("[data-gallery-item]");
        const center = track.scrollLeft + track.clientWidth / 2;
        let best = 0;
        let bestDist = Infinity;
        items.forEach((el, i) => {
          const mid = el.offsetLeft + el.clientWidth / 2;
          const dist = Math.abs(mid - center);
          if (dist < bestDist) {
            bestDist = dist;
            best = i;
          }
        });
        setCurrent(best);
      });
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      track.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  useEffect(() => {
    if (reducedMotion || paused) return;
    const id = setInterval(() => {
      if (document.hidden) return;
      scrollToIndex(current + 1);
    }, AUTOPLAY_INTERVAL_MS);
    return () => clearInterval(id);
  }, [reducedMotion, paused, current, scrollToIndex]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      scrollToIndex(current + 1);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      scrollToIndex(current - 1);
    }
  };

  return (
    <div
      role="region"
      aria-label="過去の授賞式の写真回廊"
      aria-roledescription="カルーセル"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) {
          setPaused(false);
        }
      }}
      onTouchStart={() => setPaused(true)}
    >
      <div
        ref={trackRef}
        tabIndex={0}
        onKeyDown={handleKeyDown}
        aria-label="写真一覧(左右キーで移動できます)"
        className="gallery-track flex gap-4 md:gap-8 overflow-x-auto snap-x snap-mandatory px-[12vw] md:px-[18vw] py-4 rounded-xl"
      >
        {historyItems.map((item, index) => (
          <figure
            key={`${item.title}-${index}`}
            data-gallery-item
            aria-hidden={index !== current}
            className={`snap-center shrink-0 w-[76vw] sm:w-[60vw] md:w-[46rem] max-w-full transition-[opacity,transform] duration-700 ease-out ${
              index === current
                ? `opacity-100 ${reducedMotion ? "" : "scale-[1.03]"}`
                : `opacity-50 ${reducedMotion ? "" : "scale-[0.96]"}`
            }`}
          >
            {item.image ? (
              <Image
                src={item.image}
                alt={`${item.year ? `${item.year}年 ` : ""}${item.title}`}
                width={960}
                height={600}
                className="w-full rounded-2xl object-cover aspect-[8/5]"
              />
            ) : (
              <PhotoPlaceholder className="w-full rounded-2xl aspect-[8/5]" />
            )}
            <figcaption className="mt-4 text-center">
              <span className="block font-serif text-gold-soft text-sm tracking-[0.25em]">
                {item.year && `${item.year}年 `}
                {item.title}
              </span>
              <span className="mt-1 block text-ivory/80 text-sm md:text-base">
                {item.caption}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={() => scrollToIndex(current - 1)}
          className="w-11 h-11 rounded-full border border-ivory/40 text-ivory hover:border-gold-soft hover:text-gold-soft transition-colors"
          aria-label="前の写真へ"
        >
          ←
        </button>
        <p className="text-ivory/70 text-sm tabular-nums" aria-live="polite">
          {current + 1} / {historyItems.length}
        </p>
        <button
          type="button"
          onClick={() => scrollToIndex(current + 1)}
          className="w-11 h-11 rounded-full border border-ivory/40 text-ivory hover:border-gold-soft hover:text-gold-soft transition-colors"
          aria-label="次の写真へ"
        >
          →
        </button>
        {!reducedMotion && (
          <button
            type="button"
            onClick={() => setPaused((v) => !v)}
            aria-pressed={paused}
            className="ml-2 h-11 px-5 rounded-full border border-ivory/40 text-ivory/90 text-sm hover:border-gold-soft hover:text-gold-soft transition-colors"
          >
            {paused ? "自動再生する" : "自動再生を止める"}
          </button>
        )}
      </div>
    </div>
  );
}

/**
 * 過去の授賞式をたどる「写真回廊」。
 */
export function HistoryGallery() {
  const hasPhotos = historyItems.some((item) => item.image);
  if (!hasPhotos) return <HistoryGalleryAnticipation />;
  return <HistoryGalleryCarousel />;
}
