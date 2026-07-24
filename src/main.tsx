import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Layout from './components/Layout.tsx';
import Dashboard from './pages/Dashboard.tsx';
import Clients from './pages/Clients.tsx';
import ServiceOrders from './pages/ServiceOrders.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="clients" element={<Clients />} />
          <Route path="service-orders" element={<ServiceOrders />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);