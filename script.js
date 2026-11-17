// Carrossel "O que você vai receber": avança/volta um slide por vez
(function () {
  var track = document.getElementById('track');
  var prev = document.getElementById('prev');
  var next = document.getElementById('next');
  if (!track) return;

  function step() {
    var slide = track.querySelector('.slide');
    if (!slide) return 300;
    var styles = getComputedStyle(track);
    var gap = parseFloat(styles.columnGap || styles.gap || 18) || 18;
    return slide.getBoundingClientRect().width + gap;
  }

  if (next) next.addEventListener('click', function () {
    track.scrollBy({ left: step(), behavior: 'smooth' });
  });
  if (prev) prev.addEventListener('click', function () {
    track.scrollBy({ left: -step(), behavior: 'smooth' });
  });
})();
