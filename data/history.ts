/**
 * 写真回廊(過去の授賞式)のデータ
 *
 * 写真が用意できたら public/images/history/ に画像を置き、
 * image に "/images/history/ファイル名.webp" を記入してください。
 * image が null の間は「写真は準備中です」のプレースホルダーが表示されます。
 *
 * 年度・キャプションは仮のものです。確定情報に差し替えてください。
 */

export type HistoryItem = {
  /** 年度表示(例:"2023") */
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
    year: "2023",
    title: "第1回 良平アワード",
    caption: "想いをつなぐ最初の一歩",
    image: null,
  },
  {
    year: "",
    title: "授賞式のひとこま",
    caption: "仲間への敬意があふれた時間",
    image: null,
  },
  {
    year: "",
    title: "会場の様子",
    caption: "笑顔と拍手に包まれた授賞式",
    image: null,
  },
  {
    year: "",
    title: "表彰の瞬間",
    caption: "日々の行いに光が当たる瞬間",
    image: null,
  },
  {
    year: "",
    title: "受賞者とともに",
    caption: "志が次の世代へ受け継がれる瞬間",
    image: null,
  },
  {
    year: "",
    title: "閉会のとき",
    caption: "また明日からの現場へ",
    image: null,
  },
];
