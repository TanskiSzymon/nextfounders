import type { Metadata } from "next";
import { EditorialPage } from "@/components/editorial/EditorialPage";

export const metadata: Metadata = {
  title: "Wersja 1A — zespół: lista redakcyjna",
  robots: { index: false, follow: false },
};

export default function V1A() {
  return <EditorialPage team="rows" />;
}
