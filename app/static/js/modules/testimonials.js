export function initTestimonials() {
  const quote = document.querySelector('#customer-quote');
  const previous = document.querySelector('.carousel-previous');
  const next = document.querySelector('.carousel-next');
  const testimonial = document.querySelector('.testimonial');
  const status = document.querySelector('#carousel-status');
  if (!quote || !previous || !next || !testimonial || !status) return;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const fullQuote = quote.textContent;
  const passages = [
    fullQuote,
    'The Enterpret platform is like the hero team of data analysts you always wanted - the ability to consolidate customer feedback from diverse touch points and identify both ongoing and emerging trends to ensure we focus on and build the right things has been amazing.',
    'We love the tools and support to help us train the results to our unique business and users and the Enterpret team is outstanding in every way.'
  ];
  let passageIndex = 0;
  const storyButtons = [previous, next];
  storyButtons.forEach((button) => { button.hidden = false; });
  const showPassage = (step) => {
    const previousHeight = quote.getBoundingClientRect().height;
    passageIndex = (passageIndex + step + passages.length) % passages.length;
    quote.style.minHeight = `${previousHeight}px`;
    quote.textContent = passages[passageIndex];
    status.textContent = passageIndex === 0
      ? 'Full customer story.' : `Customer story, passage ${passageIndex} of 2.`;
    if (!reducedMotion.matches) {
      quote.animate([{ opacity: 0.35, transform: `translateX(${step * 10}px)` }, { opacity: 1, transform: 'translateX(0)' }], { duration: 260, easing: 'ease-out' });
    }
  };
  previous.addEventListener('click', () => showPassage(-1));
  next.addEventListener('click', () => showPassage(1));
  testimonial.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') { event.preventDefault(); showPassage(1); }
    if (event.key === 'ArrowLeft') { event.preventDefault(); showPassage(-1); }
  });


}
