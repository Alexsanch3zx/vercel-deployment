import { About } from "@/components/About";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";

export default function Home() {
  return (
    <main>
      <Hero />
      <Projects />
      <About />
      <Footer />
    </main>
  );
}
