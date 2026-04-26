import type { Metadata } from "next";
import { HesperusLanding } from "@/components/HesperusLanding";

export const metadata: Metadata = {
  title: "Hesperus",
  description:
    "Hesperus helps your team show up in the right YouTube conversations with high-quality, human-approved comment workflows.",
};

export default function Page() {
  return <HesperusLanding />;
}
