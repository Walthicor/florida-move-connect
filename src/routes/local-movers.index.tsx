import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/local-movers/")({
  beforeLoad: () => {
    throw redirect({ to: "/local-movers-in-florida/", statusCode: 301 });
  },
  component: () => null,
});
