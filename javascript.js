const container = document.getElementById('particles');
const colors = ['#10b981','#3b82f6','#ef4444','#f59e0b'];
for (let i = 0; i < 30; i++) {
  const p = document.createElement('div');
  p.className = 'particle';
  const size = Math.random() * 4 + 2;
  const color = colors[Math.floor(Math.random() * colors.length)];
  const left = Math.random() * 100;
  const dur = Math.random() * 15 + 10;
  const delay = Math.random() * 15;
  const dx = (Math.random() - 0.5) * 200;
  p.style.cssText = `width:${size}px;height:${size}px;background:${color};left:${left}%;--dx:${dx}px;animation-duration:${dur}s;animation-delay:-${delay}s;`;
  container.appendChild(p);
}

// Scroll reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.timeline-item, .cert-card, .project-card, .fade-in').forEach(el => observer.observe(el));

// Stagger cert cards
document.querySelectorAll('.cert-card').forEach((card, i) => {
  card.style.transitionDelay = `${i * 0.1}s`;
});
document.querySelectorAll('.project-card').forEach((card, i) => {
  card.style.transitionDelay = `${i * 0.1}s`;
});
document.querySelectorAll('.timeline-item').forEach((item, i) => {
  item.style.transitionDelay = `${i * 0.15}s`;
});