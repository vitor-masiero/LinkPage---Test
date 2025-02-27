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

document.getElementById('btn-whatsapp').addEventListener('click', function() {
    window.open('https://www.canva.com/design/DAGgKD57L48/H1TS_94VFcD7-MzJEqaw_w/edit', '_blank');
})