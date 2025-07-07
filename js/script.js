document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');
    const navLinks = document.querySelectorAll('header a');

    // Função assíncrona para carregar conteúdo de uma URL
    const loadContent = async (url) => {
        try {
            const response = await fetch(url); // Faz a requisição para a URL
            if (!response.ok) { // Verifica se a requisição foi bem-sucedida
                throw new Error(`Erro HTTP! Status: ${response.status}`);
            }
            const text = await response.text(); // Obtém o conteúdo da resposta como texto

            // Insere o conteúdo obtido dentro da div.container
            container.innerHTML = text;

        } catch (error) {
            console.error('Erro ao carregar o conteúdo:', error);
            // Exibe uma mensagem de erro na div.container
            container.innerHTML = '<p>Desculpe, não foi possível carregar o conteúdo.</p>';
        }
    };

    // Adiciona um "ouvinte de evento" de clique a cada link no header
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Impede o comportamento padrão do link (recarregar a página)

            const targetUrl = link.getAttribute('href'); // Obtém a URL do link clicado

            // Chama a função para carregar o conteúdo da URL
            loadContent(targetUrl);
        });
    });

    // Carrega o conteúdo inicial (opcional)
    loadContent('../pages/sobremim.html'); // Define a página inicial carregada na div.container
});
