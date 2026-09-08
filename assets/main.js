// ====================================================
// Renders the changelog + project grid on the homepage
// from the data in projects-data.js
// ====================================================

function renderChangelog(){
  const host = document.getElementById("changelog-rows");
  if(!host) return;
  host.innerHTML = CHANGELOG.map(row => `
    <div class="clrow">
      <div class="ver">${row.ver}</div>
      <div class="desc">${row.desc}</div>
    </div>
  `).join("");
}

function renderProjectGrid(){
  const host = document.getElementById("project-grid");
  if(!host) return;
  host.innerHTML = PROJECTS.map(p => `
    <a class="card" href="projects/${p.slug}.html" style="background-image:url('${p.cover}')">
      <div class="card-cutin">
        <div class="card-top">
          <h3>${p.title}</h3>
          <span class="tag ${p.tag}">${p.tagLabel}</span>
        </div>
        <p class="role">${p.role}</p>
        <p class="blurb">${p.blurb}</p>
        <div class="meta">
          <span>${p.year}</span>
          <span class="arrow">view case study →</span>
        </div>
      </div>
    </a>
  `).join("");
}

renderChangelog();
renderProjectGrid();
