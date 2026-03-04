import Hero from "./Components/Hero";
import Features from "./Components/Features";
import LivePreview from "./Components/LivePreview";
import PopularComponents from "./Components/PopularComponents";

export default function Home() {
  return (
    <main className="pt-10">
      <Hero />
      <Features />
      <LivePreview />
      <PopularComponents />
    </main>
  );
}
