type PhotoPlaceholderProps = {
  /** プレースホルダー内に小さく表示する説明(例:「写真は準備中です」) */
  label?: string;
  className?: string;
};

/**
 * 実写真が届くまでの差し替え前提プレースホルダー。
 * ダミー人物写真は使わず、サイトのトーンに合わせた静かな面で示す。
 */
export function PhotoPlaceholder({
  label = "写真は準備中です",
  className = "",
}: PhotoPlaceholderProps) {
  return (
    <div
      role="img"
      aria-label={label}
      className={`relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-navy via-navy-soft to-navy-deep ${className}`}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse at 30% 20%, rgba(223, 207, 170, 0.35), transparent 60%)",
        }}
      />
      <div className="relative text-center px-6">
        <div
          aria-hidden="true"
          className="mx-auto mb-3 h-px w-10 bg-gold-soft/70"
        />
        <p className="text-ivory/80 text-xs md:text-sm tracking-widest">
          {label}
        </p>
        <div
          aria-hidden="true"
          className="mx-auto mt-3 h-px w-10 bg-gold-soft/70"
        />
      </div>
    </div>
  );
}
