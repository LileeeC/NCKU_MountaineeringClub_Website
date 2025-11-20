// src/lib/routes.ts
// import { Client } from "@notionhq/client"; 

export type RouteItem = {
  slug: string;
  title: string;
  date: string;
  year: number;
  category: string;
};

function getPlainText(rich: any[] | undefined) {
  if (!rich || rich.length === 0) return "";
  return rich.map((r) => r.plain_text).join("");
}

export async function fetchRoutes(): Promise<RouteItem[]> {
  const ROUTES_DB_ID = process.env.NOTION_ROUTES_DB_ID;
  const TOKEN = process.env.NOTION_TOKEN;

  if (!ROUTES_DB_ID || !TOKEN) {
    console.error("❌ 錯誤：找不到 Notion ID 或 Token");
    return [];
  }

  try {
    console.log("🚀 [Fetch Mode] 正在連線 Notion API...");

    // 🔥 使用原生 fetch 直接呼叫 API
    // 這樣絕對不會有 "is not a function" 的問題，因為這只是發送網請求
    const res = await fetch(`https://api.notion.com/v1/databases/${ROUTES_DB_ID}/query`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${TOKEN}`,
        "Notion-Version": "2022-06-28", // 指定 API 版本
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        filter: {
          property: "Published", // ⚠️ 請確認 Notion 欄位名稱
          checkbox: {
            equals: true,
          },
        },
        sorts: [
          {
            property: "Date", // ⚠️ 請確認 Notion 欄位名稱
            direction: "descending",
          },
        ],
      }),
      next: { revalidate: 60 } // 每 60 秒快取更新一次 (ISR)
    });

    if (!res.ok) {
      const errorData = await res.json();
      console.error("❌ Notion 回傳錯誤:", errorData);
      return [];
    }

    const data = await res.json();
    console.log(`✅ 成功抓到 ${data.results.length} 筆資料`);

    return data.results.map((page: any) => {
      const props = page.properties;

      const title = getPlainText(props.Name?.title || props.活動名稱?.title); 
      const date = props.Date?.date?.start || props.發布日期?.date?.start || "";
      
      const year = date ? new Date(date).getFullYear() : 0;
      
      const category = 
        props.Category?.select?.name || 
        props.活動標籤?.select?.name || 
        props.活動標籤?.multi_select?.[0]?.name ||
        "未分類";

      const slugFromDb = getPlainText(props.Slug?.rich_text || props.網址代稱?.rich_text);
      const slug = slugFromDb || page.id.replace(/-/g, "");

      return { slug, title, date, year, category };
    });

  } catch (error) {
    console.error("💥 API 連線失敗:", error);
    return [];
  }
}