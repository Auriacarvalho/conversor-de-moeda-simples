# Conversor de Moeda (Currency Converter)

Uma aplicação que converte valores entre diferentes moedas utilizando uma API de taxas de câmbio.

## Tecnologias

- **HTML**: Para estruturação da página.
- **CSS**: Para estilização da interface do usuário.
- **JavaScript**: Para a lógica de conversão e interatividade.
- **API de Taxas de Câmbio**: Para obter as taxas de câmbio em tempo real.

## Funcionalidades

- **Conversão entre diferentes moedas**: O usuário pode inserir um valor e selecionar a moeda de origem e a moeda de destino para obter a conversão em tempo real.
- **Consulta da taxa de câmbio em tempo real**: A aplicação consulta as taxas de câmbio diretamente de uma API externa.
- **Exibição de histórico de conversões**: Todas as conversões realizadas são registradas e exibidas como um histórico na interface.

## Como Usar

1. **Clone o repositório**:
2. 

    ```bash
    git clone https://github.com/seu-usuario/currency-converter.git
    cd currency-converter
    ```

3. **Abrir o arquivo `index.html` no navegador**:
   Após clonar o repositório, abra o arquivo `index.html` diretamente em um navegador da sua escolha.

4. **Usar a aplicação**:
   - Insira um valor a ser convertido.
   - Selecione a moeda de origem e a moeda de destino.
   - Clique em "Converter".
   - O resultado será exibido abaixo do formulário e o histórico de conversões será atualizado.

## Como Funciona

1. O usuário insere o valor e escolhe as moedas de origem e destino.
2. Quando o formulário é enviado, a aplicação chama a API de taxas de câmbio para obter a taxa atual.
3. O valor é convertido com base na taxa de câmbio retornada pela API e o resultado é exibido na tela.
4. Cada conversão realizada é registrada no histórico.

## API Utilizada

A aplicação utiliza a [ExchangeRate-API](https://www.exchangerate-api.com/) para obter as taxas de câmbio em tempo real.

- **URL da API**: `https://api.exchangerate-api.com/v4/latest/{moedaOrigem}`
- **Exemplo de resposta da API**:
    ```json
    {
      "rates": {
        "USD": 1,
        "EUR": 0.85,
        "BRL": 5.10
      }
    }
    ```

## Melhorias Futuras

- Adicionar suporte a mais moedas.
- Melhorar a validação de entradas de usuário.
- Adicionar gráficos para exibir o histórico de conversões.
- Implementar um sistema de cache para evitar múltiplas chamadas à API.

## Contribuindo

Se você deseja contribuir com este projeto, siga as etapas abaixo:

1. Faça o fork do repositório.
2. Crie uma nova branch (`git checkout -b feature/nova-feature`).
3. Faça suas alterações e adicione-as ao commit (`git commit -am 'Adiciona nova funcionalidade'`).
4. Envie para o repositório remoto (`git push origin feature/nova-feature`).
5. Abra um Pull Request para a branch principal.

## Licença

Este projeto é licenciado sob a licença MIT - consulte o arquivo [LICENSE](LICENSE) para mais detalhes.

