// ====================================================
// PROJECT DETAIL CONTENT
// Long-form content per project, keyed by slug.
// ====================================================

const PROJECT_DETAILS = {

  "adva": {
    sections: [
      {
        h: "Section 1",
        body: `<p> Section 1 Text</p>`
      },
      {
        h: "Section 2",
        body: `<p> Section 2 Text</p>`
      },
      {
        h: "Section 3",
        body: `<p> Section 3 Text</p>`
      },
      {
        h: "Section 4",
        body:`<p> Section 4 Text</p>`
      },
    ],
    stats: [
      { k: "Role", v: "Lead Game Designer" },
      { k: "Year", v: "2025-2026" },
      { k: "Time", v: "6 Months" },
      { k: "Genre", v: "Online Co-Op Roguelike" },
    ],
    links: { steam: "https://store.steampowered.com/app/4295700/Angels_and_Demons_vs_Aliens/", doc: "https://itch.io" },
  },

  "rook": {
    sections: [
      {
        h: "Section 1",
        body: `<p> Section 1 Text</p>`
      },
      {
        h: "Section 2",
        body: `<p> Section 2 Text</p>`
      },
      {
        h: "Section 3",
        body: `<p> Section 3 Text</p>`
      },
      {
        h: "Section 4",
        body:`<p> Section 4 Text</p>`
      },
    ],
    stats: [
      { k: "Role", v: "Solo Developer and Designer" },
      { k: "Year", v: "2024" },
      { k: "Time", v: "1 week" },
      { k: "Genre", v: "Arcade Shooter" },
    ],
    links: { play: "https://itch.io", doc: "https://itch.io" },
  },

  "court": {
       sections: [
      {
        h: "Section 1",
        body: `<p> Section 1 Text</p>`
      },
      {
        h: "Section 2",
        body: `<p> Section 2 Text</p>`
      },
      {
        h: "Section 3",
        body: `<p> Section 3 Text</p>`
      },
      {
        h: "Section 4",
        body:`<p> Section 4 Text</p>`
      },
    ],
    stats: [
      { k: "Role", v: "Lead Game Designer" },
      { k: "Year", v: "2023 - ONGOING" },
      { k: "Time", v: "Ongoing" },
      { k: "Genre", v: "Social Deduction Party Experience" },
    ],
    links: { play: "https://itch.io", doc: "https://itch.io" },
  },

  "stones": {
       sections: [
      {
        h: "Section 1",
        body: `<p> Section 1 Text</p>`
      },
      {
        h: "Section 2",
        body: `<p> Section 2 Text</p>`
      },
      {
        h: "Section 3",
        body: `<p> Section 3 Text</p>`
      },
      {
        h: "Section 4",
        body:`<p> Section 4 Text</p>`
      },
    ],
    stats: [
      { k: "Role", v: "Sole Game Designer" },
      { k: "Year", v: "2025" },
      { k: "Time", v: "2 Hours" },
      { k: "Genre", v: "Simple Game" },
    ],
    links: { play: "https://itch.io", doc: "https://itch.io" },
  },

};

// ====================================================
// Render logic — run on each project page
// ====================================================

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
