import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

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
        baseUrl: 'http://localhost:8000',
        prepareHeaders: (headers) => {
            const token = localStorage.getItem('authToken');
            if (token) {
                headers.set('Authorization', `Bearer ${token}`);
            }
            return headers;
        },
    }),
    endpoints: (builder) => ({}),
    tagTypes: Object.values(ITags) as ITagsType[],
});

export type ITagsType = keyof typeof ITags; 