import Container from "@/components/Container";
import Sidebar from "@/components/Sidebar";
import LectureCard from "@/components/LectureCard";
import { LECTURES, YEARS } from "@/lib/dummy";

export default function LecturesPage() {
  return (
    <Container>
      <h1 className="my-6 text-2xl font-semibold">講座紀錄</h1>

      <div className="flex gap-6">
        {/* 左側 Year */}
        <Sidebar years={YEARS} />

        {/* 中間卡片 */}
        <div className="grid flex-1 grid-cols-1 gap-6 md:grid-cols-3">
          {LECTURES.map((l, i) => (
            <LectureCard key={i} item={l} />
          ))}
        </div>

        {/* 右側 placeholder */}
        <div className="hidden w-56 shrink-0 md:block">
          <div className="grid gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-40 w-full rounded-lg bg-neutral-200" />
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}
