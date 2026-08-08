const projectGrid = document.getElementById('projectGrid');

function escapeHtml(value = '') {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function projectVisualMarkup(project) {
  const common = `<span class="case-tag mono">CASE ${project.caseNumber} / ${project.caseType}</span>`;
  const wordmark = `<div class="project-wordmark">${project.displayTitle}</div>`;

  const visuals = {
    plot: `${common}<div class="vhs-stack" aria-hidden="true"><i></i><i></i><i></i></div>${wordmark}<span class="visual-sticker">NOW PLAYING</span>`,
    moved: `${common}<div class="rings" aria-hidden="true"><i></i><i></i><i></i></div>${wordmark}`,
    steady: `${common}<div class="steady-lines" aria-hidden="true"><i></i><i></i><i></i><i></i></div>${wordmark}`,
    postiq: `${common}<div class="terminal-lines mono" aria-hidden="true"><span>&gt; write</span><span>&gt; split</span><span>&gt; repurpose</span><span>&gt; ship_</span></div>${wordmark}`,
    stamp: `${common}<div class="stamp-box">APPROVED<br><small>BY SOMEONE, PROBABLY</small></div>${wordmark}`,
    whiteout: `${common}<div class="mountain" aria-hidden="true"></div>${wordmark}`,
    breath: `${common}<div class="breath-orb" aria-hidden="true">☁</div>${wordmark}`,
    arcade: `${common}<div class="cabinet" aria-hidden="true"><div class="screen">INSERT<br>WEIRDNESS</div><div class="controls">● ──</div></div>${wordmark}`
  };

  return visuals[project.visual] || `${common}${wordmark}`;
}

function projectStackMarkup(project) {
  if (!project.stack?.length) return '';

  const chips = project.stack
    .map((item) => `<span class="tech-chip">${escapeHtml(item)}</span>`)
    .join('');

  return `
    <div class="tech-stack" aria-label="${escapeHtml(project.title)} tech stack">
      <span class="tech-stack-label mono">STACK</span>
      <div class="tech-stack-list">${chips}</div>
    </div>`;
}

function projectLinksMarkup(project) {
  const links = [];

  if (project.url) {
    links.push(
      `<a class="project-link project-link-primary" href="${escapeHtml(project.url)}" target="_blank" rel="noreferrer" aria-label="Open ${escapeHtml(project.title)} live site">LIVE SITE ↗</a>`
    );
  }

  if (project.repoUrl) {
    const label = project.url ? 'GITHUB ↗' : 'VIEW REPO ↗';
    links.push(
      `<a class="project-link" href="${escapeHtml(project.repoUrl)}" target="_blank" rel="noreferrer" aria-label="Open ${escapeHtml(project.title)} source on GitHub">${label}</a>`
    );
  }

  if (!links.length) {
    return `<div class="card-footer"><span class="mono">${escapeHtml(project.tags || '')}</span><span class="arrow" aria-hidden="true">→</span></div>`;
  }

  return `<div class="card-footer project-links">${links.join('')}</div>`;
}

function renderProjects(projects = []) {
  if (!projectGrid) return;

  const visibleProjects = projects.filter((project) => !project.hidden);

  projectGrid.innerHTML = visibleProjects.map((project) => {
    const statusClass = project.statusClass ? ` ${project.statusClass}` : '';
    const featuredClass = project.featured ? ' featured' : '';
    const categories = project.categories.join(' ');

    return `
      <article class="project-card${featuredClass}" data-category="${categories}">
        <div class="project-visual ${project.visual}-visual">
          ${projectVisualMarkup(project)}
        </div>
        <div class="project-body">
          <div class="project-meta"><span>${escapeHtml(project.meta)}</span><span class="status${statusClass}">${escapeHtml(project.status)}</span></div>
          <h3>${escapeHtml(project.title)}</h3>
          <p>${escapeHtml(project.description)}</p>
          ${projectStackMarkup(project)}
          ${projectLinksMarkup(project)}
        </div>
      </article>`;
  }).join('');
}

renderProjects(window.NOBODY_PROJECTS || []);

const filters = document.querySelectorAll('.filter');

filters.forEach((button) => {
  button.addEventListener('click', () => {
    filters.forEach((b) => b.classList.remove('is-active'));
    button.classList.add('is-active');
    const selected = button.dataset.filter;

    document.querySelectorAll('.project-card').forEach((card) => {
      const categories = card.dataset.category.split(' ');
      card.hidden = selected !== 'all' && !categories.includes(selected);
    });
  });
});

const dialog = document.getElementById('brandDialog');
const openBrand = document.getElementById('openBrand');
const closeBrand = document.getElementById('closeBrand');

if (dialog && openBrand && closeBrand) {
  openBrand.addEventListener('click', () => dialog.showModal());
  closeBrand.addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) dialog.close();
  });
}
