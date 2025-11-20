import Link from "next/link";
import Container from "./Container";

export default function Header() {
  return (
    <header className="border-b">
      <Container>
        <div className="flex h-16 items-center justify-between">
          {/* 左邊：logo / title */}
          <Link href="/" className="text-xl font-semibold">
            title &amp; logo
          </Link>

          {/* 中間：sub page 導覽（桌機版顯示） */}
          <nav className="hidden gap-6 md:flex">
            <Link href="/routes" className="text-sm hover:underline">
              sub page title
            </Link>
            <Link href="/lectures" className="text-sm hover:underline">
              sub page title
            </Link>
            <Link href="/routes" className="text-sm hover:underline">
              sub page title
            </Link>
          </nav>

          {/* 右邊：fb/ig 按鈕 */}
          <a
            href="#"
            className="rounded border px-3 py-1 text-sm hover:bg-neutral-100"
          >
            fb/ig
          </a>
        </div>
      </Container>
    </header>
  );
}
