/**
 * 蒲池良平先生の紹介データ
 *
 * photo:写真が用意できたら public/images/ryohei/ に置き、パスを記入してください。
 * career / words / episodes / comments:確定した内容が届き次第、追加してください。
 * 空の間、該当ブロックは表示されません。推測で埋めないでください。
 */

export const ryoheiProfile = {
  name: "蒲池 良平",
  nameReading: "かまち りょうへい",
  affiliation: "新久喜総合病院",
  position: "副院長",
  /** 写真パス */
  photo: "/images/ryohei/ryohei-kamachi.png",
  /** 紹介文(段落ごとの配列・凝縮版) */
  introduction: [
    "蒲池良平先生は、新久喜総合病院の副院長として、患者さん一人ひとりに真摯に向き合い、医療の現場を駆け抜けられました。ともに働くスタッフにも丁寧に向き合い、仲間を信じ、相手の立場を尊重する姿勢を大切にされていました。",
    "その志は、先生とともに働いた人々の中に今も息づいています。良平アワードは、その志を次の世代へと確かに受け継いでいくために創設されました。",
  ],
  /** 略歴(確定後に追加) */
  career: [] as string[],
  /** 印象に残っている言葉(確定後に追加) */
  words: [] as string[],
  /** 周囲の方からのコメント(確定後に追加) */
  comments: [] as { text: string; from: string }[],
};
