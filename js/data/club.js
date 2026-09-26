/**
 * All site content lives here. Edit this file to update text, links or photos —
 * the components read from it and never hard-code content.
 */

export const club = {
  name: 'CLB Taekwondo Nguyễn Trung Trực',
  city: 'Sóc Trăng',
};

export const links = {
  facebook: 'https://www.facebook.com/ClbTaekwondoNguyenTrungTrucSt',
  messenger: 'https://m.me/ClbTaekwondoNguyenTrungTrucSt',
  tiktok: 'https://www.tiktok.com/@tkd.nguyentrungtruc.st',
};

/** Shown in the nav, the news section, the location details and the footer. */
export const socials = [
  { label: 'Facebook', href: links.facebook },
  { label: 'TikTok', href: links.tiktok },
  // { label: 'Instagram', href: 'https://www.instagram.com/…' },
];

export const navItems = [
  { label: 'Về chúng tôi', href: '#about' },
  { label: 'Hoạt động', href: '#life' },
  { label: 'Tin mới', href: '#news' },
  { label: 'Địa chỉ', href: '#find' },
];

export const hero = {
  lines: ['Cùng tập luyện.', 'Cùng trưởng thành.'],
  lead: 'Chúng tôi là câu lạc bộ Taekwondo tại Sóc Trăng. Thiếu nhi, thanh thiếu niên và người lớn cùng tập trên một thảm, cùng cúi chào một người thầy, và cùng nhau tiến bộ từ chiếc đai trắng đầu tiên.',
  // Put photos in /images and set the path, e.g. 'images/hero.jpg'
  image: { src: null, alt: 'Võ sinh CLB xếp hàng trên thảm tập' },
};

export const about = {
  kicker: 'Về chúng tôi',
  title: 'Không chỉ là võ. Là một gia đình.',
  paragraphs: [
    'Với chúng tôi, võ thuật trước hết là rèn luyện nhân cách. Võ sinh học cách kiên nhẫn với bản thân, tôn trọng người khác và dũng cảm khi cần. Anh chị lớn giúp đỡ các em mới vào, phụ huynh cổ vũ bên ngoài thảm, và mỗi kỳ thi lên đai là niềm vui chung của cả câu lạc bộ.',
    'Mỗi buổi tập đều mở đầu và kết thúc bằng năm tinh thần của Taekwondo.',
  ],
  tenets: [
    { vi: 'Lễ nghĩa', en: 'Courtesy', text: 'Cúi chào, lắng nghe và tôn trọng mọi bạn tập.' },
    { vi: 'Liêm sỉ', en: 'Integrity', text: 'Biết đúng sai và giữ vững điều đúng, trong và ngoài sàn tập.' },
    { vi: 'Nhẫn nại', en: 'Perseverance', text: 'Mỗi chiếc đai đều đến từ sự bền bỉ và luyện tập.' },
    { vi: 'Khắc kỷ', en: 'Self-control', text: 'Sức mạnh chỉ có ý nghĩa khi đi cùng một cái đầu bình tĩnh.' },
    { vi: 'Bất khuất', en: 'Indomitable spirit', text: 'Ngã thì đứng dậy, khiêm tốn và không bỏ cuộc.' },
  ],
};

export const audience = {
  title: 'Ai ở đây cũng từng bắt đầu từ đai trắng.',
  groups: [
    { title: 'Thiếu nhi', text: 'Rèn sự tập trung, phối hợp và tự tin qua trò chơi và nề nếp tập luyện.' },
    { title: 'Thanh thiếu niên', text: 'Đối kháng, quyền (poomsae) và cơ hội đại diện CLB tham gia các giải đấu.' },
    { title: 'Người lớn', text: 'Rèn sức khỏe, học tự vệ và duy trì thói quen tập luyện, dù bắt đầu ở tuổi nào.' },
  ],
};

export const gallery = {
  kicker: 'Hoạt động',
  title: 'Trên thảm tập và hơn thế nữa',
  items: [
    { src: null, alt: 'Buổi tập hằng ngày', caption: 'Buổi tập' },
    { src: null, alt: 'Ngày thi lên đai', caption: 'Thi lên đai' },
    { src: null, alt: 'Giải đấu', caption: 'Thi đấu' },
    { src: null, alt: 'Ảnh tập thể CLB', caption: 'Gia đình CLB' },
  ],
};

export const news = {
  kicker: 'Tin mới từ CLB',
  title: 'Tin tức được cập nhật trên Facebook',
  text: 'Lịch học, lịch nghỉ lễ, kỳ thi lên đai và kết quả thi đấu đều được đăng trên Fanpage trước tiên. Bảng tin bên cạnh tự động cập nhật.',
  feed: { tabs: 'timeline', height: 720 },
};

export const location = {
  kicker: 'Địa chỉ',
  title: 'Ghé xem một buổi tập',
  text: 'Phụ huynh và các bạn luôn được chào đón đến xem, gặp huấn luyện viên và tìm hiểu cách chúng tôi tập luyện.',
  branches: [
    { label: 'Cơ sở 1', address: '7/1 Võ Thị Sáu, Sóc Trăng' },
  ],
  schedule: 'Xem lịch học mới nhất trên Fanpage',
  mapQuery: '7/1 Võ Thị Sáu, Sóc Trăng',
};
