// Controle de hover para dispositivos móveis
document.querySelectorAll('.link-btn').forEach(btn => {
    btn.addEventListener('touchstart', () => {
        btn.classList.add('hover-effect');
    });
    
    btn.addEventListener('touchend', () => {
        setTimeout(() => {
            btn.classList.remove('hover-effect');
        }, 200);
    });
});

document.getElementById('btn-contato').addEventListener('click', function() {
    window.open('https://w.app/vitormasiero', '_blank');
})

document.getElementById('btn-github').addEventListener('click', function() {
    window.open('https://github.com/vitor-masiero', '_blank');
})
document.getElementById('btn-linkedin').addEventListener('click', function() {
    window.open('https://linkedin.com/in/josé-vitor-masiero', '_blank');
})
