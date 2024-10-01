const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];
const particleCount = 20; // Número de partículas

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 5 + 2; // Tamanho da partícula
        this.speedX = Math.random() * 2 + 0.5; // Velocidade horizontal
        this.speedY = Math.random() * 1 - 1; // Velocidade vertical
        this.color = 'rgba(0, 255, 255, 0.8)'; // Cor da partícula
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Se a partícula sair da tela, reinicie-a no lado oposto
        if (this.x > canvas.width + this.size) {
            this.x = -this.size;
            this.y = Math.random() * canvas.height;
        }
        if (this.y > canvas.height + this.size || this.y < -this.size) {
            this.y = Math.random() * canvas.height;
        }
    }

    draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

// Cria partículas
function init() {
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }
}

// Anima as partículas
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Aplicar filtro de desfoque
    ctx.filter = 'blur(5px)'; // Ajuste o valor conforme necessário

    particles.forEach(particle => {
        particle.update();
        particle.draw();
    });

    ctx.filter = 'none'; // Remove o filtro para os próximos desenhos

    requestAnimationFrame(animate);
}

// Redimensiona o canvas
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// Inicia a animação
init();
animate();
