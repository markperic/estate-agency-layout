"use client";

import { KineticOverlayNav, type KineticNavLink } from "@/registry/modules/97-nav-kinetic-overlay";

const LINKS: KineticNavLink[] = [
  { href: "#about", label: "About" },
  { href: "#numbers", label: "By The Numbers" },
  { href: "#work", label: "Cases" },
  { href: "#services", label: "Services" },
  { href: "#why-us", label: "Why Us" },
  { href: "#partnership", label: "Partnership" },
  { href: "#team", label: "Team" },
  { href: "#contact", label: "Contact" },
  { href: "#locations", label: "Locations" },
];

/**
 * Site chrome for this standalone layout. Renders module 97's kinetic overlay
 * nav with in-page chapter links (not the parent showcase catalog).
 *
 * Pass `overlay` so the header floats over the full-bleed cinematic hero
 * instead of reserving a band above it.
 */
export function SiteNav({ overlay = false }: { overlay?: boolean }) {
  return (
    <KineticOverlayNav
      wordmark="Sterling Gate"
      links={LINKS}
      overlay={overlay}
    />
  );
}
