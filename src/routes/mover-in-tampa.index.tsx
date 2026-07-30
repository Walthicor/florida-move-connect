import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/mover-in-tampa/")({
  beforeLoad: () => {
    throw redirect({ to: "/movers-in-tampa/", statusCode: 301 });
  },
  component: () => null,
});
