// script.js
document.querySelectorAll('#moving-objects g, #moving-objects path').forEach(el => {
  el.addEventListener('mouseenter', () => {
    const box = el.getBBox();
    const cx = box.x + box.width / 2;
    const cy = box.y + box.height / 2;

    el.style.transition = 'transform 1s cubic-bezier(0.45, 0, 0.55, 1)';
    el.style.transformOrigin = `${cx}px ${cy}px`;
    el.style.transformBox = 'fill-box';
    el.style.transform = 'rotate(360deg)';
  });

  el.addEventListener('mouseleave', () => {
    el.style.transition = 'transform 0.8s ease';
    el.style.transform = 'rotate(0deg)';
  });
});