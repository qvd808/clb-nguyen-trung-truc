import { gallery } from '../data/club.js';
import { defineSection, esc, kicker, photo } from './shared.js';

defineSection('gallery-section', () => `
  <section class="container section">
    ${kicker(gallery.kicker)}
    <h2 class="heading">${esc(gallery.title)}</h2>
    <div class="gallery">
      ${gallery.items.map((item) => `
        <figure>
          <div class="gallery__frame lighten">${photo(item)}</div>
          <figcaption>${esc(item.caption)}</figcaption>
        </figure>
      `).join('')}
    </div>
  </section>
`);
