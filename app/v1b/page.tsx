import type { Metadata } from "next";
import { EditorialPage } from "@/components/editorial/EditorialPage";

export const metadata: Metadata = {
  title: "Wersja 1B — zespół: kompaktowe portrety",
  robots: { index: false, follow: false },
};

export default function V1B() {
  return <EditorialPage team="compact" />;
}
