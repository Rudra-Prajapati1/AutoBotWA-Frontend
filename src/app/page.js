import Header from "./components/Header";
import Hero from "./sections/Hero";
import Features from "./sections/Features";
import Testimonials from "./sections/Testimonials";
import Pricing from "./sections/Pricing";
import Footer from "./sections/Footer";

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-linear-to-br from-gray-50 via-white to-gray-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-950">
        <Header />
        <Hero />
        <Features />
        <Testimonials />
        <Pricing />
        <Footer />
      </div>
    </>
  );
}
