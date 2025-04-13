from src.api.organization.models import Organization 
from src.database import engine
from sqlmodel import Session

def seed_organizations():
    with Session(engine) as db:
        try:
            organizations = [
                Organization(
                    name="Acme Inc",
                    city="New York",
                    address="123 Main Street",
                    state="NY",
                    postal_code="10001",
                    phone="123-456-7890",
                    email="info@acme.com",
                ),
                Organization(
                    name="Globex Corporation",
                    city="Los Angeles",
                    address="456 Sunset Blvd",
                    state="CA",
                    postal_code="90001",
                    phone="987-654-3210",
                    email="contact@globex.com",
                ),
            ]

            db.add_all(organizations)
            db.commit()
            print("✅ Seeded organizations successfully!")

        except Exception as e:
            db.rollback()
            print(f"❌ Error seeding organizations: {e}")

if __name__ == "__main__":
    seed_organizations()
