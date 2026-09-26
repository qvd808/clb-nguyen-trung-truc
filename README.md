# CLB Taekwondo Nguyễn Trung Trực — website

A static site with no build step: plain HTML, CSS and native Web Components. It runs directly on GitHub Pages.

## Structure

```
index.html                 Page shell: lists the sections in order
css/nocturne.css           Design-system tokens and base components (don't edit per page)
css/site.css               Page layout, grouped by section
js/main.js                 Registers every component
js/data/club.js            ALL content: text, links, photos, address
js/components/
  shared.js                Helpers: esc, kicker, divider, extLink, photo, defineSection
  site-nav.js              <site-nav>
  hero-section.js          <hero-section>
  about-section.js         <about-section>     (who we are + 5 tenets)
  audience-band.js         <audience-band>     (children / teens / adults)
  gallery-section.js       <gallery-section>   (club life photos)
  news-section.js          <news-section>      (Facebook feed embed)
  location-section.js      <location-section>  (address, map, contacts)
  site-footer.js           <site-footer>
images/                    Club photos
```

## Common edits

- **Text, links, address:** edit `js/data/club.js`.
- **Photos:** add files to `images/` and set `src` in `js/data/club.js` (for example `src: 'images/grading.jpg'`). Until then a labelled placeholder is shown.
- **Add a social network:** add `{ label, href }` to `socials` in `js/data/club.js`. It then appears in the news section, the location details and the footer.
- **Add a section:** create `js/components/my-section.js` using `defineSection`, import it in `js/main.js`, and place `<my-section></my-section>` in `index.html`.

## Run locally

ES modules need a server, not `file://`:

```sh
python3 -m http.server 8000
# open http://localhost:8000
```

## Deploy (GitHub Pages)

Settings → Pages → Source: **Deploy from a branch** → `main` / `/ (root)`.
