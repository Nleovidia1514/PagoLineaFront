const debounce = fn => {
  let frame;
  return (...params) => {
    if (frame) {
      cancelAnimationFrame(frame);
    }
    frame = requestAnimationFrame(() => {
      fn(...params);
    });
  };
};

const storeScroll = () => {
  if (window.scrollY === 0) {
    document.querySelector('header').classList.add('opaque');
    document
      .querySelector('.logo-web')
      .setAttribute('src', 'assets/logos/web-logo-white.png');
  } else {
    document.querySelector('header').classList.remove('opaque');
    document
      .querySelector('.logo-web')
      .setAttribute('src', 'assets/logos/web-logo.png');
  }
};

document.addEventListener('scroll', debounce(storeScroll), { passive: true });

storeScroll();
