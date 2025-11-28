import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 lg:px-10 backdrop-blur-lg shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-3xl font-bold text-">AutoBot WA</h1>

        {/* Theme Toggle */}
        <ThemeToggle />
      </div>
    </header>
  );
}
