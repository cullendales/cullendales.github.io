document.addEventListener('DOMContentLoaded', () => {
  const lazyIframes = document.querySelectorAll('.iframe-container');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.dataset.loaded) {
        const iframeSrc = entry.target.getAttribute('data-src');
        entry.target.innerHTML = `<iframe src="${iframeSrc}" width="800" height="600" frameborder="0"></iframe>`;
        entry.target.dataset.loaded = true;
      }
    });
  });

  lazyIframes.forEach(container => observer.observe(container));
});
