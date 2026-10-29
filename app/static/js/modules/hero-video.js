export function initHeroVideo() {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const heroVideo = document.querySelector('.hero-video');
  const videoToggle = document.querySelector('.hero-video-toggle');
  if (heroVideo && videoToggle) {
    let userPaused = false;
    const mobileHero = window.matchMedia('(max-width: 1020px)');
    const syncVideoPoster = () => {
      heroVideo.poster = mobileHero.matches ? heroVideo.dataset.mobilePoster : heroVideo.dataset.desktopPoster;
    };
    syncVideoPoster();
    const syncVideoButton = () => {
      const paused = heroVideo.paused;
      videoToggle.querySelector('span').textContent = paused ? 'Reproduzir vídeo' : 'Pausar vídeo';
      videoToggle.querySelector('path').setAttribute('d', paused ? 'M7 4l9 6-9 6Z' : 'M6 4v12M14 4v12');
    };
    const playVideo = () => heroVideo.play().catch(syncVideoButton);
    const syncVideoMotion = () => {
      if (reducedMotion.matches || userPaused) {
        heroVideo.autoplay = false;
        heroVideo.pause();
      } else {
        heroVideo.autoplay = true;
        playVideo();
      }
      syncVideoButton();
    };
    videoToggle.hidden = false;
    heroVideo.addEventListener('play', syncVideoButton);
    heroVideo.addEventListener('pause', syncVideoButton);
    videoToggle.addEventListener('click', () => {
      userPaused = !heroVideo.paused;
      if (userPaused) heroVideo.pause();
      else playVideo();
    });
    reducedMotion.addEventListener('change', syncVideoMotion);
    mobileHero.addEventListener('change', () => {
      syncVideoPoster();
      heroVideo.load();
      syncVideoMotion();
    });
    syncVideoMotion();
  }


}
