import "./globals.css";
import type { Metadata } from "next";
import NavBar from "@/components/NavBar";
import { orbitron, exo2 } from "./fonts";

export const metadata: Metadata = {
  title: {
    default: "Indie Gamer",
    template: "%s | Indie Gamer",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${exo2.variable} ${orbitron.variable}`}>
      <body className="bg-orange-50 px-4 py-2 flex flex-col min-h-screen">
        <header>
          <NavBar />
        </header>
        <main className="py-3 grow">{children}</main>

        <footer className="border-t py-3 text-center text-slate-500 text-xs">
          Came data and images courtesy of{" "}
          <a
            className="text-orange-800 hover:underline"
            href="https://rawg.io"
            target="_blank"
          >
            RAWG
          </a>
        </footer>
      </body>
    </html>
  );
}
