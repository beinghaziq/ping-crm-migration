from typing import Optional
from sqlmodel import SQLModel, Field, Relationship
from src.api.organization.models import Organization  # Regular import

class Contact(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    first_name: str
    last_name: str
    city: str
    address: str
    state: str
    postal_code: str
    phone: str
    email: str
    organization_id: int = Field(foreign_key="organization.id")
    
    organization: Optional[Organization] = Relationship(back_populates="contacts")