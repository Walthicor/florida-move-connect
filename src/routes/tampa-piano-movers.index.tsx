import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/tampa-piano-movers/")({
  beforeLoad: () => {
    throw redirect({ to: "/piano-movers-tampa/", statusCode: 301 });
  },
  component: () => null,
});
