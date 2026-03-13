// 1. Efeito no Header ao rolar a página (Sticky Header)
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.style.background = 'rgba(10, 10, 11, 0.98)';
        header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.5)';
        header.style.padding = '15px 5%';
    } else {
        header.style.background = 'rgba(10, 10, 11, 0.85)';
        header.style.boxShadow = 'none';
        header.style.padding = '20px 5%';
    }
});

// 2. Animações de Scroll (Fade-in ao aparecer na tela)
// Seleciona todos os elementos que queremos animar
const elementosAnimados = document.querySelectorAll('.sobre-texto, .sobre-imagem, .card-servico, .contato-info, .contato-form');

// Configura o observador para disparar quando 15% do elemento estiver visível
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
            // Para de observar depois que animou a primeira vez
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.15 });

// Prepara os elementos no estado inicial (invisíveis e levemente para baixo)
elementosAnimados.forEach(el => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease-out';
    observer.observe(el);
});