from fastapi import FastAPI

from src.api.user.router import router as user_router
from src.api.organization.router import router as organization_router
from src.api.contact.router import router as contact_router
from src.api.session.router import router as session_router
from fastapi.middleware.cors import CORSMiddleware
from src.config import settings

app = FastAPI()

app.include_router(user_router, prefix="/users", tags=["users"])
app.include_router(organization_router, prefix="/organizations", tags=["organizations"])
app.include_router(contact_router, prefix="/contacts", tags=["contacts"])
app.include_router(session_router, prefix="", tags=["session"])


origins = [
    settings.FRONTEND_DOMAIN
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
