// Simple splash screen behavior
document.addEventListener('DOMContentLoaded', function () {
  var overlay = document.getElementById('splash-overlay');
  var btn = document.getElementById('splash-go');

  function hideOverlay() {
    if (!overlay) return;
    overlay.classList.add('hidden');
    // remove from accessibility tree after transition
    setTimeout(function(){
      if (overlay && overlay.parentNode) overlay.parentNode.removeChild(overlay);
    }, 400);
  }

  try {
    var seen = window.localStorage && localStorage.getItem('splashSeen');
    if (seen === 'true') {
      hideOverlay();
    }
  } catch (e) {
    // localStorage may be unavailable — ignore
  }

  if (btn) {
    btn.addEventListener('click', function () {
      try { if (window.localStorage) localStorage.setItem('splashSeen','true'); } catch (e){}
      hideOverlay();
    });
    // focus the button for keyboard users
    btn.focus();
  }
});
