import { baseApi } from './config';

export const sessionApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation<{ access_token: string; token_type: string }, { username: string; password: string }>({
            query: ({ username, password }) => ({
                url: '/login',
                method: 'POST',
                body: new URLSearchParams({
                    username,
                    password,
                }),
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            }),
        }),
    })
});

export const {
    useLoginMutation,
} = sessionApi;
