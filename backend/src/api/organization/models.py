from typing import Optional, List
from sqlmodel import SQLModel, Field, Relationship


class Organization(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    name: str
    city: str
    address: str
    state: str
    postal_code: str
    phone: str
    email: str

    contacts: List["Contact"] = Relationship(back_populates="organization")
