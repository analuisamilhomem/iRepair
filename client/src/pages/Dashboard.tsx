import { useEffect, useState } from 'react';
import { api } from '../services/api';
import type { ServiceOrder } from '../types/service-order';

const Dashboard = () => {
  const [orders, setOrders] = useState<ServiceOrder[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchOrders() {
      try {
        const response = await api.get('/service-orders');
        setOrders(response.data);
      } catch (e) {
        setError('Não foi possível carregar as ordens de serviço.');
      } finally {
        setIsLoading(false);
      }
    }

    fetchOrders();
  }, []);

  if (isLoading) return <p>Carregando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1 className='text-2xl font-bold px-3 py-5'>Dashboard</h1>
      <ul className="px-3 flex flex-wrap gap-4">
        {orders.map((order) => (
          <li
            key={order.id}
            className="bg-white border rounded-lg shadow-md px-6 py-4 w-64"
          >
            <p>{order.device}</p>
            <p>{order.issue}</p>
            <p className={
                    order.status === 'open'
                    ? 'bg-green-300 inline px-1' : order.status === 'in_progress'
                    ? 'bg-blue-300 inline px-1' : order.status === 'done'
                    ? 'bg-red-300 inline px-1'   : ''
                }
                >
                {order.status}
                </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;