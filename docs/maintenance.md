# Content and assets

## Edit the pages

`index.html` is the home page, `projects.html` is the complete project directory,
and `about.html` covers the company, Matteo and privacy. Edit those files
directly. `assets/styles.css` contains the layout and approved color tokens.

The optional `assets/directory.js` filters existing directory cards in the
browser. All projects remain readable and linked without JavaScript. Searches
do not use a network service, storage or analytics.

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

Keep private repositories unlinked. Do not add customer identities, logos,
case studies, screenshots or delivery details without authorization.
Publicly announced private projects may be named with an availability label.
Do not turn those labels into download or signup links without a real release.
Mark archives and partner projects accurately.

Matteo's existing `mbianchi.dev` is linked, not rebuilt. Denote, Open Playlist
and Moguri also keep their own sites and brands. FIRE Tools belongs to partner
Fire Tools Inc; do not describe it as a Synctune branch.

## Brand source and rights

Artwork and unmodified fonts come from the approved collection in
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

## Before publishing a change

Check internal pages, anchors, local assets, project destinations and the
custom-domain files. Preview narrow and wide layouts, use the keyboard, try the
directory search and reset, and reload with JavaScript disabled. Check that the
font licenses remain present. No install or build step is required.
