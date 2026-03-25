# GranaChat

App de controle financeiro com foco em linguagem natural. Uma aplicação full-stack para gerenciar finanças através de chat com IA.

## 📁 Estrutura do Projeto

```
granachat/
├── frontend/          # Interface web (React + Vite)
├── backend/           # API FastAPI + SQLite
└── README.md
```

## Stack

### Frontend
- React 19
- Vite 7
- React Router DOM 7
- CSS Modules

### Backend
- Python 3.11+
- FastAPI
- uv (gerenciador de dependências)
- SQLAlchemy
- SQLite (arquivo local)

## 📋 Pré-requisitos

- Node.js 20+ (frontend)
- npm 10+ ou yarn (frontend)
- Python 3.11+ (backend)
- uv (gerenciador Python)

## 🚀 Como rodar localmente

### Backend

```bash
cd backend

# Instalar uv (primeira vez)
pip install uv

# Criar e ativar ambiente virtual
uv venv
source .venv/bin/activate   # Linux / Mac
# .venv\Scripts\activate    # Windows

# Instalar dependências
uv sync

# Configurar .env (copiar de .env.example)
cp .env.example .env

# Rodar servidor
fastapi dev app/main.py
```

### Frontend

```bash
cd frontend

# Instalar dependências
npm install

# Rodar servidor de desenvolvimento
npm run dev

# URL: http://localhost:5173
```

## 📝 Documentação

### Backend API

A API está disponível em `http://localhost:8000` com documentação interativa em:
- **Swagger UI**: `http://localhost:8000/docs`
- **ReDoc**: `http://localhost:8000/redoc`

#### Endpoints principais
- `POST /api/auth/login` - Autenticação
- `POST /api/auth/register` - Registro
- `POST /api/chat` - Enviar mensagem para o chat
- `GET /api/chat/history` - Histórico de conversa
- `GET /api/summary` - Resumo financeiro

### Estrutura do Backend

```
backend/
├── app/
│   ├── main.py              # Entrada da aplicação
│   ├── api/
│   │   ├── auth.py         # Endpoints de autenticação
│   │   ├── chat.py         # Endpoints de chat
│   │   └── summary.py      # Endpoints de resumos
│   ├── core/
│   │   ├── security.py     # Autenticação e segurança
│   │   ├── deps.py         # Dependências
│   │   └── parser.py       # Parser de linguagem natural
│   ├── db/
│   │   ├── base.py         # Configuração de DB
│   │   ├── session.py      # Sessão de banco
│   │   └── deps.py         # Dependências de DB
│   ├── models/             # Modelos SQLAlchemy
│   └── schemas/            # Schemas Pydantic
├── pyproject.toml          # Dependências Python
└── docker-compose.yml      # (opcional/legado)
```

### Estrutura do Frontend

```
frontend/
├── src/
│   ├── components/         # Componentes reutilizáveis
│   ├── views/             # Páginas/Views
│   ├── App.jsx            # Componente raiz
│   ├── main.jsx           # Entrada
│   └── index.css           # Estilos globais
├── vite.config.js         # Configuração Vite
└── package.json           # Dependências Node
```

### Variáveis de Ambiente

#### Backend (.env)
```
DATABASE_URL=sqlite:///./granachat.sql
SECRET_KEY=sua-chave-secreta-aqui
ALGORITHM=HS256
ACCESS_TOKEN_EXPIRE_MINUTES=30
```

#### Frontend (.env, se necessário)
```
VITE_API_URL=http://localhost:8000/api
```

### Scripts Disponíveis

#### Backend
```bash
uv sync              # Instalar dependências
fastapi dev          # Rodar em modo desenvolvimento
```

#### Frontend
```bash
npm run dev          # Rodar em desenvolvimento
npm run build        # Build para produção
npm run lint         # Verificar lint
npm run preview      # Preview de produção local
```

## 🤝 Contribuição

1. Crie uma branch (`git checkout -b feature/AmazingFeature`)
2. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
3. Push para a branch (`git push origin feature/AmazingFeature`)
4. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.