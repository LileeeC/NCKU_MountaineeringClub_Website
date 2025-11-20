// 所有頁面內容的「版心」，控制寬度和左右留白

type Props = {
  children: React.ReactNode;
};

export default function Container({ children }: Props) {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
      {children}
    </div>
  );
}
