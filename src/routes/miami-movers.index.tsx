import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/miami-movers/")({
  beforeLoad: () => {
    throw redirect({ to: "/movers-in-miami/", statusCode: 301 });
  },
  component: () => null,
});
