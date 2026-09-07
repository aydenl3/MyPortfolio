// ====================================================
// PROJECT DETAIL CONTENT
// Long-form content per project, keyed by slug.
// ====================================================

const PROJECT_DETAILS = {

  "adva": {
    sections: [
      {
        h: "Angel Boy",
        body: `<p> Angels and Demons VS Aliens! is an online Co-op Roguelike, that I worked on as my Capstone project at UCSC. As head designer, I was designing most of the mechanics and systems for this game, including Angel Boy and Demon Girl. Designing these characters was so much fun, and especially interesting and challenging was designing gameplay for Angel Boy.</p>`,
        img: "../assets/images/Cover.png",
        caption: "ADVA Cover Art by Blythe Chen"
      },
      {h: "Initial Designs",
        body: `<p> Designing attacks in a vaccuum was difficult but exciting. Imagining the wide possibilities and exploring the freedom of a project with such an open theme was really interesting. We worked through lots of different ideas in these initial stages.</p>`,
        img: "../assets/images/abilities.png",
        caption: "Power Up Selection Screen in ADVA"
      },
      {
        h: "Rhythm",
        body: `<p> Angel Boy was pitched as a musically gifted but unenthusiastic prodigy. Naturally I thought it only fitting to explore the idea of using rhythm or timing-oriented attacks. Additionally, I wanted to explore a ranged attack character who didn't use projectiles or a very long ranged "Auto hit". My solution for this was Beat Rings, a mechanic I designed to encompass the feel of a rhythm game, and providing a unique ranged attack.</p>`,
        img: "../assets/images/AngelBoyDesigns.png",
        caption: "Early Angel Boy Designs by Blythe Chen"
      },
      {
        h: "Beat Rings",
        body: `<p> Beat Rings are placed by the player by clicking, and retriggered by the player once the ring closes to deal damage. This allows unique set-up of attacks, and forces the player to plan their next moves. While it didn't embody the musical feel I wanted, it did have a unique gameplay style that was unorthodox and deeply interesting to the players who explored it in our numerous playtests.</p>`,
        img: "../assets/images/ABinaction.gif",
        caption: "Angel Boy Gameplay in ADVA"
      },
      
    ],
    stats: [
      { k: "Role", v: "Lead Game Designer" },
      { k: "Year", v: "2025-2026" },
      { k: "Time", v: "6 Months" },
      { k: "Genre", v: "Online Co-Op Roguelike" },
    ],
    links: { steam: "https://store.steampowered.com/app/4295700/Angels_and_Demons_vs_Aliens/", doc: "https://docs.google.com/document/d/1A2vueSKztTxOTupYGWVHjYpdcaivM617qqYtltGJQJU/edit?usp=sharing" },
  },

  "rook": {
    sections: [
      {
        h: "Crunch Time",
        body: `<p> Little Rook's Revenge is a game I developed for a class assignment, where the goal was to create an arcade style game in under a week. Arcade shooter protagonists typically find themselves locked to a left-right plane, and I imagined a "little rook", unable to move up or down yet, as a perfect candidate. This game explores the chess theme in a new context.</p>`,
        img: "../assets/images/littlerook2.png",
        caption: "Little Rook's Revenge Cover Art"
      },
      {
        h: "Closing Thoughts",
        body: `<p> While I liked the consistency to the chess theme inspiring this game, not every piece made a good or fun enemy. Pawns in this game particularly are annoying in their slow unpredictable movement, and the Queen's pattern is incredibly strong. I wish I had spent more time on getting feedback to adjusting these feelings before submitting this project.</p>`,
        img: "../assets/images/bossfight2.gif",
        caption: "Final Boss Fight in Little Rook's Revenge"
      }
    ],
    stats: [
      { k: "Role", v: "Solo Developer and Designer" },
      { k: "Year", v: "2024" },
      { k: "Time", v: "1 week" },
      { k: "Genre", v: "Arcade Shooter" },
    ],
    links: { play: "https://aydenl3.github.io/Little-Rook/"},
  },

  "court": {
       sections: [
      {
        h: "Section 1",
        body: `<p> Section 1 Text</p>`,
        img: null,
        caption: "Section 1"
      },
      {
        h: "Section 2",
        body: `<p> Section 2 Text</p>`,
        img: null,
        caption: "Section 2"
      },
      {
        h: "Section 3",
        body: `<p> Section 3 Text</p>`,
        img: null,
        caption: "Section 3"
      },
      {
        h: "Section 4",
        body: `<p> Section 4 Text</p>`,
        img: null,
        caption: "Section 4"
      },
    ],
    stats: [
      { k: "Role", v: "Lead Game Designer" },
      { k: "Year", v: "2023 - ONGOING" },
      { k: "Time", v: "Ongoing" },
      { k: "Genre", v: "Social Deduction Party Experience" },
    ],
    links: { doc: "https://docs.google.com/document/d/1wHqtCKb-RhSUPZ-p7CtE7KQpOi41Yll5lTNyDZeBROE/edit?usp=sharing" },
  },

  "stones": {
       sections: [
      {
        h: "No Hard Feelings",
        body: `<p> Volley was a project intended as a unique memento to teammates I played with at UCSC. I wanted to make collectible cards, but didn't want the cards to have no game attached to them. So I faced unique challenges when making gameplay, as I had to figure out how to differentiate and highlight unique players and playstyles without attaching stats to them.</p>`,
        img: "../assets/images/VBTCG5.png",
        caption: "Example Card Designs"
      },
      {
        h: "Default Signatures",
        body: `<p> Rather than give each player stats for each skill in volleyball, I instead gave each player combination of a unique passive ability, and a default signature move, which could be found in the common deck. (in most cases). This combination allowed me to represent a variety of personalities and playstyles without directly attributing each player to their ability, instead highlighting moves they used often, or were particularly good at.</p>`,
        img: "../assets/images/VBTCG6.png",
        caption: "Example Card Designs"
      },
      {
        h: "Volleyball as a Card Game",
        body: `<p> In addition, representing volleyball as a card game was a unique hurdle. The game is so flexible and unpredictable that it's really hard to encapsulate in a rulebound turn-based system. Despite this, I think I really well represented the sport, and I had a blast. Watching this go from numbers on a spreadsheet to physical cards in my hand was amazing. For this being my first forray into pixel art, I was really happy with the outcome.</p>`,
        img: "../assets/images/TCGCards.jpg",
        caption: "Finished Product"
      },
    ],
    stats: [
      { k: "Role", v: "Sole Game Designer" },
      { k: "Year", v: "2025" },
      { k: "Highlight", v: "Unique Constraints" },
      { k: "Genre", v: "Trading Card Game" },
    ],
    links: { doc: "https://docs.google.com/document/d/1yeaXNfUgUVn9_8h86Dm2WRb967NHnibGFESCn8XCJFk/edit?usp=sharing" },
  },

  "wyld": {
    sections: [
      {
        h: "Section 1",
        body: `<p> Section 1 Text</p>`,
        img: null,
        caption: "Section 1"
      },
      {
        h: "Section 2",
        body: `<p> Section 2 Text</p>`,
        img: null,
        caption: "Section 2"
      },
      {
        h: "Section 3",
        body: `<p> Section 3 Text</p>`,
        img: null,
        caption: "Section 3"
      },
      {
        h: "Section 4",
        body: `<p> Section 4 Text</p>`,
        img: null,
        caption: "Section 4"
      },
    ],
    stats: [
      { k: "Role", v: "Lead Game Designer" },
      { k: "Year", v: "2024-ONGOING" },
      { k: "Time", v: "Ongoing" },
      { k: "Genre", v: "Genre Here" },
    ],
    links: { doc: "https://docs.google.com/document/d/1dTL6Bud7Ep2blhB1NsBsfeUTb6INao-TC30wuW0DOaU/edit?usp=sharing" },
  },

  "chicken": {
    sections: [
      {
        h: "Section 1",
        body: `<p> Section 1 Text</p>`,
        img: null,
        caption: "Section 1"
      },
      {
        h: "Section 2",
        body: `<p> Section 2 Text</p>`,
        img: null,
        caption: "Section 2"
      },
      {
        h: "Section 3",
        body: `<p> Section 3 Text</p>`,
        img: null,
        caption: "Section 3"
      },
      {
        h: "Section 4",
        body: `<p> Section 4 Text</p>`,
        img: null,
        caption: "Section 4"
      },
    ],
    stats: [
      { k: "Role", v: "Sole Designer" },
      { k: "Year", v: "2025" },
      { k: "Time", v: "1 Day" },
      { k: "Genre", v: "Sport" },
    ],
    links: { play: "https://itch.io", doc: "https://itch.io" },
  },

};

// ====================================================
// Render logic — run on each project page
// ====================================================

// Renders an image for a section if `img` is set, otherwise a
// placeholder box marking where one can be dropped in later.
// To add a real image: set img: "images/slug-01.jpg" (and optionally
// a custom caption) on that section object above.
function renderSectionMedia(section){
  if(section.img){
    return `
      <figure class="media-figure">
        <img class="media-img" src="${section.img}" alt="${section.caption || section.h}">
        ${section.caption ? `<figcaption>${section.caption}</figcaption>` : ""}
      </figure>
    `;
  }
  return `<div class="media">[ image placeholder — ${section.caption || section.h} ]</div>`;
}

function renderProjectPage(slug){
  const summary = PROJECTS.find(p => p.slug === slug);
  const detail = PROJECT_DETAILS[slug];
  if(!summary || !detail) return;

  document.title = `${summary.title} — Ayden Le`;

  document.getElementById("proj-tag").className = `tag ${summary.tag}`;
  document.getElementById("proj-tag").textContent = summary.tagLabel;
  document.getElementById("proj-title").textContent = summary.title;
  document.getElementById("proj-role").textContent = summary.role;

  document.getElementById("proj-stats").innerHTML = detail.stats.map(s => `
    <div class="stat">
      <p class="k">${s.k}</p>
      <p class="v">${s.v}</p>
    </div>
  `).join("");

  document.getElementById("proj-body").innerHTML = detail.sections.map(s => `
    <h2>${s.h}</h2>
    ${s.body}
    ${renderSectionMedia(s)}
  `).join("");

  const ctaHost = document.getElementById("proj-cta");
  let ctaHtml = "";
  if(detail.links.play) ctaHtml += `<a class="primary" href="${detail.links.play}" target="_blank" rel="noopener">Check out here! ↗</a>`;
  if(detail.links.steam) ctaHtml += `<a class="primary" href="${detail.links.steam}" target="_blank" rel="noopener">Check out on Steam! ↗</a>`;
  if(detail.links.itch) ctaHtml += `<a class="primary" href="${detail.links.itch}" target="_blank" rel="noopener">Check out on Itch! ↗</a>`;
  if(detail.links.doc) ctaHtml += `<a href="${detail.links.doc}" target="_blank" rel="noopener">Read full doc ↗</a>`;
  ctaHost.innerHTML = ctaHtml;

  // prev/next nav through PROJECTS array
  const idx = PROJECTS.findIndex(p => p.slug === slug);
  const prev = PROJECTS[(idx - 1 + PROJECTS.length) % PROJECTS.length];
  const next = PROJECTS[(idx + 1) % PROJECTS.length];
  document.getElementById("proj-prev").href = `${prev.slug}.html`;
  document.getElementById("proj-prev").textContent = `← ${prev.title}`;
  document.getElementById("proj-next").href = `${next.slug}.html`;
  document.getElementById("proj-next").textContent = `${next.title} →`;
}
