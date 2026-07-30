import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/movers-in-sarasota/")({
  beforeLoad: () => {
    throw redirect({ to: "/local-movers-in-florida/", statusCode: 301 });
  },
  component: () => null,
});
