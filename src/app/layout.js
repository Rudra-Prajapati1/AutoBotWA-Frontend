import AOSWrapper from "./components/AOSWrapper";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "AutoBotWA - WhatsApp Automation",
  description:
    "Send bulk messages, set auto-replies, schedule chats, and manage customer communication effortlessly on WhatsApp.",
  metadataBase: new URL("https://whatsapp-automation-landing.vercel.app/"),
  openGraph: {
    title: "AutoBotWA - WhatsApp Automation Made Simple",
    description:
      "Powerful WhatsApp automation for businesses - bulk messaging, auto-replies, scheduling & more.",
    type: "website",
    images: "/og-image.png",
  },
};

const setInitialTheme = `(function () {
  try {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') {
      document.documentElement.classList.add('dark');
    } else if (saved === 'light') {
      document.documentElement.classList.remove('dark');
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (prefersDark) document.documentElement.classList.add('dark');
    }
  } catch (e) {}
})();`;

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: setInitialTheme }} />
      </head>

      <body
        className="
          font-sans antialiased text-gray-900 bg-gray-50
          dark:bg-black dark:text-gray-100
          selection:bg-emerald-500 selection:text-white
        "
      >
        <AOSWrapper>{children}</AOSWrapper>
      </body>
    </html>
  );
}
