from fastapi import APIRouter, Depends, HTTPException
from typing import Mapping
from src.api.organization.service import OrganizationService
from src.api.organization.schemas import OrganizationCreateInput, OrganizationUpdateInput
from src.api.organization.dependencies import get_organization
from src.api.user.models import User
from src.api.session.dependencies import get_current_user

router = APIRouter()

@router.get("/")
async def read_organizations(
    organization_service: OrganizationService = Depends(),
    current_user: User = Depends(get_current_user)
    ):
    organizations = organization_service.get_organizations()
    return organizations

@router.post("/")
async def create_organization(
    organization_create_input: OrganizationCreateInput,
    organization_service: OrganizationService = Depends(),
    current_user: User = Depends(get_current_user),
):
    organization = organization_service.create_organization(organization_create_input)
    return organization

@router.get("/{organization_id}")
async def read_organization(
    organization_id: int,
    organization_service: OrganizationService = Depends(),
    organization: Mapping = Depends(get_organization),
    current_user: User = Depends(get_current_user),
):
    organization = organization_service.get_by_id(organization_id)
    return organization

@router.put("/{organization_id}")
async def update_organization(
    organization_id: int,
    organization_update_input: OrganizationUpdateInput,
    organization_service: OrganizationService = Depends(),
    organization: Mapping = Depends(),
    current_user: User = Depends(get_current_user),
):
    organization = organization_service.update(organization_id, organization_update_input)
    return organization

@router.delete("/{organization_id}")
async def delete_organization(organization_id: int, organization_service: OrganizationService = Depends(), current_user: User = Depends(get_current_user)):
    organization = organization_service.delete(organization_id)
    return organization
