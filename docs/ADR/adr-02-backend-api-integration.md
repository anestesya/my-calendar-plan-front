# ADR 002: Integração da API do Backend

## Status

Proposto

## Contexto

O frontend do "My Calendar Plan" atualmente utiliza dados mockados e o `localStorage` para simular a criação, listagem e visualização de planos de estudo. Com a introdução de um backend dedicado (Node.js/Langchain), é necessário integrar o frontend com a API real para persistência de dados e utilização das funcionalidades inteligentes fornecidas pelo Langchain.

## Decisão

A integração com o backend será realizada através de requisições HTTP para uma API RESTful. As principais decisões são:

1.  **Protocolo:** Utilização de HTTP/HTTPS.
2.  **Formato de Dados:** JSON para todas as requisições e respostas.
3.  **Biblioteca para Requisições:** Será utilizada a Fetch API nativa do JavaScript/TypeScript para simplicidade e ausência de dependências externas adicionais, a menos que requisitos mais avançados justifiquem o uso de uma biblioteca como Axios (ex: interceptors de requisição/resposta, cancelamento de requisições).
4.  **Base URL da API:** A URL base do backend (ex: `http://localhost:3000` em desenvolvimento, e a URL de produção do Cloud Run) será configurada como uma variável de ambiente no frontend (ex: `NEXT_PUBLIC_BACKEND_API_URL`).
5.  **Tratamento de CORS:** O backend será configurado para permitir requisições cross-origin do frontend durante o desenvolvimento.
6.  **Gerenciamento de Erros:** As requisições de API incluirão tratamento de erros para capturar falhas de rede, respostas HTTP com status de erro (4xx, 5xx) e erros de parsing de JSON. O frontend exibirá mensagens de erro apropriadas ao usuário.

## Consequências

### Positivas

- **Persistência de Dados:** Planos de estudo e dados de usuário serão persistidos no backend, garantindo que não sejam perdidos ao fechar o navegador ou limpar o `localStorage`.
- **Funcionalidades Inteligentes:** Habilitará o uso das capacidades de IA do Langchain (geração de planos personalizados, etc.) que residirão no backend.
- **Separação de Preocupações:** Manterá a lógica de negócio e o processamento de IA no backend, e a interface do usuário no frontend, resultando em uma arquitetura mais limpa e escalável.
- **Escalabilidade:** O backend pode ser escalado independentemente do frontend para lidar com o aumento da demanda por processamento de IA.

### Negativas

- **Complexidade Aumentada:** Introduz a complexidade de gerenciar chamadas de API, estados de carregamento, erros e autenticação entre dois serviços distintos.
- **Latência de Rede:** Haverá uma pequena latência adicional devido às requisições de rede para o backend.

## Alternativas Consideradas

- **WebSockets:** Considerado para comunicação em tempo real, mas não é o requisito principal para a funcionalidade de geração de planos neste estágio. Pode ser adicionado no futuro se a necessidade surgir (ex: streaming de resultados).
- **GraphQL:** Oferece maior flexibilidade na consulta de dados, mas introduziria uma curva de aprendizado adicional e maior complexidade de configuração para um projeto inicial. RESTful APIs são suficientes para as necessidades atuais.

