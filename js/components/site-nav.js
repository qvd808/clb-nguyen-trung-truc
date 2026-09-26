import { club, links, navItems } from '../data/club.js';
import { defineSection, esc, extLink } from './shared.js';

defineSection('site-nav', () => `
  <nav class="nav site-nav" aria-label="Chính">
    <a class="nav-brand" href="#">${esc(club.name)}</a>
    <div class="site-nav__links">
      ${navItems.map((item) => `<a href="${item.href}">${esc(item.label)}</a>`).join('')}
    </div>
    ${extLink({ label: 'Facebook', href: links.facebook }, 'btn btn-primary')}
  </nav>
`);
