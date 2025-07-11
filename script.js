// Show features on scroll
window.addEventListener('scroll', () => {
  const features = document.querySelector('.features');
  const scrollTop = window.scrollY;
  if (scrollTop > 800) {
    features.classList.add('show');
  }
});

// FAQ dropdown logic
document.querySelectorAll('.faq-question').forEach(button => {
  button.addEventListener('click', () => {
    const answer = button.nextElementSibling;
    const open = answer.style.display === 'block';
    document.querySelectorAll('.faq-answer').forEach(a => a.style.display = 'none');
    answer.style.display = open ? 'none' : 'block';
  });
});
