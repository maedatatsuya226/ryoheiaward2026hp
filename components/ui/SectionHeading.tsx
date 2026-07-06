type SectionHeadingProps = {
  /** 英字の小見出し(例:ABOUT) */
  label?: string;
  title: string;
  /** 暗い背景で使う場合 true */
  onDark?: boolean;
  align?: "left" | "center";
  /**
   * default … 英字ラベル + 見出し + 短い金線(中央)
   * editorial … 左ボーダー + 見出し(ラベル任意)
   * minimal … 見出しのみ(装飾なし)
   * wide … 見出し下に幅広の薄いライン
   */
  variant?: "default" | "editorial" | "minimal" | "wide";
};

export function SectionHeading({
  label,
  title,
  onDark = false,
  align = "center",
  variant = "default",
}: SectionHeadingProps) {
  const textColor = onDark ? "text-ivory" : "text-navy";
  const labelColor = onDark ? "text-gold-soft" : "text-gold";
  const alignClass = align === "center" ? "text-center" : "text-left";

  if (variant === "editorial") {
    return (
      <div className={`${alignClass} ${align === "center" ? "mx-auto max-w-fit" : ""}`}>
        <div
          className={`border-l-2 ${onDark ? "border-gold-soft" : "border-gold"} pl-5 md:pl-6`}
        >
          {label && (
            <p className={`text-xs tracking-[0.25em] uppercase mb-2 ${labelColor}`}>
              {label}
            </p>
          )}
          <h2 className={`text-2xl md:text-3xl leading-relaxed ${textColor}`}>{title}</h2>
        </div>
      </div>
    );
  }

  if (variant === "minimal") {
    return (
      <div className={alignClass}>
        <h2 className={`text-xl md:text-2xl leading-relaxed tracking-wide ${textColor}`}>
          {title}
        </h2>
      </div>
    );
  }

  if (variant === "wide") {
    return (
      <div className={alignClass}>
        {label && (
          <p className={`text-xs tracking-[0.3em] uppercase mb-3 ${labelColor}`}>{label}</p>
        )}
        <h2 className={`text-2xl md:text-4xl leading-relaxed ${textColor}`}>{title}</h2>
        <div
          className={`mt-6 h-px ${onDark ? "bg-ivory/20" : "bg-navy/10"} ${
            align === "center" ? "mx-auto w-full max-w-md" : "w-full"
          }`}
          aria-hidden="true"
        />
      </div>
    );
  }

  return (
    <div className={alignClass}>
      {label && (
        <p className={`text-xs tracking-[0.35em] uppercase mb-3 ${labelColor}`}>{label}</p>
      )}
      <h2 className={`text-2xl md:text-4xl leading-relaxed ${textColor}`}>{title}</h2>
      <div
        className={`mt-5 h-px w-14 ${onDark ? "bg-gold-soft" : "bg-gold"} ${
          align === "center" ? "mx-auto" : ""
        }`}
        aria-hidden="true"
      />
    </div>
  );
}
