from fastapi import APIRouter, Depends, HTTPException
from typing import Mapping
from src.api.contact.service import ContactService
from src.api.contact.schemas import ContactCreateInput, ContactUpdateInput
from src.api.contact.dependencies import get_contact
from src.api.user.models import User
from src.api.session.dependencies import get_current_user

router = APIRouter()

@router.get("/")
async def read_contacts(
    contact_service: ContactService = Depends(),
    # current_user: User = Depends(get_current_user)
    ):
    contacts = contact_service.get_contacts()
    return contacts

@router.post("/")
async def create_contact(contact_create_input: ContactCreateInput, contact_service: ContactService = Depends(), current_user: User = Depends(get_current_user)):
    contact = contact_service.create_contact(contact_create_input)
    return contact

@router.get("/{contact_id}")
async def read_contact(contact_id: int, contact_service: ContactService = Depends(), current_user: User = Depends(get_current_user)):
    contact = contact_service.get_by_id(contact_id)
    return contact

@router.put("/{contact_id}")
async def update_contact(
    contact_id: int,
    contact_update_input: ContactUpdateInput,
    contact_service: ContactService = Depends(),
    contact: Mapping = Depends(get_contact),
    current_user: User = Depends(get_current_user),
):
    contact = contact_service.update(contact_id, contact_update_input)
    return contact

@router.delete("/{contact_id}")
async def delete_contact(contact_id: int, contact_service: ContactService = Depends(), current_user: User = Depends(get_current_user),):
    contact = contact_service.delete(contact_id)
    return contact
