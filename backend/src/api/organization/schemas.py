from pydantic import BaseModel

class OrganizationCreateInput(BaseModel):
    name: str
    city: str
    address: str
    state: str
    postal_code: str
    phone: str
    email: str

class OrganizationUpdateInput(BaseModel):
    name: str
    city: str
    address: str
    state: str
    postal_code: str
    phone: str
    email: str
