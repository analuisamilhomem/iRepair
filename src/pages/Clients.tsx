import { useEffect, useState } from 'react';
import { api } from '../services/api';
import type { Client, NewClient } from '../types/client';

const Clients = () => {
  const [clients, setClients] = useState<Client[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [newClient, setNewClient] = useState<NewClient>({
    name: '',
    phone: '',
    email: '',
  });

  useEffect(() => {
    async function fetchClients() {
      try {
        const response = await api.get('/clients');
        setClients(response.data);
      } catch (e) {
        setError('Não foi possível carregar os clientes.');
      } finally {
        setIsLoading(false);
      }
    }

    fetchClients();
  }, []);

  function handleChange(event: any) {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;
    setNewClient({ ...newClient, [fieldName]: fieldValue });
  }

  async function handleDeleteClient(id: number) {
    try {
      await api.delete(`/clients/${id}`);
      setClients(clients.filter((client) => client.id !== id));
    } catch (e) {
      setError('Não foi possível remover o cliente.');
    }
  }

  async function handleCreateClient() {
    try {
      const response = await api.post('/clients', newClient);
      setClients([...clients, response.data]);
      setNewClient({ name: '', phone: '', email: '' });
    } catch (e) {
      setError('Não foi possível cadastrar o cliente.');
    }
  }

  if (isLoading) return <p>Carregando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Clientes</h1>

      <div>
        <input
          name="name"
          placeholder="Nome"
          value={newClient.name}
          onChange={handleChange}
        />
        <input
          name="phone"
          placeholder="Telefone"
          value={newClient.phone}
          onChange={handleChange}
        />
        <input
          name="email"
          placeholder="Email"
          value={newClient.email}
          onChange={handleChange}
        />
        <button
          type="button"
          onClick={handleCreateClient}
          className="bg-green-500 border border-green-700 text-white px-4 py-2 rounded" >
          Salvar
        </button>
      </div>

     <ul className="flex flex-wrap gap-4 mt-4">
        {clients.map((client) => (
          <li
            key={client.id}
            className="bg-white border rounded-lg shadow-md px-6 py-4 w-64"
          >
            <p>{client.name}</p>
            <p>{client.phone}</p>
            <p>{client.email}</p>
            <button
              type="button"
              onClick={() => handleDeleteClient(client.id)}
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

export default Clients;