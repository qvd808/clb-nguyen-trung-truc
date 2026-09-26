import { hero } from '../data/club.js';
import { defineSection, esc, photo } from './shared.js';

defineSection('hero-section', () => {
  const [first, second] = hero.lines;
  return `
    <section class="container split hero">
      <div>
        <h1 class="display">
          <span>${esc(first)}</span>
          <span class="accent">${esc(second)}</span>
        </h1>
        <p class="lead">${esc(hero.lead)}</p>
        <div class="button-row">
          <a class="btn btn-primary" href="#about">Tìm hiểu CLB</a>
          <a class="btn btn-ghost" href="#news">Xem hoạt động gần đây</a>
        </div>
      </div>
      <figure class="hero__figure lighten">${photo(hero.image)}</figure>
    </section>
  `;
});
