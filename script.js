const texts = ["Fullstack", "Backend", "Frontend", "Data Analyst"];
const typingText = document.getElementById(`yping-text`;

let textIndex = 0;
let charIndex = 0;
let currentText = `ev`
let isDeleting = false;
const typingSpeed = 150; // Velocidade de digitação
const deletingSpeed = 75; // Velocidade de deleção
const pauseTime = 1000; // Pausa após completar um texto

function type() {
    // Atualiza o texto baseado no estado de digitação ou deleção
    if (isDeleting) {
        if (charIndex === 0) {
            // Quando chega ao início, substitui a letra
            currentText = `ev`+ texts[(textIndex + 1) % texts.length].charAt(0);
            charIndex = 1; // Começa a digitar a próxima letra
            textIndex = (textIndex + 1) % texts.length;
            
        } else {
            currentText = ``+ texts[textIndex].substring(0, charIndex--);
        }
    } else {
        currentText = `ev`+ texts[textIndex].substring(0, charIndex++);
    }

    typingText.innerHTML = currentText;

    if (!isDeleting && charIndex === texts[textIndex].length) {
        setTimeout(() => {
            isDeleting = true;
        }, pauseTime); // Pausa antes de começar a deletar
    } else if (isDeleting && charIndex <= 1) {
        isDeleting = false; // Reinicia a digitação
    }

    const speed = isDeleting ? deletingSpeed : typingSpeed; // Usa as velocidades definidas
    setTimeout(type, speed);
}

// Inicia o efeito de digitação
type();
