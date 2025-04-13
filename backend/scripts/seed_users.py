from src.api.session.dependencies import hash_password
from src.api.user.models import User
from src.database import engine
from sqlmodel import Session


def seed_users():
    with Session(engine) as db:
        try:
            users = [
                User(
                    email="john.doe@example.com",
                    username='johndoe',
                    password=hash_password('secret')
                )
            ]

            db.add_all(users)
            db.commit()
            print("✅ Seeded users successfully!")

        except Exception as e:
            db.rollback()
            print(f"❌ Error seeding users: {e}")

if __name__ == "__main__":
    seed_users()
