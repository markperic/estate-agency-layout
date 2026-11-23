import type { Metadata } from "next";
import { LenisProvider } from "@/registry/lib/lenis-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sterling Gate | Estate Agency Layout Showcase",
  description:
    "A high-end property agency landing page layout — cinematic opener, pinned scroll architecture, case index, team slider — kept here as a reusable Capote Design starting point.",
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col font-sans">
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
