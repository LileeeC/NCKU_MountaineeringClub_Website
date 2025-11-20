import Container from "@/components/Container";
import RouteCard from "@/components/RouteCard";
import { fetchRoutes } from "@/lib/routes";

export default async function RoutesPage() {
  const routes = await fetchRoutes();

  return (
    <Container>
      <h1 className="my-6 text-2xl font-semibold">隊伍紀錄</h1>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {routes.map((r) => (
          <RouteCard key={r.slug} route={r} />
        ))}
      </div>
    </Container>
  );
}
