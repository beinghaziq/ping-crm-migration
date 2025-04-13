import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLoginMutation } from '../app/api/sessionApi';
import { DEFAULT_PASSWORD, DEFAULT_USERNAME, saveToken } from '../utils/session';

export default function Home() {
  const navigate = useNavigate();
  const [username, setUsername] = useState(DEFAULT_USERNAME);
  const [password, setPassword] = useState(DEFAULT_PASSWORD);
  const [login, { isLoading, error }] = useLoginMutation();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const { access_token } = await login({ username, password }).unwrap();
      saveToken(access_token)

      navigate('/organizations');
    } catch (err) {
      console.error('Login failed:', err);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <div className="mb-4">
          <label className="block mb-1 text-sm font-medium">Username</label>
          <input
            type="text"
            value={username || DEFAULT_USERNAME}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div className="mb-6">
          <label className="block mb-1 text-sm font-medium">Password</label>
          <input
            type="password"
            value={password || DEFAULT_PASSWORD}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        {error && <p className="text-red-500 text-sm mb-4">Login failed</p>}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full !bg-blue-600 text-white py-2 rounded-md !hover:bg-blue-700 transition"
        >
          {isLoading ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </div>
  );
}
