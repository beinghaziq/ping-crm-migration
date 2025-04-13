export interface OrganizationCreateInput {
    name: string;
    city: string;
    address: string;
    state: string;
    postal_code: string;
    phone: string;
    email: string;
}

export interface OrganizationUpdateInput {
    name: string;
    city: string;
    address: string;
    state: string;
    postal_code: string;
    phone: string;
    email: string;
}

export interface Organization extends OrganizationCreateInput {
    id: number;
    created_at?: string;
    updated_at?: string;
}