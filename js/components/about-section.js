import { about } from '../data/club.js';
import { defineSection, divider, esc, kicker } from './shared.js';

const tenet = (item, index) => `
  <div class="tenet">
    <span class="tenet__num">${String(index + 1).padStart(2, '0')}</span>
    <div>
      <div class="tenet__title">
        <h3>${esc(item.vi)}</h3>
        <span lang="en">${esc(item.en)}</span>
      </div>
      <p>${esc(item.text)}</p>
    </div>
  </div>
`;

defineSection('about-section', () => `
  <div class="container">
    ${divider()}
    <section class="section split">
      <div>
        ${kicker(about.kicker)}
        <h2 class="heading">${esc(about.title)}</h2>
        ${about.paragraphs.map((p) => `<p class="body">${esc(p)}</p>`).join('')}
      </div>
      <div>${about.tenets.map(tenet).join('')}</div>
    </section>
  </div>
`);
