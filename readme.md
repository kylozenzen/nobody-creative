# Nobody Creative landing page

A responsive static landing page built around the Nobody Creative identity: editorial zine energy, rough black ink, off-white paper, and the orange spark used as punctuation.

## The important part: projects are now data-driven

Routine project updates happen in **`projects.js`**. You no longer need to copy/paste large blocks of HTML just to add, remove, reorder, rename, or update a project.

Each project is one object with:
- `caseNumber` — display order / evidence number
- `caseType` — GAME, APP, TOOL, HUB, etc.
- `title` + `displayTitle` — card title and large visual title
- `categories` — powers the filter buttons (`game`, `app`, `tool`, `experiment`)
- `meta` — one-line project type
- `status` + `statusClass` — current phase badge
- `description` — project blurb
- `tags` — footer label
- `visual` — selects the card art treatment
- `featured` — makes the card larger on desktop
- `url` — leave blank until there is somewhere useful to send people

### Adding a project
Duplicate one object in `projects.js`, update its fields, and save. If you reuse an existing `visual` value, that is it.

### Adding a completely new visual style
The content still lives in `projects.js`. Add the new visual key to `projectVisualMarkup()` in `script.js`, then add a matching `.yourkey-visual` style in `styles.css`.

This keeps **content decisions separate from design decisions**, which should make the project wall much easier to maintain as the studio grows.

## Files
- `index.html` — page structure and static brand/story copy
- `projects.js` — **project content / easiest file to update**
- `script.js` — project renderer, filters, brand-board modal
- `styles.css` — visual system, responsive layout, animations, project art
- `assets/logo-primary.png` — current Nobody Creative logo
- `assets/brand-board.png` — brand identity board
- `assets/og-image.jpg` — social sharing image

## Current brand architecture
- **Nobody Creative** — studio / umbrella brand
- **Trust Nobody.** — house moniker / recurring brand line
- **The Evidence Locker** — project directory
- **Nobody Creative Newsletter** — editorial arm
- **Nobody Arcade** — game-focused sub-brand / future hub

That architecture is intentionally flexible. New builds can remain individual products while still feeling like releases from the same studio.

## Run locally
Open `index.html` directly, or use any static server:

```bash
python -m http.server 8080
```

## Deploy
This is a zero-build static site. Drag the entire folder into Netlify, or connect the folder/repo and publish from the project root.

## Future-friendly next steps (not required yet)
1. Decide which builds deserve permanent placement vs. an archive.
2. Give live projects real URLs and make featured projects clickable as full cards.
3. Add optional `year`, `shipDate`, and `priority` fields if the list gets large enough to sort automatically.
4. Move `projects.js` to a small JSON file or lightweight CMS only if manual edits ever become annoying. Do **not** add infrastructure just for the sake of having infrastructure.
5. Eventually create individual `/builds/project-name/` case pages for the strongest projects.
