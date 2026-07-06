/**
 * eventInfo.date(例:"2026年11月26日(木)")から表示用パーツを導出する。
 * データに存在しない値は作らない(dateがnullならnullを返す)。
 */
export function parseEventDateParts(date: string | null) {
  if (!date) return null;
  const m = date.match(/(\d{1,2})月(\d{1,2})日(?:[^月火水木金土日]*([月火水木金土日]))?/);
  if (!m) return null;
  const weekdayEn: Record<string, string> = {
    月: "MONDAY",
    火: "TUESDAY",
    水: "WEDNESDAY",
    木: "THURSDAY",
    金: "FRIDAY",
    土: "SATURDAY",
    日: "SUNDAY",
  };
  return {
    month: m[1],
    day: m[2],
    weekday: m[3] ? weekdayEn[m[3]] : null,
  };
}
