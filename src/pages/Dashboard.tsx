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
      <h1>Dashboard</h1>
      <ul>
        {orders.map((order) => (
          <li key={order.id}>
            {order.device} — {order.issue} ({order.status})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;