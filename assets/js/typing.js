const texts = ["Fullstack", "Backend", "Frontend", "Data Analyst"];
const typingText = document.getElementById('typing-text');

let textIndex = 0;
let charIndex = 0;
let currentText = '';
let isDeleting = false;

function type() {
    if (isDeleting) {
        currentText = texts[textIndex].substring(0, charIndex--);
    } else {
        currentText = texts[textIndex].substring(0, charIndex++);
    }

    typingText.innerHTML = currentText;

    if (!isDeleting && charIndex === texts[textIndex].length) {
        setTimeout(() => {
            isDeleting = true;
        }, 1500); // Pausa antes de começar a deletar (ajuste aqui se necessário)
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length; // Alterna para o próximo texto
    }

    // Ajuste aqui para aumentar a velocidade de digitação
    const speed = isDeleting ? 50 : 100; // Velocidade de digitação e deleção (valores menores = mais rápido)
    setTimeout(type, speed);
}

// Inicia o efeito de digitação
type();
