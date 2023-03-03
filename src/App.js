import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import DashBoard from './router/dashboard';
import Client from './router/client';
import { useSelector } from 'react-redux';
import Cart from './pages/Cart';

function App() {

  const roles =  useSelector((state) => state.user?.user?.role)

  return (
    <Routes>
      <Route path='/*' element={roles === "admin" ? <Navigate to="/dashboard/" replace />: <Client />} />
      <Route path='/dashboard/*' element={roles === "admin" ? <DashBoard /> : <Client />} />
      <Route path='/cart' element={<Cart />} />
    </Routes>
  )
}

export default App;
