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
    
    // document
    //   .querySelector('.logo-web')
    //   .setAttribute('src', 'assets/logos/web-logo-white.png');
  } else {
    document.querySelector('header').classList.remove('opaque');
    if (document.querySelector('.menu').classList.contains('open')) {

      document.querySelector('.menu-toggler').style.color = 'black';
    } 
    // document
    //   .querySelector('.logo-web')
    //   .setAttribute('src', 'assets/logos/web-logo.png');
  }
};

setInterval(() => {
  if(window.scrollY === 0) {
    if (document.querySelector('.menu').classList.contains('open')) {
      document.querySelector('.menu-toggler').style.color = 'white';
    } else {
      document.querySelector('.menu-toggler').style.color = 'black';
    }
  }else {
    document.querySelector('.menu-toggler').style.color = 'black';
  }
}, 200)

document.addEventListener('scroll', debounce(storeScroll), { passive: true });

storeScroll();
