import { LectureItem } from "@/lib/dummy";

export default function LectureCard({ item }: { item: LectureItem }) {
  return (
    <div>
      <div className="h-40 w-full rounded-lg bg-neutral-200" aria-hidden />
      <div className="mt-2 text-sm text-neutral-500">{item.date}</div>
      <h3 className="truncate text-base font-medium">{item.title}</h3>
      <p className="line-clamp-2 text-sm text-neutral-600">{item.abstract}</p>
    </div>
  );
}
