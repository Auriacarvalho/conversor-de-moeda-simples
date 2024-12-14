document.getElementById('converter-form').addEventListener('submit', function (event) {
  event.preventDefault();

  // Captura os valores do formulário
  const valor = parseFloat(document.getElementById('valor').value);
  const moedaOrigem = document.getElementById('moeda-origem').value;
  const moedaDestino = document.getElementById('moeda-destino').value;

  // Chama a API para obter a taxa de câmbio
  const apiUrl = `https://api.exchangerate-api.com/v4/latest/${moedaOrigem}`;

  fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
          const taxaDeCambio = data.rates[moedaDestino];
          const resultado = valor * taxaDeCambio;

          // Exibe o resultado
          const resultadoDiv = document.getElementById('resultado');
          resultadoDiv.textContent = `${valor} ${moedaOrigem} = ${resultado.toFixed(2)} ${moedaDestino}`;

          // Atualiza o histórico
          const historico = document.getElementById('historico');
          const itemHistorico = document.createElement('li');
          itemHistorico.textContent = `${valor} ${moedaOrigem} = ${resultado.toFixed(2)} ${moedaDestino}`;
          historico.appendChild(itemHistorico);
      })
      .catch(error => {
          console.error('Erro ao obter taxas de câmbio:', error);
          alert('Erro ao obter taxas de câmbio. Tente novamente mais tarde.');
      });
});
