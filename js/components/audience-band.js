import { audience } from '../data/club.js';
import { defineSection, esc } from './shared.js';

defineSection('audience-band', () => `
  <section class="band">
    <div class="container">
      <h2 class="band__title">${esc(audience.title)}</h2>
      <div class="band__grid">
        ${audience.groups.map((g) => `
          <div>
            <h3>${esc(g.title)}</h3>
            <p>${esc(g.text)}</p>
          </div>
        `).join('')}
      </div>
    </div>
  </section>
`);
