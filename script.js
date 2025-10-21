document.querySelectorAll('svg g:not([id^="Layer"]), svg path').forEach(el => {
  el.addEventListener('mouseenter', () => {
    const bbox = el.getBBox();
    const cx = bbox.x + bbox.width / 2;
    const cy = bbox.y + bbox.height / 2;
    el.style.transition = 'transform 1s ease';
    el.style.transformOrigin = `${cx}px ${cy}px`;
    el.style.transformBox = 'fill-box';
    el.style.transform = 'rotate(360deg)';
  });

  el.addEventListener('mouseleave', () => {
    el.style.transform = 'rotate(0deg)';
  });
});