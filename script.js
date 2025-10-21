document.querySelectorAll('#moving-objects g, #moving-objects path').forEach(el => {
  el.addEventListener('mouseenter', () => {
    const b = el.getBBox();
    const cx = b.x + b.width / 2;
    const cy = b.y + b.height / 2;
    el.style.transformOrigin = `${cx}px ${cy}px`;
    el.style.transformBox = 'fill-box';
    el.style.transform = 'rotate(360deg)';
  });

  el.addEventListener('mouseleave', () => {
    el.style.transform = 'rotate(0deg)';
  });
});