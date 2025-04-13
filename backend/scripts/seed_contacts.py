from src.api.contact.models import Contact
from src.database import engine
from sqlmodel import Session

def seed_contacts():
    with Session(engine) as db:
        try:
            contacts = [
                Contact(
                    first_name="John",
                    last_name="Doe",
                    city="New York",
                    address="123 Main Street",
                    state="NY",
                    postal_code="10001",
                    phone="123-456-7890",
                    email="john.doe@example.com",
                    organization_id=1,
                ),
                Contact(
                    first_name="Jane",
                    last_name="Smith",
                    city="Los Angeles",
                    address="456 Sunset Blvd",
                    state="CA",
                    postal_code="90001",
                    phone="987-654-3210",
                    email="jane.smith@example.com",
                    organization_id=2,
                ),
            ]

            db.add_all(contacts)
            db.commit()
            print("✅ Seeded contacts successfully!")

        except Exception as e:
            db.rollback()
            print(f"❌ Error seeding contacts: {e}")

if __name__ == "__main__":
    seed_contacts()
