import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Organizations from './pages/Organizations';
import PrivateRoute from './components/PrivateRoutes';
import Contacts from './pages/Contacts';
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/organizations"
        element={
          <PrivateRoute>
            <Organizations />
          </PrivateRoute>
        }
      />
      <Route
        path="/contacts"
        element={
          <PrivateRoute>
            <Contacts />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}

export default App;
