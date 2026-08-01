import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "My Capstone",
  description: "Capstone skeleton deployed with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-gray-50">
        <nav className="bg-blue-600 text-white p-4">
          <div className="max-w-6xl mx-auto flex flex-wrap gap-6">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/dashboard">Dashboard</Link>
            <Link href="/profile">Profile</Link>
            <Link href="/settings">Settings</Link>
            <Link href="/health">Health</Link>
          </div>
        </nav>

        <main className="max-w-6xl mx-auto p-6 flex-1">
          {children}
        </main>
      </body>
    </html>
  );
}