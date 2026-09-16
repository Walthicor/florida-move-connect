import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/moving-and-storage-in-florida/")({
  beforeLoad: () => {
    throw redirect({ to: "/storage-solutions/", statusCode: 301 });
  },
  component: () => null,
});
