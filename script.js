window.addEventListener('scroll', () => {
  const features = document.querySelector('.features');
  const rect = features.getBoundingClientRect();
  if (rect.top < window.innerHeight - 100) {
    features.classList.add('show');
  }
});

// Smooth FAQ expand
document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const answer = btn.nextElementSibling;
    const isOpen = answer.style.maxHeight && answer.style.maxHeight !== '0px';
    document.querySelectorAll('.faq-answer').forEach(a => a.style.maxHeight = null);
    if (!isOpen) {
      answer.style.maxHeight = answer.scrollHeight + 'px';
    }
  });
});
