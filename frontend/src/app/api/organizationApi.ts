import { Organization, OrganizationCreateInput, OrganizationUpdateInput } from '../../types/organization';
import { baseApi, ITags } from './config';

export const organizationApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getOrganizations: builder.query<Organization[], void>({
      query: () => `/organizations`,
      providesTags: [ITags.ORGANIZATION_LIST],
    }),
    getOrganization: builder.query<Organization, number>({
      query: (id) => `/${id}`,
      providesTags: (_result, _error, id) => [{ type: ITags.ORGANIZATION, id }],
    }),
    createOrganization: builder.mutation<Organization, OrganizationCreateInput>({
      query: (body) => ({
        url: `/organizations`,
        method: 'POST',
        body,
      }),
      invalidatesTags: [ITags.ORGANIZATION_LIST],
    }),
    updateOrganization: builder.mutation<Organization, { id: number; data: OrganizationUpdateInput }>({
      query: ({ id, data }) => ({
        url: `/organizations/${id}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: (_result, _error, { id }) => [{ type: ITags.ORGANIZATION, id }],
    }),
    deleteOrganization: builder.mutation<{ success: boolean }, number>({
      query: (id) => ({
        url: `/organizations/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [ITags.ORGANIZATION],
    }),
  }),
});

export const {
  useGetOrganizationsQuery,
  useGetOrganizationQuery,
  useCreateOrganizationMutation,
  useUpdateOrganizationMutation,
  useDeleteOrganizationMutation,
} = organizationApi;
