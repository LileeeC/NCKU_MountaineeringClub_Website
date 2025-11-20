// 這個畫面會大致長成你 Home wireframe 的骨架：上面一張大圖、兩格文字、下面三張卡片

import Container from "@/components/Container";

export default function HomePage() {
  return (
    <Container>
      {/* Hero 區塊 */}
      <div className="my-6 h-64 w-full rounded-xl bg-neutral-200" aria-hidden />

      {/* 兩欄簡介（之後可以改成社團介紹、出隊理念） */}
      <div className="grid gap-6 md:grid-cols-2">
        <section>
          <h2 className="mb-3 text-xl font-semibold">關於登山社</h2>
          <p className="text-sm leading-6 text-neutral-700">
            這裡先放簡單的介紹文字，你之後可以換成真正的內容。
          </p>
        </section>
        <section>
          <h2 className="mb-3 text-xl font-semibold">最新隊伍 / 活動</h2>
          <p className="text-sm leading-6 text-neutral-700">
            這裡可以放近期出隊、講座或公告的摘要。
          </p>
        </section>
      </div>

      {/* 底下三張卡片，對應你 wireframe 裡的 sub page cards */}
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {[1, 2, 3].map((i) => (
          <article key={i} className="rounded-xl border p-4">
            <div
              className="mb-3 h-32 w-full rounded-lg bg-neutral-200"
              aria-hidden
            />
            <h3 className="text-base font-medium">
              sub page title and brief introduction
            </h3>
          </article>
        ))}
      </div>
    </Container>
  );
}
