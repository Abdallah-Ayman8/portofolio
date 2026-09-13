import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Abdallah Ayman | Front-End Developer",
  description:
    "Abdallah Ayman is a Front-End Developer and Computer Science student building modern, responsive and user-focused web experiences with React, Next.js and Tailwind CSS.",
  icons: {
    icon: [{ url: "/profile.png?v=6", type: "image/png" }],
    shortcut: [{ url: "/profile.png?v=6", type: "image/png" }],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-[#0b0b0a] font-serif text-[#f1eee8]">
        {children}
      </body>
    </html>
  );
}
