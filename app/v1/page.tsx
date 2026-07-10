import type { Metadata } from "next";
import { EditorialPage } from "@/components/editorial/EditorialPage";

export const metadata: Metadata = {
  title: "Wersja 1 - Editorial",
  robots: { index: false, follow: false },
};

export default function V1() {
  return <EditorialPage team="original" />;
}
