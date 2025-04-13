from pydantic import BaseModel

class ContactCreateInput(BaseModel):
    first_name: str
    last_name: str
    city: str
    address: str
    state: str
    postal_code: str
    phone: str
    email: str
    organization_id: str

class ContactUpdateInput(BaseModel):
    first_name: str
    last_name: str
    city: str
    address: str
    state: str
    postal_code: str
    phone: str
    email: str
    organization_id: str
