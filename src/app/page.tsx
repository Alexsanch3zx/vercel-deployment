import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Inquire } from "@/components/Inquire";
import { Practice } from "@/components/Practice";
import { Work } from "@/components/Work";

export default function Home() {
  return (
    <main>
      <Hero />
      <Practice />
      <Work />
      <Inquire />
      <Footer />
    </main>
  );
}
