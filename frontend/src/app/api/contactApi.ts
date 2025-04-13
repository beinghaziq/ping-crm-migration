import { ContactCreateInput, Contact, ContactUpdateInput } from '../../types/contacts';
import { baseApi, ITags } from './config';

export const contactApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getContacts: builder.query<Contact[], void>({
      query: () => `/contacts`,
      providesTags: [ITags.CONTACT_LIST],
    }),
    getContact: builder.query<Contact, number>({
      query: (contact_id) => `/contacts/${contact_id}`,
      providesTags: (_result, _error, contact_id) => [{ type: ITags.CONTACT_LIST, contact_id }],
    }),
    createContact: builder.mutation<Contact, ContactCreateInput>({
      query: (body) => ({
        url: `/contacts`,
        method: 'POST',
        body,
      }),
      invalidatesTags: [ITags.CONTACT_LIST],
    }),
    updateContact: builder.mutation<Contact, { contact_id: number; data: ContactUpdateInput }>({
      query: ({ contact_id, data }) => ({
        url: `/contacts/${contact_id}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: (_result, _error, { contact_id }) => [{ type: ITags.CONTACT, contact_id }],
    }),
    deleteContact: builder.mutation<{ success: boolean }, number>({
      query: (contact_id) => ({
        url: `/contacts/${contact_id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [ITags.CONTACT_LIST],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useGetContactQuery,
  useCreateContactMutation,
  useUpdateContactMutation,
  useDeleteContactMutation,
} = contactApi;
