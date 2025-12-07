    const root = document.documentElement;
    const dots = document.getElementById('dots');


    function onMove(e) {
      const x = (e.touches ? e.touches[0].clientX : e.clientX) + 'px';
      const y = (e.touches ? e.touches[0].clientY : e.clientY) + 'px';
      root.style.setProperty('--mx', x);
      root.style.setProperty('--my', y);

      dots.classList.remove('no-cursor');
    }

    function onLeave() {

      root.style.setProperty('--mx', '-1000px');
      root.style.setProperty('--my', '-1000px');

      dots.classList.add('no-cursor');
    }

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseleave', onLeave);
    document.addEventListener('touchstart', onMove, {passive: true});
    document.addEventListener('touchmove', onMove, {passive: true});
    document.addEventListener('touchend', onLeave);

    document.getElementById('editor').addEventListener('click', function() {
        document.getElementById('gray-layer').style.backgroundImage = document.getElementById('gray-layer').style.backgroundImage === 'radial-gradient(circle, rgb(0, 60, 255) 1px, transparent 1px)' ? 'radial-gradient(circle, rgba(255, 0, 0, 1) 1px, transparent 1px)' : 'radial-gradient(circle, rgba(255, 255, 255, 1) 1px, transparent 1px)';
    });
