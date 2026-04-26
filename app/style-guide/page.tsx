import type { Metadata } from "next";
import { HesperusStyleGuide } from "@/components/HesperusStyleGuide";

export const metadata: Metadata = {
  title: "Hesperus Style Guide",
  description: "Temporary internal style guide for the Hesperus landing page.",
};

export default function StyleGuidePage() {
  return <HesperusStyleGuide />;
}
