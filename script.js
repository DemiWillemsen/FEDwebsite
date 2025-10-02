///////////////////  ///////////////////////////////////////////////////////////////////////////////////
// hamburgermenu //  // https://codepen.io/james2doyle/pen/edNoPe   &   https://codepen.io/shooft/pen/JjQLVeB //
///////////////////
const openButton = document.querySelector("header > button");
const deNav = document.querySelector("header nav:first-of-type");

openButton.addEventListener('click', () => {
  deNav.classList.toggle('toonMenu');
  openButton.classList.toggle('open');
  document.body.classList.toggle('menu-open');
});


////////////////////  ///////////////////////////////////////////////////////////////////////////////////
// footer details //  // https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia //
////////////////////
(function () {
  const mq = window.matchMedia('(min-width: 48em)');

  function syncDetails(mq) {
    document.querySelectorAll('footer details').forEach(d => {
      if (mq.matches) d.setAttribute('open', '');   // open op desktop
      else d.removeAttribute('open');  // mobiel: laat gebruiker beslissen
    });
  }

  // initial
  syncDetails(mq);

  // luister naar verandering van viewport
  if (typeof mq.addEventListener === 'function') {
    mq.addEventListener('change', e => syncDetails(e));
  } else {
    mq.addListener(e => syncDetails(e)); // fallback oude browsers
  }
})();