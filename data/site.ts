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

/**
 * 受賞者発表に関する文言(サイト全体で共通利用)
 *
 * 現方針:受賞者は授賞式当日に発表。
 * 方針が「開催前に告知」へ変わった場合は、ここの文言を
 * 「受賞者は近日発表」「まもなく、ここから光ります。」等に書き換えるだけでよい。
 */
export const awardeesNotice = {
  /** 短い表記(ヒーローのボタンなど) */
  short: "受賞者は当日発表",
  /** フッター用 */
  footer: "受賞者は当日発表します",
  /** 受賞者一覧ページの年度カード用 */
  yearCard: "受賞者は当日発表します",
  /** 導線セクションの見出し(「光」の字はgoldtextで強調表示される) */
  teaserTitle: "当日、ここから光ります。",
  /** 導線セクションの本文 */
  teaserBody: "受賞者の発表は表彰式のクライマックス。その瞬間まで、どうぞお楽しみに。",
  /** 導線セクションの添え書き */
  teaserNote: "表彰式の後、このページでご紹介します",
  /** 受賞者ページ(発表前)の本文 */
  pageLead: "受賞者は表彰式当日に発表します。発表の後、このページで受賞者の行動や思いをご紹介します。",
  /** 開催概要の「受賞者」欄 */
  overviewValue: "当日発表",
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
