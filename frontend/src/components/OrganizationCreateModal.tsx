import React, { useState } from 'react';
import { useOrganizations } from '../hooks/organization';

type OrganizationCreateModalProps = {
    isOpen: boolean;
    onClose: () => void;
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

const initialState = <T extends readonly string[]>(fields: T) =>
    fields.reduce((acc, field) => ({ ...acc, [field]: '' }), {} as Record<T[number], string>);

export default function OrganizationCreateModal({
    isOpen,
    onClose,
}: OrganizationCreateModalProps) {
    const [organizationData, setOrganizationData] = useState(() =>
        initialState(organizationFields)
    );

    const { createOrganization } = useOrganizations();

    const handleChange = <T extends Record<string, string>>(
        setter: React.Dispatch<React.SetStateAction<T>>
    ) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setter((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async () => {
        try {
            await createOrganization(organizationData);
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
                className="w-full p-3 border border-gray-300 text-gray-800 rounded-md focus:ring-2 focus:ring-blue-500"
            />
        ));

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-xl p-8">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-semibold text-gray-800">Create Organization</h2>
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-700 text-xl"
                    >
                        &times;
                    </button>
                </div>

                <div className="space-y-6">
                    <FormSection title="Organization Info">
                        {renderInputs(organizationFields, organizationData, setOrganizationData)}
                    </FormSection>
                </div>

                <div className="flex justify-end mt-8 space-x-4">
                    <button
                        onClick={handleSubmit}
                        className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
                    >
                        Submit
                    </button>
                    <button
                        onClick={onClose}
                        className="bg-gray-200 text-gray-100 px-6 py-2 rounded-md hover:bg-gray-300 transition"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
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
            <h3 className="text-lg font-medium text-gray-700 mb-4">{title}</h3>
            <div className="space-y-4">{children}</div>
        </div>
    );
}

function formatLabel(field: string) {
    return field
        .replace(/_/g, ' ')
        .replace(/\b\w/g, (char) => char.toUpperCase());
}
