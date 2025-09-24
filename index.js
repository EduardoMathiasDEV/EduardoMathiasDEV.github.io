function enviarWhats(event) {
  event.preventDefault();

  const telefone = '5541991498368';
  const texto = 'Olá! Gostaria de entrar em contato com você.';
  const msgFormatada = encodeURIComponent(texto);

  const url = `https://wa.me/${telefone}?text=${msgFormatada}`;
  window.open(url, '_blank');
}

document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        entry.target.classList.add('fade-in-visible');
      }
    });
  }, {threshold: 0.1});

  document.querySelectorAll('section').forEach(section => {
    section.classList.add('fade-in');
    observer.observe(section);
  });

  document.querySelectorAll('.timeline-item, .project-card, .certification-item').forEach(item => {
    item.classList.add('fade-in');
    observer.observe(item);
  });

  const style = document.createElement('style');
  style.textContent = `
    .fade-in {
      opacity: 0;
      transform: translateY(20px);
      transition: opacity 0.7s ease, transform 0.7s ease;
    }
    .fade-in-visible {
      opacity: 1;
      transform: translateY(0);
    }
  `;
  document.head.appendChild(style);
});






    const matrixContainer = document.querySelector('.matrix-effect');
    const canvas = document.createElement('canvas');
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
    matrixContainer.appendChild(canvas);
  
    const ctx = canvas.getContext('2d');
    const fontSize = 20;
    const cols = Math.floor(canvas.width / fontSize);
    const drops = Array(cols).fill(1); // Posição inicial de cada coluna
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()';

    function setupMatrix() {
  fontSize = 40; // espaço maior para as letras
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  cols = Math.floor(canvas.width / fontSize);
  drops = new Array(cols).fill(0).map(() => Math.random() * -1000);
}

  
    function drawMatrix() {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#4f46ef'; // Verde neon
      ctx.font = `${fontSize}px monospace`;
  
      for (let i = 0; i < drops.length; i++) {
        const text = chars.charAt(Math.floor(Math.random() * chars.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
  
        // Reinicia a coluna se ultrapassar a tela e com chance aleatória
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    }
  
    setInterval(drawMatrix, 50);

    window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  setupMatrix();
});



