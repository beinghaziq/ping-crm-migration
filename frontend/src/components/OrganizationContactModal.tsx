import React, { useState } from 'react';
import { Modal } from 'flowbite-react';
import { useOrganizations } from '../hooks/organization';

type OrganizationContactModalProps = {
    isOpen: boolean;
    onClose: () => void;
    onSuccess?: () => void;
};

const organizationFields = [
    'name',
    'city',
    'address',
    'state',
    'postal_code',
    'phone',
    'email',
] as const;

const contactFields = [
    'first_name',
    'last_name',
    'city',
    'address',
    'state',
    'postal_code',
    'phone',
    'email',
] as const;

const initialState = <T extends readonly string[]>(fields: T) =>
    fields.reduce((acc, field) => ({ ...acc, [field]: '' }), {} as Record<T[number], string>);

export default function OrganizationContactModal({
    isOpen,
    onClose,
    onSuccess,
}: OrganizationContactModalProps) {
    const [organizationData, setOrganizationData] = useState(() =>
        initialState(organizationFields)
    );
    const [contactData, setContactData] = useState(() => ({
        ...initialState(contactFields),
        organization_id: '',
    }));

    const { organizations, createOrganization, createContact } = useOrganizations()

    const handleChange = <T extends Record<string, string>>(
        setter: React.Dispatch<React.SetStateAction<T>>
    ) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setter((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async () => {
        try {
            const org = await createOrganization(organizationData);
            await createContact({ ...contactData, organization_id: org.id });
            onSuccess?.();
            onClose();
        } catch (err) {
            console.error('Form submission failed:', err);
        }
    };

    const renderInputs = <T extends Record<string, string>>(
        fields: readonly (keyof T)[],
        state: T,
        setter: React.Dispatch<React.SetStateAction<T>>
    ) =>
        fields.map((field) => (
            <input
                key={field as string}
                name={field as string}
                type="text"
                value={state[field]}
                onChange={handleChange(setter)}
                placeholder={formatLabel(field as string)}
                className="w-full p-2 border border-gray-300 rounded"
            />
        ));

    return (
        <Modal show={isOpen} onClose={onClose}>
            <Modal.Header>Add Organization & Contact</Modal.Header>
            <Modal.Body>
                <div className="space-y-4">
                    <FormSection title="Organization Info">
                        {renderInputs(organizationFields, organizationData, setOrganizationData)}
                    </FormSection>

                    <FormSection title="Contact Info">
                        {renderInputs(contactFields, contactData, setContactData)}

                        <select
                            name="organization_id"
                            value={contactData.organization_id}
                            onChange={handleChange(setContactData)}
                            className="w-full p-2 border border-gray-300 rounded"
                        >
                            <option value="">Select Organization</option>
                            {organizations?.map((org: any) => (
                                <option key={org.id} value={org.id}>
                                    {org.name}
                                </option>
                            ))}
                        </select>
                    </FormSection>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <button
                    onClick={handleSubmit}
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                    Submit
                </button>
                <button
                    onClick={onClose}
                    className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300"
                >
                    Cancel
                </button>
            </Modal.Footer>
        </Modal>
    );
}

function FormSection({
    title,
    children,
}: {
    title: string;
    children: React.ReactNode;
}) {
    return (
        <div>
            <h3 className="text-lg font-semibold mb-2">{title}</h3>
            <div className="space-y-2">{children}</div>
        </div>
    );
}

function formatLabel(field: string) {
    return field
        .replace(/_/g, ' ')
        .replace(/\b\w/g, (char) => char.toUpperCase());
}
