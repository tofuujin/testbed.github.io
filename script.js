document.querySelectorAll('svg g, svg path').forEach(el => {
  el.addEventListener('mouseenter', () => {
    el.style.transform = 'scale(1.1) rotate(15deg)';
  });

  el.addEventListener('mouseleave', () => {
    el.style.transform = 'scale(1) rotate(0deg)';
  });
});