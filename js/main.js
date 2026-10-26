(function () {
  document.documentElement.className += ' js';
  var t = document.getElementById('mob-toggle');
  var d = document.getElementById('mob-drawer');
  var o = document.getElementById('mob-overlay');
  var c = document.getElementById('drawer-close');
  function openMenu() {
    d.removeAttribute('hidden');
    o.classList.add('visible');
    t.setAttribute('aria-expanded', 'true');
    t.setAttribute('aria-label', 'Close navigation menu');
    document.documentElement.style.overflow = 'hidden';
  }
  function closeMenu() {
    d.setAttribute('hidden', '');
    o.classList.remove('visible');
    t.setAttribute('aria-expanded', 'false');
    t.setAttribute('aria-label', 'Open navigation menu');
    document.documentElement.style.overflow = '';
  }
  if (t && d && o) {
    t.addEventListener('click', function () {
      if (t.getAttribute('aria-expanded') === 'true') { closeMenu(); } else { openMenu(); }
    });
    if (c) { c.addEventListener('click', closeMenu); }
    o.addEventListener('click', closeMenu);
    var links = d.querySelectorAll('a');
    for (var i = 0; i < links.length; i++) { links[i].addEventListener('click', closeMenu); }
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') { closeMenu(); } });
    window.addEventListener('resize', function () { if (window.innerWidth > 768) { closeMenu(); } });
  }
  var qs = document.querySelectorAll('.faq-q');
  for (var j = 0; j < qs.length; j++) {
    qs[j].addEventListener('click', function () {
      var item = this.parentNode;
      var isOpen = item.classList.contains('open');
      item.classList.toggle('open');
      this.setAttribute('aria-expanded', isOpen ? 'false' : 'true');
    });
  }
  var groups = document.querySelectorAll('[data-tabs]');
  for (var g = 0; g < groups.length; g++) {
    (function (grp) {
      var btns = grp.querySelectorAll('.tabbtn');
      var panels = grp.querySelectorAll('.tabpanel');
      function show(n) {
        for (var k = 0; k < btns.length; k++) {
          var on = k === n;
          btns[k].setAttribute('aria-selected', on ? 'true' : 'false');
          btns[k].className = on ? 'tabbtn active' : 'tabbtn';
          if (on) { panels[k].removeAttribute('hidden'); } else { panels[k].setAttribute('hidden', ''); }
        }
      }
      for (var b = 0; b < btns.length; b++) {
        (function (idx) { btns[idx].addEventListener('click', function () { show(idx); }); })(b);
      }
      show(0);
    })(groups[g]);
  }
})();
