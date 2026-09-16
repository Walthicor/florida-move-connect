import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/blog/moving-to-florida-guide/")({
  beforeLoad: () => {
    throw redirect({ to: "/blog/interstate-move-to-florida-timeline/", statusCode: 301 });
  },
  component: () => null,
});
