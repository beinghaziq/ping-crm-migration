from fastapi import HTTPException, Depends

from src.api.organization.service import OrganizationService

def get_organization(organization_id: int, organization_service: OrganizationService = Depends()):
    organization = organization_service.get_by_id(organization_id)
    if organization is None:
        raise HTTPException(status_code=404, detail="Organization not found")
    return organization
