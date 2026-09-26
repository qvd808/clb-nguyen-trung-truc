/** Small render helpers shared by the section components. */

/** Escape text before inserting it into HTML. */
export function esc(value = '') {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}

export const kicker = (text) => `<span class="kicker">${esc(text)}</span>`;

export const divider = () => `<div class="divider"></div>`;

/** External link that opens in a new tab. */
export const extLink = ({ label, href }, className = '') =>
  `<a${className ? ` class="${className}"` : ''} href="${esc(href)}" target="_blank" rel="noopener">${esc(label)}</a>`;

/** A photo, or a labelled placeholder box while `src` is empty. */
export function photo({ src, alt }) {
  return src
    ? `<img class="photo" src="${esc(src)}" alt="${esc(alt)}" loading="lazy">`
    : `<div class="photo photo--empty" role="img" aria-label="${esc(alt)}">${esc(alt)}</div>`;
}

/**
 * Register a light-DOM custom element whose markup comes from `render()`.
 * Light DOM keeps the global stylesheets (nocturne.css, site.css) in effect.
 */
export function defineSection(tagName, render) {
  customElements.define(tagName, class extends HTMLElement {
    connectedCallback() { this.innerHTML = render(); }
  });
}
