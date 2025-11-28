import ThemeToggle from "./ThemeToggle";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-gray-200/60 dark:border-gray-800/60 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 py-5 lg:px-10 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center space-x-3 group"
          aria-label="AutoBotWA - Home"
          data-aos="fade-right"
          data-aos-duration="800"
          data-aos-delay="100"
        >
          <div className="w-9 h-9 rounded-lg bg-emerald-600 flex items-center justify-center">
            <span className="text-white font-bold text-lg">A</span>
          </div>
          <h1 className="text-2xl font-semibold tracking-tight">
            AutoBot<span className="text-emerald-600">WA</span>
          </h1>
        </Link>

        <ThemeToggle />
      </div>
    </header>
  );
}
