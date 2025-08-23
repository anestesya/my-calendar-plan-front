# ADR 003: Estratégia de Autenticação

## Status

Proposto

## Contexto

O frontend do "My Calendar Plan" atualmente simula a autenticação de usuários com um mock de usuário no `localStorage`. Para integrar com o backend, é essencial implementar um sistema de autenticação real que garanta a segurança e a identificação dos usuários que acessam as funcionalidades da aplicação.

## Decisão

A estratégia de autenticação será baseada em **JSON Web Tokens (JWT)**. As principais decisões são:

1.  **Fluxo de Autenticação:**
    - O usuário fará login (ou registro) enviando credenciais (email/senha) para um endpoint de autenticação no backend (ex: `POST /api/auth/login`).
    - O backend validará as credenciais e, se forem válidas, retornará um JWT (e, opcionalmente, um refresh token) ao frontend.
    - O frontend armazenará o JWT de forma segura (ex: `localStorage` para simplicidade inicial em SPAs, mas considerando `HttpOnly cookies` para maior segurança em ambientes de produção).
    - Para requisições subsequentes a endpoints protegidos, o frontend incluirá o JWT no cabeçalho `Authorization` como um `Bearer Token` (ex: `Authorization: Bearer <seu_token_jwt>`).
    - O backend validará o JWT de cada requisição para autorizar o acesso aos recursos.

2.  **Gerenciamento de Tokens:**
    - **Armazenamento:** Inicialmente, o JWT será armazenado no `localStorage` do navegador para facilitar o desenvolvimento. Para produção, será investigada a possibilidade de usar `HttpOnly cookies` para maior proteção contra ataques XSS (Cross-Site Scripting).
    - **Expiração e Renovação:** O JWT terá um tempo de expiração curto. Um refresh token (também seguro, ex: `HttpOnly cookie`) será usado para obter novos JWTs sem exigir que o usuário faça login novamente com as credenciais. Isso reduz a janela de ataque em caso de roubo do JWT.
    - **Logout:** Ao fazer logout, o JWT será removido do armazenamento local no frontend e, opcionalmente, invalidado no backend (blacklist ou verificação de expiração).

3.  **Autorização:**
    - O backend usará as informações contidas no JWT (ex: ID do usuário, roles) para determinar se o usuário tem permissão para acessar um recurso ou executar uma ação específica.
    - O frontend poderá usar o estado de autenticação para exibir ou ocultar elementos da interface do usuário (ex: botões de administração).

## Consequências

### Positivas

- **Segurança Robusta:** JWTs são amplamente utilizados e fornecem um mecanismo seguro para autenticação e autorização stateless.
- **Escalabilidade:** Como os JWTs são auto-contidos e não exigem que o backend armazene o estado da sessão (a menos que um refresh token seja usado), isso facilita a escalabilidade horizontal do backend.
- **Compatibilidade:** JWTs são compatíveis com diversas plataformas (web, mobile) e podem ser usados para autenticar requisições tanto da web quanto de aplicativos React Native.

### Negativas

- **Vulnerabilidade a XSS:** Se armazenado no `localStorage`, o JWT é suscetível a ataques XSS. Isso exige que o frontend seja robusto contra essas vulnerabilidades.
- **Complexidade de Renovação:** A implementação de um fluxo de renovação de tokens (com refresh tokens) adiciona complexidade ao gerenciamento de tokens no frontend e backend.

## Alternativas Consideradas

- **Sessões Baseadas em Cookies (tradicional):** O backend criaria e gerenciaria sessões, armazenando o ID da sessão em um cookie. Embora mais seguro contra XSS (com `HttpOnly`), não é stateless e requer que o backend gerencie o estado da sessão, o que pode ser mais desafiador em arquiteturas distribuídas/escaláveis.
- **OAuth 2.0 / OpenID Connect:** Mais complexo e geralmente usado para autenticação com provedores de identidade de terceiros (Google, Facebook, etc.). Para autenticação própria de usuário/senha, JWT direto é suficiente e mais simples para iniciar.

