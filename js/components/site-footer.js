import { about, club, socials } from '../data/club.js';
import { defineSection, esc, extLink } from './shared.js';

defineSection('site-footer', () => `
  <div class="container">
    <footer class="site-footer">
      <span>${esc(club.name)} · ${about.tenets.map((t) => esc(t.vi)).join(' · ')}</span>
      <span class="links">${socials.map((s) => extLink(s)).join('')}</span>
    </footer>
  </div>
`);
