import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/furniture-movers/")({
  beforeLoad: () => {
    throw redirect({ to: "/packing-services/", statusCode: 301 });
  },
  component: () => null,
});
