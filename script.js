///////////////////  ///////////////////////////////////////////////////////////////////////////////////
// hamburgermenu //
///////////////////
var openButton = document.querySelector("header > button");

openButton.onclick = openMenu;

function openMenu() {  
  var deNav = document.querySelector("nav");
  deNav.classList.toggle("toonMenu");
}





////////////////////  ///////////////////////////////////////////////////////////////////////////////////
// footer details //
////////////////////
(function () {
  const mq = window.matchMedia('(min-width: 48em)');

  function syncDetails(mq) {
    document.querySelectorAll('footer details').forEach(d => {
      if (mq.matches) d.setAttribute('open', '');   // open op desktop
      else d.removeAttribute('open');               // mobiel: laat gebruiker beslissen
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








