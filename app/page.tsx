import type { Metadata } from "next";
import { HesperusLanding } from "@/components/HesperusLanding";

export const metadata: Metadata = {
  title: "Hesperus",
  description:
    "Hesperus is the internal engine behind a managed service that turns high-traffic YouTube conversations into qualified inbound leads.",
};

export default function Page() {
  return <HesperusLanding />;
}
