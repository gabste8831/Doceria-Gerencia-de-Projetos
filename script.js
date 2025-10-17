// Espera todo o conteúdo da página carregar antes de executar o script
document.addEventListener('DOMContentLoaded', function() {

    // Seleciona todos os botões e todos os painéis de informação
    const tabs = document.querySelectorAll('.tab-btn');
    const paineis = document.querySelectorAll('.info-painel');

    // Adiciona um "ouvinte" de clique para cada botão
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // 1. Pega o ID do painel que este botão deve mostrar (do atributo 'data-target')
            const targetId = tab.getAttribute('data-target');
            const targetPainel = document.getElementById(targetId);

            // 2. Remove a classe 'active' de TODOS os botões
            tabs.forEach(t => t.classList.remove('active'));
            
            // 3. Adiciona a classe 'active' APENAS no botão que foi clicado
            tab.classList.add('active');

            // 4. Esconde TODOS os painéis de informação
            paineis.forEach(painel => painel.classList.remove('visivel'));

            // 5. Mostra APENAS o painel-alvo
            if (targetPainel) {
                targetPainel.classList.add('visivel');
            }
        });
    });
        // Adiciona um "ouvinte" de clique para cada botão
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

    // Adicionado para garantir que o primeiro painel 'Avisos' esteja visível ao carregar
    // E que o botão 'Avisos' esteja ativo.
    // Isso é importante caso você recarregue a página ou navegue para ela.
    const primeiroBotao = document.querySelector('.tab-btn[data-target="info-avisos"]');
    const primeiroPainel = document.getElementById('info-avisos');

    if (primeiroBotao && primeiroPainel) {
        primeiroBotao.classList.add('active');
        primeiroPainel.classList.add('visivel');
    }
});

