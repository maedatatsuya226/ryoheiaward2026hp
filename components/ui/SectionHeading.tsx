type SectionHeadingProps = {
  /** 英字の小見出し(例:ABOUT) */
  label?: string;
  title: string;
  /** 暗い背景で使う場合 true */
  onDark?: boolean;
  align?: "left" | "center";
};

export function SectionHeading({
  label,
  title,
  onDark = false,
  align = "center",
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      {label && (
        <p
          className={`text-xs tracking-[0.35em] uppercase mb-3 ${
            onDark ? "text-gold-soft" : "text-gold"
          }`}
        >
          {label}
        </p>
      )}
      <h2
        className={`text-2xl md:text-4xl leading-relaxed ${
          onDark ? "text-ivory" : "text-navy"
        }`}
      >
        {title}
      </h2>
      <div
        className={`mt-5 h-px w-14 bg-gold ${
          align === "center" ? "mx-auto" : ""
        }`}
        aria-hidden="true"
      />
    </div>
  );
}
