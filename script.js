const projectGrid = document.getElementById('projectGrid');

function projectVisualMarkup(project) {
  const common = `<span class="case-tag mono">CASE ${project.caseNumber} / ${project.caseType}</span>`;
  const wordmark = `<div class="project-wordmark">${project.displayTitle}</div>`;

  const visuals = {
    plot: `${common}<div class="vhs-stack" aria-hidden="true"><i></i><i></i><i></i></div>${wordmark}<span class="visual-sticker">NOW PLAYING-ish</span>`,
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

function renderProjects(projects = []) {
  if (!projectGrid) return;

  projectGrid.innerHTML = projects.map((project) => {
    const statusClass = project.statusClass ? ` ${project.statusClass}` : '';
    const featuredClass = project.featured ? ' featured' : '';
    const categories = project.categories.join(' ');
    const footerTag = project.url ? 'a' : 'div';
    const footerAttrs = project.url
      ? ` href="${project.url}" target="_blank" rel="noreferrer" aria-label="Open ${project.title}"`
      : '';
    const footerClass = project.url ? 'card-footer link-footer' : 'card-footer';
    const arrow = project.url ? '↗' : '→';

    return `
      <article class="project-card${featuredClass}" data-category="${categories}">
        <div class="project-visual ${project.visual}-visual">
          ${projectVisualMarkup(project)}
        </div>
        <div class="project-body">
          <div class="project-meta"><span>${project.meta}</span><span class="status${statusClass}">${project.status}</span></div>
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <${footerTag} class="${footerClass}"${footerAttrs}><span class="mono">${project.tags}</span><span class="arrow">${arrow}</span></${footerTag}>
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
