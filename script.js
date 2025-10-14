const menuLinks = document.querySelectorAll('.menu a');
const sections = document.querySelectorAll('.content-section');

menuLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = link.dataset.section;

    // 모든 섹션 숨기기
    sections.forEach(section => section.classList.remove('active'));

    // 클릭한 섹션 표시
    document.getElementById(target).classList.add('active');
  });
});