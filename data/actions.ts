/**
 * 「良平アワードが光を当てる行動」の5項目
 *
 * image に写真パスを入れると、プレースホルダーの代わりに写真が表示されます。
 * (例:"/images/actions/action-01.webp")
 */

export type ActionItem = {
  title: string;
  text: string;
  image: string | null;
};

export const actionItems: ActionItem[] = [
  {
    title: "患者さんに寄り添う",
    text: "不安な気持ちに気づき、そばに立ち続けること。治療だけでは届かない安心を、日々のかかわりが支えています。",
    image: null,
  },
  {
    title: "仲間を支える",
    text: "忙しい現場で、そっと手を貸し、声をかける。仲間を信じ、支え合う姿勢が、チームの力になります。",
    image: null,
  },
  {
    title: "小さな変化に気づく",
    text: "昨日と違う表情、わずかな数値の揺らぎ。小さな気づきの積み重ねが、大きな安全を守ります。",
    image: null,
  },
  {
    title: "誰かのために手を伸ばす",
    text: "自分の担当かどうかではなく、目の前の誰かのために動く。その一歩が、現場の温かさをつくります。",
    image: null,
  },
  {
    title: "誠実な努力を積み重ねる",
    text: "誰も見ていなくても、静かに続けられる努力。医療は、その積み重ねの上に成り立っています。",
    image: null,
  },
];
