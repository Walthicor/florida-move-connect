import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/cookie-policy-eu/")({
  beforeLoad: () => {
    throw redirect({ to: "/privacy-policy/", statusCode: 301 });
  },
  component: () => null,
});
