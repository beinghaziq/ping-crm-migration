import { useState } from 'react';

import Sidebar from '../components/Sidebar';
import Table from '../app/elements/Table';
import { useOrganizations } from '../hooks/organization';
import OrganizationCreateModal from '../components/OrganizationCreateModal';

export default function Organizations() {
    const { organizations } = useOrganizations()
    const [openCreateModal, setOpenCreateModal] = useState(false)
    const columns = ['name', 'city', 'phone'];

    return (
        <div className="flex p-8 space-x-6 bg-white">
            <div className="w-1/4">
                <Sidebar />
            </div>

            <div className="w-3/4">
                <h1 className="text-3xl font-bold mb-4 text-black">Organizations</h1>

                <div className="flex justify-between items-center mb-4">
                    <button className="!bg-blue-400 text-black px-4 py-2 rounded" onClick={() => setOpenCreateModal(true)}>Create Organization</button>
                </div>
                <OrganizationCreateModal isOpen={openCreateModal} onClose={() => setOpenCreateModal(false)} />
                {organizations && <Table columns={columns} data={organizations} />}
            </div>
        </div>
    );
}
