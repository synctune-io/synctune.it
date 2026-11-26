# Content and assets

## Edit the pages

`index.html` is the home page, `projects.html` is the complete project directory,
and `about.html` covers the company, Matteo and privacy. Edit those files
directly. `assets/styles.css` contains the layout and approved color tokens.

Public copy should describe the missions and what the projects do. Do not
explain each branch's focus, brand identity or website independence.

The home headline is "An orchestra of independent ideas. In sync." Keep
"In sync." on its own line. Its type scales to the hero column with CSS
container units so the longer wording stays balanced on narrow screens.

The optional `assets/directory.js` filters existing directory cards in the
browser. All projects remain readable and linked without JavaScript. Searches
include branch names and card text. They do not use a network service, storage
or analytics.

When adding a directory entry, put `data-project` on its article inside the
appropriate `data-project-group` section. Keep its description, availability
and destination in the HTML. When a project has a working live app, demo or
website, link it first and the source second, both inside a
`<div class="card-links">`. Mark archived repositories with the Archive label. The result count is calculated from those cards.
Keep the matching branch site's entry in sync.

## Project locations and privacy

The initial catalog comes from the public profiles of `synctune-io`,
`synctune-open`, `synctune-music`, `synctune-edu`, `synctune-customers`,
`synctune-gaming`, `synctune-finance`, `open-sales-engineering`, and `mbianchidev`.

[Open Sales Engineering](https://github.com/open-sales-engineering) is the
seventh branch, at `https://open-sales-engineering.synctune.it`. Keep its
home-page route, company-page link, directory filter/group and footer entry in
sync. Its public organization profile introduces Open Field Engineer, a
provider-neutral workbench for pre-sales and post-sales. The source is currently
private: link to the project section on the branch website, not a private
repository or documentation URL. This repository does not rebuild that site.

Porto, SendBox, SendBox Fleet, Stainless, Denote and Moguri live in their own
organizations: `porto-containers`, `sendbox-dev`, `stainless-browser`,
`denote-io` and `moguri-dev`. Fiscal Fox lives in `synctune-finance` and is
private. Other projects may still use `mbianchidev`. Before adding or changing
a source link, resolve the repository with
`gh api repos/OWNER/NAME --jq '.full_name, .visibility'` and use the returned
owner. Link only public repositories. After a transfer, update links here and
on the relevant branch site. The directory makes no live GitHub API calls.

The public branch name is **Synctune Consulting**, at `consulting.synctune.it`.
Its GitHub organization intentionally retains the `synctune-customers` slug.

Keep private repositories unlinked. Do not add customer identities, logos,
case studies, screenshots or delivery details without authorization.
Publicly announced private projects may be named with an availability label.
Do not turn those labels into download or signup links without a real release.
Mark archives and partner projects accurately.

Matteo's existing `mbianchi.dev` is linked, not rebuilt. Open Playlist and Open
Playlist Engine belong to Synctune Music and must be listed in the Music
directory group, not the general independent group. Denote and Moguri retain
their independent identities. The project websites use these destinations:

- Denote: `https://denote.synctune.it`
- Open Playlist: `https://open-playlist.synctune.it` (not `playlist.synctune.it`)
- Open Playlist Engine: `https://op-engine.synctune.it`
- Moguri: `https://moguri.synctune.it`
- Porto: `https://porto.synctune.it`
- SendBox: `https://sendbox.synctune.it`
- Stainless: `https://stainless.synctune.it`
- Fiscal Fox: `https://fiscal-fox.synctune.it`
- b143ck.music: `https://b143ck.synctune.it`

These domains are intentional even before their websites are deployed. Keep
them linked from the home, company and portfolio pages. This repository does
not build those websites. FIRE Tools belongs to partner Fire Tools Inc; do not
describe it as a Synctune branch.

## Brand source and rights

The company mark, original six branch marks and unmodified fonts come from the
approved collection in the private `synctune-io/branding` repository,
snapshot `55764ef`.

Use the approved outlined SVGs, retain their padding and proportions, and do
not rotate, stretch, shadow or recolor the marks. Synctune's primary accent is
`#D6F55A`, with ink `#111214` and paper `#F5F2E9`. Branch accents and symbols
stay paired; never identify a branch by color alone.

Open Sales Engineering uses its existing forest-green monogram on sunflower
yellow (`#F2C94C`), bundled in `assets/branches/open-sales-engineering.svg`.
Keep its colors and proportions unchanged. It comes from the existing branch
website, not the original six-mark identity snapshot.

Bricolage Grotesque is the display face, Work Sans is the body face, and DM Mono
is used for metadata. The original font files and SIL Open Font License notices
are in `assets/fonts/` and `assets/fonts/licenses/`. Keep the notices when
redistributing the fonts. No new license or trademark clearance is implied
for company or project artwork.

The site has no CDN assets, third-party scripts, cookies, embedded players,
contact forms or tracking. Keep that true when changing content, or update the
privacy text to describe the actual behavior.

## Project logos

The home-page showcases and portfolio cards use the projects' actual app logos,
not the Synctune branch symbols. The branch symbols still identify the branches.

- `assets/projects/porto.svg` is an unmodified copy of
  `ui/public/favicon.svg` from `porto-containers/porto` at commit
  `4b9dbdb0501c2d515c524108dde04d7c98f30c2c`. Its MIT notice is retained in
  `assets/projects/licenses/porto-MIT.txt`.
- `assets/projects/moguri.svg` is an unmodified copy of `assets/moguri.svg`
  from `moguri-dev/moguri` at commit
  `3819075aa8d267ff250ce76740084414cd6f1466`. Its MIT notice is retained in
  `assets/projects/licenses/moguri-LICENSE.txt`.
- `assets/projects/studio-duo.svg` is an unmodified copy of
  `assets/branding/studio-duo-icon.svg` from `mbianchidev/studio-duo` at commit
  `bf853019806303eaadd1c179dca4c1fa8bc49286`. The supplied AGPL-3.0 license is
  retained in `assets/projects/licenses/studio-duo-AGPL-3.0.txt`, alongside the
  editable SVG itself.

The catalog now uses 35 genuine project marks. Additional artwork and original
notices are bundled in `assets/projects/` and recorded in
`assets/projects/provenance.json`. The same original marks are copied into
relevant branch repositories, never loaded from a sibling site's assets.

Open Field Engineer uses its original sunflower, copied unmodified from the
existing branch website. Its MIT notice is retained in
`assets/projects/licenses/open-field-engineer-MIT.txt`. The branch monogram and
project sunflower have separate checksums in `assets/projects/provenance.json`.
Public provenance omits private repository locations.

Use a project's official mark in its catalog entry and showcase whenever one
exists. Copy it from the source repository's default branch, not from an
unmerged pull request, and update the revision and checksum in
`assets/projects/provenance.json` when the source mark changes. Do not substitute branch symbols, stock Vite or Tauri icons, screenshots
or unrelated artwork. Projects without a verified mark remain text-only.
Preserve the original proportions, colors and notices; small marks use a 64px
frame, while wide wordmarks have more room.

The Gaming history entry briefly mentions Global Game Jam 2019 in Milan.

## Before publishing a change

Check internal pages, anchors, local assets, project destinations and the
custom-domain files. Preview narrow and wide layouts, use the keyboard, try the
directory search and reset, and reload with JavaScript disabled. Check that the
font licenses remain present. No install or build step is required.
