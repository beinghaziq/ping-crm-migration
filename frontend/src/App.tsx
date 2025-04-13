import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import './App.css'
import Organizations from './pages/Organizations';
import Contacts from './pages/Contacts';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/organizations" element={<Organizations />} />
      <Route path="/contacts" element={<Contacts />} />
    </Routes>
  );
}