type Props = {
  years?: number[];
  categories?: string[];
  title?: string;
};

export default function Sidebar({ years = [], categories = [], title }: Props) {
  return (
    <aside className="w-full md:w-56 shrink-0">
      {title && <h2 className="mb-4 text-lg font-semibold">{title}</h2>}

      {years.length > 0 && (
        <div className="mb-6">
          <div className="mb-1 text-sm font-medium">YEAR</div>
          <ul className="space-y-1 text-neutral-700">
            {years.map((y) => (
              <li key={y} className="cursor-default hover:underline">{y}</li>
            ))}
          </ul>
        </div>
      )}

      {categories.length > 0 && (
        <div>
          <div className="mb-1 text-sm font-medium">CATEGORIES</div>
          <ul className="space-y-1 text-neutral-700">
            {categories.map((c) => (
              <li key={c} className="cursor-default hover:underline">{c}</li>
            ))}
          </ul>
        </div>
      )}
    </aside>
  );
}
