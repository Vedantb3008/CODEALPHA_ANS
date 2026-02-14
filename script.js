function createRose() {
  const r = document.createElement('div');
  r.className = 'rose'; r.innerHTML = '🌹';
  r.style.left = Math.random() * 100 + 'vw';
  r.style.animationDuration = (Math.random() * 2 + 2) + 's';
  document.body.appendChild(r);
  setTimeout(() => r.remove(), 4000);
}
setInterval(createRose, 300);

function moveNo() {
  const btn = document.getElementById('no-btn');
  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 100);
  btn.style.left = x + 'px';
  btn.style.top = y + 'px';
}

function celebrate() {
  alert("I Knew it! ❤️ I Love You Forever! 😘");
  for(let i=0; i<100; i++) {
      setTimeout(createRose, i * 50);
  }
}