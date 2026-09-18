/**
 * 受賞者データ(2026-09 受賞13件 確定・事前発表)
 *
 * 公開は data/site.ts の siteStatus.awardeesPublished で切り替え。
 * photo:写真が用意できたら public/images/awardees/ に置き、パスを記入してください。
 * reason / nominatorComment / awardeeComment:内容が届き次第追加してください(空の間は非表示)。
 */

export type Awardee = {
  /** 受賞者名(チームの場合はチーム名・代表者) */
  name: string;
  /** 所属(病院 / 部署) */
  affiliation: string;
  /** 受賞部門 */
  category: string;
  /** 取り組みタイトル */
  title?: string;
  /** 受賞理由 */
  reason?: string;
  /** 推薦者コメント */
  nominatorComment?: string;
  /** 本人コメント */
  awardeeComment?: string;
  /** 写真パス(例:"/images/awardees/xxx.webp") */
  photo?: string | null;
};

/** 良平アワード2026 受賞者(部門ごとの掲載順) */
export const awardees2026: Awardee[] = [
  // ============ 看護部門 ============
  {
    name: "渡邉 岳人",
    affiliation: "福岡和白病院 / 看護部",
    category: "看護部門",
    title:
      "救急看護の道を拓き、次世代へつなぐ～一人の挑戦が、人を育て、チームを作り、医療を変えた23年",
  },
  {
    name: "栄養科 代表(管理栄養士 今石美和係長)",
    affiliation: "新行橋病院 / 栄養科",
    category: "看護部門",
    title: "栄養管理の質の向上に寄与した栄養科の長年にわたる功績",
  },
  {
    name: "西口 沙也加",
    affiliation: "新久喜総合病院 / 看護部",
    category: "看護部門",
    title: "乳がん看護認定看護師としての実践～患者支援・後進育成を通して～",
  },
  {
    name: "樋󠄀渡 美紀",
    affiliation: "新行橋病院 / ひかりLaboCoCoKaLa",
    category: "看護部門",
    title:
      "院内を守る感染対策から地域を守る感染対策へ～院内を飛び出した感染管理看護師の挑戦～",
  },
  // ============ 事務部門 ============
  {
    name: "診療情報管理室・医事課チーム(今泉 美和)",
    affiliation: "新久喜総合病院 / 医事課",
    category: "事務部門",
    title: "DPC向上隊～DPC特定病院群と係数UPに向けて～",
  },
  {
    name: "檜室 奈歩",
    affiliation: "下関リハビリテーション病院 / 総務課",
    category: "事務部門",
    title: "100％登録！休業者と組織をつなぐLINEのかけはし",
  },
  {
    name: "諸岡 裕明",
    affiliation: "社会医療法人社団埼玉巨樹の会 新久喜総合病院 / 医事課",
    category: "事務部門",
    title: "映像でつなぐ、医療と人",
  },
  // ============ 医技部門 ============
  {
    name: "3Dプリンターチーム",
    affiliation: "小金井リハビリテーション病院 / リハビリテーション科",
    category: "医技部門",
    title: "『できない』を『できる』に！！生活課題を解決する自助具開発",
  },
  {
    name: "茂山 真悠子",
    affiliation: "新小文字病院 / 薬剤科",
    category: "医技部門",
    title: "現場をつなぎ、仕組みをつくる～薬剤師として実践した臨床支援と業務改善～",
  },
  {
    name: "医療技術部勉強会チーム(代表 磯嶋博子)",
    affiliation: "福岡新水巻病院 / 医療技術部",
    category: "医技部門",
    title: "ひとつの症例を多角的に～専門性を繋いだ症例検討会～",
  },
  {
    name: "失語症サロンとST育成",
    affiliation: "新武雄病院 / リハビリテーション科",
    category: "医技部門",
    title:
      "地域に寄り添った、言語聴覚士による「失語症サロン」の継続運営と若手育成",
  },
  // ============ 多職種部門 ============
  {
    name: "摂食嚥下チーム",
    affiliation: "赤羽リハビリテーション病院",
    category: "多職種部門",
    title: "「食べる幸せ」を支える摂食嚥下機能支援",
  },
  {
    name: "排尿自立支援チーム",
    affiliation: "小金井リハビリテーション病院",
    category: "多職種部門",
    title: "排尿自立支援の最前線～チームが変える、患者の未来～",
  },
];

/** 年度一覧(年度を追加する場合はここに足す) */
export const awardYears = [
  {
    year: "2026",
    title: "良平アワード2026",
    href: "/awardees/2026",
  },
];
