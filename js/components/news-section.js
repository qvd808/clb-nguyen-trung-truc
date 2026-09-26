import { club, links, news, socials } from '../data/club.js';
import { defineSection, divider, esc, extLink, kicker } from './shared.js';

/** Facebook Page Plugin URL — shows the page's latest posts. */
function facebookFeedUrl({ tabs, height }) {
  const params = new URLSearchParams({
    href: links.facebook,
    tabs,
    width: '500',
    height: String(height),
    small_header: 'true',
    adapt_container_width: 'true',
    hide_cover: 'false',
    show_facepile: 'false',
  });
  return `https://www.facebook.com/plugins/page.php?${params}`;
}

defineSection('news-section', () => {
  const [primary, ...others] = socials;
  return `
    <div class="container">
      ${divider()}
      <section class="section split">
        <div class="news__intro">
          ${kicker(news.kicker)}
          <h2 class="heading">${esc(news.title)}</h2>
          <p class="body">${esc(news.text)}</p>
          <div class="button-row">
            ${extLink({ ...primary, label: 'Mở Fanpage' }, 'btn btn-secondary')}
            ${others.map((s) => extLink(s, 'btn btn-ghost')).join('')}
          </div>
        </div>
        <div class="card news__feed">
          <iframe
            title="${esc(club.name)} trên Facebook"
            src="${facebookFeedUrl(news.feed)}"
            height="${news.feed.height}"
            scrolling="no"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            loading="lazy"></iframe>
        </div>
      </section>
    </div>
  `;
});
