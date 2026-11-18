import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--inter",
  subsets: ["latin"],
});

const jetBrains = JetBrains_Mono ({
  variable: "--jetbrains",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Danil Yakimenko | Frontend Developer",
  description: "Frontend Developer specializing in React, Next.js, and TypeScript. Explore my projects, technical skills, and experience building responsive web applications.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetBrains.variable} h-full antialiased mx-auto w-full max-w-[1200px]`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
