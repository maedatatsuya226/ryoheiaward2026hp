/**
 * 写真回廊(過去の授賞式)のデータ
 *
 * 写真は public/images/history/ に配置し、
 * image に "/images/history/ファイル名" を記入してください。
 */

export type HistoryItem = {
  /** 年度表示(例:"2024") */
  year: string;
  /** タイトル(例:"第1回 良平アワード") */
  title: string;
  /** 短いキャプション */
  caption: string;
  /** 画像パス(未提供の間は null) */
  image: string | null;
};

export const historyItems: HistoryItem[] = [
  {
    year: "2024",
    title: "第1回 良平アワード",
    caption: "表彰状授与の瞬間",
    image: "/images/history/history-2024-01.jpg",
  },
  {
    year: "2024",
    title: "第1回 記念写真",
    caption: "ともに志を受け継ぐ仲間たち",
    image: "/images/history/history-2024-02.jpg",
  },
];
