import { links, location, socials } from '../data/club.js';
import { defineSection, divider, esc, extLink, kicker } from './shared.js';

const mapUrl = (query) =>
  `https://maps.google.com/maps?q=${encodeURIComponent(query)}&z=15&output=embed`;

const detail = (term, value) => `<dt>${esc(term)}</dt><dd>${value}</dd>`;

defineSection('location-section', () => `
  <div class="container">
    ${divider()}
    <section class="section split">
      <div>
        ${kicker(location.kicker)}
        <h2 class="heading">${esc(location.title)}</h2>
        <p class="body">${esc(location.text)}</p>
        <dl class="details">
          ${location.branches.map((b) => detail(b.label, esc(b.address))).join('')}
          ${detail('Lịch tập', esc(location.schedule))}
          ${detail('Liên hệ', extLink({ label: 'Nhắn tin qua Messenger', href: links.messenger }))}
          ${detail('Mạng xã hội', `<span class="links">${socials.map((s) => extLink(s)).join('')}</span>`)}
        </dl>
      </div>
      <div class="card map">
        <iframe title="Bản đồ" src="${mapUrl(location.mapQuery)}" loading="lazy"></iframe>
      </div>
    </section>
  </div>
`);
