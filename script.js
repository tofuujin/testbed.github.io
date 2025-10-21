document.querySelectorAll('svg g, svg path').forEach(el => {
  // 마우스 들어올 때
  el.addEventListener('mouseenter', () => {
    const bbox = el.getBBox(); // 도형의 경계 박스
    const cx = bbox.x + bbox.width / 2;
    const cy = bbox.y + bbox.height / 2;
    el.style.transformOrigin = `${cx}px ${cy}px`;
    el.style.transition = 'transform 1s ease';
    el.style.transform = 'rotate(360deg)';
  });

  // 마우스 나갈 때
  el.addEventListener('mouseleave', () => {
    el.style.transform = 'rotate(0deg)';
  });
});