from fastapi import HTTPException, Depends
from src.api.contact.service import ContactService


def get_contact(contact_id: int, contact_service: ContactService = Depends()):
    contact = contact_service.get_by_id(contact_id)
    if contact is None:
        raise HTTPException(status_code=404, detail="Contact not found")
    return contact
