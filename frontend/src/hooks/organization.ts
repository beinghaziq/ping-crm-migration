import { useGetContactsQuery } from "../app/api/contactApi";
import { useGetOrganizationsQuery } from "../app/api/organizationApi";

export const useOrganizations = () => {
  const { data: organizations, isLoading, error } = useGetOrganizationsQuery();
  const { data: contacts } = useGetContactsQuery();

  return {
    contacts,
    organizations,
    isLoading,
    error,
  };
};
