# Content and assets

## Edit the pages

`index.html` is the home page, `projects.html` is the complete project directory,
and `about.html` covers the company, Matteo and privacy. Edit those files
directly. `assets/styles.css` contains the layout and approved color tokens.

The home headline is "An orchestra of independent ideas. In sync." Keep
"In sync." on its own line. Its type scales to the hero column with CSS
container units so the longer wording stays balanced on narrow screens.

The optional `assets/directory.js` filters existing directory cards in the
browser. All projects remain readable and linked without JavaScript. Searches
include branch names and card text. They do not use a network service, storage
or analytics.

When adding a directory entry, put `data-project` on its article inside the
appropriate `data-project-group` section. Keep its description, availability
and destination in the HTML. The result count is calculated from those cards.
Keep the matching branch site's entry in sync.

## Project locations and privacy

The initial catalog comes from the public profiles of `synctune-io`,
`synctune-open`, `synctune-music`, `synctune-edu`, `synctune-customers`,
`synctune-gaming`, `synctune-finance`, and `mbianchidev`.

Organization profiles contain planned transfer destinations. Public source
links deliberately use the verified current repositories, often under
`mbianchidev`, rather than nonexistent future paths. After a transfer, confirm
the new repository and update links here and on the relevant branch site.
The directory makes no live GitHub API calls.

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
- Open Playlist: `https://open-playlist.synctune.it`
- Open Playlist Engine: `https://op-engine.synctune.it`
- Moguri: `https://moguri.synctune.it`

These domains are intentional even before their websites are deployed. Keep
them linked from the home, company and portfolio pages. This repository does
not build those websites. FIRE Tools belongs to partner Fire Tools Inc; do not
describe it as a Synctune branch.

## Brand source and rights

Synctune family artwork and unmodified fonts come from the approved collection in
[synctune-io/branding](https://github.com/synctune-io/branding),
snapshot `55764ef`.

Use the approved outlined SVGs, retain their padding and proportions, and do
not rotate, stretch, shadow or recolor the marks. Synctune's primary accent is
`#D6F55A`, with ink `#111214` and paper `#F5F2E9`. Branch accents and symbols
stay paired; never identify a branch by color alone.

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

- `assets/projects/porto.png` is an unmodified copy of
  `ui/electron/assets/porto.png` from `mbianchidev/porto` at commit
  `22cf0b37e54aa3866cec50f311c6552fbe19dfba`. Its MIT notice is retained in
  `assets/projects/licenses/porto-MIT.txt`.
- `assets/projects/studio-duo.svg` is an unmodified copy of
  `assets/branding/studio-duo-icon.svg` from `mbianchidev/studio-duo` at commit
  `bf853019806303eaadd1c179dca4c1fa8bc49286`. The supplied AGPL-3.0 license is
  retained in `assets/projects/licenses/studio-duo-AGPL-3.0.txt`, alongside the
  editable SVG itself.

Keep the original artwork, provenance and license notices when updating these
assets. Neither logo loads external fonts, scripts or services.

## Before publishing a change

Check internal pages, anchors, local assets, project destinations and the
custom-domain files. Preview narrow and wide layouts, use the keyboard, try the
directory search and reset, and reload with JavaScript disabled. Check that the
font licenses remain present. No install or build step is required.
