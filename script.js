document.addEventListener('DOMContentLoaded', function() {

    const tabs = document.querySelectorAll('.tab-btn');
    const paineis = document.querySelectorAll('.info-painel');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetId = tab.getAttribute('data-target');
            const targetPainel = document.getElementById(targetId);

            tabs.forEach(t => t.classList.remove('active'));
            
            tab.classList.add('active');

            paineis.forEach(painel => painel.classList.remove('visivel'));

            if (targetPainel) {
                targetPainel.classList.add('visivel');
            }
        });
    });
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetId = tab.getAttribute('data-target');
            const targetPainel = document.getElementById(targetId);

            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            paineis.forEach(painel => painel.classList.remove('visivel'));

            if (targetPainel) {
                targetPainel.classList.add('visivel');
            }
        });
    });


    const primeiroBotao = document.querySelector('.tab-btn[data-target="info-avisos"]');
    const primeiroPainel = document.getElementById('info-avisos');

    if (primeiroBotao && primeiroPainel) {
        primeiroBotao.classList.add('active');
        primeiroPainel.classList.add('visivel');
    }
});

