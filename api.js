fetch('/api.json')  // Supondo que o arquivo JSON esteja sendo servido em algum lugar
  .then(response => response.json())
  .then(produtos => {
    const baseUrl = window.location.origin;  // Obtém o domínio base da página (ex: http://localhost:3000 ou https://meusite.com)
    
    // Modificando os caminhos das imagens de cada produto
    produtos.forEach(produto => {
      produto.image = `${baseUrl}${produto.image}`;
    });

    // Agora, você pode exibir os produtos e suas imagens corretamente
    produtos.forEach(produto => {
      const imgElement = document.createElement('img');
      imgElement.src = produto.image;  // Caminho da imagem já modificado
      document.body.appendChild(imgElement);

      // Exibe o nome do produto
      const nomeElement = document.createElement('h2');
      nomeElement.textContent = produto.nome;
      document.body.appendChild(nomeElement);
    });
  })
  .catch(error => console.error('Erro ao carregar o JSON:', error));
