from fastapi import Depends
from src.database import get_session
from src.api.contact.models import Contact
from src.api.organization.models import Organization
from sqlmodel import select, Session


class ContactService:
    def __init__(self, session: Session = Depends(get_session)) -> None:
        self.session = session

    def get_contacts(self):
        statement = select(Contact, Organization.name).join(
            Organization, Organization.id == Contact.organization_id
        )
        contacts_with_org = self.session.exec(statement).all()

        result = []
        for contact, org_name in contacts_with_org:
            result.append(
                {
                    "contact_id": contact.id,
                    "first_name": contact.first_name,
                    "last_name": contact.last_name,
                    "phone": contact.phone,
                    "city": contact.city,
                    "email": contact.email,
                    "organization_name": org_name,  # Add organization name to the result
                }
            )

        return result

    def create_contact(self, contact_create_input):
        contact = Contact(**contact_create_input.model_dump())
        self.session.add(contact)
        self.session.commit()
        self.session.refresh(contact)
        return contact

    def get_by_id(self, contact_id: int):
        statement = select(Contact).where(Contact.id == contact_id)
        contact = self.session.exec(statement).one_or_none()
        if contact is None:
            raise Exception("Contact not found")
        return contact

    def update(self, contact_id, contact_update_input):
        statement = select(Contact).where(Contact.id == contact_id)
        contact = self.session.exec(statement).one()
        for key, value in contact_update_input.dict().items():
            setattr(contact, key, value)
        self.session.add(contact)
        self.session.commit()
        self.session.refresh(contact)
        return contact

    def delete(self, contact_id):
        statement = select(Contact).where(Contact.id == contact_id)
        contact = self.session.exec(statement).one()
        self.session.delete(contact)
        self.session.commit()
        return contact
