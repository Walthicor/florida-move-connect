import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/moving-storage/")({
  beforeLoad: () => {
    throw redirect({ to: "/storage-solutions/" });
  },
  component: () => null,
});
