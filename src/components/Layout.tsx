import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <h1 className="bg-[#0d5c63] text-center px-4 py-4 text-4xl font-bold text-white">
        iRepair
      </h1>

      <nav className="flex justify-around items-center bg-[#0d5c63] py-4">
        <Link to="/" className="text-white font-bold">Dashboard</Link>
        <Link to="/clients" className="text-white font-bold">Clientes</Link>
        <Link to="/service-orders" className="text-white font-bold">Ordens de Serviço</Link>
      </nav>

      <Outlet />
    </div>
  );
};

export default Layout;