// scroll to features
document.querySelectorAll('nav a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(a.getAttribute('href')).scrollIntoView({behavior:'smooth'});
  });
});

// FAQ expand
document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const ans = btn.nextElementSibling;
    const open = ans.style.maxHeight && ans.style.maxHeight !== '0px';
    document.querySelectorAll('.faq-answer').forEach(a => a.style.maxHeight = null);
    if (!open) ans.style.maxHeight = ans.scrollHeight + 'px';
  });
});

// External expand
document.querySelectorAll('.ext-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const ans = btn.nextElementSibling;
    const open = ans.style.maxHeight && ans.style.maxHeight !== '0px';
    document.querySelectorAll('.ext-answer').forEach(a => a.style.maxHeight = null);
    if (!open) ans.style.maxHeight = ans.scrollHeight + 'px';
  });
});
