import { useEffect, useState } from 'react';
import { api } from '../services/api';
import type { ServiceOrder, NewServiceOrder } from '../types/service-order';
import type { Client } from '../types/client';

const ServiceOrders = () => {
  const [orders, setOrders] = useState<ServiceOrder[]>([]);
  const [clients, setClients] = useState<Client[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [newOrder, setNewOrder] = useState<NewServiceOrder>({
    clientId: 0,
    device: '',
    issue: '',
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const ordersResponse = await api.get('/service-orders');
        setOrders(ordersResponse.data);

        const clientsResponse = await api.get('/clients');
        setClients(clientsResponse.data);
      } catch (e) {
        setError('Não foi possível carregar os dados.');
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  function handleChange(event: any) {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;
    setNewOrder({ ...newOrder, [fieldName]: fieldValue });
  }

  async function handleDeleteOrder(id: number) {
    try {
      await api.delete(`/service-orders/${id}`);
      setOrders(orders.filter((order) => order.id !== id));
    } catch (e) {
      setError('Não foi possível remover a ordem de serviço.');
    }
  }

  async function handleCreateOrder() {
    try {
      const response = await api.post('/service-orders', {
        ...newOrder,
        clientId: Number(newOrder.clientId),
      });
      setOrders([...orders, response.data]);
      setNewOrder({ clientId: 0, device: '', issue: '' });
    } catch (e) {
      setError('Não foi possível cadastrar a ordem de serviço.');
    }
  }

  if (isLoading) return <p>Carregando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1 className='text-2xl font-bold px-3 py-5'>Ordens de Serviço</h1>

      <div className="flex flex-wrap px-3 gap-2 mb-4">
        <select
          name="clientId"
          value={newOrder.clientId}
          onChange={handleChange}
          className="border rounded px-4 py-2"
        >
          <option value={0} disabled>Selecione um cliente</option>
          {clients.map((client) => (
            <option key={client.id} value={client.id}>
              {client.name}
            </option>
          ))}
        </select>
        <input
          name="device"
          placeholder="Aparelho"
          value={newOrder.device}
          onChange={handleChange}
          className="border rounded px-4 py-2"
        />
        <input
          name="issue"
          placeholder="Defeito"
          value={newOrder.issue}
          onChange={handleChange}
          className="border rounded px-4 py-2"
        />
        <button
          type="button"
          onClick={handleCreateOrder}
          className="bg-green-500 border border-green-700 text-white px-4 py-2 rounded"
        >
          Salvar
        </button>
      </div>

      <ul className="flex flex-wrap px-3 gap-4 mt-4">
        {orders.map((order) => (
          <li
            key={order.id}
            className="bg-white border rounded-lg shadow-md px-6 py-4 w-64"
          >
            <p>{order.device}</p>
            <p>{order.issue}</p>
            <p>{order.status}</p>
            <button
              type="button"
              onClick={() => handleDeleteOrder(order.id)}
              className="bg-red-500 border border-red-700 text-white px-2 py-1 text-sm rounded mt-2"
            >
              Deletar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceOrders;