from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    ENV: str = "development"
    DATABASE_URL: str = "sqlite:///./test.db"
    FRONTEND_DOMAIN: str = "http://localhost:5173"

    class Config:
        env_file = ".env"


settings = Settings()
