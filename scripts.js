    // Active nav link on scroll
    const sections = document.querySelectorAll('section[id], #about');
    const navLinks = document.querySelectorAll('.nav-links a');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navLinks.forEach(a => {
            a.classList.toggle('active', a.getAttribute('href') === '#' + entry.target.id);
          });
        }
      });
    }, { rootMargin: '-30% 0px -60% 0px' });

    sections.forEach(s => observer.observe(s));

    // Fade-in on scroll
    const faders = document.querySelectorAll('.fade-in');
    const fadeObs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); fadeObs.unobserve(e.target); }
      });
    }, { threshold: 0.08 });
    faders.forEach(f => fadeObs.observe(f));

    // Hamburger Menu
    const burger = document.getElementById('burger');
    const nl = document.getElementById('navLinks');
    burger.addEventListener('click', () => {
      burger.classList.toggle('open');
      nl.classList.toggle('open');
    });
    nl.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      burger.classList.remove('open'); nl.classList.remove('open');
    }));