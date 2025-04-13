import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div className="flex">
      <div className="w-64 bg-gray-800 text-white min-h-screen">
        <div className="flex justify-center py-4">
          <h2 className="text-2xl font-bold">PingCRM</h2>
        </div>
        <ul className="space-y-4 p-4">
          <li>
            <Link
              to="/"
              className="block py-2 px-4 rounded hover:bg-blue-600"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/organizations"
              className="block py-2 px-4 rounded hover:bg-blue-600"
            >
              Organizations
            </Link>
            <Link
              to="/contacts"
              className="block py-2 px-4 rounded hover:bg-blue-600"
            >
              Contacts
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
