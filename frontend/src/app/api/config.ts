import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getToken } from '../../utils/session';

export const ITags = {
    CONTACT_LIST: 'CONTACT_LIST',
    CONTACT: 'CONTACT',
    ORGANIZATION_LIST: 'ORGANIZATION_LIST',
    ORGANIZATION: 'ORGANIZATION',
    CONVERSATION_LIST: 'CONVERSATION_LIST',
    CONVERSATION: 'CONVERSATION',
  } as const;

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_API_URL,
        prepareHeaders: (headers) => {
            const token = getToken()
            if (token) {
                headers.set('Authorization', `Bearer ${token}`);
            }
            return headers;
        },
    }),
    endpoints: (_builder) => ({}),
    tagTypes: Object.values(ITags) as ITagsType[],
});

export type ITagsType = keyof typeof ITags; 