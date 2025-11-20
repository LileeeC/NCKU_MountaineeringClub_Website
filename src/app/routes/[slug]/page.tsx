// src/app/routes/[slug]/page.tsx
import Link from "next/link";

// 1. 定義 params 的型別為 Promise (這是 Next.js 15+ 的新規定)
type Props = {
  params: Promise<{ slug: string }>;
};

// 2. 把元件變成 async function
export default async function RoutePostPage(props: Props) {
  // 3. 使用 await 解開 params
  const params = await props.params;
  const { slug } = params;

  return (
    <div className="max-w-4xl mx-auto px-8 py-12">
      {/* 文章標題 */}
      <header className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          文章 Slug: {slug}
        </h1>
        <div className="text-gray-500">2024/03/20 • 高山隊伍 • 作者：山協小編</div>
      </header>

      {/* 文章內容區塊 */}
      <article className="prose prose-lg max-w-none text-gray-700">
        
        <div className="w-full h-[400px] bg-gray-100 rounded-xl border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-400 mb-8">
          [未來這裡是 GPX 地圖] <br/>
          目前讀到的 Slug 是: {slug}
        </div>

        <p>
          這裡是用戶點擊列表後進入的內頁。
          Next.js 15 以後，讀取網址參數必須使用 await。
        </p>
        
        <div className="my-8 w-full h-64 bg-gray-200 rounded flex items-center justify-center text-gray-500">
          [Notion 裡的照片會顯示在這裡]
        </div>
      </article>

      {/* 底部導航 */}
      <div className="mt-20 border-t pt-8 text-center">
        <Link href="/routes" className="text-blue-600 hover:underline">
          ← 返回隊伍紀錄列表
        </Link>
      </div>
    </div>
  );
}