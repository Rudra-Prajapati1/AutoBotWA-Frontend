import Features from "./sections/Features";
import Footer from "./sections/Footer";
import Header from "./components/Header";
import Hero from "./sections/Hero";
import Pricing from "./sections/Pricing";
import Testimonials from "./sections/Testimonials";

export default function Home() {
  return (
    <main className="flex flex-col">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <Features />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Pricing Section */}
      <Pricing />

      {/* Footer */}
      <Footer />
    </main>
  );
}
