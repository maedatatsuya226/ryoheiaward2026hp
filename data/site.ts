/**
 * サイト全体の設定・開催情報
 *
 * 未確定の項目は null のままにしてください。
 * null の項目は画面上「詳細は近日公開」と表示されるか、非表示になります。
 * 架空の日付・主催者名などを仮で入れないでください。
 */

/** 公開状態の切り替え */
export const siteStatus = {
  /** 受賞者情報を公開するか(表彰後に true へ) */
  awardeesPublished: false,
};

/** 開催概要 */
export const eventInfo = {
  title: "良平アワード2026",
  titleEn: "RYOHEI AWARD 2026",
  venue: "令和健康科学大学",
  /** 開催日 */
  date: "2026年11月26日（木）",
  /** 開催時間(例:"13:00〜16:00") */
  time: null as string | null,
  /** 主催者名 */
  organizer: "良平アワード基金",
  /** 問い合わせ先 */
  contact: null as string | null,
};

/** 会場・アクセス情報(確定後に記入) */
export const venueInfo = {
  name: "令和健康科学大学",
  /** 住所(確定後に記入) */
  address: null as string | null,
  /** アクセス案内(確定後に記入) */
  access: null as string | null,
  /** 駐車場案内(確定後に記入) */
  parking: null as string | null,
};

/** 当日のプログラム(確定後に追加。空の間はセクション自体が非表示) */
export type ProgramItem = {
  time: string;
  title: string;
  description?: string;
};

export const programItems: ProgramItem[] = [];

/** SEO・メタ情報 */
export const siteMeta = {
  title: "良平アワード2026|志を受け継ぎ、日々の行いに光を",
  description:
    "良平アワード2026の公式Webサイトです。故・蒲池良平先生の志を受け継ぎ、医療現場で日々積み重ねられる誠実な行いに光を当てます。",
  /** 本番ドメイン確定後に記入(例:"https://ryohei-award.example.jp")。null の間は canonical / OGP URL を出力しない */
  url: null as string | null,
  /** SNS共有用画像(差し替え可) */
  ogImage: "/logo/ryohei-award-2026.png",
};
