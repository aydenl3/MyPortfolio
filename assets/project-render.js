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
      { k: "Highlight", v: "Working in a large team" },
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
      { k: "Highlight", v: "Creating within short deadlines" },
      { k: "Genre", v: "Arcade Shooter" },
    ],
    links: { play: "https://aydenl3.github.io/Little-Rook/"},
  },

  "court": {
       sections: [
      {
        h: "Just This Once",
        body: `<p> Pecking Order is a blend between worker placement, social deduction and party game. It's unique in that it can only be played once. This game has been incredibly interesting to design, especially due to it's one-time playable nature, as this opens up a variety of mechanics I can explore, knowing that players are learning the game on the fly, and have no idea what's to come. One notable example of this is the hidden goal mechanic, players win the game by completing a thematic goal for their character, but have no idea what other player's goals are. This means players have legitimate reason to work together or betray each other, as goals are only sometimes directly opposed.</p>`,
        img: "../assets/images/peckingOrder.jpg",
        caption: "Cards for First Playtest"
      },
      {
        h: "Chancellors",
        body: `<p> The highlight for me with this game is the Chancellor system. Villager cards are the game's most basic way of gaining resources, or taking actions. Villagers can be elected as Chancellors however, which removes them as options to gain resources, and instead has them automatically vote for or against policies proposed during the Policy phase of this game. During this phase, Players can change the rules of the very game their playing by proposing and passing policy.</p>`,
        img: "../assets/images/pickpocket2.png",
        caption: "Pickpocket card as Villager or Chancellor"
      },
      {
        h: "Chancellor Strategy",
        body: `<p>  Chancellors are particularly interesting due to the flexibility of the mechanic. Chancellors must be voted in by players, so picking the correct villager can be difficult. Each villager votes for multiple things, making selecting villagers a combination of conceeding policies you don't care about, while trying to ensure the villager supports the ones you do. There can only be so many chancellors, so strategically removing chancellors to make room is also something players must consider. Additionally, a villager who is chancellor cannot be used as a villager, so clever players may elect chancellors to prevent players from using their villager actions.</p>`,
        img: "../assets/images/chancellors.jpg",
        caption: "Sample Chancellors"
      },
      {
        h: "Playtest Ready",
        body: `<p> This game has come such a long way, it was exciting to run a playtest with strangers and see how it was recieved. It was incredibly divisive and tense, but also alot of fun. After seeing the planning, scheming, and fun players experienced while grappling with the mechanics, I knew we had to keep pushing to make this game more polished.</p>`,
        img: "../assets/images/playtestready.jpg",
        caption: "Game Setup at Playtest"
      },
    ],
    stats: [
      { k: "Role", v: "Lead Game Designer" },
      { k: "Year", v: "2023 - ONGOING" },
      { k: "Highlight", v: "Creating within constraints" },
      { k: "Genre", v: "Social Deduction Party Experience" },
    ],
    links: { doc: "https://docs.google.com/document/d/1wHqtCKb-RhSUPZ-p7CtE7KQpOi41Yll5lTNyDZeBROE/edit?usp=sharing" },
  },

  "stones": {
       sections: [
      {
        h: "No Hard Feelings",
        body: `<p> Volley was a project intended as a unique memento to teammates I played with at UCSC. I wanted to make collectible cards, but didn't want the cards to have no game attached to them. So I faced unique challenges when making gameplay, as I had to figure out how to differentiate and highlight unique players and playstyles without attaching stats to them.</p>`,
        img: "../assets/images/VBTCG7.png",
        caption: "Example Card Designs"
      },
      {
        h: "Default Signatures",
        body: `<p> Rather than give each player stats for each skill in volleyball, I instead gave each player combination of a unique passive ability, and a default signature move, which could be found in the common deck. (in most cases). This combination allowed me to represent a variety of personalities and playstyles without directly attributing each player to their ability, instead highlighting moves they used often, or were particularly good at.</p>`,
        img: "../assets/images/VBTCG8.png",
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
      { k: "Highlight", v: "Creating within constraints" },
      { k: "Genre", v: "Trading Card Game" },
    ],
    links: { doc: "https://docs.google.com/document/d/1yeaXNfUgUVn9_8h86Dm2WRb967NHnibGFESCn8XCJFk/edit?usp=sharing" },
  },

  "wyld": {
    sections: [
      {
        h: "Anything Imaginable",
        body: `<p> Tapestry is a TTRPG module that allows players to build any character they like. Anything from fiction, any playstyle they imagine. Tapestry does this not by offering an countless number of classes, traits and feats, but instead by offering a comprehensive system by which players could create their own classes, abilities, and designs. Tapestry seeks to be a creation tool designed to allow for modular creation of complex and creative characters. Instead of a basic Robot class a TTRPG might offer, I can create my own system for representing a mushroom colony controlling a robot's husk.</p>`,
        img: "../assets/images/machine16.jpg",
        caption: "Concept art for Machine 16, a character created with Tapestry."
      },
      {
        h: "From Flavor to Rules",
        body: `<p> Tapestry takes the fantasy of playing a character, and helps a player represent that character in a turn-based combat system, using modular steps. Tapestry teaches budding designers common grammars and balancing used when designing systems, and allows an infinite variety of characters. To make Tapestry, I first made changes to simplify and neutralize flavored TTRPG rulesets, allowing for characters of any setting to be played. One of things I'm learning from this process is how important thematic is to a game. Trying to make something that can be played anywhere is challenging, as it forces very general rules. Additionally, creating a system that creates systems has been a very metacognitive process, which has been fun to explore.</p>`,
        img: "../assets/images/16inaction.jpg",
        caption: "Machine 16 represented through turn-based table-top gameplay"
      },
    ],
    stats: [
      { k: "Role", v: "Lead Game Designer" },
      { k: "Year", v: "2024-ONGOING" },
      { k: "Highlight", v: "Solving unique problems" },
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
