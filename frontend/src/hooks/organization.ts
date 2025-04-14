import { useCreateContactMutation, useGetContactsQuery } from "../app/api/contactApi";
import { useGetOrganizationsQuery, useCreateOrganizationMutation } from "../app/api/organizationApi";
import { ContactCreateInput } from "../types/contacts";
import { OrganizationCreateInput } from "../types/organization";

export const useOrganizations = () => {
    const { data: organizations, isLoading, error } = useGetOrganizationsQuery();
    const { data: contacts } = useGetContactsQuery();
    const [createOrganizationMutation] = useCreateOrganizationMutation();
    const [createContactMutation] = useCreateContactMutation();

    const createOrganization = async (payload: OrganizationCreateInput) => {
        return createOrganizationMutation(payload).unwrap();
    };

    const createContact = async (payload: ContactCreateInput) => {
        return createContactMutation(payload).unwrap();
    };

    return {
        contacts,
        organizations,
        isLoading,
        createContact,
        createOrganization,
        error,
    };
};
