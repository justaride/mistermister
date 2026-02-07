import { NoiseOverlay } from "./components/NoiseOverlay";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { MisterGrid } from "./components/MisterGrid";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-fg">
      <NoiseOverlay />
      <Header />
      <HeroSection />
      <MisterGrid />
      <Footer />
    </div>
  );
}
