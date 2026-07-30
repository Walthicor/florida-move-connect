import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/mudanzas-f/")({
  beforeLoad: () => {
    throw redirect({ to: "/es/", statusCode: 301 });
  },
  component: () => null,
});
