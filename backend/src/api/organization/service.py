from fastapi import Depends, HTTPException
from sqlmodel import select, Session
from src.database import get_session
from src.api.organization.models import Organization
from src.api.organization.schemas import OrganizationCreateInput, OrganizationUpdateInput


class OrganizationService:
    def __init__(self, session: Session = Depends(get_session)) -> None:
        self.session = session

    def get_organizations(self):
        statement = select(Organization)
        organizations = self.session.exec(statement).all()
        
        for org in organizations:
            org.contacts
        return organizations
    
    def create_organization(self, organization_create_input: OrganizationCreateInput):
        organization = Organization(**organization_create_input.model_dump())
        self.session.add(organization)
        self.session.commit()
        self.session.refresh(organization)
        return organization
    
    def get_by_id(self, organization_id: int):
        statement = select(Organization).where(Organization.id == organization_id)
        organization = self.session.exec(statement).one_or_none()
        if organization is None:
            raise HTTPException(status_code=404, detail="Organization not found")
        organization.contacts
        return organization

    def update_organization(self, organization_id, organization_update_input: OrganizationUpdateInput):
        statement = select(Organization).where(Organization.id == organization_id)
        organization = self.session.exec(statement).one_or_none()
        if not organization:
            raise HTTPException(status_code=404, detail="Organization not found")

        for key, value in organization_update_input.dict().items():
            setattr(organization, key, value)

        self.session.add(organization)
        self.session.commit()
        self.session.refresh(organization)
        return organization
    
    def delete_organization(self, organization_id: int):
        statement = select(Organization).where(Organization.id == organization_id)
        organization = self.session.exec(statement).one_or_none()
        if not organization:
            raise HTTPException(status_code=404, detail="Organization not found")

        self.session.delete(organization)
        self.session.commit()
        return organization
    