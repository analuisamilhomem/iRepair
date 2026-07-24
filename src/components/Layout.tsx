import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <nav>
        <Link to="/">Dashboard</Link>
        {' | '}
        <Link to="/clients">Clientes</Link>
        {' | '}
        <Link to="/service-orders">Ordens de Serviço</Link>
      </nav>

      <Outlet />
    </div>
  );
};

export default Layout;