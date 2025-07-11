// Smooth scroll nav
document.querySelectorAll('nav a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(a.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Dropdown animation logic for FAQ and External
document.querySelectorAll('.dropdown-button').forEach(button => {
  button.addEventListener('click', () => {
    const container = button.parentElement;
    const isOpen = container.classList.contains('open');
    document.querySelectorAll('.dropdown-container').forEach(c => c.classList.remove('open'));
    if (!isOpen) container.classList.add('open');
  });
});
