from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from db.base import Base
from db.session import engine

from api.chat import router as chat_router
from api.summary import router as summary_router
from api.auth import router as auth_router

Base.metadata.create_all(bind=engine)

tags_metadata = [
    {
        "name": "Chat",
        "description": "Operações de envio de mensagens",
    },
    {
        "name": "Summary",
        "description": "Operações de relatórios",
    },
    {
        "name": "Auth",
        "description": "Operações de login",
    },
]

app = FastAPI(
    title="Granachat API",
    openapi_tags=tags_metadata,
    description="API de controle financeiro via chat",
    version="0.1.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def healthcheck():
    return {"status": "Granachat API ok"}

app.include_router(chat_router)
app.include_router(summary_router)
app.include_router(auth_router)