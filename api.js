// URL do arquivo JSON
const jsonUrl = 'https://janaina2000.github.io/api-ifood-json/api.json';

// Carregar o arquivo JSON
fetch(jsonUrl)
  .then(response => response.json())  // Converte a resposta para um objeto JavaScript
  .then(data => {
    const baseUrl = window.location.origin;  // Obtém o domínio atual (ex: https://janaina2000.github.io)

    // Para cada produto no JSON, ajusta o caminho da imagem
    data.produtos.forEach(produto => {
      produto.image = `${baseUrl}${produto.image}`;  // Ajusta o caminho da imagem com a URL base
    });

    // Agora, você pode fazer algo com os dados, como exibir as imagens
    data.produtos.forEach(produto => {
      // Exibe o nome do produto
      const nomeElement = document.createElement('h2');
      nomeElement.textContent = produto.nome;
      document.body.appendChild(nomeElement);

      // Exibe a imagem do produto
      const imgElement = document.createElement('img');
      imgElement.src = produto.image;  // Caminho da imagem atualizado
      document.body.appendChild(imgElement);

      // Exibe o preço do produto
      const precoElement = document.createElement('p');
      precoElement.textContent = `Preço por grama: R$ ${produto.preco_por_grama}`;
      document.body.appendChild(precoElement);
    });
  })
  .catch(error => console.error('Erro ao carregar o JSON:', erro
