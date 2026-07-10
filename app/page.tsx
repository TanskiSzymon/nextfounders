import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Manifest } from "@/components/Manifest";
import { Founders } from "@/components/Founders";
import { Selection } from "@/components/Selection";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Manifest />
        <Founders />
        <Selection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
