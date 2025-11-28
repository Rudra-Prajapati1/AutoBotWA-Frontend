import "./globals.css";

export const metadata = {
  title: "AutoBotWA - WhatsApp Automation",
  description:
    "Send bulk messages, auto-reply, and schedule chats effortlessly",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="">
      <body className="antialiased bg-gray-50 dark:bg-black text-gray-900 dark:text-white">
        {children}
      </body>
    </html>
  );
}
