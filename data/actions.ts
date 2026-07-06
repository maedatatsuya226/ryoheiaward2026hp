/**
 * 「良平アワードが光を当てる行動」(3項目)
 */

export type ActionItem = {
  title: string;
  text: string;
  image: string | null;
  /** 表示時の object-position (例:"center top") */
  objectPosition?: string;
};

export const actionItems: ActionItem[] = [
  {
    title: "患者さんに寄り添う",
    text: "不安な気持ちに気づき、そばに立ち続けること。治療だけでは届かない安心を、日々のかかわりが支えています。",
    image: "/images/actions/action-01-patient.jpg",
    objectPosition: "center center",
  },
  {
    title: "仲間を支える",
    text: "忙しい現場で、そっと手を貸し、声をかける。仲間を信じ、支え合う姿勢が、チームの力になります。",
    image: "/images/actions/action-02-team.jpg",
    objectPosition: "center center",
  },
  {
    title: "誰かのために手を伸ばす",
    text: "自分の担当かどうかではなく、目の前の誰かのために動く。その一歩が、現場の温かさをつくります。",
    image: "/images/actions/action-03-reach.jpg",
    objectPosition: "50% 12%",
  },
];
