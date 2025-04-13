export interface ContactCreateInput {
    first_name: string;
    last_name: string;
    city: string;
    address: string;
    state: string;
    postal_code: string;
    phone: string;
    email: string;
    organization_id: string;
}

export interface ContactUpdateInput {
    first_name: string;
    last_name: string;
    city: string;
    address: string;
    state: string;
    postal_code: string;
    phone: string;
    email: string;
    organization_id: string;
}

export interface Contact extends ContactCreateInput {
    id: number;
    created_at?: string;
    updated_at?: string;
}