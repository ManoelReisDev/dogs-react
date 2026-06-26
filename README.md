# Dogs 🐶

[![Status](https://img.shields.io/badge/status-em%20desenvolvimento-yellow)](./)
[![React](https://img.shields.io/badge/React-19.2.6-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.0.12-646CFF?logo=vite&logoColor=white)](https://vite.dev/)
[![License](https://img.shields.io/badge/license-MIT-green)](#licença-e-autoria)

> Plataforma frontend para compartilhamento de fotos de cães, com autenticação, feed público, postagem de imagens, comentários e estatísticas de uso.

---

## 📸 Preview do Projeto
<img width="838" height="926" alt="Captura de ecrã de 2026-06-26 01-01-29" src="https://github.com/user-attachments/assets/038a1da8-2d8f-48a5-8a27-f68d0c8004dc" />


## 🛠 Tecnologias Utilizadas

| Tecnologia | Uso no projeto |
|---|---|
| React 19 | Construção da interface com componentes e hooks |
| Vite | Ambiente de desenvolvimento e build |
| React Router DOM | Rotas públicas, privadas e navegação |
| Victory | Visualização das estatísticas |
| Vite Plugin SVGR | Importação de SVGs como componentes React |
| CSS Modules | Estilização modular e isolada por componente |
| PropTypes | Validação de props em componentes |
| Fetch API | Comunicação com a API do backend |

### Badges

![React](https://img.shields.io/badge/React-19.2.6-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8.0.12-646CFF?logo=vite&logoColor=white)
![Router](https://img.shields.io/badge/React%20Router-7.17.0-CA4245?logo=reactrouter&logoColor=white)
![Victory](https://img.shields.io/badge/Victory-37.3.6-111827)
![CSS%20Modules](https://img.shields.io/badge/CSS%20Modules-Enabled-264de4)
![SVGR](https://img.shields.io/badge/SVG%20as%20React-Enabled-8A8A8A)

---

## ✨ Funcionalidades

- Cadastro de usuário.
- Login com autenticação via JWT.
- Logout com limpeza de sessão local.
- Login automático com token salvo no `localStorage`.
- Recuperação e redefinição de senha.
- Feed público de fotos.
- Scroll infinito no feed.
- Visualização detalhada de fotos.
- Comentários em fotos.
- Upload de novas fotos na área logada.
- Exclusão de fotos do próprio usuário.
- Página de perfil por usuário.
- Página de estatísticas com gráficos.
- Rotas protegidas para área autenticada.
- Estados de carregamento e tratamento de erro.

---

## 🧭 Rotas da Aplicação

| Rota | Tipo | Descrição |
|---|---|---|
| `/` | Pública | Feed principal com fotos em destaque. |
| `/login` | Pública | Tela de login. |
| `/login/criar` | Pública | Cadastro de novo usuário. |
| `/login/perdeu` | Pública | Recuperação de senha. |
| `/login/resetar` | Pública | Reset de senha via token recebido por e-mail. |
| `/foto/:id` | Pública | Página de foto individual com comentários. |
| `/perfil/:user` | Pública | Perfil público de um usuário. |
| `/conta` | Protegida | Área logada com feed do usuário. |
| `/conta/postar` | Protegida | Formulário de envio de nova foto. |
| `/conta/estatisticas` | Protegida | Estatísticas e gráficos do usuário. |
| `*` | Fallback | Página 404 para rotas não encontradas. |

### Área Logada

O menu autenticado inclui os atalhos:

- `Minhas fotos` -> `/conta`
- `Estatísticas` -> `/conta/estatisticas`
- `Adicionar fotos` -> `/conta/postar`
- `Sair` -> realiza logout e redireciona para `/login`

## 🚀 Pré-requisitos

Antes de rodar o projeto, você precisa ter instalado:

- Node.js 18+
- npm ou yarn

---

## ▶️ Como Rodar a Aplicação

### 1. Clone o repositório

```bash
git clone git@github.com:ManoelReisDev/dogs-react.git
cd dogs-react
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Inicie o ambiente de desenvolvimento

```bash
npm run dev
```

### 4. Acesse no navegador

Abra:

```bash
http://localhost:5173
```

### 5. Gere a versão de produção

```bash
npm run build
```

### 6. Visualize o build localmente

```bash
npm run preview
```

---

## 🌍 Variáveis de Ambiente

Atualmente, este projeto não utiliza variáveis de ambiente.

A API está configurada diretamente em:

```js
https://dogsapi.origamid.dev/json
```

Se futuramente quiser flexibilizar isso, você pode adicionar algo como:

```env
VITE_API_URL=https://dogsapi.origamid.dev/json
```

---

## 🧭 Próximos Passos

Possíveis evoluções para o projeto:

- [ ] Adicionar testes automatizados com Vitest e React Testing Library.
- [ ] Implementar testes end-to-end com Playwright.
- [ ] Migrar a URL da API para variável de ambiente.
- [ ] Melhorar a experiência de carregamento com skeletons.
- [ ] Incluir mensagens toast para feedback de ações.
- [ ] Adicionar acessibilidade refinada para formulários e modais.
- [ ] Criar documentação de componentes.


## 📄 Licença e Autoria

Este projeto está sob a licença MIT.

**Agradecimentos:** projeto desenvolvido com apoio do conteúdo e da metodologia do [Origamid](https://www.origamid.com/), que serviu como base de aprendizado e referência técnica.

**Autor:** ManoelDev-ifma  
**GitHub:** [ManoelReisDev](https://github.com/ManoelReisDev)  
**Repositório:** [dogs-react](https://github.com/ManoelReisDev/dogs-react)

---

> Feito com foco em performance, organização e uma experiência de uso simples para compartilhar fotos de cães. 🐾
