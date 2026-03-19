# GranaChat Frontend

Interface web do GranaChat, um app de controle financeiro com foco em linguagem natural.

Este repositório contém o frontend em React + Vite, responsável pelas telas de:

- Home
- Login e cadastro
- Dashboard financeiro
- Chat de interacao com a IA
- Configuracoes

O backend (API) esta neste repositorio:

- https://github.com/mateus124/granachat-backend

## Repositorios do projeto

- Frontend (este repo): https://github.com/mateus124/granachat-front
- Backend (API): https://github.com/mateus124/granachat-backend

## Stack

- React 19
- Vite 7
- React Router DOM 7
- CSS Modules

## Pre-requisitos

Para rodar localmente com a API:

- Node.js 20+ (recomendado)
- npm 10+
- Python 3.11+ (para o backend)
- Docker e Docker Compose (PostgreSQL do backend)

## Como rodar localmente (frontend + backend)

### 1) Subir o backend

Em um terminal separado:

```bash
git clone https://github.com/mateus124/granachat-backend
cd granachat-backend
```

Instale o `uv` e configure o ambiente:

```bash
pip install uv
uv venv
```

Ative o ambiente virtual:

Linux/Mac:

```bash
source .venv/bin/activate
```

Windows (PowerShell):

```powershell
.\.venv\Scripts\Activate.ps1
```

Instale dependencias e configure variaveis:

```bash
uv sync
cp .env.example .env
```

No Windows PowerShell, voce tambem pode usar:

```powershell
Copy-Item .env.example .env
```

Suba o banco e rode a API:

```bash
docker compose up -d
fastapi dev app/main.py
```

API disponivel em:

- http://127.0.0.1:8000
- Swagger: http://127.0.0.1:8000/docs

### 2) Configurar e rodar o frontend

Em outro terminal:

```bash
git clone https://github.com/mateus124/granachat-front
cd granachat-front
npm install
```

Crie um arquivo `.env` na raiz do frontend com:

```env
VITE_API_URL=http://127.0.0.1:8000
```

Inicie o projeto:

```bash
npm run dev
```

Frontend disponivel em:

- http://localhost:5173

## Scripts disponiveis

- `npm run dev`: inicia o servidor de desenvolvimento
- `npm run build`: gera build de producao
- `npm run preview`: sobe preview do build
- `npm run lint`: roda o ESLint

## Estrutura principal

```text
src/
	components/   # componentes reutilizaveis
	views/        # paginas (Home, Login, Dashboard, etc)
	App.jsx       # rotas da aplicacao
```

## Status atual

- Fluxo de autenticacao integrado ao backend via `fetch`
- Demais telas com estrutura visual pronta para evolucao de integracoes
