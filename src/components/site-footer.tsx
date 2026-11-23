import { ArrowUp } from "lucide-react";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Cases" },
  { href: "#services", label: "Services" },
  { href: "#team", label: "Team" },
  { href: "#contact", label: "Contact" },
  { href: "#locations", label: "Locations" },
];

/**
 * Site chrome for this standalone layout — Sterling Gate branded, with
 * in-page anchors instead of the parent showcase catalog links.
 */
export function SiteFooter() {
  return (
    <footer className="border-t border-zinc-200 bg-white px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <a href="#" className="text-sm font-semibold tracking-tight text-zinc-950">
            Sterling Gate
          </a>
          <p className="mt-1 max-w-xs text-sm text-zinc-500">
            An advisory practice for residential and commercial property —
            pairing people with places built to outlast the reason they were bought.
          </p>
        </div>

        <nav className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-zinc-600 transition-colors hover:text-zinc-950"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="mx-auto mt-8 flex max-w-6xl items-center justify-between border-t border-zinc-100 pt-6 text-sm text-zinc-400">
        <span>© {new Date().getFullYear()} Sterling Gate. Layout by Capote Design.</span>
        <a
          href="#"
          className="inline-flex items-center gap-1.5 text-zinc-500 transition-colors hover:text-zinc-950"
        >
          Back to top
          <ArrowUp className="h-3.5 w-3.5" />
        </a>
      </div>
    </footer>
  );
}
