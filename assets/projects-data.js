// ====================================================
// PROJECT DATA
// Add a new project by adding one object to this array.
// `slug` must match the filename in /projects/ (without .html)
// for the "view case study" link to work.
// `cover` is the background image shown on the homepage card —
// point it at an existing project image (root-relative path).
// Order in this array = order on the homepage.
// ====================================================

const PROJECTS = [
  {
    slug: "adva",
    title: "Angels & Demons vs. Aliens!",
    tag: "capstone",
    tagLabel: "Co-Op Roguelike",
    role: "Lead Game Designer",
    blurb: "",
    year: "2025-2026",
    playtesters: -1,
    duration: "",
    cover: "assets/images/Cover.png",
  },
  {
    slug: "wyld",
    title: "Tapestry",
    tag: "ongoing",
    tagLabel: "TTRPG",
    role: "Lead Game Designer",
    blurb: "",
    year: "2024-ONGOING",
    playtesters: -1,
    duration: "",
    cover: "assets/images/machine16.jpg",
  },
  {
    slug: "court",
    title: "Pecking Order",
    tag: "ongoing",
    tagLabel: "Party Board Game",
    role: "Lead Game Designer",
    blurb: "",
    year: "2023-ONGOING",
    playtesters: -1,
    duration: "",
    cover: "assets/images/peckingOrder.jpg",
  },
  {
    slug: "stones",
    title: "Volley",
    tag: "proto",
    tagLabel: "TCG",
    role: "Sole Designer and Developer",
    blurb: "",
    year: "2025",
    playtesters: -1,
    duration: "",
    cover: "assets/images/TCGCards.jpg",
  },
  {
    slug: "rook",
    title: "Little Rook",
    tag: "project",
    tagLabel: "Arcade Game",
    role: "Sole Designer and Developer",
    blurb: "",
    year: "2024",
    playtesters: -1,
    duration: "",
    cover: "assets/images/littlerook2.png",
  },
];

// ====================================================
// CHANGELOG DATA — shown on homepage hero
// Frame the portfolio itself like a versioned build.
// ====================================================

const CHANGELOG = [
  { ver: "v1.3", desc: "Added <b>Courier</b> postmortem + playtest data" },
  { ver: "v1.2", desc: "Rewrote <b>Haggle</b> case study after second playtest round" },
  { ver: "v1.1", desc: "Added <b>Deepwell</b> systems doc" },
  { ver: "v1.0", desc: "Initial build — portfolio live" },
];
