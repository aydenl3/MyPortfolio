// ====================================================
// PROJECT DATA
// Add a new project by adding one object to this array.
// `slug` must match the filename in /projects/ (without .html)
// for the "view case study" link to work.
// ====================================================

const PROJECTS = [
  {
    slug: "adva",
    title: "Angels and Demons vs. Aliens!",
    tag: "capstone",
    tagLabel: "Capstone Project",
    role: "Lead Game Designer",
    blurb: "Blurb Here",
    year: "2025-2026",
    playtesters: -1,
    duration: "6 months",
  },
  {
    slug: "rook",
    title: "Little Rook",
    tag: "project",
    tagLabel: "Project",
    role: "Sole Developer and Designer",
    blurb: "Blurb Here",
    year: "2024",
    playtesters: -1,
    duration: "1 week",
  },
  {
    slug: "court",
    title: "Just One King",
    tag: "ongoing",
    tagLabel: "Ongoing Project",
    role: "Lead Game Designer",
    blurb: "Blurb Here",
    year: "2023-ONGOING",
    playtesters: -1,
    duration: "Ongoing",
  },
  {
    slug: "stones",
    title: "Stacking Stones",
    tag: "proto",
    tagLabel: "Prototype",
    role: "Sole Designer and Developer",
    blurb: "Blurb Here",
    year: "2025",
    playtesters: -1,
    duration: "2 hours",
  },
  {
    slug: "wyld",
    title: "From Wyld",
    tag: "ongoing",
    tagLabel: "Ongoing",
    role: "Lead Designer",
    blurb: "Blurb Here",
    year: "2024-ONGOING",
    playtesters: -1,
    duration: "Ongoing",
  },
  {
    slug: "chicken",
    title: "Climbing Chicken",
    tag: "proto",
    tagLabel: "Sport",
    role: "Sole Designer",
    blurb: "Blurb Here",
    year: "2025",
    playtesters: -1,
    duration: "1 Day",
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
