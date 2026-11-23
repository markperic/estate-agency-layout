import type { CSSProperties } from "react";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import HeroCinematicCurtain from "@/registry/modules/87-hero-cinematic-curtain";
import NavScrollChapterPill from "@/registry/modules/86-nav-scroll-chapter-pill";
import ContentDragSlider from "@/registry/modules/88-content-drag-slider";
import StatsColumnScroller from "@/registry/modules/89-stats-column-scroller";
import GalleryCounterScrollCases from "@/registry/modules/90-gallery-counter-scroll-cases";
import ServicesTitleRotator from "@/registry/modules/91-services-title-rotator";
import ShowcasePerspectiveExpand from "@/registry/modules/92-showcase-perspective-expand";
import ShowcaseDualMarquee from "@/registry/modules/79-showcase-dual-marquee";
import ContentStickySplitScroller from "@/registry/modules/93-content-sticky-split-scroller";
import TeamSplitSlider from "@/registry/modules/94-team-split-slider";
import ContactStatementForm from "@/registry/modules/95-contact-statement-form";
import LocationsTabbedPanel from "@/registry/modules/96-locations-tabbed-panel";

const CHAPTERS = [
  { id: "about", label: "About" },
  { id: "numbers", label: "By The Numbers" },
  { id: "work", label: "Cases" },
  { id: "services", label: "Services" },
  { id: "why-us", label: "Why Us" },
  { id: "partnership", label: "Partnership" },
  { id: "team", label: "Team" },
  { id: "contact", label: "Contact" },
  { id: "locations", label: "Locations" },
];

/**
 * Sterling Gate — estate agency layout showcase.
 *
 * Extracted from the Capote Design module catalog as a standalone, cloneable
 * starting point. The architecture (not the photography or copy) is the
 * point: a long cinematic opening, then an alternating rhythm of pinned
 * scroll-scrubbed sections and normal-flow ones, closing on contact and
 * locations.
 */
export default function Home() {
  return (
    <main
      className="bg-[#0a0a0a]"
      /* Site header condensed (42px) plus the chapter pill beneath it (98px).
         Pinned sections read this to keep their resting content clear. */
      style={{ "--page-chrome": "98px" } as CSSProperties}
    >
      <SiteNav overlay />

      <HeroCinematicCurtain />
      <NavScrollChapterPill stickyTop="3.25rem" chapters={CHAPTERS} mobileAlign="end" />

      <div id="about">
        <ContentDragSlider />
      </div>

      <div id="numbers">
        <StatsColumnScroller />
      </div>

      <div id="work">
        <GalleryCounterScrollCases />
      </div>

      <div id="services">
        <ServicesTitleRotator />
      </div>

      <div id="why-us">
        <ShowcasePerspectiveExpand />
      </div>

      <ShowcaseDualMarquee />

      <div id="partnership">
        <ContentStickySplitScroller />
      </div>

      <div id="team">
        <TeamSplitSlider />
      </div>

      <ContactStatementForm id="contact" />

      <div id="locations">
        <LocationsTabbedPanel />
      </div>

      <SiteFooter />
    </main>
  );
}
