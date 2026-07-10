import type { Metadata } from "next";
import { EditorialPage } from "@/components/editorial/EditorialPage";

export const metadata: Metadata = {
  title: "Wersja 1C — zespół: jeden akapit",
  robots: { index: false, follow: false },
};

export default function V1C() {
  return <EditorialPage team="collective" />;
}
