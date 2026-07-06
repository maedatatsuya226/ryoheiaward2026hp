/**
 * 受賞者データ
 *
 * 表彰後に確定情報を記入し、data/site.ts の siteStatus.awardeesPublished を true にすると
 * 受賞者ページが公開されます。
 * 架空の受賞者を仮で入れないでください。
 */

export type Awardee = {
  /** 受賞者名 */
  name: string;
  /** 所属 */
  affiliation: string;
  /** 受賞部門 */
  category: string;
  /** 受賞理由 */
  reason?: string;
  /** 推薦者コメント */
  nominatorComment?: string;
  /** 本人コメント */
  awardeeComment?: string;
  /** 写真パス(例:"/images/awardees/xxx.webp") */
  photo?: string | null;
};

/** 良平アワード2026 受賞者(表彰後に記入) */
export const awardees2026: Awardee[] = [];

/** 年度一覧(年度を追加する場合はここに足す) */
export const awardYears = [
  {
    year: "2026",
    title: "良平アワード2026",
    href: "/awardees/2026",
  },
];
