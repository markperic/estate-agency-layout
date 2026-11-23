/**
 * Local placeholder photo library for this layout.
 * Every image lives in public/images/library/. Swap a placeholder for a real
 * client asset by changing one entry here.
 */

export type PlaceholderImage = { src: string; alt: string };

const lib = (file: string): string => `/images/library/${file}`;

export const PLACEHOLDER_IMAGES = {
  landscape01: { src: lib("landscape01.jpg"), alt: "Layered mountain ridgelines at sunset with a hiker silhouetted on the summit" },
  landscape02: { src: lib("landscape02.jpg"), alt: "Aerial view of green rolling hills with a shepherd and flock crossing a ridge" },
  landscape03: { src: lib("landscape03.jpg"), alt: "Jagged coastal mountain reflected on a black sand beach at dusk" },
  landscape04: { src: lib("landscape04.jpg"), alt: "Silhouetted slot canyon walls against a starry night sky" },
  landscape05: { src: lib("landscape05.jpg"), alt: "Four friends sitting on a mountain ridge overlooking a green valley" },
  landscape06: { src: lib("landscape06.jpg"), alt: "Earth at night from orbit, city lights glowing across the globe" },
  landscape07: { src: lib("landscape07.jpg"), alt: "A group of friends walking down a sunlit coastal promenade at golden hour" },
  landscape08: { src: lib("landscape08.jpg"), alt: "A misty forest path glowing with golden light in the distance" },
  landscape09: { src: lib("landscape09.jpg"), alt: "Four friends with arms around each other watching a golden sunset over hills" },
  landscape10: { src: lib("landscape10.jpg"), alt: "Mount Fuji at dusk above a lakeside town" },
  landscape11: { src: lib("landscape11.jpg"), alt: "A winding mountain road at blue hour with long-exposure light trails" },
  landscape12: { src: lib("landscape12.jpg"), alt: "A hiker standing on a rock outcrop above misty green mountains at sunrise" },
  landscape13: { src: lib("landscape13.jpg"), alt: "Desert hoodoo rock formations under the Milky Way" },
  landscape14: { src: lib("landscape14.jpg"), alt: "A misty forest river valley with rushing water over rocks" },
  person05: { src: lib("person05.jpg"), alt: "Portrait of a woman with a soft smile, outdoors at golden hour" },
  person07: { src: lib("person07.jpg"), alt: "Portrait of a man in a cardigan and collared shirt, smiling warmly" },
  person08: { src: lib("person08.jpg"), alt: "Portrait of a smiling man in a plain white t-shirt" },
  person11: { src: lib("person11.jpg"), alt: "Portrait of a woman with dramatic side lighting against a warm background" },
  portrait03: { src: lib("portrait03.jpg"), alt: "A desert canyon road leading toward a distant peak" },
  portrait06: { src: lib("portrait06.jpg"), alt: "Aerial view of ocean waves breaking on a rocky coastline" },
  portrait07: { src: lib("portrait07.jpg"), alt: "A snow-capped alpine peak at sunset above layered ridgelines" },
  wallpaper04: { src: lib("wallpaper04.jpg"), alt: "Warm terracotta abstract ribbon waves" },
  wallpaperPortrait05: { src: lib("wallpaper-portrait05.jpg"), alt: "Blue and orange marbled fluid art" },
} as const satisfies Record<string, PlaceholderImage>;
