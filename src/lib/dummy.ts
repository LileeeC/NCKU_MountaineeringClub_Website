// 假資料，用來在開發階段模擬從 Notion 抓到的資料
export type RouteItem = {
  slug: string;
  title: string;
  date: string;
  year: number;
  category: string;
};

export type LectureItem = {
  title: string;
  date: string;
  year: number;
  abstract: string;
};

export const ROUTES: RouteItem[] = [
  { slug: "hehuan-2025", title: "合歡北峰縱走", date: "2025-01-20", year: 2025, category: "百岳" },
  { slug: "qilai-2024", title: "奇萊南華", date: "2024-12-12", year: 2024, category: "百岳" }
];

export const LECTURES: LectureItem[] = [
  { title: "登山安全講座", date: "2025-04-18", year: 2025, abstract: "高山症、天氣判斷、行前規劃..." },
  { title: "地圖判讀技巧", date: "2024-11-05", year: 2024, abstract: "如何看等高線、找路線..." }
];

export const YEARS = [2025, 2024, 2023, 2022];

export const CATEGORIES = ["百岳", "中級山岳", "溪谷溯行", "郊山", "大縱走"];
