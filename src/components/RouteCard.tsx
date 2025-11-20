// RouteCard.tsx
import Link from "next/link";
import type { RouteItem } from "@/lib/routes";

export default function RouteCard({ route }: { route: RouteItem }) {
  return (
    <Link href={`/routes/${route.slug}`} className="block">
      <div className="h-40 w-full rounded-lg bg-neutral-200" aria-hidden />
      <div className="mt-2 text-sm text-neutral-500">{route.date}</div>
      <h3 className="truncate text-base font-medium">{route.title}</h3>
    </Link>
  );
}
