# Plano de Implementação do Frontend (React Native) - My Calendar Plan

Este documento descreve as tarefas necessárias para integrar o frontend React Native com o novo backend Node.js/Langchain. O objetivo principal é substituir as funcionalidades baseadas em mock data e `localStorage` por chamadas reais à API do backend.

## Visão Geral

O frontend será atualizado para:
- Enviar requisições para o backend para gerar planos de estudo.
- Receber e exibir planos de estudo do backend.
- Gerenciar autenticação de usuário em conjunto com o backend.

## Requisitos da Stack do Frontend

- **Framework:** Next.js / React Native (React para web)
- **Linguagem:** TypeScript
- **UI Components:** Shadcn/ui (conforme `components.json`)
- **Requisições HTTP:** Fetch API (ou Axios, se preferir)

## Estrutura de Diretórios do Frontend (`my-calendar-plan-front/`)

A estrutura existente será utilizada, com modificações nos arquivos de componentes e páginas para integrar a API.

## Tarefas de Implementação

### Fase 1: Configuração e Preparação

- [ ] **1.1 Entender a API do Backend:** Familiarize-se com os endpoints e o formato de dados que o backend Node.js/Langchain irá expor.
  - **Status:** PENDENTE
  - **Responsável:** Desenvolvedor

- [ ] **1.2 Configurar Variáveis de Ambiente do Frontend:** Adicione variáveis de ambiente no frontend (ex: `.env.local` para Next.js) para a URL base do backend (ex: `NEXT_PUBLIC_BACKEND_API_URL=http://localhost:3000`).
  - **Status:** PENDENTE
  - **Responsável:** Desenvolvedor

- [ ] **1.3 Instalar Biblioteca de Requisições HTTP (Opcional):** Se decidir usar Axios em vez da Fetch API nativa, instale-o (`npm install axios`).
  - **Status:** PENDENTE
  - **Responsável:** Desenvolvedor

### Fase 2: Integração da Geração de Plano de Estudos

- [ ] **2.1 Modificar `app/page.tsx` para Chamar a API de Geração:**
  - Remover a simulação de autenticação (`checkAuth`).
  - Atualizar `handleGenerateClick` e `generateStudyPlan` para enviar a `jobDescription` e `studyTime` para o endpoint `POST /api/generate-plan` do backend.
  - Substituir o mock de geração de plano e o uso de `localStorage` pela resposta real do backend.
  - Implementar tratamento de erros e estados de carregamento adequados (já existem `isGenerating`).
  - **Status:** PENDENTE
  - **Responsável:** Desenvolvedor

### Fase 3: Integração da Listagem e Visualização de Planos

- [ ] **3.1 Modificar `app/dashboard/page.tsx` para Chamar a API de Listagem:**
  - Remover a simulação de autenticação (`checkAuth`).
  - Atualizar o `useEffect` para buscar a lista de planos de estudo do backend (ex: `GET /api/plans`) em vez de `localStorage`.
  - Implementar tratamento de erros e estados de carregamento.
  - **Status:** PENDENTE
  - **Responsável:** Desenvolvedor

- [ ] **3.2 Modificar `app/plano/[id]/page.tsx` para Chamar a API de Detalhes do Plano:**
  - Remover a simulação de autenticação (`checkAuth`).
  - Atualizar o `useEffect` para buscar os detalhes de um plano específico do backend (ex: `GET /api/plans/:id`) em vez de `localStorage`.
  - Implementar tratamento de erros e estados de carregamento.
  - **Status:** PENDENTE
  - **Responsável:** Desenvolvedor

### Fase 4: Integração de Funcionalidades Adicionais

- [ ] **4.1 Implementar Autenticação Real:**
  - Substituir a autenticação mockada (`mockUser`) por um fluxo de autenticação real (login, registro, logout) que interaja com o backend.
  - Gerenciar tokens de autenticação (JWT, etc.) no frontend (ex: `localStorage`, Context API, ou biblioteca de gerenciamento de estado).
  - **Status:** PENDENTE
  - **Responsável:** Desenvolvedor
  - **Observação:** Veja `adr-03-authentication-strategy.md` para detalhes.

- [ ] **4.2 Implementar Exportação para Google Calendar:**
  - Atualizar `exportToCalendar` em `app/plano/[id]/page.tsx` para chamar um endpoint do backend que fará a integração com a API do Google Calendar, ou integrar diretamente via frontend (menos recomendado para chaves de API).
  - **Status:** PENDENTE
  - **Responsável:** Desenvolvedor

- [ ] **4.3 Implementar Marcação de Plano como Concluído:**
  - Atualizar `markAsCompleted` em `app/plano/[id]/page.tsx` para enviar uma requisição (`PUT` ou `PATCH`) para o backend para atualizar o status do plano.
  - **Status:** PENDENTE
  - **Responsável:** Desenvolvedor

### Fase 5: Refinamento e Testes

- [ ] **5.1 Testes de Integração Frontend-Backend:** Realizar testes completos para garantir que o frontend e o backend se comuniquem corretamente em todos os fluxos.
  - **Status:** PENDENTE
  - **Responsável:** Desenvolvedor

- [ ] **5.2 Tratamento de Erros Global:** Implementar um mecanismo global de tratamento de erros no frontend para requisições de API.
  - **Status:** PENDENTE
  - **Responsável:** Desenvolvedor

- [ ] **5.3 Otimizações de Performance:** Avaliar e aplicar otimizações de performance, se necessário (ex: lazy loading, otimização de requisições).
  - **Status:** PENDENTE
  - **Responsável:** Desenvolvedor

## Como Trabalhar em Equipe

- **Atualize o Status:** Ao iniciar uma tarefa, mude o `Status` para `EM PROGRESSO`. Ao concluí-la, mude para `CONCLUÍDO` e adicione a data de conclusão.
- **Marque o Responsável:** Preencha o campo `Responsável` com quem está trabalhando na tarefa.
- **Comentários:** Adicione comentários relevantes abaixo de cada tarefa para descrever o progresso, desafios ou decisões tomadas.
- **Pull Requests:** Para cada fase de desenvolvimento significativa, crie um Pull Request no repositório com referências a essas tarefas.


